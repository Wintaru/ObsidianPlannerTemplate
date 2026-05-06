---
date: 2026-05-04
tags: [type/reference, type/setup]
---

# Creating Obsidian Dashboards

There are two dashboard patterns in Obsidian, each suited to different needs. Use **Tasks dashboards** when you want to surface and manage to-do items. Use **Dataview dashboards** when you want to query and display structured information from your notes.

---

## Pattern 1: Tasks Dashboard

Uses the **Obsidian Tasks** plugin. Best for: overdue items, deadlines, priority queues, per-project task views.

### Prerequisites
- Obsidian Tasks plugin installed and enabled

### Step 1 — Tag your tasks

Tasks are surfaced by tag. Pick a tag that scopes what this dashboard should show. Add it to any task you want to appear:

```
- [ ] Review the contract 📅 2026-05-10 #work
- [ ] Follow up with vendor 📅 2026-05-07 #work #urgent
```

You can use any tag — one global tag (e.g. `#track`) to catch everything, or narrower tags (e.g. `#finance`, `#client-acme`) to scope to a topic.

### Step 2 — Create the dashboard note

Create a new note anywhere in your vault. Give it a clear name like `Work Dashboard` or `Finance Tasks`. Add sections with Tasks query blocks:

~~~markdown
---
tags: [type/dashboard]
---
# My Dashboard Name

## Overdue
```tasks
not done
due before today
tags include #your-tag
sort by due
```

## Due Today
```tasks
not done
due on today
tags include #your-tag
sort by priority
```

## Due This Week
```tasks
not done
due after today
due before next week
tags include #your-tag
sort by due
sort by priority
```

## All Open
```tasks
not done
tags include #your-tag
sort by due
sort by priority
group by filename
```
~~~

### Step 3 — Customize filters

Swap out or combine filters to match your needs:

| Filter | What it does |
|--------|-------------|
| `tags include #tag` | Only tasks with this tag |
| `due before today` | Overdue |
| `due on today` | Due today |
| `due before next week` | Due within the week |
| `not done` | Exclude completed tasks |
| `priority is high` | Only high-priority tasks |
| `filename includes Projects` | Only tasks inside the Projects folder |
| `group by filename` | Group results by the note they live in |
| `group by tags` | Group results by tag |
| `sort by due` | Chronological order |
| `sort by priority` | Priority order |

Filters can be combined freely — one per line inside the query block.

### Task syntax quick reference

```
- [ ] Task text 📅 2026-05-10        due date
- [ ] Task text ⏳ 2026-05-09        scheduled date
- [ ] Task text 🔁 every week        recurrence
- [x] Completed task                 mark done with x
```

Priority emojis (add anywhere in the task text):
`🔺` highest · `⏫` high · `🔼` medium · `🔽` low · `⏬` lowest

---

## Pattern 2: Dataview Dashboard

Uses the **Dataview** plugin. Best for: project status tables, contact lists, meeting logs, any structured view across multiple notes.

### Prerequisites
- Dataview plugin installed and enabled
- Notes that consistently use **frontmatter** (YAML at the top of the file)

### Step 1 — Add frontmatter to your notes

Dataview reads structured fields from note frontmatter. Decide what fields matter for your dashboard and add them to the relevant notes. Example for a project note:

```yaml
---
date: 2026-05-01
tags: [type/project]
status: active
client: Acme Corp
priority: high
---
```

Example for a contact note:
```yaml
---
date: 2026-05-04
tags: [type/contact]
name: Jane Smith
company: Acme Corp
last-meeting: 2026-04-20
follow-up: true
---
```

**Consistency is key**: every note you want to appear in the dashboard needs the same fields. If one note has `status: active` and another has `Status: Active`, Dataview treats them as different fields.

### Step 2 — Create the dashboard note

Create a new note. Add Dataview query blocks for each section you want:

~~~markdown
---
tags: [type/dashboard]
---
# My Dashboard Name

## Active Projects
```dataview
TABLE client, status, priority, file.mtime AS "Last Modified"
FROM "Projects"
WHERE status = "active"
SORT priority DESC
```

## All Contacts
```dataview
TABLE company, last-meeting, follow-up
FROM #type/contact
WHERE follow-up = true
SORT last-meeting DESC
```

## Recent Meeting Notes
```dataview
LIST
FROM "Meetings"
SORT file.ctime DESC
LIMIT 10
```
~~~

### Step 3 — Choose your query type

| Query type | Output | Use when |
|------------|--------|----------|
| `TABLE` | Spreadsheet-style grid | Comparing fields across notes |
| `LIST` | Bulleted list of note links | Simple note indexes |
| `TASK` | Checkbox task list | Aggregating tasks without the Tasks plugin |
| `CALENDAR` | Calendar view | Date-based data (meetings, journal) |

### Step 4 — Choose your source (`FROM`)

| Source | What it queries |
|--------|----------------|
| `FROM "Folder/Path"` | All notes inside that folder |
| `FROM #tag` | All notes with that tag |
| `FROM "Folder" AND #tag` | Intersection |
| `FROM "Folder" OR #tag` | Union |
| *(no FROM)* | All notes in the vault |

### Step 5 — Filter and sort with `WHERE` and `SORT`

```
WHERE status = "active"              exact match
WHERE status != "archived"           not equal
WHERE follow-up = true               boolean
WHERE date >= date(2026-01-01)       date comparison
WHERE contains(tags, "type/project") tag check
SORT file.mtime DESC                 recently modified first
SORT date ASC                        oldest first
LIMIT 20                             cap results
```

### Useful built-in fields

Every note automatically has these without any frontmatter:

| Field | Value |
|-------|-------|
| `file.name` | Note filename |
| `file.path` | Full path |
| `file.ctime` | Created date |
| `file.mtime` | Last modified date |
| `file.tags` | All tags |
| `file.size` | File size |

---

## Choosing Between Patterns

| | Tasks Dashboard | Dataview Dashboard |
|---|---|---|
| **Best for** | To-do items with deadlines | Structured note data |
| **Data source** | Task checkboxes (`- [ ]`) | Frontmatter fields |
| **Setup effort** | Tag your tasks | Define + populate frontmatter fields |
| **Flexibility** | Task-focused only | Any structured data |
| **Plugin needed** | Obsidian Tasks | Dataview |

You can also combine both patterns in a single dashboard note — Tasks blocks and Dataview blocks coexist fine.
