import {Pressable, StyleSheet, Text, View} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import React from "react";
import {Colors} from "../../utils/colors";

const IconButton: React.FC<{ name: string; size: number, onPress: () => void }> =
    ({name, size, onPress, children}) => {
        return <View style={styles.container}>
            <Pressable
                onPress={onPress}
                android_ripple={{color: Colors.primary500}}
            >
                <Ionicons name={name} size={size} color="black"/>
                <Text>{children}</Text>
            </Pressable>
        </View>

    }

export default Ionicons;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red'
    },

})
