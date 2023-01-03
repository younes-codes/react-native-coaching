import {ImageBackground, Pressable, StyleSheet, Text, View} from "react-native";

const PerformancesView = (props: { getSessionItem: (arg0: string) => void; }) => {
    const onPressHandler = (session: string) => {
        props.getSessionItem(session);
    }

    return <View style={{flex: 1}}>
        <ImageBackground source={require('../../assets/images/beach.jpg')}
                         resizeMode="cover" style={styles.container}>
            <Pressable onPress={onPressHandler.bind(null, 'plage')} style={styles.button}>
                <Text style={styles.text}>plage</Text>
            </Pressable>
        </ImageBackground>

        <ImageBackground source={require('../../assets/images/fractionne.jpg')}
                         resizeMode="cover" style={styles.container}>
            <Pressable onPress={onPressHandler.bind(null, 'fractionne')}
                       style={styles.button}>
                <Text style={styles.text}>fractionné</Text>
            </Pressable>
        </ImageBackground>

        <ImageBackground source={require('../../assets/images/musculation.jpg')}
                         resizeMode="cover" style={styles.container}>
            <Pressable onPress={onPressHandler.bind(null, 'musculation')}
                       style={styles.button}>
                <Text style={styles.text}>musculation</Text>
            </Pressable>
        </ImageBackground>
        <ImageBackground source={require('../../assets/images/hiit.jpg')}
                         resizeMode="cover" style={styles.container}>
            <Pressable onPress={onPressHandler.bind(null, 'hiit')} style={styles.button}>
                <Text style={styles.text}>hiit</Text>
            </Pressable>
        </ImageBackground>
    </View>

}

export default PerformancesView;

const styles = StyleSheet.create({
    button: {
        height: '100%',
        justifyContent: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: "rgba(0,0,0,0.37)",
    },
    text: {
        color: "white",
        fontSize: 42,
        letterSpacing: 3,
        textTransform: 'uppercase',
        lineHeight: 84,
        fontWeight: "bold",
        textAlign: "center",
    }
})
