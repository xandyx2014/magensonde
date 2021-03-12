import { IonCard, IonCardContent, IonCardHeader, IonContent, IonHeader, IonItemDivider, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
      <IonItemDivider>Necesidades Energeticas</IonItemDivider>
      <IonCard mode='ios'>
        <IonCardHeader>GEB = 1347 Kcal/dia</IonCardHeader>
        <IonCardContent>
          Lorem ipsum dolor sit amet.
        </IonCardContent>
      </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
