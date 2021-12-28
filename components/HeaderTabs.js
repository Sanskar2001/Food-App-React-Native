import React, { useState } from "react"
import {View,Text,SafeAreaView,TouchableOpacity,StyleSheet,StatusBar, Platform} from "react-native"


export default function HeaderTabs(props) {
    // const [activeTab,setActiveTab]=useState("Delivery")
    console.log(Platform.OS)
    return(
      
        <View style={{flexDirection:"row",alignSelf:"center",marginTop: (Platform.OS=="android"? StatusBar.currentHeight+10 : 0)}}>
         <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
         <HeaderButton text="Pickup" btnColor="white" textColor="black" activeTab={props.activeTab} setActiveTab={props.setActiveTab}/>
        </View>
       
    )
}

const HeaderButton=(props)=>{
       return(
        <View >
            <TouchableOpacity onPress={()=>{props.setActiveTab(props.text);}} 
            style={{backgroundColor:props.activeTab===props.text? "black" : "white",
                paddingVertical:6,
                paddingHorizontal:16,
                borderRadius:30}}>
            <Text style={{color: props.text===props.activeTab ? "white" :"black"}}>{props.text}</Text>
            </TouchableOpacity>
        </View>
       );
}

