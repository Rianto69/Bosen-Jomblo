import { IonAvatar, IonButton, IonButtons, IonCol, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonIcon, IonImg, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React from "react";
import {ban, create, femaleOutline, list, mailOutline, personOutline,  person, homeOutline, settings, trash, videocamOutline, warning} from 'ionicons/icons';
import '../theme/variables.css';

const ProfilePage:React.FC <{checked:boolean}>=(props) =>{
    return (
        <IonPage>
            <IonHeader>
                
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Profile Page</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton href=''>
                            <IonIcon icon={homeOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                <IonCard>
                    <IonCardHeader>
                        <IonAvatar className="avatar">
                            <IonIcon icon={personOutline} size="small" className="gambarNih"></IonIcon>
                        </IonAvatar>
                        <IonCardSubtitle className="ion-text-center ribet">Dwi Rianto</IonCardSubtitle>
                        <IonCardSubtitle className=' ion-text-center ribet'>00000047842</IonCardSubtitle>
                        <IonRow className="ion-text-center">
                            <IonCol>
                                <IonCard>
                                    <IonButton className="ion-text-center" href="https://www.instagram.com/nto.turu/">
                                        Instagram
                                    </IonButton>
                                    <IonButton className="ion-text-center" href="https://www.instagram.com/nto.turu/followers/">
                                        Follow
                                    </IonButton>
                                </IonCard>
                            </IonCol>
                        </IonRow>
                        
                    </IonCardHeader>
                    
                </IonCard>
            </IonContent>
        </IonPage>
    );
}

export default ProfilePage;