import React from "react";
import { useEffect,useState } from "react";


import {View,Text,SafeAreaView,StyleSheet,StatusBar,ScrollView, FlatList} from "react-native"
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import BottomTabs from "./components/BottomTabs";
import Categories from "./components/Categories";
import HeaderTabs from "./components/HeaderTabs";
import RestrauntItem from "./components/RestrauntItem";
import { localRestaurants } from "./components/RestrauntItem";
import SearchBar from "./components/SearchBar";
const YELP_API_KEY =
  "vpoeLOB-Qxs-1-8DFnLqsWbxdh5t2nxJLAjKssilgSKmQMDrbHAZHyIFO4GXtPxCFsNzhOBL6p-8jSacTBizfU1bQgOufjFUBn9MZ9ks9gijb4X1rmAftrzCX5bIYXYx";
export default function Home({navigation})
{const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [activeTab, setActiveTab] = useState("Delivery");
    const [city, setCity] = useState("San Francisco");

    const getRestaurantsFromYelp = () => {
      const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}}`;
  
      const apiOptions = {
        headers: {
          Authorization: `Bearer ${YELP_API_KEY}`,
        },
      };
  
      return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) =>
          setRestaurantData(
            json.businesses.filter((business) =>
              business.transactions.includes(activeTab.toLowerCase())
            )
          )
        );
    };
  
    useEffect(() => {
      getRestaurantsFromYelp();
    }, [ activeTab]);
  
    

    return(
        <View style={{height:"100%"}} >
             <SafeAreaView style={{backgroundColor:"#eee",height:"20%"}}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
        <SearchBar cityHandler={setCity} style={{bottom:100}}></SearchBar>
        
        </SafeAreaView>

        <View style={{marginEnd:10,marginStart:10,height:"70%"}} >  
       <ScrollView vertical showsVerticalScrollIndicator={false} >
       <ScrollView horizontal showsHorizontalScrollIndicator={false} >
       <Categories/>
      
       </ScrollView>
       <RestrauntItem restrauntData={restaurantData} navigation={navigation}></RestrauntItem>
     
        </ScrollView>
        </View>
        
        
   <View style={{bottom:0,position:"absolute",height:"10%",width:"100%"}}>
   <BottomTabs></BottomTabs>
   </View>
       
        
        </View>
    )
   
}