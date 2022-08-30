import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 5px;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: 800;
  font-size: 32px;
`;
export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Input = styled.input`
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.2);
  padding: 8px 15px;
  border-radius: var(--border-radius-btn);
  font-size: 16px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`;

export const IconOrganize = styled.div``;
