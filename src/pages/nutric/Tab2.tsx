import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import React, { useState } from "react";
import { ScreenSecond } from "../nrs2002/components/screen_second";
import "./Tab2.css";

const Tab2: React.FC = () => {
  const [edad, setEdad] = useState(0);
  const [apache, setApache] = useState(0);
  const [sofa, setSofa] = useState(0);
  const [comorbilidades, setCormobilidades] = useState(0);
  const [dias, setDias] = useState(0);
  const [pcr, setPcr] = useState(0);
  const [nutric, setNutric] = useState("NUTRIC-1");
  const getTotal = () => {
    return edad + apache + sofa + comorbilidades + dias + pcr;
  };
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItemDivider>NUTRIC.</IonItemDivider>
        <IonCard mode="ios">
          <IonCardHeader>Edad</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  // setNutritionalState(value);
                  setEdad(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "Entre < 49" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Entre 50-74",
                  },
                  { value: 2, text: "Puntuacion 2", description: "Entre > 75" },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>APACHE II (puntos)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setApache(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "<= 14" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Entre 15-19",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "Entre 20-28",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 2",
                    description: "Entre >= 29",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>SOFA (puntos)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setSofa(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "<= 5" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Entre 6-9",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: ">= 10",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Comorbilidades</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setCormobilidades(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "<= 1" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: ">= 2",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Días previos al ingreso</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setDias(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "Ninguno 0" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Entre >= 1",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>PCR mg/dl</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setPcr(value);
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: "< 10" },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Entre >= 10",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonItem>
          <IonLabel>Selecciona Nutric</IonLabel>
          <IonSelect
            value={nutric}
            okText="Aceptar"
            cancelText="Cancelar"
            onIonChange={(e: any) => {
              setNutric(e.target.value);
            }}
          >
            <IonSelectOption value="NUTRIC-1">
              1 (excluyendo PCR)
            </IonSelectOption>
            <IonSelectOption value="NUTRIC-2">
              2 (incluyendo PCR)
            </IonSelectOption>
          </IonSelect>
        </IonItem>
        {nutric === "NUTRIC-2" ? (
          <IonCard mode="ios">
            <IonCardHeader>NUTRIC (incluyendo PSR)</IonCardHeader>
            <IonCardHeader>Total puntos: {getTotal()}</IonCardHeader>
            <IonCardContent>
              {getTotal() <= 5 ? (
                <IonText>
                  Estos pacientes tienen un riesgo bajo de malnutrición
                </IonText>
              ) : (
                <ul>
                  <li>
                    Asociado con peor pronóstico clínico (mortalidad,
                    ventilación)
                  </li>
                  <li>
                    Estos pacientes con mayor probabilidad se beneficiarán de
                    terapia nutricional agresiva
                  </li>
                </ul>
              )}
            </IonCardContent>
          </IonCard>
        ) : (
          <IonCard mode="ios">
            <IonCardHeader>NUTRIC (excluyendo PSR)</IonCardHeader>
            <IonCardHeader mode="md">Total puntos: {getTotal()}</IonCardHeader>
            <IonCardContent>
              {getTotal() <= 4 ? (
                <IonText>
                  Estos pacientes tienen un riesgo bajo de malnutrición
                </IonText>
              ) : (
                <ul>
                  <li>
                    Asociado con peor pronóstico clínico (mortalidad,
                    ventilación)
                  </li>
                  <li>
                    Estos pacientes con mayor probabilidad se beneficiarán de
                    terapia{" "}
                  </li>
                  <li>Nutricional agresiva</li>
                </ul>
              )}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
