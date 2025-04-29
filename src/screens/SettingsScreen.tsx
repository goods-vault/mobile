import { StyleSheet, View } from "react-native";
import { ThemeTypes } from "../modules/theme/ThemeTypes.ts";
import { useState } from "react";
import { useTheme } from "../modules/theme/hooks/useTheme.ts";
import Setting from "../components/settings/Setting.tsx";
import Option from "../components/settings/Option.tsx";

const SettingsScreen = () => {
  const { Colors, changeTheme } = useTheme();
  const [theme, setTheme] = useState<ThemeTypes | undefined>(undefined);

  const handleTheme = (theme: ThemeTypes) => {
    if (!theme) {
      setTheme(undefined);
      changeTheme(ThemeTypes.SYSTEM);
      return;
    }

    setTheme(theme);
    changeTheme(theme);
  };

  return (
    <View style={styles.container}>
      <Setting
        label="Тема приложения"
        placeholder="Выберите тему..."
        value={theme as string}
        options={[
          {
            label: <Option label="Системная тема" iconName="settings" iconColor={Colors.textPrimary} />,
            value: ThemeTypes.SYSTEM,
          },
          {
            label: <Option label="Светлая тема" iconName="sun" iconColor={Colors.yellow} />,
            value: ThemeTypes.LIGHT,
          },
          {
            label: <Option label="Тёмная тема" iconName="moon" iconColor={Colors.violet} />,
            value: ThemeTypes.DARK,
          },
        ]}
        onChange={(value) => handleTheme(value as ThemeTypes)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
});

export default SettingsScreen;
