import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {newGuestSchemaValidation} from 'services/utils/validation';
import {useState} from 'react';
import {NewGuest} from './type';
import {
  editGuestUser,
  postGuestUser,
} from 'services/applicatif/guestServices';
import {useDispatch} from 'react-redux';
import {addGuests, editGuests} from 'store/slice/guest/guestSlice';
import {GuestUser} from 'services/applicatif/guestServices/type';
import useAppNavigator from 'hooks/useAppNavigator';
import {routeName} from 'routes/routeName';
import Toast from 'react-native-toast-message';

export default function useGuestAddCtr() {
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const navigation = useAppNavigator();
  const params: GuestUser | null = navigation.getParams<GuestUser | null>();
  const [willCome, setWillCome] = useState<boolean>(params?.willCome || false);

  const {
    register,
    handleSubmit,
    control,
    formState: {errors},
  } = useForm<NewGuest>({
    resolver: yupResolver(newGuestSchemaValidation),
    defaultValues: {
      firstname: params?.firstname,
      lastname: params?.lastname
    }
  });

  const onSubmit = async (data: NewGuest) => {
    setLoading(true);
    if (params?.id) {
      const result = await editGuestUser(params?.id, data, willCome);
      if (result) {
        dispatch(
          editGuests({
            id: params?.id,
            data: {
              ...params,
              willCome,
              lastname: data?.lastname,
              firstname: data?.firstname
            }
          })
        );

        Toast.show({type: 'success', text1: 'Invité édité avec succès'});

        return navigation.navigateScreen(routeName.guest.home);
      }
    } else {
      const result = await postGuestUser(data);
      if (result) {
        dispatch(addGuests(result as GuestUser));
        Toast.show({type: 'success', text1: 'Invité ajouté avec succès'});

        return navigation.navigateScreen(routeName.guest.home);
      }
    }

    setLoading(false);
    return Toast.show({type: 'error', text1: "Une erreur s'est produite"});
  };

  return {
    register,
    handleSubmit,
    control,
    errors,
    loading,
    onSubmit,
    willCome,
    setWillCome
  };
}
