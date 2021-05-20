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
import React, { useContext, useEffect, useState } from "react";
import { RequerimientoContext } from "../reqEnergetico";

export enum Actividad {
  reposoCama = 1.0,
  movimientoCama = 1.2,
  deambular = 1.3,
}
export const FactorActividad: React.FC = () => {
  const {
    miffin: miffinContext,
    addFactorActividad,
    factorActividad: factorActividadContext,
  } = useContext(RequerimientoContext);
  const [factorActivida, setFactorActivida] = useState(Actividad.reposoCama);
  useEffect(() => {
    const totalFactorActividad = factorActivida * miffinContext;
    addFactorActividad(totalFactorActividad);
  }, [miffinContext, factorActivida]);

  return (
    <IonList>
      <IonItem>
        <IonLabel>Factor de actividad</IonLabel>
        <IonSelect
          interface="popover"
          value={factorActivida}
          okText="Aceptar"
          cancelText="Cancelar"
          onIonChange={(e: any) => {
            setFactorActivida(e.target.value);
          }}
        >
          <IonSelectOption value={Actividad.reposoCama}>
            Reposo en cama
          </IonSelectOption>
          <IonSelectOption value={Actividad.movimientoCama}>
            Movimiento en cama
          </IonSelectOption>
          <IonSelectOption value={Actividad.deambular}>
            Deambular
          </IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel>valor: </IonLabel>
        <IonBadge>{factorActividadContext} Kcal</IonBadge>
      </IonItem>
    </IonList>
  );
};
