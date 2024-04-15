import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, Border, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13147 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13147}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1Clr]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.iphone13147Child} />
      <Text style={styles.text}>الرئيسية</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={styles.image2Icon}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.iphone13147Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.images31Icon}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone13147Inner, styles.rectangleIconLayout]} />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone13146")}
      >
        <Image
          style={[styles.icon, styles.iconLayout1]}
          contentFit="cover"
          source={require("../assets/vector.png")}
        />
      </Pressable>
      <Image
        style={[
          styles.fluentweatherCloudy20RegulIcon,
          styles.healthiconsmoneyBagOutlineLayout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweathercloudy20regular1.png")}
      />
      <Image
        style={[
          styles.healthiconsmoneyBagOutline,
          styles.healthiconsmoneyBagOutlineLayout,
        ]}
        contentFit="cover"
        source={require("../assets/healthiconsmoneybagoutline.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.text1, styles.textTypo1]}>الكل</Text>
      <View style={[styles.iphone13147Child1, styles.iphone13147ChildLayout]} />
      <Text style={[styles.text2, styles.textTypo1]}>الأرض أ</Text>
      <View style={[styles.iphone13147Child2, styles.rectangleViewLayout]} />
      <Text style={[styles.text3, styles.textTypo1]}>الأرض ب</Text>
      <View style={[styles.iphone13147Child3, styles.iphone13147ChildLayout]} />
      <Text style={[styles.text4, styles.textTypo1]}>الأرض ج</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[
          styles.mingcutelocation3LineIcon,
          styles.letsIconsviewLightPosition,
        ]}
        contentFit="cover"
        source={require("../assets/mingcutelocation3line.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.rectangleIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-32.png")}
      />
      <Pressable
        style={[styles.letsIconsviewLight, styles.letsIconsviewLightPosition]}
        onPress={() => navigation.navigate("IPhone131410")}
      >
        <Image
          style={styles.icon1}
          contentFit="cover"
          source={require("../assets/letsiconsviewlight.png")}
        />
      </Pressable>
      <View style={styles.iphone13147Child4} />
      <Text style={[styles.text5, styles.textTypo]}>القمح</Text>
      <View style={styles.iphone13147Child5} />
      <Text style={[styles.text6, styles.textTypo]}>البصل</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  timePosition: {
    height: 54,
    top: "50%",
    width: "35.74%",
    marginTop: -26.5,
    position: "absolute",
  },
  time1Clr: {
    color: Color.graysBlack,
    lineHeight: 22,
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  rectangleIconLayout: {
    width: 361,
    left: 16,
  },
  iconLayout1: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  healthiconsmoneyBagOutlineLayout: {
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleViewLayout: {
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    backgroundColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  textTypo1: {
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    top: 210,
    lineHeight: 22,
    position: "absolute",
  },
  iphone13147ChildLayout: {
    width: 73,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    position: "absolute",
  },
  letsIconsviewLightPosition: {
    left: 179,
    position: "absolute",
  },
  iconLayout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "49.86%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.adobeBlank,
    textAlign: "center",
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
  },
  border: {
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.graysBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    height: "100%",
  },
  capIcon: {
    height: "31.54%",
    marginLeft: 12.35,
    top: "36.92%",
    bottom: "31.54%",
    width: 1,
    opacity: 0.4,
  },
  capacity: {
    height: "69.23%",
    marginLeft: -11.65,
    top: "15.38%",
    bottom: "15.38%",
    borderRadius: Border.br_10xs_5,
    backgroundColor: Color.graysBlack,
    width: 21,
  },
  battery: {
    height: "24.07%",
    marginLeft: 11.3,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
  },
  wifiIcon: {
    height: "22.78%",
    marginLeft: -13,
    top: "43.7%",
    bottom: "33.52%",
    width: 17,
  },
  cellularConnectionIcon: {
    height: "22.59%",
    marginLeft: -39.7,
    top: "43.52%",
    bottom: "33.89%",
    width: 19,
  },
  levels: {
    right: "0%",
    left: "64.26%",
  },
  statusBarIphone: {
    top: 0,
    left: 7,
    backgroundColor: Color.colorGray_200,
    width: 390,
    height: 53,
    position: "absolute",
  },
  iphone13147Child: {
    top: 142,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 705,
    position: "absolute",
  },
  text: {
    top: 160,
    left: 298,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.almaraiBold,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  image1Icon: {
    top: 78,
    left: 258,
    width: 37,
    height: 32,
    position: "absolute",
  },
  image2Icon: {
    top: 82,
    left: 295,
    width: 36,
    height: 28,
    position: "absolute",
  },
  iphone13147Item: {
    top: 75,
    left: 335,
    width: 42,
    height: 46,
    position: "absolute",
  },
  images31Icon: {
    top: 62,
    width: 61,
    height: 61,
    left: 16,
    position: "absolute",
  },
  iphone13147Inner: {
    top: 754,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    height: 65,
    backgroundColor: Color.colorDarkolivegreen_100,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  vector: {
    left: "30%",
    right: "63.08%",
    bottom: "5.21%",
    width: "6.92%",
    height: "3.32%",
    top: "91.47%",
    position: "absolute",
  },
  fluentweatherCloudy20RegulIcon: {
    top: 764,
    left: 302,
    width: 44,
  },
  healthiconsmoneyBagOutline: {
    top: 765,
    left: 240,
    width: 40,
  },
  rectangleView: {
    left: 305,
    width: 65,
  },
  text1: {
    left: 324,
    color: Color.colorDarkolivegreen_100,
    textAlign: "center",
  },
  iphone13147Child1: {
    left: 210,
    backgroundColor: Color.colorDarkolivegreen_100,
  },
  text2: {
    left: 222,
    color: Color.bGPrimary,
    textAlign: "right",
  },
  iphone13147Child2: {
    left: 117,
    width: 72,
  },
  text3: {
    left: 122,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone13147Child3: {
    left: 23,
    backgroundColor: Color.colorGainsboro_100,
    width: 73,
  },
  text4: {
    left: 32,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  ellipseIcon: {
    top: 763,
    width: 47,
    height: 47,
    left: 171,
    position: "absolute",
  },
  mingcutelocation3LineIcon: {
    top: 768,
    width: 32,
    height: 37,
    overflow: "hidden",
  },
  vectorIcon: {
    height: "3.44%",
    width: "10%",
    right: "76.67%",
    bottom: "5.09%",
    left: "13.33%",
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
    top: "91.47%",
  },
  rectangleIcon: {
    top: 262,
    height: 479,
    width: 361,
    left: 16,
  },
  icon1: {
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  letsIconsviewLight: {
    top: 525,
    height: 21,
    width: 27,
  },
  iphone13147Child4: {
    top: 475,
    left: 142,
    backgroundColor: "#c3ebad",
    width: 102,
    height: 20,
    position: "absolute",
  },
  text5: {
    top: 474,
    left: 171,
    color: Color.graysBlack,
    lineHeight: 22,
  },
  iphone13147Child5: {
    top: 697,
    left: 41,
    backgroundColor: "#edfde1",
    width: 111,
    height: 17,
    position: "absolute",
  },
  text6: {
    top: 694,
    left: 72,
    lineHeight: 20,
    color: Color.colorDimgray_200,
  },
  iphone13147: {
    backgroundColor: Color.bGPrimary,
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
  },
});

export default IPhone13147;
