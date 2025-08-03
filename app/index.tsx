import CustomInput from "@/components/shared/CustomInput";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { Platform, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { SvgUri } from "react-native-svg";
import CustomButton from "./../components/shared/CustomButton";

const LoginSceen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className='flex-1 bg-white'>
      <View
        className={`flex-1 px-2 mx-auto ${
          Platform.OS === "android" ? "pt-10" : "pt-5"
        }`}
      >
        <Text className='text-3xl font-rubik-semibold text-black mb-8'>
          Sign In
        </Text>
        <CustomInput placeHolder='Email Address' placeholderTextColor='#999' />
        <CustomButton
          title='Continue'
          buttonClassName={"bg-primary-100"}
          onPress={() => {
            router.push("/(root)/(no-tabs)/(auth)/password");
          }}
        />
        <View className='mb-8 mt-4'>
          <Text className='text-base text-black'>
            Don't have an account?{" "}
            <Link href={"/(root)/(no-tabs)/(auth)/register"}>
              <Text className='text-black font-rubik font-bold'>
                Create One
              </Text>
            </Link>
          </Text>
        </View>
        <View className='gap-3'>
          <CustomButton
            title='Continue with Apple'
            buttonClassName='bg-gray-100'
            icon={
              <SvgUri
                height={24}
                width={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg"
                }
              />
            }
            onPress={() => {
              console.log("Apple");
            }}
          />

          <CustomButton
            title='Continue with Google'
            buttonClassName='bg-gray-100'
            icon={
              <SvgUri
                height={24}
                width={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/google/google-original.svg"
                }
              />
            }
            onPress={() => {
              console.log("Google");
            }}
          />

          <CustomButton
            title='Continue with Facebook'
            buttonClassName='bg-gray-100'
            icon={
              <SvgUri
                height={24}
                width={24}
                uri={
                  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/facebook/facebook-original.svg"
                }
              />
            }
            onPress={() => {
              console.log("Facebook");
            }}
          />
        </View>
      </View>
      <StatusBar style='dark' />
    </SafeAreaView>
  );
};
export default LoginSceen;
