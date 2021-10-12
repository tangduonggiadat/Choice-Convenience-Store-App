import React from 'react';
import {Block, Header} from '../../../components';
import {theme} from '../../../theme';
import MemberCart from './components/MemberCart';
import {ScrollView} from 'react-native';
import ListProfileSetting from './components/ListProfileSetting';
import {width} from '../../../utils/responsive';

const ProfileScreens = () => {
  return (
    <Block flex backgroundColor={theme.colors.white}>
      <Header
        type="Infor"
        checkIcon
        checkMargin
        contentBottom={<MemberCart />}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Block marginBottom={width / 6}>
          <ListProfileSetting />
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ProfileScreens;
