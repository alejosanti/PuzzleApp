<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

    <div style="padding-left: 3%; padding-right: 3%; padding-bottom: 3%">
      <h1>Resolviendo rompecabezas</h1>
      <h2 style="margin-top:-10px"> Dificultad normal </h2>
      <h3 id="textoExplicacion" style="text-align:left">Seleccione una pieza para insertar en el rompecabezas</h3>
      <br>
      
      <div id="divGeneral">

        <div id="outer-dropzonePiezas" style="background-color:grey;width:60% !important;padding:10px;display:inline-block">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()">    
          <img src="../../images/puzzlepiece.png" style="width: 15%; height: 30%;" @click="goToColocar()"> 

        </div>

        <div style="display:inline-block;width:40%;text-align:center">
          <div id="outer-dropzoneNormal" style="text-align:left" class="tablero">
            <div class="inner-dropzoneNormal">1</div>
            <div class="inner-dropzoneNormal">2</div>
            <div class="inner-dropzoneNormal">3</div>
            <div class="inner-dropzoneNormal">4</div>
            <div class="inner-dropzoneNormal">5</div>
            <div class="inner-dropzoneNormal">6</div>
            <div class="inner-dropzoneNormal">7</div>
            <div class="inner-dropzoneNormal">8</div>
            <div class="inner-dropzoneNormal">9</div>
            <div class="inner-dropzoneNormal">10</div>
            <div class="inner-dropzoneNormal">11</div>
            <div class="inner-dropzoneNormal">12</div>
            <div class="inner-dropzoneNormal">13</div>
            <div class="inner-dropzoneNormal">14</div>
            <div class="inner-dropzoneNormal">15</div>
            <div class="inner-dropzoneNormal">16</div>
          </div>
          <div style="text-align: center; margin-top: 2%;">
            <ion-button size="large" @click="goToVerRompecabezas()">Ver rompecabezas</ion-button>
          </div>
  
        </div>


      </div>

      <div class="footer">
          <ion-button size="large" class="botonInferior">
              <ion-icon name="volume-high" size="large"></ion-icon>
          </ion-button>
          <ion-button size="large" class="botonInferior"> Ayuda </ion-button>
          <ion-button size="large" class="botonInferior"> Pista </ion-button>
          <ion-button size="large" class="botonInferior" router-direction="forward" href="/ElegirDificultad">
              <ion-icon name="arrow-back" size="large"></ion-icon>
          </ion-button>
      </div>

    </div>

    </ion-content>

  </ion-page>

</template>



<script>
import { IonContent,IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomePage',
  components: {
    IonPage,
    IonContent
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    goToColocar(){
      this.$router.push('/ColocarNormal'); 
    },
    goToVerRompecabezas(){
      this.$router.push('/VerRompecabezasNormal'); 
    }
  }
});


</script>

<style scoped src="../styles/rompecabezas.css"> </style>

<style scoped>
.botonInferior{
  --border-radius: 10px; 
  font-size: 30px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:3%;
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

</style>
