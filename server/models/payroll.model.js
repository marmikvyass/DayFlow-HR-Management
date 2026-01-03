import mongoose from "mongoose";

const payrollSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    month: {
      type: Date,
      required: true,
    },

    basicSalary: {
      type: Number,
      required: true,
    },

    deductions: {
      type: Number,
      default: 0,
    },

    totalSalary: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["pending", "processed", "done"],
      default: "unpaid",
    },

    paidOn: {
      type: Date,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payroll", payrollSchema);
