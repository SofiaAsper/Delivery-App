import React, { useLayoutEffect, useState } from 'react';
import { ScrollView, ActivityIndicator } from 'react-native';
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { useTailwind } from 'tailwind-rn/dist';
import { TabStackparamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackparamList } from '../navigator/RootNavigator';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { Image, Input } from '@rneui/themed';

export type CustomerScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackparamList, 'Customers'>,
  NativeStackNavigationProp<RootStackparamList>
>

const CustomerScreen = () => {
  const [input, setInput] = useState<string>('');

  const tailwind = useTailwind();
  const navigation = useNavigation<CustomerScreenNavigationProp>();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC" }}>
      <Image
        source={{ uri: "https://links.papareact.com/3jc" }}
        containerStyle={tailwind('w-full h-64')}
        PlaceholderContent={<ActivityIndicator />}
      />
      <Input
        placeholder='Search by customer'
        value={input}
        onChangeText={setInput}
        containerStyle={tailwind('bg-white pt-5 pb-0 px-10')}
      />
    </ScrollView>
  );
};

export default CustomerScreen;