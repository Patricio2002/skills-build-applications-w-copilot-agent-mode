import mongoose, { Schema } from 'mongoose';
const workoutSchema = new Schema({
    title: { type: String, required: true },
    focus: { type: String, required: true },
    durationMinutes: { type: Number, required: true },
    difficulty: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'], required: true },
    instructions: [{ type: String }],
}, { timestamps: true });
const Workout = mongoose.model('Workout', workoutSchema);
export default Workout;
