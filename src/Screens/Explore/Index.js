import React from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './style';
import meditationData from '../../Components/Data/Index';


const Explore = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.searchHeader}>
        <TextInput
          style={styles.textInput}
          placeholder="What are you looking for?"
          placeholderTextColor="#A9AAAE"
        />
      </View>
      <ScrollView>
        <View style={styles.mainView}>
          {meditationData.length > 0 ? (
            meditationData.map((category) => (
              <TouchableOpacity
                key={category.id}
                style={styles.mainContent}
                onPress={() => {
                  // Navigate to MeditationDetails with selected category
                  navigation.navigate('MeditationDetails', { category });
                }}
              >
                <View style={styles.mainContentBox}>
                  <Text style={styles.mainContentText}>{category.categoryName}</Text>
                  <Text style={styles.mainContentDesc}>{category.categoryDesc}</Text>
                </View>
                <Image style={styles.exploreImg} source={category.categoryImage} />
              </TouchableOpacity>
            ))
          ) : (
            <Text>No categories available</Text>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Explore;
