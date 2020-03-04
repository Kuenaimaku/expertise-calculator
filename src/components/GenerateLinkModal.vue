<template>
  <div class="modal-card" style="min-width:680px">
    <header class="modal-card-head">
      <p class="modal-card-title">Share your Build</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Copy the link below">
        <b-input type="textarea" v-model="link" readonly></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button class="button" expanded type="is-primary" @click="$parent.close()">Close</b-button>
    </footer>
  </div>
</template>

<script>
export default {
  props: {
    expertise: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      password: ""
    };
  },
  computed: {
    link() {
      let params = new URLSearchParams();
      let values = Object.assign(this.expertise, this.options);
      for (let [key, value] of Object.entries(values)) {
        console.log(`${key}: ${value}`);
        var k = "";
        var v = 0;
        switch (key) {
          case "attack":
            k = "ea";
            v = Number.parseInt(value) / 100;
            break;
          case "spin":
            k = "eb";
            v = Number.parseInt(value) / 100;
            break;
          case "rush":
            k = "ec";
            v = Number.parseInt(value) / 100;
            break;
          case "shot":
            k = "ed";
            v = Number.parseInt(value) / 100;
            break;
          case "rapid":
            k = "ee";
            v = Number.parseInt(value) / 100;
            break;
          case "guard":
            k = "ef";
            v = Number.parseInt(value) / 100;
            break;
          case "counter":
            k = "eg";
            v = Number.parseInt(value) / 100;
            break;
          case "dodge":
            k = "eh";
            v = Number.parseInt(value) / 100;
            break;
          case "curativeMagic":
            k = "ei";
            v = Number.parseInt(value) / 100;
            break;
          case "destructionMagic":
            k = "ej";
            v = Number.parseInt(value) / 100;
            break;
          case "supportMagic":
            k = "ek";
            v = Number.parseInt(value) / 100;
            break;
          case "curseMagic":
            k = "el";
            v = Number.parseInt(value) / 100;
            break;
          case "talk":
            k = "em";
            v = Number.parseInt(value) / 100;
            break;
          case "threaten":
            k = "en";
            v = Number.parseInt(value) / 100;
            break;
          case "taunt":
            k = "eo";
            v = Number.parseInt(value) / 100;
            break;
          case "summon":
            k = "ep";
            v = Number.parseInt(value) / 100;
            break;
          case "occultism":
            k = "eq";
            v = Number.parseInt(value) / 100;
            break;
          case "fusion":
            k = "er";
            v = Number.parseInt(value) / 100;
            break;
          case "demonology":
            k = "es";
            v = Number.parseInt(value) / 100;
            break;
          case "weaponKnowledge":
            k = "et";
            v = Number.parseInt(value) / 100;
            break;
          case "survivalTechniques":
            k = "eu";
            v = Number.parseInt(value) / 100;
            break;
          case "psychology":
            k = "ev";
            v = Number.parseInt(value) / 100;
            break;
          case "medicalSciences":
            k = "ew";
            v = Number.parseInt(value) / 100;
            break;
          case "crushingTechnique":
            k = "ex";
            v = Number.parseInt(value) / 100;
            break;
          case "mineralogy":
            k = "ey";
            v = Number.parseInt(value) / 100;
            break;
          case "biology":
            k = "ez";
            v = Number.parseInt(value) / 100;
            break;
          case "botany":
            k = "eaa";
            v = Number.parseInt(value) / 100;
            break;
          case "mechanicalEngineering":
            k = "eab";
            v = Number.parseInt(value) / 100;
            break;
          case "informationEngineering":
            k = "eac";
            v = Number.parseInt(value) / 100;
            break;
          case "blades":
            k = "ead";
            v = Number.parseInt(value) / 100;
            break;
          case "sketching":
            k = "eae";
            v = Number.parseInt(value) / 100;
            break;
          case "creation":
            k = "eaf";
            v = Number.parseInt(value) / 100;
            break;
          case "crafts":
            k = "eag";
            v = Number.parseInt(value) / 100;
            break;
          case "firearmsKnowledge":
            k = "eah";
            v = Number.parseInt(value) / 100;
            break;
          case "gunKnowledge":
            k = "eai";
            v = Number.parseInt(value) / 100;
            break;
          case "pursuit":
            k = "eaj";
            v = Number.parseInt(value) / 100;
            break;
          case "magicControl":
            k = "eak";
            v = Number.parseInt(value) / 100;
            break;
          case "bless":
            k = "eal";
            v = Number.parseInt(value) / 100;
            break;
          // Expertise Options
          case "level":
            k = "oa";
            v = Number.parseInt(value);
            break;
          case "casino":
            k = "ob";
            v = Number.parseInt(value) / 1000;
            break;
          case "specialTraining":
            k = "oc";
            v = Number.parseInt(value) / 1000;
            break;
          case "tierOneDDS":
            k = "od";
            v = Number.parseInt(value) / 1000;
            break;
          case "tierTwoDDS":
            k = "oe";
            v = Number.parseInt(value) / 1000;
            break;
          case "tierThreeDDS":
            k = "of";
            v = Number.parseInt(value) / 1000;
            break;
          case "levelTenDDS1":
            k = "og";
            v = Number.parseInt(value) / 1000;
            break;
          case "levelTenDDS2":
            k = "oh";
            v = Number.parseInt(value) / 1000;
            break;
          case "levelTenDDS3":
            k = "oi";
            v = Number.parseInt(value) / 1000;
            break;
          case "levelTenDDS4":
            k = "oj";
            v = Number.parseInt(value) / 1000;
            break;
          case "levelTenDDS5":
            k = "ok";
            v = Number.parseInt(value) / 1000;
            break;
          case "diaspora":
            k = "ol";
            v = Number.parseInt(value) / 1000;
            break;
          case "saintGermain":
            k = "om";
            v = Number.parseInt(value) / 1000;
            break;
        }
        if ((k === "oa" && v !== 1) || (k !== "oa" && v !== 0)) {
          params.append(k, v);
        }
      }
      if(params.toString() !== ""){
          return "https://kuenaimaku.com?" + params.toString()
      }else{
            return "https://kuenaimaku.com"
      }
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>