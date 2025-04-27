import React from 'react';
import { Task } from '../types';
import { styled } from 'styled-components';

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

const TaskItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 250px;
`;

const Item = styled.div<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
  color: ${({ completed }) => (completed ? '#888888' : 'none')};
  font-weight: ${({ completed }) => (completed ? 'normal ' : '600')};
`;

const OneTask: React.FC<TaskProps> = ({ task, toggleTask, removeTask }) => {
  return (
    <TaskItem className="todo-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      <Item completed={task.completed}>{task.text}</Item>

      <button onClick={() => removeTask(task.id)}>Remove</button>
    </TaskItem>
  );
};

export default OneTask;
