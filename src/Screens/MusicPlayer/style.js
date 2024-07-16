import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Color.backgroundColor,
  },
  headerView: {
    padding: 10,
  },
  closeIcon: {
    width: 20,
    height: 20,
  },
  musicImg: {
    padding: 15,
    elevation: 5,
  },
  musicImgIcon: {
    marginTop:50,
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  musicTitle: {
    marginTop: 50,
    // marginLeft: 20,
    color: Color.white,
    fontSize: 20,
    fontWeight: '500',
  },
  musicPlayerIcons: {
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 50,
  },
  smallIcon: {
    width: 30,
    height: 30,
  },
  bigIcon: {
    width: 60,
    height: 60,
  },
  progressBarContainer: {
    marginTop: 20,
    // backgroundColor:"red"
  },
  timingContainer: {
    paddingHorizontal:20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  timingText: {
    color: Color.textGrey,
  },
  bottomIcon:{
    width:25,
    height:25
  },
  bottomIconView:{
    marginTop:50,
    flexDirection:"row",
    alignItems:"center",
    justifyContent:"space-between",
    paddingHorizontal:25
  }
});

export default styles;
