import mongoose from "mongoose";

export const ConnectDB = async () => {
  await mongoose.connect(
    "mongodb+srv://roshan:roshan@cluster0.nxkwnbu.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  console.log("DB connected");
};
