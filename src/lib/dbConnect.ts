import mongoose from "mongoose";

type ConnectOject = {
  isConnected?: number;
};

const connection: ConnectOject = {};

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("Already connected to database");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URI || "", {});
    //console.log(db)

    connection.isConnected = db.connections[0].readyState;
    //console.log(db.connections)

    console.log("DB is connected Successfully");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(1);
  }
}

export default dbConnect;
