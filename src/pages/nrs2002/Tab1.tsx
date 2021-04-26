import React, { useState } from "react";
import {
  IonContent,
  IonIcon,
  IonText,
  IonPage,
  IonRange,
  IonList,
  IonRadioGroup,
  IonListHeader,
  IonLabel,
  IonItem,
  IonRadio,
  IonItemDivider,
  IonSelect,
  IonSelectOption,
  IonButton,
  IonImg,
  IonAlert,
  IonModal,
} from "@ionic/react";
import {
  barbellOutline,
  accessibilityOutline,
  heartOutline,
} from "ionicons/icons";
import { useHistory } from "react-router";
import { ScreenInitial } from "./components/screen_initial";
import { ScreenSecond } from "./components/screen_second";

const Tab1: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [screen1, setScreen1] = useState("false");
  const [screen2, setScreen2] = useState("false");
  const [screen3, setScreen3] = useState("false");
  const [screen4, setScreen4] = useState("false");
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const verifyIsFalse = () => {
    if (screen1 === "true") {
      return screen1;
    }
    if (screen2 === "true") {
      return screen2;
    }
    if (screen3 === "true") {
      return screen3;
    }
    if (screen4 === "true") {
      return screen4;
    }
    return "false";
  };
  return (
    <IonPage>
      <IonContent className="fade-in">
        <IonList>
          <IonItemDivider>Nutritional Risk Screening (NRS-2002)</IonItemDivider>
          <IonListHeader>
            <IonLabel>Screen inicial</IonLabel>
          </IonListHeader>
          <ScreenInitial
            title={"IMC < 20.5"}
            value={screen1}
            onChange={(value) => {
              setScreen1(value);
            }}
          />
          <ScreenInitial
            title={"El paciente ha perdido peso en los 3 ultimos 3 meses"}
            value={screen2}
            onChange={(value) => {
              setScreen2(value);
            }}
          />
          <ScreenInitial
            title={"El paciente ha disminuido su ingesta en la ultima semana"}
            value={screen3}
            onChange={(value) => {
              setScreen3(value);
            }}
          />
          <ScreenInitial
            title={"Está el paciente gravemente enfermo"}
            value={screen4}
            onChange={(value) => {
              setScreen4(value);
            }}
          />

          <IonModal isOpen={showModal} cssClass="my-custom-class">
            <IonPage>
              <IonContent>
                <IonList>
                  <IonItemDivider>Estado nutricional</IonItemDivider>
                  <ScreenSecond
                    value={[
                      { value: 0, text: "Normal", description: "" },
                      {
                        text: "Desnutricion Leve",
                        value: 1,
                        description:
                          "Pérdida de peso > 5 % en los ultimos 3 meses o ingesta inferior al 50-70% en la ultima semana",
                      },
                      {
                        text: "Desnutricion Moderado",
                        value: 2,
                        description:
                          "Pérdida de peso > 5 % en los ultimos 2 meses o IMC 18,5-20,5 + estado general deterioado o ingesta entre el 25%-60% de los requerimientos en la ultima semana",
                      },
                      {
                        text: "Desnutricion Grave",
                        value: 3,
                        description:
                          "Pérdida de peso mayor del 5% en un mes (> 15 % en 3 meses) o IMC <18-5 + estado general deteriorado o ingesta de 0-25% de los requerimientos normales en la semana previa",
                      },
                    ]}
                  />
                  <IonItemDivider className="ion-margin-top">
                    Severidad de la enfermedad (incrementa requerimientos)
                  </IonItemDivider>
                </IonList>
                <IonButton
                  style={{
                    margin: 10,
                  }}
                  fill="solid"
                  expand="full"
                  onClick={() => setShowModal(false)}
                >
                  Cerrar
                </IonButton>
              </IonContent>
            </IonPage>
          </IonModal>

          {/* <IonItem>
            <IonLabel>Nivel del estress</IonLabel>
            <IonSelect
              interface="popover"
              value={"brown"}
              okText="Okay"
              cancelText="Dismiss"
              onIonChange={(e) => console.log(e)}
            >
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Edad</IonLabel>
            <IonRange
              pin={true}
              value={5}
              onIonChange={(e) => {
                console.log(e);
              }}
            >
              <IonIcon size="small" slot="start" icon={heartOutline} />
              <IonText slot="end">23</IonText>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Talla (cm)</IonLabel>
            <IonRange
              pin={true}
              value={5}
              onIonChange={(e) => {
                console.log(e);
              }}
            >
              <IonIcon size="small" slot="start" icon={accessibilityOutline} />
              <IonText slot="end">23</IonText>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Peso (kg)</IonLabel>
            <IonRange
              pin={true}
              value={5}
              onIonChange={(e) => {
                console.log(e);
              }}
            >
              <IonIcon size="small" slot="start" icon={barbellOutline} />
              <IonText slot="end">23</IonText>
            </IonRange>
          </IonItem> */}
          <IonAlert
            isOpen={showAlert}
            onDidDismiss={() => setShowAlert(false)}
            cssClass="my-custom-class"
            header={"Informe"}
            message={
              "Reevalue al paciente semanalmente. En caso de que el paciente a ser sometido a una intervencion de cirugia mayor, valorar la posibilidad de soporte nutricional perioperatorio para evitar el riesgo de malanutricion."
            }
            buttons={["Cerrar"]}
          />
        </IonList>
        <IonButton
          onClick={() => {
            // history.push("/tab2");
            if (verifyIsFalse() === "true") {
              setShowModal(true);
              return;
            }
            setShowAlert(true);
          }}
          style={{ padding: 2 }}
          fill="outline"
          expand="block"
          color="primary"
        >
          Calcular
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
