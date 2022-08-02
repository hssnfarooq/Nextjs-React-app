import Footer from '../footer';
import Header from '../header';
import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const Default = ({ children }: Props) => (
  <>
    <Header />
    {children}
    <Footer />
  </>
);

export default Default;
