import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';

import edit from '../../Assets/Images/edit.png';
import heart from '../../Assets/Images/heart.png';
import faq from '../../Assets/Images/faq.png';
import blog from '../../Assets/Images/blog.png';
import rightArrow from '../../Assets/Images/rightArrow.png';
import whiteCloseModal from '../../Assets/Images/whiteCloseModal.png';
import { useNavigation } from '@react-navigation/native';

const FormPop = ({visible, cancelOnPress}) => {

  const navigation = useNavigation()

  const handleForm=()=>{
    navigation.navigate("Form")
    cancelOnPress()
  }
  return (
    <Modal animationType="slide" transparent={true} visible={visible}>
      <View style={styles.container}>
        <View style={styles.popView}>
          <TouchableOpacity
            onPress={cancelOnPress}
            style={styles.closeModalView}>
            <Image style={styles.closeModal} source={whiteCloseModal} />
          </TouchableOpacity>
          <View style={styles.popDetails}>
            <TouchableOpacity style={styles.popDetailsBox} onPress={()=>{
              handleForm()
            }}>
              <View style={styles.nameIcon}>
                <Image style={styles.popImg} source={edit} />
                <Text style={styles.moreText}>Edit stats</Text>
              </View>
              <Image style={styles.popImg} source={rightArrow} />
            </TouchableOpacity>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <View style={styles.nameIcon}>
                <Image style={styles.popImg} source={heart} />
                <Text style={styles.moreText}>Donate</Text>
              </View>
              <Image style={styles.popImg} source={rightArrow} />
            </View>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <View style={styles.nameIcon}>
                <Image style={styles.popImg} source={faq} />
                <Text style={styles.moreText}>FAQ</Text>
              </View>
              <Image style={styles.popImg} source={rightArrow} />
            </View>
            <View style={styles.borderView}></View>
            <View style={styles.popDetailsBox}>
              <View style={styles.nameIcon}>
                <Image style={styles.popImg} source={blog} />
                <Text style={styles.moreText}>Blog</Text>
              </View>
              <Image style={styles.popImg} source={rightArrow} />
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default FormPop;
