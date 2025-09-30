import React, { useState } from "react";
import styled from "styled-components";

interface AddTaskProps {
  onAddTask: (taskName: string) => void;
}

const Form = styled.form`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  width: 50vw;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  gap: 10px;

  @media (max-width: 600px) {
    flex-direction: column;
    width: 90%;
  }
`;

const Input = styled.input`
  flex: 1;
  padding: 12px 15px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #ed145b;
    box-shadow: 0 0 5px rgba(237, 20, 91, 0.5);
  }

  &::placeholder {
    color: #aaa;
  }
`;

const Button = styled.button`
  padding: 12px 20px;
  font-size: 16px;
  background-color: #ed145b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #c10e49;
    transform: scale(1.05);
  }

  &:active {
    transform: scale(0.98);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  }

  &:focus-visible {
    outline: 2px solid #c10e49;
    outline-offset: 2px;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const AddTask: React.FC<AddTaskProps> = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (taskName.trim()) {
      onAddTask(taskName.trim());
      setTaskName("");
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Adicione uma nova tarefa"
      />
      <Button type="submit">Adicionar</Button>
    </Form>
  );
};

export default AddTask;
