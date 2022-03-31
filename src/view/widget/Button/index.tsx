import {Button, ButtonProps} from '@rneui/base';
import React from 'react';
import {Pressable} from 'react-native';
import {buttonStyles} from './styles';

type IProps = ButtonProps & {
  colorType?: 'primary' | 'gray';
  small?: boolean;
};

export default function AppButton(props: IProps) {
  return (
    <Button
      {...props}
      buttonStyle={[
        {padding: props?.small ? 5 : 10, borderRadius: 30},
        props?.colorType === 'primary'
          ? buttonStyles.primary
          : buttonStyles.gray
      ]}
      titleStyle={[
        props?.small ? {fontSize: 15} : {fontSize: 18, fontWeight: 'bold'},
      ]}
      // @ts-ignore
      TouchableComponent={(props: any) => (
        <Pressable
          style={({pressed}) => [pressed && {opacity: 0.7}]}
          android_ripple={{radius: -5, borderless: true}}
          {...props}
        />
      )}
    />
  );
}
