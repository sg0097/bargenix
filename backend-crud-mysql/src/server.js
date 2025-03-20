require("dotenv").config();
console.log("MONGO_URI:", process.env.MONGO_URI);

const app = require("./app");
const connectDB = require("./config/database");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

// Connect to Database
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
