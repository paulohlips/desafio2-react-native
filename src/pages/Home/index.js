import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  ScrollView,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import RepositoryItem from '~/pages/Home/RepositoryItem';

export default class Home extends Component {
  state = {
    repoUrl: '',
    repos: [],
  };

  async componentDidMount() {
    const localRepos = await AsyncStorage.getItem('repository');
    console.tron.log('LocalRepos', localRepos);
    if (localRepos) {
      this.setState({ repos: JSON.parse(localRepos) });
    }
  }

  getRepo = async () => {
    const { repoUrl, repos } = this.state;

    const response = await api.get(`/${repoUrl}`);
    const rep = response.data;
    const data = {
      id: rep.id,
      name: rep.name,
      org: rep.owner.login,
      avatar: rep.owner.avatar_url,
    };

    //this.setState({ repos: [...repos, data] });
    this.setState(
      { repos: [...repos, data] },
      async () =>
        await AsyncStorage.setItem('repository', JSON.stringify(repos)),
      console.tron.log(this.state)
    );

    this.renderList(repos);
  };

  renderListItem = ({ item }) => <RepositoryItem repository={item} />;

  renderList = () => {
    const { repos } = this.state;
    return (
      <FlatList
        data={repos}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        /*  onRefresh={this.loadRepositories}
        refreshing={refreshing} */
      />
    );
  };

  clear = () => {
    AsyncStorage.clear();
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>GitIssues</Text>
          <TouchableOpacity onPress={() => this.clear()}>
            <Text>CLEAR</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.repo}>
          <View style={styles.textInput}>
            <TextInput
              autoCapitalize="none"
              autoCorrect={false}
              placeholder="Adicionar novo repositório"
              value={this.state.repoUrl}
              onChangeText={text => this.setState({ repoUrl: text })}
            />
          </View>

          <View style={styles.icon}>
            <TouchableOpacity onPress={() => this.getRepo()}>
              <Icon name="plus" size={28} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.renderList}>
          <TouchableOpacity onLongPress={() => {}}>
            {this.renderList()}
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
