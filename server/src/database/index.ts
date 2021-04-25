import * as mongoose from 'mongoose';
import config from '../config';

const connectDb = (): Promise<typeof mongoose> => {
  return mongoose.connect(config.databaseUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
};

export { connectDb };
