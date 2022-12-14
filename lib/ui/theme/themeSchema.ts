export type TDefaultTheme = {
  key: 'light' | 'dark';
  colors: TColors;
};
export type TColors = {
  background: {
    main: string;
    secondary: string;
  };
  primary: {
    main: string;
    secondary: string;
  };
  secondary: {
    main: string;
    secondary: string;
  };
  text: {
    primary: string;
    secondary: string;
    textPrimary: string;
    textSecondary: string;
    light: string;
    error: string;
    warning: string;
    info: string;
    success: string;
    disabled: string;
  };
  border: {
    main: string;
    secondary: string;
  };
  disabled: {
    main: string;
    secondary: string;
  };
  error: {
    main: string;
    secondary: string;
  };
  warning: {
    secondary: string;
    main: string;
  };
  info: {
    main: string;
    secondary: string;
  };
  success: {
    main: string;
    light: string;
  };
};
export const lightTheme: TDefaultTheme = {
  key: 'light',
  colors: {
    background: {
      main: '#fafafa',
      secondary: '#0a1929'
    },
    text: {
      primary: '#E63020',
      secondary: '#7367f0',
      textPrimary: '#666666',
      textSecondary: '#ffffff',
      light: '#ffffff',
      error: '#f44336',
      warning: '#ffb74d',
      info: '#90caf9',
      success: '#25D366',
      disabled: '#bfbfbf'
    },
    primary: {
      main: '#E63020',
      secondary: '#7367f0'
    },
    secondary: {
      main: '#7367f0',
      secondary: '#7367f0'
    },
    border: {
      main: '#C5CBDA',
      secondary: '#c2e0ff14'
    },
    disabled: {
      main: '#bfbfbf',
      secondary: '#bfbfbf'
    },
    error: {
      main: '#f44336',
      secondary: '#e57373'
    },
    warning: {
      secondary: '#ffa726',
      main: '#ffb74d'
    },
    info: {
      main: '#29b6f6',
      secondary: '#4fc3f7'
    },
    success: {
      main: '#25D366',
      light: '#81c784'
    }
  }
};

export const darkTheme: TDefaultTheme = {
  key: 'dark',
  colors: {
    background: {
      main: '#0A1929',
      secondary: '#ffffff'
    },
    text: {
      primary: '#E63020',
      secondary: '#7367f0',
      textPrimary: '#ffffff',
      textSecondary: '#1e2329',
      light: '#ffffff',
      error: '#f44336',
      warning: '#f57c00',
      info: '#90caf9',
      success: '#388e3c',
      disabled: '#bfbfbf'
    },
    primary: {
      main: '#E63020',
      secondary: '#7367f0'
    },
    secondary: {
      main: '#7367f0',
      secondary: '#35a8df'
    },
    border: {
      main: '#c2e0ff14',
      secondary: '#ffffff'
    },
    disabled: {
      main: '#bfbfbf',
      secondary: '#bfbfbf'
    },
    error: {
      main: '#d32f2f',
      secondary: '#f44336'
    },
    warning: {
      secondary: '#f57c00',
      main: '#ffa726'
    },
    info: {
      main: '#0288d1',
      secondary: '#4fc3f7'
    },
    success: {
      main: '#388e3c',
      light: '#66bb6a'
    }
  }
};
