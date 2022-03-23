<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data() {
    return {
      urlInput: '',
      url: 'https://editor.p5js.org/',
      pageCount: 2,
      width: window.innerWidth / 2 - 100,
      height: window.innerHeight - 100,
      selected: 0,
    };
  },
  computed: {
    incomplete() {
      return this.tasks.filter(this.inProgress).length;
    }
  },
  methods: {
    changeWidth(e){
      this.width = e.target.value;
    },

    changeHeight(e){
      this.height = e.target.value;
    },

    addPages() {
      this.pageCount = this.pageCount + 1;
   
    },
    minusPages() {
     
      this.pageCount = Math.max(1,this.pageCount -1);
    },

    gotoUrl() {
      this.url = this.urlInput;
  
    },
  }
};
</script>

<template>
  <main>

  <div class="page-bar">
      <h1>Multi-Displayer</h1>
    <div class="page-bar-section">
      <p>What's the website url?</p>
        <input type="text"
               class="input-group-field"
               v-model="urlInput"
               @keyup.enter="gotoUrl"
               placeholder="paste your URL here"
        >
     
          <button @click="gotoUrl" 
                  class="button"
          >
           Update
          </button>
    </div>
        
      <div class="page-bar-section">
        <p>How many windows to display?</p>
        <button @click="minusPages">-</button>
            {{ pageCount }}
        <button @click="addPages">+</button>
    
      </div>
    
     
      <div class="page-bar-section">
        <p>Size of each window?</p>
        <div>
        <label for="width-slider">Width: </label>
        <input type="range" :min="100" :max="1000" @mouseup="changeWidth" name="width-slider" id="myWidth" value="width">
        {{width}}px
        &nbsp;
        <label for="height-slider">Height: </label>
        <input type="range" :min="100" :max="1000" @mouseup="changeHeight" name="height-slider" id="myHeight" value="height">
        {{height}}px
        </div>    
      </div>

      <div>

      </div>

</div>
    <div class="page-wrapper">
        <div class="page-wrapper-page" 
            v-for="page in pageCount" 
            ref="pageCount"
 
            >
          <HelloWorld :url="url" :width="width" :height="height" />

        </div>
      

    </div>

  </main>
</template>

<style>
@import './assets/base.css';

#main {
  max-width:100vw;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

.page-bar{
  display: flex;
  flex-direction: row;
  border-bottom: black 1px solid;
  position: sticky;
  top: 0;
  z-index: 100;
  /* background-color: white; */
   background: var(--color-background);
}

.page-bar-section{
  padding: 1rem;
}

h1{
  padding: 1rem;
}

.page-wrapper{
  display: flex;
  
  width: 100%;
  flex-flow: row wrap;

  padding-left: 0.5rem;
}

.page-wrapper-page{
  padding: 0.5rem;
}

div.highlight {
  border: yellow 2px solid;
}

</style>
