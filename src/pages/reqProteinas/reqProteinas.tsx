/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonImg,
  IonItem,
  IonLabel,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonBadge,
} from "@ionic/react";
import React, { useMemo, useState } from "react";
import ReqProteinaImg from "../../assets/reqProteina.svg";
import { Condicion } from "./condicion";
enum Enfermedad {
  recomendacionDietetica,
  estres,
  anabolismo,
  hipermetabolismo,
  quemadura,
  insuficienciaRenal,
  dialisis,
  insuficienciaHepatica,
}
const defaultValueEnfermedad = {
  [Enfermedad.recomendacionDietetica]: 0.8,
  [Enfermedad.estres]: 1,
  [Enfermedad.anabolismo]: 1.3,
  [Enfermedad.hipermetabolismo]: 1.5,
  [Enfermedad.quemadura]: 1.2,
  [Enfermedad.insuficienciaRenal]: 0.6,
  [Enfermedad.dialisis]: 1.2,
  [Enfermedad.insuficienciaHepatica]: 0.5,
};
export const ReqProteinas: React.FC = () => {
  const [enfermedad, setEnfermedad] = useState(
    Enfermedad.recomendacionDietetica
  );
  const [peso, setPeso] = useState(0);
  const [condicionEnfermedad, setCondicionEnfermedad] = useState(
    defaultValueEnfermedad[Enfermedad.recomendacionDietetica]
  );
  const requerimientoProteina = () => {
    return (condicionEnfermedad * peso).toFixed(2);
  };
  const resultEnfermedad = (enfermedad: Enfermedad) => {
    const resultComponent: any = {
      [Enfermedad.recomendacionDietetica]: (
        <Condicion
          title={"Recomendacion dietetica"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={80}
          max={100}
        />
      ),
      [Enfermedad.estres]: (
        <Condicion
          title={"Bajo estres: mantenimiento"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={100}
          max={120}
        />
      ),
      [Enfermedad.anabolismo]: (
        <Condicion
          title={"Anabolismo"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={130}
          max={170}
        />
      ),
      [Enfermedad.hipermetabolismo]: (
        <Condicion
          title={"Hipermetabolismo"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={150}
          max={250}
        />
      ),
      [Enfermedad.quemadura]: (
        <IonItem>
          <IonSelect
            interface="popover"
            value={condicionEnfermedad}
            okText="Aceptar"
            cancelText="Cancelar"
            onIonChange={(e: any) => {
              setCondicionEnfermedad(e.target.value);
              return;
            }}
          >
            <IonSelectOption value={1.2}>{"<10%"}</IonSelectOption>
            <IonSelectOption value={1.3}>{"11% a 20%"}</IonSelectOption>
            <IonSelectOption value={1.5}>{"21% a 30%"}</IonSelectOption>
            <IonSelectOption value={1.8}>{"31% a 50%"}</IonSelectOption>
            <IonSelectOption value={2.0}>{">50%"}</IonSelectOption>
          </IonSelect>
        </IonItem>
      ),
      [Enfermedad.insuficienciaRenal]: (
        <Condicion
          title={"Insuficiencia renal: no dialisis"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={60}
          max={100}
        />
      ),
      [Enfermedad.dialisis]: (
        <Condicion
          title={"Dialisis"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={120}
          max={170}
        />
      ),
      [Enfermedad.insuficienciaHepatica]: (
        <Condicion
          title={"Insuficiencia hepatica severa"}
          state={condicionEnfermedad}
          setState={setCondicionEnfermedad}
          min={50}
          max={150}
        />
      ),
    };
    return resultComponent[enfermedad];
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Req. Proteinas</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen={true}>
        {useMemo(
          () => (
            <IonImg
              className="fade-in"
              style={{
                width: "10em",
                hegiht: "10em",
                display: "auto",
                marginLeft: "auto",
                marginRight: "auto",
                marginTop: "10px",
              }}
              src={ReqProteinaImg}
            ></IonImg>
          ),
          []
        )}

        {useMemo(
          () => (
            <IonItem>
              <IonLabel position="stacked">Peso (Kg)</IonLabel>
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
            <IonSelect
              interface="popover"
              value={enfermedad}
              okText="Aceptar"
              cancelText="Cancelar"
              onIonChange={(e: any) => {
                const enfermedad = e.target.value as Enfermedad;
                setCondicionEnfermedad(defaultValueEnfermedad[enfermedad]);
                setEnfermedad(e.target.value);
              }}
            >
              <IonSelectOption value={Enfermedad.recomendacionDietetica}>
                Recomendacion dietetica
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.estres}>
                Bajo estres
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.anabolismo}>
                Anabolismo
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.hipermetabolismo}>
                Hipermetabolismo
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.quemadura}>
                Quemadura
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.insuficienciaRenal}>
                Insuficiencia renal: no dialisis
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.dialisis}>
                Dialisis
              </IonSelectOption>
              <IonSelectOption value={Enfermedad.insuficienciaHepatica}>
                Dialisis
              </IonSelectOption>
            </IonSelect>
          ),
          [enfermedad]
        )}
        {resultEnfermedad(enfermedad)}
        <IonItem>
          <IonLabel>Req. Proteina gr: </IonLabel>
          <IonBadge>{requerimientoProteina()} Kcal</IonBadge>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
