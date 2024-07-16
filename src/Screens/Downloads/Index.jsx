import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

import whiteCloseModal from '../../Assets/Images/whiteCloseModal.png';
import mainImage from '../../Assets/Images/mainImage.jpg';
import {useNavigation} from '@react-navigation/native';

const Downloads = () => {
  const navigation = useNavigation();

  const data = [
    {
                  image: mainImage,
                  title: "Daily meditation",
                  time: "will - 3 min"
    },
    {
                  image: mainImage,
                  title: "Daily meditation 1",
                  time: "will - 3 min"
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.downloadsHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Image style={styles.headerIcon} source={whiteCloseModal} />
        </TouchableOpacity>
        <Text style={styles.downloadsHeaderText}>Dowloads</Text>
      </View>
      <View style={styles.dowloadsMeditation}>
        {data.length > 0 ? (
          data.map((item, index) => (
            <TouchableOpacity key={index} style={styles.dowloadsMeditationBox}>
              <Image style={styles.mainImg} source={item.image} />
              <View>
                <Text style={styles.dowloadsTitle}>{item.title}</Text>
                <Text style={styles.dowloadsTime}>{item.time}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
              <View>
          <Text style={styles.noDownloadsText}>
            It looks like you haven't downloaded anything yet. Downloads are
            useful to save mobile data or to access sessions in places without
            signal.
          </Text>
          <View style={styles.dowloadsBorder}></View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Downloads;
