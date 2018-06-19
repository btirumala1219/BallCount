import React, { Component } from 'react';
import { Alert, AppRegistry, Platform, StyleSheet, Text, TouchableHighlight, TouchableOpacity, TouchableNativeFeedback, TouchableWithoutFeedback, View } from 'react-native';

export default class App extends Component {





  constructor(props) {
    super(props)
    this.state = { ft: 0 , tw: 0, th: 0, fttot: 0, twtot: 0, thtot: 0 }
  }

  _onPressButtonft = () => {
    this.setState({
      ft: this.state.ft+1,
      fttot: this.state.fttot+1
    })
  }
  _onPressButtontw = () => {
    this.setState({
      tw: this.state.tw+1,
      twtot: this.state.twtot+1
    })
  }
  _onPressButtonth = () => {
    this.setState({
      th: this.state.th+1,
      thtot: this.state.thtot+1
    })
  }

  _onPressButtonfttot = () => {
    this.setState({
      fttot: this.state.fttot+1
    })
  }
  _onPressButtontwtot = () => {
    this.setState({
      twtot: this.state.twtot+1
    })
  }
  _onPressButtonthtot = () => {
    this.setState({
      thtot: this.state.thtot+1
    })
  }

  render() {
    return (
      <View style={{backgroundColor: '#194D33', flex: 1}}>
        <View style={styles.container}>
          <View style={styles.intro}>
            <Text style={styles.introtext}>Basketball Tracker</Text>
          </View>

        </View>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignContent: 'center'}}>
          <View style={{ flex: 1,}}>
            <Text style={styles.perctext}>{this.state.ft}/{this.state.fttot}</Text>
            <Text style={styles.shottext}>FT</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtonft} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtonfttot} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Miss Shot</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1,}}>
            <Text style={styles.perctext}>{this.state.tw}/{this.state.twtot}</Text>
            <Text style={styles.shottext}>2 Pt.</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtontw} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtontwtot} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Miss Shot</Text>
              </View>
            </TouchableHighlight>
          </View>
          <View style={{ flex: 1,}}>
            <Text style={styles.perctext}>{this.state.th}/{this.state.thtot}</Text>
            <Text style={styles.shottext}>3 Pt.</Text>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtonth} underlayColor="white">
              <View style={styles.button}>
                <Text style={styles.buttonText}>Made Shot</Text>
              </View>
            </TouchableHighlight>
            <TouchableHighlight style={styles.buttons} onPress={this._onPressButtonthtot} underlayColor="white">
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
    top: '45%'
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
    top: "40%",
    color: 'orange',
    fontWeight: 'bold',
    fontSize: 30,
    alignSelf: 'center'
  },
  perctext: {
    top: '30%',
    color: 'red',
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 30,
  }
})
