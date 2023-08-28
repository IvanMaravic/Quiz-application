import { createStackNavigator } from "@react-navigation/stack"
import { Platform } from "react-native"
import HomeScreen from "./HomeScreen";
import RPN_NN from "./RPNNN";
import Test from "./Test";
import ReviewScreen from "./ReviewScreen";
import OUIRSadrzaj from "./OUIRSadrzaj";
import OUIR1 from "./OUIR1";
import OUIR2 from "./OUIR2";
import OUIR3 from "./OUIR3";
import OUIR4 from "./OUIR4";
import OUIR5 from "./OUIR5";
import OUIR6 from "./OUIR6";
import OUIR7 from "./OUIR7";
import OUIR8 from "./OUIR8";
import OUIR9 from "./OUIR9";
import OUIR10 from "./OUIR10";
import OUIR11 from "./OUIR11";
import OUIR12 from "./OUIR12";
import OUIR13 from "./OUIR13";
import UZIRPN from "./UZIRPN";
import UZIRPN1 from "./UZIRPN1";
import UZIRPN2 from "./UZIRPN2";
import UZIRPN3 from "./UZIRPN3";
import UZIRPN4 from "./UZIRPN4";
import UZIRPN5 from "./UZIRPN5";
import UZIRPN6 from "./UZIRPN6";
import UZIRPN7 from "./UZIRPN7";
import DIRPN from "./DIRPN";
import DIRPN1 from "./DIRPN1";
import DIRPN2 from "./DIRPN2";
import DIRPN3 from "./DIRPN3";
import DIRPN4 from "./DIRPN4";
import DIRPN5 from "./DIRPN5";
import DIRPN6 from "./DIRPN6";
import DIRPN7 from "./DIRPN7";
import DIRPN8 from "./DIRPN8";
import DIRPN9 from "./DIRPN9";
import DIRPN10 from "./DIRPN10";
import DIRPN11 from "./DIRPN11";
import DIRPN12 from "./DIRPN12";
import DIRPN13 from "./DIRPN13";
import DIRPN14 from "./DIRPN14";





const Stack = createStackNavigator();

function AppNavigator(){
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name="Home"
                component={HomeScreen}
                options={{ headerShown: false}}
                />
            <Stack.Screen 
                name="RPN-NN"
                component={RPN_NN}
                options={{ headerShown: false}}
                />
            <Stack.Screen 
                name="Test"
                component={Test}
                /> 
            <Stack.Screen 
                name="ReviewScreen"
                component={ReviewScreen}
                /> 
            <Stack.Screen 
                name="OUIRSadrzaj"
                component={OUIRSadrzaj}
                /> 
            <Stack.Screen 
                name="OUIR1"
                component={OUIR1}
                />

            <Stack.Screen 
                name="OUIR2"
                component={OUIR2}
                /> 

            <Stack.Screen 
                name="OUIR3"
                component={OUIR3}
                /> 

            <Stack.Screen 
                name="OUIR4"
                component={OUIR4}
                /> 
            <Stack.Screen 
                name="OUIR5"
                component={OUIR5}
                /> 
            <Stack.Screen 
                name="OUIR6"
                component={OUIR6}
                /> 
            <Stack.Screen 
                name="OUIR7"
                component={OUIR7}
                /> 
            <Stack.Screen 
                name="OUIR8"
                component={OUIR8}
                /> 
            <Stack.Screen 
                name="OUIR9"
                component={OUIR9}
                /> 
            <Stack.Screen 
                name="OUIR10"
                component={OUIR10}
                /> 
            <Stack.Screen 
                name="OUIR11"
                component={OUIR11}
                /> 
            <Stack.Screen 
                name="OUIR12"
                component={OUIR12}
                /> 
            <Stack.Screen 
                name="OUIR13"
                component={OUIR13}
                />
            <Stack.Screen 
                name="UZIRPN"
                component={UZIRPN}
                />
            <Stack.Screen 
                name="UZIRPN1"
                component={UZIRPN1}
                />
            <Stack.Screen 
                name="UZIRPN2"
                component={UZIRPN2}
                />
            <Stack.Screen 
                name="UZIRPN3"
                component={UZIRPN3}
                />
            <Stack.Screen 
                name="UZIRPN4"
                component={UZIRPN4}
                />
            <Stack.Screen 
                name="UZIRPN5"
                component={UZIRPN5}
                />
            <Stack.Screen 
                name="UZIRPN6"
                component={UZIRPN6}
                />
            <Stack.Screen 
                name="UZIRPN7"
                component={UZIRPN7}
                />
            <Stack.Screen 
                name="DIRPN"
                component={DIRPN}
                />
            <Stack.Screen 
                name="DIRPN1"
                component={DIRPN1}
                />
            <Stack.Screen 
                name="DIRPN2"
                component={DIRPN2}
                />
            <Stack.Screen 
                name="DIRPN3"
                component={DIRPN3}
                />
            <Stack.Screen 
                name="DIRPN4"
                component={DIRPN4}
                />
            <Stack.Screen 
                name="DIRPN5"
                component={DIRPN5}
                />
            <Stack.Screen 
                name="DIRPN6"
                component={DIRPN6}
                />
            <Stack.Screen 
                name="DIRPN7"
                component={DIRPN7}
                />
            <Stack.Screen 
                name="DIRPN8"
                component={DIRPN8}
                />
            <Stack.Screen 
                name="DIRPN9"
                component={DIRPN9}
                />
            <Stack.Screen 
                name="DIRPN10"
                component={DIRPN10}
                />
            <Stack.Screen 
                name="DIRPN11"
                component={DIRPN11}
                />
            <Stack.Screen 
                name="DIRPN12"
                component={DIRPN12}
                />
            <Stack.Screen 
                name="DIRPN13"
                component={DIRPN13}
                />
            <Stack.Screen 
                name="DIRPN14"
                component={DIRPN14}
                />
        </Stack.Navigator>
        
    )
}

export default AppNavigator;