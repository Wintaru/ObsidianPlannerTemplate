# Obsidian Work Vault Template

A ready-to-use [Obsidian](https://obsidian.md) vault for **work journaling, project tracking, task management, and meeting notes**. Clone it, open it in Obsidian, and start working immediately -- all plugins, templates, and automations are pre-configured.

## What's Included

- **6 templates** -- Daily Note, Weekly Review, Monthly Review, Meeting Note, Project Note, Contact
- **Task Dashboard** -- homepage that shows overdue, due today, and upcoming tasks
- **QuickAdd commands** -- capture tasks and work logs without leaving your current note
- **11 community plugins** -- pre-configured and ready to go
- **Gruvbox theme** with a clean, centered layout
- **Archive automation** -- one-command project archiving
- **Reference guides** -- Obsidian syntax, Markdown cheat sheet, plugin recommendations

## Quick Start

1. **Download Obsidian** from [obsidian.md](https://obsidian.md) (free for personal use)
2. **Clone or download** this repository
3. **Open as vault**: In Obsidian, click "Open folder as vault" and select this folder
4. **Trust plugins**: When prompted, click "Trust author and enable plugins" -- this loads the pre-configured community plugins
5. **Start working**: The Task Dashboard opens automatically. Hit `Cmd+P` (Mac) or `Ctrl+P` (Windows/Linux) and type "daily note" to create today's journal entry.

> **Note**: Community plugins are defined in the config but their code (`main.js`) is not included. Obsidian will automatically download them when you first open the vault and enable community plugins.

## Features & How to Use Them

### Daily Notes

Your daily journal is the core of this vault. Each day gets its own note with sections for tasks, a work log, and free-form notes.

**How to use:**
- `Cmd+P` > "Open today's daily note" -- creates today's entry from the template
- Or click any date in the **Calendar sidebar** (right panel)
- Notes are auto-organized into `Work Journal/YYYY/MM/` folders
- Navigation links (`<< yesterday | tomorrow >>`) appear at the top of each note

**What's in the template:**
```
## Tasks
- [ ]

## Work Log
### What I worked on
### Blockers / Follow-ups

## Notes
```

### Task Management

Tasks use the **Obsidian Tasks** plugin. Add tasks anywhere in the vault and they'll appear on your Task Dashboard.

**Creating tasks:**
```markdown
- [ ] Basic task
- [ ] Task with due date 📅 2025-06-15
- [ ] Urgent task 📅 2025-06-10 ⏫
- [ ] Weekly standup 🔁 every weekday 📅 2025-06-10
```

**Priority emojis** (type the word and auto-suggest kicks in):
| Emoji | Priority |
|-------|----------|
| `🔺` | Highest |
| `⏫` | High |
| `🔼` | Medium |
| `🔽` | Low |
| `⏬` | Lowest |

**Date emojis:**
| Emoji | Meaning |
|-------|---------|
| `📅` | Due date |
| `⏳` | Scheduled date |
| `🛫` | Start date |

**Task Dashboard**: Opens on startup. Shows overdue tasks, due today, due this week, and all open tasks. Tasks must include the `#track` tag to appear on the dashboard.

**Tip**: Use `Cmd+P` > "Tasks: Create or edit task" for a dialog that builds the task syntax for you.

### Quick Capture (QuickAdd)

Capture thoughts without leaving your current note:

| Command (`Cmd+P`) | What it does |
|---|---|
| **QuickAdd: Quick Task** | Prompts for text, adds it as a task under `## Tasks` in today's daily note |
| **QuickAdd: Quick Log** | Prompts for text, appends it under `### What I worked on` in today's daily note |
| **QuickAdd: New Meeting Note** | Creates a meeting note from template, lets you pick which project folder |
| **QuickAdd: Archive Project** | Moves an entire project folder to `Projects/Archive/` |

### Weekly & Monthly Reviews

**Weekly review** (`Cmd+P` > "Periodic Notes: Open weekly note", or click a week number in the Calendar sidebar):
- Sections for wins, challenges, key decisions
- Auto-queries: tasks completed this week + tasks due next week

**Monthly review** (`Cmd+P` > "Periodic Notes: Open monthly note"):
- Project status updates, accomplishments, goals for next month
- Auto-query: all tasks completed this month

### Meeting Notes

`Cmd+P` > "QuickAdd: New Meeting Note"

Each meeting note includes:
- Frontmatter for date, attendees, and project
- Sections: Agenda, Discussion Notes, Action Items, Decisions Made
- Action items are tasks -- they show up on your Task Dashboard

### Project Documentation

`Cmd+P` > "Templater: Create new note from template" > choose **Project Note**

Organize projects in the `Projects/` folder. Each project can have its own subfolder with related docs. When a project is done, use the **Archive Project** QuickAdd command to move it to `Projects/Archive/`.

### Contacts / People Notes

`Cmd+P` > "Templater: Create new note from template" > choose **Contact**

Save contact notes in `Contacts/`. Each note tracks role, projects, email, and meeting history. When you link a person in meeting notes or daily entries (`[[Person Name]]`), backlinks automatically build a history of every interaction.

### Linking & Knowledge Building

This is what makes Obsidian powerful -- connect your notes:

```markdown
[[Note Name]]              -- link to another note
[[Note Name|display text]] -- link with custom label
[[Note Name#Heading]]      -- link to a specific section
![[Note Name]]             -- embed another note inline
#tag or #project/name      -- searchable tags
```

**Tips:**
- Link liberally -- mention a project? Write `[[Project Name]]`. A person? `[[Their Name]]`. Backlinks accumulate automatically.
- Use `#project/name` tags for filtering and searching
- Open the **Graph View** (`Cmd+P` > "Open graph view") to see your knowledge network

### Search

| Method | How |
|--------|-----|
| **Quick switcher** | `Cmd+O` -- fuzzy-find any note by name |
| **Full-text search** | `Cmd+Shift+F` -- search across all notes |
| **Omnisearch** | `Cmd+P` > "Omnisearch" -- relevance-ranked fuzzy search |
| **Tag search** | Click any tag, or search `tag:#project/name` |

## Folder Structure

```
Work Journal/          -- Daily notes (YYYY/MM/YYYY-MM-DD.md), auto-organized
  Weekly/              -- Weekly reviews (YYYY-Www.md)
  Monthly/             -- Monthly reviews (YYYY-MM.md)
Projects/              -- Active project documentation
  Archive/             -- Completed/inactive projects
Templates/             -- Note templates (don't edit unless customizing)
  Scripts/             -- QuickAdd macro scripts
Contacts/              -- People notes
TODOs/                 -- Task Dashboard
Images/                -- Screenshots and attachments
```

## Installed Plugins

| Plugin | What it does |
|--------|-------------|
| **[Tasks](https://publish.obsidian.md/tasks/)** | Task tracking with due dates, priorities, recurrence, and query blocks |
| **[Templater](https://silentvoid13.github.io/Templater/)** | Advanced templates with dynamic dates, file operations, and scripting |
| **[Dataview](https://blacksmithgu.github.io/obsidian-dataview/)** | Query engine that powers the Task Dashboard and review auto-summaries |
| **[Calendar](https://github.com/liamcain/obsidian-calendar-plugin)** | Sidebar calendar -- click a date for daily note, week number for weekly review |
| **[QuickAdd](https://quickadd.obsidian.guide/)** | Quick Task, Quick Log, New Meeting Note, and Archive Project commands |
| **[Periodic Notes](https://github.com/liamcain/obsidian-periodic-notes)** | Weekly and monthly review notes with templates |
| **[Homepage](https://github.com/mirnovov/obsidian-homepage)** | Opens Task Dashboard on startup |
| **[Omnisearch](https://github.com/scambier/obsidian-omnisearch)** | Relevance-ranked fuzzy search across the whole vault |
| **[Tag Wrangler](https://github.com/pjeby/tag-wrangler)** | Right-click tags to rename or merge them vault-wide |
| **[Mermaid Tools](https://github.com/dartungar/obsidian-mermaid)** | Toolbar for creating Mermaid.js diagrams |
| **[Insta TOC](https://github.com/iLissandra/Insta-TOC)** | Auto-generated table of contents |

## Customization

### Changing the theme
Settings > Appearance > Themes > Browse

### Adding your own templates
Add `.md` files to `Templates/`. Use [Templater syntax](https://silentvoid13.github.io/Templater/) for dynamic content like dates and file names.

### Modifying the Task Dashboard
Edit `TODOs/Task Dashboard.md`. See the [Tasks plugin docs](https://publish.obsidian.md/tasks/) for query syntax.

### Adding plugins
Settings > Community Plugins > Browse. See `Plugin Recommendations.md` in the vault for curated suggestions.

## Git & Syncing

The included `.gitignore` keeps personal content (journals, projects, contacts, images) **out of git** by default. This means:

- **Vault infrastructure** (templates, config, plugins) is version-controlled
- **Your notes** stay private and can be synced separately (OneDrive, iCloud, Obsidian Sync, etc.)

If you want to version-control everything, remove the relevant lines from `.gitignore`.

## Reference Guides

The vault includes these reference docs:

- **Getting Started.md** -- Quick-reference for daily workflow and commands
- **Plugin Recommendations.md** -- Installed plugins + future plugin ideas
- **Obsidian Reference Guide.md** -- Comprehensive Obsidian and plugin syntax reference
- **Markdown Cheat Sheet.md** -- Visual Markdown syntax examples

## License

This template is free to use, modify, and share. The Obsidian application itself is [free for personal use](https://obsidian.md/pricing).
