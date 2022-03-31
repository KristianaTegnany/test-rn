import {useNavigation, useRoute} from '@react-navigation/native';

export default function useAppNavigator() {
  const navigation = useNavigation();
  const router = useRoute();

  const navigateScreen = (name: string, params: any = {}) => {
    // @ts-ignore
    navigation.navigate(name, params);
  };

  const getParams = <T>(): T => {
    return router?.params as any;
  };

  return {navigateScreen, ...navigation, getParams};
}
