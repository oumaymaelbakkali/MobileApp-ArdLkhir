import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone131412 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13146}>
      <View style={[styles.statusBarIphone, styles.rectangleViewLayout]}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={[styles.time1, styles.textTypo8]}>9:41</Text>
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
      <View style={styles.iphone13146Child} />
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
        style={styles.iphone13146Item}
        contentFit="cover"
        source={require("../assets/ellipse-1.png")}
      />
      <Image
        style={styles.images31Icon}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.iphone13146Inner, styles.rectangleViewLayout]} />
      <Text style={[styles.text, styles.textTypo8]}>القمح</Text>
      <Text style={[styles.text1, styles.textText]}>القمح</Text>
      <Text style={[styles.text2, styles.textTypo7]}>1.43</Text>
      <Text style={[styles.text3, styles.textText]}>
        <Text style={styles.text4}>{`هكتار في
`}</Text>
        <Text style={styles.textTypo7}>أرض أ</Text>
      </Text>
      <Image
        style={styles.wheat314120211Icon}
        contentFit="cover"
        source={require("../assets/wheat31412021-1.png")}
      />
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("IPhone131410")}
      >
        <Text style={[styles.text6, styles.textTypo6]}>{`رجوع    >`}</Text>
      </Pressable>
      <View style={[styles.iphone13146Child1, styles.iphone13146ChildLayout]} />
      <View style={[styles.iphone13146Child2, styles.iphone13146ChildLayout]} />
      <Image
        style={styles.gameIconswheat}
        contentFit="cover"
        source={require("../assets/gameiconswheat.png")}
      />
      <Image
        style={styles.rectangleIcon}
        contentFit="cover"
        source={require("../assets/rectangle-41.png")}
      />
      <Image
        style={[styles.iphone13146Child3, styles.text9Position]}
        contentFit="cover"
        source={require("../assets/rectangle-27.png")}
      />
      <Text style={[styles.text7, styles.textTypo5]}>قبل 34 يومًا</Text>
      <Text style={[styles.text8, styles.textTypo5]}>بعد 74 يومًا</Text>
      <Text style={[styles.text9, styles.textTypo3]}>تاريخ الزراعة</Text>
      <Text style={[styles.text10, styles.textTypo3]}> موسم الحصاد</Text>
      <Text style={[styles.text11, styles.text11Position]}>
        {" "}
        مرحلة الإزهار والإخصاب
      </Text>
      <Text style={[styles.text12, styles.textTypo4]}>6 فبراير</Text>
      <Text style={[styles.text13, styles.textTypo4]}>ابتداء من 6 يونيو</Text>
      <View style={[styles.iphone13146Child4, styles.text23Position]} />
      <View style={styles.iphone13146Child5} />
      <Image
        style={[styles.circummenuKebabIcon, styles.circummenuIconLayout]}
        contentFit="cover"
        source={require("../assets/circummenukebab.png")}
      />
      <Image
        style={[styles.circummenuKebabIcon1, styles.circummenuIconPosition]}
        contentFit="cover"
        source={require("../assets/circummenukebab.png")}
      />
      <Image
        style={[styles.circummenuKebabIcon2, styles.circummenuIconPosition]}
        contentFit="cover"
        source={require("../assets/circummenukebab.png")}
      />
      <Image
        style={[styles.circummenuKebabIcon3, styles.circummenuIconLayout]}
        contentFit="cover"
        source={require("../assets/circummenukebab.png")}
      />
      <Text style={[styles.text14, styles.textTypo6]}>المدخلات</Text>
      <Text style={[styles.text15, styles.textTypo2]}>الكمية</Text>
      <Text style={[styles.text16, styles.textTypo2]}>السعر</Text>
      <Text style={[styles.text17, styles.textTypo2]}>الاسم</Text>
      <Text style={[styles.text18, styles.textTypo4]}>أضف مدخل</Text>
      <Text style={[styles.npk151515, styles.textTypo1]}>
        NPK 15-15-15، مبيد
      </Text>
      <Text style={[styles.text19, styles.textTypo1]}>مبيد حشري</Text>
      <Text style={[styles.text20, styles.textTypo1]}> 150 درهم</Text>
      <Text style={[styles.text21, styles.textTypo4]}> 2 لتر</Text>
      <Text style={[styles.text22, styles.textTypo2]}>النوع</Text>
      <Text style={[styles.text23, styles.text23Position]}>المهام الحالية</Text>
      <Image
        style={[styles.vectorIcon, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector8.png")}
      />
      <Image
        style={[styles.letsIconsviewLight, styles.text11Position]}
        contentFit="cover"
        source={require("../assets/letsiconsviewlight1.png")}
      />
      <Text style={[styles.text24, styles.textTypo]}>
        إجراء التسميد الأول للقمح
      </Text>
      <Text style={[styles.text25, styles.textTypo]}>
        إجراء التسميد الثاني للقمح
      </Text>
      <Text style={[styles.text26, styles.textTypo]}>رش مبيد الحشرات</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector9.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    width: 390,
    position: "absolute",
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "35.74%",
    marginTop: -26.5,
    position: "absolute",
  },
  textTypo8: {
    textAlign: "center",
    color: Color.graysBlack,
    fontFamily: FontFamily.adobeBlank,
    lineHeight: 22,
    fontSize: FontSize.size_mid,
    position: "absolute",
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
  textText: {
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo7: {
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  textTypo6: {
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
  },
  iphone13146ChildLayout: {
    height: 37,
    width: 371,
    borderRadius: Border.br_3xs,
    left: 13,
  },
  text9Position: {
    top: 404,
    position: "absolute",
  },
  textTypo5: {
    fontSize: FontSize.size_4xs,
    left: 35,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo3: {
    color: Color.colorDarkolivegreen_200,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  text11Position: {
    top: 368,
    position: "absolute",
  },
  textTypo4: {
    fontSize: FontSize.size_3xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  text23Position: {
    top: 653,
    position: "absolute",
  },
  circummenuIconLayout: {
    height: 14,
    width: 13,
    left: 364,
    position: "absolute",
    overflow: "hidden",
  },
  circummenuIconPosition: {
    left: 366,
    height: 14,
    width: 13,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    top: 546,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo1: {
    top: 577,
    fontSize: FontSize.size_3xs,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  textTypo: {
    color: Color.colorDimgray_200,
    fontSize: FontSize.size_sm,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  time1: {
    top: "33.89%",
    left: "49.86%",
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
    backgroundColor: Color.colorGray_200,
    height: 53,
    left: 7,
  },
  iphone13146Child: {
    backgroundColor: Color.colorWhitesmoke_100,
    height: 718,
    left: 0,
    top: 138,
    width: 390,
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
  iphone13146Item: {
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
  iphone13146Inner: {
    top: 165,
    left: 4,
    height: 107,
    backgroundColor: Color.bGPrimary,
  },
  text: {
    top: 208,
    left: 92,
  },
  text1: {
    top: 170,
    left: 326,
    fontSize: FontSize.size_xl,
    fontFamily: FontFamily.almaraiRegular,
  },
  text2: {
    top: 217,
    fontSize: 35,
    width: 84,
    height: 27,
    left: 293,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  text4: {
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
  },
  text3: {
    top: 203,
    left: 249,
    fontSize: FontSize.size_mini,
  },
  wheat314120211Icon: {
    top: 181,
    width: 127,
    height: 87,
    left: 7,
    position: "absolute",
  },
  rectangleView: {
    top: 279,
    height: 220,
    left: 0,
    backgroundColor: Color.bGPrimary,
  },
  text6: {
    fontFamily: FontFamily.almaraiRegular,
  },
  pressable: {
    left: 13,
    top: 138,
    position: "absolute",
  },
  iphone13146Child1: {
    backgroundColor: Color.colorGainsboro_200,
    height: 37,
    width: 371,
    position: "absolute",
    top: 398,
  },
  iphone13146Child2: {
    top: 442,
    backgroundColor: Color.colorGainsboro_200,
    height: 37,
    width: 371,
    position: "absolute",
  },
  gameIconswheat: {
    top: 448,
    left: 349,
    width: 22,
    height: 18,
    position: "absolute",
    overflow: "hidden",
  },
  rectangleIcon: {
    top: 288,
    left: 155,
    width: 81,
    height: 80,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13146Child3: {
    height: 37,
    width: 371,
    borderRadius: Border.br_3xs,
    left: 13,
  },
  text7: {
    top: 415,
  },
  text8: {
    top: 457,
  },
  text9: {
    top: 404,
    position: "absolute",
    left: 293,
  },
  text10: {
    top: 447,
    left: 282,
    position: "absolute",
  },
  text11: {
    left: 134,
    color: Color.colorDarkolivegreen_200,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    lineHeight: 22,
  },
  text12: {
    left: 42,
    top: 398,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_3xs,
  },
  text13: {
    left: 12,
    width: 80,
    height: 23,
    top: 442,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_3xs,
  },
  iphone13146Child4: {
    width: 397,
    height: 133,
    left: 0,
    backgroundColor: Color.bGPrimary,
  },
  iphone13146Child5: {
    top: 512,
    left: -7,
    width: 403,
    height: 125,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  circummenuKebabIcon: {
    top: 581,
  },
  circummenuKebabIcon1: {
    top: 688,
  },
  circummenuKebabIcon2: {
    top: 723,
  },
  circummenuKebabIcon3: {
    top: 753,
  },
  text14: {
    top: 515,
    left: 322,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    position: "absolute",
  },
  text15: {
    left: 46,
  },
  text16: {
    left: 123,
  },
  text17: {
    left: 319,
  },
  text18: {
    top: 606,
    left: 309,
    color: Color.colorGold,
    fontFamily: FontFamily.almaraiRegular,
  },
  npk151515: {
    left: 282,
  },
  text19: {
    left: 202,
  },
  text20: {
    left: 122,
  },
  text21: {
    top: 578,
    left: 55,
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
  },
  text22: {
    left: 212,
  },
  text23: {
    left: 301,
    fontSize: FontSize.size_smi,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  vectorIcon: {
    height: "2.13%",
    width: "4.36%",
    top: "48.1%",
    right: "5.9%",
    bottom: "49.76%",
    left: "89.74%",
  },
  letsIconsviewLight: {
    left: 236,
    width: 20,
    height: 22,
    overflow: "hidden",
  },
  text24: {
    top: 684,
    left: 211,
  },
  text25: {
    top: 748,
    left: 214,
  },
  text26: {
    top: 713,
    left: 252,
  },
  vectorIcon1: {
    height: "1.3%",
    width: "3.33%",
    top: "72.39%",
    right: "3.85%",
    bottom: "26.3%",
    left: "92.82%",
  },
  iphone13146: {
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone131412;
