import React from 'react';
import { Task } from '../types';
import { styled } from 'styled-components';

interface TaskProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
}

// const TaskItem = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   padding: 0.5rem;
//   border-bottom: 1px solid #ccc;
// `;

const TaskItem = styled.div<{ completed: boolean }>`
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const OneTask: React.FC<TaskProps> = ({ task, toggleTask, removeTask }) => {
  return (
    <TaskItem completed={task.completed}>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />
      {task.text}
      <button onClick={() => removeTask(task.id)}>Remove</button>
    </TaskItem>
  );
};

export default OneTask;
