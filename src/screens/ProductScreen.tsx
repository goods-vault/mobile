import {GoodsStackParamList} from "../navigation/types.ts";
import {RouteProp} from "@react-navigation/native";

type ProductScreenProps = {
    route: RouteProp<GoodsStackParamList, "Product">;
};

const ProductScreen = ({ route }: ProductScreenProps) => {

    return (
        <></>
    );
};


export default ProductScreen;
