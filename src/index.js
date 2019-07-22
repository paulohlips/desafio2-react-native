import React, { Component } from 'react';

import { View } from 'react-native';

import '~/config/ReactotronConfig';
// import { Container } from './styles';
import Routes from '~/routes';

export default class App extends Component {
  render() {
    return <Routes />;
  }
}
