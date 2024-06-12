import { PropsWithChildren } from "react";
import Tooltip from "@mui/material/Tooltip";

interface OptxTooltipProps extends PropsWithChildren {
  title: string;
  arrow?: boolean;
  placement:
    | "bottom-end"
    | "bottom-start"
    | "bottom"
    | "left-end"
    | "left-start"
    | "left"
    | "right-end"
    | "right-start"
    | "right"
    | "top-end"
    | "top-start"
    | "top";
  children: React.ReactElement;
}

const OptxTooltip = ({
  title,
  arrow = false,
  placement = "top",
  children,
}: OptxTooltipProps) => {
  return (
    <Tooltip title={title} arrow={arrow} placement={placement}>
      {children}
    </Tooltip>
  );
};

export default OptxTooltip;
