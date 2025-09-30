import React from "react";
import type { Task } from "../../types";
import styled from "styled-components";

interface PendingTasksProps {
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
  background-color: #fff8e1;
  border: 1px solid #ffecb3;
  padding: 12px 15px;
  margin: 8px 0;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  display: flex;
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

const PendingTasks: React.FC<PendingTasksProps> = ({ tasks }) => {
  const pendingTasks = tasks.filter((task) => !task.completed);

  if (pendingTasks.length === 0) {
    return (
      <Container>
        <Title>Tarefas Pendentes</Title>
        <p style={{ textAlign: "center", color: "#666" }}>
          Nenhuma tarefa pendente no momento.
        </p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Tarefas Pendentes</Title>
      <List>
        {pendingTasks.map((task) => (
          <ListItem key={task.id}>
            <span>{task.name}</span>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default PendingTasks;
