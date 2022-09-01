import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  background: gray;
  width: 188px;
  height: 192px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-container);
  background: #fff;
  box-shadow: var(--box-shadow-container);
  transition: 0.3s;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;

export const AvatarColor = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 200px;
  background: pink;
  margin-bottom: 15px;
`;

export const Favorite = styled.div`
  position: absolute;
  left: 12px;
  top: 12px;

  svg {
    font-size: 30px;
    fill: #b9cbd3;
  }
`;

export const Name = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: var(--gray-350);
`;
export const Type = styled.div`
  font-size: 12px;
  color: var(--gray-250);
  text-transform: capitalize;
`;
