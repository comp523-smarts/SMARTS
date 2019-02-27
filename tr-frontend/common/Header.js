import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}