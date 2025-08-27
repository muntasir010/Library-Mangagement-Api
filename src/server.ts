import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import config from "./config";
import routes from "./modules/routes";
const port = config.port;
const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5000",
      "https://library-management-api-psi-rose.vercel.app/",
    ],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api", routes);

app.get("/", (req, res) => {
  res.send("Server running");
});

// app.listen(port, () => {
//   console.log(`server running on port: ${port}`);
// });

async function main() {
  try {
    await mongoose.connect(config.database_url!);
    console.log(`connect to database on port ${port}`);

    app.listen(port, () => {
      console.log(`server running on port: ${port}`);
    });
  } catch (error) {
    console.error("❌ Database connection failed:", error);
  }
}

// async function server() {
//   try {
//     await mongoose.connect(config.database_url!);

//     console.log(`connect to database on port ${port}`);
//   } catch (error) {
//     console.error(`server error: ${error}`);
//   }
// }

// server();
main();
