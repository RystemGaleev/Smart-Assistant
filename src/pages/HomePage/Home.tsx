import { Layout } from '../../Layout/Layout';
import { motion } from 'framer-motion';
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
              <div className="main__column">
                <h3 className="main__subtitle">Tast Manager</h3>
                <div className="main__text">
                  The Task Manager is an ideal solution for those who want to stay organized and monitor the progress of their
                  projects. This allows you to easily manage tasks, create cards with specific details, assign names and
                  descriptions, change the status of existing tasks, delete unnecessary tasks and track progress as they are
                  completed. You can filter cards by their completion status.
                </div>
              </div>
              <div className="main__column">
                <h3 className="main__subtitle">Library</h3>
                <div className="main__text">
                  The Library allows users to store a variety of useful content, such as messages, information, interesting
                  topics, useful links and much more. It provides an easy way to manage and organize all the information you want
                  to keep. Additionally, you can customize the library with tags to help you quickly search by content. You can
                  filter cards by their completion status and search by their title or description
                </div>
              </div>
              <div className="main__column">
                <h3 className="main__subtitle">Weather</h3>
                <div className="main__text">
                  The Weather provides users with an interactive and easy-to-use interface to get information about the current
                  weather in any country or city. The weather tab displays detailed information such as temperature, wind speed,
                  humidity, and precipitation for the current day. The interface is designed to be user-friendly, providing him
                  with the necessary information quickly and efficiently.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.main>
    </Layout>
  );
};
