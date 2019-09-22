import React, { Component } from 'react'
import { IonPage, IonIcon, IonContent, IonGrid, IonRow, IonCol, IonHeader, IonToolbar, IonTitle, IonList, IonItem, IonFab, IonFabButton } from '@ionic/react';
import { Link } from 'react-router-dom'
import { add } from 'ionicons/icons';

export default class Transactions extends Component<any> {

    constructor(props: any){
        super(props)
        this.renderTransactions = this.renderTransactions.bind(this);
        this.openCamera = this.openCamera.bind(this);
    }

    renderTransactions(transactions: any){

       return transactions.map((element: any, idx: any) => {

            let color = element.type == "Purchase" ? '#D0021B':'#598E1E'
                    return (<IonItem key={idx}>
                            <IonCol>{element.date}</IonCol>
                            <IonCol style={{color:color}}>{element.type}</IonCol>
                            <IonCol>{'$'+element.amount}</IonCol>
                        </IonItem>);
        });
    }

    openCamera(){

        console.log("open camera");

    }


    render() {

        const itemList = this.renderTransactions([{date:'10/9/19', type:'Purchase', amount:'100'},{date:'10/9/19', type:'Donate', amount:'100'}]);
        return (
            <IonPage>
            <IonHeader>
              <IonToolbar>
                <IonTitle>Transaction</IonTitle>
              </IonToolbar>
            </IonHeader>
                <IonContent style={{ minHeight:"100%"}}>
                      <IonGrid style={{marginTop: "30px", marginBottom:"155px", marginLeft:"20px", marginRight:"41px"}}>
                      <IonRow className="heading-sm-grey">
                          Funding Available
                          
                      </IonRow>

                      <IonRow className="balance">
                          $129.25
                          
                      </IonRow>

                      <IonList style={{marginTop:"50px"}}>
                        {itemList}
                      </IonList>
                      
                      </IonGrid>

                      <IonFab style={{marginTop:"30px", marginLeft:"30px"}} vertical="top" horizontal="end" slot="fixed">
                        <IonFabButton onClick={this.openCamera} color="#FF8A17">
                            <IonIcon color="warning" icon={add} />
                        </IonFabButton>
                        </IonFab>
                   
    
                </IonContent>
                </IonPage>
        )
    }
}
