import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const loginStyle = StyleSheet.create({
  imagesView: {
    flex: 1,
    alignItems: 'center'
  },
  image: {
    height: '100%',
    resizeMode: 'contain'
  },
  text: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgetPassword: {
    textAlign: 'right'
  },
  loginBtn: {
  },
  formContainer: {
    flex: 1,
    paddingTop: hp('4%'),
    paddingHorizontal: 10,
    justifyContent: 'space-around'
  }
});
