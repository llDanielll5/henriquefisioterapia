import React from "react";
import { COLORS } from "@/globals/utils/colors";
import { Box, styled, Typography } from "@mui/material";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PendingActionsIcon from "@mui/icons-material/PendingActions";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import MiniCardMonitoring from "./_components/mini-card-monitoring";
import MedicalServicesIcon from "@mui/icons-material/MedicalServices";

const informations = [
  {
    icon: (
      <CalendarTodayRoundedIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />
    ),
    title: "Consulta Home Care",
    subtitle: "Atendimento Profissional no conforto do seu lar!",
  },
  {
    icon: <MedicalServicesIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Plano Médico Personalizado",
    subtitle: "Planejamento de tratamento contínuo e medicações",
  },
  {
    icon: <PendingActionsIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Análise de Exames Laboriais",
    subtitle:
      "Avaliações detalhadas de exames para atender necessidades médicas específicas",
  },
  {
    icon: <WhatsAppIcon sx={{ fontSize: "60px", color: COLORS.GOLD }} />,
    title: "Suporte via Whatsapp",
    subtitle:
      "Assistência contínua e direta pelo nosso Whatsapp a qualquer hora do dia!",
  },
];

const NutritionalMonitoring = (props: any) => {
  return (
    <Container>
      <LeftContainer>
        <Typography variant="h5" color={COLORS.GOLD}>
          Dr Henrique Mota
        </Typography>
        <Typography variant="h4">Acompanhamento:</Typography>
      </LeftContainer>
      <RightContainer>
        {informations.map((item, index) => (
          <MiniCardMonitoring
            key={index}
            icon={item.icon}
            subtitle={item.subtitle}
            title={item.title}
          />
        ))}
      </RightContainer>
    </Container>
  );
};

const Container = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 3rem 5%;
  position: relative;
  column-gap: 5%;

  @media screen and (max-width: 760px) {
    flex-direction: column;
    row-gap: 1.3rem;
  }
`;

const LeftContainer = styled(Box)`
  align-self: flex-start;
  position: sticky;
  top: 2rem;
  width: 40%;

  @media screen and (max-width: 760px) {
    position: relative;
    width: 95%;
  }
`;
const RightContainer = styled(Box)`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  width: 40%;

  @media screen and (max-width: 760px) {
    width: 95%;
  }
`;

export default NutritionalMonitoring;
