import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './style';
import update from '../../Assets/Images/update.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

const Form = () => {
  const [currentSteak, setCurrentSteak] = useState('');
  const [longestSteak, setLongestSteak] = useState('');
  const [totalTracks, setTotalTracks] = useState('');
  const [minutesListened, setMinutesListened] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const loadData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userStats');
        if (savedData) {
          const { currentSteak, longestSteak, totalTracks, minutesListened } = JSON.parse(savedData);
          setCurrentSteak(currentSteak);
          setLongestSteak(longestSteak);
          setTotalTracks(totalTracks);
          setMinutesListened(minutesListened);
        }
      } catch (e) {
        console.error('Failed to load data from AsyncStorage.', e);
      }
    };
    loadData();
  }, []);

  

  const saveData = async () => {
    try {
      await AsyncStorage.setItem('userStats', JSON.stringify({
        currentSteak,
        longestSteak,
        totalTracks,
        minutesListened
      }));
      Alert.alert('Success', 'Data saved successfully!');
      navigation.navigate('Home');
    } catch (e) {
      Alert.alert('Error', 'Failed to save data.');
    }
  };

  return (
    <View style={styles.mainView}>
      <View style={styles.headingView}>
        <Text style={styles.headingText}>Edit your stats</Text>
      </View>
      <View style={styles.formView}>
        <View style={styles.inputFields}>
          <Text style={styles.inputLabel}>Current streak (in days) *</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            placeholder={currentSteak ? currentSteak.toString() : "Current streak"}
            value={currentSteak}
            onChangeText={text => setCurrentSteak(text)}
          />
        </View>
        <View style={styles.inputFields}>
          <Text style={styles.inputLabel}>Longest streak (in days) *</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            placeholder={longestSteak ? longestSteak.toString() : "Longest streak"}
            value={longestSteak}
            onChangeText={text => setLongestSteak(text)}
          />
        </View>
        <View style={styles.inputFields}>
          <Text style={styles.inputLabel}>Total tracks completed *</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            placeholder={totalTracks ? totalTracks.toString() : "Total tracks completed"}
            value={totalTracks}
            onChangeText={text => setTotalTracks(text)}
          />
        </View>
        <View style={styles.inputFields}>
          <Text style={styles.inputLabel}>Minutes listened *</Text>
          <TextInput
            style={styles.inputBox}
            keyboardType="numeric"
            placeholder={minutesListened ? minutesListened.toString() : "Minutes listened"}
            value={minutesListened}
            onChangeText={text => setMinutesListened(text)}
          />
        </View>
      </View>
      <TouchableOpacity style={styles.updateBtn} onPress={saveData}>
        <Text style={styles.updateText}>Update</Text>
        <Image style={styles.updatIcon} source={update}/>
      </TouchableOpacity>
    </View>
  );
};

export default Form;
