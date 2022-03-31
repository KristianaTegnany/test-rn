import React from 'react';
import {Input, Text} from '@rneui/base';
import {Control, Controller} from 'react-hook-form';
import {getFormFieldError} from 'services/utils';
import {View} from 'react-native';

type IProps = {
  placeholder: string;
  iconName: string;
  secure?: boolean;
  name: string;
  control: Control<any>;
  error: any;
  autoCapitalize?: "none" | "sentences" | "words" | "characters" | undefined;
};

export default function TextInput(props: IProps) {
  const {error, name} = props;
  const hasError = getFormFieldError(error, name);

  return (
    <View style={{marginBottom: 10}}>
      <Controller
        control={props?.control}
        name={name}
        render={({field: {value, onChange, onBlur}}) => (
          <Input
            containerStyle={{
              height: 55
            }}
            placeholder={props?.placeholder}
            leftIcon={{
              type: 'font-awesome',
              name: props?.iconName,
              size: 20,
              color: 'gray'
            }}
            shake={() => {}}
            autoCapitalize={props.autoCapitalize}
            secureTextEntry={props?.secure}
            value={value}
            onChangeText={onChange}
            onBlur={onBlur}
          />
        )}
      />
      {hasError && (
        <Text style={{color: '#FB8266'}}>
          {hasError?.type === 'required'
            ? '* Champ obligatoire'
            : hasError?.message}
        </Text>
      )}
    </View>
  );
}
