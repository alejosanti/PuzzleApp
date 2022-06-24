<template>
  <ion-page>

    
    <ion-content :fullscreen="true" >

      
      <div id="container">

        <ion-card color="dark" style="opacity: 0.8;">
            <ion-card-header>
                <ion-card-title class="titulo"> <u> Configuración </u> </ion-card-title>
            </ion-card-header>
            <br>
            <ion-card-content>
                <ion-grid>
                    <ion-row>
                        <ion-col size="5">
                            <ion-list style="margin-left:30%">
                                <ion-radio-group value="biff">
                                    <ion-list-header style="font-size:170%">
                                        <ion-label>Tamaño del texto</ion-label>
                                    </ion-list-header>

                                    <ion-item>
                                        <ion-label style="font-size:150%">Texto de prueba</ion-label>
                                        <ion-radio slot="start" value="biff"></ion-radio>
                                    </ion-item>

                                    <ion-item>
                                        <ion-label style="font-size:180%">Texto de prueba</ion-label>
                                        <ion-radio slot="start" value="griff"></ion-radio>
                                    </ion-item>

                                    <ion-item>
                                        <ion-label style="font-size:230%">Texto de prueba</ion-label>
                                        <ion-radio slot="start" value="buford"></ion-radio>
                                    </ion-item>
                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                        <ion-col size="6">
                            <ion-list style="margin-left:30%">
                                <ion-radio-group value="biff">
                                    <ion-list-header style="font-size:170%">
                                        <ion-label>Contraste</ion-label>
                                    </ion-list-header>

                                    <ion-item>
                                        <ion-label style="font-size:180%;padding-top:10px"> <ion-icon name="desktop-outline" style="zoom:2.0;"></ion-icon> </ion-label>
                                        <ion-radio slot="start" value="biff"> </ion-radio>
                                    </ion-item>

                                    <ion-item>
                                        <ion-label style="font-size:180%;padding-top:10px"> <ion-icon name="desktop" style="zoom:2.0;"> </ion-icon> </ion-label>
                                        <ion-radio slot="start" value="griff"> </ion-radio>
                                    </ion-item>

                                </ion-radio-group>
                            </ion-list>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </ion-card-content>
        </ion-card>
        
        <div class="footer">
            <ion-button size="large" class="boton" style="font-size: 30px;">
                <ion-icon name="volume-high" size="large"></ion-icon>
            </ion-button>
            <ion-button size="large" class="boton" router-direction="back" href="javascript: history.go(-1)" style="font-size: 30px;">
                <ion-icon name="arrow-back" size="large"></ion-icon>
            </ion-button>
        </div>
      </div>

    </ion-content>

  </ion-page>

</template>



<script lang="ts">
import { IonContent, IonIcon, IonButton, IonPage, IonRadio, IonRadioGroup, IonItem, IonLabel, IonList, IonListHeader, IonCol, IonGrid, IonRow } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonButton,
    IonIcon,
    IonPage,
    IonContent,
    IonItem, 
    IonLabel, 
    IonList, 
    IonListHeader,
    IonRadio, 
    IonRadioGroup,
    IonCol, 
    IonGrid, 
    IonRow
  }
});


</script>

<style scoped src="../styles/rompecabezas.css"> </style>

<style scoped>


.titulo {
    font-size: 350%;
    color: black;
    text-align: center;
}

ion-content{
    --background: rgba(0, 0, 0) url('../../images/fondo2.jpg') no-repeat center center / cover ;
}
.boton{
  --border-radius: 10px; 
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:10%;
}

#container {
    padding: 4%;
}

</style>
