import React, { Component } from 'react';

import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';

export default class Home extends Component {
  state = {
    repo: ''
  };

  getRepo = async () => {
    const { repo } = this.state;
    const response = await api.get(`/${repo}`);
  };

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
              value={this.state.repo}
              onChangeText={text => this.setState({ repo: text })}
            />
          </View>

          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.getRepo()}>
              <Icon name="plus" size={28} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
