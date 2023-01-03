import {User} from "../store";

export const getImc = (user: User): number => {
    const height = user.height;
    const weight = user.weight;
    const h = height / 100;
    return +((weight) / (h * h)).toFixed(1);
}
