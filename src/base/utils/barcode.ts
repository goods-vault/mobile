import { BarcodeType } from "../../constants/barcode.ts";

export const validateEanCode = (code: string) => {
  const checksum = parseInt(code[code.length - 1] as string);
  code = code.slice(0, -1);

  let realChecksum = 0;
  for (let i = code.length - 1, j = 0; i >= 0; i--, j++) {
    if (j % 2 === 0) {
      realChecksum += parseInt(code[i]) * 3;
    } else {
      realChecksum += parseInt(code[i]);
    }
  }

  realChecksum = realChecksum % 10;
  if (realChecksum !== 0) {
    realChecksum = 10 - realChecksum;
  }

  return realChecksum === checksum;
};

export const determineBarcodeType = (code: string) => {
  if (!validateEanCode(code)) {
    return null;
  }

  switch (code.length) {
    case 8:
      return BarcodeType.EAN8;
    case 13:
      return BarcodeType.EAN13;
    default:
      return null;
  }
};
