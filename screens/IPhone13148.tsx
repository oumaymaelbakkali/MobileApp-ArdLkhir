import * as React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { Image } from "expo-image";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Color, FontFamily, FontSize, Border } from "../GlobalStyles";

const IPhone13148 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone131412}>
      <View style={styles.iphone131412Child} />
      <View style={[styles.iphone131412Item, styles.iphone131412Bg]} />
      <View style={[styles.iphone131412Inner, styles.iphone131412Bg]} />
      <Text style={[styles.text, styles.textFlexBox]}>
        <Text style={styles.text1}>{`  `}</Text>
        <Text style={styles.textTypo7}>اليوم</Text>
      </Text>
      <Text style={styles.text3}>{`<     7 أيام قادمة`}</Text>
      <Text style={[styles.text4, styles.textTypo7]}>الأراضي</Text>
      <Text style={[styles.text5, styles.textTypo5]}>الرياح الآن</Text>
      <Text style={[styles.text6, styles.textFlexBox]}>اليوم</Text>
      <Image
        style={[styles.letsIconshumidity, styles.letsIconshumidityLayout]}
        contentFit="cover"
        source={require("../assets/letsiconshumidity.png")}
      />
      <Image
        style={[styles.gameIconsheavyRain, styles.letsIconshumidityLayout]}
        contentFit="cover"
        source={require("../assets/gameiconsheavyrain.png")}
      />
      <Image
        style={styles.phwindIcon}
        contentFit="cover"
        source={require("../assets/phwind.png")}
      />
      <View style={styles.statusBarIphone}>
        <View style={[styles.time, styles.timePosition]}>
          <Text style={styles.time1}>9:41</Text>
        </View>
        <View style={[styles.levels, styles.timePosition]}>
          <View style={[styles.battery, styles.batteryPosition]}>
            <View style={styles.border} />
            <Image
              style={[styles.capIcon, styles.iconPosition]}
              contentFit="cover"
              source={require("../assets/cap.png")}
            />
            <View style={[styles.capacity, styles.batteryPosition]} />
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
        style={[styles.images31Icon, styles.images31IconPosition]}
        contentFit="cover"
        source={require("../assets/images3-11.png")}
      />
      <View style={[styles.rectangleView, styles.images31IconPosition]} />
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector.png")}
      />
      <Image
        style={styles.mingcutelocation3LineIcon}
        contentFit="cover"
        source={require("../assets/mingcutelocation3line.png")}
      />
      <Image
        style={[
          styles.healthiconsmoneyBagOutline,
          styles.iphone131412Child1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/healthiconsmoneybagoutline.png")}
      />
      <Image
        style={[styles.iphone131412Child1, styles.iphone131412Child1Layout]}
        contentFit="cover"
        source={require("../assets/ellipse-81.png")}
      />
      <Image
        style={[
          styles.fluentweatherCloudy20RegulIcon,
          styles.iphone131412Child1Layout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweathercloudy20regular1.png")}
      />
      <Pressable
        style={styles.vector}
        onPress={() => navigation.navigate("IPhone13143")}
      >
        <Image
          style={styles.icon}
          contentFit="cover"
          source={require("../assets/vector3.png")}
        />
      </Pressable>
      <Text style={[styles.text7, styles.textFlexBox]}>رطوبة</Text>
      <Text style={[styles.text8, styles.textTypo5]}>توقعات</Text>
      <Text style={[styles.km, styles.textFlexBox]}>
        <Text style={[styles.text9, styles.textTypo7]}>{`15 `}</Text>
        <Text style={styles.km1}>Km</Text>
      </Text>
      <Text style={[styles.text10, styles.textFlexBox]}>
        <Text style={[styles.text9, styles.textTypo7]}>{`35 `}</Text>
        <Text style={styles.km1}>%</Text>
      </Text>
      <Text style={[styles.text13, styles.textFlexBox]}>
        <Text style={[styles.text9, styles.textTypo7]}>92</Text>
        <Text style={styles.km1}> %</Text>
      </Text>
      <Text style={[styles.text16, styles.textTypo7]}>فاس</Text>
      <Text style={[styles.text17, styles.textFlexBox]}>الاثنين 1 أبريل</Text>
      <Text style={[styles.text18, styles.textFlexBox]}>{`23° `}</Text>
      <Image
        style={styles.image3Icon}
        contentFit="cover"
        source={require("../assets/image-3.png")}
      />
      <View
        style={[styles.iphone131412Child2, styles.iphone131412ChildLayout]}
      />
      <Text style={[styles.text19, styles.textTypo4]}>35°</Text>
      <Text style={[styles.text20, styles.textTypo3]}>11:00</Text>
      <Image
        style={[styles.bitcoinIconssunFilled, styles.bitcoinLayout1]}
        contentFit="cover"
        source={require("../assets/bitcoiniconssunfilled.png")}
      />
      <View
        style={[styles.iphone131412Child3, styles.iphone131412ChildBorder]}
      />
      <Text style={[styles.text21, styles.text21Position]}>
        فاس بولمان تانديت
      </Text>
      <Text style={[styles.text22, styles.textTypo1]}> الأرض أ</Text>
      <Text style={[styles.text23, styles.textTypo7]}>35°</Text>
      <Image
        style={[styles.bitcoinIconssunFilled1, styles.bitcoinLayout]}
        contentFit="cover"
        source={require("../assets/bitcoiniconssunfilled1.png")}
      />
      <View
        style={[styles.iphone131412Child4, styles.iphone131412ChildBorder]}
      />
      <Text style={[styles.text24, styles.textTypo2]}>لمان تانديت</Text>
      <Image
        style={[styles.bitcoinIconssunFilled2, styles.bitcoinLayout]}
        contentFit="cover"
        source={require("../assets/bitcoiniconssunfilled1.png")}
      />
      <Text style={[styles.text25, styles.textTypo1]}> الأرض د</Text>
      <View style={[styles.iphone131412Child5, styles.text21Position]} />
      <Text style={[styles.text26, styles.textTypo4]}>38°</Text>
      <Text style={[styles.text27, styles.textTypo4]}>3°</Text>
      <Image
        style={[styles.bitcoinIconssunFilled3, styles.bitcoinLayout1]}
        contentFit="cover"
        source={require("../assets/bitcoiniconssunfilled.png")}
      />
      <Text style={[styles.text28, styles.textTypo]}>12:00</Text>
      <View
        style={[styles.iphone131412Child6, styles.iphone131412ChildLayout]}
      />
      <Text style={[styles.text29, styles.textTypo]}>13:00</Text>
      <Text style={[styles.text29, styles.textTypo]}>13:00</Text>
      <Text style={[styles.text31, styles.textPosition]}>29°</Text>
      <Image
        style={[
          styles.fluentweatherRain20FilledIcon,
          styles.fluentweatherIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweatherrain20filled.png")}
      />
      <Image
        style={[
          styles.fluentweatherRain20FilledIcon,
          styles.fluentweatherIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweatherrain20filled.png")}
      />
      <View
        style={[styles.iphone131412Child7, styles.iphone131412ChildLayout]}
      />
      <Text style={[styles.text32, styles.textPosition]}>28°</Text>
      <Text style={[styles.text33, styles.textTypo3]}>14:00</Text>
      <Image
        style={[
          styles.fluentweatherRain20FilledIcon2,
          styles.fluentweatherIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/fluentweatherrain20filled.png")}
      />
      <View style={[styles.iphone131412Child8, styles.textPosition]} />
      <Image
        style={[
          styles.letsIconssettingLineLight,
          styles.fluentweatherIconLayout,
        ]}
        contentFit="cover"
        source={require("../assets/letsiconssettinglinelight.png")}
      />
      <Image
        style={styles.bitcoinIconsmenuFilled}
        contentFit="cover"
        source={require("../assets/bitcoiniconsmenufilled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iphone131412Bg: {
    backgroundColor: Color.bGPrimary,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo7: {
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
  },
  textTypo5: {
    top: 401,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  letsIconshumidityLayout: {
    height: 20,
    width: 20,
    top: 379,
    position: "absolute",
    overflow: "hidden",
  },
  timePosition: {
    height: 54,
    top: "50%",
    width: "35.74%",
    marginTop: -26.5,
    position: "absolute",
  },
  batteryPosition: {
    left: "50%",
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  images31IconPosition: {
    left: 16,
    position: "absolute",
  },
  iphone131412Child1Layout: {
    height: 44,
    position: "absolute",
  },
  iphone131412ChildLayout: {
    height: 60,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bGPrimary,
  },
  textTypo4: {
    top: 511,
    fontSize: FontSize.size_smi,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textTypo3: {
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  bitcoinLayout1: {
    height: 25,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131412ChildBorder: {
    height: 72,
    top: 630,
    borderColor: Color.colorGainsboro_100,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    position: "absolute",
    backgroundColor: Color.bGPrimary,
  },
  text21Position: {
    left: 115,
    position: "absolute",
  },
  textTypo1: {
    top: 644,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  bitcoinLayout: {
    height: 36,
    width: 48,
    top: 648,
    position: "absolute",
    overflow: "hidden",
  },
  textTypo2: {
    top: 664,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
  },
  textTypo: {
    top: 550,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiRegular,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  textPosition: {
    top: 510,
    position: "absolute",
  },
  fluentweatherIconLayout: {
    height: 22,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131412Child: {
    top: 147,
    left: 0,
    backgroundColor: Color.colorWhitesmoke_100,
    width: 388,
    height: 558,
    position: "absolute",
  },
  iphone131412Item: {
    top: 198,
    left: 30,
    width: 358,
    height: 161,
    position: "absolute",
  },
  iphone131412Inner: {
    top: 203,
    left: -22,
    width: 401,
    height: 529,
    position: "absolute",
  },
  text1: {
    fontFamily: FontFamily.almaraiRegular,
  },
  text: {
    left: 46,
    fontSize: FontSize.size_mini,
    top: 483,
    color: Color.colorDarkolivegreen_100,
  },
  text3: {
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    fontSize: FontSize.size_smi,
    left: 261,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    top: 483,
    position: "absolute",
  },
  text4: {
    top: 599,
    left: 48,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  text5: {
    left: 48,
  },
  text6: {
    left: 175,
    fontSize: FontSize.size_lg,
    top: 162,
    fontFamily: FontFamily.almaraiRegular,
  },
  letsIconshumidity: {
    left: 188,
  },
  gameIconsheavyRain: {
    left: 285,
  },
  phwindIcon: {
    left: 82,
    width: 22,
    height: 21,
    top: 379,
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
    borderColor: Color.graysBlack,
    width: 25,
    opacity: 0.35,
    borderWidth: 1,
    borderStyle: "solid",
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
    width: 61,
    height: 61,
  },
  rectangleView: {
    top: 754,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorDarkolivegreen_100,
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
  },
  vectorIcon: {
    height: "3.32%",
    width: "6.92%",
    right: "63.08%",
    bottom: "5.21%",
    left: "30%",
    maxWidth: "100%",
    top: "91.47%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  mingcutelocation3LineIcon: {
    top: 768,
    left: 179,
    height: 37,
    width: 32,
    position: "absolute",
    overflow: "hidden",
  },
  healthiconsmoneyBagOutline: {
    left: 240,
    width: 40,
    top: 765,
    height: 44,
    overflow: "hidden",
  },
  iphone131412Child1: {
    left: 305,
    width: 47,
    top: 765,
    height: 44,
  },
  fluentweatherCloudy20RegulIcon: {
    top: 764,
    left: 307,
    width: 44,
    overflow: "hidden",
  },
  icon: {
    borderRadius: Border.br_8xs,
    maxWidth: "100%",
    maxHeight: "100%",
    height: "100%",
    overflow: "hidden",
    width: "100%",
  },
  vector: {
    left: "13.33%",
    right: "76.67%",
    bottom: "5.09%",
    width: "10%",
    height: "3.44%",
    top: "91.47%",
    position: "absolute",
  },
  text7: {
    top: 403,
    left: 178,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
  },
  text8: {
    left: 274,
  },
  text9: {
    fontSize: FontSize.size_11xl,
  },
  km1: {
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
  },
  km: {
    top: 432,
    left: 50,
  },
  text10: {
    top: 433,
    left: 177,
  },
  text13: {
    top: 431,
    left: 277,
  },
  text16: {
    top: 211,
    left: 311,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
    fontSize: FontSize.size_mini,
  },
  text17: {
    top: 241,
    left: 270,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
  },
  text18: {
    top: 232,
    left: 29,
    fontSize: 55,
    fontWeight: "800",
    fontFamily: FontFamily.almaraiExtraBold,
  },
  image3Icon: {
    top: 263,
    left: 103,
    width: 177,
    height: 106,
    position: "absolute",
  },
  iphone131412Child2: {
    left: 44,
    width: 58,
    top: 512,
    height: 60,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text19: {
    left: 76,
  },
  text20: {
    top: 548,
    left: 62,
  },
  bitcoinIconssunFilled: {
    top: 525,
    left: 56,
  },
  iphone131412Child3: {
    width: 197,
    left: 48,
  },
  text21: {
    top: 664,
    fontSize: FontSize.size_3xs,
    fontFamily: FontFamily.almaraiLight,
    fontWeight: "300",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
  },
  text22: {
    left: 122,
  },
  text23: {
    top: 660,
    left: 211,
    fontSize: FontSize.size_xl,
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
    position: "absolute",
  },
  bitcoinIconssunFilled1: {
    left: 58,
  },
  iphone131412Child4: {
    width: 101,
    left: 261,
    height: 72,
    top: 630,
  },
  text24: {
    left: 310,
    position: "absolute",
  },
  bitcoinIconssunFilled2: {
    left: 260,
  },
  text25: {
    left: 315,
  },
  iphone131412Child5: {
    borderColor: "#85b6ff",
    height: 60,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bGPrimary,
    width: 58,
    top: 512,
  },
  text26: {
    left: 150,
  },
  text27: {
    left: 157,
  },
  bitcoinIconssunFilled3: {
    top: 527,
    left: 128,
  },
  text28: {
    left: 133,
  },
  iphone131412Child6: {
    left: 187,
    width: 58,
    top: 512,
    height: 60,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text29: {
    left: 205,
  },
  text31: {
    left: 223,
    fontSize: FontSize.size_smi,
    top: 510,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
  },
  fluentweatherRain20FilledIcon: {
    left: 200,
    top: 530,
    height: 22,
    width: 32,
  },
  iphone131412Child7: {
    left: 265,
    width: 58,
    top: 512,
    height: 60,
    borderColor: Color.colorGainsboro_100,
    position: "absolute",
  },
  text32: {
    left: 296,
    fontSize: FontSize.size_smi,
    top: 510,
    fontFamily: FontFamily.almaraiBold,
    fontWeight: "700",
    textAlign: "right",
    color: Color.colorDarkolivegreen_100,
    lineHeight: 22,
  },
  text33: {
    top: 549,
    left: 284,
  },
  fluentweatherRain20FilledIcon2: {
    left: 279,
    top: 530,
    height: 22,
    width: 32,
  },
  iphone131412Child8: {
    left: 334,
    width: 14,
    height: 60,
    borderRadius: Border.br_8xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.bGPrimary,
    borderColor: Color.colorGainsboro_100,
  },
  letsIconssettingLineLight: {
    left: 32,
    width: 24,
    top: 162,
  },
  bitcoinIconsmenuFilled: {
    top: 156,
    left: 322,
    width: 29,
    height: 33,
    position: "absolute",
    overflow: "hidden",
  },
  iphone131412: {
    flex: 1,
    height: 844,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.bGPrimary,
  },
});

export default IPhone13148;
