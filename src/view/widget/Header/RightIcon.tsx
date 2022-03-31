import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '@rneui/base';
import useAppNavigator from 'hooks/useAppNavigator';
import {useDispatch} from 'react-redux';

type IProps = {
  iconName: string;
  routeName: string;
};

export default function RightIcon(props: IProps) {
  const navigation = useAppNavigator();
  const dispatch = useDispatch();

  return (
    <>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigateScreen(props?.routeName)}>
        <Icon name={props?.iconName} type="font-awesome" color="white" />
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => dispatch({type: 'LOGOUT'})}
        style={{marginLeft: 30}}>
        <Icon name="sign-out" type="font-awesome" color="white" />
      </TouchableOpacity>
    </>
  );
}
