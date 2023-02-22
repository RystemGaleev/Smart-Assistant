import { Layout } from '../../Layout/Layout';
import './Home.scss';

export const Home = () => {
  return (
    <Layout>
      <main className="main">
        <div className="container">
          <div className="main__wrapper">
            <div className="main__info">
              <h1 className="main__title">
                <span>Smart Assistant </span> - Your assistant for comfortable work
              </h1>
              <div className="main__descr">
                All the necessary packages and libraries are always at hand, create and plan tasks,
                track them as they are completed
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};
