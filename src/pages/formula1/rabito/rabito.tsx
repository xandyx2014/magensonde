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
import React, { useState } from "react";
import { Genre } from "../../../enums/genre";
import { Context } from "../../../services/energyService";
import {
  RabitoData,
  RabitoHombres,
  RabitoMujeres,
} from "../../../services/estimacionPesoStrategy";

export const Rabito: React.FC = React.memo(() => {
  const [chulmea, setChulmea] = useState(
    new Context<RabitoData, number>(new RabitoHombres())
  );
  const [brazo, setBrazo] = useState<number>(0);
  const [abdominal, setAbdominal] = useState<number>(0);
  const [pantorilla, setPantorilla] = useState<number>(0);
  const [gender, setGender] = useState<string>(Genre.man);
  const setRabitoGenre = (genre: Genre): RabitoHombres | RabitoMujeres => {
    return genre === Genre.man ? new RabitoHombres() : new RabitoMujeres();
  };
  const getTotal = (value: RabitoData) => {
    return chulmea.calculate({
      ...value,
    });
  };
  return (
    <IonList>
      <IonItemDivider>
        Formula de Rabito para la estimacion de peso.
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
            const rabitoGenre = setRabitoGenre(e.target.value);
            console.log(rabitoGenre);
            return setChulmea(new Context<RabitoData, number>(rabitoGenre));
          }}
        >
          <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
          <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Circuferencia brazon cm</IonLabel>
        <IonInput
          type="number"
          value={brazo}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setBrazo(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Circuferencia abdominal cm</IonLabel>
        <IonInput
          type="number"
          value={abdominal}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setAbdominal(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Circuferencia pantorilla cm</IonLabel>
        <IonInput
          type="number"
          value={pantorilla}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setPantorilla(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItemDivider>Resultado</IonItemDivider>
      <IonItem>
        <IonLabel>
          Peso estimado {gender === Genre.man ? "Hombre" : "Mujer"}
        </IonLabel>
        <IonBadge>
          {getTotal({
            circuferenciaBrazo: brazo,
            circuferenciaAbdominal: abdominal,
            circuferenciaPantorilla: pantorilla,
          }).toFixed(2)}
        </IonBadge>
      </IonItem>
    </IonList>
  );
});
