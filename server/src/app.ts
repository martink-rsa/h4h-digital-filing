import * as express from 'express';

const fileController = require("./controller/file.controller")
const app = express();

app.use(express.json());

app.post("/upload", fileController.upload);
app.get("/files", fileController.getListFiles);
app.get("/files/:name", fileController.download);

export default app;
