import CustomButton from "@/components/shared/CustomButton";
import { useRouter } from "expo-router";
import React from "react";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const PassWordConfirmation = () => {
  const router = useRouter();
  return (
    <SafeAreaView className='flex-1 bg-white justify-center items-center px-6'>
      <View className='items-center w-full max-w-lg'>
        <Image
          source={require("@/assets/images/theme/email-sent.png")}
          className='w-[100px] h-[100px] mb-6'
          resizeMode='contain'
        />
        <Text className='text-[25px] font-rubik-semibold text-center text-gray-800 mb-8 leading-10'>
          We sent you an email to reset your password
        </Text>
      </View>
      <CustomButton
        title='Return to Login'
        buttonClassName='bg-primary-100'
        textClassName='text-lg font-rubik-semibold'
        onPress={() => {
          router.push("/");
        }}
      />
    </SafeAreaView>
  );
};

export default PassWordConfirmation;
