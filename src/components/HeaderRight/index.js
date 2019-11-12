import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import PropTypes from "prop-types";

import { TouchableOpacity, AsyncStorage } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

export default class HeaderRight extends Component {
   static propTypes = {
     navigation: PropTypes.shape({
       dispatch: PropTypes.func,
     }).isRequired,
   }

  signOut = async () => {
    await AsyncStorage.clear();

    const resetActions = this.props.navigation.reset([NavigationActions.navigate({ routeName: 'Welcome' })], 0);

    this.props.navigation.dispatch(resetActions);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.signOut}>
        <Icon name="exchange" size={16} style={styles.icon} />
      </TouchableOpacity>
    );
  }
}
