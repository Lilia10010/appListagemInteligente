import styled from "styled-components";

export const Container = styled.div`
  max-width: 1248px;
  margin: 0 auto;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 32px 0;
`;

export const InfoLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const Avatar = styled.div`
  svg {
    width: 56px;
    height: 56px;
  }
`;
export const InfoName = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: var(--gray-300);
`;
export const InfoId = styled.div`
  font-size: 14px;
  color: var(--gray-10);
`;
export const Created = styled.div`
  font-size: 14px;
  color: var(--gray-10);
`;

export const WrapperAnalytics = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 50px;
  padding: 24px 0 44px;
`;
export const WrapperLeft = styled.div`
  max-width: 927px;
  width: 100%;
  display: grid;
  gap: 24px 22px;
  grid-template-columns: 30% 30% 40%;
  color: var(--gray-350);

  span {
    font-size: 12px;
    font-weight: 400;
  }
  p {
    font-size: 12px;
    font-weight: 700;
    margin-bottom: 5px;
  }

  .area {
    border-radius: var(--border-radius-container);
    background: #fff;
    padding-left: 32px;
    box-shadow: var(--box-shadow-container);
  }

  .area-1 {
    grid-area: area1;
    padding: 32px 0 0 39px;
  }
  .area-2 {
    grid-area: area2;
  }
  .area-3 {
    grid-area: area3;
  }
  .area-4 {
    grid-area: area4;
  }

  grid-template-areas:
    "area1 area2 area2"
    "area3 area3 area4";
`;
export const WrapperRight = styled.div`
  max-width: 249px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  span {
    color: var(--gray-10);
  }
  p {
    font-weight: 700;
    font-size: 24px;
    color: var(--gray-300);
  }

  div {
    text-align: center;
  }
  img {
    padding-bottom: 12px;
  }
`;

export const CardAnalitics = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 212px;
`;

export const Total = styled.div`
  font-size: 24px;
  font-weight: 800;
`;

export const Footer = styled.div`
  text-align: center;
  color: var(--gray-500);
  padding: 16px 0;
`;
