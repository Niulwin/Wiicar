import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import { FC } from 'react';

export const BreadcrumbsComponent: FC<{
  children?: any;
  crumbs?: Array<{ href: string; text: string }>;
}> = ({ crumbs = [], children }) => {
  //Breadcrumbs according to parameters
  const Crumbs = ({ text, href, last = false }: any) => {
    if (last) {
      return <Typography color="text.primary">{text}</Typography>;
    }
    return (
      <Link underline="hover" color="inherit" href={href}>
        {text}
      </Link>
    );
  };

  return (
    <Breadcrumbs
      separator={<FontAwesomeIcon icon="angle-right" color="#000" size="sm" />}
    >
      {children ||
        crumbs.map((crumb, i) => (
          <Crumbs {...crumb} key={i} last={i === crumbs.length - 1} />
        ))}
    </Breadcrumbs>
  );
};
