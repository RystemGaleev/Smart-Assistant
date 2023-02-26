import { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/reduxHooks';
import { addCard } from '../../redux/TaskSlice';

import { TaskCard } from '../../components/TaskCard/TaskCard';
import { StatusSelect } from '../../components/UI/Select/StatusSelect';
import { UiButton } from '../../components/UI/UiButton/UiButton';
import { CustomModal } from '../../components/UI/CustomModal/CustomModal';
import { CustomForm } from '../../components/UI/CustomForm/CustomForm';
import { CustomInput } from '../../components/UI/CustomInput/CustomInput';
import { CustomTextarea } from '../../components/UI/CustomTextarea/CustomTextarea';

import { motion } from 'framer-motion';
import { Layout } from '../../Layout/Layout';
import { ICard } from '../../Interfaces';
import { AnimationPage, PageTranstition } from '../../Animation/Animation';
import './TaskManager.scss';
import { optionsFilter } from '../../Utils';

export const TaskManager = () => {
  const { cards } = useAppSelector((state) => state.board);
  const dispatch = useAppDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const [filterStatus, setFilterStatus] = useState<ICard['status']>('All');
  const [error, setError] = useState('');
  const [taskValue, setTaskValue] = useState<ICard>({
    title: '',
    description: '',
    status: 'Not urgent',
    id: '',
    subTasks: [],
    color: '#2773e5',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { title, description } = taskValue;
    if (title.trim() !== '' && description.trim() !== '') {
      dispatch(addCard(taskValue));
      setTaskValue({ title: '', description: '', status: 'Not urgent', color: '#2773e5', id: '', subTasks: [] });
      toggleModal();
      setError('');
    } else {
      setError('Please fill in all fields');
    }
  };
  const filteredStatus = (status: ICard['status']) => (card: any) => {
    switch (status) {
      case 'Not urgent':
        return card.status === 'Not urgent';
      case 'Simple':
        return card.status === 'Simple';
      case 'Critical':
        return card.status === 'Critical';
      case 'Waiting':
        return card.status === 'Waiting';
      case 'Completed':
        return card.status === 'Completed';
      case 'Other':
        return card.status === 'Other';
      default:
        return card.status;
    }
  };

  // const filteredStatus = (status: ICard['status']) => (card: any) => {
  //   if (status === 'Not urgent') {
  //     return card.status === 'Not urgent';
  //   }
  //   if (status === 'Simple') {
  //     return card.status === 'Simple';
  //   }
  //   if (status === 'Critical') {
  //     return card.status === 'Critical';
  //   }
  //   if (status === 'Waiting') {
  //     return card.status === 'Waiting';
  //   }
  //   if (status === 'Completed') {
  //     return card.status === 'Completed';
  //   }
  //   if (status === 'Other') {
  //     return card.status === 'Other';
  //   }
  //   if (status === 'All') {
  //     return card.status;
  //   }
  // };

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setFilterStatus(e.target.value as ICard['status']);
  };

  return (
    <Layout>
      <CustomModal toggleModal={toggleModal} modalVisible={modalVisible}>
        <CustomForm handleSubmit={handleSubmit} title={'Create new card'}>
          <>
            {error && error && <p className="error-message">{error}</p>}
            <CustomInput
              value={taskValue.title}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setTaskValue({ ...taskValue, title: e.target.value })}
              type="text"
              name="title"
              placeholder="Title"
              className="input"
            />
            <CustomTextarea
              value={taskValue.description}
              onChange={(e) => setTaskValue({ ...taskValue, description: e.target.value })}
              name="descr"
              className="textarea"
              placeholder="Description"
            />
            <UiButton size="md" variant="primary">
              Create
            </UiButton>
          </>
        </CustomForm>
      </CustomModal>

      <motion.section
        className="taskManager"
        initial="exit"
        animate="show"
        exit="exit"
        transition={PageTranstition}
        variants={AnimationPage}
      >
        <div className="container">
          <div className="taskManager__top">
            <h2 className="title">Task manager</h2>
            <div className="taskManager__tools">
              <StatusSelect options={optionsFilter} onChange={handleChange} value={filterStatus} />
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
      </motion.section>
    </Layout>
  );
};
