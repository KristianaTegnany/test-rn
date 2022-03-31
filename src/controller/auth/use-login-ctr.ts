import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {loginSchemaValidation} from 'services/utils/validation';
import {UserCredential} from './type';
import {loginUser} from 'services/applicatif/userServices';
import Toast from 'react-native-toast-message';
import {useState} from 'react';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import {useDispatch} from 'react-redux';
import {setToken} from 'store/slice/user/userSlice';

export default function useLoginCtr() {
  const [loading, setLoading] = useState<boolean>(false);
  const navigation = useAppNavigator();
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
    setError,
  } = useForm<UserCredential>({
    resolver: yupResolver(loginSchemaValidation),
    reValidateMode: 'onChange'
  });

  const onSubmit = async (data: UserCredential) => {
    setLoading(true);
    const isLogged = await loginUser(data);
    setLoading(false);

    if (!isLogged) {
      return Toast.show({type: 'error', text1: 'Identifiant invalide'});
    }

    dispatch(setToken(isLogged));

    return Toast.show({type: 'success', text1: 'Vous êtes connectés'});
  };

  return {register, handleSubmit, errors, control, onSubmit, loading};
}
