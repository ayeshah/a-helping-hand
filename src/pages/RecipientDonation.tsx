import React, { Component } from 'react'
import {  IonContent, IonGrid, IonRow, IonCol, IonImg } from '@ionic/react';
var QRCode = require('qrcode.react');

export default class RecipientDonation extends Component {
    render() {
        return (
            <IonContent style={{ minHeight:"100%"}}>
                  <IonGrid style={{marginTop: "115px", marginBottom:"155px", marginLeft:"41px", marginRight:"41px"}}>
                  <IonRow className="heading-medium-black">
                      <IonCol>Present the QR code to receive donation</IonCol>
                    </IonRow>
                  <IonRow >

                  <QRCode className="qr-code" value='{"url":"http://localhost:3001/frontend/recipient/profile/", "id":1}' />,
                        
                 
                  </IonRow>
                  </IonGrid>
               

            </IonContent>
        )
    }
}
