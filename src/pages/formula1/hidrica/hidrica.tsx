/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonList,
  IonItemDivider,
  IonInput,
  IonItem,
  IonLabel,
  IonBadge,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useState } from "react";

export const Hidrica: React.FC = () => {
  const [peso, setPeso] = useState<number>(0);
  const [fiebre, setFiebre] = useState<boolean>(false);
  const resultado = () => {
    const result = 1500 + 20 * (peso - 20);
    if (fiebre) {
      return result + result * 0.12;
    }
    return result;
  };
  return (
    <>
      <IonList>
        <IonItemDivider>Necesidades hidricas</IonItemDivider>
        <IonItem>
          <IonLabel position="stacked">Peso en (Kg)</IonLabel>
          <IonInput
            type="number"
            value={peso}
            pattern={"[0-9]"}
            placeholder="Peso en kg"
            onIonChange={(e: any) => {
              setPeso(Number(e.target.value));
            }}
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonLabel>Estado de salud</IonLabel>
          <IonSelect
            interface="popover"
            value={fiebre}
            okText="Aceptar"
            cancelText="Cancelar"
            onIonChange={(e: any) => {
              setFiebre(e.target.value);
            }}
          >
            <IonSelectOption value={true}>Con Fiebre</IonSelectOption>
            <IonSelectOption value={false}>Sin Fiebre</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItemDivider>Resultado</IonItemDivider>
        <IonItem>
          <IonLabel>Necesidad</IonLabel>
          <IonBadge>{resultado()} (ml/dia)</IonBadge>
        </IonItem>
      </IonList>
    </>
  );
};
