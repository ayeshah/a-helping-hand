import React, { Component } from 'react'
import { IonPage, IonContent, IonGrid, IonRow, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { Link } from 'react-router-dom'
var QRCode = require('qrcode.react');

export default class Purchase extends Component {
    render() {
        return (
            <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Purchase</IonTitle>
              </IonToolbar>
            </IonHeader>
                <IonContent style={{ minHeight:"100%"}}>
                      <IonGrid style={{marginTop: "115px", marginBottom:"155px", marginLeft:"41px", marginRight:"41px"}}>
                      <IonRow className="heading-medium-black">
                          <div>Ensure your items are eligible</div>
                          
                        </IonRow>
                      
                      <IonRow className="">
                          <div style={{textAlign:"center"}}><Link to="/">Eligibility Guidelines</Link></div>
                          
                        </IonRow>
                      
                    <IonRow><QRCode className="qr-code center-horizontal" value="hey" /></IonRow>
                      
                            
                     
                      
                      </IonGrid>
                   
    
                </IonContent>
                </IonPage>
        )
    }
}
