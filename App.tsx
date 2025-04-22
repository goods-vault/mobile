import React, {useEffect} from 'react';
import Navigator from './src/navigation/Navigator.tsx';
import {Linking} from 'react-native';
import {DeepLinking} from './src/navigation/DeepLinking.ts';


const App = () => {

  useEffect(() => {
    Linking.getInitialURL().then(async deepLinkInitialURL => {
      if (deepLinkInitialURL) {
        await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
      }
    });
  });

  return (
      <Navigator/>
  );
};

export default App;
