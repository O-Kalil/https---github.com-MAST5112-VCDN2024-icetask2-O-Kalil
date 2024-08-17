import React from "react"
/* Purpose of the RootStackParamList:
1. defines the parmateres that can be passed to different screens
withing the navigation stack
2. In this app we have updated it such that we are passing a parameter
to screen 2. Therefore, screen2 shall receive a parameter of a string type
called "name".
*/
export type RootStackParamList = {
Screen1: undefined;
Screen2: {name: string, STnumber :string}; //parameter that screen 2 is structured to receive
}