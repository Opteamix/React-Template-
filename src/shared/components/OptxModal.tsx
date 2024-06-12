import styled, { css } from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogProps,
  DialogTitle,
  IconButton,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

export const CloseModalIcon = styled(IconButton)`
  && {
    top: 14px;
    right: 10px;
    position: absolute;
    margin: 5px;
    padding: 5px;

    svg {
      width: 20px;
      height: 20px;
      color: #0000004f;
    }
  }
`;

const StyledDialog = styled(Dialog)`
  && {
    margin: auto;

    .MuiPaper-root {
      max-width: 100%;
    }

    .MuiDialog-paper {
      margin: 18px;

      ${({ width, minwidth, maxwidth }: any) =>
        width &&
        css`
          width: ${width};
          min-width: ${minwidth};
          max-width: ${maxwidth};
        `};

      ${({ height }: any) =>
        height &&
        css`
          height: ${height};
          max-height: ${height};
        `};

      ${({ minheight }: any) => minheight && `min-height: ${minheight}`};
    }
  }
` as any;

export const StyledDialogTitle = styled(DialogTitle)`
  && {
    ${({ hidecloseicon }: any) =>
      !hidecloseicon &&
      css`
        margin-right: 16px;
      `}
  }
` as any;

export const StyledDialogContent = styled(DialogContent)`
  && {
    padding: 0 24px;
  }
`;

interface IAlertDialogProps extends DialogProps {
  onClose: () => void;
  dialogWidth?: string;
  dialogMinWidth?: string;
  dialogMaxWidth?: string;
  dialogHeight?: string;
  dialogMinHeight?: string;
  hideCloseIcon?: boolean;
}

const OptxModal = ({
  children,
  dialogWidth,
  dialogMinWidth,
  dialogMaxWidth,
  dialogHeight,
  dialogMinHeight,
  hideCloseIcon,
  onClose,
  ...props
}: IAlertDialogProps) => (
  <StyledDialog
    onClose={onClose}
    width={dialogWidth}
    minwidth={dialogMinWidth}
    maxwidth={dialogMaxWidth}
    height={dialogHeight}
    minheight={dialogMinHeight}
    {...props}
  >
    {children}

    {!hideCloseIcon && (
      <CloseModalIcon aria-label="close modal window" onClick={onClose}>
        <Clear />
      </CloseModalIcon>
    )}
  </StyledDialog>
);

export default OptxModal;
