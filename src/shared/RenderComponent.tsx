import { styled } from "styled-components";
import CopyToClipboard from "react-copy-to-clipboard";
import reactElementToJSXString from "react-element-to-jsx-string";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import CardContent from "@mui/material/CardContent";

export const CustomCard = styled(Card)<{ width?: string; height?: string }>`
  width: ${({ width }) =>
    width ? (width === "auto" ? "auto" : `${width}px`) : "300px"};
  height: ${({ height }) => (height ? height : 200)}px;
  margin: 10px;
  .MuiCardHeader-title {
    text-align: left;
    color: #000;
    font-size: 18px;
    font-weight: normal;
    line-height: 1.15;
  }
`;

interface RenderComponentProps {
  title: string;
  component: string | (() => JSX.Element);
  width?: string;
  height?: string;
  children: React.ReactNode;
}

const RenderComponent = ({
  title,
  component,
  width,
  height,
  children,
}: RenderComponentProps) => {
  return (
    <CustomCard width={width} height={height}>
      <CardHeader
        title={title}
        action={
          <CopyToClipboard
            text={
              typeof component === "string"
                ? component
                : reactElementToJSXString(component(), {
                  useBooleanShorthandSyntax: false,
                })
            }
          >
            <Tooltip title="Copy">
              <IconButton aria-label="copy">
                <ContentCopyIcon />
              </IconButton>
            </Tooltip>
          </CopyToClipboard>
        }
      />
      <CardContent>{children}</CardContent>
    </CustomCard>
  );
};

export default RenderComponent;
