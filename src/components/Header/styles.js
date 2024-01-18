import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  height: 70px;
  background-color: #113946;
  border-bottom: 1px solid #f5f5f5;
  color: #f5f5f5;
  position: fixed;
  width: 100%;
  z-index: 100;
  top: 0;
`;

export const Logo = styled.h2`
  font-size: 30px;
  font-weight: 700;
  cursor: pointer;
`;
