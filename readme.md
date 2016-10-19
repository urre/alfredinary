# Aldredinary

Screenshot 👉 Cloudinary 👉 Clipboard

## Features

This workflow provides this in a single command:

1. Take screenshot on your mac
2. Upload it to Cloudinary
3. Get back https image link to your clipboard
4. ⌘+V

## Install

1. Install Npm package

    npm install -g alfredinary

2. When installed, open up Alfred Workflows and right click to open the workflow directory in Terminal/finder. Create an ``.env`` file in the project root. Look in ``.env-example``. Edit ``PATHNAME`` AND ``FILENAME`` as you wish.

```bash
CLOUDNAME="XXXXX"
APIKEY="XXXXXXXXXXXX"
APISECRET="XXXXXXXXXXXX"
PATHNAME="/users/myusername/dropbox/screenshots/"
FILENAME="screenshot.jpg"
```

Enjoy!