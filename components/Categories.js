import react from "react";
import { View,Text,ScrollView,Image} from "react-native";
const items = [
    {
      image: require("../assets/images/shopping-bag.png"),
      text: "Pick-up",
    },
    {
        image: require("../assets/images/soft-drink.png"),
      text: "Soft Drinks",
    },
    {
        image: require("../assets/images/bread.png"),
      text: "Bakery Items",
    },
    {
        image: require("../assets/images/fast-food.png"),
      text: "Fast Foods",
    },
    {
        image: require("../assets/images/hot-deal.png"),
      text: "Deals",
    },
    {
        image: require("../assets/images/milk-tea.png"),
      text: "Coffee & Tea",
    },
    {
        image: require("../assets/images/cake.png"),
      text: "Desserts",
    },
  ];
export default function Categories() {
    
    return(<View>
         <ScrollView horizontal showsHorizontalScrollIndicator={false}>
         {items.map((item, index) => (
          <View key={index} style={{ alignItems: "center", marginRight: 30 }}>
            <Image
              source={item.image}
              style={{
                width: 50,
                height: 40,
                resizeMode: "contain",
              }}
            />
            <Text style={{ fontSize: 13, fontWeight: "900" }}>{item.text}</Text>
          </View>
        ))}
         </ScrollView>
    </View>)
}