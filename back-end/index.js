const express = require("express");
const cors = require("cors");

require("dotenv").config();

const usersRoute = require("./routes/admin");
const votersRoute = require("./routes/voter");
const electionsRoute = require("./routes/election");

const app = express();

app.use(cors());
app.use(express.json());
require("./middlewares/passport");

//ROUTES
app.use("/api/admins", usersRoute);
app.use("/api/voters", votersRoute);
app.use("/api/elections", electionsRoute);

app.listen(3005, (error) => {
  if (error) console.log("Unable to start the server");
  else console.log("server listening on port 3005");
});
