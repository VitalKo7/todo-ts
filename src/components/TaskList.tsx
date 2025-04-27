import React, { useState } from 'react';
import styled from 'styled-components';
import { Task } from '../types';

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = (text: string) => {
    const newTask: Task = {
      id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      text,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleTask = (id: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const removeTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <TaskListWrapper>
      <h1>To-Do List</h1>
      <input type="text" value={taskText} onChange={(e) => e.target.value} />
      <button
        onClick={() => {
          addTask(taskText);
        }}
      >
        Add Task
      </button>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </TaskListWrapper>
  );
};

export default TaskList;
