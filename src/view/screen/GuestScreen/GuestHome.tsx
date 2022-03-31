import React from 'react';
import {FlatList, View} from 'react-native';
import {defaultStyle} from 'themes/defaultStyle';
import CardList from 'view/widget/Card/CardList';
import useGuestHomeCtr from 'controller/guest/use-guest-home-ctr';
import {GuestUser} from 'services/applicatif/guestServices/type';
import Loader from 'view/widget/loader/Loader';
import ConfirmDeleteModal from 'view/widget/Modal/ConfirmDeleteModal';

export default function GuestHome() {
  const ctr = useGuestHomeCtr();
  
  return (
    <View style={defaultStyle.flexContainer}>
      {ctr?.loading ? (
        <Loader />
      ) : (
        <FlatList
          onEndReachedThreshold={0.3}
          onEndReached={ctr?.fetchMore}
          data={ctr?.guests}
          showsVerticalScrollIndicator={false}
          renderItem={item => (
            <CardList user={item?.item} onDelete={ctr?.openDeleteModal} />
          )}
          keyExtractor={(item: GuestUser, index: number) => index.toString()}
        />
      )}
      <ConfirmDeleteModal
        modalInfo={ctr?.modalState}
        onCancel={ctr?.onCancel}
        onValid={ctr?.deleteEntry}
      />
    </View>
  );
}
