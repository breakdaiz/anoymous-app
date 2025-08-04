import Header from "@/components/shared/home/Header";
import SearchBar from "@/components/shared/home/SearchBar";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = () => {
  const topSellingProducts = [
    {
      id: 1,
      title: "Men's Harrington Jacket",
      price: 148.0,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Max Cirro Men's Slides",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Max Cirro Men's a",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    // Add more products as needed
  ];

  const newInProducts = [
    // Similar structure to topSellingProducts
    // Add products as needed
    {
      id: 1,
      title: "Men's Harrington Jacket",
      price: 148.0,
      image: "/placeholder.svg",
    },
    {
      id: 2,
      title: "Max Cirro Men's Slides",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
    {
      id: 3,
      title: "Max Cirro Men's a",
      price: 55.0,
      originalPrice: 100.97,
      image: "/placeholder.svg",
    },
  ];

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <ScrollView className='flex-1'>
        <Header />
        <SearchBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
