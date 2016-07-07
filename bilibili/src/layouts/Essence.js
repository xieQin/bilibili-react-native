import React, { Component } from 'react';
import {
  Navigator ,
  View ,
  Text,
  StyleSheet
} from 'react-native';


export default class Essence extends Component {
  constructor (props){
    super(props);
  }

  render (){
    return (
      <View style={[styles.container]}>
        <Text style={{fontSize:30,color:'#837'}}>Hello React-native</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex : 1,
    alignItems : 'center',
    justifyContent : 'center',
    backgroundColor : 'yellow'
  }
})