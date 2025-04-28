import { storesContext } from "../RootStore.ts";
import { useContext } from "react";

export const useRootStore = () => useContext(storesContext);
