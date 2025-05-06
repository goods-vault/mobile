import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Icon from "react-native-vector-icons/Feather";
import { ThemeProvider } from "../../modules/theme/ThemeProvider.tsx";
import BrandFilter from "./BrandFilter.tsx";

const FiltersModal = () => {
  const { Colors } = useTheme();
  const styles = useStyles(Colors);
  const modalizeRef = useRef(null);
  const onOpen = () => {
    modalizeRef.current?.open();
  };

  return (
    <>
      <TouchableOpacity style={styles.filterButton} onPress={onOpen}>
        <Icon name="filter" size={20} color={Colors.textPrimary} />
        <Text style={styles.buttonText}>Фильтры</Text>
      </TouchableOpacity>

      <Portal>
        <Modalize
          ref={modalizeRef}
          modalTopOffset={50}
          childrenStyle={styles.modal}
          modalStyle={styles.modalize}
        >
          <ThemeProvider>
            <>
              <Text style={[styles.modalHeader, { alignSelf: "center", marginBottom: 30 }]}>Фильтры</Text>

              <Text style={styles.modalHeader}>Категории</Text>
              <Text style={styles.modalHeader}>Бренды</Text>
              <BrandFilter onSelectionChange={(brands) => {}} />
            </>
          </ThemeProvider>
        </Modalize>
      </Portal>
    </>

  );
};
export default FiltersModal;

const useStyles = (colors: IColors) => StyleSheet.create({
  filterButton: {
    flexDirection: "row",
    gap: 5,
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 14,
    backgroundColor: colors.backgroundSecondary,
    alignSelf: "flex-start",
    borderRadius: 3,
  },
  buttonText: {
    fontFamily: "JetBrains Mono",
    color: colors.textPrimary,
    fontWeight: "500",
  },
  modalize: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modal: {
    padding: 15,
    backgroundColor: colors.backgroundSecondary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalHeader: {
    fontFamily: "JetBrains Mono",
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 10,
  },
});
