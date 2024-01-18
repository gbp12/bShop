import React from "react";
import { HomeContainer } from "./styles";
import Searcher from "../../components/Searcher";

export default function Home() {
  return (
    <HomeContainer>
      <h1>Home</h1>
      <Searcher />
    </HomeContainer>
  );
}
