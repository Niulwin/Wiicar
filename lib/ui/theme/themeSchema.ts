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
      main: '#ffffff',
      secondary: '#0a1929'
    },
    text: {
      primary: '#FF5300',
      secondary: '#7367f0',
      textPrimary: '#666666',
      textSecondary: '#ffffff',
      light: '#ffffff'
    },
    primary: {
      main: '#f44336',
      secondary: '#7367f0'
    },
    secondary: {
      main: '#7367f0',
      secondary: '#a1a1a1'
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
      secondary: '#e57373',
      main: '#f44336'
    },
    info: {
      main: '#90caf9',
      secondary: '#e3f2fd'
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
      light: '#ffffff'
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
      main: '#c2e0ff14',
      secondary: '#ffffff'
    },
    error: {
      main: '#f44336',
      secondary: '#d32f2f'
    },
    warning: {
      secondary: '#e57373',
      main: '#f57c00'
    },
    info: {
      main: '#90caf9',
      secondary: '#0288d1'
    },
    success: {
      main: '#388e3c',
      light: '#66bb6a'
    }
  }
};
