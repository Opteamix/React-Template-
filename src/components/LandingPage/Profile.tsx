import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import styled, { css } from "styled-components";

interface ProfileProps {
  open: boolean;
  handleClose: () => void;
}

interface IStyledDialogProps {
  width: string;
  height: string;
}

const CloseIconContainer = styled.div`
  display: flex;
  justify-content: end;
`;

const StyledDialog = styled(Dialog)<IStyledDialogProps>`
  && {
    margin: auto;

    .MuiPaper-root {
      max-width: 100%;
    }

    .MuiDialog-paper {
      margin: 18px;

      ${({ width }) =>
        css`
          width: ${width};
        `};

      ${({ height }) =>
        height &&
        css`
          height: ${height};
          max-height: ${height};
        `};
    }
  }
`;

const Profile = ({ open, handleClose }: ProfileProps) => {
  return (
    <StyledDialog
      width="400px"
      height="400px"
      onClose={handleClose}
      open={open}
    >
      <CloseIconContainer>
        <CloseIcon onClick={handleClose} />
      </CloseIconContainer>
      <p>Profile Content</p>
    </StyledDialog>
  );
};

export default Profile;
