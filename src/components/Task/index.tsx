import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';
import { BsFillCheckCircleFill } from 'react-icons/bs';

import styles from './task.module.css';

interface ITaskProps {
  task: ITask;
  onDeleteTask: (id: string) => void;
  onCheckComplete: (id: string) => void;
}

function Task({ task, onDeleteTask, onCheckComplete }: ITaskProps) {
  return (
    <div className={styles.task}>
      <button
        className={styles.checkContainer}
        onClick={() => {
          onCheckComplete(task.id);
        }}
      >
        {task.isCompleted ? <BsFillCheckCircleFill /> : <div />}
      </button>

      <p className={task.isCompleted ? styles.textCompleted : ''}>
        {task.title}
      </p>

      <button
        className={styles.deleteButton}
        onClick={() => {
          onDeleteTask(task.id);
        }}
      >
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export { Task };
