import { Linking } from "react-native";
import Navigator from "./src/navigation/Navigator.tsx";
import { useEffect } from "react";
import { ThemeProvider } from "./src/modules/theme/ThemeProvider.tsx";
import { DeepLinking } from "./src/navigation/DeepLinking.ts";
import { observer } from "mobx-react";
import { useRootStore } from "./src/hooks/useRootStore.tsx";
import StatusBar from "./src/components/StatusBar.tsx";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Host } from "react-native-portalize";


const App = observer(() => {
  const { productsStore } = useRootStore();

  useEffect(() => {
    productsStore.initProductsModel();
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(async (deepLinkInitialURL) => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Host>
        <ThemeProvider>
          <>
            <Navigator />
            <StatusBar />
          </>
        </ThemeProvider>
      </Host>
    </GestureHandlerRootView>
  );
});

export default App;
