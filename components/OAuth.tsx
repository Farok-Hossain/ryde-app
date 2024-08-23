import { View, Text } from "react-native";

const OAuth = () => {
  return (
    <View>
      <View className="flex flex-row justify-center items-center mt-4 gap-x-3">
        <View className=" flex-1 h-[1px] bg-general-100" />
        <Text className="text-lg">Or</Text>
        <View className=" flex-1 h-[1px] bg-general-100" />
      </View>
    </View>
  );
};

export default OAuth;
