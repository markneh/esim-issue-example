import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text} from 'react-native';
import EsimManager from 'react-native-esim';

console.log({EsimManager});

const App = () => {
  const [isSupported, setSupported] = useState();

  useEffect(() => {
    EsimManager.isEsimSupported().then(setSupported);
  }, []);

  return (
    <SafeAreaView>
      <Text>
        {isSupported === undefined
          ? 'Checking'
          : isSupported
          ? 'supported'
          : 'not supported'}
      </Text>
    </SafeAreaView>
  );
};

export default App;
