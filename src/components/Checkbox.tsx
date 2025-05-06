import BouncyCheckbox from "react-native-bouncy-checkbox";
import { useTheme } from "../modules/theme/hooks/useTheme.ts";

type CheckboxProps = {
  isChecked: boolean;
  onPress: (isChecked: boolean)=> void;
};

const Checkbox = ({ isChecked, onPress }: CheckboxProps) => {
  const { Colors } = useTheme();

  return (
    <BouncyCheckbox
      isChecked={isChecked}
      size={28}
      fillColor={Colors.accentDefault}
      unFillColor="transparent"
      iconStyle={{
        borderRadius: 3.7,
      }}
      innerIconStyle={{
        borderColor: isChecked ? Colors.accentDefault : Colors.textPrimary,
        borderWidth: 2,
        borderRadius: 3.7,
      }}
      iconImageStyle={{
        tintColor: Colors.backgroundPrimary,
      }}
      onPress={onPress}
    />
  );
};

export default Checkbox;
