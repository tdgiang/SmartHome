import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import index from './index';
import setting from './setting';

const Stack = createStackNavigator();
function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen 
            name="index" 
            component={index} 
            options={{
                headerStyle: {
                  backgroundColor: '#f4511e',
                  opacity:0,
                  height:0
                }
              }}
        />
        <Stack.Screen name="setting" component={setting} />
      </Stack.Navigator>
    );
  }
  

export default class navigator extends Component {
     
    render() {
        return (
            <NavigationContainer>
                <MyStack />
            </NavigationContainer>
            
        );
    }
}