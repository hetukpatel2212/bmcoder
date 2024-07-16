import React, { useState, useEffect, useCallback } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import TrackPlayer, { TrackPlayerEvents, STATE_PLAYING, STATE_PAUSED } from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import styles from './style'; // Check if import path is correct

// Your image imports
import whiteCloseModal from '../../Assets/Images/whiteCloseModal.png';
import mainImage from '../../Assets/Images/mainImage.jpg';
import backward from '../../Assets/Images/backward.png';
import forward from '../../Assets/Images/forward.png';
import playBtn from '../../Assets/Images/playBtn.png';
import stopBtn from '../../Assets/Images/stopBtn.png';
import Color from '../../Themes/Colors';
import like from '../../Assets/Images/like.png';
import downloadMusic from '../../Assets/Images/downloadMusic.png';
import musicNote from '../../Assets/Images/musicNote.png';
import fastForward from '../../Assets/Images/fastForward.png';

const MusicPlayer = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { song: initialSong } = route.params;
  const [song, setSong] = useState(initialSong);
  const [isPlaying, setIsPlaying] = useState(false);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const initializePlayer = async () => {
      try {
        await TrackPlayer.setupPlayer();
        TrackPlayer.addEventListener(TrackPlayerEvents.PLAYBACK_STATE, ({ state }) => {
          if (state === STATE_PLAYING) {
            setIsPlaying(true);
          } else if (state === STATE_PAUSED) {
            setIsPlaying(false);
          }
        });
      } catch (error) {
        console.error('Error setting up player:', error);
      }
    };

    initializePlayer();
  }, []);

  useEffect(() => {
    const loadSong = async () => {
      if (song) {
        try {
          await TrackPlayer.reset();
          await TrackPlayer.add({
            id: song.id.toString(),
            url: song.song,
            title: song.songName,
            artist: 'Unknown Artist', // Replace with actual artist name if available
            artwork: song.songImage || mainImage, // Replace with actual artwork or default image
          });
          await TrackPlayer.play();
          setIsPlaying(true);

          const interval = setInterval(async () => {
            const currentPosition = await TrackPlayer.getPosition();
            const trackDuration = await TrackPlayer.getDuration();
            setPosition(currentPosition);
            setDuration(trackDuration);
          }, 1000);

          return () => {
            clearInterval(interval);
            TrackPlayer.destroy();
          };
        } catch (error) {
          console.error('Error loading song:', error);
        }
      }
    };

    loadSong();
  }, [song]);

  useEffect(() => {
    if (initialSong && initialSong.id !== song.id) {
      setSong(initialSong);
    }
  }, [initialSong]);

  const togglePlay = useCallback(async () => {
    try {
      if (isPlaying) {
        await TrackPlayer.pause();
      } else {
        await TrackPlayer.play();
      }
      setIsPlaying(!isPlaying);
    } catch (error) {
      console.error('Error toggling play:', error);
    }
  }, [isPlaying]);

  const handleBackward = async () => {
    try {
      const newPosition = position - 10 < 0 ? 0 : position - 10;
      await TrackPlayer.seekTo(newPosition);
    } catch (error) {
      console.error('Error seeking backward:', error);
    }
  };

  const handleForward = async () => {
    try {
      const newPosition = position + 10 > duration ? duration : position + 10;
      await TrackPlayer.seekTo(newPosition);
    } catch (error) {
      console.error('Error seeking forward:', error);
    }
  };

  const formatTime = (seconds) => {
    if (isNaN(seconds)) return '00:00';

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    const formattedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : `${remainingSeconds}`;

    return `${formattedMinutes}:${formattedSeconds}`;
  };

  const handleSlidingComplete = async (value) => {
    try {
      await TrackPlayer.seekTo(value);
    } catch (error) {
      console.error('Error sliding complete:', error);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.headerView}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image style={styles.closeIcon} source={whiteCloseModal} />
      </TouchableOpacity>
      <View style={styles.musicImg}>
        {song && (
          <>
            <Image style={styles.musicImgIcon} source={song.songImage || mainImage} />
            <Text style={styles.musicTitle}>{song.songName}</Text>
          </>
        )}
        <View style={styles.progressBarContainer}>
          <Slider
            style={{ width: '100%', height: 40 }}
            minimumValue={0}
            maximumValue={duration}
            value={position}
            minimumTrackTintColor={Color.white}
            maximumTrackTintColor={Color.textGrey}
            thumbTintColor={Color.white}
            onSlidingComplete={handleSlidingComplete}
          />
          <View style={styles.timingContainer}>
            <Text style={styles.timingText}>{formatTime(position)}</Text>
            <Text style={styles.timingText}>{formatTime(duration)}</Text>
          </View>
        </View>
        <View style={styles.musicPlayerIcons}>
          <TouchableOpacity onPress={handleBackward}>
            <Image style={styles.smallIcon} source={backward} />
          </TouchableOpacity>
          <TouchableOpacity onPress={togglePlay}>
            <Image
              style={styles.bigIcon}
              source={isPlaying ? stopBtn : playBtn}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForward}>
            <Image style={styles.smallIcon} source={forward} />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomIconView}>
          <TouchableOpacity>
            <Image style={styles.bottomIcon} source={downloadMusic} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.bottomIcon} source={musicNote} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.bottomIcon} source={fastForward} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image style={styles.bottomIcon} source={like} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default MusicPlayer;
