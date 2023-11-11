import { TbClipboardText } from 'react-icons/tb';
import { ITask } from '../../App';
import { Task } from '../Task';

import styles from './tasks.module.css';

interface ITasksProps {
  tasks: ITask[];
  onDeleteTask: (id: string) => void;
  onCheckComplete: (id: string) => void;
}

function Tasks({ tasks, onDeleteTask, onCheckComplete }: ITasksProps) {
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
          return (
            <Task
              key={task.id}
              task={task}
              onDeleteTask={onDeleteTask}
              onCheckComplete={onCheckComplete}
            />
          );
        })}

        {tasks.length <= 0 && (
          <section className={styles.emptyTasks}>
            <TbClipboardText size={50} />
            <div>
              <p>Você ainda não tem tarefas cadastradas</p>
              <span>Crie tarefas e organize seus items a fazer</span>
            </div>
          </section>
        )}
      </div>
    </section>
  );
}

export { Tasks };
