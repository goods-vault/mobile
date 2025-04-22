import { createRef } from "react";
import { NavigationContainerRef } from "@react-navigation/native";


export default class Navigation {
    static navigationRef = createRef<NavigationContainerRef<any>>();

    static navigate = <ParamList extends {}>(
        routeName: string | keyof ParamList,
        params?: ParamList[keyof ParamList] | {
            screen: keyof ParamList;
            params?: ParamList[keyof ParamList]
        }) => {
        setTimeout(() => this.navigationRef.current?.navigate(routeName as any, params as any), 0);
    };

    static replace = (routeName: string, params?: any) => {
        setTimeout(
            () =>
                this.navigationRef.current?.reset({
                    index: 0,
                    routes: [{ name: routeName, params: params }],
                }),
            0,
        );
    };

    static pop = () => {
        this.navigationRef.current?.goBack();
    };
};
