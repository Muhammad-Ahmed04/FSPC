import mongoose from 'mongoose';

const DB_URI = 'mongodb+srv://ahmed:Password.123@fspc.j3x1x2u.mongodb.net/';

async function connect() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Database Successfully Connected');
  } catch (error) {
    console.error('Error connecting to the database:', error);
    // Handle the error properly, e.g., throw an exception
    throw error;
  }
}

export default connect;



// import { MongoMemoryServer } from 'mongodb-memory-server';

// async function connect() {
//   const mongod = await MongoMemoryServer.create();
//   const getUri = mongod.getUri();

//   mongoose.set('strictQuery', true)
//   const db = await mongoose.connect(getUri);
//   console.log("Database Connected");
//   return db;
// }

// export default connect; // Use export for ES6 modules
