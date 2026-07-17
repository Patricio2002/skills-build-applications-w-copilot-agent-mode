import { Router } from 'express';

const router = Router();

router.get('/health', (_req, res) => {
  res.json({ status: 'ok', service: 'octofit-backend' });
});

router.get('/leaderboard', (_req, res) => {
  res.json([
    { name: 'Rhea', points: 1280 },
    { name: 'Marco', points: 1140 },
    { name: 'Priya', points: 1095 },
  ]);
});

router.get('/workouts', (_req, res) => {
  res.json([
    { name: 'HIIT Burn', description: '6 rounds of 40s effort and 20s recovery.' },
    { name: 'Mobility Reset', description: 'Stretch, stabilize, and recover between training sessions.' },
  ]);
});

export default router;
