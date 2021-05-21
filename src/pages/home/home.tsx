import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonMenuButton,
  IonTitle,
  IonContent,
  IonImg,
  IonList,
  IonNote,
  IonItem,
  IonLabel,
  IonIcon,
  IonItemDivider,
} from "@ionic/react";
import React, { useMemo } from "react";
import HomeImg from "../../assets/home.svg";
import "./home.css";
import { appPages } from "../../components/menu";
export const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="ion-no-border">
        <IonToolbar className="ion-no-border">
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Hogar</IonTitle>
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
              src={HomeImg}
            ></IonImg>
          ),
          []
        )}
        <IonItemDivider className="ion-no-margin ion-no-padding"></IonItemDivider>
        <IonList id="inbox-list">
          <IonNote>Nuestras Opciones disponibles</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonItem
                key={index}
                routerLink={appPage.url}
                routerDirection="none"
                lines="none"
                detail={false}
              >
                <IonIcon
                  slot="start"
                  ios={appPage.iosIcon}
                  md={appPage.mdIcon}
                />
                <IonLabel>{appPage.title}</IonLabel>
              </IonItem>
            );
          })}
          <IonItemDivider className="ion-no-margin ion-no-padding"></IonItemDivider>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
