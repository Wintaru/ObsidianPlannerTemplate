# Obsidian.md Comprehensive Reference Guide

---

## 1. Core Obsidian Features

### What Is Obsidian?

Obsidian (obsidian.md) is a **local-first, markdown-based** knowledge management and note-taking application. All notes are stored as plain `.md` (Markdown) files on your local filesystem -- nothing proprietary, no vendor lock-in. It is **free for personal use** with no limitations on features, notes, or duration.

### Key Principles

- **Local-first**: Notes live on your computer as plain text files. They work offline, you own them completely, and they can be read by any text editor.
- **Markdown-native**: Standard Markdown (CommonMark + GFM) with Obsidian-specific extensions.
- **Linked thinking**: The core philosophy is building a network of interconnected notes rather than siloed documents.

### Core Features

| Feature | Description |
|---|---|
| **Backlinks** | Automatic tracking of all incoming links to the current note. Displayed in a sidebar panel. |
| **Graph View** | Interactive visual network diagram showing all notes and their connections. Supports filtering, grouping by tags/folders, and local graphs per note. |
| **Tags** | Inline `#tag` or YAML frontmatter tags. Supports nested tags like `#project/work`. |
| **Properties (Frontmatter)** | YAML metadata at the top of each note for structured data (see Section 2). |
| **Canvas** | Visual infinite canvas for arranging notes, images, embeds, and text cards spatially. |
| **Daily Notes** | Automatically create a new note for each day from a template. |
| **Templates** | Insert predefined text snippets/structures into notes. |
| **Search** | Full-text search across the entire vault with operators like `path:`, `tag:`, `file:`, etc. |
| **Quick Switcher** | Fuzzy-find and open any note by name (Cmd/Ctrl+O). |
| **Split Panes** | Multiple editor panes side by side or stacked. |
| **Live Preview** | WYSIWYG-style editing that renders Markdown in real time. |
| **Command Palette** | Access any command by name (Cmd/Ctrl+P). |
| **Vim Mode** | Optional Vim keybindings for the editor. |

---

## 2. File Format and Markdown Syntax

### Standard Markdown

Obsidian supports **CommonMark** and **GitHub Flavored Markdown (GFM)**, including:

- Headings (`# H1` through `###### H6`)
- Bold (`**bold**`), italic (`*italic*`), strikethrough (`~~strike~~`)
- Lists (ordered and unordered), checklists (`- [ ]` / `- [x]`)
- Code blocks (fenced with triple backticks, with language syntax highlighting)
- Tables (GFM pipe syntax)
- Blockquotes (`>`)
- Horizontal rules (`---`)
- Images and links (standard Markdown syntax)
- Footnotes (`[^1]`)
- Math/LaTeX (inline `$...$` and block `$$...$$`)
- Mermaid diagrams (fenced code block with `mermaid` language)

### YAML Frontmatter / Properties

Properties are defined in a YAML block at the **very top** of a note, delimited by `---`:

```yaml
---
title: My Note Title
date: 2025-01-15
tags:
  - project/work
  - meeting
aliases:
  - Alternative Name
  - Another Alias
cssclasses:
  - wide-page
status: in-progress
rating: 8
completed: true
---
```

**Property types supported by Obsidian:**

| Type | Example |
|---|---|
| Text | `status: draft` |
| List | `tags: [tag1, tag2]` or YAML list with hyphens |
| Number | `rating: 8` |
| Checkbox (boolean) | `completed: true` |
| Date | `date: 2025-01-15` |
| Datetime | `date: 2025-01-15T14:30:00` |

**Reserved/default properties:**

- `tags` -- searchable labels, used by Obsidian's tag system
- `aliases` -- alternative names for the note (appear in link suggestions)
- `cssclasses` -- CSS classes applied to the note in reading/editing view

### Wiki-Links (Internal Links)

Obsidian extends Markdown with `[[wikilink]]` syntax:

| Syntax | Description |
|---|---|
| `[[Note Name]]` | Link to a note |
| `[[Note Name\|Display Text]]` | Link with custom display text |
| `[[Note Name#Heading]]` | Link to a specific heading |
| `[[Note Name#^block-id]]` | Link to a specific block |
| `[[#Heading]]` | Link to heading in the same note |

