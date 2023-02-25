import { Layout } from '../../Layout/Layout';
import './Doc.scss';

export const Doc = () => {
  return (
    <Layout>
      <section className="doc">
        <div className="container">
          <h2 className="title">Documentation</h2>
          <div className="doc__wrapper">
            <div className="doc__column">
              <h3 className="doc__title">Tast Manager</h3>
              <div className="doc__descr">
                The Task Manager tab is an ideal solution for those who want to stay organized and monitor the progress of their
                projects. This allows you to easily manage tasks, create cards with specific details, assign names and
                descriptions, change the status of existing tasks, delete unnecessary tasks and track progress as they are
                completed. You can filter cards by their completion status.
              </div>
            </div>
            <div className="doc__column">
              <h3 className="doc__title">Library</h3>
              <div className="doc__descr">
                The Library tab allows users to store a variety of useful content, such as messages, information, interesting
                topics, useful links and much more. It provides an easy way to manage and organize all the information you want to
                keep. Additionally, you can customize the library with tags to help you quickly search by content. You can filter
                cards by their completion status and search by their title or description
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
