import {
    createNativeStackNavigator,
    NativeStackScreenProps
} from "@react-navigation/native-stack";

export type RootStackParamList = {
    Login: undefined;
    Signin: undefined;
    PersonalData: undefined;
    SexData: undefined;
    WeightAndHeight: undefined,
    HomeApp: undefined,
    Feed: undefined,
    DateOfBirth: undefined,
    Group: undefined
};

export type Props = NativeStackScreenProps<RootStackParamList>;

export const Stack = createNativeStackNavigator<RootStackParamList>();

