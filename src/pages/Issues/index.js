import React, { Component } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  ActivityIndicator
} from "react-native";
import api from "~/services/api";
import Header from "~/components/Header";
import IssuesItem from "./IssuesItem";
import styles from "./styles";

class Issues extends Component {
  state = {
    issues: [],
    loading: false,
    all: false,
    open: false,
    closed: false
  };

  async componentDidMount() {
    this.setState({ loading: true });

    const { param } = this.props.navigation.state.params;
    try {
      const response = await api.get(`/${param}/issues`);
      this.setState({ issues: response.data, loading: false, all: true });
    } catch (error) {
      console.tron.log(error);
    }
  }

  renderListItem = ({ item }) => <IssuesItem issues={item} />;

  renderAllIssues = () => {
    const { issues } = this.state;

    return (
      <FlatList
        data={issues}
        keyExtractor={item => String(item.id)}
        renderItem={this.renderListItem}
        /*  onRefresh={this.loadRepositories}
        refreshing={refreshing} */
      />
    );
  };

  renderOpen = () => {
    const { issues } = this.state;
    issues.map(issue => {
      if (issue.state === "open") {
        return (
          <FlatList
            data={issue}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            /*  onRefresh={this.loadRepositories}
            refreshing={refreshing} */
          />
        );
      }
    });

    console.tron.log("STATE", this.state);
  };

  renderClosed = () => {
    const { issues } = this.state;
    issues.map(issue => {
      if (issue.state === "closed") {
        return (
          <FlatList
            data={issue}
            keyExtractor={item => String(item.id)}
            renderItem={this.renderListItem}
            /*  onRefresh={this.loadRepositories}
            refreshing={refreshing} */
          />
        );
      }else{
 
      }
    });
  };

  render() {
    const { loading, all, closed, open } = this.state;
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.menu}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              this.renderAllIssues(),
              this.setState({ open: false, all: true, closed:false,  loading: true });
            }}
          >
            <View>
              <Text>Todas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              this.renderOpen(),
                this.setState({ open: true, all: false, closed:false,  loading: true });
            }}
          >
            <View>
              <Text>Abertas</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              this.renderClosed(),
              this.setState({ open: false ,all: false, closed: true, loading: true });
            }}
          >
            <View>
              <Text>Fechadas</Text>
            </View>
          </TouchableOpacity>
        </View>
        {loading ? <ActivityIndicator size={12} color="#FFF" /> : null}
        {all ? this.renderAllIssues() : null}
        {open ? this.renderOpen() : null}
        {closed ? this.renderClosed() : null}
      </View>
    );
  }
}

export default Issues;
