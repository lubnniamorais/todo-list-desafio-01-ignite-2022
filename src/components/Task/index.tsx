import { TbTrash } from 'react-icons/tb';
import { ITask } from '../../App';

import styles from './task.module.css';

interface ITaskProps {
  task: ITask;
}

function Task({ task }: ITaskProps) {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>{task.title}</p>

      <button className={styles.deleteButton}>
        <TbTrash size={20} />
      </button>
    </div>
  );
}

export { Task };
