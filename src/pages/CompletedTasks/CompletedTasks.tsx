import React from "react";
import type { Task } from "../../types";
import styled from "styled-components";

interface CompletedTasksProps {
  tasks: Task[];
}

const Container = styled.div`
  width: 50vw;
  max-width: 600px;
  margin: 20px auto;
  padding: 10px;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  color: #333;
  margin-bottom: 15px;
  text-align: center;
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const TaskDate = styled.span`
  font-size: 0.85rem;
  color: #888;
`;

const CompletedTasks: React.FC<CompletedTasksProps> = ({ tasks }) => {
  const completedTasks = tasks.filter((task) => task.completed);

  if (completedTasks.length === 0) {
    return (
      <Container>
        <Title>Tarefas Concluídas</Title>
        <p style={{ textAlign: "center", color: "#666" }}>
          Nenhuma tarefa concluída ainda.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Tarefas Concluídas</Title>
      <List>
        {completedTasks.map((task) => (
          <ListItem key={task.id}>
            <span>{task.name}</span>
            <TaskDate>
              {task.completedAt
                ? new Date(task.completedAt).toLocaleString()
                : ""}
            </TaskDate>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default CompletedTasks;
