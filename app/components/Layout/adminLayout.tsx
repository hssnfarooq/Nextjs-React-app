import Footer from '../footer';
import Header2 from '../header2';
// import styles from './Default.module.scss';

type Props = {
  children: React.ReactNode;
};

const AdminLayout = ({ children }: Props) => (
  <>
    <div className="main-pages">
    <Header2 />
    {children}
    <Footer />
    </div>
  </>
);

export default AdminLayout;
