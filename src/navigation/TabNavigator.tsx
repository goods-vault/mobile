import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import TabScannerStack from "./TabScannerStack.tsx";
import TabGoodsStack from "./TabGoodsStack.tsx";
import { TabStackParamList } from "./types.ts";
import Navigation from "../base/Navigation.ts";
import TabSettingsStack from "./TabSettingsStack.tsx";
import Icon from "react-native-vector-icons/Feather";

const Tab = createBottomTabNavigator<TabStackParamList>();

const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="ScannerStack">
      <Tab.Screen
        name="GoodsStack"
        component={TabGoodsStack}
        listeners={{
          tabLongPress: () => {
            Navigation.replace("Tab", {
              screen: "GoodsStack",
              params: {
                screen: "GoodsList",
              },
            });
          },
        }}
        options={{
          headerShown: false,
          tabBarLabel: "Товары",
          tabBarIcon: ({ color, size }) => <Icon name="database" color={color} size={size} />,

          tabBarLabelStyle: {
            fontFamily: "JetBrains Mono",
          },
        }}
      />
      <Tab.Screen
        name="ScannerStack"
        component={TabScannerStack}
        options={{
          headerShown: false,
          tabBarLabel: "Сканировать",
          tabBarIcon: ({ color, size }) => <Icon name="camera" color={color} size={size} />,
          tabBarLabelStyle: {
            fontFamily: "JetBrains Mono",
          },
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={TabSettingsStack}
        options={{
          headerShown: false,
          tabBarLabel: "Настройки",
          tabBarIcon: ({ color, size }) => <Icon name="settings" color={color} size={size} />,
          tabBarLabelStyle: {
            fontFamily: "JetBrains Mono",
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
