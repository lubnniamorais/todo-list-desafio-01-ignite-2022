import styles from './task.module.css';

function Task() {
  return (
    <div className={styles.task}>
      <button className={styles.checkContainer}>
        <div />
      </button>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi iusto
        accusamus repellat perferendis enim reprehenderit vero non, praesentium
        recusandae fugiat neque officia maiores sequi, ex fuga, debitis nihil
        nesciunt. Sint.
      </p>

      <button>apagar</button>
    </div>
  );
}

export { Task };
