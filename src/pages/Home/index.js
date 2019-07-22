import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GitIssues</Text>
        </View>
        <View style={styles.repo}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
            />
          </View>

          <View style={styles.icon}>
            <TouchableOpacity onPress={() => {}}>
              <Icon name="plus" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
