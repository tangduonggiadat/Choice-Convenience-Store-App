import {Block} from '../../../../../../../components';
import {theme} from '../../../../../../../theme';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import CheckBox from 'react-native-check-box';
import {
  ChekedButton,
  UnChekedButton,
} from '../../../../../../../assets/svg/common';

const DATA = [
  {
    id: '0',
  },
];
const CheckedBox = () => {
  const [checkedState, setCheckedState] = useState(' ');

  const handleOnChange = (id, index) => {
    const checkboxData = [...DATA];
    checkboxData[index].checked = !checkboxData[index].checked;
    setCheckedState(checkboxData);
  };

  const _renderItem = DATA?.map((item, index) => {
    return (
      <Block key={index}>
        <CheckBox
          key={item.id}
          isChecked={item.checked}
          onClick={() => handleOnChange(item.id, index)}
          checkedImage={<ChekedButton />}
          unCheckedImage={<UnChekedButton />}
        />
      </Block>
    );
  });

  return (
    <Block row wrap alignCenter justifyCenter>
      {_renderItem}
    </Block>
  );
};

export default CheckedBox;