**Note:** Obsidian also supports standard Markdown links `[text](path)`. You can choose your preferred format in Settings > Files & Links.

### Embeds (Transclusion)

Prefix a link with `!` to embed content inline:

| Syntax | Description |
|---|---|
| `![[Note Name]]` | Embed entire note |
| `![[Note Name#Heading]]` | Embed a specific section |
| `![[image.png]]` | Embed an image |
| `![[image.png\|300]]` | Embed image with width (300px) |
| `![[image.png\|300x200]]` | Embed image with width and height |
| `![[document.pdf]]` | Embed a PDF |
| `![[audio.mp3]]` | Embed audio player |
| `![[video.mp4]]` | Embed video player |

### Callouts

Highlighted blocks using blockquote syntax with a type identifier:

```markdown
> [!note] Optional Title
> Content of the callout.

> [!warning]
> This is a warning callout.

> [!tip]- Collapsible callout (collapsed by default)
> Use `-` after the type to make it collapsible and collapsed.

> [!info]+ Collapsible callout (expanded by default)
> Use `+` after the type to make it collapsible but expanded.
```

**12 default callout types:**

| Type | Aliases | Color |
|---|---|---|
| `note` | -- | Blue |
| `abstract` | summary, tldr | Teal |
| `info` | todo | Blue |
| `tip` | hint, important | Cyan |
| `success` | check, done | Green |
| `question` | help, faq | Yellow |
| `warning` | caution, attention | Orange |
| `failure` | fail, missing | Red |
| `danger` | error | Red |
| `bug` | -- | Red |
| `example` | -- | Purple |
| `quote` | cite | Gray |

Callout types are **case-insensitive**. Any unrecognized type defaults to the `note` style.

### Tags

- Inline: `#tag`, `#nested/tag`, `#project/2025/q1`
- In frontmatter: `tags: [tag1, tag2]`
- Tags can contain letters, numbers (not as first character), underscores, hyphens, and forward slashes (for nesting)

### Block References

Add `^block-id` at the end of any block (paragraph, list item, etc.) to create a referenceable block:

```markdown
This is a paragraph. ^my-block-id

Then link to it: [[Note Name#^my-block-id]]
```

### Comments

```markdown
%% This is a comment and won't render in preview %%
```

---

## 3. Plugin Ecosystem

### How Plugins Work

- **Core plugins** ship with Obsidian and can be toggled on/off in Settings > Core Plugins.
- **Community plugins** are third-party, installed from Settings > Community Plugins > Browse. They are stored in `.obsidian/plugins/`.
- Plugins can be enabled/disabled per vault.

### Core Plugins (Complete List)

Obsidian ships with approximately 28-30 core plugins:

| Plugin | Description |
|---|---|
| **Audio recorder** | Record audio using system microphone |
| **Backlinks** | Show all notes that link to the current note |
| **Bookmarks** | Pin/bookmark notes, searches, headings, and blocks |
| **Canvas** | Infinite visual canvas for spatial note arrangement |
| **Command palette** | Access any command by name (Cmd/Ctrl+P) |
| **Daily notes** | Create and open a daily note from a template |
| **File recovery** | Snapshot-based recovery of recent changes |
| **Format converter** | Convert Markdown from other apps |
| **Graph view** | Visualize note connections as an interactive network |
| **Note composer** | Merge or extract/split notes |
| **Outline** | Table of contents sidebar for current note's headings |
| **Outgoing links** | Show all links from current note to other notes; detects unlinked mentions |
| **Page preview** | Preview linked notes on hover (with or without Cmd held) |
| **Properties view** | Browse and manage all properties across the vault |
| **Publish** | Publish notes to the web (paid service) |
| **Quick switcher** | Fuzzy-find and open notes by name |
| **Random note** | Open a random note |
| **Search** | Full-text search across the vault |
| **Slash commands** | Type `/` in the editor to trigger commands |
| **Slides** | Present notes as reveal.js slideshows |
| **Sync** | End-to-end encrypted sync across devices (paid service) |
| **Tags view** | Browse all tags in a tree hierarchy |
| **Templates** | Insert template snippets into notes |
| **Unique note creator** | Create notes with unique (Zettelkasten-style) names |
| **Word count** | Show word and character count in the status bar |
| **Workspaces** | Save and restore layout configurations |

### Community Plugins -- Most Popular

