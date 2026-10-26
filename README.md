# JIECEP NDMC E-Library

A free static e-library template using GitHub Pages for the website and Google Drive for PDF storage.

## Files
- `index.html` — page structure
- `style.css` — visual design and mobile layout
- `script.js` — book records, search, categories, and Drive buttons
- `covers/` — optional book-cover images

## Add a PDF from Google Drive

1. Upload a PDF you are authorized to distribute to Google Drive.
2. Right-click the file and choose **Share**.
3. Under **General access**, choose **Anyone with the link** if you want public access. Follow your institution's privacy and sharing rules.
4. Copy the share link. It usually looks like:
   `https://drive.google.com/file/d/FILE_ID/view?usp=sharing`
5. In `script.js`, replace the matching book's `driveUrl` value with that full URL.
6. Replace `REPLACE_WITH_FILE_ID` in each sample entry. If you have not added a real file yet, the buttons will show a reminder.
7. Save and push the changed files to GitHub.

The JavaScript extracts the file ID and creates:
- Read PDF: `https://drive.google.com/file/d/FILE_ID/preview`
- Open in Drive: `https://drive.google.com/file/d/FILE_ID/view`
- Download: `https://drive.google.com/uc?export=download&id=FILE_ID`

Google may show a confirmation or virus-scan warning for some files, especially large files. A website cannot force every browser to save a file without user interaction.

## Add another book

Copy one book object in the `books` array in `script.js`, then change its `id`, `title`, `author`, `year`, `courseCode`, `category`, `description`, `keywords`, `cover`, and `driveUrl`.

Allowed `year` values are `1st Year`, `2nd Year`, `3rd Year`, and `4th Year`. These values must match the category filters.

Example:
```js
{
  id: 4,
  title: "Control Systems Engineering",
  author: "Author Name",
  year: "4th Year",
  courseCode: "ECE",
  category: "Control Systems",
  description: "Introduction to feedback and control systems.",
  keywords: ["transfer function", "stability", "root locus"],
  cover: "covers/control-systems.jpg",
  driveUrl: "https://drive.google.com/file/d/PASTE_REAL_FILE_ID/view"
}
```

## Add a cover image

Put the image in the `covers` folder and set `cover` to its relative path, for example:
`cover: "covers/control-systems.jpg"`

If you do not have a cover yet, use `cover: ""`. A generated placeholder will appear.

## Add your feedback form

Create a Google Form for book suggestions, then replace `https://forms.google.com/` in `index.html` with the full URL of your form.

## Publish with GitHub Pages

1. Create a GitHub repository, for example `jiecep-ndmc-elibrary`.
2. Upload `index.html`, `style.css`, `script.js`, and the `covers` folder.
3. Open the repository's **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose the `main` branch and `/ (root)` folder, then save.
6. Wait for GitHub Pages to publish the site. The URL normally resembles:
   `https://YOUR-USERNAME.github.io/jiecep-ndmc-elibrary/`

Your repository may be public when using the free GitHub Pages setup. Do not put private documents, passwords, API keys, or sensitive information in the repository.
GitHub Pages deployment test

## Important copyright note

Use public-domain, openly licensed, institution-authorized, or otherwise legally distributable educational resources. Calling the site educational does not automatically grant permission to distribute copyrighted textbooks. Google Drive link sharing also does not override copyright or school policies.
