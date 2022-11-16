import { useEffect, useState } from 'react';
import { InitConfigTable, TDefaultTheme } from 'ui';

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
