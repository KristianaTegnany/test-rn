import {useEffect, useState} from 'react';
import {
  getAllGuestList,
  removeGuestUser,
} from 'services/applicatif/guestServices';
import {GuestUser} from 'services/applicatif/guestServices/type';
import {useDispatch, useSelector} from 'react-redux';
import {removeGuest, setAllUsers} from 'store/slice/guest/guestSlice';
import {rootState} from 'store/reducer';
import {ModalDeleteInfo} from './type';
import Toast from 'react-native-toast-message';

export default function useGuestHomeCtr() {
  const [loading, setLoading] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [fetchMoreData, setFetchMoreData] = useState<boolean>(true);
  const [modalState, setModalState] = useState<ModalDeleteInfo>({
    id: 0,
    isOpen: false,
    name: '',
    loading: false,
  });

  const guests = useSelector(
    (rootState: rootState) => rootState?.guestReducer?.lists,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchMore = async () => {
    if (fetchMoreData) {
      const nextPage = page + 1;
      setPage(nextPage);
      await fetchData(nextPage);
    }
  };

  const fetchData = async (page: number = 1) => {
    if (guests?.length < 1) {
      setLoading(true);
    }

    const lists = await getAllGuestList(page);

    if (lists) {
      if ((lists as Array<any>).length <= 0) {
        setFetchMoreData(false);
      }
      dispatch(setAllUsers(lists as GuestUser[]));
    }

    setLoading(false);
  };

  const deleteEntry = async () => {
    setModalState({...modalState, loading: true});
    await removeGuestUser(modalState?.id);
    dispatch(removeGuest({id: modalState?.id}));
    onCancel();
    Toast.show({type: 'success', text1: 'Invité supprimer avec succès'});
  };

  const openDeleteModal = (id: number, name: string) => {
    setModalState({id, name, isOpen: true, loading: false});
  };

  const onCancel = () => {
    setModalState({id: 0, name: '', isOpen: false, loading: false});
  };

  return {
    guests,
    loading,
    fetchMore,
    deleteEntry,
    openDeleteModal,
    modalState,
    onCancel,
  };
}
