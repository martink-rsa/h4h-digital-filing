const uploadFile = require("../middleware/upload");

const upload = async (req, res) => {
    try {
        await uploadFile(req, res);

        if(req.file == undefined)
        {
            return res.status(400).send({ message: "Please upload a file" })
        }

        res.status(200).send({message: "Upload successful:" + req.file.originalname,})
    } catch (err)
    {
        if(err.code == "LIMIT_FILE_SIZE"){
            return res.status(500).send({message: "File size cannot be larger than 10MB",})
        }
        
        res.status(500).send({message: 'Cannot upload file. Error:' + err.message,});
    }
};

const getListFiles = (req, res) => {
    const diretoryPath = __basedir + "/resources/static/assets/uploads";

    fs.readdir(diretoryPath, function(err, files){
        if (err){
            res.status(500).send({message:"Cannot get file list. Error:" + err.message,});
        }

        let fileInfo = [];
        
        files.forEach((file) => {
            fileInfos.push({
                name: file,
                url: baseUrl + file,
            });
        });

        res.status(200).send(fileInfos);
        });
    };

    const download = (req, res) => {
    const fileName = req.params.name;
    const directoryPath = __basedir + "/resources/static/assets/uploads/";

    res.dowload(directoryPath + fileName, (err) => {
        if(err){
            res.status(500).send({ message: "Cannot download the file. Error: " + err.message,});
        }
    });
};

module.exports = {
    upload,
    getListFiles,
    download,
};