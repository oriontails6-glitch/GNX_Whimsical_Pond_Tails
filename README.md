# Whimsical Pond Tails — Duck Family Manual

## Folder structure
```
duck-family-site/
├── index.html       ← page shell, don't need to touch this
├── style.css         ← all visual styling, don't need to touch this
├── script.js          ← renders cards from characters.js, don't need to touch this
├── characters.js     ← ⭐ THE ONLY FILE YOU EDIT ⭐
└── images/           ← put every character photo here
```

## How to add a new character (do this forever, going forward)
1. Save their image into `images/` — e.g. `images/newduck.jpg`
   (jpg or png both fine, keep filenames lowercase with no spaces)
2. Open `characters.js`
3. Copy an existing entry, e.g.:
   ```js
   {
     img: "images/newduck.jpg",
     name: "New Duck",
     role: "Mystery Cousin",
     bio: "Nobody knows where they came from. Everyone's too scared to ask."
   },
   ```
4. Paste it into `ELDERS`, `FAMILY`, or `DUCKLINGS` (or a new array — see below)
5. Save. Refresh the page locally, or `git push` if it's already live.

That's it — no HTML/CSS editing required, ever.

## Adding a whole new section (e.g. "Villains", "Pets")
At the top of `characters.js`, define a new array the same way as
`ELDERS`/`FAMILY`/`DUCKLINGS`, then register it at the bottom:
```js
const SECTIONS = [
  { id: "elders",    label: "The Elders",             data: ELDERS },
  { id: "family",    label: "Aunts, Uncles & In-Laws", data: FAMILY },
  { id: "ducklings", label: "The Duckling Squad",      data: DUCKLINGS },
  { id: "villains",  label: "Pond Villains",           data: VILLAINS }, // new
];
```
The nav bar and page will pick it up automatically.

## Hosting on GitHub Pages
1. Create a new repo (public or the burner account works fine) and push
   this whole folder to it — `index.html` should sit at the repo root
   (or in `/docs` if you prefer, just set that in step 3).
2. On GitHub: **Settings → Pages**.
3. Under "Build and deployment", set Source = "Deploy from a branch",
   pick `main` and `/ (root)` (or `/docs`), then Save.
4. GitHub gives you a URL like `https://yourusername.github.io/repo-name/`
   — that's your live flipbook. It rebuilds automatically a minute or
   two after every push.

## Notes
- Everything is plain HTML/CSS/JS — no build step, no npm, no framework.
  Editing `characters.js` and pushing is the entire workflow.
- Image paths are relative (`images/xyz.jpg`), so this works identically
  whether you open `index.html` directly on your computer or load it
  through GitHub Pages.
- Keep images reasonably sized (a few hundred KB each) so the page loads
  fast — you don't need to compress the ones already in `/images`.
