import express from "express";

import {
  addUser,
  getAllUser,
  getUserTours,
  joinTour,
} from "../controllers/userController.js";

const router = express.Router();

router.get("/", getAllUser);
router.post("/", addUser);
router.put("/", joinTour);
router.get("/getUserTours",getUserTours)

export default router;
