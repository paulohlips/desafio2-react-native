import React from 'react';

import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

const RespositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <Image style={styles.image} source={{ uri: repository.avatar }} />

    <View style={styles.info}>
      <Text style={styles.name}>{repository.name}</Text>
      <Text style={styles.org}>{repository.org}</Text>
    </View>
  </View>
);

export default RespositoryItem;
