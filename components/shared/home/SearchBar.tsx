import { SearchIcon } from "lucide-react-native";
import React from "react";
import { TextInput, View } from "react-native";

const SearchBar = () => {
  return (
    <View
      className='flex-row items-center 
      bg-gray-300 mx-4 my-3 px-4 py-3 rounded-full space-x-2'
    >
      <SearchIcon size={20} color='#666' strokeWidth={2} />
      <TextInput
        placeholder='Search'
        placeholderTextColor='#666'
        className='flex-1 text-base ml-4 text-black py-2'
      ></TextInput>
    </View>
  );
};

export default SearchBar;
