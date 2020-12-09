import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "react-native";

const likeListIcon = (navigation) => {
   

  return (
    <View>
      <TouchableOpacity
        style={{
          marginHorizontal: 15,
        }}
        onPress={() => navigation.navigate("likeScreen")}
      >
        <Image
          style={{ tintColor: "#FFF" }}
          source={require("../assets/image/ic_calendar.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default likeListIcon;
