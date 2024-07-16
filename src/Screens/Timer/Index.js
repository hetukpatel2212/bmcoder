import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './style';
import backIcon from '../../Assets/Images/backIcon.png';

const Timer = ({navigation}) => {
  const [timer, setTimer] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  const startTimer = () => {
    if (intervalRef.current !== null) return; // Timer already running
    intervalRef.current = setInterval(() => {
      setTimer(prevTimer => prevTimer + 1);
    }, 1000);
    setIsRunning(true);
  };

  const stopTimer = () => {
    if (intervalRef.current === null) return; // Timer not running
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setIsRunning(false);
  };

  const resetTimer = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
    setTimer(0);
    setIsRunning(false);
  };

  const formatTime = time => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headerView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image style={styles.headerIcon} source={backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Timer</Text>
      </View>
      <View style={styles.timerContainer}>
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.button,
              {backgroundColor: isRunning ? 'gray' : 'green'},
            ]}
            onPress={isRunning ? stopTimer : startTimer}>
            <Text style={styles.buttonText}>
              {isRunning ? 'Stop' : 'Start'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, {backgroundColor: 'red'}]}
            onPress={resetTimer}
            disabled={timer === 0 && !isRunning}>
            <Text style={styles.buttonText}>Reset</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Timer;
