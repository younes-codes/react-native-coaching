import axios from "axios";
import {URL} from "./http";
import AsyncStorage from "@react-native-async-storage/async-storage";

export interface Plannings {
    [day: string]: { session: string; when: string; time: string }[];
}


interface ServerResponse {
    plannings: {
        plannings: Plannings[];
    }
}


export const fetchPlanningsDataAndStorageSaved = async (): Promise<Plannings[]> => {
    const response = await axios.get<ServerResponse>(`${URL}/planning/get-plannings`);
    try {
        const planningResponse = response.data.plannings.plannings;
        AsyncStorage.setItem('plannings', JSON.stringify(planningResponse));
        return planningResponse;
    } catch (e) {
        console.log(e)
    }
    const planningStored = await AsyncStorage.getItem('plannings');
    return JSON.parse(planningStored!);
}


