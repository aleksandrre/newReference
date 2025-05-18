import Tour from "../models/tourModel.js";
import User from "../models/userModel.js";

export const addUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getAllUser = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const joinTour = async (req, res) => {
  try {
    const { userId, tourId } = req.body;

    const user = await User.findById(userId);
    const tour = await Tour.findById(tourId);

    if (!user || !tour) {
      return res.status(400).json("იუზერი ან ტური ვერ მოიძებნა");
    }
    user.tours.push(tourId);
    await user.save();
    tour.users.push(userId);
    await tour.save();

    res.status(200).json("იუზერი წარმატებით დაჯოინდა");
  } catch (error) {
    res.status(500).json("სერვერის შეცდომა" + error.message);
  }
};

export const getUserTours = async (req, res) => {
  req.user.userId
  if (!userId) {
    res
      .status(400)
      .json({ success: false, message: "აიდი არ არის გადმოცემული" });
  }
  const user = await User.findById(userId).populate("tours");
  if (!user) {
    res.status(400).json({ success: false, message: "იუზერი არ არსებობს " });
  }
  res.status(200).json(user);
};
