---
date: 2026-05-04
tags: [type/reference, type/setup]
---

# Claude Desktop + Obsidian via MCP

This guide connects the Claude desktop app directly to your Obsidian vault using the MCP filesystem server. Once set up, Claude can read and write files in your vault without copy-pasting — useful for translating handwritten notes, generating new notes from prompts, and updating existing content.

**Works with Claude Pro. Does not require an API key.**

---

## What You'll Need

- [ ] [Claude desktop app](https://claude.ai/download) installed (Mac or Windows)
- [ ] Claude Pro subscription
- [ ] [Node.js](https://nodejs.org) installed (LTS version recommended)
- [ ] Your Obsidian vault path (e.g. `~/Documents/MyVault` or the path shown in Obsidian → Settings → About)

To check if Node.js is already installed, open Terminal and run:
```
node --version
```
If you see a version number, you're good. If not, download and install it from nodejs.org before continuing.

---

## Step 1 — Find the Claude Desktop Config File

The Claude desktop app reads MCP server configuration from a JSON file on your computer.

**Mac:**
```
~/Library/Application Support/Claude/claude_desktop_config.json
```

**Windows:**
```
%APPDATA%\Claude\claude_desktop_config.json
```

If the file doesn't exist yet, create it (the folder should already be there after installing Claude desktop).

**Mac shortcut:** Open Terminal and run:
```
open ~/Library/Application\ Support/Claude/
```
This opens the folder in Finder. Look for `claude_desktop_config.json` — create it if it's missing.

---

## Step 2 — Add the Filesystem MCP Server

Open `claude_desktop_config.json` in any text editor (TextEdit, VS Code, Notepad, etc.) and paste the following, replacing the vault path with your own:

```json
{
  "mcpServers": {
    "obsidian-vault": {
      "command": "npx",
      "args": [
        "-y",
        "@modelcontextprotocol/server-filesystem",
        "/Users/yourname/path/to/your/vault"
      ]
    }
  }
}
```

**Finding your vault path:**
- In Obsidian: Settings → About → scroll down to see the vault path
- On Mac you can also right-click the vault folder in Finder → Get Info → copy the path shown under "Where"

**Example paths:**
```
Mac:     /Users/jane/Documents/WorkNotes
Windows: C:\Users\jane\Documents\WorkNotes
```

If the file already has content (other MCP servers), add just the `"obsidian-vault"` block inside the existing `"mcpServers"` object — don't duplicate the outer braces.

---

## Step 3 — Restart Claude Desktop

Fully quit Claude (don't just close the window — use Cmd+Q on Mac or right-click the taskbar icon on Windows and choose Quit). Then reopen it.

To confirm MCP is connected: look for a small hammer/tools icon in the Claude chat interface. Clicking it should show `obsidian-vault` listed as an available tool.

---

## Step 4 — Test It

Ask Claude something simple to verify it can see your vault:

> "List the files in my vault's Templates folder."

Claude should respond with the actual file names. If it errors, double-check the vault path in the config — a typo there is the most common issue.

---

## Using It: Handwritten Notes → Obsidian

Once connected, the workflow for translating a handwritten note is:

1. Take a photo of the handwritten note (phone camera, iPad, scanner)
2. Transfer the photo to your computer (AirDrop, iCloud, cable, email)
3. Open Claude desktop and attach the photo using the paperclip/attachment button
4. Use a prompt like one of these:

**Basic conversion:**
> "Transcribe this handwritten note into clean markdown. Fix any spelling errors and organize it with headings where appropriate."

**Create a new vault note:**
> "Transcribe this handwritten note into markdown and save it as a new file in my vault's Work Journal folder. Name it using today's date in YYYY-MM-DD format. Add frontmatter with today's date and the tag `type/daily`."

**Meeting note:**
> "This is a handwritten meeting note. Transcribe it, organize it into sections (Attendees, Discussion, Action Items), and save it as a new file in my vault's Work Journal folder with today's date as the filename. Use my Meeting Note frontmatter format."

**Add to an existing note:**
> "Transcribe this handwritten note and append the content to the end of my vault's daily note for today."

Claude will read and write files directly — no copy-paste required.

---

## Giving Claude Context About Your Vault

If your vault has a `CLAUDE.md` file in the root (this template includes one), Claude will use it to understand your folder structure, frontmatter conventions, and naming rules. You can tell Claude to read it explicitly:

> "Before we start, read the CLAUDE.md file in my vault root so you understand how my vault is organized."

Or ask it to follow your templates:
> "Transcribe this note and save it using the same frontmatter format as my Templates/Meeting Note.md file."

---

## Troubleshooting

**Hammer icon doesn't appear in Claude:**
- Make sure you fully quit and relaunched Claude after saving the config
- Check the JSON is valid (no missing commas or mismatched braces) — paste it into [jsonlint.com](https://jsonlint.com) to verify

**"Cannot find vault" or permission errors:**
- Confirm the path in the config exactly matches the real vault path (case-sensitive on Mac)
- Make sure the vault folder exists and isn't inside a location Claude can't access (some network drives can cause issues)

**npx errors on first run:**
- Node.js may need to download the MCP package the first time — give it 30–60 seconds
- If it fails, try installing the package manually first: `npm install -g @modelcontextprotocol/server-filesystem`

---

## Limiting Vault Access (Optional)

If you want Claude to only access specific folders rather than the whole vault, list multiple paths in the args:

```json
"args": [
  "-y",
  "@modelcontextprotocol/server-filesystem",
  "/path/to/vault/Work Journal",
  "/path/to/vault/Projects"
]
```

Claude will only be able to read and write within those folders.
