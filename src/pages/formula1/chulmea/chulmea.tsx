/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonList,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonRange,
  IonIcon,
  IonText,
  IonBadge,
} from "@ionic/react";
import { heartOutline } from "ionicons/icons";
import React, { useState } from "react";
import { Genre } from "../../../enums/genre";
import {
  ChulmeaData,
  ChulmeaHombres,
  ChulmeaMujeres,
} from "../../../services/chulmeaAlturaStrategy";
import { Context } from "../../../services/energyService";

export const Chulmea: React.FC = React.memo(() => {
  const [chulmea, setChulmea] = useState(
    new Context<ChulmeaData, number>(new ChulmeaHombres())
  );
  const [altura, setAltura] = useState(0);
  const [edad, setEdad] = useState(0);
  const [gender, setGender] = useState<string>(Genre.man);
  const setChulmeaGenre = (genre: Genre): ChulmeaHombres | ChulmeaMujeres => {
    return genre === Genre.man ? new ChulmeaHombres() : new ChulmeaMujeres();
  };
  const getTotal = (alturaTalonRodilla: number, edad: number) => {
    return chulmea.calculate({
      alturaTalonRodilla,
      edad,
    });
  };
  return (
    <IonList>
      <IonItemDivider>
        Formula de CHULMEA para el calculo de la distancia TALON-RODILLA
      </IonItemDivider>
      <IonItem>
        <IonLabel>Genero</IonLabel>
        <IonSelect
          interface="popover"
          value={gender}
          okText="Aceptar"
          cancelText="Cancelar"
          onIonChange={(e: any) => {
            setGender(e.target.value);
            const chulmeaGenre = setChulmeaGenre(e.target.value);
            return setChulmea(new Context<ChulmeaData, number>(chulmeaGenre));
          }}
        >
          <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
          <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Altura talón rodilla</IonLabel>
        <IonInput
          type="number"
          value={altura}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setAltura(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Edad</IonLabel>
        <IonRange
          min={1}
          max={125}
          pin={true}
          value={edad}
          onIonChange={(e: any) => {
            setEdad(Number(e.target.value));
          }}
        >
          <IonIcon size="small" slot="start" icon={heartOutline} />
          <IonText slot="end">23</IonText>
        </IonRange>
      </IonItem>
      <IonItemDivider>Resultado</IonItemDivider>
      <IonItem>
        <IonLabel>Talla {gender === Genre.man ? "Hombre" : "Mujer"}</IonLabel>
        <IonBadge> {getTotal(altura, edad).toFixed(2)} cm</IonBadge>
      </IonItem>
    </IonList>
  );
});
