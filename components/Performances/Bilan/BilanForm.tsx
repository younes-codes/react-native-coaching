import {StyleSheet, Text, View} from "react-native";
import ItemMenuTitle from "../../UI/ItemMenuTitle";
import Input from "../../UI/Input";
import FlatButton from "../../UI/FlatButton";
import {Colors} from "../../../utils/colors";

const BilanForm = () => {
    return <View style={{flex: 1, alignItems: 'center', marginBottom: 80}}>
        <ItemMenuTitle children='bilan'/>
        <Text style={styles.weightText}>
            Poids actuel
        </Text>
        <View style={styles.weightContainer}>
            <Text style={styles.weight}> 75 kg</Text>
            <Text>- 2.3 kg</Text>
            <Text>en 7 jours</Text>
        </View>
        <Text style={styles.weightText}>
            Tour de bras
        </Text>
        <View style={styles.weightContainer}>
            <Text style={styles.weight}> 80 cm</Text>
        </View>

        <Input label='poids' textInputConfig={{
            placeholder: 'poids'
        }}/>
        <Input label='tours de bras' textInputConfig={{
            placeholder: 'tours de bras'
        }}/>
        <Input label='tours de taille' textInputConfig={{
            placeholder: 'tours de taille'
        }}/>
        <FlatButton onPress={() => null} children='enregistrez'/>
    </View>
}


export default BilanForm;

const styles = StyleSheet.create({
    weightText: {
        textAlign: 'center',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        fontSize: 16,
        marginTop: 20
    },
    weightContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        borderColor: Colors.primary400,
        borderRadius: 100,
        borderWidth: 10,
        width: 120,
        height: 120,
    },
    weight: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'rgb(232,173,24)',
        textAlign: 'center',
    }
})
