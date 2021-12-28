import React, { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView,Image } from "react-native";
import { useSelector } from "react-redux";
import LottieView from "lottie-react-native";
import {db} from "./firebase";
import Menu from "./restrauntDetail/Menu";

import { getDocs,limit,query,collection, addDoc,FieldValue,serverTimestamp,orderBy } from "firebase/firestore"; 

export default function OrderCompleted() {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: "Bologna",
        description: "With butter lettuce, tomato and sauce bechamel",
        price: "$13.50",
        image:
          "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
      },
    ],
  });

  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  );

  const total = items
    .map((item) => Number(item.price.replace("$", "")))
    .reduce((prev, curr) => prev + curr, 0);

  const totalUSD = "$"+total

  useEffect(() => {

    // orderBy("createdAt","desc")
    // const unsubscribe =  collection(db,"orders")
    //  .orderBy("createdAt", "desc")
    //   .limit(1)
    //   .onSnapshot((snapshot) => {
    //     snapshot.docs.map((doc) => {
    //       setLastOrder(doc.data());
    //     });
    //   });

    // console.log("order page")
    // return () => unsubscribe();

    const ordersRef = collection(db, "orders");
    const q = query(ordersRef, orderBy("createdAt","desc"),limit(1));
    const querySnapshot=getDocs(q)
    
querySnapshot.then((snapshot)=>{snapshot.docs.map((doc)=>{
  console.log(doc.data())
  setLastOrder(doc.data());
})})


  }, []);

  return (
   
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      {/* green checkmark */}

      
    
      <View
        style={{
          margin: 15,
          alignItems: "center",
          height: "100%",
        }}
      >
        <LottieView
          style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
          source={require("./assets/animations/check-mark.json")}
          autoPlay
          speed={0.5}
          loop={true}
        />
        <Text style={{ fontSize: 19, fontWeight: "bold" }}>
          Your order at {restaurantName} has been placed for ${total}
        </Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Menu
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
        
        </ScrollView>
        <LottieView
            style={{ height: 200, alignSelf: "center",marginBottom:50 }}
            source={require("./assets/animations/cooking.json")}
            autoPlay
            speed={0.5}
          />
      </View>
    </SafeAreaView>
  );
}