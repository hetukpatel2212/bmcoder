import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
  headingView: {
    padding: 20,
  },
  headingText: {
    color: Color.black,
    fontSize: 25,
    fontWeight: '500',
  },
  inputBox: {
    marginTop: 10,
    borderWidth: 1,
    borderRadius: 10,
    // width: "90%",
  },
  formView: {
    // alignItems:"center"
    width: '90%',
  },
  inputFields: {
    marginBottom: 20,
  },
  inputLabel: {
    color: Color.black,
    fontSize: 15,
    fontWeight: '500',
  },
  updateBtn: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: Color.black,
    borderRadius: 10,
  },
  updateText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '500',
  },
  updatIcon: {
    width: 25,
    height: 25,
  },
});

export default styles;
