import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonRadio,
  IonRadioGroup,
  IonText,
} from "@ionic/react";
import React from "react";

interface ValueList {
  value: any;
  description: string;
  text: string;
}

interface Props {
  value: ValueList[];
  onChange: (value: any) => any;
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
          <IonItem key={index}>
            <IonText>
              <IonText color="primary">{item.text} </IonText> <br />
              <IonText color="medium">PUNTUACION {item.value} </IonText> <br />
              {item.description}
            </IonText>
            <IonRadio slot="start" value={item.value} />
          </IonItem>
        );
      })}
    </IonRadioGroup>
  );
});
