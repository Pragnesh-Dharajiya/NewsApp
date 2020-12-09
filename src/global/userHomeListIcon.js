import React from "react";
import { View, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const userHomeIcon = (navigation) => {
  return (
    <View style={{ flexDirection: "row" }}>
        <TouchableOpacity
          style={{ justifyContent: "center", marginRight: wp("5%") }}
          onPress={() => navigation.navigate("homescreen")}
        >
          <Image source={require("../assets/image/ic_calendar.png")} />
        </TouchableOpacity>
      </View>
  );
};

export default userHomeIcon;
