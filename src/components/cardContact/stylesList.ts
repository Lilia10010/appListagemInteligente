import styled from "styled-components";

export const ContainerList = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;
`;
export const WrapperInfoList = styled.div`
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: var(--border-radius-container);
  box-shadow: var(--box-shadow-container);
  width: 100%;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  }
`;
export const FavoriteList = styled.div`
  svg {
    font-size: 30px;
  }
`;
export const CreatedList = styled.div`
  font-size: 14px;
  color: var(--gray-250);
`;

export const WrapperLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const AvatarColorList = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 200px;
  background: pink;
`;
