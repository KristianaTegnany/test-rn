import React, {useLayoutEffect, useState} from 'react';
import AuthRoutes from './AuthRoutes';
import GuestRoutes from './GuestRoutes';
import {useSelector} from 'react-redux';
import {rootState} from 'store/reducer';

export default function AppRoute() {
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const token = useSelector(
    (rootState: rootState) => rootState?.userReducer?.token,
  );

  useLayoutEffect(() => {
    (async () => {
      const hasToken = token?.length > 1;
      setIsLogged(hasToken);
    })();
  }, [token]);

  return isLogged ? <GuestRoutes /> : <AuthRoutes />;
}
