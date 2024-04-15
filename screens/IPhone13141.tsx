import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Pressable, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color } from "../GlobalStyles";

const IPhone13141 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13141}>
      <Pressable
        style={styles.images31}
        onPress={() => navigation.navigate("IPhone1314")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/images3-1.png")}
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    height: "100%",
    width: "100%",
  },
  images31: {
    position: "absolute",
    left: 83,
    top: 310,
    width: 225,
    height: 225,
  },
  iphone13141: {
    backgroundColor: Color.bGPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13141;
