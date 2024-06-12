import { OptionsObject, SnackbarKey, SnackbarMessage, useSnackbar, VariantType } from 'notistack';
import { useEffect } from 'react';

const defaultOptions: OptionsObject = {
  preventDuplicate: true,
  anchorOrigin:     {
    vertical:   'top',
    horizontal: 'right',
  },
  style:            {
    whiteSpace: 'pre-line'
  }
};

export const OptxNotistack: any = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(
    () => {
      OptxNotistack.enqueueSnackbar = (
        message: SnackbarMessage,
        variant?: VariantType,
        options?: OptionsObject
      ) => {
        enqueueSnackbar(
          message, {
            ...defaultOptions,
            ...options,
            variant
          }
        );
      };

      OptxNotistack.successMessage = (message: string) => {
        enqueueSnackbar(message, {
          ...defaultOptions,
          variant: 'success'
        })
      };

      OptxNotistack.infoMessage = (message: string) => {
        enqueueSnackbar(message, {
          ...defaultOptions,
          variant: 'info'
        })
      };

      OptxNotistack.generalError = (message = 'Something went wrong. \nPlease try again later.') => {
        enqueueSnackbar(message, {
          ...defaultOptions,
          variant: 'error'
        })
      };
    },
    [enqueueSnackbar],
  );

  useEffect(
    () => {
      OptxNotistack.closeSnackbar = (key?: SnackbarKey) => {
        closeSnackbar(key);
      };
    },
    [closeSnackbar],
  );

  return null;
};
