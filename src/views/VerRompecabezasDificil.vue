<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

    <div style="padding-left: 3%; padding-right: 3%;padding-bottom: 3%;">
      <h1>Resolviendo rompecabezas</h1>
      <h2 style="margin-top:-10px">Dificultad dificil</h2>
      <br>
      
          <div class="divSupremo" style="width:100%; display: flex; ">
            <div id="outer-dropzone" class="tablero" style="margin-left: 10%;display:inline-block">
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

            <div style="margin-left: 20%;">
                <h2 style="margin-top: 50%">No hay pieza seleccionada</h2>
                <ion-button size="large" class="botonInferior" @click="goToPieces()">Ver piezas sueltas</ion-button>
            </div>
          </div>

      <div class="footer">
          <ion-button size="large" class="botonInferior">
              <ion-icon name="volume-high" size="large"></ion-icon>
          </ion-button>
          <ion-button size="large" class="botonInferior"> Ayuda </ion-button>
          <ion-button size="large" class="botonInferior"> Pista </ion-button>
          <ion-button size="large" class="botonInferior" router-direction="back" href="javascript: history.go(-1)">
              <ion-icon name="arrow-back" size="large"></ion-icon>
          </ion-button>
      </div>
    </div>

    </ion-content>

  </ion-page>

</template>



<script>
import interact from 'interactjs';
import { IonContent,IonPage } from '@ionic/vue';
import { defineComponent } from 'vue';

interact('.inner-dropzoneDificil').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')
    },
    ondrop: function (event) {
      event.relatedTarget.textContent = ''
    },
    ondropdeactivate: function (event) {
      // remove active dropzone feedback
      event.target.classList.remove('drop-active')
      event.target.classList.remove('drop-target')
    }
  })
  
  interact('.drag-drop')
    .draggable({
      inertia: true,
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: '.divSupremo',
          endOnly: true
        })
      ],
      autoScroll: true,
      // dragMoveListener from the dragging demo above
      listeners: { move: dragMoveListener }
    })
  
  function dragMoveListener (event) {
    var target = event.target
    // keep the dragged position in the data-x/data-y attributes
    var x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx
    var y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy

    // translate the element
    target.style.transform = 'translate(' + x + 'px, ' + y + 'px)'

    // update the posiion attributes
    target.setAttribute('data-x', x)
    target.setAttribute('data-y', y)
  }

  window.dragMoveListener = dragMoveListener


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
    goToPieces(){
      this.$router.push('/Dificil'); 
    },
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
