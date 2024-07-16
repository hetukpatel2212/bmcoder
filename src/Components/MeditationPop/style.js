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
    backgroundColor: Color.popBackground,
  },
  mainImg: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  textView: {
    padding: 15,
  },
  popIcon: {
    width: 25,
    height: 25,
  },
  popTitle: {
    color: Color.white,
    fontSize: 20,
    fontWeight: '500',
  },
  popDesc: {
    marginTop: 10,
    color: Color.white,
    fontSize: 15,
    fontWeight: '400',
  },
  popBtnTitle: {
    fontSize: 18,
    fontWeight: '400',
    color: Color.white,
  },
  popBtnView: {
    padding: 15,
  },
  popBtn: {
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: Color.viewBackground,
  },
  popBtnText: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  playView: {
    height: 55,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    backgroundColor: Color.white,
  },
  btnMenu:{
    right:20,
    padding:10,
    position:"absolute",
    width:"50%",
    borderRadius:10,
    backgroundColor:Color.viewBackground
  },
  menuItem:{
    color:Color.white,
  },
  menuItemBtn:{
    padding:6,
  }
});

export default styles;
