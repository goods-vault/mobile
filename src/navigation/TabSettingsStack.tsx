import SettingsScreen from '../screens/SettingsScreen.tsx';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SettingsStackParamList } from './types.ts';

const Stack = createNativeStackNavigator<SettingsStackParamList>();

const TabSettingsStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{
                    title: 'Настройки',
                    headerTitleStyle: { fontFamily: 'JetBrains Mono' },
                }}
            />
        </Stack.Navigator>
    );
};

export default TabSettingsStack;