**By all-time downloads (approximate as of 2025):**

| Rank | Plugin | Downloads | Description |
|---|---|---|---|
| 1 | **Calendar** | ~4.1M | Calendar widget in sidebar for daily notes navigation |
| 2 | **Templater** | ~3.8M | Advanced templating engine with functions and scripting |
| 3 | **Dataview** | ~3.8M | Query engine for pulling structured data from notes |
| 4 | **Tasks** | ~3.2M | Task management with dates, priorities, recurrence, queries |
| 5 | **Excalidraw** | ~2.5M | Drawing and diagramming tool |
| 6 | **Kanban** | ~2.1M | Kanban boards within Obsidian |
| 7 | **Periodic Notes** | ~1.5M+ | Weekly, monthly, quarterly, yearly notes |
| 8 | **QuickAdd** | ~1.5M+ | Quick capture, templated note creation, macros |
| 9 | **Obsidian Git** | ~1.5M+ | Git-based backup and version control |
| 10 | **Style Settings** | ~1.5M+ | Customize theme variables via GUI |

### Category: Task Management

**Tasks Plugin** -- See Section 8 for full syntax reference.

**Kanban Plugin:**
- Creates Kanban boards as Markdown files
- Drag-and-drop cards between columns
- Cards are checklist items; columns are headings
- Each board is a single `.md` file
- Can link cards to other notes

**Dataview (for task queries)** -- See Section 7. Dataview's TASK query type can aggregate tasks from across the vault.

### Category: Daily Notes / Journaling

**Periodic Notes:**
- Extends the Daily Notes concept to weekly, monthly, quarterly, and yearly notes
- Each period gets its own template, folder, and date format
- Integrates with the Calendar plugin for visual navigation

**Calendar Plugin:**
- Adds a calendar widget in the sidebar
- Click any date to open/create that day's daily note
- Visual dots indicate which days have notes
- Week number support for weekly notes

**Journals Plugin (newer alternative):**
- Replacement for Periodic Notes (which appears somewhat abandoned)
- Supports daily, weekly, monthly, quarterly, yearly, and custom periods
- Built-in calendar view
- Multiple journal support

### Category: Productivity

**QuickAdd:**
Four choice types:
- **Template** -- Create a new note from a template with dynamic values
- **Capture** -- Quickly append/prepend content to a predefined file
- **Macro** -- Chain multiple operations into automated workflows (commands, user scripts, AI commands)
- **Multi** -- Present multiple choices in a menu

**Obsidian Git:**
- Automatic backup to a Git repository on a schedule
- Pull/push from remote repositories
- Diff viewer
- Useful for version history and cross-device sync without Obsidian Sync

---

## 4. Obsidian Vault Structure

### What Is a Vault?

A vault is simply a **folder on your filesystem**. All `.md` files in the folder (and subfolders) are your notes. Obsidian adds a hidden `.obsidian` configuration folder.

### `.obsidian/` Configuration Folder

```
YourVault/
  .obsidian/
    app.json                  # App settings (editor, files & links, appearance basics)
    appearance.json           # Theme, font, CSS snippet settings
    community-plugins.json    # List of installed community plugin IDs
    core-plugins.json         # Which core plugins are enabled/disabled
    core-plugins-migration.json
    graph.json                # Graph view settings (filters, colors, forces)
    hotkeys.json              # Custom hotkey assignments
    workspace.json            # Current window layout, open files, pane arrangement
    workspaces.json           # Saved workspace layouts
    plugins/
      plugin-id/
        main.js               # Plugin code
        manifest.json          # Plugin metadata
        styles.css             # Plugin styles (optional)
        data.json              # Plugin settings/data
    themes/
      theme-name/
        theme.css
        manifest.json
    snippets/                  # Custom CSS snippets
      my-tweaks.css
```

### Key Configuration Files

| File | Purpose |
|---|---|
| `app.json` | Editor settings, default new note location, attachment folder, link format preferences |
| `appearance.json` | Theme selection, base font size, enabled CSS snippets |
| `community-plugins.json` | Array of installed community plugin IDs |
| `core-plugins.json` | Object mapping core plugin IDs to enabled/disabled |
| `hotkeys.json` | Custom keyboard shortcut overrides |
| `workspace.json` | Current layout state (tabs, panes, sidebar state). Changes frequently as you use Obsidian. |
| `graph.json` | Graph view filters, color groups, display settings |

