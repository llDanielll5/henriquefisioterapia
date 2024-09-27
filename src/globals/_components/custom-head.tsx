import React, { useEffect, useState } from "react";
import Head from "next/head";
import { useRouter } from "next/router";

const HeadLanding = () => {
  const router = useRouter();
  const [product, setProduct] = useState<any>(null);

  const dynamicTitle =
    router.pathname === "/"
      ? "Henrique Mota Fisioterapeuta 👨‍⚕️"
      : router.pathname === "/categories"
      ? "Marie Papelaria Fofa | Todas Categorias"
      : router.pathname === "/cart"
      ? "Meu carrinho ❤️🛒"
      : router.pathname === "/products/[id]"
      ? `${product?.name ?? ""} | Comprar agora | Marie Papelaria Fofa`
      : "Marie Papelaria Fofa";

  return (
    <Head>
      <title>{dynamicTitle}</title>

      <meta
        name="description"
        content={
          "Henrique Fisioterapia | Home Care | Ortopedia | Neurologia | Geriatria | Pediatria | Liberação Miofacial"
        }
      />
      <meta name="author" content="Sofx Softwares Inteligentes" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta
        name="keywords"
        content="fisioterapia,saude,saúde,fisioterapeuta,cuidados,ortopedia,neurologia,geriatria,pediatria,miofacial,home,care"
      />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default HeadLanding;
