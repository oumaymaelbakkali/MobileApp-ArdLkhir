import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone131411 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131410}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={styles.battery}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.capacityLayout]} />
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
      <View style={styles.iphone131410Child} />
      <Pressable
        style={[styles.iphone131410Item, styles.iphone131410Layout]}
        onPress={() => navigation.navigate("IPhone13144")}
      />
      <View style={[styles.iphone131410Inner, styles.iphone131410Layout]} />
      <Text style={[styles.text, styles.textFlexBox]}>
        المزروع الحالي...................................................
      </Text>
      <View style={[styles.rectangleView, styles.iphone131410ChildLayout]} />
      <Text style={[styles.text1, styles.textTypo]}>
        الطبوغرافيا......................................................
      </Text>
      <View
        style={[styles.iphone131410Child1, styles.iphone131410ChildLayout]}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector4.png")}
      />
      <Text style={[styles.text2, styles.textTypo]}>
        نوع التربة............................................................
      </Text>
      <View
        style={[styles.iphone131410Child2, styles.iphone131410ChildLayout]}
      />
      <Text style={[styles.text3, styles.textTypo]}>
        المساحة................................................................
      </Text>
      <View
        style={[styles.iphone131410Child3, styles.iphone131410ChildLayout]}
      />
      <Image
        style={[styles.systemUiconslocation, styles.capacityLayout]}
        contentFit="cover"
        source={require("../assets/systemuiconslocation.png")}
      />
      <Text style={[styles.text4, styles.textTypo]}>
        الموقع................................................................
      </Text>
      <Text style={[styles.text5, styles.textFlexBox]}>أرض جديدة</Text>
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
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.images31Icon}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone131410Child4, styles.iphone131410Layout]} />
      <Text style={[styles.text6, styles.text6Position]}>
        إسم الأرض.......................................................
      </Text>
      <Text style={[styles.text7, styles.textFlexBox]}>حفظ</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector5.png")}
      />
      <Image
        style={[styles.phfarmThinIcon, styles.text6Position]}
        contentFit="cover"
        source={require("../assets/phfarmthin.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector6.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector7.png")}
      />
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
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacityLayout: {
    width: 21,
    position: "absolute",
  },
  iphone131410Layout: {
    height: 41,
    width: 296,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  iphone131410ChildLayout: {
    left: 46,
    height: 41,
    width: 296,
    borderRadius: Border.br_3xs,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  textTypo: {
    width: 224,
    left: 69,
    textAlign: "right",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  text6Position: {
    top: 286,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "49.86%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.adobeBlank,
    color: Color.graysBlack,
    textAlign: "center",
    lineHeight: 22,
    position: "absolute",
  },
  time: {
    right: "64.26%",
    left: "0%",
  },
  border: {
    height: "100%",
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    borderStyle: "solid",
    borderColor: Color.graysBlack,
    borderWidth: 1,
    width: 25,
    opacity: 0.35,
    left: "50%",
    position: "absolute",
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
    left: "50%",
  },
  battery: {
    height: "24.07%",
    marginLeft: 11.3,
    top: "42.59%",
    bottom: "33.33%",
    width: 27,
    left: "50%",
    position: "absolute",
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
  iphone131410Child: {
    top: 143,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 701,
    position: "absolute",
  },
  iphone131410Item: {
    top: 688,
    backgroundColor: Color.colorDarkolivegreen_200,
    left: 49,
    height: 41,
    width: 296,
    borderRadius: Border.br_3xs,
  },
  iphone131410Inner: {
    top: 606,
    left: 49,
    height: 41,
    width: 296,
    borderRadius: Border.br_3xs,
    backgroundColor: Color.bGPrimary,
  },
  text: {
    top: 616,
    left: 72,
    width: 221,
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_sm,
    textAlign: "right",
  },
  rectangleView: {
    top: 540,
  },
  text1: {
    top: 550,
    position: "absolute",
  },
  iphone131410Child1: {
    top: 474,
  },
  vectorIcon: {
    width: "5.13%",
    top: "57.7%",
    bottom: "40.4%",
    left: "78.46%",
    right: "16.41%",
    maxWidth: "100%",
    height: "1.9%",
  },
  text2: {
    top: 484,
    position: "absolute",
  },
  iphone131410Child2: {
    top: 408,
  },
  text3: {
    top: 418,
    position: "absolute",
  },
  iphone131410Child3: {
    top: 342,
  },
  systemUiconslocation: {
    top: 349,
    left: 307,
    height: 25,
    overflow: "hidden",
  },
  text4: {
    top: 352,
    position: "absolute",
  },
  text5: {
    top: 182,
    left: 144,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.almaraiExtraBold,
    color: Color.colorDarkolivegreen_100,
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowRadius: 4,
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
  ellipseIcon: {
    top: 75,
    left: 335,
    width: 42,
    height: 46,
    position: "absolute",
  },
  images31Icon: {
    top: 62,
    left: 16,
    width: 61,
    height: 61,
    position: "absolute",
  },
  iphone131410Child4: {
    top: 276,
    left: 47,
    backgroundColor: Color.bGPrimary,
  },
  text6: {
    width: 224,
    left: 69,
    textAlign: "right",
    color: Color.colorDarkgray_200,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_sm,
    lineHeight: 22,
  },
  text7: {
    top: 698,
    left: 177,
    fontSize: FontSize.size_lg,
    fontWeight: "700",
    fontFamily: FontFamily.almaraiBold,
    color: "#d7d7d7",
  },
  vectorIcon1: {
    height: "2.73%",
    width: "6.92%",
    top: "72.51%",
    right: "15.38%",
    bottom: "24.76%",
    left: "77.69%",
  },
  phfarmThinIcon: {
    left: 305,
    width: 24,
    height: 22,
    overflow: "hidden",
  },
  vectorIcon2: {
    width: "4.36%",
    top: "49.76%",
    bottom: "48.34%",
    left: "79.23%",
    right: "16.41%",
    maxWidth: "100%",
    height: "1.9%",
  },
  vectorIcon3: {
    height: "2.25%",
    width: "6.67%",
    top: "65.28%",
    bottom: "32.46%",
    left: "76.92%",
    right: "16.41%",
    maxWidth: "100%",
  },
  iphone131410: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone131411;
