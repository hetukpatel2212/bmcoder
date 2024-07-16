import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.backgroundColor,
  },
  meditationImg: {
    width: '100%',
    height: 280,
  },
  closeBtnView: {
    position: 'absolute',
    padding: 15,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  meditationTitle: {
    position: 'absolute',
    color: Color.white,
    fontSize: 25,
    fontWeight: 'bold',
    bottom: 10,
    marginLeft: 15,
  },
  meditationDesc: {
    padding: 15,
    backgroundColor: Color.viewBackground,
  },
  meditationDescText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '400',
  },
  meditationItemsView: {
    padding: 15,
  },
  meditationItemsTitle: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '400',
    marginTop: 20,
  },
  meditationItemsTime: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '400',
    marginTop: 10,
    marginBottom: 20,
  },
  meditationItemsBorder: {
    borderBottomWidth: 2.5,
    borderRadius:25,
    borderColor: Color.meditationBorder,
  },
});

export default styles;
