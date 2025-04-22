import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator.tsx';
import { RootStackParamList } from './types.ts';

const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNavigator = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Tab" component={TabNavigator} options={{headerShown: false}}/>
        </Stack.Navigator>
    );
};

export default StackNavigator;