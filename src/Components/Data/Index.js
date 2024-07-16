// Define meditation data
const meditationData = [
  {
    id: 1,
    categoryName: "Challenges",
    categoryDesc: "Relax your mind and body with soothing music.",
    categoryImage: require('../../Assets/Images/air1.jpeg'),
    songs: [
      {
        id: 1,
        songName: "Calm Waters",
        songDesc: "Gentle sounds of water to help you relax.",
        songImage: require('../../Assets/Images/bg1.jpg'),
        song: require('../../Assets/Music/ms1.mp3')
      },
      {
        id: 2,
        songName: "Forest Ambience",
        songDesc: "Peaceful forest sounds to ease your mind.",
        songImage: require('../../Assets/Images/bg2.jpg'),
        song: require('../../Assets/Music/ms2.mp3')
      }
    ]
  },
  {
    id: 2,
    categoryName: "Focus",
    categoryDesc: "Music to help you concentrate and stay focused.",
    categoryImage: require('../../Assets/Images/air2.jpeg'),
    songs: [
      {
        id: 3,
        songName: "Deep Focus",
        songDesc: "Enhance your focus with this track.",
        songImage: require('../../Assets/Images/bg3.jpg'),
        song: require('../../Assets/Music/ms3.mp3')
      },
      {
        id: 4,
        songName: "Brain Waves",
        songDesc: "Stimulating brain waves for better concentration.",
        songImage: require('../../Assets/Images/bg4.jpg'),
        song: require('../../Assets/Music/ms4.mp3')
      }
    ]
  },
  {
    id: 3,
    categoryName: "Sleep",
    categoryDesc: "Calm and peaceful music to help you sleep.",
    categoryImage: require('../../Assets/Images/bg5.jpg'),
    songs: [
      {
        id: 5,
        songName: "Night Rain",
        songDesc: "Soft rain sounds to aid your sleep.",
        songImage: require('../../Assets/Images/air3.jpeg'),
        song: require('../../Assets/Music/ms5.mp3')
      },
      {
        id: 6,
        songName: "Dreamy Night",
        songDesc: "Gentle melodies for a peaceful night's sleep.",
        songImage: require('../../Assets/Images/bg6.jpg'),
        song: require('../../Assets/Music/ms6.mp3')
      }
    ]
  },
  {
    id: 4,
    categoryName: "Meditation",
    categoryDesc: "Music for deep meditation and mindfulness.",
    categoryImage: require('../../Assets/Images/bg7.jpg'),
    songs: [
      {
        id: 7,
        songName: "Zen Garden",
        songDesc: "Calming sounds of a zen garden.",
        songImage: require('../../Assets/Images/bg7.jpg'),
        song: require('../../Assets/Music/ms7.mp3')
      },
      {
        id: 8,
        songName: "Peaceful Mind",
        songDesc: "Music to help you achieve a peaceful state of mind.",
        songImage: require('../../Assets/Images/air4.jpeg'),
        song: require('../../Assets/Music/ms8.mp3')
      }
    ]
  },
  {
    id: 5,
    categoryName: "Energy",
    categoryDesc: "Music to boost your energy and motivation.",
    categoryImage: require('../../Assets/Images/bg9.jpg'),
    songs: [
      {
        id: 9,
        songName: "Morning Boost",
        songDesc: "Energizing music to start your day.",
        songImage: require('../../Assets/Images/bg9.jpg'),
        song: require('../../Assets/Music/ms9.mp3')
      },
      {
        id: 10,
        songName: "Power Up",
        songDesc: "High-energy music to keep you motivated.",
        songImage: require('../../Assets/Images/bg4.jpg'),
        song: require('../../Assets/Music/ms1.mp3')
      }
    ]
  },
  {
    id: 6,
    categoryName: "Nature",
    categoryDesc: "Sounds of nature to relax and rejuvenate.",
    categoryImage: require('../../Assets/Images/bg5.jpg'),
    songs: [
      {
        id: 11,
        songName: "Ocean Waves",
        songDesc: "Relaxing ocean wave sounds.",
        songImage: require('../../Assets/Images/bg5.jpg'),
        song: require('../../Assets/Music/ms2.mp3')
      },
      {
        id: 12,
        songName: "Bird Songs",
        songDesc: "Melodious bird songs for a refreshing experience.",
        songImage: require('../../Assets/Images/bg5.jpg'),
        song: require('../../Assets/Music/ms3.mp3')
      }
    ]
  },
  {
    id: 7,
    categoryName: "Healing",
    categoryDesc: "Music for healing and wellness.",
    categoryImage: require('../../Assets/Images/bg6.jpg'),
    songs: [
      {
        id: 13,
        songName: "Healing Frequencies",
        songDesc: "Frequencies to promote healing.",
        songImage: require('../../Assets/Images/bg6.jpg'),
        song: require('../../Assets/Music/ms4.mp3')
      },
      {
        id: 14,
        songName: "Wellness Melody",
        songDesc: "Melody to enhance your wellness journey.",
        songImage: require('../../Assets/Images/bg6.jpg'),
        song: require('../../Assets/Music/ms5.mp3')
      }
    ]
  },
  {
    id: 8,
    categoryName: "Adventure",
    categoryDesc: "Music to inspire adventure and exploration.",
    categoryImage: require('../../Assets/Images/bg7.jpg'),
    songs: [
      {
        id: 15,
        songName: "Journey Begins",
        songDesc: "Music to inspire your next adventure.",
        songImage: require('../../Assets/Images/bg7.jpg'),
        song: require('../../Assets/Music/ms6.mp3')
      },
      {
        id: 16,
        songName: "Explorer",
        songDesc: "Tunes for the adventurous spirit.",
        songImage: require('../../Assets/Images/bg7.jpg'),
        song: require('../../Assets/Music/ms7.mp3')
      }
    ]
  },
  {
    id: 9,
    categoryName: "Spiritual",
    categoryDesc: "Music for spiritual growth and enlightenment.",
    categoryImage: require('../../Assets/Images/bg8.jpg'),
    songs: [
      {
        id: 17,
        songName: "Inner Peace",
        songDesc: "Music to connect with your inner self.",
        songImage: require('../../Assets/Images/bg8.jpg'),
        song: require('../../Assets/Music/ms9.mp3')
      },
      {
        id: 18,
        songName: "Enlightenment",
        songDesc: "Music to guide your spiritual journey.",
        songImage: require('../../Assets/Images/bg9.jpg'),
        song: require('../../Assets/Music/ms1.mp3')
      }
    ]
  }
];

export default meditationData;
