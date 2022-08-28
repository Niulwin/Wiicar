export const generateBreadCrumbs = (asPath: string) => {
  //get route from url
  const arrPathname = asPath.split('/');
  return arrPathname.map((x, i) => ({
    href: `${arrPathname.slice(0, i + 1).join('/')}`,
    text: x || 'home'
  }));
};
