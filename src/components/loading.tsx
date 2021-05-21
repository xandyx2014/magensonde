import { IonContent, IonPage } from "@ionic/react";
import React from "react";

import "./loading.css";

export const Loading: React.FC = () => {
  return (
    <>
      <IonPage>
        <IonContent className="fade-in">
          <div className="container-ellipsis">
            <div className="lds-ellipsis">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </>
  );
};
