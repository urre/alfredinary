# Aldredinary

Screenshot 👉 Cloudinary 👉 Clipboard

## Features

This workflow provides this in a single command:

1. Take screenshot on your mac
2. Upload it to [Cloudinary](https://cloudinary.com)
3. Get back https image link to your clipboard
4. ⌘+V

## Why

+ Quickly share screenshots
+ No need to store the files on your computer if you don't want.
+ Https image links
+ Secure
+ All the benefits from Cloudinary. Image management,     image management transformations (ex via URL parameters), cloud storage, fast delivery via CDN.

## Install

1. Install Npm package

    npm install -g alfredinary

2. Create env-file. When installed, open up Alfred Workflows and right click to open the workflow directory in Terminal/finder. Create an ``.env`` file in the project root. You can rename ``.env-example`` to ``.env``. Edit ``PATHNAME`` AND ``FILENAME`` as you wish.

```bash
CLOUDNAME="XXXXX"
APIKEY="XXXXXXXXXXXX"
APISECRET="XXXXXXXXXXXX"
PATHNAME="/users/myusername/dropbox/screenshots/"
FILENAME="screenshot.jpg"
```

Note. You need to have an account on [Cloudinary](https://cloudinary.com). It's free.

3. Edit temp location (pathname and filename) of the screenshot on disk. The default is ``/users/${username}/dropbox/screenshots/screenshot.jpg``

Edit the yellow bash script in the image below.

<img width="931" alt="skarmavbild 2016-10-19 kl 15 47 12" src="https://cloud.githubusercontent.com/assets/307676/19521747/1cf6bc2e-9615-11e6-96d5-79ea022918dc.png">

## Use

Open up Alfred and type "Alfredinary". Or just begin typing "Alfredi..", or "Alf..." 😊

<img width="701" alt="skarmavbild 2016-10-19 kl 15 46 51" src="https://cloud.githubusercontent.com/assets/307676/19521683/c3a6a33c-9614-11e6-9b4b-b537807d1135.png">

Enjoy!