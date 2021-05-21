/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import {
  IonContent,
  IonPage,
  IonImg,
  IonHeader,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import workOutSvg from "../../assets/workout.svg";
import { Chulmea } from "./chulmea/chulmea";
import { Rabito } from "./rabito/rabito";
import { ChulmeaPeso } from "./chulmea/chulmeaPeso";
import { Hidrica } from "./hidrica/hidrica";

export const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Peso y talla</IonTitle>
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
              src={workOutSvg}
            ></IonImg>
          ),
          []
        )}
        {/* <Chulmea /> */}
        {useMemo(
          () => (
            <Chulmea />
          ),
          []
        )}
        {useMemo(
          () => (
            <Rabito />
          ),
          []
        )}
        {useMemo(
          () => (
            <ChulmeaPeso />
          ),
          []
        )}
        {useMemo(
          () => (
            <Hidrica />
          ),
          []
        )}
      </IonContent>
    </IonPage>
  );
};
