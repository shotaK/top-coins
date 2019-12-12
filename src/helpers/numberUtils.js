import isNumber from "lodash.isnumber";

export const formatAsMoney = (number, precision = 2) => {
  if (!isNumber(number)) {
    return 0;
  }

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: precision,
    maximumFractionDigits: precision
  });

  return formatter.format(number);
};
