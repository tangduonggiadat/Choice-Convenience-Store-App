import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PropTypes from 'prop-types';
const IconWithLabel = props => {
  const {iconName, iconSize = 24, activeColor, labelText, focused} = props;

  const textStyle = {
    color: focused ? activeColor : '#1c1c1c',
    fontWeight: focused ? 'bold' : 'normal',
  };

  return (
    <View style={styles.container}>
      <Icon
        name={iconName}
        size={iconSize}
        color={focused ? activeColor : '#ffffff'}
      />
      <Text style={textStyle}>{labelText}</Text>
    </View>
  );
};

IconWithLabel.propTypes = {
  iconName: PropTypes.string.isRequired,
  iconSize: PropTypes.number,
  activeColor: PropTypes.string.isRequired,
  labelText: PropTypes.string.isRequired,
  focused: PropTypes.bool,
};

export default IconWithLabel;

const styles = StyleSheet.create({
  container: {alignItems: 'center'},
});
