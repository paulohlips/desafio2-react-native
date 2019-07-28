import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { withNavigation } from 'react-navigation';
// import { Container } from './styles';

class RepositoryItem extends Component {
  render() {
    const { repository } = this.props;
    return (
      <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Issues', {
            param: this.props.repository.endpoint,
          });
        }}
      >
        <View style={styles.container}>
          <Image style={styles.image} source={{ uri: repository.avatar }} />

          <View style={styles.info}>
            <Text style={styles.name}>{repository.name}</Text>
            <Text style={styles.org}>{repository.org}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(RepositoryItem);
