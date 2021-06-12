import React from "react";
import { Welcome } from "../pages/Welcome";
import { UserIdentification } from "../pages/UserIdentification";
import { Confirmation } from "../pages/Confirmation";

import {createStackNavigator} from '@react-navigation/stack';
import colors from "../estilos/colors";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () =>(
    <stackRoutes.Navigator
        headerMode='none'
        screenOptions={{
            cardStyle: {
                backgroundColor: colors.branco
            }
        }}
    >
        <stackRoutes.Screen
            name='Welcome'
            component={Welcome}
        />

        <stackRoutes.Screen
            name='UserIdentification'
            component={UserIdentification}
        />

        <stackRoutes.Screen
            name='Confirmation'
            component={Confirmation}
        />

        
    </stackRoutes.Navigator>
)

export default AppRoutes;