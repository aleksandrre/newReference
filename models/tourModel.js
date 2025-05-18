import mongoose from "mongoose";

const tourSchema = new mongoose.Schema({
  name: String,
  destination: String,
  users:[{
     
          type: mongoose.Schema.Types.ObjectId,
          ref:"User"
        
  }]
});

const Tour = mongoose.model("Tour", tourSchema);
export default Tour;
