import { useRouter } from "expo-router";
import { ChevronDown, ShoppingBasketIcon } from "lucide-react-native";

import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const Header = () => {
  const router = useRouter();

  return (
    <View className='flex-row items-center justify-between px-4'>
      <Image
        source={require("@/assets/images/home/Header/profile-image.png")}
        className='w-10 h-10 rounded-full'
      />
      <TouchableOpacity
        // onPress={() => router.push("/(root)/(no-tabs)/onboarding")} // Example navigation
        className='flex-row items-center bg-gray-200 px-4 py-2 rounded-full space-x-2'
      >
        <Text className='text-base font-rubik'>Men</Text>
        <ChevronDown size={20} color={"#000"} />
      </TouchableOpacity>
      <TouchableOpacity className='w-10 h-10 rounded-full bg-primary-100 flex justify-center items-center'>
        <ShoppingBasketIcon size={15} color={"#fff"} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
