import { Linking, StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";
import { useTranslation } from "react-i18next";

const NoCameraAccess = () => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);
  const { t } = useTranslation("scanner");

  return (
    <View style={styles.center}>
      <View style={styles.icons}>
        <Icon name="camera-off" size={30} color={Colors.textPrimary} />
        <Icon name="settings" size={30} color={Colors.textPrimary} />
      </View>
      <Text style={styles.title}>
        {t("grant_camera_access_in_settings.grant_camera_access")}
        {"\n"}
        <Text style={styles.link} onPress={Linking.openSettings}>
          {t("grant_camera_access_in_settings.in_settings")}
        </Text>
      </Text>
    </View>
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  center: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  icons: {
    flexDirection: "row",
    gap: 8,
  },
  title: {
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  link: {
    color: colors.accentDefault,
    textDecorationLine: "underline",
  },
});

export default NoCameraAccess;
