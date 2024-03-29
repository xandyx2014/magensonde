/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useMemo, useState } from "react";
import {
  IonContent,
  IonText,
  IonPage,
  IonList,
  IonLabel,
  IonItem,
  IonItemDivider,
  IonButton,
  IonAlert,
  IonModal,
  useIonAlert,
  IonInput,
  IonButtons,
  IonHeader,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonImg,
} from "@ionic/react";
import { ScreenInitial } from "./components/screen_initial";
import { ScreenSecond } from "./components/screen_second";
import workOutSvg from "../../assets/nsr2002.svg";
export const Tab1: React.FC = () => {
  const [showAlert, setShowAlert] = useState(false);
  const [screen1, setScreen1] = useState("false");
  const [screen2, setScreen2] = useState("false");
  const [screen3, setScreen3] = useState("false");
  const [screen4, setScreen4] = useState("false");
  const [nutritionalState, setNutritionalState] = useState(0);
  const [enfermedadState, setEnfermedad] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [edadPaciente, setEdadPaciente] = useState(0);
  const [present] = useIonAlert();
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
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>NRS 2002</IonTitle>
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
              src={workOutSvg}
            ></IonImg>
          ),
          []
        )}
        <IonList>
          <IonItemDivider>Nutritional Risk Screening (NRS-2002)</IonItemDivider>
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
                  <IonItemDivider>Edad del paciente</IonItemDivider>
                  <IonItem>
                    <IonLabel position="stacked">Edad del paciente.</IonLabel>
                    <IonInput
                      type="number"
                      inputmode="numeric"
                      min="0"
                      value={edadPaciente}
                      onIonChange={(e: any) => {
                        setEdadPaciente(e.target.value);
                      }}
                    ></IonInput>
                  </IonItem>
                  <IonItemDivider>Estado nutricional</IonItemDivider>
                  <ScreenSecond
                    showScore={true}
                    onChange={(value) => {
                      setNutritionalState(value);
                    }}
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
                  <ScreenSecond
                    showScore={true}
                    onChange={(value) => {
                      setEnfermedad(value);
                    }}
                    value={[
                      {
                        value: 0,
                        text: "Ausente",
                        description: "Requerimientos nutricionales normales",
                      },
                      {
                        text: "Leve",
                        value: 1,
                        description:
                          "Fractura de cadera, pacientes crónicos, complicaciones agudas de cirrosis, EPOC, hemodiálisis, diabetes, enfermos oncológicos",
                      },
                      {
                        text: "Moderada",
                        value: 2,
                        description:
                          "Cirugía mayor abdominal AVC, neumonia severa y tumores hematológicos",
                      },
                      {
                        text: "Grave",
                        value: 3,
                        description:
                          "Traumatismo craneoencefálico tranplante medular. Pacientes en cuidados intensivos (APACHE > 10)",
                      },
                    ]}
                  />
                  <IonItem>
                    <IonLabel className="ion-text-wrap">
                      <IonText color="medium">Puntuacion 1 : </IonText>
                      Paciente con enfemedad cronica ingresado en el hospital
                      debido a complicaciones. El paciente esta debil pero no
                      encamado. Los requerimientos proteicos estan
                      incrementados, pero pueden ser cubiertos mediante la dieta
                      oral o suplementos
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel className="ion-text-wrap">
                      <IonText color="medium">Puntuacion 2 : </IonText>
                      Paciente encamado debido a la enfemedad, por ejemplo,
                      cirugia mayor abdominal. Los requermientos proteicos estan
                      incrementados notablemente pero pueden ser cubiertos,
                      aunque la nutricion artifical se requiere en muchos casos.
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel className="ion-text-wrap">
                      <IonText color="medium">Puntuacion 3 : </IonText>
                      Pacientes en cuidado intensivos con ventilacion mecanica,
                      etc. Los requerimientos proteicos estan incrementados y no
                      pueden ser cubiertos a pesar del uso de nutricion
                      artificial. El catabolismo proteico y las perdidas de
                      nitrogeno pueden ser atenuadas de forma significativa.
                    </IonLabel>
                  </IonItem>
                </IonList>

                <IonButton
                  color="primary"
                  style={{
                    margin: 10,
                  }}
                  fill="solid"
                  expand="full"
                  onClick={async () => {
                    const isOld = Number(edadPaciente) > 70 ? 1 : 0;
                    const totalNumber =
                      enfermedadState + nutritionalState + isOld;

                    let message =
                      "El paciente está en riesgo de malnutricion y es necesario inicar soporte nutrional";
                    if (totalNumber < 3) {
                      message =
                        "Es necesario reevuluar semanalmente. Si el paciente va aser sometido a cirugia mayor, iniciar soporte nutricional perioperatorio";
                    }
                    present({
                      cssClass: "my-css",
                      header: "Resultado",
                      message: message,
                      buttons: [
                        "Cancelar",
                        {
                          text: "Aceptar",
                          // eslint-disable-next-line @typescript-eslint/no-empty-function
                          handler: (d) => {},
                        },
                      ],
                      // eslint-disable-next-line @typescript-eslint/no-empty-function
                      onDidDismiss: (e) => {},
                    });
                  }}
                >
                  Calcular
                </IonButton>

                <IonButton
                  style={{
                    margin: 10,
                  }}
                  color="danger"
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
