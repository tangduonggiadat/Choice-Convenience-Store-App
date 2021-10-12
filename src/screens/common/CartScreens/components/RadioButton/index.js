import React, {Component} from 'react';
import {TouchableOpacity} from 'react-native';
import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import styles from './styles';

export default class CustomRadioButton extends Component {
  state = {
    value: null,
  };

  render() {
    const {PROP} = this.props;
    const {value} = this.state;

    return (
      <Block row paddingHorizontal={10}>
        {PROP.map(res => {
          return (
            <Block
              key={res.key}
              alignCenter
              paddingRight={10}
              row
              space={'between'}>
              <TouchableOpacity
                style={styles.rbStyle}
                onPress={() => {
                  this.setState({
                    value: res.key,
                  });
                }}>
                {value === res.key && (
                  <Block
                    width={8}
                    height={8}
                    radius={55}
                    backgroundColor={theme.colors.black}
                  />
                )}
              </TouchableOpacity>
              <Text marginLeft={3} size={14}>
                {res.text}
              </Text>
            </Block>
          );
        })}
      </Block>
    );
  }
}
