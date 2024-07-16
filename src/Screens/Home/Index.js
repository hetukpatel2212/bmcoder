import React, { useState, useEffect } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, ActivityIndicator } from 'react-native';
import styles from './style';

import welcomeIcon from '../../Assets/Images/welcomeIcon.png';
import more from '../../Assets/Images/more.png';
import fireIcon from '../../Assets/Images/fireIcon.png';
import roundIcon from '../../Assets/Images/roundIcon.png';
import mainImage from '../../Assets/Images/meditation.jpg';
import box1 from '../../Assets/Images/box1.png';
import box2 from '../../Assets/Images/box2.png';
import box3 from '../../Assets/Images/box3.png';
import box5 from '../../Assets/Images/box5.png';
import tipsIcon from '../../Assets/Images/tipsIcon.png';
import MenuPop from '../../Components/MenuPop/Index';
import { useNavigation, useFocusEffect } from '@react-navigation/native'; // Import useFocusEffect
import MeditationPop from '../../Components/MeditationPop/Index';
import FormPop from '../../Components/FormPop/Index';
import AsyncStorage from '@react-native-async-storage/async-storage';
import meditationData from '../../Components/Data/Index';

const Home = () => {
  const [pop, setpop] = useState(false);
  const [formPop, setformpop] = useState(false);
  const [meditationPop, setmeditationPop] = useState(false);
  const [currentSteak, setCurrentSteak] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const navigation = useNavigation();

  const challengesCategory = meditationData.find(category => category.id === 1);

  // Function to load data from AsyncStorage
  const loadData = async () => {
    try {
      const savedData = await AsyncStorage.getItem('userStats');
      if (savedData) {
        const { currentSteak } = JSON.parse(savedData);
        setCurrentSteak(currentSteak);
      } else {
        setCurrentSteak(0); // Default value if no data is found
      }
    } catch (e) {
      console.error('Failed to load data from AsyncStorage.', e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData(); // Load data on initial component mount
  }, []);

  // Use useFocusEffect to reload data when the screen gains focus
  useFocusEffect(
    React.useCallback(() => {
      const unsubscribe = navigation.addListener('focus', () => {
        loadData(); // Reload data when screen is focused
      });

      return unsubscribe;
    }, [navigation])
  );

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerView}>
          <View style={styles.welcomeView}>
            <View style={styles.welcomeDetails}>
              <Image style={styles.welcomeImg} source={welcomeIcon} />
              <Text style={styles.welcomeTitle}>Welcome</Text>
            </View>
            <TouchableOpacity onPress={() => setformpop(true)}>
              <Image style={styles.moreImg} source={more} />
            </TouchableOpacity>
          </View>
          <View style={styles.headerBoxView}>
            <TouchableOpacity
              style={styles.headerBox}
              onPress={() => setpop(true)}>
              <Image style={styles.headerBoxImg} source={fireIcon} />
              <Text style={styles.headerBoxText}>{currentSteak !== null ? currentSteak : 0}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerBox}
              onPress={() => setpop(true)}>
              <Image style={styles.headerBoxImg} source={roundIcon} />
              <Text style={styles.headerBoxText}>1285</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.mainView}>
          <View style={styles.mainBoxView}>
            <TouchableOpacity
              style={styles.mainBox}
              onPress={() => {
                navigation.navigate('Tips');
              }}>
              <Image style={styles.headerBoxImg} source={tipsIcon} />
              <Text style={styles.mainBoxText}>10 Tips</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainBox}
              onPress={() => {
                navigation.navigate('Downloads');
              }}>
              <Image style={styles.headerBoxImg} source={box2} />
              <Text style={styles.mainBoxText}>Downloads</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainBox}
              onPress={() => {
                navigation.navigate('Timer');
              }}>
              <Image style={styles.headerBoxImg} source={box3} />
              <Text style={styles.mainBoxText}>Timer</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mainBox}
              onPress={() => {
                navigation.navigate('MeditationDetails', { category: challengesCategory });
              }}>
              <Image style={styles.headerBoxImg} source={box5} />
              <Text style={styles.mainBoxText}>Challenges</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.mainImgView}>
            <TouchableOpacity style={styles.mainImgDetails}>
              <Image style={styles.mainImg} source={mainImage} />
              <View style={styles.mainImgText}>
                <Text style={styles.mainImgTitle}>The Medito course</Text>
                <Text style={styles.mainImgDesc}>
                  Your journey to mindfulness
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.authorComment}>
            <Text style={styles.authorCommentText}>
              Life isn't as serious as the mind makes it out to be.
            </Text>
            <Text style={styles.authorCommentText}>- Eckhart Tolle</Text>
          </View>
        </View>
      </ScrollView>
      <MenuPop
        visible={pop}
        cancelOnPress={() => {
          setpop(false);
        }}
      />
      <FormPop
        visible={formPop}
        cancelOnPress={() => {
          setformpop(false);
        }}
      />
      <MeditationPop
        visible={meditationPop}
        cancelOnPress={() => {
          setmeditationPop(false);
        }}
      />
    </View>
  );
};

export default Home;
