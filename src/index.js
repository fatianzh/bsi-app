import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from './screens/Home';
import DetailsScreen from './screens/Details';
import OneScreen from './screens/One';
import SynchronousScreen from "./screens/Synchronous";
import AsynchronousScreen from "./screens/Asynchronous";
import AsyncAwaitPromiseExample from "./screens/AsyncAwait";
import CallbackPromiseExample from "./screens/Callback";
import FunctionalComponentWithOOP from "./screens/OOP"
import FetchScreen from "./screens/Networking/Fetch"
import AxiosScreen from "./screens/Networking/Axios";
import PostScreen from "./screens/Networking/Post";
import BankScreen from "./screens/case/Bank";
import TopUpScreen from "./screens/case/TopUp";
import ReduxConcept from "./screens/ReduxConcept";
import IntegrationRedux from "./screens/IntegrationRedux";
import IntegrateFetchAPI from "./screens/FetchApi";

const Stack = createStackNavigator();

const AppSrc = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" options={{headerTitle: 'Ini Detail'}} component={DetailsScreen} />
        <Stack.Screen name="One" options={{}} component={OneScreen} />
        <Stack.Screen name="Synchronous" options={{}} component={SynchronousScreen} />
        <Stack.Screen name="Asynchronous" options={{}} component={AsynchronousScreen} />
        <Stack.Screen name="AsyncAwait" options={{}} component={AsyncAwaitPromiseExample} />
        <Stack.Screen name="Callback" options={{}} component={CallbackPromiseExample} />
        <Stack.Screen name="OOP" options={{}} component={FunctionalComponentWithOOP} />
        <Stack.Screen name="Fetch" options={{}} component={FetchScreen} />
        <Stack.Screen name="Axios" options={{}} component={AxiosScreen} />
        <Stack.Screen name="Post" options={{}} component={PostScreen} />
        <Stack.Screen name="ReduxConcept" options={{headerTitle: 'Redux Concept'}} component={ReduxConcept} />
        <Stack.Screen name="IntegrationRedux" options={{headerTitle: 'Notes'}} component={IntegrationRedux} />
        <Stack.Screen name="IntegrateFetchAPI" options={{headerTitle: 'Fetch API'}} component={IntegrateFetchAPI} />
        <Stack.Screen name="Bank" options={{}} component={BankScreen} />
        <Stack.Screen name="TopUp" options={{headerTitle: 'Top Up'}} component={TopUpScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppSrc;