import React from 'react';
import {View} from 'react-native';
import {defaultStyle} from 'themes/defaultStyle';
import useGuestAddCtr from 'controller/guest/use-guest-add-ctr';
import {Text} from '@rneui/base';
import TextInput from 'view/widget/Input/TextInput';
import AppButton from 'view/widget/Button';
import CheckBoxField from 'view/widget/Input/CheckBoxField';

export default function GuestEdit() {
  const ctr = useGuestAddCtr();

  return (
    <View style={defaultStyle.flexContainer}>
      <View style={{flex: 1, marginTop: 15}}>
        <Text style={defaultStyle.lightText}>
          Merci de remplir le formulaire
        </Text>

        <TextInput
          placeholder="Nom"
          iconName="user"
          control={ctr?.control}
          name="lastname"
          error={ctr?.errors}
        />
        <TextInput
          placeholder="Prénom"
          iconName="user"
          control={ctr?.control}
          name="firstname"
          error={ctr?.errors}
        />
        <View style={{marginTop: 15}}>
          <CheckBoxField
            checked={ctr?.willCome}
            size={25}
            title="Présent"
            onChange={ctr?.setWillCome}
          />
        </View>
      </View>
      <View style={{paddingBottom: 10}}>
        <AppButton
          title="Modifier"
          colorType="primary"
          onPress={ctr?.handleSubmit(ctr?.onSubmit)}
          loading={ctr?.loading}
        />
      </View>
    </View>
  );
}
