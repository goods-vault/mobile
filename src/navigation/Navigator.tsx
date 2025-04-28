import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigator from './StackNavigator.tsx';
import Navigation from '../base/Navigation.ts';
import { DeepLinking } from './DeepLinking.ts';
import { useTheme } from "../modules/theme/hooks/useTheme.ts";

const Navigator = () => {
    const { Colors } = useTheme();

    return (
        <NavigationContainer linking={DeepLinking.linking}
                             ref={Navigation.navigationRef}
                             theme={{
                                 ...DefaultTheme,
                                 colors: {
                                     ...DefaultTheme.colors,
                                     primary: Colors.accentDefault,
                                     background: Colors.backgroundPrimary,
                                     card: Colors.backgroundSecondary,
                                     text: Colors.textPrimary,
                                     border: "#818C99",
                                 },
                             }}
        >
            <StackNavigator/>
        </NavigationContainer>
    );
};

export default Navigator;
