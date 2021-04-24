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
        res.status(500).send({message: 'Error uploading file:" ${err}',});
    }
};