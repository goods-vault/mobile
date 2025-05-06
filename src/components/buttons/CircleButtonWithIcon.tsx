import { StyleSheet, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";

type CircleButtonWithIconProps = {
  icon: string;
  onPress?: ()=> void;
  buttonSize?: number;
  iconSize?: number;
};

const CircleButtonWithIcon = ({ icon, onPress, buttonSize = 48, iconSize = 24 }: CircleButtonWithIconProps) => {
  const buttonSizeStyles = {
    height: buttonSize,
    width: buttonSize,
    borderRadius: buttonSize / 2,
  };
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.icon, buttonSizeStyles]}>
        <Icon name={icon} size={iconSize} />
      </View>
    </TouchableOpacity>
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  icon: {
    color: "#0A0A0A",
    backgroundColor: colors.backgroundTertiary,
    padding: 10,
  },
});

export default CircleButtonWithIcon;
