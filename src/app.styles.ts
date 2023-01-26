import { css } from "@emotion/css";

export const root = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 1rem;
  max-width: 1024px;
  margin: 0 auto;
  @media (min-width: 720px) {
    flex-direction: row;
  }
`;

export const container = css`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  height: 100vh;
  flex: 1;
  gap: 1rem;
`;

export const span = css`
  font-size: 1.9rem;
  font-weight: 600;
  text-align: center;
`;
