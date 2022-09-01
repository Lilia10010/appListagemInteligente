import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getDetailsContact } from "../../services/sessions";

import { Button } from "../../components/button";

import IconUser from "../../assets/icons/icon-user-check.svg";
import IconMessageReceived from "../../assets/icons/message-received.svg";
import IconMessageSent from "../../assets/icons/message-sent.svg";

import ImageDialog from "../../assets/icons/icon-dialog.svg";
import ImageBallon from "../../assets/img/image-ballon.svg";

import {
  Container,
  Header,
  InfoLeft,
  Avatar,
  InfoName,
  InfoId,
  Created,
  WrapperAnalytics,
  WrapperLeft,
  WrapperRight,
  CardAnalitics,
  Total,
  Footer,
} from "./styles";
import { Divider } from "../Home/styles";

export const Details = () => {
  const { id } = useParams();
  const [infoContact, setInfoContact] = useState(null);

  useEffect(() => {
    const shortName = id?.toLowerCase();
    getDetailsContact(shortName)
      .then((response) => {
        setInfoContact(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <Container>
      {infoContact ? (
        <>
          <Header>
            <InfoLeft>
              <Avatar>
                <img src={ImageDialog} alt="icone de dialogo" />
              </Avatar>
              <div>
                <InfoName>{infoContact["name"]}</InfoName>
                <InfoId>id: {infoContact["shortName"]}</InfoId>
              </div>
            </InfoLeft>
            <Created>Created at {infoContact["created"]}</Created>
          </Header>

          <Divider />

          <WrapperAnalytics>
            <WrapperLeft>
              <div className="area area-1">
                <span>Region and idiom</span>
                <p>EUA - E nglish (EN)</p>
                <span>Timezone</span>
                <p>(UTC - 03:00) Brasília</p>
              </div>
              <CardAnalitics className="area area-2">
                <img src={IconUser} alt="icone de usuario" />
                <div>
                  <Total>{infoContact["analytics"]["user"]["actived"]}</Total>
                  <p>Usuários ativos</p>
                </div>
              </CardAnalitics>
              <CardAnalitics className="area area-3">
                <img src={IconMessageReceived} alt="icone de usuario" />
                <div>
                  <Total>
                    {infoContact["analytics"]["message"]["received"]}
                  </Total>
                  <p>Mensagens recebidas</p>
                </div>
              </CardAnalitics>
              <CardAnalitics className="area area-4">
                <img src={IconMessageSent} alt="icone de usuario" />
                <div>
                  <Total>{infoContact["analytics"]["message"]["sent"]}</Total>
                  <p>Mensagens enviadas</p>
                </div>
              </CardAnalitics>
            </WrapperLeft>
            <WrapperRight>
              <img src={ImageBallon} alt="imagem de um balão azul" />
              <div>
                <span>Status account</span>
                <p>Free</p>
              </div>
              <Button label="Update account" type="submit" />
            </WrapperRight>
          </WrapperAnalytics>

          <Divider />

          <Footer>
            ©2019, BLiP Todos os direitos reservados |{" "}
            <strong>Termos de Uso</strong>
          </Footer>
        </>
      ) : (
        "rodando"
      )}
    </Container>
  );
};
