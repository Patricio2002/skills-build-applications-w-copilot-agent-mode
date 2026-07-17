import mongoose from 'mongoose';
import User from '../models/User.js';
import Team from '../models/Team.js';
import Activity from '../models/Activity.js';
import LeaderboardEntry from '../models/LeaderboardEntry.js';
import Workout from '../models/Workout.js';

const connectionString = process.env.MONGODB_URI || 'mongodb://localhost:27017/octofit_db';

/**
 * Seed the octofit_db database with test data
 */
async function seedDatabase() {
  try {
    await mongoose.connect(connectionString);

    console.log('Connected to octofit_db');

    await Promise.all([
      User.deleteMany({}),
      Team.deleteMany({}),
      Activity.deleteMany({}),
      LeaderboardEntry.deleteMany({}),
      Workout.deleteMany({}),
    ]);

    const users = await User.insertMany([
      {
        name: 'Avery Stone',
        email: 'avery.stone@octofit.dev',
        role: 'Athlete',
        goals: ['Improve endurance', 'Hit 5 workouts weekly'],
      },
      {
        name: 'Mia Chen',
        email: 'mia.chen@octofit.dev',
        role: 'Coach',
        goals: ['Coach recovery sessions'],
      },
      {
        name: 'Noah Patel',
        email: 'noah.patel@octofit.dev',
        role: 'Trainer',
        goals: ['Lead strength circuits'],
      },
    ]);

    await Team.insertMany([
      {
        name: 'Storm Squad',
        sport: 'HIIT',
        members: [users[0]._id],
      },
      {
        name: 'Core Crew',
        sport: 'Strength',
        members: [users[1]._id, users[2]._id],
      },
    ]);

    await Activity.insertMany([
      {
        userId: users[0]._id,
        type: 'Workout',
        durationMinutes: 45,
        notes: 'Tempo cycling session',
      },
      {
        userId: users[1]._id,
        type: 'Run',
        durationMinutes: 30,
        notes: 'Recovery run',
      },
    ]);

    await LeaderboardEntry.insertMany([
      { userId: users[0]._id, points: 1280, rank: 1 },
      { userId: users[1]._id, points: 1140, rank: 2 },
      { userId: users[2]._id, points: 1095, rank: 3 },
    ]);

    await Workout.insertMany([
      {
        title: 'HIIT Burn',
        focus: 'Cardio',
        durationMinutes: 28,
        difficulty: 'Intermediate',
        instructions: ['Warm up 5 min', '40s work / 20s rest', 'Cooldown 5 min'],
      },
      {
        title: 'Mobility Reset',
        focus: 'Recovery',
        durationMinutes: 20,
        difficulty: 'Beginner',
        instructions: ['Hip opener', 'Thoracic rotation', 'Deep breathing'],
      },
    ]);

    console.log('Database seeding complete');
    await mongoose.disconnect();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seedDatabase();
