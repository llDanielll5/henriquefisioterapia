//@ts-nocheck

import React from "react";
import {
  Box,
  Button,
  Card,
  CardHeader,
  CardMedia,
  Grid,
  styled,
  Typography,
} from "@mui/material";
import { GoldenLine } from "@/globals/_components";
import LandingPageLayout from "@/globals/layouts/lp";
import BannerLp from "@/globals/_components/lp/banner";
import FooterLp from "@/globals/_components/lp/footer";
import AboutMeLP from "@/globals/_components/lp/about-me";
import LocationLp from "@/globals/_components/lp/location";
import ResultsPage from "@/globals/_components/lp/results-page";
import NutritionalMonitoring from "@/globals/_components/lp/nutritional-monitoring";
import { WHATSAPP_PHONE } from "@/globals/utils/constants";
import { msgZap } from "@/globals/_components/lp/header";
import { COLORS } from "@/globals/utils/colors";

const treatments = [
  {
    name: "Fisioterapia Ortopédica",
    image:
      "https://www.hong.com.br/wp-content/uploads/2019/12/fisioterapia-ortopedica.jpg",
    details: "",
  },
  {
    name: "Fisioterapia Respiratória",
    image:
      "https://clinicasantateresinha.com.br/images/fisioterapia_respiratoria.jpg",
    details: "",
  },
  {
    name: "Fisioterapia Geriátrica",
    image:
      "https://clinica.clinicafortius.com.br/imagens/fisioterapia-em-geriatria-procedimento.jpg",
    details: "",
  },
  {
    name: "Fisioterapia Pediátrica",
    image:
      "https://static.wixstatic.com/media/7d06ee_c2f13077bb2e4da48d5ea332945ccbfd~mv2.jpg/v1/fill/w_986,h_656,al_c,q_85/7d06ee_c2f13077bb2e4da48d5ea332945ccbfd~mv2.jpg",
    details: "",
  },
  {
    name: "Fisioterapia Pélvica",
    image:
      "https://blogfisioterapia.com.br/wp-content/uploads/2022/05/fisioterapia-pelvica.jpg",
    details: "",
  },
  {
    name: "Liberação Miofacial",
    image:
      "https://clinicafisiopilatesro.com.br/wp-content/uploads/2020/03/Libera%C3%A7%C3%A3o-Miofascial-Manual.jpg",
    details: "",
  },
];

export default function Home() {
  const zapHref = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(
    msgZap
  )}`;

  const openWhatsapp = () =>
    window.open(zapHref, "_blank", "noreferrer,noopener");

  return (
    <Box>
      <GoldenLine />
      {/* <BannerLp /> */}
      {/* <ResultsPage /> */}
      <TitleContainer onClick={openWhatsapp}>
        {/* <Typography variant="h2" textAlign={"center"}>
          Fisioterapia
        </Typography>
        <Typography variant="h3">Agenda agora o seu Atendimento</Typography>
        <StyledButton onClick={openWhatsapp}></StyledButton> */}
      </TitleContainer>
      <GoldenLine />
      <Treatments>
        <Typography variant="h5" textAlign={"center"} sx={{ pb: 2 }}>
          Realizamos diversos tratamentos em Fisioterapia como:
        </Typography>

        <Grid container spacing={4}>
          {treatments.map((item, index) => (
            <Grid
              item
              key={index}
              xs={12}
              md={6}
              lg={4}
              sx={{
                scale: "1",
                transition: "0.3s",
                cursor: "pointer",
                ":hover": {
                  scale: "0.95",
                },
              }}
            >
              <Card elevation={10} onClick={openWhatsapp}>
                <CardHeader title={item.name} />
                <CardMedia component="picture">
                  <source srcset={item.image} />
                  <img
                    src={item.image}
                    alt="logo"
                    style={{
                      width: "100%",
                      objectFit: "cover",
                      maxHeight: "200px",
                    }}
                  />
                </CardMedia>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Treatments>
      <AboutMeLP />
      <NutritionalMonitoring />
      {/* <CollectionsLp /> */}
      {/* <LocationLp /> */}
      <FooterLp />
    </Box>
  );
}

const TitleContainer = styled(Box)`
  background-image: url(/images/agenda-aberta.png);
  background-size: cover;
  background-position: center;
  min-height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 5%;
  row-gap: 1rem;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  @media screen and (max-width: 760px) {
    background-position: center;
    min-height: 25vh;
  }
`;

const Treatments = styled(Box)`
  padding: 2rem 5%;
`;

Home.getLayout = (page: any) => <LandingPageLayout>{page}</LandingPageLayout>;
