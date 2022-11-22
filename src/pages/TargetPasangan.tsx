import { IonAvatar, IonButton, IonButtons, IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar, IonLabel, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonModal, useIonActionSheet } from '@ionic/react';
import { femaleOutline, heart, maleOutline, personOutline,close, trash, cloudUpload } from "ionicons/icons";
import React, { useContext, useEffect, useRef } from "react";
import FriendsContext from '../data/friend-context';
import { useState } from 'react';

const TargetPasangan: React.FC<{checked:boolean}>=(props) => {
    const slidingOptionRef = useRef<HTMLIonItemSlidingElement>(null);
    const friendsCtx = useContext(FriendsContext);
    const [adaGebetan, setAdaGebetan] = useState(false);

    useEffect(()=>{
        const ada = friendsCtx.friends.filter((friend) => friend.love > 0);
        if(ada.length > 0){
            setAdaGebetan(true);
        }
        if(props.checked == true){
            
            document.body.classList.add('dark');
        }else{
            document.body.classList.remove('dark');
        }
    },[]);
    
    const modal = useRef<HTMLIonModalElement>(null);
    const page = useRef(null);
    const [presentingElement, setPresentingElement] = useState<HTMLElement | null>(null);
    const [present] = useIonActionSheet();
    
    useEffect(() => {
        setPresentingElement(page.current);
    }, []);
    
    function dismiss() {
        modal.current?.dismiss();
    }

    function canDismiss(name:string, photo: string,gender:string, description:string , id:string) {
    return new Promise<boolean>((resolve, reject) => {
        present({
        header: 'Apa kamu yakin ingin menghapus?',
        buttons: [
            {
            icon: trash,
            text: 'Ya',
            role: 'confirm',
            },
            {
            icon : cloudUpload,
            text: 'Tidak',
            role: 'cancel',
            },
        ],
        onWillDismiss: (ev) => {
            if (ev.detail.role === 'confirm') {
            friendsCtx.deleteFriend(name,photo,gender,description,id);
            resolve(true);
            } else {
            reject();
            }
        },
        });
    });
    }

    return (
        <>
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonTitle>Target Pasangan</IonTitle>
                    <IonButtons slot='end'>
                        <IonButton href='/profile-page'>
                            <IonIcon icon={personOutline} size="large" />   
                        </IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>
            <IonContent className="ion-padding">
                {!adaGebetan ? (
                    <IonGrid>
                        <h1 className="ion-text-center">Ada yang masih jones?</h1>
                        <IonRow>
                            <IonCol>
                                <IonButton expand="full" href='/'>
                                    Cari gebetan
                                </IonButton>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                ) : (<IonGrid></IonGrid>)}
                {friendsCtx.friends.map((friend)=> (
                    friend.love == 1 ? (
                        <IonItemSliding  ref={slidingOptionRef} key={friend.id}>
                        <IonItemOptions >
                            <IonItemOption color='danger' onClick={() => dismiss()}>
                                <IonIcon slot="icon-only" icon={close}/>
                            </IonItemOption>
                        </IonItemOptions>
                        <IonItem lines="full" button >
                            <IonAvatar className="ion-margin-end">
                                <img alt="Silhouette of a person's head" src={friend.photo}/>
                            </IonAvatar>
                            <IonGrid>
                                <IonCol>
                                    <IonLabel className='ion-text-lg-left'>{friend.name}</IonLabel><br></br>
                                    <IonLabel>{friend.description}</IonLabel>
                                    <IonLabel>
                                        <IonIcon slot='start' icon= {friend.gender == "male" ? femaleOutline : maleOutline}  />
                                        {friend.gender}
                                    </IonLabel>
                                </IonCol>
                            </IonGrid>                 
                        </IonItem>
                        <IonModal ref={modal} trigger="open-modal" canDismiss={()=>canDismiss(friend.name,friend.photo,friend.gender, friend.description, friend.id)} presentingElement={presentingElement!}>
                        </IonModal>
                    </IonItemSliding>
                    ) : 
                    (
                        <IonGrid>
                        </IonGrid>
                    )
                ))}
            </IonContent>
        </IonPage>
        </>
    )
}
export default TargetPasangan;