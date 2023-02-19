import { useState } from 'react';
import { CustomModal } from '../../components/CustomModal/CustomModal';
import { Form } from '../../components/Form/Form';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { useAppSelector } from '../../hooks/reduxHooks';
import { Layout } from '../../Layout/Layout';
import './TaskManager.scss';

export const TaskManager = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { cards } = useAppSelector((state) => state.board);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
        <Form toggleModal={toggleModal} />
      </CustomModal>
      <div className="taskManager">
        <div className="container">
          <div className="taskManager__controls">
            <h2 className="title">Task manager</h2>
            <UiButton onClick={toggleModal} size="md" variant="primary">
              Create task
            </UiButton>
          </div>
          <div className="taskManager__wrapper">
            {cards?.map((card) => (
              <TaskCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
