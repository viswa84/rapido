import { View, SafeAreaView, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { authStyles } from '@/styles/authStyles';
import { commonStyles } from '@/styles/commonStyles';
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import CustomText from '@/components/shared/CustomText';
import PhoneInput from '@/components/shared/PhoneInput';
import CustomButton from '@/components/shared/CustomButton';
import { resetAndNavigate } from '@/utils/Helpers';
const Auth = () => {
  const [phone, setPhone] = useState("");
  const handleNext = () => {
    resetAndNavigate('/customer/home')
  }
  return (
    <SafeAreaView style={authStyles.container}>
      <ScrollView contentContainerStyle={authStyles.container}>
        <View style={commonStyles.flexRowBetween}>
          <Image source={require("@/assets/images/captain_logo.png")} style={authStyles.logo} />
          <TouchableOpacity style={authStyles.flexRowGap}>
            <MaterialIcons name='help' size={18} color={"grey"} />
            <CustomText fontFamily='Medium' variant='h7'>
              Help
            </CustomText>
          </TouchableOpacity>
        </View>
        <CustomText fontFamily='Medium' variant='h6'>
  Good to see you, Caption!
        </CustomText>
        <CustomText fontFamily='Regular' variant='h7' style={commonStyles.lightText}>
          Enter your number to procced
        </CustomText>

        <PhoneInput

          onChangeText={setPhone}
          value={phone}
        />

      </ScrollView>
      <CustomText fontFamily="Regular" variant="h8" style={commonStyles.lightText, { textAlign: "center", maginHorizontal: 20 }}>
        By continuinng , you agreee to the terms and privacy policy of Rapido
      </CustomText>

      <CustomButton
        title="Next"
        onPress={handleNext}
        loading={false}
        disabled={false}
      />
    </SafeAreaView>
  )
}

export default Auth