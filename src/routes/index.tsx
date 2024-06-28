import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Camera from "../pages/Camera";
import UserProfile from "../pages/UserProfile";
import Payment from "../pages/Payment";
import { ChoicePlan } from "../pages/PlanChoices";
import { Login } from "../pages/Login";
import Home from "../pages/Home";

const Stack = createStackNavigator();

export default function Routes() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Login' component={Login}/>
        <Stack.Screen name='Plans' component={ChoicePlan}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Payment' component={Payment}/>
        <Stack.Screen name='UserProfile' component={UserProfile}/>
        <Stack.Screen name='Camera' component={Camera}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}