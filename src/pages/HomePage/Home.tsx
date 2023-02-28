import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
import { SideBar } from '../../components/SideBar/SideBar';
import { MainSvg } from '../../components/UI/MainSvg';
import { AnimationPage, PageTranstition } from '../../Animation/Animation';
import './Home.scss';

export const Home = () => {
  return (
    <Layout>
      <motion.main
        className="main"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <SideBar />
          <div className="main__wrapper">
            <div className="main__info">
              <h1 className="main__title">
                <span>Smart Assistant </span> <br /> Your assistant for comfortable work
              </h1>
              <div className="main__descr">
                All the necessary information is always at hand, create and plan tasks, track them as they are completed
              </div>
            </div>

            <div className="main__doc">
              <MainSvg />
            </div>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
};
