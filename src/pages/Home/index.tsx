import { Button } from "../../components/button";
import { CardContact } from "../../components/cardContact";
import { BsGridFill } from "react-icons/bs";
import { MdAdd } from "react-icons/md";
import { getListingContacts } from "../../services/sessions";
import {
  Container,
  NavBar,
  Title,
  WrapperRight,
  Input,
  IconOrganize,
  ContainerFavorites,
  TitleFavorites,
  WrapperCardContacts,
  Divider,
  ButtonAdd,
} from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

/* interface FavoritesProps {
  name: string;
  type: string;
  created: string;
} */

export const Home = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    getListingContacts()
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("favorites", favorites);
  return (
    <>
      <Container>
        <NavBar>
          <Title>My chatbots</Title>
          <WrapperRight>
            <Input placeholder="Search" />
            <Button label="Order by name" type="submit" />
            <Button label="Order by creation" type="submit" />
            <IconOrganize>
              <BsGridFill
                style={{
                  padding: "2px",
                  fill: "red",
                  width: "100%",
                  height: "100%",
                }}
              />
            </IconOrganize>
            <IconOrganize>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.6489 4.88H7.12442C5.86521 4.88 4.84442 5.9008 4.84442 7.16001V12.6845C4.84442 13.9437 5.86521 14.9644 7.12442 14.9644H24.6489C25.9081 14.9644 26.9289 13.9437 26.9289 12.6845V7.16001C26.9289 5.9008 25.9081 4.88 24.6489 4.88Z"
                  fill="#D2DFE6"
                />
                <path
                  d="M24.9111 16.5733H7.09331C5.85128 16.5733 4.84442 17.5802 4.84442 18.8222V24.8711C4.84442 26.1131 5.85128 27.12 7.09331 27.12H24.9111C26.1531 27.12 27.16 26.1131 27.16 24.8711V18.8222C27.16 17.5802 26.1531 16.5733 24.9111 16.5733Z"
                  fill="#D2DFE6"
                />
              </svg>
            </IconOrganize>
          </WrapperRight>
        </NavBar>
        <ContainerFavorites>
          <TitleFavorites>Favorites</TitleFavorites>
          <WrapperCardContacts isBlock={true}>
            {favorites &&
              favorites.map((value: any, index: any) => (
                <Link to={`/${value.name}/details/`} key={index}>
                  <CardContact
                    name={value.name}
                    type={value.type}
                    created={value.created}
                    isFavorite={true}
                    organization={"block"}
                  />
                </Link>
              ))}
          </WrapperCardContacts>
        </ContainerFavorites>
        <Divider />
        <WrapperCardContacts isBlock={false} style={{ paddingTop: "40px" }}>
          {favorites &&
            favorites.map((value: any, index) => (
              <div key={index}>
                <CardContact
                  name={value.name}
                  type={value.type}
                  created={value.created}
                  isFavorite={false}
                  organization={"list"}
                />
              </div>
            ))}
        </WrapperCardContacts>
      </Container>
      <ButtonAdd>
        <MdAdd />
      </ButtonAdd>
    </>
  );
};