### Git Considerations

If version-controlling your vault with Git, consider this `.gitignore`:

```gitignore
# Obsidian workspace (changes constantly, causes merge conflicts)
.obsidian/workspace.json
.obsidian/workspace-mobile.json

# Optional: ignore plugin cache
.obsidian/plugins/*/data.json
```

Keep `app.json`, `community-plugins.json`, `core-plugins.json`, `hotkeys.json`, and `appearance.json` in Git if you want settings to sync across machines.

---

## 5. Best Practices for Vault Organization

### Folder Structure Approaches

#### Minimal / Flat Structure
Best for link-heavy, Zettelkasten-style vaults:

```
Vault/
  Inbox/           # New unsorted notes
  Templates/       # Note templates
  Attachments/     # Images, PDFs, files
  (all other notes at root level)
```

#### PARA Method (Tiago Forte)

```
Vault/
  1-Projects/      # Active projects with deadlines
  2-Areas/         # Ongoing areas of responsibility
  3-Resources/     # Reference material by topic
  4-Archive/       # Completed/inactive items
  Templates/
  Attachments/
```

#### Topic-Based / Departmental

```
Vault/
  Work/
    Projects/
    Meetings/
    People/
  Personal/
    Journal/
    Health/
    Finance/
  Reference/
    Books/
    Articles/
  Templates/
  Attachments/
```

### Zettelkasten Method in Obsidian

The Zettelkasten ("slip box") method focuses on:

1. **Fleeting Notes** -- Quick captures, raw thoughts (Inbox)
2. **Literature Notes** -- Summaries of sources in your own words
3. **Permanent Notes** -- Atomic, self-contained ideas written clearly
4. **Structure Notes / Index Notes** -- Notes that link to groups of related permanent notes

**Key principles for Obsidian Zettelkasten:**
- One idea per note (atomic notes)
- Write in your own words
- Link extensively between notes using `[[ ]]`
- Use a flat folder structure -- rely on links, not folders
- Give notes descriptive titles (not just IDs)
- Let structure emerge bottom-up from links

### Maps of Content (MOCs)

MOCs are **index notes** that curate links to related notes on a topic. They serve as navigational hubs.

```markdown
# Python MOC

## Core Language
- [[Python Data Types]]
- [[Python Functions]]
- [[Python Classes and OOP]]

## Libraries
- [[Pandas Guide]]
- [[NumPy Basics]]

## Projects
- [[Data Pipeline Project]]
```

**Best practices for MOCs:**
- Create them when a cluster of notes naturally forms (usually 5-10+ related notes)
- MOCs can link to other MOCs (hierarchical navigation)
- Keep them at the vault root or in a dedicated `MOCs/` folder
- They replace the need for deep folder hierarchies

### Tagging Conventions

- Use **nested tags** for hierarchy: `#status/active`, `#status/done`, `#type/meeting`, `#type/reference`
- Use tags for **attributes** (status, type, area) and links for **relationships** (connections between ideas)
- Common tag taxonomies:
  - `#type/` -- meeting, project, person, book, article, idea, daily
  - `#status/` -- active, someday, done, archived
  - `#area/` -- work, personal, health, finance
  - `#source/` -- book, article, podcast, conversation

### Linking Strategies

- **Link liberally** -- When you mention a concept, link it: `[[concept]]`
- **Use aliases** for natural prose: `[[Artificial Intelligence|AI]]`
- **Create notes for people, projects, and concepts** even if they start empty -- they become useful as backlinks accumulate
- **Prefer links over folders** for organization -- folders are for broad categories, links are for relationships

---

## 6. Templater Plugin -- Detailed Reference

### Installation

Community Plugins > Browse > Search "Templater" > Install > Enable

### Basic Syntax

Templater uses `<% %>` delimiters:

| Syntax | Description |
|---|---|
| `<% expression %>` | Output the result of an expression |
| `<%* statement %>` | Execute a statement (no output) |
| `<% tp.module.function() %>` | Call a Templater function |

### Internal Modules

