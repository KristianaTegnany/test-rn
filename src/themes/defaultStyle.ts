import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const defaultStyle = StyleSheet.create({
  flexContainer: {
    flex: 1,
    paddingRight: wp('4%'),
    paddingLeft: wp('4%')
  },
  lightText: {
    fontSize: hp('2.1%'),
    color: 'gray'
  }
});
