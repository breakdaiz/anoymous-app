import { useRouter } from "expo-router";
import { Heart } from "lucide-react-native";
import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface Product {
  id: number;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
}

interface ProductListProps {
  title: string;
  products: Product[];
}

const ProductList = ({ title, products }: ProductListProps) => {
  // This component will display a list of products

  const router = useRouter();

  return (
    <View className='px-4'>
      <View className='flex-row justify-between items-center mb-4'>
        <Text className='text-2xl font-rubik-bold text-gray-800'>{title}</Text>
        <Text
          className={`text-2xl font-rubik-bold ${
            title == "New In" ? "text-primary-100" : ""
          }`}
          // onPress={() => router.push("/products")}
        >
          {title}
        </Text>
        <TouchableOpacity>
          <Text className='text-lg font-rubik-bold text-gray-600'>See All</Text>
        </TouchableOpacity>
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className='pl-4'
      >
        {products.map(product => (
          <TouchableOpacity
            onPress={() => {}}
            key={product.id}
            className='w-48 mr-4'
          >
            <View className='relative bg-gray-200 rounded-lg mb-2'>
              <Image
                source={require("@/assets/images/home/products/jacket.png")}
                className='w-full h-72 rounded-lg'
                resizeMode='cover'
              />
              <TouchableOpacity
                className='absolute top-2 right-2 bg-white p-2 rounded-full
               shadow'
              >
                <Heart size={20} color={"#666"} />
              </TouchableOpacity>
            </View>
            <View className='px-1'>
              <Text
                className='text-lg font-rubik-bold text-gray-800'
                numberOfLines={2}
              >
                {product.title}
              </Text>
              <View className='flex-row items-center justify-between gap-2  '>
                <Text className='text-lg font-rubik-bold text-gray-800'>
                  ${product.price.toFixed(2)}
                </Text>
                {product.originalPrice && (
                  <Text className='text-sm font-rubik-regular text-gray-500 line-through'>
                    ${product.originalPrice.toFixed(2)}
                  </Text>
                )}
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default ProductList;
