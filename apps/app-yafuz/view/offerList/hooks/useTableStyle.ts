import { useEffect, useState } from 'react';
import { InitConfigTable } from 'ui';
import { TDefaultTheme } from '../../../../../lib/ui/theme/themeSchema';

export const useTableStyle = ({
  keyDeps
}: {
  keyDeps?: (number | TDefaultTheme | undefined)[];
}) => {
  const [mount, setMount] = useState(false);
  // Only For Table
  useEffect(() => {
    InitConfigTable.configStyles({
      body: {
        rowHeight: 120
      }
    });
    setMount(true);
  }, [keyDeps]);

  return { mount };
};
