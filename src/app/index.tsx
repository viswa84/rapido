import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { commonStyles } from "@/styles/commonStyles";
import { splashStyles } from "@/styles/splashStyles";
import CustomText from "@/components/shared/CustomText";
import { useFonts } from 'expo-font';
import { resetAndNavigate } from "@/utils/Helpers"
const Main = () => {

  const [loaded] = useFonts({
    Bold: require('../assets/fonts/NotoSans-Bold.ttf'),
    Regular: require('../assets/fonts/NotoSans-Regular.ttf'),
    Medium: require('../assets/fonts/NotoSans-Medium.ttf'),
    Light: require('../assets/fonts/NotoSans-Light.ttf'),
    SemiBold: require('../assets/fonts/NotoSans-SemiBold.ttf'),
  });

  const [hasNavigated, setHasNavigated] = useState(false);
  const tokenCheck = async () => {
    resetAndNavigate("/role")

  }
  useEffect(() => {
    if (loaded && !hasNavigated) {
      const timeoutId = setTimeout(() => {
        tokenCheck();
        setHasNavigated(true);
      }, 1000);
      return () => {
        clearTimeout(timeoutId);
      }
    }
  }, [hasNavigated, loaded]);
  return (
    <View style={commonStyles.container}>
      <Image source={require("@/assets/images/logo_t.png")} style={splashStyles.img} />
      <CustomText variant="h5" fontFamily="Medium" style={splashStyles.text}>
        Made in Bharat  🇮🇳
      </CustomText>
    </View>
  )
}

export default Main