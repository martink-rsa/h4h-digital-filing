import * as express from 'express';
import controller from 'controller';

const app = express();

app.use(express.json());

app.post("/upload", controller.upload);
app.get("/files", controller.getListFiles);
app.get("/files/:name", controller.download);

export default app;
