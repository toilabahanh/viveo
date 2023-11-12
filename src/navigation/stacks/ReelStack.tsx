import {
  NativeStackNavigationOptions,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import React from 'react';
import {STACKS} from '../enums';
import {ROUTER} from '../router';
import ReelScreen from '../../screens/Reels/ReelScreen';

const Stack = createNativeStackNavigator<any>();

const defaultOptions: NativeStackNavigationOptions = {
  headerShown: false,
};

const ReelStack = () => {
  return (
    <Stack.Navigator
      key={STACKS.REEL_STACK}
      initialRouteName={ROUTER.ReelScreen}
      screenOptions={defaultOptions}>
      <Stack.Screen name={ROUTER.ReelScreen} component={ReelScreen} />
    </Stack.Navigator>
  );
};

export default ReelStack;
