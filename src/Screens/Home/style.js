import {StyleSheet} from 'react-native';
import Color from '../../Themes/Colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Color.backgroundColor,
    height: '100%',
  },
  headerView: {
    backgroundColor: Color.viewBackground,
    height: 160,
  },
  welcomeView: {
    marginTop: 50,
    width: '95%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  welcomeDetails: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
  },
  welcomeImg: {
    width: 30,
    height: 30,
  },
  welcomeTitle: {
    color: Color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  moreImg: {
    width: 20,
    height: 20,
  },
  headerBoxView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    gap: 20,
    width: '80%',
  },
  headerBox: {
    marginTop: 20,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 6,
    backgroundColor: Color.boxBackground,
    width: '55%',
    borderRadius: 10,
  },
  headerBoxImg: {
    width: 20,
    height: 20,
  },
  headerBoxText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '500',
  },
  mainView: {
    marginTop: 25,
  },
  mainBoxView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    alignSelf: 'center',
    width: '95%',
  },
  mainBox: {
    paddingVertical: 18,
    paddingHorizontal: 15,
    width: '49%',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    borderRadius: 10,
    backgroundColor: Color.viewBackground,
    marginBottom: 12,
  },
  mainBoxText: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '400',
  },
  mainImg: {
    width: '100%',
    height: 200,
    borderRadius: 15,
  },
  mainImgView: {
    width: '95%',
    height: 200,
    // alignItems:"center"
    alignSelf: 'center',
    elevation: 5,
  },
  mainImgText: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 15,
  },
  mainImgTitle: {
    color: Color.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
  mainImgDesc: {
    color: Color.white,
    fontSize: 15,
    fontWeight: '400',
  },
  authorComment: {
    width: '95%',
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 100,
    backgroundColor: Color.viewBackground,
  },
  authorCommentText: {
    width: '94%',
    color: Color.white,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
});

export default styles;
