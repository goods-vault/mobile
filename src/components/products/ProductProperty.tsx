import { StyleSheet } from "react-native";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";
import Text from "../Text.tsx";

type FieldProps = {
    title: string;
    value: string | undefined;
};

const ProductProperty = ({ title, value }: FieldProps) => {
    if (!value) {
        return null;
    }

    const { Colors } = useTheme();
    const styles = useStyles(Colors);

    return (
        <Text style={styles.text}>
            <Text style={styles.title}>{title}</Text>: {value}
        </Text>
    );
};

const useStyles = (colors: IColors) =>
    StyleSheet.create({
        title: {
            fontWeight: "bold",
            color: colors.textPrimary,
        },
        text: {
            color: colors.textPrimary,
        }
    });

export default ProductProperty;
