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
  MiffinData,
  MiffinHombres,
  MiffinMujeres,
} from "../../../services/miffinStrategy";
import { RequerimientoContext } from "../reqEnergetico";

export const Miffin: React.FC = React.memo(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const {
    addGenre,
    addMiffin,
    miffin: MiffinContext,
    genre: genreContex,
  } = useContext(RequerimientoContext);
  const [miffin, setChulmea] = useState(
    new Context<MiffinData, number>(new MiffinHombres())
  );
  const [talla, setTalla] = useState(0);
  const [edad, setEdad] = useState(0);
  const [peso, setPeso] = useState(0);
  const setMiffin = (genre: Genre): MiffinHombres | MiffinMujeres => {
    return genre === Genre.man ? new MiffinHombres() : new MiffinMujeres();
  };
  const getTotal = (value: MiffinData) => {
    const total = miffin.calculate({ ...value });
    return total;
  };
  const miffinTotalContext = () => {
    // console.log("Context", genreContex);
    const total = getTotal({
      edad: edad,
      peso: peso,
      talla: talla,
    }).toFixed(2);
    addMiffin(Number(total));
  };
  useEffect(() => {
    miffinTotalContext();
  }, [talla, edad, peso, genreContex]);

  return (
    <IonList>
      <IonItemDivider>
        Miffin St. joer necesidad energeticas basales
      </IonItemDivider>
      <IonItem>
        <IonLabel>Genero</IonLabel>
        <IonSelect
          interface="popover"
          value={genreContex}
          okText="Aceptar"
          cancelText="Cancelar"
          onIonChange={(e: any) => {
            addGenre(e.target.value);
            console.log("input ", e.target.value);
            const chulmeaGenre = setMiffin(genreContex);
            setChulmea(new Context<MiffinData, number>(chulmeaGenre));
          }}
        >
          <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
          <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
        </IonSelect>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Talla (cm)</IonLabel>
        <IonInput
          type="number"
          value={talla}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setTalla(Number(e.target.value));
          }}
        ></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position="stacked">Peso</IonLabel>
        <IonInput
          type="number"
          value={peso}
          pattern={"[0-9]"}
          placeholder="Enter Number"
          onIonChange={(e: any) => {
            setPeso(Number(e.target.value));
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
        <IonLabel>
          Requerimiento {genreContex === Genre.man ? "Hombre" : "Mujer"}
        </IonLabel>
        <IonBadge>{Number(MiffinContext)} kcal/d</IonBadge>
      </IonItem>
    </IonList>
  );
});
