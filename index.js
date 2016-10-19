const alfy = require('alfy');
const cloudinary = require('cloudinary');
require('dotenv').config();

// Cloudinary settings, read secrets. Read from .env-file
cloudinary.config({
  cloud_name: process.env.CLOUDNAME,
  api_key: process.env.APIKEY,
  api_secret: process.env.APISECRET
});

// Settings for path and filename. Read from .env-file
const fileSettings = {
  pathname: process.env.PATHNAME,
  filename: process.env.FILENAME
};

// Upload file to Cloudinary. Get back https image link, copy to the clipboard
cloudinary.uploader.upload(`${fileSettings.pathname}${fileSettings.filename}`, function(result) {
  console.log(result.secure_url);
});
