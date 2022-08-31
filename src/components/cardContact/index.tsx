import { Container, AvatarColor, Favorite, Name, Type } from "./styles";
import {
  ContainerList,
  WrapperInfoList,
  FavoriteList,
  CreatedList,
  WrapperLeft,
  AvatarColorList,
} from "./stylesList";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

interface CardContactProps {
  isFavorite: boolean;
  organization?: "block" | "list";
  name: string;
  type: string;
  created: string;
}

export const CardContact = ({
  isFavorite,
  organization = "list",
  name,
  type,
  created,
}: CardContactProps) => {
  return (
    <>
      {organization === "block" && (
        <Container>
          <Favorite>
            {isFavorite ? (
              <AiFillStar style={{ fill: "#F9B42F" }} />
            ) : (
              <AiOutlineStar />
            )}
          </Favorite>
          <AvatarColor />
          <Name>{name}</Name>
          <Type>{type}</Type>
        </Container>
      )}

      {organization === "list" && (
        <ContainerList>
          <FavoriteList>
            {isFavorite ? (
              <AiFillStar style={{ fill: "#F9B42F" }} />
            ) : (
              <AiOutlineStar />
            )}
          </FavoriteList>
          <WrapperInfoList>
            <WrapperLeft>
              <AvatarColorList />
              <Name>{name}</Name>
            </WrapperLeft>
            <CreatedList>Created at {created}</CreatedList>
          </WrapperInfoList>
        </ContainerList>
      )}
    </>
  );
};