| Module | Description | Key Functions |
|---|---|---|
| `tp.app` | Obsidian app access | `tp.app.vault.getName()` |
| `tp.config` | Templater config | `tp.config.target_file`, `tp.config.run_mode` |
| `tp.date` | Date operations | `tp.date.now()`, `tp.date.tomorrow()`, `tp.date.yesterday()` |
| `tp.file` | File operations | `tp.file.title`, `tp.file.creation_date()`, `tp.file.cursor()` |
| `tp.frontmatter` | Access frontmatter | `tp.frontmatter.tags`, `tp.frontmatter.PropertyName` |
| `tp.hooks` | Lifecycle hooks | `tp.hooks.on_all_templates_executed()` |
| `tp.obsidian` | Obsidian API access | Full Obsidian API |
| `tp.system` | System interactions | `tp.system.prompt()`, `tp.system.suggester()`, `tp.system.clipboard()` |
| `tp.web` | Web requests | `tp.web.daily_quote()`, `tp.web.random_picture()` |

### Common tp.date Functions

```
<% tp.date.now("YYYY-MM-DD") %>              // 2025-01-15
<% tp.date.now("dddd, MMMM Do YYYY") %>      // Wednesday, January 15th 2025
<% tp.date.now("YYYY-MM-DD", -1) %>           // Yesterday
<% tp.date.now("YYYY-MM-DD", 1) %>            // Tomorrow
<% tp.date.now("YYYY-MM-DD", 7) %>            // 7 days from now
<% tp.date.now("YYYY-MM-DD", -1, tp.file.title, "YYYY-MM-DD") %>  // Day before the file title date
```

### Common tp.file Functions

```
<% tp.file.title %>                                          // Current file name
<% tp.file.creation_date("YYYY-MM-DD") %>                    // File creation date
<% tp.file.last_modified_date("YYYY-MM-DD") %>               // Last modified date
<% tp.file.cursor() %>                                       // Place cursor here after insertion
<% tp.file.cursor(1) %>                                      // Numbered cursor (tab between them)
<%* await tp.file.move("/Folder/" + tp.file.title) %>        // Move file
<%* await tp.file.rename("New Name") %>                      // Rename file
```

### System Interactions

```
<%* const result = await tp.system.prompt("Enter a value") %>
<%* const choice = await tp.system.suggester(["Option 1", "Option 2"], ["val1", "val2"]) %>
<% tp.system.clipboard() %>                                  // Paste clipboard contents
```

### Daily Note Template Example

```markdown
---
date: <% tp.date.now("YYYY-MM-DD") %>
tags:
  - type/daily
---

# <% tp.date.now("dddd, MMMM Do YYYY") %>

<< [[<% tp.date.now("YYYY-MM-DD", -1) %>]] | [[<% tp.date.now("YYYY-MM-DD", 1) %>]] >>

## Tasks
- [ ]

## Notes


## Journal


## Log
-
```

### Folder Templates (Auto-Templates)

In Templater settings:
1. Enable "Trigger Templater on new file creation"
2. Under **Folder Templates**, map a folder to a template
3. Any new note created in that folder will automatically use the specified template

Example: Map `Daily Notes/` folder to your `Templates/Daily Note Template.md`.

### User Functions

Create custom JavaScript functions:
1. Set a "Script files folder" in Templater settings (e.g., `Templates/Scripts/`)
2. Create `.js` files following CommonJS format:

```javascript
// Templates/Scripts/greeting.js
module.exports = (tp) => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
};
```

Use in templates: `<% tp.user.greeting(tp) %>`

---

## 7. Dataview Plugin -- Detailed Reference

### Installation

Community Plugins > Browse > Search "Dataview" > Install > Enable

### Three Query Modes

1. **DQL (Dataview Query Language)** -- SQL-like syntax in `dataview` code blocks
2. **Inline DQL** -- Single-value expressions using `` `= expression` `` syntax
3. **DataviewJS** -- Full JavaScript in `dataviewjs` code blocks

### DQL Query Structure

````
```dataview
QUERY-TYPE field1, field2, ...
FROM source
WHERE condition
SORT field ASC/DESC
GROUP BY field
FLATTEN field
LIMIT number
```
````

### Query Types

| Type | Output | Example |
|---|---|---|
| `TABLE` | Table with columns | `TABLE status, date FROM "Projects"` |
| `LIST` | Bullet point list | `LIST FROM #book` |
| `TASK` | Interactive task list | `TASK FROM "Daily Notes"` |
| `CALENDAR` | Calendar with dots | `CALENDAR date FROM "Journal"` |

