import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Modal, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import styles from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';

import firePop from '../../Assets/Images/firePop.png';
import calendarPop from '../../Assets/Images/calendarPop.png';
import playPop from '../../Assets/Images/playPop.png';
import timerPop from '../../Assets/Images/timerPop.png';
import whiteCloseModal from '../../Assets/Images/whiteCloseModal.png';

const MenuPop = ({ visible, cancelOnPress }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const savedData = await AsyncStorage.getItem('userStats');
        if (savedData) {
          setData(JSON.parse(savedData));
        } else {
          console.log('No data found in AsyncStorage.');
        }
      } catch (e) {
        console.error('Failed to load data from AsyncStorage.', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useFocusEffect(
    useCallback(() => {
      const onBackPress = () => {
        cancelOnPress(); // Close the modal when navigating back
        return false; // Return false to allow default behavior (going back)
      };

      navigation.addListener('beforeRemove', onBackPress);

      return () => {
        navigation.removeListener('beforeRemove', onBackPress);
      };
    }, [navigation])
  );

  if (loading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.popView}>
          <TouchableOpacity onPress={cancelOnPress} style={styles.closeModalView}>
            <Image style={styles.closeModal} source={whiteCloseModal} />
          </TouchableOpacity>
          <View style={styles.popDetails}>
            <View style={styles.popDetailsBox}>
              <Image style={styles.popImg} source={firePop} />
              <View>
                <Text style={styles.moreText}>{data?.currentSteak || 'N/A'} days</Text>
                <Text style={styles.moreDesc}>Current streak</Text>
              </View>
            </View>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <Image style={styles.popImg} source={calendarPop} />
              <View>
                <Text style={styles.moreText}>{data?.longestSteak || 'N/A'} days</Text>
                <Text style={styles.moreDesc}>Longest streak</Text>
              </View>
            </View>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <Image style={styles.popImg} source={playPop} />
              <View>
                <Text style={styles.moreText}>{data?.totalTracks || 'N/A'}</Text>
                <Text style={styles.moreDesc}>Total tracks completed</Text>
              </View>
            </View>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <Image style={styles.popImg} source={timerPop} />
              <View>
                <Text style={styles.moreText}>{data?.minutesListened || 'N/A'}</Text>
                <Text style={styles.moreDesc}>Minutes listened</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.btnPop}>
              <Text style={styles.btnPopText}>Share</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MenuPop;
