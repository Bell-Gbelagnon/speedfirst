const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'public/files'); 
    },
    filename: (req, file, callback) => {
        const name = file.originalname.split("").join("_");
        const extensionArray = file.mimetype.split('/');
        const extension = extensionArray[extensionArray.length - 1];
        const myFilename = name + Date.now() + '.' + extension;
        callback(null, myFilename);
    },
});

module.exports = multer({ storage }).single("file");   
