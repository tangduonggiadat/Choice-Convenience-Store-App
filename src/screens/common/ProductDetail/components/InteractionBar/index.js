import React from 'react';
import {Block, Text} from '../../../../../components';
import {
  CommentIcon,
  HeartDetail,
  ShareIcon,
} from '../../../../../assets/svg/common';

const InteractionBar = () => {
  return (
    <Block>
      <Block alignCenter paddingVertical={6}>
        <HeartDetail />
        <Text size={12} paddingTop={1}>
          19
        </Text>
      </Block>
      <Block alignCenter paddingVertical={6}>
        <CommentIcon />
        <Text size={12} paddingTop={1}>
          5
        </Text>
      </Block>
      <Block alignCenter paddingVertical={6}>
        <ShareIcon />
      </Block>
    </Block>
  );
};

export default InteractionBar;
