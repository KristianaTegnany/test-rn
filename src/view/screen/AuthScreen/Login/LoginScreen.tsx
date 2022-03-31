import {Text} from '@rneui/base';
import React, { useEffect, useRef, useState } from 'react';
import {Animated, Image, KeyboardAvoidingView, LayoutChangeEvent, View} from 'react-native';
import {images} from 'assets/images';
import {loginStyle} from './styles';
import {defaultStyle} from 'themes/defaultStyle';
import TextInput from 'view/widget/Input/TextInput';
import AppButton from 'view/widget/Button';
import useLoginCtr from 'controller/auth/use-login-ctr';
import {useKeyboard} from '@react-native-community/hooks';

export default function LoginScreen() {
  const keyboard = useKeyboard()
  const fadeAnim = useRef(new Animated.Value(1)).current
  const ctr = useLoginCtr();
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  const onLayout = ({nativeEvent: {layout: {width}}} : LayoutChangeEvent) => {
    if(width > 700)
      setIsLargeScreen(true);
    else setIsLargeScreen(false);
  }

  useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: keyboard.keyboardShown? 0 : 1,
        duration: 500,
        useNativeDriver: true
      }
    ).start();
  }, [keyboard.keyboardShown])
  
  return (
    <View style={[defaultStyle.flexContainer, { flexDirection: isLargeScreen? 'row' : 'column' }]} onLayout={onLayout}>
      {
        !keyboard.keyboardShown &&
        <Animated.View style={[loginStyle.imagesView, {opacity: fadeAnim}]}>
          <Image source={images.login} style={loginStyle.image} />
        </Animated.View>
      }
      <View style={loginStyle.formContainer}>
        <View style={loginStyle.text}>
          <Text h2>Se connecter</Text>
          <Text style={defaultStyle.lightText}>
            Entrer votre pseudo et votre mot de passe
          </Text>
        </View>
        <KeyboardAvoidingView behavior='padding'>
          <TextInput
            placeholder="Pseudo"
            iconName="envelope"
            control={ctr?.control}
            name="username"
            autoCapitalize="none"
            error={ctr?.errors}
          />
          <TextInput
            placeholder="Mot de passe"
            iconName="lock"
            secure
            control={ctr?.control}
            name="password"
            error={ctr?.errors}
          />
          <Text style={{...loginStyle.forgetPassword, ...defaultStyle.lightText}}>
            Mot de passe oublié?
          </Text>
        </KeyboardAvoidingView>
        <View style={loginStyle.loginBtn}>
          <AppButton
            title="Se connecter"
            colorType="primary"
            onPress={ctr?.handleSubmit(ctr?.onSubmit)}
            loading={ctr?.loading}
          />
        </View>
      </View>
    </View>
  );
}
