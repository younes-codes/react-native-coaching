import axios from "axios";
import {URL} from "./http";

export const fetchFractionne = async (userId: string) => {
    const response = await axios.get(`${URL}/performances/get-fractionne/${userId}`);
    try {
        return response;
    } catch (e) {
        console.log(e)
    }
}
