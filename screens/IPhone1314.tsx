import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { useNavigation, ParamListBase } from "@react-navigation/native";
import { Border, Color, FontSize, FontFamily } from "../GlobalStyles";

const IPhone1314 = () => {
  const navigation = useNavigation<StackNavigationProp<ParamListBase>>();

  return (
    <View style={styles.iphone13144}>
      <Image
        style={styles.fluenteyeOff20RegularIcon}
        contentFit="cover"
        source={require("../assets/fluenteyeoff20regular.png")}
      />
      <Image
        style={[styles.iphone13144Child, styles.rectangleViewLayout]}
        contentFit="cover"
        source={require("../assets/rectangle-4.png")}
      />
      <View style={[styles.iphone13144Item, styles.iphone13144Layout]} />
      <View style={[styles.iphone13144Inner, styles.iphone13144Layout]} />
      <Text style={[styles.text, styles.textFlexBox]}>***********</Text>
      <Image
        style={[styles.arcticonspassword, styles.arcticonspasswordLayout]}
        contentFit="cover"
        source={require("../assets/arcticonspassword.png")}
      />
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
      <Text style={[styles.logIn, styles.logInTypo]}>Log in</Text>
      <View style={[styles.lineView, styles.lineViewPosition]} />
      <View style={[styles.iphone13144Child1, styles.lineViewPosition]} />
      <Pressable
        style={styles.alreadyYouHaveContainer}
        onPress={() => navigation.navigate("IPhone13142")}
      >
        <Text style={[styles.text1, styles.textFlexBox]}>
          <Text
            style={styles.alreadyYouHave}
          >{`already you have account ? `}</Text>
          <Text style={styles.signIn}>{`Sign In `}</Text>
          <Text style={styles.alreadyYouHave}>{` `}</Text>
        </Text>
      </Pressable>
      <Text
        style={[styles.signUpTo, styles.textFlexBox]}
      >{`Sign up to get started `}</Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Image
        style={styles.flatColorIconsgoogle}
        contentFit="cover"
        source={require("../assets/flatcoloriconsgoogle.png")}
      />
      <Text style={[styles.orSignUp, styles.textFlexBox]}>Or Sign Up</Text>
      <Image
        style={[styles.iconamoonemailThin, styles.arcticonspasswordLayout]}
        contentFit="cover"
        source={require("../assets/iconamoonemailthin.png")}
      />
      <Text style={[styles.email, styles.textFlexBox]}>Email</Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.farmergmailcom, styles.passwordTypo]}>
        Farmer@gmail.com
      </Text>
      <Text style={[styles.signUp, styles.logInTypo]}>Sign Up</Text>
      <Image style={styles.indomay181Icon} contentFit="cover" />
    </View>
  );
};

const styles = StyleSheet.create({
  rectangleViewLayout: {
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  iphone13144Layout: {
    height: 53,
    width: 338,
    borderRadius: Border.br_3xs,
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "right",
    lineHeight: 22,
  },
  arcticonspasswordLayout: {
    height: 24,
    position: "absolute",
    overflow: "hidden",
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
  logInTypo: {
    color: Color.bGPrimary,
    fontSize: FontSize.size_3xl,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    position: "absolute",
  },
  lineViewPosition: {
    height: 1,
    borderTopWidth: 1,
    borderColor: Color.colorDarkgray_100,
    top: 696,
    borderStyle: "solid",
    position: "absolute",
  },
  passwordTypo: {
    color: Color.colorOlivedrab_200,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    lineHeight: 22,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  fluenteyeOff20RegularIcon: {
    top: 511,
    left: 323,
    width: 20,
    height: 20,
    position: "absolute",
    overflow: "hidden",
  },
  iphone13144Child: {
    top: -307,
    left: 797,
    width: 272,
    height: 408,
  },
  iphone13144Item: {
    top: 408,
    left: 24,
    backgroundColor: Color.colorGainsboro_300,
  },
  iphone13144Inner: {
    top: 493,
    left: 23,
    backgroundColor: Color.colorGainsboro_400,
  },
  text: {
    top: 514,
    left: 75,
    color: Color.colorDarkolivegreen_100,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  arcticonspassword: {
    top: 508,
    left: 34,
    width: 25,
    height: 24,
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
    top: 792,
    left: -1,
    width: 393,
    height: 36,
    position: "absolute",
  },
  logIn: {
    top: 617,
    left: 164,
  },
  lineView: {
    left: 249,
    width: 127,
  },
  iphone13144Child1: {
    left: 15,
    width: 123,
  },
  alreadyYouHave: {
    color: Color.graysBlack,
  },
  signIn: {
    color: Color.colorDarkgoldenrod,
  },
  text1: {
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    textAlign: "right",
  },
  alreadyYouHaveContainer: {
    left: 82,
    top: 769,
    position: "absolute",
  },
  signUpTo: {
    top: 66,
    left: 50,
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.almaraiBold,
    color: Color.colorOlivedrab_100,
    width: 247,
    height: 45,
    position: "absolute",
  },
  rectangleView: {
    top: 577,
    left: 26,
    backgroundColor: Color.colorOlivedrab_100,
    width: 340,
    height: 52,
  },
  flatColorIconsgoogle: {
    top: 715,
    left: 179,
    width: 34,
    height: 35,
    position: "absolute",
    overflow: "hidden",
  },
  orSignUp: {
    top: 685,
    left: 160,
    color: Color.colorDarkgray_100,
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    textAlign: "right",
    position: "absolute",
  },
  iconamoonemailThin: {
    top: 422,
    left: 36,
    width: 24,
  },
  email: {
    top: 378,
    left: 28,
    color: Color.colorDarkolivegreen_100,
    textAlign: "right",
    fontFamily: FontFamily.almaraiRegular,
    fontSize: FontSize.size_mini,
    position: "absolute",
  },
  password: {
    top: 471,
    left: 28,
  },
  farmergmailcom: {
    top: 425,
    left: 70,
  },
  signUp: {
    top: 592,
    left: 158,
  },
  indomay181Icon: {
    top: 103,
    left: 56,
    width: 278,
    height: 248,
    position: "absolute",
  },
  iphone13144: {
    backgroundColor: Color.bGPrimary,
    flex: 1,
    width: "100%",
    height: 844,
    overflow: "hidden",
  },
});

export default IPhone1314;
