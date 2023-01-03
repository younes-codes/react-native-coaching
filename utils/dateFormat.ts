import {Plannings} from "./fetchPlannings";
import {User} from "../store";

export interface Session {
    when: string,
    session: string,
    time: string
}

export const formatDate = (dateEntered: Date): string => {
    return (dateEntered.getDate() + "/" + parseInt(String(dateEntered.getMonth() + 1)).toString() + "/" + dateEntered.getFullYear()).toString();
}

export const getAge = (dateString): number => {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}


export const hours = new Date().getHours();

export const frenchDay = (): string => {
    let day = new Date().getDay();

    if (hours >= 20) {
        day = day === 6 ? 0 : day + 1;
    }
    const frenchDay = {
        1: 'lundi',
        2: 'mardi',
        3: 'mercredi',
        4: 'jeudi',
        5: 'vendredi',
        6: 'samedi',
        0: 'dimanche',
    }[day];

    return frenchDay!;
}

export const getNextSession = (plannings: Plannings[], user: User) => {
    const day = frenchDay();
    const userPlanning = plannings[user.group - 1];
    if (hours >= 4 && hours <= 11) {
        return userPlanning[day][0];
    } else if (hours >= 12 && hours < 20) {
        return userPlanning[day][1];
    } else {
        return userPlanning[day][0];
    }
}


