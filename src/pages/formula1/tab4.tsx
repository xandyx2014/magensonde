/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo } from "react";
import { IonContent, IonPage, IonImg } from "@ionic/react";
import workOutSvg from "../../assets/workout.svg";
import { Chulmea } from "./chulmea/chulmea";
import { Rabito } from "./rabito/rabito";
import { ChulmeaPeso } from "./chulmea/chulmeaPeso";
import { Hidrica } from "./hidrica/hidrica";

export const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
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
