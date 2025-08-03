# Athlete Performance Dashboard Demo
## Features

- **Video Display**: View athlete performance videos with status indicators (Complete, Processing, Failed)
- **Advanced Filtering**: Filter by year, month, week, duration, activity type, and status
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Black background with neon green accents
- **Horizontal Scrolling**: Video cards arranged in a scrollable container
- **Real-time Filtering**: Instant filtering and sorting of videos
- **Sample Data**: Includes 11 sample videos with realistic data


## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard-demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the server**
   ```bash
   npm start
   ```

4. **Open in browser**
   ```
   http://localhost:5005
   ```

## Project Structure

```
dashboard-demo/
├── package.json          # Dependencies and scripts
├── server.js            # Express server with mock data
├── public/
│   └── index.html       # Complete dashboard with all features
├── README.md            # This file
└── node_modules/        # Dependencies
```

## Usage

### Dashboard Overview
- View video cards with previews and status badges
- Use comprehensive filtering options to find specific videos
- Navigate through video cards with horizontal scrolling

### Filtering Options
- **Year/Month/Week**: Filter by time periods
- **Duration Range**: Set min/max duration in seconds
- **Activity Type**: Filter by training type (Sprinting, Strength Training, etc.)
- **Status**: Filter by video processing status (Complete, Processing, Failed)
- **Quick Sorting**: Sort by latest, oldest, or duration

### Video Cards
Each video card displays:
- Video preview (playable for completed videos)
- Status badge (Complete/Processing/Failed)
- Athlete name
- Upload date
- Duration
- Activity type
- Week number

## Sample Data

The demo includes 11 sample videos with various:
- **Athletes**: mahmoud, John Doe
- **Activity Types**: Sprinting, Long Distance, Strength Training, Agility Training, Endurance Training, Speed Training, Recovery Session, Flexibility Training, Power Training
- **Statuses**: Complete, Processing, Failed
- **Durations**: 25s to 180s
- **Time Periods**: April to August 2025

## Customization

### Adding More Videos
Edit the `mockDashboardData` object in `server.js`:

```javascript
allVideos: [
  {
    id: '12',
    title: 'New Video',
    status: 'COMPLETE',
    createdAt: '2025-08-29T10:00:00.000Z',
    filename: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    athletes: [{ name: 'New Athlete' }],
    activityType: 'New Activity',
    duration: 90,
    weekNumber: 35,
    year: 2025,
    month: 8
  }
]
```

## API Endpoints

- `GET /api/dashboard` - Returns dashboard data with videos and stats

## Development

### Local Development
```bash
npm run dev  # Uses nodemon for auto-restart
```

### Production
```bash
npm start
```



**Note**: This is a demo project showcasing the dashboard functionality. 