import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: Color.viewBackground,
    height: '100%',
  },
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
    backgroundColor: Color.backgroundColor,
    padding: 10,
    height: 50,
  },
  headerIcon: {
    width: 20,
    height: 20,
  },
  headerTitle: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '500',
  },
  tipsView: {
    padding: 10,
  },
  tipsTitle: {
    color: Color.textGrey,
    fontSize: 18,
    fontWeight: '500',
  },
  tipsDesc: {
    color: Color.textGrey,
    fontSize: 15,
    marginBottom: 10,
  },
  borderTips: {
    borderBottomWidth: 2,
    borderColor: Color.borderPop,
  },
});

export default styles;
