/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonBadge,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { RequerimientoContext } from "../reqEnergetico";

export enum Agresion {
  cirugiaProgramada = 1.0,
  traumatismo = 1.35,
  sepsis = 1.6,
  quemados = 2.1,
}
export const FactorAgresion: React.FC = () => {
  const {
    addFactorAgresion,
    factorActividad: factorActividadContext,
    factorAgresion: factorAgresionContext,
  } = useContext(RequerimientoContext);
  const [factorAgresion, setFactorAgresion] = useState(
    Agresion.cirugiaProgramada
  );
  useEffect(() => {
    const totalFactorActividad = factorActividadContext * factorAgresion;
    addFactorAgresion(totalFactorActividad);
  }, [factorAgresion, factorActividadContext]);

  return (
    <IonList>
      <IonItem>
        <IonLabel>Factor de agresion</IonLabel>
        {useMemo(
          () => (
            <IonSelect
              interface="popover"
              value={factorAgresion}
              okText="Aceptar"
              cancelText="Cancelar"
              onIonChange={(e: any) => {
                setFactorAgresion(e.target.value);
              }}
            >
              <IonSelectOption value={Agresion.cirugiaProgramada}>
                Cirugia Programada
              </IonSelectOption>
              <IonSelectOption value={Agresion.traumatismo}>
                traumatismo
              </IonSelectOption>
              <IonSelectOption value={Agresion.sepsis}>Sepsis</IonSelectOption>
              <IonSelectOption value={Agresion.quemados}>
                Quemados
              </IonSelectOption>
            </IonSelect>
          ),
          [factorAgresion]
        )}
      </IonItem>
      <IonItem>
        <IonLabel>Req. Energetico Paciente: </IonLabel>
        <IonBadge>
          {useMemo(
            () => Number(factorAgresionContext).toFixed(2),
            [factorAgresionContext]
          )}{" "}
          Kcal
        </IonBadge>
      </IonItem>
    </IonList>
  );
};
