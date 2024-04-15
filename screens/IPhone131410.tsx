import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, Border, FontSize } from "../GlobalStyles";

const IPhone131410 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13148}>
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
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={[styles.iphone13148Child, styles.pressablePosition]} />
      <Pressable
        style={[styles.pressable, styles.pressablePosition]}
        onPress={() => navigation.navigate("IPhone13147")}
      >
        <Text style={[styles.text, styles.textText]}>{`رجوع   >`}</Text>
      </Pressable>
      <Text style={[styles.text1, styles.textTypo4]}>اقتراحات</Text>
      <Text style={[styles.text2, styles.textTypo4]}>سجل الأرض</Text>
      <Text style={[styles.text3, styles.textTypo4]}>مميزات الأرض</Text>
      <Text style={[styles.text4, styles.textText]}>الأرض أ</Text>
      <Image
        style={[styles.image1Icon, styles.iphone13148ChildLayout2]}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Image
        style={[styles.image2Icon, styles.iphone13148ChildLayout1]}
        contentFit="cover"
        source={require("../assets/image-2.png")}
      />
      <Image
        style={styles.iphone13148Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.images31Icon}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone13148Inner, styles.iphone13148Layout]} />
      <Text style={[styles.text5, styles.textLayout3]}>
        <Text style={styles.textTypo4}>نوعية الأرض :</Text>
        <Text style={styles.text7}> مسطحة</Text>
      </Text>
      <Text style={[styles.text8, styles.textLayout3]}>
        <Text style={styles.textTypo4}>المساحة :</Text>
        <Text style={styles.text7}> 3 هكتار</Text>
        <Text style={styles.textTypo4}>{` `}</Text>
      </Text>
      <Text style={[styles.text12, styles.textLayout3]}>
        <Text style={styles.textTypo4}>الموقع :</Text>
        <Text style={styles.text7}> تانديت, بولمان, جهة فاس مكناس</Text>
        <Text style={styles.textTypo4}>{` `}</Text>
      </Text>
      <View style={[styles.rectangleView, styles.iphone13148Layout]} />
      <Text style={[styles.text16, styles.textLayout1]}>الذرة</Text>
      <Text style={[styles.text17, styles.textLayout1]}>القمح</Text>
      <Text style={[styles.text18, styles.textLayout1]}>الفول</Text>
      <Text style={[styles.text19, styles.textTypo2]}>الشعير</Text>
      <Image
        style={[styles.ellipseIcon, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-61.png")}
      />
      <Image
        style={[styles.iphone13148Child1, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-71.png")}
      />
      <Image
        style={[styles.iphone13148Child2, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-21.png")}
      />
      <Image
        style={[styles.iphone13148Child3, styles.iphone13148ChildLayout]}
        contentFit="cover"
        source={require("../assets/ellipse-41.png")}
      />
      <View style={[styles.iphone13148Child4, styles.iphone13148Layout]} />
      <Text style={[styles.text20, styles.textTypo1]}>{`الموسم الربيعي: بطاطا
الموسم الصيفي: جزر
`}</Text>
      <Text style={[styles.text21, styles.textLayout1]}>2026</Text>
      <Text style={[styles.text22, styles.textLayout1]}>2025</Text>
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-38.png")}
      />
      <View
        style={[styles.iphone13148Child5, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child6, styles.iphone13148ChildLayout2]}
      />
      <View
        style={[styles.iphone13148Child7, styles.iphone13148ChildLayout1]}
      />
      <View
        style={[styles.iphone13148Child8, styles.iphone13148ChildLayout2]}
      />
      <Text style={[styles.text23, styles.textTypo3]}>1</Text>
      <Text style={[styles.text24, styles.textTypo3]}>2</Text>
      <Text style={[styles.text25, styles.textLayout]}>3</Text>
      <Text style={[styles.text26, styles.textLayout]}>4</Text>
      <Text style={[styles.text27, styles.textTypo2]}>5</Text>
      <Text style={[styles.text28, styles.textTypo]}>6</Text>
      <Text style={[styles.text29, styles.textTypo]}>7</Text>
      <Image
        style={styles.iphone13148Child9}
        contentFit="cover"
        source={require("../assets/rectangle-43.png")}
      />
      <Pressable
        style={styles.pressable1}
        onPress={() => navigation.navigate("IPhone131412")}
      >
        <Text style={styles.text30}>المزروع الحالي</Text>
      </Pressable>
      <Text style={[styles.text31, styles.textTypo1]}>{`الموسم الربيعي: عدس
الموسم الصيفي: فاصوليا
الموسم الخريفي: عدس أو فاصوليا متأخرة
`}</Text>
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
  pressablePosition: {
    top: 142,
    position: "absolute",
  },
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    color: Color.colorDarkolivegreen_100,
    textAlign: "right",
    lineHeight: 22,
  },
  textTypo4: {
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  iphone13148ChildLayout2: {
    width: 37,
    position: "absolute",
  },
  iphone13148ChildLayout1: {
    width: 36,
    position: "absolute",
  },
  iphone13148Layout: {
    width: 340,
    borderRadius: Border.br_xl,
    left: 26,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  textLayout3: {
    width: 284,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  textLayout1: {
    height: 12,
    width: 40,
    lineHeight: 20,
    color: Color.colorDimgray_200,
    textAlign: "right",
    position: "absolute",
  },
  textTypo2: {
    height: 16,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    position: "absolute",
  },
  iphone13148ChildLayout: {
    height: 6,
    width: 6,
    left: 90,
    position: "absolute",
  },
  textTypo1: {
    width: 230,
    lineHeight: 18,
    left: 68,
    fontSize: FontSize.size_2xs,
    color: Color.colorDimgray_200,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
  },
  textLayout: {
    width: 9,
    left: 105,
  },
  textTypo: {
    height: 9,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    color: Color.graysBlack,
    lineHeight: 22,
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
  iphone13148Child: {
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 702,
  },
  text: {
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_smi,
  },
  pressable: {
    left: 17,
  },
  text1: {
    top: 664,
    left: 307,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  text2: {
    top: 369,
    left: 280,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  text3: {
    top: 208,
    left: 269,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  text4: {
    top: 164,
    left: 161,
    fontSize: FontSize.size_xl,
    fontWeight: "800",
    fontFamily: FontFamily.almaraiExtraBold,
    position: "absolute",
  },
  image1Icon: {
    top: 78,
    left: 258,
    height: 32,
  },
  image2Icon: {
    top: 82,
    height: 28,
    left: 295,
  },
  iphone13148Item: {
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
  iphone13148Inner: {
    top: 236,
    height: 106,
  },
  text7: {
    fontFamily: FontFamily.almaraiRegular,
  },
  text5: {
    top: 281,
    left: 53,
    width: 284,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  text8: {
    top: 303,
    left: 51,
  },
  text12: {
    top: 256,
    left: 53,
    width: 284,
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
  },
  rectangleView: {
    top: 400,
    height: 238,
  },
  text16: {
    top: 488,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    left: 38,
    height: 12,
    width: 40,
  },
  text17: {
    top: 444,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    left: 38,
    height: 12,
    width: 40,
  },
  text18: {
    top: 512,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    left: 38,
    height: 12,
    width: 40,
  },
  text19: {
    left: 32,
    width: 46,
    top: 464,
    lineHeight: 20,
    height: 16,
    color: Color.colorDimgray_200,
  },
  ellipseIcon: {
    top: 496,
  },
  iphone13148Child1: {
    top: 519,
  },
  iphone13148Child2: {
    top: 450,
  },
  iphone13148Child3: {
    top: 472,
  },
  iphone13148Child4: {
    top: 690,
    height: 128,
  },
  text20: {
    top: 769,
    height: 38,
  },
  text21: {
    top: 767,
    left: 295,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  text22: {
    top: 706,
    left: 294,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    fontSize: FontSize.size_smi,
  },
  rectangleIcon: {
    top: 418,
    left: 116,
    width: 222,
    height: 206,
    position: "absolute",
  },
  iphone13148Child5: {
    left: 165,
    backgroundColor: Color.colorGold,
    height: 145,
    top: 464,
  },
  iphone13148Child6: {
    top: 521,
    left: 208,
    backgroundColor: "#d9fb05",
    height: 88,
  },
  iphone13148Child7: {
    top: 545,
    left: 252,
    backgroundColor: Color.colorSalmon,
    height: 64,
  },
  iphone13148Child8: {
    top: 541,
    backgroundColor: "#1cd8ab",
    height: 68,
    left: 295,
  },
  text23: {
    top: 571,
    left: 102,
    width: 11,
    height: 11,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    color: Color.graysBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text24: {
    top: 548,
    left: 101,
    width: 13,
    height: 10,
    fontSize: FontSize.size_3xs,
    textAlign: "right",
    color: Color.graysBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text25: {
    top: 523,
    height: 5,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.graysBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text26: {
    top: 502,
    height: 7,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.graysBlack,
    lineHeight: 22,
    position: "absolute",
  },
  text27: {
    top: 477,
    left: 99,
    width: 15,
    color: Color.graysBlack,
    lineHeight: 22,
  },
  text28: {
    top: 455,
    width: 9,
    left: 105,
  },
  text29: {
    top: 429,
    left: 107,
    width: 7,
  },
  iphone13148Child9: {
    top: 300,
    left: 41,
    borderRadius: Border.br_8xs,
    width: 73,
    height: 30,
    position: "absolute",
  },
  text30: {
    color: Color.bGPrimary,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
  },
  pressable1: {
    left: 47,
    top: 304,
    position: "absolute",
  },
  text31: {
    top: 705,
    height: 59,
  },
  iphone13148: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone131410;
