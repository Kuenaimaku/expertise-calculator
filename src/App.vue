<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Expertise Calculator</h1>
          <p class="subtitle">For Shin Megami Tensei: IMAGINE Online</p>
          <b-progress
            :type="progressType"
            size="is-large"
            :value="currentExpertise"
            :max="expertiseFloor + bonusExpertise"
            show-value
          >{{currentExpertise}}/{{(expertiseFloor + bonusExpertise)}}</b-progress>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <h2 class="title">Input</h2>
            <b-tabs type="is-boxed" size="is-medium" expanded v-model="activeTab">
              <b-tab-item label="Expertise">
                
              </b-tab-item>
              <b-tab-item label="Options">
                <options :options="this.expertiseOptions" />
              </b-tab-item>
            </b-tabs>
          </div>
          <div class="column is-three-fifths">
            <h2 class="title">Summary</h2>
            <chain-expertise :expertise="this.expertise" :options="this.expertiseOptions" />
          </div>
        </div>
      </div>
    </section>
    <b-button
      type="is-primary"
      size="is-large"
      icon-left="link"
      @click="showGenerateLinkModal"
      class="fixed"
    >Generate Link</b-button>
  </div>
</template>

<script>
import ExpertiseDefaultsJSON from "@/expertise.json"
import Options from "@/components/Options.vue";
import ChainExpertise from "@/components/ChainExpertise.vue";
import GenerateLinkModal from "@/components/GenerateLinkModal.vue";
export default {
  name: "App",
  components: {
    Options,
    ChainExpertise
  },
  data() {
    return {
      activeTab: 0,
      params: null,
      expertiseFloor: 17000,
      expertiseOptions: {
        level: 1,
        casino: 0,
        specialTraining: 0,
        tierOneDDS: 0,
        tierTwoDDS: 0,
        tierThreeDDS: 0,
        levelTenDDS1: 0,
        levelTenDDS2: 0,
        levelTenDDS3: 0,
        levelTenDDS4: 0,
        levelTenDDS5: 0,
        diaspora: 0,
        saintGermain: 0
      },
      expertise: {
      }
    };
  },
  created() {
    this.expertise = ExpertiseDefaultsJSON;
    let uri = window.location.search.substring(0);
    this.params = new URLSearchParams(uri);
  },
  beforeMount() {
    let ref = this;
    this.params.forEach(function(value, key) {
      var parsed = Number.parseInt(value);
      switch (key.toLowerCase()) {
        case "ea":
          ref.expertise.attack = parsed * 100;
          break;
        case "eb":
          ref.expertise.spin = parsed * 100;
          break;
        case "ec":
          ref.expertise.rush = parsed * 100;
          break;
        case "ed":
          ref.expertise.shot = parsed * 100;
          break;
        case "ee":
          ref.expertise.rapid = parsed * 100;
          break;
        case "ef":
          ref.expertise.guard = parsed * 100;
          break;
        case "eg":
          ref.expertise.counter = parsed * 100;
          break;
        case "eh":
          ref.expertise.dodge = parsed * 100;
          break;
        case "ei":
          ref.expertise.curativeMagic = parsed * 100;
          break;
        case "ej":
          ref.expertise.destructionMagic = parsed * 100;
          break;
        case "ek":
          ref.expertise.supportMagic = parsed * 100;
          break;
        case "el":
          ref.expertise.curseMagic = parsed * 100;
          break;
        case "em":
          ref.expertise.talk = parsed * 100;
          break;
        case "en":
          ref.expertise.threaten = parsed * 100;
          break;
        case "eo":
          ref.expertise.taunt = parsed * 100;
          break;
        case "ep":
          ref.expertise.summon = parsed * 100;
          break;
        case "eq":
          ref.expertise.occultism = parsed * 100;
          break;
        case "er":
          ref.expertise.fusion = parsed * 100;
          break;
        case "es":
          ref.expertise.demonology = parsed * 100;
          break;
        case "et":
          ref.expertise.weaponKnowledge = parsed * 100;
          break;
        case "eu":
          ref.expertise.survivalTechniques = parsed * 100;
          break;
        case "ev":
          ref.expertise.psychology = parsed * 100;
          break;
        case "ew":
          ref.expertise.medicalSciences = parsed * 100;
          break;
        case "ex":
          ref.expertise.crushingTechnique = parsed * 100;
          break;
        case "ey":
          ref.expertise.mineralogy = parsed * 100;
          break;
        case "ez":
          ref.expertise.biology = parsed * 100;
          break;
        case "eaa":
          ref.expertise.botany = parsed * 100;
          break;
        case "eab":
          ref.expertise.mechanicalEngineering = parsed * 100;
          break;
        case "eac":
          ref.expertise.informationEngineering = parsed * 100;
          break;
        case "ead":
          ref.expertise.blades = parsed * 100;
          break;
        case "eae":
          ref.expertise.sketching = parsed * 100;
          break;
        case "eaf":
          ref.expertise.creation = parsed * 100;
          break;
        case "eag":
          ref.expertise.crafts = parsed * 100;
          break;
        case "eah":
          ref.expertise.firearmsKnowledge = parsed * 100;
          break;
        case "eai":
          ref.expertise.gunKnowledge = parsed * 100;
          break;
        case "eaj":
          ref.expertise.pursuit = parsed * 100;
          break;
        case "eak":
          ref.expertise.magicControl = parsed * 100;
          break;
        case "eal":
          ref.expertise.bless = parsed * 100;
          break;
        //Expertise Options
        case "oa":
          ref.expertiseOptions.level = parsed;
          break;
        case "ob":
          ref.expertiseOptions.casino = parsed * 1000;
          break;
        case "oc":
          ref.expertiseOptions.specialTraining = parsed * 1000;
          break;
        case "od":
          ref.expertiseOptions.tierOneDDS = parsed * 1000;
          break;
        case "oe":
          ref.expertiseOptions.tierTwoDDS = parsed * 1000;
          break;
        case "of":
          ref.expertiseOptions.tierThreeDDS = parsed * 1000;
          break;
        case "og":
          ref.expertiseOptions.levelTenDDS1 = parsed * 1000;
          break;
        case "oh":
          ref.expertiseOptions.levelTenDDS2 = parsed * 1000;
          break;
        case "oi":
          ref.expertiseOptions.levelTenDDS3 = parsed * 1000;
          break;
        case "oj":
          ref.expertiseOptions.levelTenDDS4 = parsed * 1000;
          break;
        case "ok":
          ref.expertiseOptions.levelTenDDS5 = parsed * 1000;
          break;
        case "ol":
          ref.expertiseOptions.diaspora = parsed * 1000;
          break;
        case "om":
          ref.expertiseOptions.saintGermain = parsed * 1000;
          break;
      }
    });
  },
  methods: {
    subtitle(amount) {
      var a = Number.parseInt(amount) / 100;
      var b = a.toString();
      if (a === 0) {
        return "- Class 0 Rank 0";
      } else if (a >= 10) {
        return "- Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "- Class 0 Rank " + b.charAt(0);
      }
    },
    showGenerateLinkModal() {
      this.$buefy.modal.open({
        parent: this,
        component: GenerateLinkModal,
        width: 680,
        hasModalCard: true,
        props: {
          options: this.expertiseOptions,
          expertise: this.expertise
        }
      });
    }
  },
  computed: {
    currentExpertise() {
      const values = Object.values(this.expertise);
      return values.reduce((a, b) => a + b, 0);
    },
    progressType() {
      const values = Object.values(this.expertise);
      var a = values.reduce((a, b) => a + b, 0);
      if (a <= this.expertiseFloor + this.bonusExpertise) return "is-warning";
      else return "is-danger";
    },
    bonusExpertise() {
      const values = Object.values(this.expertiseOptions);
      var a = values.reduce((a, b) => a + b, 0) - this.expertiseOptions.level;
      var b = Math.floor(this.expertiseOptions.level / 10) * 1000;
      return a + b;
    }
  }
};
</script>

<style lang="scss" scoped>
p.progress-value {
  color: #222 !important;
}

section.tab-content {
  border: 1px solid #dbdbdb;
  border-top: 0px;
}

.fixed {
  position: fixed;
  right: 5vw;
  bottom: 5vh;
}
</style>
