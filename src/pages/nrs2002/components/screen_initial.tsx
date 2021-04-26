import {
  IonItem,
  IonLabel,
  IonRadio,
  IonRadioGroup,
  IonText,
} from "@ionic/react";
import React from "react";

interface Props {
  title: string;
  value?: any;
  onChange(value: any): any;
}

export const ScreenInitial = ({ onChange, title, value = "true" }: Props) => {
  return (
    <>
      <IonItem>
        <IonText>{title} </IonText>
      </IonItem>
      <IonRadioGroup
        value={value ?? true}
        onIonChange={(value: any) => {
          onChange(value.target.value);
        }}
      >
        <IonItem>
          <IonLabel>Si</IonLabel>
          <IonRadio slot="start" value="true" />
        </IonItem>
        <IonItem>
          <IonLabel>No</IonLabel>
          <IonRadio slot="start" value="false" />
        </IonItem>
      </IonRadioGroup>
    </>
  );
};
