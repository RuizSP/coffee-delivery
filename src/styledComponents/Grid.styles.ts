import styled from "styled-components";

interface GridProps {
  columns?: string; // Exemplo: "repeat(3, 1fr)" ou "auto"
  rows?: string; // Exemplo: "repeat(2, 100px)" ou "auto"
  gap?: string; // Exemplo: "10px" ou "1rem"
  width?: string; // Exemplo: "500px" ou "100%"
  height?: string; // Exemplo: "300px" ou "auto"
  margin?: string; // Controle da margem externa (ex: "10px" ou "20px 10px")
  padding?:string;
}

export const Grid = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => props.columns || "auto"};
  grid-template-rows: ${(props) => props.rows || "auto"};
  gap: ${(props) => props.gap || "0"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};
  margin: ${(props) => props.margin || "0"}; /* Controla a margem externa */
  padding:${(props) => props.padding || "0"};
`;
