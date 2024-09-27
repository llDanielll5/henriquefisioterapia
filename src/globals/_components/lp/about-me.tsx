import React from "react";
import { Box, Grid, Stack, styled, Typography } from "@mui/material";
// import { motion } from "framer-motion";
import { rightSlideVariants } from "./banner";
import { COLORS } from "@/globals/utils/colors";

const AboutMeLP: React.FC = () => {
  return (
    <Container>
      <Grid
        container
        spacing={2}
        alignItems="center"
        justifyContent="space-around"
      >
        <Grid item xs={12} md={5}>
          <Stack direction="column" rowGap={2}>
            <Typography variant="h4" fontFamily={"Quicksand"}>
              Prazer, sou o{" "}
              <span style={{ color: COLORS.PRIMARY }}>Pedro Henrique!</span>
            </Typography>
            <Typography variant="h5" fontFamily={"Quicksand"} fontWeight={500}>
              Meu nome é Pedro Henrique Mota! Sou formado em Fisioterapia pela
              Universidade Católica de Brasília. Especializado em tratamentos
              Home Care, Ortopedia, Pediatria e Liberação Miofacial. Realizo
              atendimentos no conforto do seu lar e ...
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} md={5}>
          <StyledProfileImage src="/images/karla-perfil.png" />
        </Grid>
      </Grid>
    </Container>
  );
};

const Container = styled(Box)`
  padding: 3rem 5%;
  background-color: ${COLORS.BACKGROUND};
`;

const StyledProfileImage = styled("img")`
  width: 100%;
  max-height: 500px;
  object-fit: contain;
`;

// const AnimatedContainer = motion(Container);

export default AboutMeLP;
