import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.backgroundColor,
  },
  downloadsHeader: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  downloadsHeaderText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
  },
  dowloadsMeditation: {
    padding: 10,
  },
  dowloadsMeditationBox: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginTop: 10,
  },
  mainImg: {
    width: 80,
    height: 80,
  },
  dowloadsTitle: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '500',
  },
  dowloadsTime: {
    color: Color.textGrey,
    fontWeight: '400',
    marginTop: 8,
  },
  noDownloadsText: {
    color: Color.textGrey,
    fontSize: 15,
    fontWeight: '500',
    marginBottom: 10,
  },
  dowloadsBorder: {
    borderBottomWidth: 2,
    borderColor: Color.meditationBorder,
  },
});

export default styles;
