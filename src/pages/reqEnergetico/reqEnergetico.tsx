/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { IonPage, IonContent, IonImg } from "@ionic/react";
import React, { useEffect, useMemo, useState } from "react";
import Home from "../../assets/home.svg";
import { Genre } from "../../enums/genre";
import { FactorActividad } from "./factorActividad/factorActividad";
import { FactorAgresion } from "./factorAgresion/factorAgresion";
import { Miffin } from "./miffin/miffin";
import { Penn } from "./penn/penn";
export const RequerimientoContext = React.createContext({
  genre: Genre.man,
  miffin: 0,
  factorActividad: 0,
  factorAgresion: 0,
  addFactorActividad: (_value: number) => {},
  addFactorAgresion: (_value: number) => {},
  addGenre: (_genre: Genre) => {},
  addMiffin: (_value: number) => {},
});
export const RequerimientoHidrico: React.FC = () => {
  const [miffin, setMiffin] = useState<number>(0);
  const [genre, setGenre] = useState(Genre.man);
  const [factorActivida, setFactorActividad] = useState(0);
  const [factorAgresion, setFactorAgresion] = useState(0);
  const addGenre = (genre: Genre): void => setGenre(genre);
  const addMiffin = (value: number): void => setMiffin(value);
  const addFactorActividad = (value: number): void => setFactorActividad(value);
  const addFactorAgresion = (value: number): void => setFactorAgresion(value);
  useEffect(() => {
    console.log("Genre", genre);
  }, [genre]);
  return (
    <IonPage>
      <RequerimientoContext.Provider
        value={{
          genre: genre,
          miffin: miffin,
          factorActividad: factorActivida,
          factorAgresion: factorAgresion,
          addFactorActividad,
          addFactorAgresion,
          addGenre,
          addMiffin,
        }}
      >
        <IonContent className="fade-in">
          {useMemo(
            () => (
              <IonImg
                style={{
                  width: "10em",
                  hegiht: "10em",
                  display: "auto",
                  marginLeft: "auto",
                  marginRight: "auto",
                  marginTop: "10px",
                }}
                src={Home}
              ></IonImg>
            ),
            []
          )}
          {useMemo(
            () => (
              <Miffin></Miffin>
            ),
            []
          )}
          {useMemo(
            () => (
              <Penn></Penn>
            ),
            []
          )}
          {useMemo(
            () => (
              <FactorActividad></FactorActividad>
            ),
            []
          )}
          {useMemo(
            () => (
              <FactorAgresion></FactorAgresion>
            ),
            []
          )}
        </IonContent>
      </RequerimientoContext.Provider>
    </IonPage>
  );
};
