import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {
  NavigationContainer,
  RouteProp,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React, {useCallback} from 'react';
import {TABS} from './enums';
import {TabParamsList} from './types';
import ReelStack from './stacks/ReelStack';
import TiktokStack from './stacks/TiktokStack';
import {ROUTER} from './router';
import SplashScreen from '../screens/Auth/SplashScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const AppNavigators = () => {
  const navigationRef = useNavigationContainerRef();

  const bottomTabItemOption = (
    routeName: keyof TabParamsList,
  ): BottomTabNavigationOptions | undefined => {
    switch (routeName) {
      case TABS.REEL_TAB:
        return {
          tabBarLabel: 'Reel',
        };
      case TABS.TIKTOK_TAB:
        return {
          tabBarLabel: 'Tiktok',
        };
    }
  };

  const bottomTabDefaultOptions = useCallback(
    (props: {
      route: RouteProp<TabParamsList, keyof TabParamsList>;
      navigation: any;
    }): BottomTabNavigationOptions => {
      return {
        headerShown: false,
        ...bottomTabItemOption(props.route.name),
      };
    },
    [],
  );

  const stackDefaultOptions: NativeStackNavigationOptions = {
    headerShown: false,
  };

  const nonBottomTabOptions: NativeStackNavigationOptions = {};

  const onStateChange = async () => {};

  const Tabs = useCallback(
    () => (
      <Tab.Navigator screenOptions={props => bottomTabDefaultOptions(props)}>
        <Tab.Screen name={TABS.REEL_TAB} component={ReelStack} />
        <Tab.Screen name={TABS.TIKTOK_TAB} component={TiktokStack} />
      </Tab.Navigator>
    ),
    [bottomTabDefaultOptions],
  );

  const NonBottomTab = (
    <>
      <Stack.Screen name={ROUTER.SplashScreen} component={SplashScreen} />
    </>
  );

  return (
    <NavigationContainer ref={navigationRef} onStateChange={onStateChange}>
      <Stack.Navigator screenOptions={stackDefaultOptions}>
        <Stack.Screen name={TABS.BOTTOM_TABS} component={Tabs} />
        <Stack.Group screenOptions={nonBottomTabOptions}>
          {NonBottomTab}
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigators;