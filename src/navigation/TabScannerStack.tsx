import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BarcodeScannerScreen from "../screens/BarcodeScannerScreen.tsx";
import { ScannerStackParamList } from "./types.ts";

const Stack = createNativeStackNavigator<ScannerStackParamList>();

const TabScannerStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BarcodeScanner"
        component={BarcodeScannerScreen}
        options={{
          title: "Сканер штрихкодов",
          headerTitleStyle: { fontFamily: "JetBrains Mono" },
        }}
      />
    </Stack.Navigator>
  );
};

export default TabScannerStack;
