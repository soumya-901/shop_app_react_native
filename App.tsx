/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import type { PropsWithChildren } from 'react';
import {
  Alert,
  Button,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import Home from './pages/Home';


function App(): JSX.Element {
  const [count, setCount] = useState(1)
  const [inputvalue, setInputvalue] = useState("")
  function onPressLearnMore() {
    // Alert.alert("button was pressed")
    console.log(count)
    setCount(count + 1)
  }
  function reduce() {
    setCount(count - 1)
  }
  function onChangeText(e: any) {
    console.log(e.target.value)
    setInputvalue(e.target.value)
  }
  const bala = { uri: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fimg.freepik.com%2Ffree-vector%2Fgradient-minimalist-background_23-2149976755.jpg&tbnid=eEWlg411rz7-jM&vet=12ahUKEwicp-7ar__-AhWe0nMBHU6UCp8QMygyegQIARBb..i&imgrefurl=https%3A%2F%2Fwww.freepik.com%2Ffree-photos-vectors%2Fapp-background&docid=48-1vYGYOY7vZM&w=626&h=417&q=background%20for%20app%20design&ved=2ahUKEwicp-7ar__-AhWe0nMBHU6UCp8QMygyegQIARBb' }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      flex: 1,
      justifyContent: 'center',
    },
    text: {
      color: 'white',
      fontSize: 42,
      lineHeight: 84,
      fontWeight: 'bold',
      textAlign: 'center',
      backgroundColor: '#000000c0',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
  return (
    <SafeAreaView >

      <Home />
      {/* <StatusBar
        backgroundColor="#023E56"
      />
      <ImageBackground source={require('./assests/photo.jpeg')} resizeMode="cover" style={{ height: 900 }} blurRadius={1} >

        <Text style={{ backgroundColor: "red", textAlign: "center", marginTop: "100%", fontSize: 20, fontWeight: "900" }} >{inputvalue} </Text>
        <Button
          onPress={onPressLearnMore}
          title="Click me"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        // disabled={true}
        />
        <Text style={{ color: "red", textAlign: "center", fontSize: 40 }} >{count}</Text>
        <Button
          onPress={reduce}
          title='reducer'
          color="pink"

        />
        <TextInput
          style={styles.input}
          onChangeText={setInputvalue}
          value={inputvalue}
        />
      </ImageBackground> */}
    </SafeAreaView>
  );
}

export default App;
