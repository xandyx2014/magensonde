/* eslint-disable @typescript-eslint/no-explicit-any */
import { IonIcon, IonItem, IonLabel, IonRange, IonText } from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import React from "react";

interface Props {
  state: any;
  setState: any;
  min: number;
  max: number;
  title: string;
}

export const Condicion: React.FC<Props> = React.memo(
  ({ state, setState, min, max, title }: Props) => {
    return (
      <IonItem>
        <IonLabel position="stacked">{title}</IonLabel>
        <IonRange
          min={min}
          max={max}
          onIonChange={(e: any) => {
            setState(Number(e.target.value) / 100);
          }}
        >
          <IonIcon size="small" slot="start" icon={heartOutline} />
          <IonText slot="end">{state}</IonText>
        </IonRange>
      </IonItem>
    );
  }
);
