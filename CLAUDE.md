# CLAUDE.md - Work Notes Obsidian Vault

## Vault Overview

This is a professional work journal and project documentation vault. It tracks active software projects, meeting notes, technical specs, and daily work entries.

## Active Projects

| Project | Path | Description |
|---------|------|-------------|
| **Project Name** | `Projects/Project Name/` | Brief description of the project |

<!-- Add your active projects above. One row per project. -->

## Vault Structure

```
Work Notes/
├── Work Journal/          # Daily work entries (YYYY-MM-DD.md)
│   ├── Weekly/            # Weekly review notes (YYYY-Www.md)
│   └── Monthly/           # Monthly review notes (YYYY-MM.md)
├── Projects/              # Active project documentation
│   └── Archive/           # Completed projects
├── Templates/             # Templater templates (configured in settings)
├── Contacts/              # People notes (one per person, tagged type/contact)
├── TODOs/                 # TODO tracking folder
├── Images/                # Attachments
└── Custom Setup Stuff/    # Setup guides and how-tos
```

## Obsidian Configuration

- **Theme**: Obsidian gruvbox
- **CSS Snippet**: narrow-margins (1600px max-width centered)
- **Template folder**: `Templates/` (date format: YYYY-MM-DD)
- **Attachment path**: `./` (same folder as note)
- **Settings**: No tab indentation, auto-update links, full-width lines, no delete prompt

## Installed Plugins

| Plugin | Purpose |
|--------|---------|
| Obsidian Tasks | Task tracking with due dates, priorities, recurrence, queries |
| Templater | Advanced templates with variables, dates, scripting |
| Mermaid Tools | Diagram toolbar for Mermaid.js |
| Insta TOC | Auto table of contents |
| Dataview | Query engine for structured data from notes |
| Calendar | Sidebar calendar widget for daily/weekly note navigation |
| QuickAdd | Quick capture to daily note, templated note creation |
| Periodic Notes | Weekly and monthly review notes with templates |
| Tag Wrangler | Rename, merge, manage tags via right-click |
| Homepage | Opens Task Dashboard on startup |
| Omnisearch | Relevance-ranked fuzzy search across vault |

See [[Plugin Recommendations]] for future plugin ideas.

## Key Obsidian Conventions

### Links and Embeds
- `[[Note Name]]` - internal link; `[[Note Name|Display]]` - aliased link
- `[[Note#Heading]]` - link to heading; `![[Note]]` - embed/transclude
- `#tag`, `#nested/tag` - inline tags; `tags:` in YAML frontmatter

### Tasks Plugin Syntax
- `- [ ] Task 📅 2026-03-15` - due date
- `- [ ] Task ⏳ 2026-03-14` - scheduled date
- `- [ ] Task 🛫 2026-03-10` - start date
- `- [ ] Task 🔁 every week` - recurrence
- Priority: `🔺` highest, `⏫` high, `🔼` medium, `🔽` low, `⏬` lowest
- Query block: ` ```tasks ... ``` ` with filters like `not done`, `due before tomorrow`, `sort by due`

### Templater Syntax
- `<% tp.date.now("YYYY-MM-DD") %>` - current date
- `<% tp.file.title %>` - file name
- `<% tp.date.now("YYYY-MM-DD", -1) %>` - yesterday
- `<%* statement %>` - execute without output

### Dataview Syntax
- DQL in ` ```dataview ... ``` ` blocks
- Query types: TABLE, LIST, TASK, CALENDAR
- `FROM "folder"`, `FROM #tag`, `WHERE condition`, `SORT field`
- Inline fields: `Key:: Value` anywhere in note body
- Inline query: `` `= expression` ``

### Callouts
```
> [!note] Title     > [!warning] Title    > [!tip] Title
> [!info] Title     > [!todo] Title       > [!question] Title
```

### Frontmatter
```yaml
---
date: 2026-03-09
tags: [type/daily, project/my-project]
status: active
---
```

## File Naming Conventions
- Work journal: `YYYY-MM-DD.md` in `Work Journal/`
- Weekly reviews: `YYYY-Www.md` in `Work Journal/Weekly/`
- Monthly reviews: `YYYY-MM.md` in `Work Journal/Monthly/`
- Project docs: descriptive names in project folders
- Archived work: moved to `Projects/Archive/`

## Editing Guidelines
- When creating new notes, always add YAML frontmatter with at least `date` and `tags`
- Use `[[wikilinks]]` to connect related notes
- Place images in `Images/` or use `./` relative paths
- Use heading hierarchy (H1 for title, H2 for sections, H3 for subsections)
- Keep one H1 per file (the note title)

## Claude as Fallback for Vault Features

When the user asks for a behavior or workflow, prefer Obsidian-native solutions (plugins, Dataview queries, Tasks queries, Templater, etc.) when they work well. But if a plugin or query can't deliver the desired result — whether it's too limited, too complex, or just not worth the setup — fall back on Claude to do the analysis, computation, or organization directly. The user's goal matters more than keeping everything inside Obsidian's plugin ecosystem.

**Example**: Time estimates on tasks use `[est:: 30]` inline fields. Rather than building a complex Dataview query to bin tasks into a time window, the user can just ask Claude "I have 2 hours, what can I get done?" and Claude will read the tasks, do the math, and suggest a plan.

## Maintenance Rule: Getting Started.md
**IMPORTANT**: Whenever changes are made to the vault that affect the user's workflow — new templates, new plugins, new folders, new conventions, updated commands, etc. — always update `Getting Started.md` to reflect those changes. This file is the user's quick-reference guide and must stay current.
