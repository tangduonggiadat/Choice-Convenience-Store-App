import React, {useRef, useState} from 'react';
import {Block, Text, Header} from '../../../components';
import {theme} from '../../../theme';
import {Searchbar} from 'react-native-paper';
import styles from './styles';
import {
  Close,
  FilterIcon,
  LineVertical,
  SearchIcon,
} from '../../../assets/svg/common';
import {Pressable, ScrollView} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {width} from '../../../utils/responsive';
import ListSearchResult from './components/ListSearchResult';
import RBSheet from 'react-native-raw-bottom-sheet';
import BottomSheet from './components/BottomSheet';

const SearchSreens = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const onChangeSearch = query => {
    setSearchQuery(query);
  };
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const [value, setValue] = useState('');

  return (
    <Block flex alignCenter backgroundColor={theme.colors.background}>
      <Header type="Infor" />
      <Block
        row
        alignCenter
        width={width}
        paddingHorizontal={15}
        paddingBottom={13}
        backgroundColor={theme.colors.white}>
        <Searchbar
          icon={SearchIcon}
          style={styles.searchStyle}
          clearIcon={Close}
          inputStyle={styles.inputStyle}
          placeholderTextColor={theme.colors.hintText}
          placeholder={'What do you want...?'}
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
        <Block paddingHorizontal={20}>
          <LineVertical />
        </Block>
        <Pressable onPress={() => refRBSheet.current.open()}>
          <FilterIcon />
        </Pressable>
      </Block>
      <Block width={width} flex backgroundColor={theme.colors.background}>
        <ListSearchResult />
      </Block>
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={true}
        dragFromTopOnly={true}
        duration={250}
        customStyles={{
          draggableIcon: {
            backgroundColor: theme.colors.black,
            width: 100,
            height: 2,
          },
          container: {
            height: '40%',
            backgroundColor: theme.colors.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
        }}>
        <Block absolute top={10} right={20}>
          <Pressable onPress={() => refRBSheet.current.close()}>
            <Text size={15} fontType={'bold'}>
              Filter
            </Text>
          </Pressable>
        </Block>
        <ScrollView>
          <BottomSheet />
        </ScrollView>
      </RBSheet>
    </Block>
  );
};

export default SearchSreens;
