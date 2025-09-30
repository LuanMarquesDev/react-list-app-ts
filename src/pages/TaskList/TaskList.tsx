import React from "react";
import styled from "styled-components";
import type { Task } from "../../types";

interface TaskListProps {
  tasks: Task[];
  onRemoveTask: (taskId: number) => void;
  onToggleTask: (taskId: number) => void;
}

const List = styled.ul`
  list-style: none;
  padding: 0;
  width: 50vw;
  max-width: 600px;
  margin: 0 auto;
`;

const ListItem = styled.li<{ completed: boolean }>`
  background-color: ${({ completed }) => (completed ? "#e0ffe0" : "#f9f9f9")};
  border: 1px solid ${({ completed }) => (completed ? "#8bc34a" : "#ddd")};
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  span {
    font-size: 1rem;
    color: #333;
  }
`;

const TaskInfo = styled.div`
  display: flex;
  align-items: center;
`;

const Checkbox = styled.input`
  width: 18px;
  height: 18px;
  margin-right: 12px;
  accent-color: #ed145b;
  cursor: pointer;
`;

const Button = styled.button`
  background-color: #ed145b;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  padding: 6px 12px;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #c10e49;
    transform: scale(1.05);
  }

  &:active {
    background-color: #a00b3a;
    transform: scale(0.98);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 2px solid #c10e49;
    outline-offset: 2px;
  }
`;

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onRemoveTask,
  onToggleTask,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <ListItem key={task.id} completed={task.completed}>
          <TaskInfo>
            <Checkbox
              type="checkbox"
              checked={task.completed}
              onChange={() => onToggleTask(task.id)}
            />
            <span>{task.name}</span>
          </TaskInfo>
          <Button onClick={() => onRemoveTask(task.id)}>Remover</Button>
        </ListItem>
      ))}
    </List>
  );
};

export default TaskList;
