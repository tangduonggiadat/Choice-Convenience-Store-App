import {Block, Text} from '../../../../../components';
import {theme} from '../../../../../theme';
import React, {useRef} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomTabBar from './components/CustomTabBar';
import {width} from '../../../../../utils/responsive';
import Carousel from '../../../../../components/Carousel';
import ListFeature from './components/ListFeatureProduct';
import TabScreenDiscovery from './components/TabScreenDiscovery';
import {Animated, FlatList} from 'react-native';
const DATA = [
  {
    id: '0',
    title: 'Foods',
  },
  {
    id: '1',
    title: 'Drink',
  },
  {
    id: '2',
    title: 'Snack',
  },
  {
    id: '3',
    title: 'Prepareds',
  },
  {
    id: '4',
    title: 'Wine',
  },
  {
    id: '5',
    title: 'Sea Foods',
  },
];
const ListCategory = ({route}) => {
  const Tab = createMaterialTopTabNavigator();
  const scrollY = useRef(new Animated.Value(0)).current;
  const renderItem = (item, index) => {
    return <Recipe key={index} recipe={item} />;
  };
  return (
    <Block flex width={width} backgroundColor={theme.colors.white}>
      <Tab.Navigator
        screenOptions={{
          swipeEnabled: false,
        }}
        optimizationsEnabled={true}
        tabBar={props => <CustomTabBar {...props} />}>
        {DATA.map((item, index) => {
          return (
            <Tab.Screen key={index} name={item.title}>
              {() => (
                <Block flex backgroundColor={theme.colors.background}>
                  <FlatList
                    showsVerticalScrollIndicator={false}
                    renderItem={renderItem}
                    ListHeaderComponent={
                      <>
                        <Carousel />
                        <Block paddingHorizontal={20} paddingTop={5}>
                          <Text size={18} fontType={'bold'} marginVertical={10}>
                            Feature Product
                          </Text>
                          <Block>
                            <ListFeature />
                          </Block>
                        </Block>
                      </>
                    }
                    ListFooterComponent={
                      <Block flex paddingHorizontal={20}>
                        <Text size={18} fontType={'bold'} marginVertical={10}>
                          Discovery
                        </Text>
                        <Block flex>
                          <TabScreenDiscovery />
                        </Block>
                      </Block>
                    }
                  />
                </Block>
              )}
            </Tab.Screen>
          );
        })}
      </Tab.Navigator>
    </Block>
  );
};

export default ListCategory;
