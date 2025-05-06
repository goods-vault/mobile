import { StyleSheet, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";

const NoCamera = () => {
  const { Colors } = useTheme();

  return (
    <View style={styles.center}>
      <Icon name="camera-off" size={100} color={Colors.textPrimary} />
    </View>
  );
};

const styles = StyleSheet.create({
  center: {
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default NoCamera;
