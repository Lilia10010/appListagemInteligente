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
  organization?: boolean;
  name: string;
  type: string;
  created: string;
  avatarColor?: string;
}

export const CardContact = ({
  isFavorite,
  organization = true,
  name,
  type,
  created,
  avatarColor = "pink",
}: CardContactProps) => {
  return (
    <>
      {organization ? (
        <Container>
          <Favorite>
            {isFavorite ? (
              <AiFillStar style={{ fill: "#F9B42F" }} />
            ) : (
              <AiOutlineStar />
            )}
          </Favorite>
          <AvatarColor style={{ background: `${avatarColor}` }} />
          <Name>{name}</Name>
          <Type>{type}</Type>
        </Container>
      ) : (
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
              <AvatarColorList style={{ background: `${avatarColor}` }} />
              <Name>{name}</Name>
            </WrapperLeft>
            <CreatedList>Created at {created}</CreatedList>
          </WrapperInfoList>
        </ContainerList>
      )}
    </>
  );
};
