import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, FontFamily, Color, FontSize } from "../GlobalStyles";

const IPhone13142 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13143}>
      <Image
        style={[styles.arcticonspassword, styles.arcticonspasswordLayout]}
        contentFit="cover"
        source={require("../assets/arcticonspassword1.png")}
      />
      <Image
        style={[styles.iconamoonemailThin, styles.arcticonspasswordLayout]}
        contentFit="cover"
        source={require("../assets/iconamoonemailthin1.png")}
      />
      <Image
        style={styles.flatColorIconsgoogle}
        contentFit="cover"
        source={require("../assets/flatcoloriconsgoogle1.png")}
      />
      <Image
        style={[styles.iphone13143Child, styles.iphone13143ChildLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <View style={[styles.iphone13143Item, styles.iphone13143Layout]} />
      <Text style={[styles.farmergmailcom, styles.logInTypo]}>
        Farmer@gmail.com
      </Text>
      <View style={[styles.iphone13143Inner, styles.iphone13143Layout]} />
      <Text style={[styles.text, styles.passwordClr]}>***********</Text>
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
            <View style={[styles.capacity, styles.capacityPosition]} />
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
      <View style={styles.homeIndicator}>
        <View style={[styles.homeIndicator1, styles.capacityPosition]} />
      </View>
      <Pressable
        style={[styles.rectanglePressable, styles.iphone13143ChildLayout]}
        onPress={() => navigation.navigate("IPhone13143")}
      />
      <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      <Text style={[styles.forgetPassword, styles.passwordClr]}>
        Forget Password ?
      </Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.iphone13143Child1, styles.lineViewPosition]} />
      <Text style={[styles.orLoginWith, styles.logInTypo]}>Or Login With</Text>
      <Text style={[styles.dontHaveAnContainer, styles.logInTypo]}>
        <Text style={styles.dontHaveAn}>{`Don’t have an account ? `}</Text>
        <Text style={styles.signUpNow}>Sign Up Now</Text>
        <Text style={styles.dontHaveAn}>{` `}</Text>
      </Text>
      <Text
        style={[styles.welcomeBack, styles.passwordClr]}
      >{`Welcome Back! `}</Text>
      <Image
        style={styles.fluenteyeOff20RegularIcon}
        contentFit="cover"
        source={require("../assets/fluenteyeoff20regular1.png")}
      />
      <Text style={[styles.email, styles.passwordClr]}>Email</Text>
      <Text style={[styles.password, styles.passwordClr]}>Password</Text>
      <Image
        style={styles.indomay182Icon}
        contentFit="cover"
        source={require("../assets/indomay18-2.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  arcticonspasswordLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13143ChildLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13143Layout: {
    height: 53,
    width: 338,
    left: 27,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  logInTypo: {
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  passwordClr: {
    color: Color.colorDarkolivegreen_100,
    textAlign: "right",
    lineHeight: 22,
    position: "absolute",
  },
  timePosition: {
    top: "50%",
    width: "35.74%",
    marginTop: -27,
    height: 54,
    position: "absolute",
  },
  iconPosition: {
    maxHeight: "100%",
    left: "50%",
    position: "absolute",
  },
  capacityPosition: {
    backgroundColor: Color.graysBlack,
    left: "50%",
    position: "absolute",
  },
  lineViewPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
    top: 729,
    borderStyle: "solid",
    position: "absolute",
  },
  arcticonspassword: {
    top: 542,
    left: 35,
    width: 25,
  },
  iconamoonemailThin: {
    top: 433,
    left: 38,
    width: 24,
  },
  flatColorIconsgoogle: {
    top: 741,
    left: 185,
    height: 27,
    width: 25,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13143Child: {
    top: -307,
    left: 797,
    width: 272,
    height: 408,
  },
  iphone13143Item: {
    top: 419,
    backgroundColor: Color.colorGainsboro_300,
  },
  farmergmailcom: {
    top: 434,
    left: 71,
    color: Color.colorOlivedrab_200,
    fontSize: FontSize.size_mini,
    textAlign: "right",
  },
  iphone13143Inner: {
    top: 531,
    backgroundColor: Color.colorGainsboro_400,
  },
  text: {
    top: 551,
    left: 77,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_mini,
  },
  time1: {
    top: "33.89%",
    left: "49.86%",
    fontSize: FontSize.size_mid,
    fontFamily: FontFamily.adobeBlank,
    textAlign: "center",
    color: Color.graysBlack,
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
    borderColor: Color.graysBlack,
    borderWidth: 1,
    opacity: 0.35,
    borderStyle: "solid",
    left: "50%",
    width: 25,
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
    width: 21,
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
    height: 54,
    position: "absolute",
  },
  homeIndicator1: {
    marginLeft: 69.5,
    bottom: 8,
    borderRadius: Border.br_81xl,
    width: 139,
    height: 5,
    transform: [
      {
        rotate: "180deg",
      },
    ],
  },
  homeIndicator: {
    top: 795,
    left: -1,
    width: 393,
    height: 36,
    position: "absolute",
  },
  rectanglePressable: {
    top: 634,
    left: 24,
    backgroundColor: Color.colorOlivedrab_100,
    width: 340,
    height: 52,
  },
  logIn: {
    top: 649,
    left: 167,
    fontSize: FontSize.size_3xl,
    color: Color.bGPrimary,
  },
  forgetPassword: {
    top: 589,
    left: 240,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_mini,
  },
  lineView: {
    left: 275,
    width: 96,
  },
  iphone13143Child1: {
    left: 22,
    width: 110,
  },
  orLoginWith: {
    top: 713,
    left: 153,
    color: Color.colorDarkgray_100,
    fontSize: FontSize.size_mini,
    textAlign: "right",
  },
  dontHaveAn: {
    color: Color.graysBlack,
  },
  signUpNow: {
    color: Color.colorDarkgoldenrod,
  },
  dontHaveAnContainer: {
    top: 782,
    left: 73,
    fontSize: FontSize.size_mini,
    textAlign: "right",
  },
  welcomeBack: {
    top: 69,
    left: 132,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.almaraiBold,
    width: 143,
    height: 45,
  },
  fluenteyeOff20RegularIcon: {
    top: 543,
    left: 329,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  email: {
    top: 395,
    left: 29,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_mini,
  },
  password: {
    top: 495,
    left: 33,
    fontFamily: FontFamily.almaraiRegular,
    color: Color.colorDarkolivegreen_100,
    fontSize: FontSize.size_mini,
  },
  indomay182Icon: {
    top: 100,
    left: 56,
    width: 287,
    height: 257,
    position: "absolute",
  },
  iphone13143: {
    backgroundColor: Color.bGPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone13142;
