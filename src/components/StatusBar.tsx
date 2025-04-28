import { StatusBar as RNStatusBar } from "react-native";
import { useTheme } from "../modules/theme/hooks/useTheme.ts";
import { ThemeTypes } from "../modules/theme/ThemeTypes.ts";

const StatusBar = () => {
  const { Colors, theme } = useTheme();
  return (
    <RNStatusBar
      backgroundColor={Colors.backgroundPrimary}
      barStyle={theme == ThemeTypes.LIGHT ? "dark-content" : "light-content"}
    />
  );
};

export default StatusBar;
