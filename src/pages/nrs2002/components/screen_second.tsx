import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";

interface ValueList {
  value: any;
  description: string;
  text: string;
}

interface Props {
  value: ValueList[];
  onChange: (value: any) => any;
  mode?: "ios" | "md";
  showScore?: boolean;
}

export const ScreenSecond = React.memo((props: Props) => {
  return (
    <IonRadioGroup
      onIonChange={(value: any) => {
        props.onChange(value.target.value);
      }}
    >
      {props.value.map((item, index) => {
        return (
          <IonItem key={index} mode={props.mode}>
            <IonText>
              <IonText color="primary" mode={props.mode}>
                {item.text}
              </IonText>

              {props.showScore && (
                <>
                  <br />
                  <IonText color="medium" mode={props.mode}>
                    PUNTUACION {item.value}
                  </IonText>
                </>
              )}

              <br />
              {item.description}
            </IonText>
            <IonRadio slot="start" value={item.value} mode={props.mode} />
          </IonItem>
        );
      })}
    </IonRadioGroup>
  );
});
