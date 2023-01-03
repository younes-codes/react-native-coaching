import {StyleSheet, View} from "react-native";
import UserGroups from "../../components/UserGroups";

const GroupsScreen = () => {
    return <View style={styles.bg}>
        <UserGroups/>
    </View>
}

export default GroupsScreen;

const styles = StyleSheet.create({
    bg: {flex: 1}
})
