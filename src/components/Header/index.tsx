import { AiOutlinePlusCircle } from 'react-icons/ai';

import todoLogo from '../../assets/todoLogo.svg';

import styles from './header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <img src={todoLogo} alt="" />

      <form className={styles.newTaskForm}>
        <input placeholder="Adicione uma nova tarefa" />
        <button>
          Criar
          <AiOutlinePlusCircle size={20} />
        </button>
      </form>
    </header>
  );
}

export { Header };
