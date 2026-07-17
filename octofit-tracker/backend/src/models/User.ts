import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    role: { type: String, enum: ['Athlete', 'Coach', 'Trainer'], required: true },
    goals: [{ type: String }],
  },
  { timestamps: true },
);

const User = mongoose.model('User', userSchema);

export default User;
