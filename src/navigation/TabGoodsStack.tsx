import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoodsListScreen from "../screens/GoodsListScreen.tsx";
import ProductScreen from "../screens/ProductScreen.tsx";
import { GoodsStackParamList } from "./types.ts";

const Stack = createNativeStackNavigator<GoodsStackParamList>();

const TabGoodsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="GoodsList"
        component={GoodsListScreen}
        options={{
          title: "Список товаров",
          headerTitleStyle: { fontFamily: "JetBrains Mono" },
        }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: "Товар",
          headerTitleStyle: { fontFamily: "JetBrains Mono" },
        }}
      />
    </Stack.Navigator>
  );
};

export default TabGoodsStack;
