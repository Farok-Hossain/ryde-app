import { Ride } from "@/types/type";
import { View, Text } from "react-native";

const RideCard = ({ ride }: { ride: Ride }) => (
  <View>
    <Text className="text-3xl">{ride.driver.first_name}</Text>
  </View>
);

export default RideCard;
