import { connect } from "mongoose";

let isConnected = false;

const connectDB = async () => {
  if (isConnected) return;

  await connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  isConnected = true;
  console.log("MongoDB connected");
};

export default connectDB;
