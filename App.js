import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class Touchables extends Component {


  _onPressButton() {
    Alert.alert("check")
  }




  render() {
    return (
      <View style={{backgroundColor: '#194D33', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.intro}>
            <Text style={styles.introtext}>Basketball Tracker</Text>
          </View>

        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center', top: '50%'}}>
          <View style={{ flex: 1}}>
            <Text style={styles.shottext}>FT</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Miss Shot</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1}}>
            <Text style={styles.shottext}>2 Pt.</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Miss Shot</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1}}>
            <Text style={styles.shottext}>3 Pt.</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButton} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Miss Shot</Text>
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    alignItems: 'center'
  },
  buttonBox: {
    top: 60,
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    justifyContent: 'space-around',
    marginBottom: 30,
    width: 150,
    alignItems: 'center',
    backgroundColor: '#242726'
  },
  buttons: {
    width: '80%',
    alignSelf: 'center',
    alignItems: 'center',
    top: '10%'
  },
  buttonText: {
    padding: 20,
    color: 'white',
    alignSelf: 'center'
  },
  introtext: {
    top: 20,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
  },
  shottext: {
    top: 20,
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  }
})
