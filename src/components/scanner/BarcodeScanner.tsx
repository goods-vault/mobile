import { Camera, CameraDevice, Code, useCodeScanner } from "react-native-vision-camera";
import { StyleSheet, View } from "react-native";
import { useRef, useState } from "react";
import { REQUIRED_SCANS_TO_APPROVE } from "../../constants/scanner.ts";
import { observer } from "mobx-react";
import { useRootStore } from "../../hooks/useRootStore.tsx";
import Navigation from "../../base/Navigation.ts";
import { Modalize, useModalize } from "react-native-modalize";
import { Portal } from "react-native-portalize";
import CircleButtonWithIcon from "../buttons/CircleButtonWithIcon.tsx";
import BarcodeForm from "./BarcodeForm.tsx";
import { BarcodeType } from "../../constants/barcode.ts";
import { IColors } from "../../modules/theme/ThemeTypes.ts";
import { useTheme } from "../../modules/theme/hooks/useTheme.ts";


type BarcodeScannerProps = {
  device: CameraDevice;
};

const BarcodeScanner = observer(({ device }: BarcodeScannerProps) => {
  const [scannedCode, setScannedCode] = useState<Code>();
  const scanCount = useRef(0);
  const { productsStore } = useRootStore();
  const { ref, open, close } = useModalize();
  const { Colors } = useTheme();
  const styles = useStyles(Colors);

  const handleScannedCode = async (code: Code) => {
    if (productsStore.isLoading) {
      return;
    }

    if (code.value === scannedCode?.value) {
      scanCount.current++;
    } else {
      setScannedCode(code);
      scanCount.current = 1;
    }

    if (scanCount.current >= REQUIRED_SCANS_TO_APPROVE) {
      scanCount.current = 0;

      let finalCode: string = "";
      if (code.type === "ean-13") {
        finalCode = `0${code.value || ""}`;
      } else if (code.type === "ean-8") {
        finalCode = code.value || "";
      }

      console.debug(`Scanned code: ${code.value} (${code.type}).`);

      Navigation.navigate("Tab", {
        screen: "GoodsStack",
        params: {
          screen: "Product",
          params: { code: finalCode },
        },
      });
    }
  };

  const codeScanner = useCodeScanner({
    codeTypes: [BarcodeType.EAN8, BarcodeType.EAN13],
    onCodeScanned: (codes) => codes.map(handleScannedCode),
  });

  return (
    <>
      <View style={styles.fullHeight}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
          codeScanner={codeScanner}
        />
        <View style={styles.buttonContainer}>
          <CircleButtonWithIcon
            icon="edit-3"
            buttonSize={48}
            iconSize={24}
            onPress={() => open()}
          />
        </View>
      </View>
      <Portal>
        <Modalize
          ref={ref}
          modalStyle={styles.modal}
          childrenStyle={styles["p-20"]}
          scrollViewProps={{
            keyboardShouldPersistTaps: "handled",
          }}
          adjustToContentHeight
        >
          <BarcodeForm onSubmit={close} />
        </Modalize>
      </Portal>
    </>
  );
});

const useStyles = (colors: IColors) => StyleSheet.create({
  fullHeight: {
    height: "100%",
  },
  buttonContainer: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    padding: 20,
  },
  modal: {
    backgroundColor: colors.backgroundPrimary,
  },
  "p-20": {
    padding: 20,
  },
});

export default BarcodeScanner;
