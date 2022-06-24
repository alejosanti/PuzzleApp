<template>
  <ion-page>

    
    <ion-content :fullscreen="true" >

      
      <div id="container">

        <h1> <u> Rompecabezas </u> </h1>
        <ion-title style="font-size: 400%; text-align: center; margin-bottom: 5%;">¡Juego educativo sobre el Arroyo Maldonado!</ion-title>
        <div style="display: flex; justify-content: center;">
          <ion-button size="large" class="boton" style="margin: auto; font-size: 280%;" href="/ComoJugar">Iniciar</ion-button>
        </div>

        <div class="footer">
          <ion-button size="large" class="boton" style="font-size: 30px;">
            <ion-icon name="volume-high" size="large"></ion-icon>
          </ion-button>
           <ion-button size="large" class="boton" style="font-size: 30px;" href="/Configuracion">
            <ion-icon name="settings" size="large"></ion-icon>
          </ion-button>
        </div>
      </div>

    </ion-content>

  </ion-page>

</template>



<script lang="ts">
import { IonContent, IonIcon, IonButton, IonPage, IonTitle } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonButton,
    IonIcon,
    IonPage,
    IonContent,
    IonTitle
  }
});


</script>

<style scoped src="../styles/rompecabezas.css"> </style>

<style scoped>
ion-content{
    --background: rgba(0, 0, 0) url('../../images/fondo2.jpg') no-repeat center center / cover ;
}
.boton{
  --border-radius: 10px; 
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:10% !important;
}

#container {
  text-align: center;
  padding: 4%;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  
  color: #8c8c8c;
  
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>
