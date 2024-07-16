// MeditationPop.js
import React, { useState } from 'react';
import { View, Text, Modal, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';

import bg2 from '../../Assets/Images/bg2.jpg';
import smile from '../../Assets/Images/smile.png';
import playIcon from '../../Assets/Images/playIcon.png';
import clock from '../../Assets/Images/clock.png';
import downArrow from '../../Assets/Images/downArrow.png';
import whiteCloseModal from '../../Assets/Images/whiteCloseModal.png';

const MeditationPop = ({ visible, cancelOnPress, song }) => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [menuItemName, setMenuItemName] = useState(false);
  const [min, setMin] = useState(3);
  const [menuName, setMenuName] = useState('Will');
  const navigation = useNavigation();

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const toggleMenuItem = () => {
    setMenuItemName(!menuItemName);
  };

  const closeMenu = () => {
    setMenuVisible(false);
  };

  const closeMenuItem = () => {
    setMenuItemName(false);
  };

  const handleMenuItemPress = (minutes) => {
    setMin(minutes);
    closeMenu();
  };

  const handleMenuItemName = (name) => {
    setMenuName(name);
    closeMenuItem();
  };

  if (!song) {
    return null; // Handle cases where song or its properties are not available
  }

  const playSong = () => {
    navigation.navigate('MusicPlayer', { song });
    cancelOnPress(); // Ensure the pop-up is closed
  };

  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.popView}>
          <TouchableOpacity onPress={cancelOnPress} style={styles.closeModalView}>
            <Image style={styles.closeModal} source={whiteCloseModal} />
          </TouchableOpacity>
          <View style={styles.popDetails}>
            <Image style={styles.mainImg} source={song.songImage || bg2} />
            <View style={styles.textView}>
              <Text style={styles.popTitle}>{song.songName}</Text>
              <Text style={styles.popDesc}>{song.songDesc}</Text>
            </View>
            <View style={styles.popBtnView}>
              <TouchableOpacity style={styles.popBtn} onPress={toggleMenuItem}>
                <View style={styles.popBtnText}>
                  <Image style={styles.popIcon} source={smile} />
                  <Text style={styles.popBtnTitle}>{menuName}</Text>
                </View>
                <Image style={styles.popIcon} source={downArrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.popBtn} onPress={toggleMenu}>
                <View style={styles.popBtnText}>
                  <Image style={styles.popIcon} source={clock} />
                  <Text style={styles.popBtnTitle}>{min} mins</Text>
                </View>
                <Image style={styles.popIcon} source={downArrow} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.playView} onPress={playSong}>
                <Image style={styles.popIcon} source={playIcon} />
              </TouchableOpacity>
              {menuVisible && (
                <View style={styles.btnMenu}>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemPress(3)}>
                    <Text style={styles.menuItem}>3 Mins</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemPress(5)}>
                    <Text style={styles.menuItem}>5 Mins</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemPress(10)}>
                    <Text style={styles.menuItem}>10 Mins</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemPress(15)}>
                    <Text style={styles.menuItem}>15 Mins</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemPress(20)}>
                    <Text style={styles.menuItem}>20 Mins</Text>
                  </TouchableOpacity>
                </View>
              )}
              {menuItemName && (
                <View style={styles.btnMenu}>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemName('Will')}>
                    <Text style={styles.menuItem}>Will</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemName('Steven')}>
                    <Text style={styles.menuItem}>Steven</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.menuItemBtn} onPress={() => handleMenuItemName('Sarah')}>
                    <Text style={styles.menuItem}>Sarah</Text>
                  </TouchableOpacity>
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MeditationPop;
