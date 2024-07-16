import {StyleSheet, TextInput} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.backgroundColor,
  },
  mainView: {
    marginBottom: 100,
  },
  searchHeader: {
    backgroundColor: Color.viewBackground,
    height: 60,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  textInput: {
    height: 40,
    fontSize: 15,
    fontWeight: '500',
  },
  mainContent: {
    width: '95%',
    padding: 15,
    flexDirection: 'row',
    // alignItems:"center",
    justifyContent: 'space-between',
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 20,

    backgroundColor: Color.viewBackground,
  },
  mainContentText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Color.white,
  },
  mainContentBox: {
    width: '60%',
  },
  mainContentDesc: {
    fontSize: 15,
    fontWeight: '500',
    color: Color.textGrey,
  },
  exploreImg: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
});

export default styles;
