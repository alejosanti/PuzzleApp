<template>
  <ion-page>
    
    <ion-content :fullscreen="true" >

    <div style="padding-left: 3%; padding-right: 3%; padding-bottom: 3%">
      <h1>Resolviendo rompecabezas</h1>
      <h2 style="margin-top:-10px"> Dificultad fácil </h2>
      <h3 id="textoExplicacion" style="text-align:right"> Arrastra una pieza hacia el rompecabezas para colocarla </h3>
      <br>
      
          <div class="divSupremo" style="width:100%;overflow:hidden;">
            <div id="outer-dropzone" class="tablero">
              <div class="inner-dropzoneFacil">1</div>
              <div class="inner-dropzoneFacil">2</div>
              <div class="inner-dropzoneFacil">3</div>
              <div class="inner-dropzoneFacil">4</div>
              <div class="inner-dropzoneFacil">5</div>
              <div class="inner-dropzoneFacil">6</div>
              <div class="inner-dropzoneFacil">7</div>
              <div class="inner-dropzoneFacil">8</div>
              <div class="inner-dropzoneFacil">9</div>
            </div>
            <div id="outer-dropzonePiezas" style="background-color:grey;float:right;width:60%;padding:2px;display:flex">
              <ul>
                <li> <div id="yes-drop" class="drag-drop"> 1 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 2 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 3 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 4 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 5 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 6 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 7 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 8 </div>  </li>
                <li> <div id="yes-drop" class="drag-drop"> 9 </div>  </li>
              </ul>
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
import $ from 'jquery';

interact('.inner-dropzoneFacil').dropzone({
    // only accept elements matching this CSS selector
    accept: '#yes-drop',
    // Require a 75% element overlap for a drop to be possible
    overlap: 0.75,
  
    // listen for drop related events:
  
    ondropactivate: function (event) {
      // add active dropzone feedback
      event.target.classList.add('drop-active')

      event.relatedTarget.textContent = ''
    },
    ondragenter: function (event) {
      var draggableElement = event.relatedTarget
      var dropzoneElement = event.target
  
      // feedback the possibility of a drop
      dropzoneElement.classList.add('drop-target')
      draggableElement.classList.add('can-drop')

      event.relatedTarget.textContent = ''
    },
    ondragleave: function (event) {
      // remove the drop feedback style
      event.target.classList.remove('drop-target')
      event.relatedTarget.classList.remove('can-drop')

      event.relatedTarget.textContent = ''
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
  mounted() {
    var width = $('#outer-dropzone').width();
    var height = $('#outer-dropzone').height();
    $(".drag-drop").css("width",width*0.33);
    $('.drag-drop').css("height",height*0.33);
  },
  created() {
    window.addEventListener("resize", this.myEventHandler);
  },
  unmounted() {
    window.removeEventListener("resize", this.myEventHandler);
  },
  methods: {
    myEventHandler() {
      var width = $('#outer-dropzone').width();
      var height = $('#outer-dropzone').height();
      $(".drag-drop").css("width",width*0.33);
      $('.drag-drop').css("height",height*0.33);
    }
  }
});


</script>

<style scoped src="../styles/rompecabezas.css"> </style>

<style scoped>
ion-content{
    --background: rgba(0, 0, 0) url('../../images/fondo2.jpg') no-repeat center center / cover ;
}

.botonInferior{
  --border-radius: 10px; 
  font-size: 30px;
}

.footer {
  display: flex;
  justify-content: space-between;
  margin-top:3% !important;
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
