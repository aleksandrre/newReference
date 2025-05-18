import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import tourRouter from "./routes/tourRoutes.js";
import userRouter from "./routes/userRoutes.js";

dotenv.config();
const port = process.env.PORT || 3001;
const mongo_url = process.env.MONGO_URL;

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use("/tour", tourRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log("სერვერი გაეშვა");

  mongoose
    .connect(mongo_url)
    .then(() => console.log("ბაზასთან წარმატებით დაკავშირდა"))
    .catch((err) =>
      console.log("ბაზასთან დაკავშირება ვერ მოხერხდა" + err.message)
    );
});
