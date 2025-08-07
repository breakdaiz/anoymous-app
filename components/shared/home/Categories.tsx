import { useRouter } from "expo-router";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const images = {
  hoodies: require("@/assets/images/home/categories/hoodies.png"),
  shorts: require("@/assets/images/home/categories/shorts.png"),
  shoes: require("@/assets/images/home/categories/shoes.png"),
  bag: require("@/assets/images/home/categories/bag.png"),
  accessories: require("@/assets/images/home/categories/accessories.png"),
};

const categories = [
  { id: 1, name: "Hoodies", image: images.hoodies },
  { id: 2, name: "Shorts", image: images.shorts },
  { id: 3, name: "Shoes", image: images.shoes },
  { id: 4, name: "Bag", image: images.bag },
  { id: 5, name: "Accessories", image: images.accessories },
];

const CategorieListHomePage = () => {
  const router = useRouter();

  return (
    <View className='py-4'>
      <View className='flex-row justify-between items-center px-4 mb-4'>
        <Text className='text-2xl font-rubik-bold text-gray-800'>
          Categories
        </Text>
        <TouchableOpacity
          onPress={() => router.push("/(root)/(no-tabs)/categories")}
        >
          <Text className='text-base text-primary-500'>See All</Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pl-4'
      >
        {categories.map(category => (
          <TouchableOpacity
            key={category.id}
            className='items-center mr-4'
            onPress={() =>
              router.push(`/categories/${category.name.toLowerCase()}`)
            }
          >
            <View className='w-16 h-16 rounded-full bg-gray-200 mb-2 overflow-hidden'>
              <Image
                source={category.image}
                className='w-full h-full  object-cover'
              />
            </View>
            <Text className=' text-center text-sm font-rubik-medium text-black'>
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default CategorieListHomePage;
