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
import React, { useContext, useEffect, useMemo, useState } from "react";
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
    addMiffin(Number(total));
    return total;
  };
  /* const miffinTotalContext = () => {
    // console.log("Context", genreContex);
    const total = getTotal({
      edad: edad,
      peso: peso,
      talla: talla,
    }).toFixed(2);
    addMiffin(Number(total));
  }; */
  /* useEffect(() => {
    console.log("Context genre", genreContex);
    miffinTotalContext();
  }, [genreContex, talla, edad, peso]); */

  return (
    <IonList>
      <IonItemDivider>
        Miffin St. joer necesidad energeticas basales
      </IonItemDivider>
      <IonItem>
        <IonLabel>Genero</IonLabel>
        {useMemo(
          () => (
            <IonSelect
              interface="popover"
              value={genreContex}
              okText="Aceptar"
              cancelText="Cancelar"
              onIonChange={(e: any) => {
                console.log("input ", e.target.value);
                addGenre(e.target.value);

                const chulmeaGenre = setMiffin(genreContex);
                setChulmea(new Context<MiffinData, number>(chulmeaGenre));
              }}
            >
              {" "}
              <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
              <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
            </IonSelect>
          ),
          [genreContex]
        )}
        {/*  <IonSelect
          interface="popover"
          value={genreContex}
          okText="Aceptar"
          cancelText="Cancelar"
          onIonChange={(e: any) => {
            console.log("input ", e.target.value);
            addGenre(e.target.value);

            const chulmeaGenre = setMiffin(genreContex);
            setChulmea(new Context<MiffinData, number>(chulmeaGenre));
          }}
        >
          <IonSelectOption value={Genre.man}>Hombre</IonSelectOption>
          <IonSelectOption value={Genre.woman}>Mujer</IonSelectOption>
        </IonSelect> */}
      </IonItem>
      {useMemo(
        () => (
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
        ),
        [talla]
      )}
      {useMemo(
        () => (
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
        ),
        [peso]
      )}
      {useMemo(
        () => (
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
        ),
        [edad]
      )}
      <IonItemDivider>Resultado</IonItemDivider>
      <IonItem>
        <IonLabel>
          Requerimiento{" "}
          {useMemo(
            () => (genreContex === Genre.man ? "Hombre" : "Mujer"),
            [genreContex]
          )}
        </IonLabel>
        <IonBadge>
          {useMemo(
            () =>
              getTotal({
                edad: edad,
                peso: peso,
                talla: talla,
              }),
            [edad, peso, talla, genreContex]
          )}{" "}
          kcal/d
        </IonBadge>
      </IonItem>
    </IonList>
  );
});
