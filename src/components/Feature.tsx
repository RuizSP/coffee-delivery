import React from "react";
import styled from "styled-components";
// Importando os ícones do Phosphor
import { ShoppingCart, Timer, Package, Coffee } from "phosphor-react"; // Exemplos de ícones

// Mapeando os ícones para suas identificações
const iconMap = {
  cart: <ShoppingCart weight="fill" color="white"/>,
  timer: <Timer weight="fill" color="white"/>,
  package: <Package weight="fill" color="white"/>,
  coffee: <Coffee weight="fill" color="white" />,
};

// Definindo as propriedades do componente
interface FeatureProps {
  icon: string; // Agora o ícone é uma string que identificará qual ícone usar
  text: string;
  backgroundColor: string;
}

const FeatureWrapper = styled.span<{ backgroundColor: string }>`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin: 10px 0;
  color: var(--base-title);
  font-weight: bold;
  gap: 10px;

  span {
    display:flex;
    justify-content: center;
    align-items: center;
    background-color: ${(props) => props.backgroundColor};
    border-radius: 100%;
    padding: 8px;
  }

  svg {
    width: 22px;
    height: 22px;
    color: white; /* Define a cor dos ícones */
  }
`;

const Feature: React.FC<FeatureProps> = ({ icon, text, backgroundColor }) => {
  // Selecionando o ícone com base no nome da string
  const selectedIcon = iconMap[icon as keyof typeof iconMap];

  return (
    <FeatureWrapper backgroundColor={backgroundColor}>
      <span>{selectedIcon}</span> {/* Exibe o ícone correspondente */}
      {text}
    </FeatureWrapper>
  );
};

export default Feature;
