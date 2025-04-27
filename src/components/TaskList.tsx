import React, { useState } from 'react';
import styled from 'styled-components';
import { Task as TaskType } from '../types';
import OneTask from './Task';

const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const TaskList: React.FC = () => {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [taskText, setTaskText] = useState<string>('');

  const addTask = (text: string) => {
    const newTask: TaskType = {
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
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button
        onClick={() => {
          addTask(taskText);
        }}
      >
        Add Task
      </button>
      {tasks.map((task) => (
        <OneTask
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
