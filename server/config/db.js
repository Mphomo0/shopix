import mongoose from 'mongoose'

// Function to connect to the MongoDB database
const connectDB = async () => {
  try {
    // Attempt to connect to the MongoDB database using the provided URI
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    })

    // If the connection is successful, log a success message
    console.log(`mongodb Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    // If there is an error during the connection, log an error message and exit the process
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB
