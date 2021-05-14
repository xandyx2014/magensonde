import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonItemDivider,
  IonList,
  IonPage,
} from "@ionic/react";
import { ScreenSecond } from "../nrs2002/components/screen_second";
import "./Tab3.css";

import Eyes from "../../assets/eyes.png";
import Mouth from "../../assets/mouth.png";
import Hand from "../../assets/hand.png";
const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <IonItemDivider>APACHE II.</IonItemDivider>
        <IonCard mode="ios">
          <IonCardHeader>Temperatura rectal (*c)</IonCardHeader>
          <IonCardContent>
            <IonList>
              <ScreenSecond
                mode="md"
                onChange={(value) => {
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 40,9" },
                  { value: -3, text: "Puntuacion 3", description: "39 - 40,9" },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "38,5 - 38,9",
                  },
                  { value: 0, text: "Puntuacion 0", description: "36 - 38,4" },
                  { value: 1, text: "Puntuacion 1", description: "34 - 35,9" },
                  { value: 2, text: "Puntuacion 2", description: "32 - 31,9" },
                  { value: 3, text: "Puntuacion 3", description: "30 - 31,9" },
                  { value: 4, text: "Puntuacion 4", description: "< 30" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 159" },
                  { value: -3, text: "Puntuacion 3", description: "130 - 159" },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "110 - 129",
                  },
                  { value: 0, text: "Puntuacion 0", description: "70 - 109" },
                  { value: 2, text: "Puntuacion 2", description: "50 - 69" },
                  { value: 4, text: "Puntuacion 4", description: "< 50" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 179" },
                  { value: -3, text: "Puntuacion 3", description: "39 - 40,9" },
                  {
                    value: -2,
                    text: "Puntuacion 2",
                    description: "110 - 129",
                  },
                  { value: 0, text: "Puntuacion 0", description: "70 - 109" },
                  { value: 2, text: "Puntuacion 2", description: "55 - 69" },
                  { value: 3, text: "Puntuacion 3", description: "40 - 54" },
                  { value: 4, text: "Puntuacion 4", description: "< 40" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 49" },
                  { value: -3, text: "Puntuacion 3", description: "35 - 49" },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "25 - 34",
                  },
                  { value: 0, text: "Puntuacion 0", description: "12 - 24" },
                  { value: 1, text: "Puntuacion 1", description: "10 - 11" },
                  { value: 2, text: "Puntuacion 2", description: "6 - 9" },
                  { value: 4, text: "Puntuacion 4", description: "< 6" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "499" },
                  { value: -3, text: "Puntuacion 3", description: "350 - 499" },
                  { value: -2, text: "Puntuacion 2", description: "200-349" },
                  {
                    value: 0,
                    text: "Puntuacion 0",
                    description: "> 200 O < 70",
                  },
                  { value: 1, text: "Puntuacion 1", description: "61 - 70" },
                  { value: 3, text: "Puntuacion 3", description: "56 - 70" },
                  { value: 4, text: "Puntuacion 4", description: "< 56" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 7,9" },
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
                  { value: 4, text: "Puntuacion 4", description: "< 7,15" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 179" },
                  { value: -3, text: "Puntuacion 3", description: "160 - 179" },
                  { value: -2, text: "Puntuacion 2", description: "155 - 159" },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "150 - 154",
                  },
                  { value: 0, text: "Puntuacion 0", description: "130 - 149" },
                  { value: 2, text: "Puntuacion 2", description: "120 - 129" },
                  { value: 3, text: "Puntuacion 3", description: "111 - 119" },
                  { value: 4, text: "Puntuacion 4", description: "< 111" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 6,9" },
                  { value: -3, text: "Puntuacion 3", description: "6,0 - 6,9" },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "5,5 - 5,9",
                  },
                  { value: 0, text: "Puntuacion 0", description: "3,5 - 5,4" },
                  { value: 1, text: "Puntuacion 1", description: "3,0 - 3,4" },
                  { value: 2, text: "Puntuacion 2", description: "2,5 - 2,9" },
                  { value: 4, text: "Puntuacion 4", description: "< 2,5" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 3,9" },
                  { value: -3, text: "Puntuacion 3", description: "2,0 - 3,4" },
                  { value: -2, text: "Puntuacion 2", description: "15 - 1,9" },
                  { value: 0, text: "Puntuacion 0", description: "0,6 - 1,4" },
                  { value: 2, text: "Puntuacion 2", description: "1,2 - 9" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 3,4" },
                  { value: -2, text: "Puntuacion 2", description: "55 - 59,9" },
                  { value: -1, text: "Puntuacion 1", description: "46 - 49,9" },
                  { value: 0, text: "Puntuacion 0", description: "30 - 45,9" },
                  { value: 4, text: "Puntuacion 4", description: "< 20" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: -4, text: "Puntuacion 4", description: "> 59,9" },
                  { value: -2, text: "Puntuacion 2", description: "20 - 39,9" },
                  {
                    value: -1,
                    text: "Puntuacion 1",
                    description: "15 - 19,9",
                  },
                  { value: 0, text: "Puntuacion 0", description: "3 - 14,9" },
                  { value: 4, text: "Puntuacion 4", description: "< 1" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: 4, text: "Puntuacion 4", description: "Espontanea" },
                  { value: 3, text: "Puntuacion 3", description: "Voz" },
                  { value: 2, text: "Puntuacion 2", description: "Dolor" },
                  { value: 1, text: "Puntuacion 1", description: "Ninguna" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: 5, text: "Puntuacion 4", description: "Orientada" },
                  { value: 4, text: "Puntuacion 4", description: "Confusa" },
                  {
                    value: 3,
                    text: "Puntuacion 3",
                    description: "Inapropiedad",
                  },
                  { value: 2, text: "Puntuacion 2", description: "sonidos" },
                  { value: 1, text: "Puntuacion 1", description: "ninguna" },
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: 6, text: "Puntuacion 6", description: "Obedece" },
                  { value: 5, text: "Puntuacion 5", description: "Localiza" },
                  { value: 4, text: "Puntuacion 4", description: "Retirada" },
                  { value: 3, text: "Puntuacion 3", description: "Flexion" },
                  {
                    value: 2,
                    text: "Puntuacion 2",
                    description: "Extension",
                  },
                  { value: 1, text: "Puntuacion 1", description: "Ninguna" },
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
                  console.log(Math.abs(value));
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
                  console.log(Math.abs(value));
                }}
                value={[
                  { value: 0, text: "Puntuacion 0", description: ">= 44" },
                  { value: 2, text: "Puntuacion 2", description: "45 - 64" },
                  { value: 3, text: "Puntuacion 3", description: "55 - 64" },
                  { value: 5, text: "Puntuacion 5", description: "65 - 74" },
                  { value: 6, text: "Puntuacion 6", description: ">= 75" },
                ]}
              />
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
