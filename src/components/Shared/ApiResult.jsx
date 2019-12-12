import React from "react";
import { bool, object, node } from "prop-types";
import { useTranslation } from "react-i18next";
import get from "lodash.get";

const ApiResult = ({ pending, error, coinsList, children }) => {
  const { t } = useTranslation();

  if (pending) {
    return <p>{t("loading")}</p>;
  }

  if (error) {
    return error.error;
  }

  if (get(coinsList, "data", []).length > 0) {
    return children;
  }

  return <p>{t("noResults")}</p>;
};

ApiResult.propTypes = {
  pending: bool,
  error: object,
  coinsList: object,
  children: node.isRequired
};

export default ApiResult;
