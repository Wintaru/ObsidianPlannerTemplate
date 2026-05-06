module.exports = async (params) => {
    const { app, quickAddApi } = params;
    const vault = app.vault;

    const everything = vault.getAllLoadedFiles();

    // Find project folders (top-level under Projects/, not Archive)
    const projectFolders = [];
    for (const f of everything) {
        if (Array.isArray(f.children) &&
            f.path.startsWith("Projects/") &&
            !f.path.startsWith("Projects/Archive") &&
            f.path !== "Projects" &&
            f.path.split("/").length === 2) {
            projectFolders.push(f.path);
        }
    }

    if (projectFolders.length === 0) {
        new Notice("No projects found to archive.");
        return;
    }

    const displayNames = projectFolders.map((p) => p.replace("Projects/", ""));
    const chosen = await quickAddApi.suggester(displayNames, projectFolders);
    if (!chosen) return;

    const folderName = chosen.replace("Projects/", "");
    const targetPath = `Projects/Archive/${folderName}`;

    const doArchive = await quickAddApi.yesNoPrompt(
        "Archive Project",
        `Move "${folderName}" to Projects/Archive/?`
    );
    if (!doArchive) return;

    // Collect files to move
    const filesToMove = [];
    for (const f of everything) {
        if (Array.isArray(f.children)) continue;
        if (f.path.startsWith(chosen + "/")) {
            filesToMove.push(f);
        }
    }

    if (filesToMove.length === 0) {
        new Notice(`No files found in ${chosen}.`);
        return;
    }

    // Collect all unique target subdirectories, sorted by depth so parents are created first
    const targetDirs = new Set();
    for (const file of filesToMove) {
        const newPath = file.path.replace(chosen, targetPath);
        const dir = newPath.substring(0, newPath.lastIndexOf("/"));
        // Add this dir and all its parent dirs up to the archive root
        let current = dir;
        while (current.length > targetPath.length) {
            targetDirs.add(current);
            current = current.substring(0, current.lastIndexOf("/"));
        }
        targetDirs.add(targetPath);
    }

    // Sort by path depth (shallowest first) so parent folders are created before children
    const sortedDirs = [...targetDirs].sort((a, b) => a.split("/").length - b.split("/").length);

    for (const dir of sortedDirs) {
        const existing = vault.getAbstractFileByPath(dir);
        if (!existing) {
            try {
                await vault.createFolder(dir);
            } catch (e) {
                console.log(`Folder creation note: ${dir}`, e.message);
            }
        }
    }

    // Now move all files
    let movedCount = 0;
    for (const file of filesToMove) {
        const newPath = file.path.replace(chosen, targetPath);
        try {
            await app.fileManager.renameFile(file, newPath);
            movedCount++;
        } catch (e) {
            console.error(`Failed to move ${file.path}:`, e);
        }
    }

    // Remove empty source folders (deepest first so children are deleted before parents)
    const sourceDirs = [];
    for (const f of vault.getAllLoadedFiles()) {
        if (Array.isArray(f.children) && f.path.startsWith(chosen + "/")) {
            sourceDirs.push(f);
        }
    }
    // Also include the top-level project folder itself
    const topFolder = vault.getAbstractFileByPath(chosen);
    if (topFolder) sourceDirs.push(topFolder);

    // Sort deepest first
    sourceDirs.sort((a, b) => b.path.split("/").length - a.path.split("/").length);

    for (const folder of sourceDirs) {
        try {
            await vault.delete(folder, true);
        } catch (e) {
            console.log(`Could not remove folder ${folder.path}:`, e.message);
        }
    }

    // Update hub note status
    const hubNote = vault.getAbstractFileByPath(`${targetPath}/${folderName}.md`);
    if (hubNote) {
        await app.fileManager.processFrontMatter(hubNote, (fm) => {
            fm.status = "archived";
        });
    }

    new Notice(
        `Archived "${folderName}" — moved ${movedCount} files to Projects/Archive/`
    );
};
