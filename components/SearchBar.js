import react from "react";
import { View ,Text,TouchableOpacity} from "react-native"
import { GeoapifyGeocoderAutocomplete} from "@geoapify/react-geocoder-autocomplete"
import {Ionicons} from "react-native-vector-icons"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import AntDesign from "react-native-vector-icons/AntDesign"
const requestOptions = {
    method: 'GET',
  };
export default  function SearchBar(){

    return(
         <View style={{marginTop:15,marginBottom:15,flexDirection:"row"}}>
        

        <GooglePlacesAutocomplete placeholder="Search" 
        
    
        styles={{
            textInput:{
                // marginTop:10, 
                marginBottom:10,
                borderRadius:20
               
            },
            textInputContainer:{
              backgroundColor:"white",
              borderRadius:50,
              marginTop:10
            }
        }}

        renderLeftButton={()=>(
             <View style={{marginLeft:10,marginTop:10}}>
                <Ionicons name="location-sharp" size={24}/>

                
                </View>
           
            
        )}

        renderRightButton={()=>(
            <TouchableOpacity onPress={console.log("clicked")}>
            <View style={{marginRight:10,marginTop:15,flexDirection:"row"}}>
                <AntDesign name="clockcircle" size={11} style={{marginTop:4}}> </AntDesign>
                <Text>Search</Text>
                </View>
                </TouchableOpacity>
        )}
        />

    
    </View>
    )
   
    }