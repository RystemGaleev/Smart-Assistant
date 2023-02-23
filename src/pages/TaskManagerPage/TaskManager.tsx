import { ChangeEvent, useState } from 'react';
import { CustomModal } from '../../components/UI/CustomModal/CustomModal';
import { Form } from '../../components/Form/Form';
import { TaskCard } from '../../components/TaskCard/TaskCard';
import { StatusSelect } from '../../components/UI/Select/StatusSelect';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { useAppSelector } from '../../hooks/reduxHooks';
import { ICard } from '../../Interfaces';
import { Layout } from '../../Layout/Layout';
import './TaskManager.scss';

export const TaskManager = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [filterStatus, setFilterStatus] = useState<ICard['status']>('All');
  const { cards } = useAppSelector((state) => state.board);

  const filteredStatus = (status: ICard['status']) => (card: any) => {
    if (status === 'Not urgent') {
      return card.status === 'Not urgent';
    }
    if (status === 'Simple') {
      return card.status === 'Simple';
    }
    if (status === 'Critical') {
      return card.status === 'Critical';
    }
    if (status === 'Waiting') {
      return card.status === 'Waiting';
    }
    if (status === 'Completed') {
      return card.status === 'Completed';
    }
    if (status === 'Other') {
      return card.status === 'Other';
    }
    if (status === 'All') {
      return card.status;
    }
  };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value as ICard['status']);
  };

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
        <Form toggleModal={toggleModal} />
      </CustomModal>

      <div className="taskManager">
        <div className="container">
          <div className="taskManager__top">
            <h2 className="title">Task manager</h2>
            <div className="taskManager__tools">
              <StatusSelect onChange={handleChange} value={filterStatus} />
              <UiButton onClick={toggleModal} size="md" variant="primary">
                Create card
              </UiButton>
            </div>
          </div>
          <div className="taskManager__wrapper">
            {cards?.filter(filteredStatus(filterStatus)).map((card) => (
              <TaskCard key={card.id} {...card} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};
