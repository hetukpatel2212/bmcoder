import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  popView: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  closeModalView: {
    backgroundColor: '#000',
    width: 30,
    height: 30,
    margin: 10,
    alignItems: 'center',
    borderRadius: 52,
    justifyContent: 'center',
    alignSelf: 'center',
    elevation: 5,
    borderWidth: 1,
    borderColor: '#fff',
  },
  closeModal: {
    width: 12,
    height: 12,
  },
  popDetails: {
    // height:100,

    borderRadius: 10,
    backgroundColor: Color.viewBackground,
  },
  popDetailsBox: {
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  popImg: {
    width: 25,
    height: 25,
  },
  moreText: {
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
  },
  moreDesc: {
    color: Color.textGrey,
    fontSize: 15,
    fontWeight: '400',
  },
  borderView: {
    borderWidth: 1,
    width: '95%',
    alignSelf: 'center',
    borderColor: Color.borderPop,
  },
  btnPop: {
    paddingVertical: 12,
    paddingHorizontal: 10,
    width: 100,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: Color.white,
  },
  btnPopText: {
    fontSize: 15,
    fontWeight: '500',
    color: Color.black,
  },
});

export default styles;
