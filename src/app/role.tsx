import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { roleStyles } from '@/styles/roleStyles'
import CustomText from '@/components/shared/CustomText'
import { router } from 'expo-router'

const Role = () => {
    const handelCustomerPress = () => {
        router.navigate('/customer/auth')
    }
    const handelCaptionPress = () => {
        router.navigate("/caption/auth")
    }
    return (
        <View style={roleStyles.container}>
            <Image
                source={require("@/assets/images/logo_t.png")}
                style={roleStyles.logo}

            />
            <CustomText fontFamily='Medium' variant='h6'>
                Choose your type
            </CustomText>
            <TouchableOpacity style={roleStyles.card} onPress={handelCustomerPress}>
                <Image
                    source={require("@/assets/images/customer.png")}
                    style={roleStyles.image}
                />
                <View style={roleStyles.cardContent}>
                    <CustomText style={roleStyles.title}>Customer</CustomText>
                    <CustomText style={roleStyles.description}>

                        Are you a customer? Order rides and deliveries easily.
                    </CustomText>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={roleStyles.card} onPress={handelCaptionPress}>
                <Image
                    source={require("@/assets/images/captain.png")}
                    style={roleStyles.image}
                />
                <View style={roleStyles.cardContent}>
                    <CustomText style={roleStyles.title}>Caption</CustomText>
                    <CustomText style={roleStyles.description}>

                        Are you a Caaption ? Join us drive and deliver.
                    </CustomText>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Role