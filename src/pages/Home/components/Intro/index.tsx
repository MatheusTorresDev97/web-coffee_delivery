import { useTheme } from "styled-components";
import InfoWithIcon from "../../../../components/InfoWithIcon";
import { RegularText } from "../../../../components/Typography";
import {
  BenefitsContainer,
  IntroContainer,
  IntroContent,
  IntroTitle,
} from "./styles";
import introImg from "../../../../assets/intro-img.png";
import { ShoppingCart, Package, Timer, Coffee } from "phosphor-react";

const Icons = [
  {
    id: 1,
    cor: "brand-yellow-dark",
    icone: <ShoppingCart weight="fill" />,
    texto: "Compra simples e segura",
  },
  {
    id: 2,
    cor: "base-text",
    icone: <Package weight="fill" />,
    texto: "Embalagem mantém o café intacto",
  },
  {
    id: 3,
    cor: "brand-yellow",
    icone: <Timer weight="fill" />,
    texto: "Entrega rápida e rastreada",
  },
  {
    id: 4,
    cor: "brand-purple",
    icone: <Coffee weight="fill" />,
    texto: "O café chega fresquinho até você",
  },
];

export const Intro = () => {
  const { colors } = useTheme();
  return (
    <IntroContainer>
      <IntroContent className="container">
        <div>
          <section>
            <IntroTitle size="xl">
              Encontre o café perfeito para qualquer hora do dia
            </IntroTitle>
            <RegularText as="h3" size="l" color="subtitle">
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </RegularText>
          </section>

          <BenefitsContainer>
            {Icons.map((icon) => (
              <InfoWithIcon
                key={icon.id}
                iconBg={colors[`${icon.cor}`]}
                icon={icon.icone}
                text={icon.texto}
              />
            ))}
          </BenefitsContainer>
        </div>

        <img src={introImg} />
      </IntroContent>
    </IntroContainer>
  );
};
