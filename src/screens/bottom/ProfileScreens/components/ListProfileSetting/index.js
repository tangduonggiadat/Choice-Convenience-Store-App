import {Block, Text} from '../../../../../components';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Pressable} from 'react-native';
import {ArrowRight} from '../../../../../assets/svg/common';
import {ListItem} from 'react-native-elements';
import {Switch} from 'react-native-paper';
import {theme} from '../../../../../theme';
import styles from './styles';

export const DATA = [
  {
    id: '1',
    title: 'Account Information',
    navigation: null,
  },
  {
    id: '2',
    title: 'Payment History',
    navigation: null,
  },
  {
    id: '3',
    title: 'Favorist',
    navigation: null,
  },
  {
    id: '4',
    title: 'Help Center',
    navigation: null,
  },
];

const ListProfileSetting = () => {
  return (
    <Block marginTop={15}>
      {DATA.map(ActionsButton)}
      <Block paddingVertical={5}>
        <SettingButton />
      </Block>
    </Block>
  );
};

const ActionsButton = (item, index) => {
  const navigation = useNavigation();

  return (
    <Block key={item.id}>
      <Block>
        <Pressable
          key={item.id}
          onPress={() => navigation.navigate(item.navigation)}>
          <Block
            row
            alignCenter
            marginTop={index === 0 ? 1 : 0}
            marginBottom={1}
            paddingHorizontal={15}
            paddingVertical={13}
            space="between">
            <Text fontType={'regular'} size={14}>
              {item.title}
            </Text>
            <ArrowRight />
          </Block>
        </Pressable>
      </Block>
    </Block>
  );
};

const SettingButton = (item, index) => {
  const navigation = useNavigation();
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn);
  return (
    <Block>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.title}>Notification</ListItem.Title>
        </ListItem.Content>
        <Switch
          value={isSwitchOn}
          onValueChange={onToggleSwitch}
          color={theme.colors.gold}
        />
      </ListItem>

      <Pressable onPress={() => navigation.navigate(item.navigation)}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Language</ListItem.Title>
          </ListItem.Content>
          <Text size={14} fontType={'heavy'} color={theme.colors.gold}>
            ENG
          </Text>
        </ListItem>
      </Pressable>

      <Pressable onPress={() => navigation.navigate(item.navigation)}>
        <ListItem>
          <ListItem.Content>
            <ListItem.Title style={styles.title}>Country</ListItem.Title>
          </ListItem.Content>
          <Text size={14} fontType={'heavy'} color={theme.colors.gold}>
            USA
          </Text>
        </ListItem>
      </Pressable>
      <ListItem>
        <ListItem.Content>
          <ListItem.Title style={styles.logout}>Logout</ListItem.Title>
        </ListItem.Content>
      </ListItem>
    </Block>
  );
};

export default ListProfileSetting;
