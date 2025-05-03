import React, {useEffect} from 'react';
import { ThemeProvider } from "./src/modules/theme/ThemeProvider.tsx";
import {useRootStore} from "./src/hooks/useRootStore.tsx";

const App = () => {

    const { productsStore } = useRootStore();

    useEffect(() => {
        productsStore.initProductsModel();
    }, []);

    return (
        <ThemeProvider >
            <></>
        </ThemeProvider>
  );
}

export default App;
