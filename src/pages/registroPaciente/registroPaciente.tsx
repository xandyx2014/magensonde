import {
  IonAlert,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonContent,
  IonFab,
  IonFabButton,
  IonHeader,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  useIonAlert,
} from "@ionic/react";
import { trashOutline } from "ionicons/icons";
import { add } from "ionicons/icons";
import { format } from "date-fns";

import React, { useCallback, useEffect, useMemo, useState } from "react";
import DoctorImg from "../../assets/doctor.svg";
import { PacienteDatabase, Paciente } from "../../services/db";
export const RegistroPaciente: React.FC = () => {
  const [pacientes, setPacientes] = useState<Paciente[]>([]);
  const [showAlert, setShowAlert] = useState(false);
  const pacienteService = useMemo(() => new PacienteDatabase(), []);
  useEffect(() => {
    const pacientesStorage = localStorage.getItem("pacientes");
    if (pacientesStorage) {
      console.log(pacientesStorage);
    }
    pacienteService.getAll().then((e) => {
      setPacientes(e);
    });
  }, [pacienteService]);
  const [present] = useIonAlert();
  const upgradeDb = useCallback(async () => {
    pacienteService.getAll().then((e) => {
      setPacientes(e);
    });
  }, [pacienteService]);
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Registro Pacientes</IonTitle>
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
              src={DoctorImg}
            ></IonImg>
          ),
          []
        )}
        {useMemo(
          () => (
            <IonAlert
              isOpen={showAlert}
              onDidDismiss={() => setShowAlert(false)}
              header={"Datos del paciente"}
              inputs={[
                {
                  name: "nombre",
                  label: "Nombre completo",
                  type: "text",
                  placeholder: "Escriba nombre completo",
                },
                {
                  name: "carnetIdentidad",
                  type: "number",
                  label: "Carnet de Identidad",
                  placeholder: "Escriba carnet de identidad",
                },
                {
                  name: "numeroCama",
                  label: "Numero de cama",
                  type: "number",
                  placeholder: "Escriba numero de cama",
                },
                {
                  name: "numeroPiso",
                  label: "Numero de piso",
                  type: "number",
                  placeholder: "Escriba numero de piso",
                },
                {
                  name: "detalle",
                  label: "Detalles extras",
                  type: "text",
                  placeholder: "Descripcion o detalle",
                },
              ]}
              buttons={[
                {
                  text: "Cancel",
                  role: "cancel",
                  cssClass: "secondary",
                  handler: () => {
                    console.log("Confirm Cancel");
                  },
                },
                {
                  text: "Ok",
                  handler: async (e) => {
                    const dato = pacienteService.add({
                      ...e,
                    });
                    await upgradeDb();
                    console.log(dato);
                  },
                },
              ]}
            />
          ),
          [showAlert, pacienteService, upgradeDb]
        )}
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton
            disabled={showAlert}
            onClick={() => {
              console.log("e");
              setShowAlert(true);
            }}
          >
            <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>
        {pacientes.map((e, index) => {
          return (
            <IonCard
              key={index}
              mode="md"
              className="ion-activatable ripple-parent"
            >
              <IonCardContent>
                <IonCardSubtitle>Datos del paciente</IonCardSubtitle>
                <IonList>
                  <IonItem>
                    <IonLabel>
                      <h3>Nombre: </h3>
                      <p>{e.nombre}</p>
                      <h3>Carnet Identidad: </h3>
                      <p>{e.carnetIdentidad}</p>
                      <h3>Numero de cama: </h3>
                      <p>{e.numeroCama}</p>
                      <h3>Numero de piso: </h3>
                      <p>{e.numeroPiso}</p>
                      <h3>Fecha: </h3>
                      <p>
                        {format(
                          new Date(String(e.fecha)),
                          "MM/dd/yyyy H:mm:SS"
                        )}
                      </p>
                    </IonLabel>
                  </IonItem>
                </IonList>
                <IonButton
                  onClick={() => {
                    present({
                      cssClass: "my-css",
                      header: "Confirmar",
                      message: "¿Estas seguro de eliminar?",
                      buttons: [
                        "Cancel",
                        {
                          text: "Ok",
                          handler: async (d) => {
                            pacienteService.deleteById(Number(e.id));
                            upgradeDb();
                          },
                        },
                      ],
                      onDidDismiss: (e) => console.log("did dismiss"),
                    });
                  }}
                  expand="full"
                  fill="clear"
                >
                  <IonIcon slot="start" icon={trashOutline} />
                  Eliminar
                </IonButton>
              </IonCardContent>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
