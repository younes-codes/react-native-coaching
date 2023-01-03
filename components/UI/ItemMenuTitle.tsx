import {StyleSheet, Text} from "react-native";
import {Colors} from "../../utils/colors";

// @ts-ignore
const ItemMenuTitle = ({children}) => <Text style={styles.title}>{children}</Text>

export default ItemMenuTitle;
const styles = StyleSheet.create({
    title: {
        marginVertical: 12,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: Colors.accent600
    }
})
