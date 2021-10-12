import {Block} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box';

const DATA = [
  {
    id: '0',
    title: '> 1 month',
    checked: false,
  },
  {
    id: '1',
    title: '< 1 month and sale',
    checked: false,
  },
  {
    id: '2',
    title: '> 1 month',
    checked: false,
  },
];
const ListExpiry = () => {
  const [checkedState, setCheckedState] = useState(' ');

  const handleOnChange = (id, index) => {
    const checkboxData = [...DATA];
    checkboxData[index].checked = !checkboxData[index].checked;
    setCheckedState(checkboxData);
  };

  const _renderItem = DATA?.map((item, index) => {
    return (
      <Block key={index} paddingVertical={13} alignCenter row paddingRight={14}>
        <CheckBox
          key={item.id}
          isChecked={item.checked}
          checkedCheckBoxColor={theme.colors.gold}
          onClick={() => handleOnChange(item.id, index)}
          checkBoxColor={theme.colors.black}
          rightText={item.title}
          rightTextStyle={{marginLeft: 3, fontWeight: '500'}}
        />
      </Block>
    );
  });

  return (
    <Block>
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        bounces={false}
        showsHorizontalScrollIndicator={false}>
        <Block row wrap alignCenter justifyCenter>
          {_renderItem}
        </Block>
      </ScrollView>
    </Block>
  );
};

export default ListExpiry;
