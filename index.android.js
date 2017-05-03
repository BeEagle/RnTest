'use strict';

import React, {
  Text,
  View
} from 'react-native';

class RnTest extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.hello}>Hello, World</Text>
        <Text> 测试ReactNative </Text>
      </View>
    )
  }
}
var styles = React.StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  hello: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

React.AppRegistry.registerComponent('RnTest', () => RnTest);

//import React from 'react';
//import {
//  AppRegistry,
//  StyleSheet,
//  Text,
//  View,
//  NativeModules,
//} from 'react-native';
//
//import quotesApp from './rnApp/page/quotes';
//
//AppRegistry.registerComponent('HelloWorld', () => quotesApp);