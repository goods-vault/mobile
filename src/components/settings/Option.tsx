import Icon from "react-native-vector-icons/Feather";
import { StyleSheet, View } from "react-native";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type OptionProps = {
  label: string;
  iconName?: string;
  iconColor?: string;
};

const Option = ({ label, iconName = undefined, iconColor = undefined }: OptionProps) => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <View style={[styles.option, iconName && styles["gap-8"]]}>
      {iconName && <Icon name={iconName} color={iconColor} size={16} />}
      <Text style={styles.text}>
        {label}
      </Text>
    </View>
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "bold",
  },
  "gap-8": {
    gap: 8,
  },
});

export default Option;
