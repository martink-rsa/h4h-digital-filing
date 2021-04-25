import app from './app';
import config from './config';
import { connectDb } from './database';

connectDb()
  .then(() => {
    const port = config.port;
    app.listen(port, () => {
      console.log('Server is up on port:', port);
    });
  })
  .catch((err) => {
    console.log(`Failed to connect to the DB: `, err);
    process.exit(1);
  });
