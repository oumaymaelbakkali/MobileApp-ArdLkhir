import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone13143 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13145}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.time1Layout]}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderPosition]} />
            <Image
              style={[styles.capIcon, styles.iconPosition1]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.borderPosition]} />
          </View>
          <Image
            style={[styles.wifiIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/wifi.png")}
          />
          <Image
            style={[styles.cellularConnectionIcon, styles.iconPosition1]}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.iphone13145Child} />
      <Text style={[styles.text, styles.textTypo5]}>المهام الحالية</Text>
      <Text style={[styles.text1, styles.textTypo4]}>المحاصيل</Text>
      <Text style={[styles.text2, styles.textPosition1]}>الحصاد</Text>
      <Text style={[styles.text3, styles.textTypo5]}>الطقس</Text>
      <Text style={[styles.text4, styles.textTypo5]}>الرئيسية</Text>
      <Image
        style={styles.image1Icon}
        contentFit="cover"
        source={require("../assets/image-1.png")}
      />
      <Pressable
        style={styles.image2}
        onPress={() => navigation.navigate("IPhone13145")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/image-2.png")}
        />
      </Pressable>
      <Image
        style={styles.iphone13145Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.images31Icon, styles.images31IconPosition]}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone13145Inner, styles.iphone13145ShadowBox]} />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.mingcutelocation3LineIcon}
        contentFit="cover"
        source={require("../assets/mingcutelocation3line.png")}
      />
      <Image
        style={styles.fluentweatherCloudy20RegulIcon}
        contentFit="cover"
        source={require("../assets/fluentweathercloudy20regular.png")}
      />
      <Image
        style={styles.healthiconsmoneyBagOutline}
        contentFit="cover"
        source={require("../assets/healthiconsmoneybagoutline.png")}
      />
      <View style={styles.rectangleView} />
      <Text style={[styles.text5, styles.textTypo3]}>الكل</Text>
      <View
        style={[styles.iphone13145Child1, styles.iphone13145ChildLayout3]}
      />
      <Text style={[styles.text6, styles.textTypo3]}>الأرض أ</Text>
      <View style={styles.iphone13145Child2} />
      <Text style={[styles.text7, styles.textTypo3]}>الأرض ب</Text>
      <View
        style={[styles.iphone13145Child3, styles.iphone13145ChildLayout3]}
      />
      <Text style={[styles.text8, styles.textTypo3]}>الأرض ج</Text>
      <View
        style={[styles.iphone13145Child4, styles.iphone13145ChildLayout2]}
      />
      <Text style={[styles.ms, styles.msTypo]}>6m/s</Text>
      <Text style={[styles.c5c, styles.textTypo2]}>
        <Text style={styles.c}>{`15’C `}</Text>
        <Text style={styles.text9}>{`    `}</Text>
        <Text style={styles.c1}>5’C</Text>
      </Text>
      <Text style={[styles.text10, styles.msTypo]}>50%</Text>
      <Text style={[styles.h442024, styles.todayPosition]}>
        <Text style={styles.c}>11:43h</Text>
        <Text style={styles.text9}>{` `}</Text>
        <Text style={styles.c1}> (4/4/2024)</Text>
      </Text>
      <Text style={[styles.today, styles.todayPosition]}>Today</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector1.png")}
      />
      <Image
        style={[styles.vectorIcon2, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/vector2.png")}
      />
      <Image
        style={[styles.groupIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/group.png")}
      />
      <View style={[styles.iphone13145Child5, styles.iphone13145ChildLayout]} />
      <Text style={[styles.text13, styles.textTypo2]}>طن/3 شهور</Text>
      <Text style={[styles.text14, styles.textPosition1]}>2.6</Text>
      <View style={[styles.iphone13145Child6, styles.iphone13145ChildLayout]} />
      <Text style={[styles.text15, styles.textLayout2]}>الذرة</Text>
      <Text style={[styles.text16, styles.textTypo]}>الشعير</Text>
      <Text style={[styles.text17, styles.textLayout2]}>الزيتون</Text>
      <Text style={[styles.text18, styles.textTypo]}>البطاطس</Text>
      <Text style={[styles.text19, styles.textLayout2]}>البصل</Text>
      <Text style={[styles.text20, styles.textTypo]}>القمح</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.iphone13145Child7, styles.iphone13145ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.iphone13145Child8, styles.iphone13145ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View
        style={[styles.iphone13145Child9, styles.iphone13145ChildLayout2]}
      />
      <Text style={[styles.text21, styles.textTypo2]}>
        إجراء التسميد الثاني للقمح
      </Text>
      <Image
        style={[styles.iphone13145Child10, styles.iphone13145ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone13145Child11, styles.iphone13145ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.iphone13145Child12, styles.iphone13145ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.iphone13145Child13}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIcon3Layout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.iphone13145Child14, styles.iphone13145ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Text style={[styles.text22, styles.textLayout1]}>البصل</Text>
      <Text style={[styles.text23, styles.textLayout]}>الزيتون</Text>
      <Text style={[styles.text24, styles.textLayout1]}>الذرة</Text>
      <Text style={[styles.text25, styles.textLayout1]}>القمح</Text>
      <Text style={[styles.text26, styles.textLayout]}>الشعير</Text>
      <View style={[styles.iphone13145Child15, styles.vectorIcon3Layout]} />
      <Text style={styles.text27}> 2 يوم متبقية</Text>
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
  time1Layout: {
    lineHeight: 22,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition1: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  textTypo5: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_xl,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  textTypo4: {
    top: 394,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  textPosition1: {
    left: 123,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  images31IconPosition: {
    left: 16,
    position: "absolute",
  },
  iphone13145ShadowBox: {
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    overflow: "hidden",
  },
  textTypo3: {
    fontSize: FontSize.size_mini,
    top: 210,
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  iphone13145ChildLayout3: {
    width: 73,
    backgroundColor: Color.colorGainsboro_100,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    position: "absolute",
  },
  iphone13145ChildLayout2: {
    width: 354,
    left: 19,
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  msTypo: {
    top: 336,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  todayPosition: {
    top: 311,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  iconPosition: {
    top: "40.28%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  iphone13145ChildLayout: {
    height: 193,
    top: 424,
    borderRadius: Border.br_base,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  textLayout2: {
    height: 12,
    width: 40,
  },
  textTypo: {
    top: 564,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
  },
  iphone13145ChildPosition1: {
    top: 589,
    height: 6,
    width: 6,
    position: "absolute",
  },
  iphone13145ChildPosition: {
    top: 571,
    height: 6,
    width: 6,
    position: "absolute",
  },
  vectorIcon3Layout: {
    borderRadius: Border.br_8xs,
    position: "absolute",
  },
  iphone13145ChildLayout1: {
    width: 165,
    left: 19,
  },
  textLayout1: {
    left: 13,
    height: 12,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    width: 40,
    textAlign: "right",
    position: "absolute",
  },
  textLayout: {
    left: 14,
    height: 12,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    width: 40,
    textAlign: "right",
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "49.86%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.adobeBlank,
    color: Color.graysBlack,
    textAlign: "center",
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
  iphone13145Child: {
    top: 142,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 705,
    position: "absolute",
  },
  text: {
    top: 636,
    left: 254,
  },
  text1: {
    left: 285,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  text2: {
    top: 394,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    fontSize: FontSize.size_xl,
  },
  text3: {
    top: 263,
    left: 297,
  },
  text4: {
    top: 160,
    left: 298,
  },
  image1Icon: {
    top: 78,
    left: 258,
    width: 37,
    height: 32,
    position: "absolute",
  },
  icon: {
    height: "100%",
    width: "100%",
  },
  image2: {
    left: 295,
    top: 82,
    width: 36,
    height: 28,
    position: "absolute",
  },
  iphone13145Item: {
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
  },
  iphone13145Inner: {
    top: 754,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkolivegreen_100,
    width: 361,
    height: 65,
    left: 16,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.32%",
    width: "6.92%",
    right: "63.08%",
    bottom: "5.21%",
    left: "30%",
    top: "91.47%",
    maxWidth: "100%",
    position: "absolute",
  },
  mingcutelocation3LineIcon: {
    top: 768,
    left: 179,
    width: 32,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  fluentweatherCloudy20RegulIcon: {
    left: 302,
    width: 44,
    height: 44,
    top: 764,
    position: "absolute",
    overflow: "hidden",
  },
  healthiconsmoneyBagOutline: {
    top: 765,
    left: 240,
    width: 40,
    height: 44,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleView: {
    left: 305,
    backgroundColor: Color.colorOlivedrab_200,
    width: 65,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    position: "absolute",
  },
  text5: {
    left: 324,
    color: Color.colorWhitesmoke_100,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "center",
  },
  iphone13145Child1: {
    left: 210,
  },
  text6: {
    left: 222,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone13145Child2: {
    left: 117,
    width: 72,
    backgroundColor: Color.colorGainsboro_100,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    position: "absolute",
  },
  text7: {
    left: 122,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone13145Child3: {
    left: 23,
  },
  text8: {
    left: 32,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone13145Child4: {
    top: 296,
    height: 80,
  },
  ms: {
    left: 313,
  },
  c: {
    color: Color.colorDimgray_200,
  },
  text9: {
    color: Color.colorDarkolivegreen_100,
  },
  c1: {
    color: Color.colorDarkgray_100,
  },
  c5c: {
    top: 333,
    left: 96,
  },
  text10: {
    left: 248,
  },
  h442024: {
    left: 237,
    fontFamily: FontFamily.almaraiRegular,
  },
  today: {
    left: 102,
    color: Color.colorDarkolivegreen_100,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    top: 311,
  },
  vectorIcon1: {
    height: "4.35%",
    width: "11.74%",
    top: "37.32%",
    right: "78.51%",
    bottom: "58.33%",
    left: "9.74%",
    position: "absolute",
  },
  vectorIcon2: {
    height: "1.66%",
    width: "4.36%",
    right: "20.77%",
    bottom: "58.06%",
    left: "74.87%",
  },
  groupIcon: {
    height: "1.46%",
    width: "2.05%",
    right: "37.18%",
    bottom: "58.26%",
    left: "60.77%",
  },
  iphone13145Child5: {
    width: 165,
    left: 19,
  },
  text13: {
    top: 459,
    left: 30,
    color: Color.colorDimgray_200,
  },
  text14: {
    top: 455,
    fontSize: FontSize.size_13xl,
    fontWeight: "800",
    fontFamily: FontFamily.almaraiExtraBold,
  },
  iphone13145Child6: {
    left: 207,
    width: 166,
  },
  text15: {
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    height: 12,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
    left: 211,
    top: 583,
  },
  text16: {
    height: 12,
    width: 40,
    left: 211,
  },
  text17: {
    top: 582,
    left: 267,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    height: 12,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
  },
  text18: {
    left: 261,
    width: 46,
    height: 16,
  },
  text19: {
    left: 310,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    height: 12,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
    top: 583,
  },
  text20: {
    left: 312,
    height: 12,
    width: 40,
  },
  ellipseIcon: {
    top: 570,
    height: 6,
    width: 6,
    left: 353,
    position: "absolute",
  },
  iphone13145Child7: {
    left: 353,
    top: 589,
  },
  iphone13145Child8: {
    left: 310,
  },
  rectangleIcon: {
    top: 429,
    left: 219,
    width: 141,
    height: 131,
    borderRadius: Border.br_base,
    position: "absolute",
  },
  iphone13145Child9: {
    top: 671,
    height: 71,
  },
  text21: {
    top: 695,
    left: 153,
    color: Color.colorDimgray_200,
  },
  iphone13145Child10: {
    left: 254,
  },
  iphone13145Child11: {
    left: 254,
  },
  iphone13145Child12: {
    left: 310,
  },
  iphone13145Child13: {
    left: 48,
    width: 47,
    height: 47,
    top: 764,
    position: "absolute",
  },
  vectorIcon3: {
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
  iphone13145Child14: {
    top: 492,
    height: 102,
    position: "absolute",
  },
  text22: {
    top: 534,
  },
  text23: {
    top: 557,
  },
  text24: {
    top: 579,
  },
  text25: {
    top: 509,
  },
  text26: {
    top: 489,
  },
  iphone13145Child15: {
    top: 682,
    left: 309,
    backgroundColor: Color.colorGoldenrod,
    width: 43,
    height: 42,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
  },
  text27: {
    top: 688,
    left: 306,
    fontSize: FontSize.size_xs,
    lineHeight: 15,
    color: Color.bGPrimary,
    width: 41,
    height: 29,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
  },
  iphone13145: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone13143;
