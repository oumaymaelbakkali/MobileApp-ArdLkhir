import * as React from "react";
import { Text, StyleSheet, View, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { FontSize, Color, FontFamily, Border } from "../GlobalStyles";

const IPhone13149 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={[styles.iphone131411, styles.iconLayout]}>
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
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
            style={styles.wifiIcon}
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
      <View style={styles.iphone131411Child} />
      <Text style={[styles.text, styles.textText]}>أضف ربح</Text>
      <Image
        style={[styles.mingcuteaddLineIcon, styles.mingcuteaddIconLayout]}
        contentFit="cover"
        source={require("../assets/mingcuteaddline.png")}
      />
      <Text style={[styles.text1, styles.textTypo2]}>الدخل الصافي</Text>
      <Text style={[styles.text2, styles.textTypo2]}>الأرباح</Text>
      <Text style={[styles.text3, styles.textPosition]}>النفقات</Text>
      <View style={[styles.iphone131411Item, styles.iphone131411Layout]} />
      <Text
        style={[styles.text4, styles.textTypo1]}
      >{`الإيرادات الإجمالية: $17,000
المصروفات الإجمالية: $8,500
الدخل الصافي: $8,500`}</Text>
      <View style={[styles.iphone131411Inner, styles.iphone131411Layout]} />
      <Text style={styles.text5}>{`مبيعات المحاصيل: $10,000
مبيعات الماشية: $5,000
الدعم الحكومي: $2,000
إجمالي الإيرادات: $17,000
`}</Text>
      <Text style={[styles.text6, styles.textText]}>التقرير المالي</Text>
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
      <View style={styles.rectangleView} />
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
      <Pressable
        style={[
          styles.fluentweatherCloudy20Regul,
          styles.fluentweatherCloudy20RegulLayout,
        ]}
        onPress={() => navigation.navigate("IPhone13148")}
      >
        <Image
          style={[styles.icon, styles.iconLayout]}
          contentFit="cover"
          source={require("../assets/fluentweathercloudy20regular.png")}
        />
      </Pressable>
      <View
        style={[styles.iphone131411Child1, styles.iphone131411ChildLayout1]}
      />
      <Text style={[styles.text7, styles.textTypo]}>الأرض ت</Text>
      <View
        style={[styles.iphone131411Child2, styles.iphone131411ChildLayout]}
      />
      <Text style={[styles.text8, styles.textTypo]}>الأرض أ</Text>
      <View
        style={[styles.iphone131411Child3, styles.iphone131411ChildLayout1]}
      />
      <Text style={[styles.text9, styles.textTypo]}>الأرض ب</Text>
      <View
        style={[styles.iphone131411Child4, styles.iphone131411ChildLayout]}
      />
      <Text style={[styles.text10, styles.textTypo]}>الأرض ج</Text>
      <Image
        style={[styles.vectorIcon1, styles.vectorIconLayout]}
        contentFit="cover"
        source={require("../assets/vector3.png")}
      />
      <Image
        style={styles.iphone131411Child5}
        contentFit="cover"
        source={require("../assets/ellipse-82.png")}
      />
      <Image
        style={[
          styles.healthiconsmoneyBagOutline,
          styles.fluentweatherCloudy20RegulLayout,
        ]}
        contentFit="cover"
        source={require("../assets/healthiconsmoneybagoutline1.png")}
      />
      <View style={[styles.iphone131411Child6, styles.iphone131411Layout]} />
      <Text style={[styles.text11, styles.textPosition]}>أضف نفقة</Text>
      <Text style={[styles.text12, styles.textTypo1]}>{`البذور: $2,500
الأسمدة: $1,800
العمالة: $3,000
المرافق: $1,200
إجمالي المصروفات: $8,500
`}</Text>
      <Image
        style={[styles.mingcuteaddLineIcon1, styles.mingcuteaddIconLayout]}
        contentFit="cover"
        source={require("../assets/mingcuteaddline.png")}
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
  },
  mingcuteaddIconLayout: {
    height: 16,
    left: 105,
    width: 17,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    fontSize: FontSize.size_base,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  textPosition: {
    top: 256,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  iphone131411Layout: {
    width: 351,
    borderRadius: Border.br_xl,
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  textTypo1: {
    color: Color.colorDimgray_200,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    position: "absolute",
  },
  vectorIconLayout: {
    maxWidth: "100%",
    top: "92.18%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fluentweatherCloudy20RegulLayout: {
    height: 44,
    position: "absolute",
  },
  iphone131411ChildLayout1: {
    height: 38,
    top: 197,
    backgroundColor: Color.colorGainsboro_100,
    borderRadius: Border.br_xl,
    position: "absolute",
  },
  textTypo: {
    fontSize: FontSize.size_mini,
    top: 203,
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  iphone131411ChildLayout: {
    width: 73,
    height: 38,
    top: 197,
    borderRadius: Border.br_xl,
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
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
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
  iphone131411Child: {
    top: 144,
    left: -1,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 391,
    height: 700,
    position: "absolute",
  },
  text: {
    top: 445,
    left: 43,
    color: Color.colorDarkolivegreen_100,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
    fontSize: FontSize.size_sm,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    textAlign: "center",
  },
  mingcuteaddLineIcon: {
    top: 448,
  },
  text1: {
    top: 621,
    left: 270,
    textAlign: "right",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  text2: {
    top: 439,
    left: 321,
    textAlign: "right",
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    lineHeight: 22,
    position: "absolute",
  },
  text3: {
    left: 309,
    textAlign: "right",
    fontSize: FontSize.size_base,
    color: Color.colorDarkolivegreen_100,
  },
  iphone131411Item: {
    top: 651,
    height: 83,
    left: 20,
    width: 351,
    borderRadius: Border.br_xl,
  },
  text4: {
    top: 660,
    left: 141,
  },
  iphone131411Inner: {
    top: 469,
    left: 21,
    height: 137,
  },
  text5: {
    top: 496,
    left: 161,
    color: "#5c5c5c",
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    fontSize: FontSize.size_base,
    lineHeight: 22,
    position: "absolute",
  },
  text6: {
    top: 159,
    left: 260,
    fontSize: FontSize.size_xl,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
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
  rectangleView: {
    top: 760,
    left: 15,
    borderRadius: Border.br_11xl,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 361,
    height: 65,
    backgroundColor: Color.colorDarkolivegreen_100,
    position: "absolute",
  },
  vectorIcon: {
    height: "3.32%",
    width: "6.92%",
    right: "63.33%",
    bottom: "4.5%",
    left: "29.74%",
  },
  mingcutelocation3LineIcon: {
    top: 774,
    left: 178,
    width: 32,
    height: 37,
    position: "absolute",
    overflow: "hidden",
  },
  icon: {
    height: "100%",
    overflow: "hidden",
  },
  fluentweatherCloudy20Regul: {
    left: 301,
    width: 44,
    top: 770,
  },
  iphone131411Child1: {
    left: 17,
    width: 75,
  },
  text7: {
    left: 26,
    color: Color.colorDarkolivegreen_100,
    textAlign: "center",
  },
  iphone131411Child2: {
    left: 300,
    backgroundColor: Color.colorDarkolivegreen_100,
  },
  text8: {
    left: 312,
    color: Color.bGPrimary,
    textAlign: "right",
  },
  iphone131411Child3: {
    left: 207,
    width: 72,
  },
  text9: {
    left: 212,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  iphone131411Child4: {
    left: 113,
    backgroundColor: Color.colorGainsboro_100,
    width: 73,
  },
  text10: {
    left: 122,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
  },
  vectorIcon1: {
    height: "3.44%",
    width: "10%",
    right: "76.92%",
    bottom: "4.38%",
    left: "13.08%",
    borderRadius: Border.br_8xs,
  },
  iphone131411Child5: {
    left: 235,
    width: 49,
    height: 50,
    top: 770,
    position: "absolute",
  },
  healthiconsmoneyBagOutline: {
    top: 771,
    left: 239,
    width: 40,
    overflow: "hidden",
  },
  iphone131411Child6: {
    top: 284,
    height: 138,
    left: 20,
    width: 351,
    borderRadius: Border.br_xl,
  },
  text11: {
    left: 38,
    color: Color.colorOlivedrab_100,
    textShadowRadius: 4,
    textShadowOffset: {
      width: 0,
      height: 4,
    },
    textShadowColor: "rgba(0, 0, 0, 0.25)",
    fontSize: FontSize.size_sm,
    textAlign: "center",
  },
  text12: {
    top: 298,
    left: 158,
  },
  mingcuteaddLineIcon1: {
    top: 259,
  },
  iphone131411: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    backgroundColor: Color.bGPrimary,
    width: "100%",
  },
});

export default IPhone13149;
