import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import './NotFound.scss';
import { AnimationPage, PageTranstition } from '../../Animation/Animation';

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
          <div className="notFound__wrapper">notFound</div>
        </div>
      </motion.section>
    </Layout>
  );
};
