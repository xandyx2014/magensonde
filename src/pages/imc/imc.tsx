/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonBadge,
} from "@ionic/react";
import inRangue from "lodash.inrange";
import React, { useMemo, useState } from "react";
import ImcImg from "../../assets/imc.svg";
export const Imc: React.FC = () => {
  const [estatura, setEstatura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [mensaje, setMensaje] = useState("");
  const imc = (): number => {
    const imcResult = peso / Math.pow(estatura, 2);

    return imcResult;
  };
  const mensajeResult = (imcResult: number) => {
    if (inRangue(imcResult, 0, 18.5)) {
      return "Peso insuficiente";
    }
    if (inRangue(imcResult, 18.5, 24.9)) {
      return "Peso normal";
    }
    if (inRangue(imcResult, 25, 26.9)) {
      return "Sobre peso grado I";
    }
    if (inRangue(imcResult, 27, 29.9)) {
      return "Sobrepeso grado II (preobesidad)";
    }
    if (inRangue(imcResult, 30, 34.9)) {
      return "Obesidad grado I";
    }
    if (inRangue(imcResult, 35, 39.9)) {
      return "Obesidad grado II";
    }
    if (inRangue(imcResult, 40, 49.9)) {
      return "Obesidad grado III (mórbida)";
    }
    if (inRangue(imcResult, 40, Math.pow(100000, 10000))) {
      return "Obesidad grado IV (extrema)";
    }
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>IMC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {useMemo(
          () => (
            <IonImg
              className="fade-in"
              style={{
                width: "10em",
                hegiht: "10em",
                display: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
              src={ImcImg}
            ></IonImg>
          ),
          []
        )}
        {useMemo(
          () => (
            <IonItem>
              <IonLabel position="stacked">Peso (Kg)</IonLabel>
              <IonInput
                type="number"
                value={peso}
                pattern={"[0-9]"}
                placeholder="Escriba numero"
                onIonChange={(e: any) => {
                  setPeso(Number(e.target.value));
                }}
              ></IonInput>
            </IonItem>
          ),
          [peso]
        )}
        {useMemo(
          () => (
            <IonItem>
              <IonLabel position="stacked">Estatura (m)</IonLabel>
              <IonInput
                type="number"
                value={estatura}
                pattern={"[0-9]"}
                placeholder="Escriba numero"
                onIonChange={(e: any) => {
                  setEstatura(Number(e.target.value));
                }}
              ></IonInput>
            </IonItem>
          ),
          [estatura]
        )}
        <IonItem>
          <IonLabel>Imc: </IonLabel>
          <IonBadge>{imc().toFixed(2)} </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel>Tipo: </IonLabel>
          <IonBadge>{mensajeResult(imc())} </IonBadge>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
