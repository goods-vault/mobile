import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Portal } from "react-native-portalize";
import { Modalize } from "react-native-modalize";
import { useRef } from "react";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Icon from "react-native-vector-icons/Feather";
import BrandsFilter from "./BrandsFilter.tsx";
import CategoryFilter from "./CategoryFilter.tsx";

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
          <View style={styles.container}>
            <Text style={styles.modalHeader}>Фильтры</Text>
            <View>
              <Text style={styles.filterHeader}>Категории</Text>
              <CategoryFilter onSelectionChange={(categoryIds) => {}} />
            </View>
            <View>
              <Text style={styles.filterHeader}>Бренды</Text>
              <BrandsFilter onSelectionChange={(brands) => {}} />
            </View>
            <View style={styles.applyButtonContainer}>
              <TouchableOpacity style={styles.applyButton} onPress={() => {}}>
                <Text style={styles.applyButtonText}>Применить</Text>
              </TouchableOpacity>
            </View>
          </View>
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
    fontSize: 18,
    fontWeight: "500",
    alignSelf: "center",
  },
  filterHeader: {
    fontFamily: "JetBrains Mono",
    color: colors.textPrimary,
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 15,
  },
  applyButtonContainer: {
    marginTop: 30,
    marginBottom: 10,
  },
  applyButton: {
    backgroundColor: colors.accentDefault,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  applyButtonText: {
    fontFamily: "JetBrains Mono",
    color: colors.textPrimary,
    fontSize: 18,
    fontWeight: "600",
    alignSelf: "center",
  },
  container: {
    gap: 20,
  },
});