### Data Commands (Clauses)

| Command | Purpose | Example |
|---|---|---|
| `FROM` | Filter by source | `FROM "folder"`, `FROM #tag`, `FROM [[note]]` |
| `WHERE` | Filter by condition | `WHERE status = "active"` |
| `SORT` | Order results | `SORT date DESC` |
| `GROUP BY` | Group results | `GROUP BY status` |
| `FLATTEN` | Flatten arrays | `FLATTEN tags` |
| `LIMIT` | Cap result count | `LIMIT 10` |

### FROM Source Types

```
FROM "Folder/Path"           // Notes in a folder
FROM #tag                    // Notes with a tag
FROM #tag/nested             // Notes with nested tag
FROM [[Note Name]]           // Notes linked from a specific note
FROM outgoing([[Note Name]]) // Notes that a specific note links to
FROM ""                      // All notes
FROM #tag AND "Folder"       // Combine with AND, OR
FROM -"Templates"            // Exclude a folder (negate with -)
```

### Implicit Fields (Available on Every Note)

| Field | Description |
|---|---|
| `file.name` | File name without extension |
| `file.path` | Full file path |
| `file.folder` | Containing folder |
| `file.link` | Link to the file |
| `file.size` | File size in bytes |
| `file.ctime` / `file.cday` | Creation time / day |
| `file.mtime` / `file.mday` | Modified time / day |
| `file.tags` | All tags in the file (including frontmatter) |
| `file.etags` | Explicit tags only |
| `file.inlinks` | Notes that link TO this file |
| `file.outlinks` | Notes this file links to |
| `file.tasks` | All tasks in the file |
| `file.lists` | All list items in the file |
| `file.frontmatter` | Raw frontmatter object |
| `file.starred` | Whether bookmarked |

### Adding Metadata for Dataview

**Frontmatter properties:**
```yaml
---
status: active
priority: high
date: 2025-01-15
---
```

**Inline fields (anywhere in note body):**
```markdown
Status:: Active
Due Date:: 2025-02-01
[Priority:: High]           <!-- rendered inline, key hidden -->
(Completed:: true)          <!-- parentheses also work -->
```

### Practical DQL Examples

**List all active projects:**
````
```dataview
TABLE status, date, priority
FROM "Projects"
WHERE status = "active"
SORT priority ASC
```
````

**Books read this year:**
````
```dataview
TABLE author, rating, date-finished
FROM #book
WHERE date-finished >= date(2025-01-01)
SORT rating DESC
```
````

**Recent daily notes:**
````
```dataview
LIST
FROM "Daily Notes"
SORT file.name DESC
LIMIT 7
```
````

**Tasks due this week:**
````
```dataview
TASK
FROM "Projects"
WHERE !completed AND due <= date(today) + dur(7 days)
SORT due ASC
```
````

**Count notes by tag:**
````
```dataview
TABLE length(rows) AS "Count"
FROM ""
FLATTEN file.tags AS tag
GROUP BY tag
SORT length(rows) DESC
```
````

### Inline DQL

Use in the middle of regular text:

```markdown
Today is `= date(today)`.
This note was created on `= this.file.cday`.
There are `= length(filter(this.file.tasks, (t) => !t.completed))` incomplete tasks.
The project status is `= this.status`.
```

### DataviewJS Examples

````
```dataviewjs
// Custom table with computed columns
let pages = dv.pages("#project")
    .where(p => p.status === "active")
    .sort(p => p.priority, 'asc');

dv.table(
    ["Project", "Status", "Days Active"],
    pages.map(p => [
        p.file.link,
        p.status,
        Math.floor((Date.now() - p.file.ctime) / (1000 * 60 * 60 * 24))
    ])
);
```
````

---

## 8. Tasks Plugin -- Detailed Reference

### Installation

Community Plugins > Browse > Search "Tasks" > Install > Enable

### Basic Task Syntax

Tasks are standard Markdown checklist items:

```markdown
- [ ] This is an incomplete task
- [x] This is a completed task
```

### Task Properties (Emoji Format)

The Tasks plugin uses emoji signifiers to annotate task metadata inline:

