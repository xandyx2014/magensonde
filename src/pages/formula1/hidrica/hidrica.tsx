/* eslint-disable react-hooks/exhaustive-deps */
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
  IonImg,
} from "@ionic/react";
import React, { useCallback, useMemo, useState } from "react";
import waterSvg from "../../../assets/water.svg";
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
  const pesoCallback = useCallback((e) => {
    setPeso(Number(e.target.value));
  }, []);

  return (
    <>
      <IonList>
        <IonItemDivider>Necesidades hidricas</IonItemDivider>
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
              src={waterSvg}
            ></IonImg>
          ),
          []
        )}
        {useMemo(
          () => (
            <IonItem>
              <IonLabel position="stacked">Peso en (Kg)</IonLabel>
              <IonInput
                type="number"
                value={peso}
                pattern={"[0-9]"}
                placeholder="Peso en kg"
                onIonChange={pesoCallback}
              ></IonInput>
            </IonItem>
          ),
          [peso]
        )}
        {useMemo(
          () => (
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
          ),
          [fiebre]
        )}
        <IonItemDivider>Resultado</IonItemDivider>
        <IonItem>
          <IonLabel>Necesidad</IonLabel>
          <IonBadge>
            {useMemo(() => resultado(), [peso, fiebre])} (ml/dia)
          </IonBadge>
        </IonItem>
      </IonList>
    </>
  );
};
