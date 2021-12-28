import React from "react";
import { View, Text } from "react-native";

import About from "./restrauntDetail/About";
import Menu from "./restrauntDetail/Menu";
import ViewCart from "./restrauntDetail/ViewCart";

const foods = [
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
  },
  {
    title: "Tandoori Chicken",
    description:
      "Amazing Indian dish with tenderloin chicken off the sizzles 🔥",
    price: "$19.20",
    image: "https://i.ytimg.com/vi/BKxGodX9NGg/maxresdefault.jpg",
  },
  {
    title: "Chilaquiles",
    description:
      "Chilaquiles with cheese and sauce. A delicious mexican dish 🇲🇽",
    price: "$14.50",
    image:
      "https://i2.wp.com/chilipeppermadness.com/wp-content/uploads/2020/11/Chilaquales-Recipe-Chilaquiles-Rojos-1.jpg",
  },
  {
    title: "Chicken Caesar Salad",
    description:
      "One can never go wrong with a chicken caesar salad. Healthy option with greens and proteins!",
    price: "$21.50",
    image:
      "https://images.themodernproper.com/billowy-turkey/production/posts/2019/Easy-italian-salad-recipe-10.jpg?w=1200&h=1200&q=82&fm=jpg&fit=crop&fp-x=0.5&fp-y=0.5&dm=1614096227&s=c0f63a30cef3334d97f9ecad14be51da",
  },
  {
    title: "Lasagna",
    description: "With butter lettuce, tomato and sauce bechamel",
    price: "$13.50",
    image:
      "https://thestayathomechef.com/wp-content/uploads/2017/08/Most-Amazing-Lasagna-2-e1574792735811.jpg",
  },
  {
    title: "Farmhouse Pizza",
    description: "Delightful combination of onion, capsicum, tomato & grilled mushroom",
    price: "$13.50",
    image:"https://images.unsplash.com/photo-1574126154517-d1e0d89ef734?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8cGl6emF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  },
  {
    title: "Garlic Breadsticks",
    description: "Baked to perfection. Your perfect pizza partner! Tastes best with dip",
    price: "$2",
    image:"https://images.unsplash.com/photo-1536765659537-ac6b544ea73b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnJlYWRzdGlja3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  },
  {
    title: "Pasta",
    description: "Instant Fusilli Pasta, Cheesy Jalapeno Sauce, Onion, Jalapeno, Parsley sprinkle",
    price: "$7.5",
    image:"https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGFzdGF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
  
  },
  {
    title: "Burger",
    description: "A golden fried vegetarian patty prepared with peas, potato and infused with aromatic spices.",
    price: "$3",
    image:"https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnJTIwYnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
  
  },



  // https://media.istockphoto.com/photos/vegetarian-pizza-with-broccoli-cherry-tomato-pepper-and-mushrooms-picture-id1297290376?b=1&k=20&m=1297290376&s=170667a&w=0&h=lwGeM5VzMWRRwJpGwGhLgoMVSDMJL5OuCYhnhCmNthc=
];

export default function RestaurantDetail({ route, navigation }) {
  return (
    <View>
      <About route={route} />
      
      <Menu restaurantName={route.params.name} foods={foods} />
      <ViewCart navigation={navigation} />
    </View>
  );
}