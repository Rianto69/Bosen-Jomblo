import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonText, IonTitle, IonToggle, IonToolbar, setupIonicReact, ToggleChangeEventDetail } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import {list, mailOutline, settings, videocamOutline, warning} from 'ionicons/icons';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import MainPage from './pages/MainPage';
import { useEffect, useState } from 'react';
import ProfilePage from './pages/ProfilePage';
import TargetPasangan from './pages/TargetPasangan';
import { IonToggleCustomEvent } from '@ionic/core';
import FriendsContextProvider from './data/FriendsContextProvider';

setupIonicReact();

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(()=>{
    console.log("dari app.tsx : ",isChecked);
  },[isChecked])

  const toggleDarkModeHandler = () => {
    setIsChecked(!isChecked);
    if(document.body.classList.contains('dark')){
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
    console.log("checked dari app",isChecked);
  };
  
  return( <IonApp>
    <IonReactRouter>
      <IonMenu contentId='main'>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Gebet App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
              <IonMenuToggle>
                <IonItem button routerLink='/'>
                  
                  <IonLabel>Daftar Calon Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink='/target-pasangan'>
                  
                  <IonLabel>Target Pasangan</IonLabel>
                </IonItem>
                <IonItem button routerLink='/profile-page'>
                  
                  <IonLabel>Profile</IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel>Welcome to the dark theme</IonLabel>
                  <IonToggle  slot="end" checked={isChecked}   name='darkMode' onIonChange={toggleDarkModeHandler}></IonToggle>
                </IonItem>
              </IonMenuToggle>
          </IonList>
        </IonContent>
      </IonMenu>
      <FriendsContextProvider>

        <IonRouterOutlet id='main'>
              <Route exact path='/'>
                <MainPage checked={isChecked} />
              </Route>
              <Route exact path='/profile-page'>
                <ProfilePage checked={isChecked} />
              </Route>
              <Route exact path='/target-pasangan'>
                <TargetPasangan checked={isChecked} />
              </Route>
        </IonRouterOutlet>
      </FriendsContextProvider>
    </IonReactRouter>

  </IonApp>
  )
};



export default App;

