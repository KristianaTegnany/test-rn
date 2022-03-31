import React from 'react';
import {Dialog} from '@rneui/themed';
import guestHomeStyles from 'view/screen/GuestScreen/styles';
import {ModalDeleteInfo} from 'controller/guest/type';

type IProps = {
  modalInfo: ModalDeleteInfo;
  onCancel: () => void;
  onValid: () => void;
};

export default function ConfirmDeleteModal(props: IProps) {
  return (
    <Dialog isVisible={props?.modalInfo?.isOpen} animationType="fade">
      <Dialog.Title
        title={`Confirmer la suppression de ${props?.modalInfo?.name}`}
        titleStyle={guestHomeStyles.dialogText}
      />
      <Dialog.Actions>
        <Dialog.Button
          title="Confirmer"
          loading={props?.modalInfo?.loading}
          onPress={props?.onValid}
        />
        <Dialog.Button title="Annuler" onPress={props?.onCancel} />
      </Dialog.Actions>
    </Dialog>
  );
}
