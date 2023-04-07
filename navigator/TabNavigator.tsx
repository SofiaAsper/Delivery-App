import React, { useLayoutEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomerScreen from '../screens/CustomerScreen';
import OrderScreen from '../screens/OrderScreen';
import { useNavigation } from '@react-navigation/native';
import { Icon } from "@rneui/themed";

export type TabStackparamList = {
    Customers: undefined;
    Orders: undefined;
}

const Tab = createBottomTabNavigator<TabStackparamList>();

const TabNavigator = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        })
    }, []);

    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarActiveTintColor: "#59C1CC",
            tabBarInactiveTintColor: "#BDBDBD",
            tabBarIcon: ({ focused, color, size }) => {
                if (route.name === "Customers") {
                    return (
                        <Icon
                            name="user"
                            type="entypo"
                            size={size}
                            color={focused ? "#59C1CC" : "#BDBDBD"} />);
                } else if (route.name === "Orders") {
                    return (
                        <Icon
                            name="shopping-cart"
                            type="entypo"
                            size={size}
                            color={focused ? "#59C1CC" : "#BDBDBD"} />);
                }
            }
        })}>
            <Tab.Screen name="Customers" component={CustomerScreen} />
            <Tab.Screen name="Orders" component={OrderScreen} />
        </Tab.Navigator >
    )
}

export default TabNavigator