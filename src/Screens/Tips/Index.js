import {View, Text, Image, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react';

import backIcon from '../../Assets/Images/backIcon.png';
import styles from './style';
import { useNavigation } from '@react-navigation/native';

const Tips = () => {
  const meditationTips = [
    {
      id: 1,
      title: 'Set a Regular Schedule',
      content:
        'Make meditation a daily ritual by setting aside a specific time each day. Consistency is key to building a lasting habit.',
    },
    {
      id: 2,
      title: 'Start with Short Sessions',
      content:
        'Begin with short meditation sessions, around 5-10 minutes. As you grow more comfortable, gradually increase the duration to deepen your practice.',
    },
    {
      id: 3,
      title: 'Find a Quiet Space',
      content:
        'Choose a serene environment free from distractions. A quiet space enhances focus and allows for deeper relaxation.',
    },
    {
      id: 4,
      title: 'Use Guided Meditations',
      content:
        'Utilize guided meditations to stay on track and learn new techniques. Audio or video guides can assist in mastering meditation practices.',
    },
    {
      id: 5,
      title: 'Customize Your Experience',
      content:
        'Personalize your meditation practice by adjusting settings such as background music or voice prompts. Tailor the experience to suit your preferences and enhance comfort.',
    },
    {
      id: 6,
      title: 'Track Your Progress',
      content:
        "Monitor your meditation journey using the app's tracking features. Celebrate milestones and use progress data to stay motivated.",
    },
    {
      id: 7,
      title: 'Try Different Techniques',
      content:
        'Explore various meditation styles like mindfulness, loving-kindness, or body scan. Discover what resonates best with you and incorporate diverse techniques into your routine.',
    },
    {
      id: 8,
      title: 'Set Clear Intentions',
      content:
        "Before each session, define your objectives—whether it's reducing stress, enhancing focus, or promoting relaxation. Setting clear intentions guides your meditation practice effectively.",
    },
    {
      id: 9,
      title: 'Stay Consistent',
      content:
        'Maintain regular meditation even on busy days. Short sessions can fit into any schedule and help sustain your practice over time.',
    },
    {
      id: 10,
      title: 'Join a Community',
      content:
        'Engage with fellow meditators through forums or social features. Connect, share experiences, and draw motivation from a supportive community.',
    },
  ];

  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.mainView}>
        <View style={styles.headerView}>
          <TouchableOpacity onPress={()=>{
              navigation.navigate("Home")
          }}>
          <Image style={styles.headerIcon} source={backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>10 Tips</Text>
        </View>
        {meditationTips.map((item, index) => {
          return (
            <View style={styles.tipsView}>
              <View>
                <Text style={styles.tipsTitle}>
                  {item.id}. {item.title}
                </Text>
                <Text style={styles.tipsDesc}>{item.content}</Text>
              </View>
              <View style={styles.borderTips}></View>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
};

export default Tips;
