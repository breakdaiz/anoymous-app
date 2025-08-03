import CustomButton from "@/components/shared/CustomButton";
import CustomInput from "@/components/shared/CustomInput";
import { Link, useRouter } from "expo-router";
import { ChevronLeft } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const CreateAccountScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className='flex-1 bg-white p-2'>
      <TouchableOpacity
        className='w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mb-6'
        onPress={() => {
          router.back();
        }}
      >
        <ChevronLeft size={24} color={"#000"} />
      </TouchableOpacity>
      <Text className='text-3xl font-rubik-semibold text-black mb-8'>
        Create Account
      </Text>
      <View className='space-y-4'>
        <CustomInput placeHolder='Firstname' placeholderTextColor='#999' />
        <CustomInput placeHolder='Lastname' placeholderTextColor='#999' />
        <CustomInput
          placeHolder='Email Address'
          placeholderTextColor='#999'
          keyboardType='email-address'
          autoCapitalize='none'
        />
        <CustomInput
          placeHolder='Password'
          placeholderTextColor='#999'
          secureTextEntry
        />
        <CustomButton
          title='Continue'
          buttonClassName='bg-primary-100'
          textClassName='font-rubik-semibold'
          onPress={() => {
            router.push("/(root)/(no-tabs)/onboarding");
          }}
        />

        <View className='mt-6 items-start'>
          <Text className='text-sm text-black'>
            Forgot Password?{" "}
            <Link href={"/(root)/(no-tabs)/(auth)/reset"}>
              <Text className='text-black font-rubik font-bold'>Reset</Text>
            </Link>
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default CreateAccountScreen;
