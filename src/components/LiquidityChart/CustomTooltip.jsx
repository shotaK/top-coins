import React from "react";
import { bool, array } from "prop-types";
import get from "lodash.get";
import DefaultTooltipContent from "recharts/lib/component/DefaultTooltipContent";

const CustomTooltip = props => {
  if (!props.active) {
    return null;
  }

  const newPayload = [
    {
      name: "Name",
      value: get(props, "payload[0].payload.name")
    },
    ...props.payload
  ];

  return <DefaultTooltipContent {...props} payload={newPayload} />;
};

CustomTooltip.propTypes = {
  active: bool,
  payload: array
};

export default CustomTooltip;
