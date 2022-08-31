import styled from "styled-components";

type BlockProps = {
  isBlock: boolean;
};

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  padding: 0 5px;
  position: relative;
`;

export const NavBar = styled.div`
  display: flex;
  padding: 40px 0 32px;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h1`
  font-weight: 800;
  font-size: 32px;
  color: var(--gray-300);
`;
export const WrapperRight = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const Input = styled.input`
  border: 1px solid #d2dfe6;
  background: #fff;
  padding: 8px 15px;
  border-radius: var(--border-radius-btn);
  font-size: 16px;
  /*   box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05); */
`;

export const IconOrganize = styled.div`
  width: 32px;
  height: 32px;
`;

export const ContainerFavorites = styled.div``;
export const TitleFavorites = styled.div`
  font-size: 32px;
  font-weight: 700;
  color: var(--gray-200);
  padding-bottom: 16px;
`;
export const WrapperCardContacts = styled.div<BlockProps>`
  display: flex;
  flex-direction: ${(props) => (props.isBlock ? "row" : "column")};
  flex-wrap: wrap;
  gap: 16px 24px;
  padding-bottom: 40px;
  /*   > div {
    margin-bottom: 10px;
  } */
`;

export const Divider = styled.div`
  height: 1px;
  background: var(--gray-50);
`;
export const ButtonAdd = styled.div`
  position: fixed;
  width: 56px;
  height: 56px;
  bottom: 16px;
  right: 32px;
  background: var(--color-primary);
  display: flex;
  border-radius: 200px;

  svg {
    font-size: 30px;
    margin: auto;
    color: #fff;
  }
`;
