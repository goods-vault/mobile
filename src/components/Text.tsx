import { StyleSheet, Text as RNText, TextProps } from "react-native";

const Text = (props: TextProps) => {
    return (
        <RNText {...props} style={[styles.defaultFontFamily, props.style]}>
    {props.children}
    </RNText>
);
};

const styles = StyleSheet.create({
    defaultFontFamily: {
        fontFamily: "JetBrains Mono",
    },
});

export default Text;
