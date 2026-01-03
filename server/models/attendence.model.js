import mongoose from "mongoose";

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    date: {
      type: Date,
      required: true,
      default: () => new Date().setHours(0, 0, 0, 0),
    },

    status: {
      type: String,
      enum: ["present", "absent", "late"],
      required: true,
    },

    checkInTime: {
      type: Date,
    },

    checkOutTime: {
      type: Date,
    },

    markedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // marked by admin or HR
    },
  },
  { timestamps: true }
);

export default mongoose.model("Attendance", attendanceSchema);
