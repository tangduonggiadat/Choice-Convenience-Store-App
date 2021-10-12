import {Block, Text} from '../../components';
import {theme} from '../../theme';
import {getSize} from '../../utils/responsive';
import React from 'react';
import {Pressable} from 'react-native';

const Button = ({
  title,
  height,
  width,
  onPress,
  titleStyle,
  style,
  disabled,
  ...props
}) => {
  return (
    <Pressable onPress={onPress}>
      <Block
        alignCenter
        justifyCenter
        marginHorizontal={20}
        height={height}
        width={width}
        radius={height}
        style={style}
        backgroundColor={theme.colors.gold}
        {...props}>
        <Text color={theme.colors.black} style={titleStyle}>
          {title}
        </Text>
      </Block>
    </Pressable>
  );
};

export default Button;
