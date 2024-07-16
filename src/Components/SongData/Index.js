import ms1 from '../../Assets/Images/ms1.mp3';
import ms2 from '../../Assets/Images/ms2.mp3';
import ms3 from '../../Assets/Images/ms3.mp3';
import ms4 from '../../Assets/Images/ms4.mp3';
import ms5 from '../../Assets/Images/ms5.mp3';
import ms6 from '../../Assets/Images/ms6.mp3';
import ms7 from '../../Assets/Images/ms7.mp3';
import ms8 from '../../Assets/Images/ms8.mp3';
import ms9 from '../../Assets/Images/ms9.mp3';
const meditationData = [
  {
    id: 1,
    categoryName: 'Relaxation',
    categoryDesc: 'Relax your mind and body with soothing music.',
    categoryImage: 'https://example.com/images/relaxation.jpg',
    songs: [
      {
        id: 1,
        songName: 'Calm Waters',
        songDesc: 'Gentle sounds of water to help you relax.',
        songImage: 'https://example.com/images/calm_waters.jpg',
        songUrl: ms1,
      },
      {
        id: 2,
        songName: 'Forest Ambience',
        songDesc: 'Peaceful forest sounds to ease your mind.',
        songImage: 'https://example.com/images/forest_ambience.jpg',
        songUrl: ms2,
      },
    ],
  },
  {
    id: 2,
    categoryName: 'Focus',
    categoryDesc: 'Music to help you concentrate and stay focused.',
    categoryImage: 'https://example.com/images/focus.jpg',
    songs: [
      {
        id: 3,
        songName: 'Deep Focus',
        songDesc: 'Enhance your focus with this track.',
        songImage: 'https://example.com/images/deep_focus.jpg',
        songUrl: ms3,
      },
      {
        id: 4,
        songName: 'Brain Waves',
        songDesc: 'Stimulating brain waves for better concentration.',
        songImage: 'https://example.com/images/brain_waves.jpg',
        songUrl: ms4,
      },
    ],
  },
  {
    id: 3,
    categoryName: 'Sleep',
    categoryDesc: 'Drift off to sleep with calming music.',
    categoryImage: 'https://example.com/images/sleep.jpg',
    songs: [
      {
        id: 5,
        songName: 'Night Sky',
        songDesc: 'Relaxing sounds to help you sleep.',
        songImage: 'https://example.com/images/night_sky.jpg',
        songUrl: ms5,
      },
      {
        id: 6,
        songName: 'Dreamland',
        songDesc: 'Soothing music to guide you into a peaceful sleep.',
        songImage: 'https://example.com/images/dreamland.jpg',
        songUrl: ms6,
      },
    ],
  },
];

export default meditationData;
