import express from "express";
import { addTour, getAllTour, getTourUsers } from "../controllers/tourController.js";

const router = express.Router();

router.get("/", getAllTour);
router.post("/", addTour);
router.get("/:tourId",getTourUsers)


export default router;
