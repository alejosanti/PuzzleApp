<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

    <div style="padding-left: 3%; padding-right: 3%;">
        <h1 style="font-size: 400%;">Elegir la dificultad del rompecabezas</h1>
        <ion-button style="width: 17%;" size="large" class="boton" href="/Facil">Fácil</ion-button>
        <ion-button style="width: 17%;" size="large" class="boton" href="/Normal">Normal</ion-button>
        <ion-button style="width: 17%;" size="large" class="boton" href="/Dificil">Difícil</ion-button>

        <div class="footer">
            <ion-button size="large" class="botonInferior">
                <ion-icon name="volume-high" size="large"></ion-icon>
            </ion-button>
            <ion-button size="large" class="botonInferior" router-direction="back" href="/ComoJugar">
                <ion-icon name="arrow-back" size="large"></ion-icon>
            </ion-button>
        </div>
    </div>

    </ion-content>

  </ion-page>

</template>



<script lang="ts">
import { IonContent,IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent
  }
});


</script>

<style scoped>

.botonInferior{
  --border-radius: 10px; 
  font-size: 30px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:7%;
}

ion-content{
    --background: rgba(0, 0, 0) url('../../images/fondo2.jpg') no-repeat center center / cover ;
}
.boton{
  --border-radius: 10px; 
  font-size: 280%;
  display: block;
  margin: 4%;
  margin-left: auto;
  margin-right: auto;
}

.divInferior{
  position: fixed; bottom: 8%;
}

#container {
  padding: 4%;

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
