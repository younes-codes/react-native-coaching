import {StyleSheet, View} from "react-native";
import ItemMenuTitle from "../../components/UI/ItemMenuTitle";

const ProfileScreen = () => {
    return <View style={styles.bg}>
        <ItemMenuTitle children='bons plans'/>
    </View>
}

export default ProfileScreen;


const styles = StyleSheet.create({
    bg: {flex: 1}
})
