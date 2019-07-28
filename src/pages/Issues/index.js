import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { withNavigation } from 'react-navigation';
// import { Container } from './styles';

class Issues extends Component {
  componentDidMount() {}
  render() {
    const endpoint = this.props.repository;
    console.tron.log(endpoint);
    return (
      <View>
        <Text>Oi</Text>
      </View>
    );
  }
}

export default withNavigation(Issues);
