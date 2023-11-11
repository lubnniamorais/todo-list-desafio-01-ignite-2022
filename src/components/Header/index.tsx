import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import todoLogo from '../../assets/todoLogo.svg';

import styles from './header.module.css';

interface HeaderProps {
  onAddTask: (taskTitle: string) => void;
}

function Header({ onAddTask }: HeaderProps) {
  const [newTitleTask, setNewTitleTask] = useState('');

  function handleCreateNewTitleTask(event: FormEvent) {
    event?.preventDefault();

    onAddTask(newTitleTask);
    setNewTitleTask('');
  }

  function handleCreateNewTitleTaskChange(
    event: ChangeEvent<HTMLInputElement>,
  ) {
    event.target.setCustomValidity('');
    setNewTitleTask(event.target.value);
  }

  function handleCreateNewTitleTaskInvalid(
    event: InvalidEvent<HTMLInputElement>,
  ) {
    event.target.setCustomValidity('Esse campo é obrigatório.');
  }

  const isNewTitleTaskEmpty = newTitleTask.length === 0;

  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form onSubmit={handleCreateNewTitleTask} className={styles.newTaskForm}>
        <input
          placeholder="Adicione uma nova tarefa"
          value={newTitleTask}
          onChange={handleCreateNewTitleTaskChange}
          onInvalid={handleCreateNewTitleTaskInvalid}
          required
        />

        <button type="submit" disabled={isNewTitleTaskEmpty}>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export { Header };
