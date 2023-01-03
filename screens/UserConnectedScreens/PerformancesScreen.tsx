import {useState} from "react";
import {Text, View} from "react-native";
import PerformancesView from "../../components/Performances/PerformancesView";
import RegisterPerformances
    from "../../components/Performances/RegisterPerformances/RegisterPerformances";

const getKmh = (toursNum: string): number => ((+toursNum * 100) / (12 * 60)) * 3.6;

const PerformancesScreen = () => {
    const [registerOpen, setRegisterOpen] = useState(false);
    const [session, setSession] = useState<string>('');
    const getSessionHandler = (sessionItem: string) => {
        setSession(sessionItem)
        setRegisterOpen(true);
    }

    const closeRegisterHandler = () => setRegisterOpen(false);

    const screen = registerOpen ?
        <RegisterPerformances
            onCloseRegister={closeRegisterHandler}
            session={session}
        /> :
        <PerformancesView
            getSessionItem={getSessionHandler}
            key='performancesView'
        />


    return <View style={{flex: 1}}>
        {screen}
    </View>

}

export default PerformancesScreen;

// const styles = StyleSheet.create()
