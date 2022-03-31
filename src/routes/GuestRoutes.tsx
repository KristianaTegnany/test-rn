import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GuestHome from 'view/screen/GuestScreen/GuestHome';
import {routeName} from './routeName';
import {colors} from 'themes/themes';
import RightIcon from 'view/widget/Header/RightIcon';
import GuestAdd from 'view/screen/GuestScreen/GuestAdd';
import GuestEdit from 'view/screen/GuestScreen/GuestEdit';

const GuestStack = createNativeStackNavigator();

export default function GuestRoutes() {
  return (
    <GuestStack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.primary},
        headerTitleStyle: {color: 'white'},
        headerTintColor: 'white',
        headerTitleAlign: 'center'
      }}>
      <GuestStack.Screen
        name={routeName.guest.home}
        component={GuestHome}
        options={{
          title: 'Accueil',
          headerRight: () => (
            <RightIcon
              iconName={'plus-circle'}
              routeName={routeName.guest.add}
            />
          ),
        }}
      />
      <GuestStack.Screen
        name={routeName.guest.add}
        component={GuestAdd}
        options={{
          title: "Ajout d'un invité",
        }}
      />
      <GuestStack.Screen
        name={routeName.guest.edit}
        component={GuestEdit}
        options={{
          title: "Edition d'un invité",
        }}
      />
    </GuestStack.Navigator>
  );
}
