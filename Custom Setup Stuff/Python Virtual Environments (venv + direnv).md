### Setup
- **direnv** is installed via Homebrew and hooked into zsh
- **`jd-venv`** is a custom shell function that does everything in one step

### Creating a venv in any directory
```bash
cd some-project/
jd-venv
```
This will:
1. Create a `.venv` folder
2. Activate it
3. Install from `requirements.txt` (if one exists)
4. Create a `.envrc` for direnv auto-activation
5. Run `direnv allow`

### Day-to-day usage
Just `cd` into the directory — direnv activates the venv automatically. When you leave the directory, it deactivates.

### Adding dependencies
```bash
pip install some-package
pip freeze > requirements.txt
```
```
