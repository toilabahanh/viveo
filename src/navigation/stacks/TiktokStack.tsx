import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {STACKS} from '../enums';
import {ROUTER} from '../router';
import TiktokScreen from '../../screens/Tiktok/TiktokScreen';

const Stack = createNativeStackNavigator<any>();

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const TiktokStack = () => {
  return (
    <Stack.Navigator
      key={STACKS.TIKTOK_STACK}
      initialRouteName={ROUTER.TiktokScreen}
      screenOptions={defaultOptions}>
      <Stack.Screen name={ROUTER.TiktokScreen} component={TiktokScreen} />
    </Stack.Navigator>
  );
};

export default TiktokStack;
