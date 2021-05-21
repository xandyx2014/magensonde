import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  calculatorOutline,
  cubeOutline,
  gitNetworkOutline,
  heartOutline,
  leafOutline,
  homeOutline,
} from "ionicons/icons";
import "./menu.css";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

export const appPages: AppPage[] = [
  {
    title: "Hogar",
    url: "/home",
    iosIcon: homeOutline,
    mdIcon: homeOutline,
  },
  {
    title: "NRS2002",
    url: "/tab1",
    iosIcon: calculatorOutline,
    mdIcon: calculatorOutline,
  },
  {
    title: "Nutric",
    url: "/tab2",
    iosIcon: cubeOutline,
    mdIcon: cubeOutline,
  },
  {
    title: "Apache II",
    url: "/tab3",
    iosIcon: gitNetworkOutline,
    mdIcon: gitNetworkOutline,
  },
  {
    title: "Peso y talla",
    url: "/tab4",
    iosIcon: heartOutline,
    mdIcon: heartOutline,
  },
  {
    title: "Req. Energetico",
    url: "/tab5",
    iosIcon: leafOutline,
    mdIcon: leafOutline,
  },
];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Magensonde</IonListHeader>
          <IonNote>Universidad evangelica boliviana</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
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
              </IonMenuToggle>
            );
          })}
        </IonList>

        {/* <IonList id="labels-list">
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines="none" key={index}>
              <IonIcon slot="start" icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList> */}
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
