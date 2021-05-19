/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonList,
  IonItemDivider,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonInput,
  IonBadge,
} from "@ionic/react";
import React, { useState } from "react";
import { Genre } from "../../../enums/genre";
import {
  ChumleaPesoData,
  ChumleaPesoHombres,
  ChumleaPesoMujeres,
} from "../../../services/chumleaPesoStrategy";

import { Context } from "../../../services/energyService";

export const ChulmeaPeso: React.FC = React.memo(() => {
  const [chulmea, setChulmea] = useState(
    new Context<ChumleaPesoData, number>(new ChumleaPesoHombres())
  );
  const [brazo, setBrazo] = useState(0);
  const [pantorilla, setPantorilla] = useState(0);
  const [pliegueSubEscapular, setPliegueSubEscapular] = useState(0);
  const [talonRodilla, setTalonRodilla] = useState(0);
  const [gender, setGender] = useState<string>(Genre.man);
  const setChulmeaGenre = (
    genre: Genre
  ): ChumleaPesoHombres | ChumleaPesoMujeres => {
    return genre === Genre.man
      ? new ChumleaPesoHombres()
      : new ChumleaPesoMujeres();
  };
  const getTotal = (value: ChumleaPesoData) => {
    return chulmea.calculate({
      ...value,
    });
  };
  return (
    <IonList>
      <IonItemDivider>
        Formula de Chumlea para la Estimacion del peso
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
            return setChulmea(
              new Context<ChumleaPesoData, number>(chulmeaGenre)
            );
          }}
        >
          <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
          <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Circuferencia del brazon (cm)</IonLabel>
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
        <IonLabel position="stacked">
          Circuferencia de la pantorilla (cm)
        </IonLabel>
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
      <IonItem>
        <IonLabel position="stacked">Pliegue subescapular mm</IonLabel>
        <IonInput
          type="number"
          value={pliegueSubEscapular}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setPliegueSubEscapular(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Altura Talon / Rodilla (cm)</IonLabel>
        <IonInput
          type="number"
          value={talonRodilla}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setTalonRodilla(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItemDivider>Resultado</IonItemDivider>
      <IonItem>
        <IonLabel>Talla {gender === Genre.man ? "Hombre" : "Mujer"}</IonLabel>
        <IonBadge>
          {getTotal({
            alturaTalonRodilla: talonRodilla,
            circunferenciaBrazo: brazo,
            circunferenciaPantorilla: pantorilla,
            pliegueSubescapular: pliegueSubEscapular,
          }).toFixed(2)}
          cm
        </IonBadge>
      </IonItem>
    </IonList>
  );
});
