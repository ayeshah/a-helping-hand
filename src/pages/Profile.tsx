import React, { Component } from 'react'
import { IonHeader, IonToolbar, IonTitle, IonLabel, IonContent, IonRow, IonCol, IonGrid, IonPage } from '@ionic/react';

export default class Profile extends Component {
    render() {
        return (
            <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Profile</IonTitle>
              </IonToolbar>
            </IonHeader>
            <IonContent style={{ minHeight:"100%",  fontSize:"14px"}}>

                <IonGrid style={{marginTop: "35px", marginBottom:"155px", marginLeft:"30px", marginRight:"40px", justifyContent:"space-evenly"}}>
                  <IonRow >
                      <IonCol size="3">Nickname</IonCol>
                      <IonCol size="4">John Doe</IonCol>
                      <IonCol className="action-text">Edit</IonCol>
                    </IonRow>
                  

                  <IonRow >
                      <IonCol size="3">Bio</IonCol>
                      <IonCol size="9">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</IonCol>
                     
                     
                    </IonRow>
                    
                  <IonRow>
                      <IonCol size="3"></IonCol>
                      <IonCol size="9" className="action-text">Edit</IonCol>
                      </IonRow>  
                  

                  <IonRow >
                      <IonCol size="3">Shelter </IonCol>
                      <IonCol size="4">Homes First Society</IonCol>
                      <IonCol className="action-text">Edit</IonCol>
                    </IonRow>
                  

                  <IonRow >
                      <IonCol size="3">Strikes</IonCol>
                      <IonCol size="4">No Strikes</IonCol>
                    </IonRow>
                  


                  
                        
                 
                 
                  </IonGrid>
            </IonContent>
            </IonPage>

        )
    }
}
