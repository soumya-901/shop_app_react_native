import { View, Text, Image } from 'react-native'
import React from 'react'
import pageStyle from './style'

const EachCard = ({ value }: any) => {
    console.log(value)
    return (
        <View style={[pageStyle.eachCard, pageStyle.shadowPro]} >
            <Image source={{ uri: value.item.image }}
                style={{ width: 200, height: 200, borderRadius: 20, marginBottom: 10 }} />
            <Text style={{ fontSize: 25, color: "black" }} > {value.item.title}</Text>
        </View>
    )
}

export default EachCard