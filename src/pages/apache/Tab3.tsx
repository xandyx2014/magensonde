import {
  IonBadge,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonImg,
  IonItem,
  IonItemDivider,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { ScreenSecond } from "../nrs2002/components/screen_second";
import inRangue from "lodash.inrange";
import { Pie } from "react-chartjs-2";
import Eyes from "../../assets/eyes.png";
import Mouth from "../../assets/mouth.png";
import Hand from "../../assets/hand.png";
import React, { useMemo, useState } from "react";
import "./Tab3.css";
import ApacheImg from "../../assets/apache.svg";
export const Tab3: React.FC = () => {
  const [temperatura, setTemperatura] = useState(0);
  const [presion, setPresion] = useState(0);
  const [cardiaca, setCardiaca] = useState(0);
  const [respiratoria, setRespiratoria] = useState(0);
  const [oxigenacion, setOxigenacion] = useState(0);
  const [ph, setPh] = useState(0);
  const [na, setNa] = useState(0);
  const [k, setK] = useState(0);
  const [creatinina, setCreatinina] = useState(0);
  const [hemotrocitro, setHematrocito] = useState(0);
  const [leucocitos, setLeucocitos] = useState(0);
  const [aberturaOscular, setAberturaOscular] = useState(0);
  const [pespuestasVerbal, setPespuestasVerbal] = useState(0);
  const [respuestaMotriz, setRespuestaMotriz] = useState(0);
  const [enfermedadCronica, setEnfermedadCronica] = useState(0);
  const [edad, setEdad] = useState(0);
  const totalSum = (): number => {
    return (
      Number(temperatura) +
      Number(presion) +
      Number(cardiaca) +
      Number(respiratoria) +
      Number(oxigenacion) +
      Number(ph) +
      Number(na) +
      Number(k) +
      Number(creatinina) +
      Number(hemotrocitro) +
      Number(leucocitos) +
      Number(aberturaOscular) +
      Number(pespuestasVerbal) +
      Number(respuestaMotriz) +
      Number(enfermedadCronica) +
      Number(edad)
    );
  };
  const mortalidad = () => {
    if (inRangue(totalSum(), 5, 9)) return 4;
    if (inRangue(totalSum(), 10, 14)) return 15;
    if (inRangue(totalSum(), 15, 19)) return 25;
    if (inRangue(totalSum(), 20, 24)) return 40;
    if (inRangue(totalSum(), 25, 29)) return 55;
    if (inRangue(totalSum(), 30, 34)) return 75;
    if (inRangue(totalSum(), 35, 100000)) return 85;
  };
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Apache II</IonTitle>
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
              src={ApacheImg}
            ></IonImg>
          ),
          []
        )}
        <IonItemDivider>APACHE II.</IonItemDivider>
        <IonCard mode="ios">
          <IonCardHeader>Temperatura rectal (*c)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setTemperatura(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 40,9",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "39 - 40,9",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "38,5 - 38,9",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "36 - 38,4",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "34 - 35,9",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "32 - 31,9",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "30 - 31,9",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 30",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Presion Arterial media (MMHG)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setPresion(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 159",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "130 - 159",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "110 - 129",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "70 - 109",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "50 - 69",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 50",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Frec. Cardiaca (IMP)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setCardiaca(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 179",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "39 - 40,9",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "110 - 129",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "70 - 109",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "55 - 69",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "40 - 54",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 40",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Frec. Respiratorioa (RPM)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setRespiratoria(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 49",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "35 - 49",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "25 - 34",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "12 - 24",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "10 - 11",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "6 - 9",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 6",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>
            Oxigenacion <br />
            Si FIO {">="} 0,5 (AaD2) <br />
            SI FIO2 {">="} 0,5 (PaD2)
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setOxigenacion(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "499",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "350 - 499",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "200-349",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "> 200 O < 70",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "61 - 70",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "56 - 70",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 56",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>PH Arterial</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setPh(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 7,9",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "7,60 - 7,69",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "7,6 - 7,59",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "7,33 - 7,49",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "7,25 - 7,32",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "7,15 - 7,24",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 7,15",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Na plasmatico (mmol/L)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setNa(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 179",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "160 - 179",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "155 - 159",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "150 - 154",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "130 - 149",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "120 - 129",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "111 - 119",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 111",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>K plasmatico (mmol/L)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setK(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 6,9",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "6,0 - 6,9",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "5,5 - 5,9",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "3,5 - 5,4",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "3,0 - 3,4",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "2,5 - 2,9",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 2,5",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Creatinina * (mg/DL)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setCreatinina(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 3,9",
                  },
                  {
                    value: -3,
                    text: "Puntuacion 3",
                    description: "2,0 - 3,4",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "15 - 1,9",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "0,6 - 1,4",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "1,2 - 9",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Hemotrocitro (%)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setHematrocito(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 3,4",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "55 - 59,9",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "46 - 49,9",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "30 - 45,9",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 20",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Leucocitos (x1000)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setLeucocitos(Math.abs(value));
                }}
                value={[
                  {
                    value: -4,
                    text: "Puntuacion 4",
                    description: "> 59,9",
                  },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "20 - 39,9",
                  },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "15 - 19,9",
                  },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "3 - 14,9",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "< 1",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonItemDivider>Escala de coma de GLASGOW</IonItemDivider>
        <IonCard>
          <IonCardHeader>Abertura osular</IonCardHeader>
          <img
            src={Eyes}
            alt="Hojo"
            style={{
              width: "35vw",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setAberturaOscular(Math.abs(value));
                }}
                value={[
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "Espontanea",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "Voz",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "Dolor",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Ninguna",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>Pespuestas Verbal</IonCardHeader>
          <img
            src={Mouth}
            alt="Boca"
            style={{
              width: "35vw",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setPespuestasVerbal(Math.abs(value));
                }}
                value={[
                  {
                    value: 5,
                    text: "Puntuacion 5",
                    description: "Orientada",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "Confusa",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "Inapropiedad",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "sonidos",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "ninguna",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>Respuesta motriz</IonCardHeader>
          <img
            src={Hand}
            alt="Boca"
            style={{
              width: "35vw",
              display: "block",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          ></img>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setRespuestaMotriz(Math.abs(value));
                }}
                value={[
                  {
                    value: 6,
                    text: "Puntuacion 6",
                    description: "Obedece",
                  },
                  {
                    value: 5,
                    text: "Puntuacion 5",
                    description: "Localiza",
                  },
                  {
                    value: 4,
                    text: "Puntuacion 4",
                    description: "Retirada",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "Flexion",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "Extension",
                  },
                  {
                    value: 1,
                    text: "Puntuacion 1",
                    description: "Ninguna",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Enfermedad cronica</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setEnfermedadCronica(Math.abs(value));
                }}
                value={[
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "Preoperatorio programado",
                  },
                  {
                    value: 5,
                    text: "Puntuacion 5",
                    description: "Preoperatorio urgente o medico",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonCard mode="ios">
          <IonCardHeader>Edad</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  setEdad(Math.abs(value));
                }}
                value={[
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: ">= 44",
                  },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "45 - 64",
                  },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "55 - 64",
                  },
                  {
                    value: 5,
                    text: "Puntuacion 5",
                    description: "65 - 74",
                  },
                  {
                    value: 6,
                    text: "Puntuacion 6",
                    description: ">= 75",
                  },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
        <IonItem>
          <IonLabel slot="start">Puntos Aps :</IonLabel>
          <IonBadge color="medium" slot="end">
            {Number(temperatura) +
              Number(presion) +
              Number(cardiaca) +
              Number(respiratoria) +
              Number(oxigenacion) +
              Number(ph) +
              Number(na) +
              Number(k) +
              Number(creatinina) +
              Number(hemotrocitro) +
              Number(leucocitos)}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel slot="start">Sum. GCS :</IonLabel>
          <IonBadge color="medium" slot="end">
            {Number(leucocitos) +
              Number(aberturaOscular) +
              Number(pespuestasVerbal) +
              Number(respuestaMotriz)}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel slot="start">Sumat Edad :</IonLabel>
          <IonBadge color="medium" slot="end">
            {Number(edad)}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel slot="start"> Enfermedad Previa:</IonLabel>
          <IonBadge color="medium" slot="end">
            {Number(enfermedadCronica)}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel slot="start">Total puntuacion :</IonLabel>
          <IonBadge color="medium" slot="end">
            {totalSum()}
          </IonBadge>
        </IonItem>
        <IonItem>
          <IonLabel slot="start">Mortalidad :</IonLabel>
          <IonBadge color="warning" slot="end">
            {mortalidad()} %
          </IonBadge>
        </IonItem>
        <Pie
          type="pie"
          data={{
            labels: ["% De Mortalidad"],
            datasets: [
              {
                label: "Porcentaje de mortalidad",
                data: [mortalidad(), 100],
                backgroundColor: [
                  "rgba(255, 99, 132, 0.2)",
                  "rgba(54, 162, 235, 0.2)",
                  "rgba(255, 206, 86, 0.2)",
                  "rgba(75, 192, 192, 0.2)",
                  "rgba(153, 102, 255, 0.2)",
                  "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                  "rgba(255, 99, 132, 1)",
                  "rgba(54, 162, 235, 1)",
                  "rgba(255, 206, 86, 1)",
                  "rgba(75, 192, 192, 1)",
                  "rgba(153, 102, 255, 1)",
                  "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
              },
            ],
          }}
        ></Pie>
      </IonContent>
    </IonPage>
  );
};
