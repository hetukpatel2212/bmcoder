// MeditationDetails.js
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import styles from './style';
import closeIcon from '../../Assets/Images/whiteCloseModal.png';
import MeditationPop from '../../Components/MeditationPop/Index';

const MeditationDetails = () => {
  const [meditationPop, setMeditationPop] = useState(false);
  const [selectedSong, setSelectedSong] = useState(null); // Track selected song state
  const route = useRoute();
  const navigation = useNavigation();

  const { category } = route.params;

  if (!category) {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const openMeditationPop = (song) => {
    setSelectedSong(song);
    setMeditationPop(true);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleImgView}>
        <Image style={styles.meditationImg} source={category.categoryImage} />
        <TouchableOpacity
          style={styles.closeBtnView}
          onPress={() => navigation.navigate('Home')}>
          <Image style={styles.closeIcon} source={closeIcon} />
        </TouchableOpacity>
        <Text style={styles.meditationTitle}>{category.categoryName}</Text>
      </View>
      <View style={styles.meditationDesc}>
        <Text style={styles.meditationDescText}>{category.categoryDesc}</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.meditationItemsView}>
          {category.songs.map((song) => (
            <TouchableOpacity
              key={song.id}
              style={styles.meditationItemsBox}
              onPress={() => openMeditationPop(song)}>
              <Text style={styles.meditationItemsTitle}>{song.songName}</Text>
              <Text style={styles.meditationItemsTime}>{song.songDesc}</Text>
              <View style={styles.meditationItemsBorder}></View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>

      {/* Pass selectedSong only if meditationPop is true */}
      {meditationPop && (
        <MeditationPop
          visible={meditationPop}
          cancelOnPress={() => setMeditationPop(false)} // Ensure the pop-up is closed
          song={selectedSong}
        />
      )}
    </View>
  );
};

export default MeditationDetails;
