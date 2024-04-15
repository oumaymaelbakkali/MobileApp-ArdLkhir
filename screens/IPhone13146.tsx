import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontFamily, FontSize } from "../GlobalStyles";

const IPhone13146 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone13149, styles.iconLayout]}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.borderPosition]}>
            <View style={[styles.border, styles.borderBorder]} />
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
      <View style={styles.iphone13149Child} />
      <Image
        style={styles.mingcuteaddFillIcon}
        contentFit="cover"
        source={require("../assets/mingcuteaddfill.png")}
      />
      <Text style={styles.text}>{`لائحة المهام `}</Text>
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
        style={styles.iphone13149Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.images31Icon}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone13149Inner, styles.rectangleViewShadowBox]} />
      <Image
        style={styles.mingcutelocation3LineIcon}
        contentFit="cover"
        source={require("../assets/mingcutelocation3line.png")}
      />
      <Image
        style={[
          styles.fluentweatherCloudy20RegulIcon,
          styles.healthiconsmoneyBagOutlineLayout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweathercloudy20regular.png")}
      />
      <Pressable
        style={[
          styles.healthiconsmoneyBagOutline,
          styles.healthiconsmoneyBagOutlineLayout,
        ]}
        onPress={() => navigation.navigate("IPhone13149")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/healthiconsmoneybagoutline1.png")}
        />
      </Pressable>
      <View style={[styles.rectangleView, styles.rectangleViewShadowBox]} />
      <View
        style={[styles.iphone13149Child1, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child2, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child3, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child4, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child4, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child6, styles.iphone13149ChildLayout3]}
      />
      <View
        style={[styles.iphone13149Child7, styles.iphone13149ChildLayout2]}
      />
      <View
        style={[styles.iphone13149Child8, styles.iphone13149ChildLayout2]}
      />
      <View
        style={[styles.iphone13149Child9, styles.iphone13149ChildLayout1]}
      />
      <View
        style={[styles.iphone13149Child10, styles.iphone13149ChildLayout1]}
      />
      <Text style={[styles.text1, styles.textTypo3]}>الاثنين، 1 أبريل</Text>
      <Text style={styles.text2}>اليوم</Text>
      <Text style={[styles.text3, styles.textPosition1]}>01</Text>
      <Text style={[styles.text4, styles.textPosition1]}>02</Text>
      <Text style={[styles.text5, styles.textPosition1]}>03</Text>
      <Text style={[styles.text6, styles.textPosition1]}>04</Text>
      <Text style={[styles.text7, styles.textPosition1]}>05</Text>
      <Text style={[styles.text8, styles.textPosition1]}>06</Text>
      <Text style={[styles.text9, styles.textTypo2]}>الاثنين</Text>
      <Text style={[styles.text10, styles.textTypo2]}>الثلاثاء</Text>
      <Text style={[styles.text11, styles.textTypo2]}>الأربعاء</Text>
      <Text style={[styles.text12, styles.textTypo2]}>الخميس</Text>
      <Text style={[styles.text13, styles.textTypo2]}>الجمعة</Text>
      <Text style={[styles.text14, styles.textTypo2]}>السبت</Text>
      <Image
        style={styles.ellipseIcon}
        contentFit="cover"
        source={require("../assets/ellipse-8.png")}
      />
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Text style={[styles.text15, styles.textTypo1]}>
        <Text style={styles.textTypo4}>أضف</Text>
        <Text style={styles.text17}>{` `}</Text>
        <Text style={styles.textTypo4}>مهمة</Text>
      </Text>
      <Text style={[styles.text19, styles.textTypo]}>
        توزيع السماد العضوي أو الأسمدة الكيميائية على الأرض
      </Text>
      <Text style={[styles.text20, styles.textTypo]}>
        حراثة التربة بعمق وتحضير الحقول لزراعة البطاطا
      </Text>
      <Text style={[styles.text21, styles.textTypo]}>
        القيام بتقليم صياني لإزالة الأغصان الميتة أو المصابة بالأمراض
      </Text>
      <Text style={[styles.text22, styles.textTypo]}>
        التأكد من إزالة الحشائش والنباتات الضارة بعد الحراثة
      </Text>
      <Text style={[styles.text23, styles.text23Position]}>
        <Text style={styles.text17}>{`الأرض `}</Text>
        <Text style={styles.textTypo4}>ح</Text>
      </Text>
      <Text style={[styles.text26, styles.textPosition]}>
        <Text style={styles.text17}>{`الأرض `}</Text>
        <Text style={styles.textTypo4}>ب</Text>
      </Text>
      <Text style={[styles.text29, styles.textPosition]}>
        <Text style={styles.text17}>{`الأرض `}</Text>
        <Text style={styles.textTypo4}>ب</Text>
      </Text>
      <Text style={[styles.text32, styles.textTypo1]}>الأرض أ</Text>
      <View
        style={[styles.iphone13149Child11, styles.iphone13149ChildLayout]}
      />
      <View
        style={[styles.iphone13149Child12, styles.iphone13149ChildLayout]}
      />
      <View
        style={[styles.iphone13149Child13, styles.iphone13149ChildPosition]}
      />
      <View
        style={[styles.iphone13149Child14, styles.iphone13149ChildPosition]}
      />
      <Image
        style={[styles.solarmenuDotsBoldIcon, styles.solarmenuIconLayout1]}
        contentFit="cover"
        source={require("../assets/solarmenudotsbold.png")}
      />
      <Image
        style={[styles.solarmenuDotsBoldIcon1, styles.solarmenuIconLayout1]}
        contentFit="cover"
        source={require("../assets/solarmenudotsbold.png")}
      />
      <Image
        style={[styles.solarmenuDotsBoldIcon2, styles.solarmenuIconLayout]}
        contentFit="cover"
        source={require("../assets/solarmenudotsbold.png")}
      />
      <Image
        style={[styles.solarmenuDotsBoldIcon3, styles.solarmenuIconLayout]}
        contentFit="cover"
        source={require("../assets/solarmenudotsbold.png")}
      />
      <View style={[styles.lineView, styles.text23Position]} />
      <Image
        style={[styles.lineIcon, styles.textPosition]}
        contentFit="cover"
        source={require("../assets/line-6.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    width: "100%",
    overflow: "hidden",
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "35.74%",
    marginTop: -26.5,
    position: "absolute",
  },
  borderPosition: {
    left: "50%",
    position: "absolute",
  },
  borderBorder: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  rectangleViewShadowBox: {
    height: 65,
    shadowOpacity: 1,
    elevation: 4,
    shadowRadius: 4,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    position: "absolute",
  },
  healthiconsmoneyBagOutlineLayout: {
    height: 44,
    position: "absolute",
  },
  iphone13149ChildLayout3: {
    height: 63,
    top: 226,
    width: 51,
    borderRadius: Border.br_8xs,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  iphone13149ChildLayout2: {
    height: 82,
    width: 359,
    borderRadius: Border.br_smi,
    left: 20,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  iphone13149ChildLayout1: {
    width: 360,
    left: 22,
    height: 82,
    borderRadius: Border.br_smi,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  textTypo3: {
    fontFamily: FontFamily.almaraiExtraBold,
    fontWeight: "800",
  },
  textPosition1: {
    top: 258,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  textTypo2: {
    fontSize: FontSize.size_smi,
    top: 236,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    bottom: "5.09%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo1: {
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  textTypo: {
    color: Color.colorGray_100,
    fontSize: FontSize.size_3xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  text23Position: {
    left: 306,
    position: "absolute",
  },
  textPosition: {
    left: 301,
    position: "absolute",
  },
  iphone13149ChildLayout: {
    height: 59,
    width: 4,
    left: 364,
    position: "absolute",
  },
  iphone13149ChildPosition: {
    backgroundColor: Color.colorDodgerblue,
    left: 366,
    height: 59,
    width: 4,
    position: "absolute",
  },
  solarmenuIconLayout1: {
    height: 20,
    width: 20,
    position: "absolute",
    overflow: "hidden",
  },
  solarmenuIconLayout: {
    width: "5.13%",
    height: "2.37%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
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
    marginLeft: -13.65,
    top: "0%",
    bottom: "0%",
    borderRadius: Border.br_8xs_3,
    width: 25,
    opacity: 0.35,
    borderColor: Color.graysBlack,
    height: "100%",
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
  iphone13149Child: {
    top: 141,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 643,
    position: "absolute",
  },
  mingcuteaddFillIcon: {
    top: 327,
    left: 87,
    width: 15,
    height: 14,
    position: "absolute",
    overflow: "hidden",
  },
  text: {
    top: 326,
    left: 270,
    fontSize: FontSize.size_lg,
    color: Color.colorDarkolivegreen_100,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
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
  iphone13149Item: {
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
  iphone13149Inner: {
    top: 754,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkolivegreen_100,
    width: 361,
    left: 16,
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
    top: 764,
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  healthiconsmoneyBagOutline: {
    left: 240,
    top: 765,
    width: 40,
  },
  rectangleView: {
    top: 225,
    left: 330,
    backgroundColor: Color.colorOlivedrab_200,
    borderColor: Color.colorGainsboro_100,
    width: 51,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
  },
  iphone13149Child1: {
    left: 264,
  },
  iphone13149Child2: {
    left: 191,
  },
  iphone13149Child3: {
    left: 121,
  },
  iphone13149Child4: {
    left: 53,
  },
  iphone13149Child6: {
    left: -15,
  },
  iphone13149Child7: {
    top: 368,
  },
  iphone13149Child8: {
    top: 465,
  },
  iphone13149Child9: {
    top: 561,
  },
  iphone13149Child10: {
    top: 657,
  },
  text1: {
    top: 174,
    left: 279,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray_200,
    textAlign: "right",
    fontFamily: FontFamily.almaraiExtraBold,
    fontWeight: "800",
    lineHeight: 22,
    position: "absolute",
  },
  text2: {
    top: 145,
    left: 346,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    fontSize: FontSize.size_mini,
    color: Color.colorDimgray_200,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  text3: {
    left: 348,
    color: Color.bGPrimary,
    fontFamily: FontFamily.almaraiExtraBold,
    fontWeight: "800",
  },
  text4: {
    left: 283,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiExtraBold,
    fontWeight: "800",
  },
  text5: {
    left: 208,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiExtraBold,
    fontWeight: "800",
  },
  text6: {
    left: 140,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  text7: {
    left: 73,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  text8: {
    left: 3,
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  text9: {
    left: 338,
    color: Color.bGPrimary,
  },
  text10: {
    left: 274,
    color: Color.colorDimgray_200,
  },
  text11: {
    left: 195,
    color: Color.colorDimgray_200,
  },
  text12: {
    left: 125,
    color: Color.colorDimgray_200,
  },
  text13: {
    left: 64,
    color: Color.colorDimgray_200,
  },
  text14: {
    left: -3,
    color: Color.colorDimgray_200,
  },
  ellipseIcon: {
    left: 106,
    width: 47,
    height: 47,
    top: 764,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.32%",
    width: "6.92%",
    top: "91.59%",
    right: "63.33%",
    left: "29.74%",
  },
  vectorIcon1: {
    height: "3.44%",
    width: "10%",
    top: "91.47%",
    right: "79.49%",
    left: "10.51%",
    borderRadius: Border.br_8xs,
  },
  textTypo4: {
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  text17: {
    fontFamily: FontFamily.almaraiRegular,
  },
  text15: {
    top: 321,
    left: 19,
    position: "absolute",
  },
  text19: {
    top: 406,
    left: 120,
  },
  text20: {
    top: 506,
    left: 151,
  },
  text21: {
    top: 602,
    left: 100,
  },
  text22: {
    top: 698,
    left: 134,
  },
  text23: {
    top: 377,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  text26: {
    top: 474,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  text29: {
    width: 52,
    top: 572,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  text32: {
    top: 664,
    left: 311,
    fontFamily: FontFamily.almaraiRegular,
    position: "absolute",
  },
  iphone13149Child11: {
    top: 379,
    backgroundColor: Color.colorSalmon,
  },
  iphone13149Child12: {
    backgroundColor: Color.colorGold,
    top: 476,
  },
  iphone13149Child13: {
    top: 572,
  },
  iphone13149Child14: {
    top: 670,
  },
  solarmenuDotsBoldIcon: {
    top: 378,
    left: 36,
  },
  solarmenuDotsBoldIcon1: {
    left: 33,
    top: 476,
  },
  solarmenuDotsBoldIcon2: {
    top: "67.89%",
    right: "85.64%",
    bottom: "29.74%",
    left: "9.23%",
  },
  solarmenuDotsBoldIcon3: {
    top: "79.27%",
    right: "84.87%",
    bottom: "18.36%",
    left: "10%",
  },
  lineView: {
    top: 675,
    borderTopWidth: 1,
    width: 46,
    height: 1,
    borderColor: Color.graysBlack,
    borderStyle: "solid",
    left: 306,
  },
  lineIcon: {
    top: 585,
    height: 3,
    width: 51,
  },
  iphone13149: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
    width: "100%",
  },
});

export default IPhone13146;
