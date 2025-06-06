import mongoose from "mongoose";

const certificateSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  domain: { type: String, required: true },
  duration: { type: String, required: true },
  certificationNo: { type: String, required: true, unique: true },
  startingDate: { type: Date, required: true },
  awardDate: { type: Date, required: true }
}, { timestamps: true });

export default mongoose.model("Certificate", certificateSchema);
