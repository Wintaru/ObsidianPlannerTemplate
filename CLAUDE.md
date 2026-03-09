# CLAUDE.md - Work Notes Obsidian Vault

## Vault Overview

This is **jdonner's** professional work journal and project documentation vault, synced via OneDrive (DPLO365). It tracks multiple enterprise software projects, meeting notes, technical specs, and daily work entries.

## Active Projects

| Project | Path | Description |
|---------|------|-------------|
| **Tenzing** | `Projects/Tenzing/` | Strategic roadmap/change management platform; GitHub integration for Jira/DevOps replacement |
| **Social Assurance** | `Projects/Social Assurance/` | Referral platform; DevOps migration (BitBucket→GitHub, CI/CD, Docker/Kamal) |
| **Haberfeld** | `Projects/Haberfeld/` | Financial services (Plus One referral platform); SSL cert migration, reCAPTCHA upgrade, bug fixes |
| **Settlement Streams** | `Projects/Settlement Streams/` | Parent org for financial services projects; shared infrastructure |
| **Teammates** | `Projects/Teammates/` | Mentorship matching app; recent production deployment with jQuery upgrade |

## Vault Structure

```
Work Notes/
├── Work Journal/          # Daily work entries (YYYY-MM-DD.md)
│   ├── Weekly/            # Weekly review notes (YYYY-Www.md)
│   └── Monthly/           # Monthly review notes (YYYY-MM.md)
├── Projects/              # Active project documentation
│   ├── Tenzing/           # + GitHub Integration subfolder
│   ├── Haberfeld/         # Plus One referral platform (financial services)
│   ├── Social Assurance/  # + DevOps/, Mind Mixer/
│   ├── Settlement Streams/# Parent org; cert migration checklist
│   ├── Teammates/
│   └── Archive/           # Completed projects (Assurity, old quarterly reviews)
├── Templates/             # Templater templates (configured in settings)
├── Contacts/              # People notes (one per person, tagged type/contact)
├── TODOs/                 # TODO tracking folder
├── Images/                # Attachments
├── AI Notes.md
├── Quarterly Communication Notes.md
└── Markdown Cheat Sheet.md
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
tags: [type/daily, project/tenzing]
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

## Maintenance Rule: Getting Started.md
**IMPORTANT**: Whenever changes are made to the vault that affect the user's workflow — new templates, new plugins, new folders, new conventions, updated commands, etc. — always update `Getting Started.md` to reflect those changes. This file is the user's quick-reference guide and must stay current.
