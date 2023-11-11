import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { Tasks } from './components/Tasks';

const LOCAL_STORAGE_KEY = '@to-do:saved-tasks-1.0.0';

export interface ITask {
  id: string;
  title: string;
  isCompleted: boolean;
}

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);

  function loadSavedTasks() {
    const savedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }

  useEffect(() => {
    loadSavedTasks();
  }, []);

  function setTasksAndSave(newTasks: ITask[]) {
    setTasks(newTasks);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
  }

  function addTask(taskTitle: string) {
    setTasksAndSave([
      ...tasks,
      {
        id: crypto.randomUUID(),
        title: taskTitle,
        isCompleted: false,
      },
    ]);
  }

  function deleteTaskById(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);

    setTasksAndSave(newTasks);
  }

  function toggleTaskCompletedById(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          isCompleted: !task.isCompleted,
        };
      }

      return task;
    });

    setTasksAndSave(newTasks);
  }

  return (
    <>
      <Header onAddTask={addTask} />
      <Tasks
        tasks={tasks}
        onDeleteTask={deleteTaskById}
        onCheckComplete={toggleTaskCompletedById}
      />
    </>
  );
}

export { App };
