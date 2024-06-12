import { SnackbarKey, SnackbarProvider, MaterialDesignContent } from "notistack";
import { useRef } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { Close } from "@mui/icons-material";
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

const StyledMaterialDesignContent = styled(MaterialDesignContent)(() => ({
  '&.notistack-MuiContent-success': {
    backgroundColor: '#2D7738',
  },
  '&.notistack-MuiContent-error': {
    backgroundColor: '#970C0C',
  },
}));

const InfoIcon = styled(InfoOutlinedIcon)`
  margin-right: 8px;
  font-size: 20px;
`;

const OptxSnackbarProvider = ({ children }: any) => {
    const notistackRef = useRef<SnackbarProvider>(null);

    const onClickDismiss = (key: SnackbarKey) => () => {
        notistackRef.current?.closeSnackbar(key);
      };
      
    return (
        <SnackbarProvider
        ref={ notistackRef }
        maxSnack={ 3 }
        autoHideDuration={5000}
        iconVariant={ {
            info: (<InfoIcon/>)
          } }
        Components={{
          success: StyledMaterialDesignContent,
          error: StyledMaterialDesignContent,
        }}
        action={ (key) => (
            <IconButton
              size="small"
              onClick={ onClickDismiss(key) }
            >
              <Close htmlColor="#fff"/>
            </IconButton>
          ) }
      >{children}</SnackbarProvider>
    );
  };
  
  export default OptxSnackbarProvider;