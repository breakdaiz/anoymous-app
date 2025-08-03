import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import { useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const ResetPasswordScreen = () => {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 mx-a'>
      <TouchableOpacity
        className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6 '
        onPress={() => {
          router.back();
        }}
      >
        <ChevronLeft size={24} color={"#000"} />
      </TouchableOpacity>

      <Text className='text-3xl font-rubik-semibold text-black mb-8'>
        Forgot Password
      </Text>
      <View className='space-y-4'>
        <CustomInput
          placeHolder='Enter Email Address'
          placeholderTextColor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
        />

        <CustomButton
          title='Continue'
          buttonClassName='bg-primary-100'
          textClassName='font-rubik-semibold'
          onPress={() => {
            router.push("/(root)/(no-tabs)/(auth)/emailsent");
            //
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ResetPasswordScreen;
