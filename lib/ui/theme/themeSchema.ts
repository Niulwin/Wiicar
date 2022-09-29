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
      primary: '#FF5300',
      secondary: '#7367f0',
      textPrimary: '#666666',
      textSecondary: '#ffffff',
      light: '#ffffff',
      error: '#f44336',
      warning: '#e57373',
      info: '#90caf9',
      success: '#66bb6a',
      disabled: 'f44336'
    },
    primary: {
      main: '#f44336',
      secondary: '#7367f0'
    },
    secondary: {
      main: '#7367f0',
      secondary: '#7367f0'
    },
    border: {
      main: '#f1f1f1',
      secondary: '#e57373'
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
      main: '#66bb6a',
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
      primary: '#0A1929',
      secondary: '#7367f0',
      textPrimary: '#ffffff',
      textSecondary: '#1e2329',
      light: '#ffffff',
      error: '#f44336',
      warning: '#f57c00',
      info: '#90caf9',
      success: '#388e3c',
      disabled: 'f44336'
    },
    primary: {
      main: '#f44336',
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
