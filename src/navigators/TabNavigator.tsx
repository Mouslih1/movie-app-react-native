import React from 'react';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import TicketScreen from '../screens/TicketScreen';
import UserAccountScreen from '../screens/UserAccountScreen';
import {COLORS, FONTSIZE, SPACING} from '../theme/Theme';
import CustomIcon from '../components/CustomIcon';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: COLORS.black,
          borderTopWidth: 0,
          height: SPACING.space_10 * 10,
        },
      }}>
      <tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.orange} : {},
            ]}>
              <CustomIcon
                name="video"
                color={COLORS.white}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="Ticket"
        component={TicketScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.orange} : {},
            ]}>
              <CustomIcon
                name="ticket"
                color={COLORS.white}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.orange} : {},
            ]}>
              <CustomIcon
                name="search"
                color={COLORS.white}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
      <tab.Screen
        name="Profile"
        component={UserAccountScreen}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({focused, color, size}) => (
            <View style={[
                styles.activeTabBackground,
                focused ? {backgroundColor: COLORS.orange} : {},
            ]}>
              <CustomIcon
                name="user"
                color={COLORS.white}
                size={FONTSIZE.size_30}
              />
            </View>
          ),
        }}
      />
    </tab.Navigator>
  );
};

const styles = StyleSheet.create({
  activeTabBackground: {
    backgroundColor: COLORS.black,
    padding: SPACING.space_18,
    borderRadius: SPACING.space_18 * 10,
  },
});

export default TabNavigator;
