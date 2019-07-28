import React, { Component } from 'react';

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  AsyncStorage,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import api from '~/services/api';
import RepositoryItem from '~/pages/Home/RepositoryItem';

export default class Home extends Component {
  state = {
    repoUrl: '',
    repos: [],
    loading: false,
  };

  async componentDidMount() {
    this.setState({ loading: true });
    const localRepos = await AsyncStorage.getItem('repository');
    if (localRepos) {
      this.setState({ repos: JSON.parse(localRepos), loading: false });
    }
  }

  getRepo = async () => {
    const { repoUrl, repos } = this.state;

    this.setState({ loading: true });

    const response = await api.get(`/${repoUrl}`);
    const rep = response.data;
    const data = {
      id: rep.id,
      name: rep.name,
      org: rep.owner.login,
      avatar: rep.owner.avatar_url,
      endpoint: repoUrl,
    };

    this.setState({ repos: [...repos, data] });
    this.storeRepos()
  };

  storeRepos = async () => {
    const { repos } = this.state;
    await AsyncStorage.setItem('repository', JSON.stringify(repos));

    this.setState({ loading: false });
    this.renderList(repos);
  }

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
    const { loading, repoUrl } = this.state;

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
        {loading ? (
          <ActivityIndicator size={12} color="#FFF" />
        ) : (
          <View style={styles.renderList}>{this.renderList()}</View>
        )}
      </View>
    );
  }
}
