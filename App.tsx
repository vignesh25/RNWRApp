import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EmployeeListComponent from './src/components/EmployeeListComponent';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EmployeeDetailsComponent from './src/components/EmployeeDetailsComponent';
const Stack = createNativeStackNavigator();

export default class App extends React.Component<{}> {

  constructor(props: any) {
    super(props)
  }

  componentDidMount() {

  }

  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    return ( 
    <View style={{ width: deviceWidth, height: deviceHeight }}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
          initialRouteName="EmployeeListComponent">
          <Stack.Screen name="EmployeeListComponent" component={EmployeeListComponent} />
          <Stack.Screen name="EmployeeDetailsComponent" component={EmployeeDetailsComponent} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
    )
  }

}
