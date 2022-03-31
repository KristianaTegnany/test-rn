import React from 'react';
import {View} from 'react-native';
import {defaultStyle} from 'themes/defaultStyle';
import useGuestAddCtr from 'controller/guest/use-guest-add-ctr';
import TextInput from 'view/widget/Input/TextInput';
import AppButton from 'view/widget/Button';
import {Text} from '@rneui/base';

export default function GuestAdd() {
  const ctr = useGuestAddCtr();

  return (
    <View style={defaultStyle.flexContainer}>
      <View style={{flex: 1, marginTop: 15}}>
        <Text style={defaultStyle.lightText}>
          Veuillez completer le formulaire pour l'ajout d'un invité:
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
      </View>
      <View style={{paddingBottom: 10}}>
        <AppButton
          title="Ajouter"
          colorType="primary"
          onPress={ctr?.handleSubmit(ctr?.onSubmit)}
          loading={ctr?.loading}
        />
      </View>
    </View>
  );
}
