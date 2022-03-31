import {StyleSheet} from 'react-native';

export const cardStyle = StyleSheet.create({
  card: {
    marginTop: 9,
    padding: 15,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#eaeaea',
    borderRadius: 5
  },
  cardUser: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  cardUserName: {
    paddingLeft: 15
  },
  rightSide: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
