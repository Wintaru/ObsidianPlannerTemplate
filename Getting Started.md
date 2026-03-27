---
tags:
  - type/reference
---

# Getting Started - Quick Reference

## Daily Workflow

1. **Obsidian opens to your [[Task Dashboard]]** automatically (Homepage plugin)
2. **Open today's journal**: `Cmd+P` > type "daily note" > Enter
3. **Quick Task**: `Cmd+P` > "QuickAdd: Quick Task" > type task > it's added to today's daily note
4. **Quick Log**: `Cmd+P` > "QuickAdd: Quick Log" > type what you worked on > appended to today's Work Log
5. **End of week**: Click a week number in the Calendar sidebar to create a weekly review

## Useful Commands (Cmd+P)

| Command | What it does |
|---------|-------------|
| `Open today's daily note` | Creates/opens today's journal in Work Journal/ |
| `Templater: Create new note from template` | Pick a template (Daily, Meeting, Project, Contact) |
| `Tasks: Create or edit task` | Opens a dialog to build a task with dates/priority |
| `Insert template` | Insert a template into the current note |
| `QuickAdd: Quick Task` | Prompts for text, adds as task to today's daily note |
| `QuickAdd: Quick Log` | Prompts for text, appends to today's Work Log section |
| `QuickAdd: New Meeting Note` | Creates a meeting note from template, asks for folder |
| `Omnisearch: Search` | Fuzzy relevance-ranked search across entire vault |
| `Open graph view` | Visual map of all your linked notes |
| `Search` or `Cmd+Shift+F` | Full-text search across the vault |
| `Quick switcher` or `Cmd+O` | Fuzzy-find any note by name |
| `Toggle reading view` | Switch between edit and preview mode |

## Task Syntax

Add tasks anywhere and they'll show up in the [[Task Dashboard]]. Make sure to include `#track` so they appear on the dashboard.

```
- [ ] Basic task #track
- [ ] Task with due date 📅 2025-06-15 #track
- [ ] Urgent task 📅 2025-06-10 ⏫ #track
- [ ] Recurring standup 🔁 every weekday 📅 2025-06-10 #track
- [x] Completed task ✅ 2025-06-09
```

**Priority emojis** (type the word in a task line for auto-suggest):
- `🔺` highest > `⏫` high > `🔼` medium > `🔽` low > `⏬` lowest

**Date emojis**:
- `📅` due date > `⏳` scheduled date > `🛫` start date

## Linking Notes

- `[[Note Name]]` -- link to another note
- `[[Note Name|display text]]` -- link with custom label
- `[[Note Name#Heading]]` -- link to a specific section
- `![[Note Name]]` -- embed another note's content inline
- `#tag` or `#project/my-project` -- add a searchable tag

## Templates Available

| Template | Use for | How to use |
|----------|---------|------------|
| **Daily Note** | Daily journal entries | Auto-applied when creating notes in Work Journal/ |
| **Weekly Review** | End-of-week reflection | Click week number in Calendar sidebar |
| **Monthly Review** | Monthly project summaries | `Cmd+P` > Periodic Notes: Open monthly note |
| **Meeting Note** | Meeting notes | `Cmd+P` > "QuickAdd: New Meeting Note" |
| **Project Note** | New project documentation | `Cmd+P` > "Create new note from template" |
| **Contact** | People notes | `Cmd+P` > "Create new note from template" |

## Folder Structure

| Folder | Purpose |
|--------|---------|
| `Work Journal/` | Daily notes (YYYY-MM-DD.md) -- auto-templated |
| `Work Journal/Weekly/` | Weekly review notes (YYYY-Www.md) |
| `Work Journal/Monthly/` | Monthly review notes (YYYY-MM.md) |
| `Projects/` | Active project documentation |
| `Projects/Archive/` | Completed/inactive projects |
| `Templates/` | Note templates (don't edit frontmatter -- Templater fills it) |
| `Contacts/` | People notes -- one per person with role, projects, and notes |
| `TODOs/` | Task Dashboard and TODO tracking |
| `Images/` | Screenshots and attachments |

## Installed Plugins

See [[Plugin Recommendations]] for full list and future plugin ideas.

| Plugin | What it does |
|--------|-------------|
| **Tasks** | Task tracking with due dates, priorities, recurrence, queries |
| **Templater** | Advanced templates with variables, dates, scripting |
| **Dataview** | Query notes like a database -- powers the Task Dashboard |
| **Calendar** | Sidebar calendar -- click any date for daily note, week number for weekly review |
| **QuickAdd** | Quick Task, Quick Log, and New Meeting Note commands |
| **Periodic Notes** | Weekly and monthly review notes with templates |
| **Homepage** | Opens Task Dashboard on startup |
| **Omnisearch** | Better fuzzy search across the whole vault |
| **Tag Wrangler** | Right-click tags to rename/merge them vault-wide |
| **Mermaid Tools** | Diagram toolbar for Mermaid.js |
| **Insta TOC** | Auto table of contents |

## Projects

Each project gets its own folder under `Projects/`. Create a **hub note** as the central page that links to all related docs. Use `[[Project Name]]` anywhere to link to it. Tag notes with `#project/name` for easy filtering.

## Contacts

The `Contacts/` folder holds a note per person you work with. Each note tracks their role, projects, and meeting history. When you mention someone in a daily note or meeting note, link them: `[[Person Name]]` -- backlinks will automatically build a history of every interaction.

To add a new contact: `Cmd+P` > "Create new note from template" > pick **Contact** > save in `Contacts/`

## Tips

- **Tag your notes** with `#project/name` so you can search/filter by project
- **Link liberally** -- mention a project? Write `[[Project Name]]`. This builds your knowledge graph.
- **Use callouts** for important info:
  ```
  > [!warning] Don't forget
  > Follow up with the team about deployment keys
  ```
- **Frontmatter** (the `---` block at top) is metadata -- add `status:`, `tags:`, `date:` for searchability
