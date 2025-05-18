import Tour from "../models/tourModel.js";

export const addTour = async (req, res) => {
  try {
    //     const { name, destination } = req.body;
    console.log(req.body);
    const tour = await Tour.create(req.body);
    res.status(201).json(tour);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getAllTour = async (req, res) => {
  try {
    const tours = await Tour.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getTourUsers = async (req, res) => {
  try {
    const { tourId } = req.params;
    

    if (!tourId) {
      return res.status(400).json("ტურის აიდი არ არის მოწოდებული");
    }
    const tour = await Tour.findById(tourId).populate("users");
    if (!tourId) {
      return res.status(400).json("ტური  ვერ მოიძებნა");
    }
    res.status(200).json(tour);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};
