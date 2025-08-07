import { useRouter } from "expo-router";

import { ChevronLeft, Search } from "lucide-react-native";
import React, { useState } from "react";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const categories = [
  {
    id: 1,
    name: "Hoodies",
    image: require("@/assets/images/home/categories/hoodies.png"),
  },
  {
    id: 2,
    name: "Shorts",
    image: require("@/assets/images/home/categories/shorts.png"),
  },
  {
    id: 3,
    name: "Shoes",
    image: require("@/assets/images/home/categories/shoes.png"),
  },
  {
    id: 4,
    name: "Bag",
    image: require("@/assets/images/home/categories/bag.png"),
  },
  {
    id: 5,
    name: "Accessories",
    image: require("@/assets/images/home/categories/accessories.png"),
  },
];

const CategoriesScreen = () => {
  const router = useRouter();
  const [searchTextName, setSearchTextName] = useState("");
  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View className='flex-row  px-4 py-2 space-x-3 '>
        <TouchableOpacity
          className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6 mr-2'
          onPress={() => {
            router.back();
          }}
        >
          <ChevronLeft size={24} color={"#000"} />
        </TouchableOpacity>
        <View className='flex-1 h-10 flex-row items-center bg-gray-200 rounded-full px-3'>
          <Search size={24} color={"#000"} />
          <TextInput
            placeholder='Search'
            className='flex-1 h-[50px] text-base text-black pl-2'
            placeholderTextColor={"#666"}
            onChangeText={setSearchTextName}
          />
        </View>
      </View>
      <View>
        <Text className='text-2xl font-rubik-medium text-black px-4 mt-6 mb-4'>
          Shop by Categories
        </Text>
        <View className='px-4'>
          {categories.map(category => (
            <TouchableOpacity
              key={category.id}
              className='flex-row items-center bg-gray-100 rounded-lg p-3 mb-3'
              onPress={() => {
                router.push(`/categories/${category.id}`);
              }}
            >
              <Image
                source={category.image}
                className='w-12 h-12 rounded-lg mr-3'
              />

              <Text className='text-center text-lg font-rubik-medium text-black mt-2'>
                {category.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CategoriesScreen;
