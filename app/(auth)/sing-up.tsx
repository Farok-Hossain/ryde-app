import { images } from "@/constants";
import { Image, ScrollView, Text, View } from "react-native";

const SingUp = () => {
  return (
    <ScrollView className="flex-1 bg-white">
      <View className="flex-1 bg-white">
        <View>
          <Image source={images.signUpCar} className="z-0 w-full h-[250px]" />
        </View>
      </View>
    </ScrollView>
  );
};

export default SingUp;
