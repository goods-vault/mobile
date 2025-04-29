import { LastChangeDate } from "../../modules/products/types/product";

export const dateObjectToString = (date: LastChangeDate | undefined): string => {
  if (!date) {
    return "";
  }

  const { year, month, day, hour, minute, second, timezone } = date;
  const localDate = new Date(Date.UTC(year, month - 1, day, hour - timezone / 60, minute, second));

  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  };

  return localDate.toLocaleString("ru-RU", options);
};
