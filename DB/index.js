const { default: mongoose, connect } = require("mongoose");

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.DBURL);
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
}

module.exports = connectDB