import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';
import { withNavigation } from 'react-navigation';
// import { Container } from './styles';

class IssuesItem extends Component {
  render() {
    const { issues } = this.props;
    return (
      /*       <TouchableOpacity
        onPress={() => {
          this.props.navigation.navigate('Issues', {
            param: repository.endpoint,
          });
        }}
      > */
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: issues.user.avatar_url }} />

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {issues.title}
          </Text>
          <Text style={styles.org}>{issues.user.login}</Text>
        </View>
      </View>
      /*       </TouchableOpacity>*/
    );
  }
}

export default withNavigation(IssuesItem);
