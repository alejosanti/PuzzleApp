<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

    <div style="padding-left: 3%; padding-right: 3%; padding-bottom: 3%">
      <h1>Resolviendo rompecabezas</h1>
      <h2 style="margin-top:-10px"> Dificultad dificil </h2>
      <h3 id="textoExplicacion" style="text-align:left">Seleccione una pieza para insertar en el rompecabezas</h3>
      <br>
      
      <div id="divGeneral">

        <div id="outer-dropzonePiezas" style="background-color:grey;width:60% !important;padding:10px;display:inline-block">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">    
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()"> 
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">
          <img src="../../images/puzzlepiece.png" style="width: 12%; height: 24%;" @click="goToColocar()">

        </div>

        <div style="display:inline-block;width:40%;text-align:center">
          <div id="outer-dropzoneNormal" style="text-align:left" class="tablero">
            <div class="inner-dropzoneDificil">1</div>
            <div class="inner-dropzoneDificil">2</div>
            <div class="inner-dropzoneDificil">3</div>
            <div class="inner-dropzoneDificil">4</div>
            <div class="inner-dropzoneDificil">5</div>
            <div class="inner-dropzoneDificil">6</div>
            <div class="inner-dropzoneDificil">7</div>
            <div class="inner-dropzoneDificil">8</div>
            <div class="inner-dropzoneDificil">9</div>
            <div class="inner-dropzoneDificil">10</div>
            <div class="inner-dropzoneDificil">11</div>
            <div class="inner-dropzoneDificil">12</div>
            <div class="inner-dropzoneDificil">13</div>
            <div class="inner-dropzoneDificil">14</div>
            <div class="inner-dropzoneDificil">15</div>
            <div class="inner-dropzoneDificil">16</div>
            <div class="inner-dropzoneDificil">17</div>
            <div class="inner-dropzoneDificil">18</div>
            <div class="inner-dropzoneDificil">19</div>
            <div class="inner-dropzoneDificil">20</div>
            <div class="inner-dropzoneDificil">21</div>
            <div class="inner-dropzoneDificil">22</div>
            <div class="inner-dropzoneDificil">23</div>
            <div class="inner-dropzoneDificil">24</div>
            <div class="inner-dropzoneDificil">25</div>
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
          <ion-button size="large" class="botonInferior" router-direction="back" href="/ElegirDificultad">
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
      this.$router.push('/ColocarDificil'); 
    },
    goToVerRompecabezas(){
      this.$router.push('/VerRompecabezasDificil'); 
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

.drag-drop{
  width: 18%;
  height: 38%;
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
