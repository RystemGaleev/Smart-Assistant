import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import { AnimationPage, PageTranstition } from '../../Animation/Animation';
import './NotFound.scss';
import { SideBar } from '../../components/SideBar/SideBar';

export const NotFound = () => {
  return (
    <Layout>
      <motion.section
        className="notFound"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <SideBar />
          <div className="notFound__info">
            <h2 className="title">Not Found</h2>
          </div>
          <div className="notFound__wrapper">
            <div className="notFound__error">404</div>
            <div className="notFound__title">Unfortunately, I have not found such a page, but I can suggest others</div>
          </div>
        </div>
      </motion.section>
    </Layout>
  );
};
