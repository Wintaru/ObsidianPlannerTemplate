<%*
const year = tp.date.now("YYYY");
const month = tp.date.now("MM");
const title = tp.file.title;
const targetPath = `Work Journal/${year}/${month}/${title}`;
const existingFile = app.vault.getAbstractFileByPath(targetPath + ".md");
if (existingFile) {
    // Already exists — open it and delete this duplicate
    await app.workspace.getLeaf().openFile(existingFile);
    await app.vault.delete(tp.config.target_file);
    return;
}
await tp.file.move(targetPath);
-%>
---
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - type/daily
---

# <% tp.date.now("dddd, MMMM Do YYYY") %>

<< [[Work Journal/<% tp.date.now("YYYY", -1) %>/<% tp.date.now("MM", -1) %>/<% tp.date.now("YYYY-MM-DD", -1) %>|<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[Work Journal/<% tp.date.now("YYYY", 1) %>/<% tp.date.now("MM", 1) %>/<% tp.date.now("YYYY-MM-DD", 1) %>|<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

## Tasks
- [ ]

## Work Log

### What I worked on

### Blockers / Follow-ups

## Notes