| Emoji | Property | Example |
|---|---|---|
| `📅` | **Due date** | `📅 2025-01-15` |
| `⏳` | **Scheduled date** | `⏳ 2025-01-14` |
| `🛫` | **Start date** | `🛫 2025-01-10` |
| `➕` | **Created date** | `➕ 2025-01-08` |
| `✅` | **Done date** | `✅ 2025-01-15` (auto-added on completion) |
| `❌` | **Cancelled date** | `❌ 2025-01-12` |
| `🔁` | **Recurrence** | `🔁 every week` |
| `⏫` | **High priority** | `⏫` |
| `🔼` | **Medium priority** | `🔼` |
| `🔽` | **Low priority** | `🔽` |
| `🔺` | **Highest priority** | `🔺` |
| `⏬` | **Lowest priority** | `⏬` |

### Complete Task Example

```markdown
- [ ] Submit quarterly report 📅 2025-01-31 ⏳ 2025-01-28 🛫 2025-01-20 🔼 🔁 every quarter ➕ 2025-01-01
```

### Auto-Suggest

When typing in a task line, the Tasks plugin provides an **auto-suggest** dropdown. Type natural language like:
- `due` -> suggests due date entry
- `high` -> suggests high priority
- `every` -> suggests recurrence patterns

You can also use the **Tasks: Create or edit task** command (from Command Palette) for a modal dialog.

### Recurrence Patterns

```
🔁 every day
🔁 every week
🔁 every week on Monday
🔁 every week on Monday, Wednesday, Friday
🔁 every 2 weeks
🔁 every month
🔁 every month on the 1st
🔁 every month on the last day
🔁 every quarter
🔁 every year
🔁 every 3 months
```

When a recurring task is completed, a **new copy** is automatically created with the next occurrence date, and the completed task gets a done date.

### Task Query Blocks

Create queries in code blocks to aggregate tasks from across the vault:

````
```tasks
not done
due before tomorrow
sort by due
group by filename
```
````

### Query Filters

| Filter | Example |
|---|---|
| `done` / `not done` | Filter by completion status |
| `due before DATE` | `due before 2025-02-01` |
| `due after DATE` | `due after today` |
| `due on DATE` | `due on 2025-01-15` |
| `due this week` | Due within current week |
| `scheduled before DATE` | Scheduled date filter |
| `starts before DATE` | Start date filter |
| `has due date` / `no due date` | Check for date presence |
| `priority is high` | `priority is above medium` |
| `path includes FOLDER` | `path includes Projects` |
| `heading includes TEXT` | Filter by section heading |
| `description includes TEXT` | Filter by task text |
| `tag includes #tag` | `tag includes #work` |
| `is recurring` / `is not recurring` | Recurrence filter |
| `happens before DATE` | Any date (due/scheduled/start) before DATE |

### Query Sort and Group Options

```
sort by due
sort by priority
sort by description
sort by path
sort by created

group by due
group by folder
group by filename
group by priority
group by tags
group by status
group by heading
group by recurring
```

### Complete Query Example

````
```tasks
not done
(due before next week) OR (scheduled before next week)
path does not include Templates
sort by priority
sort by due
group by due
short mode
```
````

**Display options in queries:**
- `short mode` -- compact display
- `hide task count` -- hide the count footer
- `hide backlink` -- hide the source note link
- `hide due date` / `hide start date` / etc. -- hide specific fields
- `show urgency` -- display calculated urgency score
- `limit to N tasks` -- cap the number of results

### Alternative Task Formats

Besides the default emoji format, the Tasks plugin also supports:
- **Dataview format** -- uses `[due:: 2025-01-15]` inline field syntax
- **Custom formats** -- configurable in settings

---

## Summary: Recommended Plugin Stack

For a well-rounded Obsidian setup:

| Need | Plugin(s) |
|---|---|
| **Templating** | Templater (community) -- far more powerful than core Templates |
| **Daily/Periodic Notes** | Periodic Notes or Journals + Calendar |
| **Task Management** | Tasks + Dataview (for queries) |
| **Project Boards** | Kanban |
| **Data Queries** | Dataview |
| **Quick Capture** | QuickAdd |
| **Version Control** | Obsidian Git |
| **Drawing** | Excalidraw |

---

*This reference was compiled from official Obsidian documentation, community resources, and plugin documentation as of early 2026.*
