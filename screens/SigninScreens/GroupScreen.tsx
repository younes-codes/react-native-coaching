import {StyleSheet, View} from "react-native";
import GroupForm from "../../components/Signin/GroupForm";

const GroupScreen = () => {
    return <View style={styles.container}>
        <GroupForm/>
    </View>
}

export default GroupScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
