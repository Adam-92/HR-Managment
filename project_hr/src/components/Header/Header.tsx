import { Helmet } from 'react-helmet-async';

type HeaderProps = {
  title: string;
};

export const Header = ({ title }: HeaderProps) => {
  return (
    <Helmet>
      <title>{title}</title>
    </Helmet>
  );
};
