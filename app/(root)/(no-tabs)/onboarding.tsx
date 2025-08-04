import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "expo-router";
import { ArrowDown } from "lucide-react-native";
import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const OnBoardingScreen = () => {
  const [selectedGender, setSelectedGender] = useState("men");
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-white px-3'>
      <View className='flex-1 px-3 pt-10'>
        <Text className='text-3xl font-rubik-semibold text-gray-800'>
          Tell us about yourself
        </Text>

        <View className='mb-8'>
          <Text className='text-lg font-rubik-medium text-gray-800 mt-4'>
            Who do you shop for?
          </Text>
          <View className='flex-row space-x-3 mt-4'>
            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "men" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => setSelectedGender("men")}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender == "men" ? "text-white" : "text-black"
                }`}
              >
                Men
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className={`flex-1 h-14 rounded-full justify-center items-center ${
                selectedGender === "women" ? "bg-primary-100" : "bg-gray-200"
              }`}
              onPress={() => setSelectedGender("women")}
            >
              <Text
                className={`text-base font-rubik-medium ${
                  selectedGender == "women" ? "text-white" : "text-black"
                }`}
              >
                Wonen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className='mb-8'>
          <Text className='text-lg font-rubik-medium text-gray-800'>
            How old are you?{" "}
          </Text>
          <View className='flex-row space-x-3 mt-4'>
            <TouchableOpacity
              className='flex-1 h-14  bg-gray-200 rounded-full px-5 flex-row justify-between items-center'
              onPress={() => {
                // Handle age selection
              }}
            >
              <Text className='text-base text-gray-800'> Age Range</Text>
              <Text className='text-lg text-gray-800 '>
                <ArrowDown color={"#000"} size={20} />
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <CustomButton
          title='Finish'
          buttonClassName='absolute bottom-6 left-0 right-0 bg-primary-100'
          onPress={() => {
            router.push("/(root)/(tabs)/home");
          }}
          textClassName='text-lg font-rubik-semibold text-white'
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;
