import React, {} from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'

const MeetScreen = () => {
    return (
        <View style={{
            backgroundColor: "white",
            flex: 1,
            paddingHorizontal: 20,
            paddingVertical: 20
        }}>
        <View style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        }}>
            <TouchableOpacity style={{
                paddingVertical: 5,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#095ee6",
                width: 150
            }}>
                <Text style={{
                    color: "white",
                    letterSpacing: 1,
                    fontWeight: "bold"
                }}>New Meeting</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                paddingVertical: 5,
                borderRadius: 5,
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "white",
                borderWidth: 0.5,
                borderColor: "grey",
                width: 150
            }}>
                <Text style={{
                    color: "#095ee6",
                    letterSpacing: 1,
                    fontWeight: "bold"
                }}>Join with a code</Text>
            </TouchableOpacity>
        </View>
            <Image 
                source={(require("../assets/call.png"))}
                style={{
                    width: "100%",
                    height: 200,
                    marginTop: 100
                }}
            />
        </View>
    )
}

export default MeetScreen