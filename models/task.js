import mongoose, { Schema } from "mongoose";

const taskSchema = new Schema(
    {
        title: String,
        description: String,
        priority: String
    },
    {
        timestamps: true
    }
);

const Task = mongoose.models.Task || mongoose.model("Task", taskSchema)

export default Task;