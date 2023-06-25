
import React, {useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as Animatable from 'react-native-animatable'



const ButtonAnimated = Animatable.createAnimatableComponent(TouchableOpacity);

export default function App() {
  const buttonRef = useRef(null)

  function handleClick(){
    buttonRef.current.shake();
  }


  return (

    <View style={styles.container}>
      <Animatable.Text style={styles.title}
      animation='shake' iterationCount={Infinity}
      duration={3000}>Open up App.js to start working on your app!</Animatable.Text>


      <ButtonAnimated style={styles.button}
      animation="pulse"
      iterationCount={5}
      duration={3000}
      ref={buttonRef}
      onPress={handleClick}
      >

        <Text style={{color: '#fff'}}>Animar</Text>
      </ButtonAnimated>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    fontSize: 25,
  },
  button:{
    width: '70%',
    height: 30,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },

});
