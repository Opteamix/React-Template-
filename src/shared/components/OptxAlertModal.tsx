import styled from "styled-components";
import { Button } from "@mui/material";
import OptxModal, { StyledDialogContent, StyledDialogTitle } from "./OptxModal";

export interface OptxModalProps {
  open: boolean;
  title?: string;
  width?: string;
  subtitle?: string;
  cancelButtonText?: string;
  buttonText?: string;
  hideFooter?: boolean;
  children?: JSX.Element | JSX.Element[];
  footer?: JSX.Element;
  hideCancel?: boolean;
  onConfirm?(): void;
  onClose?(): void;
}

export const ModalFooter = styled.div<{ margin?: string }>`
  gap: 15px;
  display: flex;
  justify-content: flex-end;
  margin: ${({ margin }) => margin || "16px 0"};
`;

const OptxAlertModal = ({
  title,
  open = true,
  hideFooter,
  cancelButtonText,
  buttonText,
  onConfirm,
  onClose,
  children,
  footer,
  width,
  hideCancel,
}: OptxModalProps) => {
  return (
    <OptxModal
      open={open}
      fullWidth
      dialogWidth={width || "1000px"}
      onClose={() => onClose?.()}
    >
      {title && <StyledDialogTitle variant="h6">{title}</StyledDialogTitle>}

      <StyledDialogContent>
        {children}

        {!hideFooter && (
          <ModalFooter>
            {!hideCancel && (
              <Button variant="outlined" onClick={onClose}>
                {cancelButtonText || "Cancel"}
              </Button>
            )}

            <Button
              type="submit"
              variant="contained"
              onClick={() => onConfirm?.()}
            >
              {buttonText || "Confirm"}
            </Button>
          </ModalFooter>
        )}
      </StyledDialogContent>

      {footer}
    </OptxModal>
  );
};

export default OptxAlertModal;
