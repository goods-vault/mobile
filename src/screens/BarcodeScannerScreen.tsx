import { useCameraDevice, useCameraPermission } from "react-native-vision-camera";
import NoCamera from "../components/scanner/NoCamera.tsx";
import BarcodeScanner from "../components/scanner/BarcodeScanner.tsx";
import NoCameraAccess from "../components/scanner/NoCameraAccess.tsx";
import { useEffect } from "react";
import { observer } from "mobx-react";

const BarcodeScannerScreen = observer(() => {
  const device = useCameraDevice("back");
  const { hasPermission, requestPermission } = useCameraPermission();

  useEffect(() => {
    if (!hasPermission) {
      requestPermission();
    }
  }, [hasPermission, requestPermission]);


  if (!device) {
    return <NoCamera />;
  }
  if (!hasPermission) {
    return <NoCameraAccess />;
  }
  return <BarcodeScanner device={device} />;
});

export default BarcodeScannerScreen;
