import Icon from "react-native-vector-icons/Feather";

type DeleteButtonProps = {
  onPress: ()=> void;
};

const DeleteButton = ({ onPress }: DeleteButtonProps) => {
  return (
    <Icon name="delete" size={32} color="#E64646" onPress={onPress} />
  );
};

export default DeleteButton;
