import { StyleSheet, View } from "react-native";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import Dropdown from "react-native-input-select";
import { TFlatList, TSectionList, TSelectedItem } from "react-native-input-select/lib/typescript/src/types/index.types";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type SettingProps = {
  label: string;
  placeholder: string;
  options: TFlatList | TSectionList;
  value: string;
  onChange: (value: TSelectedItem | TSelectedItem[])=> void;
};

const Setting = ({ label, placeholder, options, value, onChange }: SettingProps) => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  return (
    <Dropdown
      label={label}
      labelStyle={styles.label}

      placeholder={placeholder}
      placeholderStyle={styles.text}

      options={options}

      selectedValue={value}
      dropdownIcon={<></>}

      dropdownStyle={styles.dropdown}
      primaryColor={Colors.accentDefault}

      modalControls={{
        modalOptionsContainerStyle: {
          backgroundColor: Colors.backgroundSecondary,
        },
      }}

      checkboxControls={{
        checkboxStyle: {
          borderWidth: 0,
        },
        checkboxUnselectedColor: Colors.backgroundSecondary,
        checkboxComponent: <></>,
      }}
      listHeaderComponent={
        <>
          <Text style={styles.title}>
            {label}
          </Text>
          <View style={styles.divider} />
        </>
      }

      onValueChange={onChange}
    />
  );
};

const useStyles = (colors: IColors) => StyleSheet.create({
  label: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.textPrimary,
    fontFamily: "JetBrains Mono",
  },
  dropdown: {
    borderWidth: 0,
    backgroundColor: colors.backgroundTertiary,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  text: {
    color: colors.textPrimary,
    fontWeight: "bold",
    fontFamily: "JetBrains Mono",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.accentDefault,
    marginBottom: 8,
    marginLeft: 16,
  },
  divider: {
    height: 1,
    backgroundColor: colors.textSecondary,
    marginTop: 8,
    marginBottom: 4,
  },
});

export default Setting;
