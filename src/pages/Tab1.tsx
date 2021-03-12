import React, { useState } from 'react';
import { IonContent, IonIcon, IonText, IonPage, IonRange, IonList, IonRadioGroup, IonListHeader, IonLabel, IonItem, IonRadio, IonItemDivider, IonSelect, IonSelectOption, IonButton, IonImg } from '@ionic/react';
import { barbellOutline, accessibilityOutline, heartOutline } from 'ionicons/icons';
import { useHistory } from 'react-router';
import workOut from '../assets/workout.svg';

const Tab1: React.FC = () => {

  const [selected, setSelected] = useState<string>('hombre');
  const history = useHistory();
  return (
    <IonPage>
      <IonContent>
      <IonImg style={{width:'50%', display: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}} src={workOut}></IonImg>
        <IonList>
          <IonItemDivider> Harris Benedict</IonItemDivider>
         
          <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
            <IonListHeader>
              <IonLabel>Genero</IonLabel>
            </IonListHeader>
            <IonItem>
              <IonLabel>Hombre</IonLabel>
              <IonRadio slot="start" value="hombre" />
            </IonItem>
            <IonItem>
              <IonLabel>Mujer</IonLabel>
              <IonRadio slot="start" value="mujer" />
            </IonItem>
          </IonRadioGroup>
          <IonItem>
            <IonLabel>Nivel del estress</IonLabel>
            <IonSelect interface='popover' value={'brown'} okText="Okay" cancelText="Dismiss" onIonChange={e => console.log(e)}>
              <IonSelectOption value="brown">Brown</IonSelectOption>
              <IonSelectOption value="blonde">Blonde</IonSelectOption>
              <IonSelectOption value="black">Black</IonSelectOption>
              <IonSelectOption value="red">Red</IonSelectOption>
            </IonSelect>
          </IonItem>
          
          <IonItem>
            <IonLabel position="stacked">Edad</IonLabel>
            <IonRange pin={true} value={5} onIonChange={e => { console.log(e) }} >
              <IonIcon size="small" slot="start" icon={heartOutline} />
              <IonText slot="end" >23</IonText>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Talla (cm)</IonLabel>
            <IonRange pin={true} value={5} onIonChange={e => { console.log(e) }} >
              <IonIcon size="small" slot="start" icon={accessibilityOutline} />
              <IonText slot="end" >23</IonText>
            </IonRange>
          </IonItem>
          <IonItem>
            <IonLabel position="stacked">Peso (kg)</IonLabel>
            <IonRange pin={true} value={5} onIonChange={e => { console.log(e) }} >
              <IonIcon size="small" slot="start" icon={barbellOutline} />
              <IonText slot="end" >23</IonText>
            </IonRange>
          </IonItem>

        </IonList>
        <IonButton onClick={ () => {history.push('/tab2')}} style={ { padding: 2 }} fill='outline' expand='block' color="primary">Calcular</IonButton>
      </IonContent>
    </IonPage>
  );
}

export default Tab1;
