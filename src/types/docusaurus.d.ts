declare module '@docusaurus/Link' {
  import { ComponentType, PropsWithChildren } from 'react';

  interface DocusaurusLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    to: string;
  }

  const Link: ComponentType<PropsWithChildren<DocusaurusLinkProps>>;
  export default Link;
}


declare module '@docusaurus/useDocusaurusContext' {
  function useDocusaurusContext(): { siteConfig: any };
  export default useDocusaurusContext;
}

declare module '@theme/Layout' {
  import { ComponentType, PropsWithChildren } from 'react';
  const Layout: ComponentType<PropsWithChildren<any>>;
  export default Layout;
}

declare module '@theme/Heading' {
  import { ComponentType, PropsWithChildren } from 'react';
  const Heading: ComponentType<PropsWithChildren<any>>;
  export default Heading;
}

// You can add more @theme/... modules here as needed
