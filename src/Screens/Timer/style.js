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
  timerContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timerText: {
    color: Color.white,
    fontSize: 25,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 25,
  },
  button: {
    marginTop: 15,
    width: 100,
    alignItems: 'center',
    padding: 10,
    borderRadius: 15,
  },
  buttonText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '500',
  },
});

export default styles;
