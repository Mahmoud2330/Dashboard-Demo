const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5005;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/uploads', express.static(path.join(__dirname, 'public/uploads')));

// Mock data for dashboard
const mockDashboardData = {
  totalAthletes: 5,
  totalVideos: 11,
  totalMetrics: 2,
  recentVideos: [
    { id: '1', title: 'test 10', status: 'COMPLETE', createdAt: '2025-08-28T11:52:57.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Sprinting', duration: 45, weekNumber: 35, year: 2025, month: 8 },
    { id: '2', title: 'test 6', status: 'COMPLETE', createdAt: '2025-07-31T11:51:35.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Long Distance', duration: 120, weekNumber: 31, year: 2025, month: 7 },
    { id: '3', title: 'test 3', status: 'COMPLETE', createdAt: '2025-07-30T11:47:29.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Strength Training', duration: 90, weekNumber: 31, year: 2025, month: 7 },
    { id: '4', title: 'test 5', status: 'PROCESSING', createdAt: '2025-07-29T11:48:25.000Z', filename: 'sample-video-4.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Agility Training', duration: 60, weekNumber: 30, year: 2025, month: 7 },
    { id: '5', title: 'test 8', status: 'COMPLETE', createdAt: '2025-07-27T11:52:27.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Sprinting', duration: 30, weekNumber: 30, year: 2025, month: 7 }
  ],
  allVideos: [
    { id: '1', title: 'test 10', status: 'COMPLETE', createdAt: '2025-08-28T11:52:57.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Sprinting', duration: 45, weekNumber: 35, year: 2025, month: 8 },
    { id: '2', title: 'test 6', status: 'COMPLETE', createdAt: '2025-07-31T11:51:35.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Long Distance', duration: 120, weekNumber: 31, year: 2025, month: 7 },
    { id: '3', title: 'test 3', status: 'COMPLETE', createdAt: '2025-07-30T11:47:29.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Strength Training', duration: 90, weekNumber: 31, year: 2025, month: 7 },
    { id: '4', title: 'test 5', status: 'PROCESSING', createdAt: '2025-07-29T11:48:25.000Z', filename: 'sample-video-4.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Agility Training', duration: 60, weekNumber: 30, year: 2025, month: 7 },
    { id: '5', title: 'test 8', status: 'COMPLETE', createdAt: '2025-07-27T11:52:27.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Sprinting', duration: 30, weekNumber: 30, year: 2025, month: 7 },
    { id: '6', title: 'video 2', status: 'COMPLETE', createdAt: '2025-05-21T01:42:00.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Endurance Training', duration: 180, weekNumber: 21, year: 2025, month: 5 },
    { id: '7', title: 'test 4', status: 'FAILED', createdAt: '2025-05-15T11:47:53.000Z', filename: 'sample-video-7.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Speed Training', duration: 75, weekNumber: 20, year: 2025, month: 5 },
    { id: '8', title: 'Test Video', status: 'COMPLETE', createdAt: '2025-05-12T16:59:15.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', athletes: [{ name: 'John Doe' }], activityType: 'Recovery Session', duration: 45, weekNumber: 19, year: 2025, month: 5 },
    { id: '9', title: 'test 9', status: 'COMPLETE', createdAt: '2025-04-16T10:52:41.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Flexibility Training', duration: 60, weekNumber: 16, year: 2025, month: 4 },
    { id: '10', title: 'test 7', status: 'COMPLETE', createdAt: '2025-04-09T10:52:05.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Power Training', duration: 90, weekNumber: 15, year: 2025, month: 4 },
    { id: '11', title: 'test 2', status: 'COMPLETE', createdAt: '2025-05-23T11:43:18.000Z', filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4', athletes: [{ name: 'mahmoud' }], activityType: 'Sprinting', duration: 25, weekNumber: 21, year: 2025, month: 5 }
  ],
  recentMetrics: [
    { id: '1', name: 'Speed', value: 25.5, unit: 'km/h', athlete: { name: 'mahmoud' } },
    { id: '2', name: 'Distance', value: 100, unit: 'm', athlete: { name: 'John Doe' } }
  ],
  metricsByName: [
    { name: 'Speed', totalValue: 25.5, count: 1 },
    { name: 'Distance', totalValue: 100, count: 1 }
  ]
};

// API Routes
app.get('/api/dashboard', (req, res) => {
  res.json(mockDashboardData);
});

// Serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Dashboard Demo Server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} to view the dashboard`);
}); 