import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Avatar, Icon, Text} from '@rneui/base';
import {colors} from 'themes/themes';
import {cardStyle} from './styles';
import {GuestUser} from 'services/applicatif/guestServices/type';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import CheckBoxField from 'view/widget/Input/CheckBoxField';

type IProps = {
  user: GuestUser;
  onDelete: (id: number, name: string) => void;
};

export default function CardList(props: IProps) {
  const navigation = useAppNavigator();
  const {id, willCome, firstname, lastname} = props?.user;
  const fullName = firstname + ' ' + lastname;

  const onPress = () => {
    navigation.navigateScreen(routeName.guest.edit, {
      id,
      willCome,
      firstname,
      lastname
    });
  };
  return (
    <View style={cardStyle.card}>
      <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
        <View style={cardStyle.cardUser}>
          <Avatar
            size={40}
            rounded
            icon={{name: 'user', type: 'antdesign'}}
            containerStyle={{backgroundColor: colors.gray}}
          />
          <View style={cardStyle.cardUserName}>
            <Text h4 h4Style={{fontWeight: 'normal'}}>
              {fullName}
            </Text>
            <Text>{id}</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={cardStyle.rightSide}>
        <CheckBoxField checked={willCome} />
        <TouchableOpacity
          style={{marginLeft: 15}}
          activeOpacity={0.7}
          onPress={() => props?.onDelete(id, fullName)}>
          <Icon name={'trash'} type={'font-awesome'} color={colors.primary} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
