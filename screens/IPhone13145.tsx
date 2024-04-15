import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone13145 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131413}>
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
            source={require("../assets/wifi1.png")}
          />
          <Image
            style={styles.cellularConnectionIcon}
            contentFit="cover"
            source={require("../assets/cellular-connection.png")}
          />
        </View>
      </View>
      <View style={styles.iphone131413Child} />
      <Text style={[styles.text, styles.textTypo6]}>المهام الحالية</Text>
      <Text style={[styles.text1, styles.textTypo5]}>المحاصيل</Text>
      <Text style={[styles.text2, styles.textPosition2]}>الحصاد</Text>
      <Text style={[styles.text3, styles.textTypo6]}>الطقس</Text>
      <Text style={[styles.text4, styles.textTypo6]}>الرئيسية</Text>
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
        style={styles.iphone131413Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={[styles.images31Icon, styles.images31IconPosition]}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone131413Inner, styles.iphone131413ShadowBox]} />
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
      <Text style={[styles.text5, styles.textTypo4]}>الكل</Text>
      <View
        style={[styles.iphone131413Child1, styles.iphone131413ChildLayout3]}
      />
      <Text style={[styles.text6, styles.textTypo4]}>الأرض أ</Text>
      <View
        style={[styles.iphone131413Child2, styles.iphone131413ChildPosition2]}
      />
      <Text style={[styles.text7, styles.textTypo4]}>الأرض ب</Text>
      <View
        style={[styles.iphone131413Child3, styles.iphone131413ChildLayout3]}
      />
      <Text style={[styles.text8, styles.textTypo4]}>الأرض ج</Text>
      <View
        style={[styles.iphone131413Child4, styles.iphone131413ChildLayout2]}
      />
      <Text style={[styles.ms, styles.msTypo]}>6m/s</Text>
      <Text style={[styles.c5c, styles.textTypo3]}>
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
      <View
        style={[styles.iphone131413Child5, styles.iphone131413ChildLayout]}
      />
      <Text style={[styles.text13, styles.textTypo3]}>طن/3 شهور</Text>
      <Text style={[styles.text14, styles.textPosition2]}>2.6</Text>
      <View
        style={[styles.iphone131413Child6, styles.iphone131413ChildLayout]}
      />
      <Text style={[styles.text15, styles.textLayout2]}>الذرة</Text>
      <Text style={[styles.text16, styles.textTypo1]}>الشعير</Text>
      <Text style={[styles.text17, styles.textLayout2]}>الزيتون</Text>
      <Text style={[styles.text18, styles.textTypo1]}>البطاطس</Text>
      <Text style={[styles.text19, styles.textLayout2]}>البصل</Text>
      <Text style={[styles.text20, styles.textTypo1]}>القمح</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-6.png")}
      />
      <Image
        style={[styles.iphone131413Child7, styles.iphone131413ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-7.png")}
      />
      <Image
        style={[styles.iphone131413Child8, styles.iphone131413ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-5.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-29.png")}
      />
      <View
        style={[styles.iphone131413Child9, styles.iphone131413ChildLayout2]}
      />
      <Text style={[styles.text21, styles.textTypo3]}>
        إجراء التسميد الثاني للقمح
      </Text>
      <Image
        style={[styles.iphone131413Child10, styles.iphone131413ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-2.png")}
      />
      <Image
        style={[styles.iphone131413Child11, styles.iphone131413ChildPosition1]}
        contentFit="cover"
        source={require("../assets/ellipse-3.png")}
      />
      <Image
        style={[styles.iphone131413Child12, styles.iphone131413ChildPosition]}
        contentFit="cover"
        source={require("../assets/ellipse-4.png")}
      />
      <Image
        style={styles.iphone131413Child13}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.vectorIcon3, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={[styles.iphone131413Child14, styles.iphone131413ChildLayout1]}
        contentFit="cover"
        source={require("../assets/rectangle-30.png")}
      />
      <Text style={[styles.text22, styles.textLayout1]}>البصل</Text>
      <Text style={[styles.text23, styles.textLayout]}>الزيتون</Text>
      <Text style={[styles.text24, styles.textLayout1]}>الذرة</Text>
      <Text style={[styles.text25, styles.textLayout1]}>القمح</Text>
      <Text style={[styles.text26, styles.textLayout]}>الشعير</Text>
      <View style={[styles.iphone131413Child15, styles.feappMenuIconLayout]} />
      <Text style={styles.text27}> 2 يوم متبقية</Text>
      <View
        style={[styles.iphone131413Child16, styles.iphone131413ChildPosition2]}
      />
      <Text style={[styles.text28, styles.textTypo]}>الرئيسية</Text>
      <Text style={[styles.text29, styles.textTypo]}>تواصل معنا</Text>
      <Text style={[styles.text30, styles.textTypo]}>نبذة عنا</Text>
      <Image
        style={[styles.formkitaddIcon, styles.formkitaddIconLayout]}
        contentFit="cover"
        source={require("../assets/formkitadd.png")}
      />
      <Image
        style={[
          styles.materialSymbolsinfoOutlineIcon,
          styles.formkitaddIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/materialsymbolsinfooutline.png")}
      />
      <Image
        style={[styles.carbonhomeIcon, styles.formkitaddIconLayout]}
        contentFit="cover"
        source={require("../assets/carbonhome.png")}
      />
      <Image
        style={[styles.iconoirphone, styles.formkitaddIconPosition]}
        contentFit="cover"
        source={require("../assets/iconoirphone.png")}
      />
      <Text style={[styles.text31, styles.textTypo]}>إضافة منتوج جديد</Text>
      <Image
        style={[styles.feappMenuIcon, styles.feappMenuIconLayout]}
        contentFit="cover"
        source={require("../assets/feappmenu.png")}
      />
      <Pressable
        style={[styles.pressable, styles.textPosition]}
        onPress={() => navigation.navigate("IPhone131411")}
      >
        <Text style={styles.textTypo}>إضافة أرض جديدة</Text>
      </Pressable>
      <Image
        style={[styles.formkitaddIcon1, styles.formkitaddIconLayout]}
        contentFit="cover"
        source={require("../assets/formkitadd.png")}
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
  textTypo6: {
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
  textTypo5: {
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
  textPosition2: {
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
  iphone131413ShadowBox: {
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
    position: "absolute",
    overflow: "hidden",
  },
  textTypo4: {
    fontSize: FontSize.size_mini,
    top: 210,
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  iphone131413ChildLayout3: {
    width: 73,
    backgroundColor: Color.colorGainsboro_100,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
    position: "absolute",
  },
  iphone131413ChildPosition2: {
    left: 117,
    position: "absolute",
  },
  iphone131413ChildLayout2: {
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
  textTypo3: {
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
  iphone131413ChildLayout: {
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
  textTypo1: {
    top: 564,
    lineHeight: 20,
    fontSize: FontSize.size_3xs,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    position: "absolute",
  },
  iphone131413ChildPosition1: {
    top: 589,
    height: 6,
    width: 6,
    position: "absolute",
  },
  iphone131413ChildPosition: {
    top: 571,
    height: 6,
    width: 6,
    position: "absolute",
  },
  iphone131413ChildLayout1: {
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
  feappMenuIconLayout: {
    width: 43,
    height: 42,
    position: "absolute",
  },
  textTypo: {
    height: 26,
    width: 176,
    color: Color.colorDimgray_100,
    fontSize: FontSize.size_base,
    textAlign: "right",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
  },
  formkitaddIconLayout: {
    height: 19,
    position: "absolute",
    overflow: "hidden",
  },
  formkitaddIconPosition: {
    left: 336,
    width: 19,
  },
  textPosition: {
    left: 149,
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
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
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
  iphone131413Child: {
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
  image2Icon: {
    top: 82,
    left: 295,
    width: 36,
    height: 28,
    position: "absolute",
  },
  iphone131413Item: {
    left: 335,
    width: 42,
    height: 46,
    top: 75,
    position: "absolute",
  },
  images31Icon: {
    top: 62,
    width: 61,
    height: 61,
  },
  iphone131413Inner: {
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
  iphone131413Child1: {
    left: 210,
  },
  text6: {
    left: 222,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone131413Child2: {
    width: 72,
    backgroundColor: Color.colorGainsboro_100,
    left: 117,
    height: 42,
    borderRadius: Border.br_xl,
    top: 200,
  },
  text7: {
    left: 122,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone131413Child3: {
    left: 23,
  },
  text8: {
    left: 32,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone131413Child4: {
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
  iphone131413Child5: {
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
  iphone131413Child6: {
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
  iphone131413Child7: {
    left: 353,
    top: 589,
  },
  iphone131413Child8: {
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
  iphone131413Child9: {
    top: 671,
    height: 71,
  },
  text21: {
    top: 695,
    left: 153,
    color: Color.colorDimgray_200,
  },
  iphone131413Child10: {
    left: 254,
  },
  iphone131413Child11: {
    left: 254,
  },
  iphone131413Child12: {
    left: 310,
  },
  iphone131413Child13: {
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
    borderRadius: Border.br_8xs,
    top: "91.47%",
    maxWidth: "100%",
  },
  iphone131413Child14: {
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
  iphone131413Child15: {
    top: 682,
    left: 309,
    backgroundColor: Color.colorGoldenrod,
    borderRadius: Border.br_8xs,
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
  iphone131413Child16: {
    backgroundColor: "#e9e9e9",
    width: 273,
    height: 769,
    top: 75,
  },
  text28: {
    top: 159,
    left: 149,
    position: "absolute",
  },
  text29: {
    top: 298,
    left: 149,
    position: "absolute",
  },
  text30: {
    top: 261,
    left: 149,
    position: "absolute",
  },
  formkitaddIcon: {
    top: 231,
    left: 336,
    width: 19,
  },
  materialSymbolsinfoOutlineIcon: {
    top: 266,
    left: 336,
    width: 19,
  },
  carbonhomeIcon: {
    top: 161,
    left: 337,
    width: 17,
  },
  iconoirphone: {
    top: 301,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  text31: {
    top: 192,
    left: 149,
    position: "absolute",
  },
  feappMenuIcon: {
    top: 98,
    left: 317,
    overflow: "hidden",
  },
  pressable: {
    top: 228,
  },
  formkitaddIcon1: {
    top: 196,
    left: 336,
    width: 19,
  },
  iphone131413: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone13145;
