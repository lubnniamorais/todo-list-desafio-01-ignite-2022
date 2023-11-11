import { ITask } from '../../App';
import { Task } from '../Task';

import styles from './tasks.module.css';

interface ITasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
}

function Tasks({ tasks, onDeleteTask }: ITasksProps) {
  const tasksQuantity = tasks.length;
  const completedTasks = tasks.filter((task) => task.isCompleted).length;

  return (
    <section className={styles.tasks}>
      <header className={styles.header}>
        <div>
          <p>Tarefas criadas</p>
          <span>{tasksQuantity}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Concluídas</p>
          <span>
            {completedTasks} de {tasksQuantity}
          </span>
        </div>
      </header>

      <div className={styles.list}>
        {tasks.map((task) => {
          return <Task key={task.id} task={task} onDeleteTask={onDeleteTask} />;
        })}
      </div>
    </section>
  );
}

export { Tasks };
