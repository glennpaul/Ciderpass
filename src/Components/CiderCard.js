import React from "react"
import {View, Text, StyleSheet, Image} from "react-native"


const styles = StyleSheet.create({
    container: {
        display: "flex",
        marginBottom: 20,
        borderBottomColor: "red",
        borderBottomWidth: 3,
        padding: 20
    },
    upperRow: {
        display: "flex",
        flexDirection: "row",
        marginBottom: 15
    },
    ciderSymbol: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 5
    },
    ciderName: {
        marginTop: 10,
        marginLeft: 5,
        marginRight: 20
    },
    ciderProperties: {
        marginTop: 10,
        marginLeft: "auto",
        marginRight: 10,
        fontWeight: "bold"
    }
})


const {
    container,
    upperRow,
    ciderSymbol,
    ciderName,
    ciderProperties
} = styles


const CiderCard = ({
    ciderSymbol,
    ciderName,
    ciderProperties
}) => {
    return (
        <View style={container}>
            <View style={upperRow}>
                <Image></Image>
            </View>
        </View>
    )
}

export default CiderCard