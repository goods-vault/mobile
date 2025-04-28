import { Linking } from "react-native";
import Navigator from "./src/navigation/Navigator.tsx";
import { useEffect } from "react";
import { ThemeProvider } from "./src/modules/theme/ThemeProvider.tsx";
import { DeepLinking } from './src/navigation/DeepLinking.ts';
import { observer } from "mobx-react";
import { useRootStore } from "./src/hooks/useRootStore.tsx";


const App = observer(() => {
  const { productsStore } = useRootStore();

  useEffect(() => {
    productsStore.initProductsModel();
  }, []);

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  });

  return (
    <ThemeProvider>
      <Navigator/>
    </ThemeProvider>
  );
});

export default App;
