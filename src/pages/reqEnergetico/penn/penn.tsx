/* eslint-disable react-hooks/exhaustive-deps */
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
import React, { useContext, useEffect, useState } from "react";
import { Genre } from "../../../enums/genre";
import { Context } from "../../../services/energyService";

import {
  PennData,
  PennHombres,
  PennMujeres,
} from "../../../services/pennState";
import { RequerimientoContext } from "../reqEnergetico";

export const Penn: React.FC = React.memo(() => {
  const { genre, miffin: miffinContext } = useContext(RequerimientoContext);
  const setPennGenre = (genre: Genre): PennHombres | PennMujeres => {
    return genre === Genre.man ? new PennHombres() : new PennMujeres();
  };
  const [penn, setPenn] = useState(
    new Context<PennData, number>(new PennHombres())
  );

  const [miffin, setMiffin] = useState(0);
  const [temperatura, setTemperatura] = useState(0);
  const [ventilacion, setVentilacion] = useState(0);
  useEffect(() => {
    const genrePenn = setPennGenre(genre);
    setMiffin(miffinContext);
    setPenn(new Context<PennData, number>(genrePenn));
  }, [miffinContext, genre]);

  const getTotal = (value: PennData) => {
    const total = penn.calculate({ ...value });
    return total;
  };
  return (
    <IonList>
      <IonItemDivider>
        Penn State University Necesidades energeticas basales con ventilador
      </IonItemDivider>
      <IonItem>
        <IonLabel position="stacked">Temperatura maxima</IonLabel>
        <IonInput
          type="number"
          value={temperatura}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setTemperatura(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Ventilacion por Minuto</IonLabel>
        <IonInput
          type="number"
          value={ventilacion}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setVentilacion(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItemDivider>Resultado</IonItemDivider>
      <IonItem>
        <IonLabel>
          Requerimiento {genre === Genre.man ? "Hombre" : "Mujer"}
        </IonLabel>
        <IonBadge>
          {getTotal({
            miffin: miffin,
            temperaturaMax: temperatura,
            ventilacion: ventilacion,
          }).toFixed(2)}{" "}
          Kcal
        </IonBadge>
      </IonItem>
    </IonList>
  );
});
