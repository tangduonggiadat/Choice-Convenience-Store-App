import React from 'react';
import {Block, Text, Header} from '../../../components';
import {theme} from '../../../theme';
import ListCategory from './components/ListCategory';

const HomeScreens = () => {
  return (
    <Block flex alignCenter backgroundColor={theme.colors.background}>
      <Header type="Infor" />
      <Block backgroundColor={theme.colors.background}>
        <ListCategory />
      </Block>
    </Block>
  );
};

export default HomeScreens;
