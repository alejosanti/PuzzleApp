<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

        <div id="container">
            <h1 style="font-size: 400% !important;">Cómo jugar</h1>
            <h1 style="font-size: 200% !important">
                El juego consiste de un rompecabezas convencional.
            <br>
            <br>
                -En el modo fácil se debe arrastrar la pieza desde el contenedor hacia el rompecabezas, cuando la pieza encaje el juego te va a avisar.
            <br>
            <br>
                -En el modo normal o difícil vas a tener todas las piezas sueltas, y al seleccionar una se te va a mostrar el rompecabezas acompañado de la pieza que seleccionaste, en ese momento tenés que arrastrarla a donde la querés dejar. Si deseás cambiar la pieza seleccionada podés utilizar el botón "Ver piezas sueltas" y elegir otra.
            <br>
            <br>
                -En cada rompecabezas tenés 2 botones que te van a ayudar. El botón "Pista" va a acomodar automáticamente una pieza en el lugar que corresponde, el botón "Ayuda" te va a mostrar la imagen que tenés que completar acompañada de alguna información de la misma
            </h1>

            <div class="footer">
              <ion-button size="large" class="boton">
                  <ion-icon name="volume-high" size="large"></ion-icon>
              </ion-button>
          <!-- </div> -->
          <!-- <div class="divInferiorMid"> -->
              <ion-button style="width: 20%;" size="large" class="boton" href="/ElegirDificultad">Jugar</ion-button>
          <!-- </div> -->
          <!-- <div class="divInferiorDerecha"> -->
              <ion-button size="large" class="boton" router-direction="back" href="/home">
                  <ion-icon name="arrow-back" size="large"></ion-icon>
              </ion-button>
            </div>
        </div>    

          <!-- <div class="divInferiorIzquierda"> -->
          <!-- </div> -->

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

ion-content{
    --background: rgba(0, 0, 0) url('../../images/fondo2.jpg') no-repeat center center / cover ;
}
.boton{
  --border-radius: 10px; 
  font-size: 30px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:5% !important;
}

#container {
  padding: 2%;
  text-align: left;
}

#container a {
  text-decoration: none;
}

</style>
