import { Modal as ModalNative, ModalProps as ModalNativeProps } from 'react-native';
import Text from '../text/Text';
import { textTypes } from '../text/text.types';
import { ContainerModal, IconCloseModal } from './modal.style';
import Button from '../buttons/Button';

interface ModalProps extends ModalNativeProps {
  title: string;
  text: string;
  handleVisibility: (value: React.SetStateAction<boolean>) => void
}

const Modal = ({title, text, visible, handleVisibility, ...props}: ModalProps) => {

  return (
    <ModalNative
      animationType="slide"
      transparent={true}
      onRequestClose={() => handleVisibility(false)}
      visible={visible}
      {...props}
    >
      <ContainerModal>
        <Text type={textTypes.TITLE_BOLD}>{title}</Text>
        <Text type={textTypes.PARAGRAPH_SMALL_REGULAR}>{text}</Text>
        <Button title="Ok" onPress={() => handleVisibility(false)} />
        <IconCloseModal name="cross" onPress={() => handleVisibility(false)} />
      </ContainerModal>
    </ModalNative>
  );
}

export default Modal;
