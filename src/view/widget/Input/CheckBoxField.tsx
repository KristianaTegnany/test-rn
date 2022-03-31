import React from 'react';
import {colors} from 'themes/themes';
import {CheckBox} from '@rneui/base';

type IProps = {
  checked: boolean;
  size?: number;
  title?: string;
  onChange?: (value: boolean) => void;
};

export default function CheckBoxField(props: IProps) {
  return (
    <CheckBox
      onPress={() => props?.onChange && props?.onChange(!props?.checked)}
      title={props?.title}
      textStyle={{fontSize: 18}}
      checkedColor={colors.gray}
      uncheckedColor={colors.gray}
      checked={props?.checked}
      size={props?.size || 20}
      containerStyle={{
        backgroundColor: 'transparent',
        margin: 0,
        padding: 0
      }}
    />
  );
}
