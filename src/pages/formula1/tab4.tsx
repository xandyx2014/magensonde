/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { IonContent, IonPage, IonButton, IonImg } from "@ionic/react";
import {
  barbellOutline,
  accessibilityOutline,
  heartOutline,
} from "ionicons/icons";
import workOutSvg from "../../assets/workout.svg";
import { Chulmea } from "./chulmea/chulmea";

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="fade-in">
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
        <Chulmea></Chulmea>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
