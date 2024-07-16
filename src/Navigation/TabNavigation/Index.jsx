import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import PagerView from 'react-native-pager-view';

import Home from '../../Screens/Home/Index';
import Explore from '../../Screens/Explore/Index';

import homeIcon from '../../Assets/Images/homeIcon.png';
import homeIconActive from '../../Assets/Images/homeIconActive.png';
import exploreIcon from '../../Assets/Images/exploreIcon.png';
import exploreIconActive from '../../Assets/Imagesu/exploreIconActive.png';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  const [page, setPage] = useState(0);
  const pagerRef = useRef(null);

  useEffect(() => {
    if (pagerRef.current) {
      pagerRef.current.setPage(page);
    }
  }, [page]);

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={e => setPage(e.nativeEvent.position)}>
        <View key="1" style={styles.page}>
          <Home />
        </View>
        <View key="2" style={styles.page}>
          <Explore />
        </View>
      </PagerView>
      <View style={styles.tabContainer}>
        <TouchableWithoutFeedback onPress={() => setPage(0)}>
          <View style={styles.bottomTabView}>
            <View style={page === 0 ? styles.focusedTab : styles.defaultTab}>
              <Image
                source={page === 0 ? homeIconActive : homeIcon}
                style={{width: 25, height: 25}}
              />
            </View>
            <Text style={styles.labelName}>Home</Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => setPage(1)}>
          <View style={styles.bottomTabView}>
            <View style={page === 1 ? styles.focusedTab : styles.defaultTab}>
              <Image
                source={page === 1 ? exploreIconActive : exploreIcon}
                style={{width: 25, height: 25}}
              />
            </View>
            <Text style={styles.labelName}>Explore</Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  page: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    height: 80,
    backgroundColor: '#231f29',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  focusedTab: {
    alignItems: 'center',

    height: 40,
    backgroundColor: '#917df0',
    width: '20%',
    padding: 10,
    borderRadius: 200,
    marginBottom: 8,
  },
  defaultTab: {
    alignItems: 'center',
    width: '20%',
    height: 40,
    // backgroundColor: '#917df0',
    borderRadius: 20,

    padding: 10,
    marginBottom: 8,
  },
  labelName: {
    color: '#fff',
    fontSize: 12,
  },
  bottomTabView: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

export default TabNavigation;
