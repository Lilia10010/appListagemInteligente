import styled from "styled-components";

export const ButtonSubmit = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: var(--color-primary);
  color: var(--text-white);
  border-radius: var(--border-radius-btn);
  padding: 10px 15px;
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
  transition: 0.3s;
  &:hover {
    opacity: 0.9;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
