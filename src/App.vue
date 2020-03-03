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
            <b-tabs type="is-boxed" size=is-medium expanded v-model="activeTab">
              <b-tab-item label="Expertise">
                <multistep-number-input
                  v-model="expertise.attack"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Attack</span>
                    <b-tooltip type="is-dark" label="Effects 'Rampage' by 20%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.attack)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.spin"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Spin</span>
                    <b-tooltip type="is-dark" label="Effects 'Rampage' by 20%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.spin)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.rush"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Rush</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Rampage' by 20%
Effects 'Magic Fist' by 30%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.rush)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.pursuit"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Pursuit</span>
                    <b-tooltip type="is-dark" label="Effects 'Rampage' by 20%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.pursuit)}}</span>
                  </template>
                </multistep-number-input>
              </b-tab-item>
              <b-tab-item label="Options">
                <options :options="this.expertiseOptions"/>
              </b-tab-item>
            </b-tabs>
          </div>
          <div class="column is-three-fifths">
            <h2 class="title">Summary</h2>
            <chain-expertise :expertise="this.expertise"/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Options from "@/components/Options.vue";
import ChainExpertise from "@/components/ChainExpertise.vue";
import MultistepNumberInput from "@/components/MultistepNumberInput.vue";
export default {
  name: "App",
  components: {
    Options,
    MultistepNumberInput,
    ChainExpertise
  },
  data() {
    return {
      activeTab: 0,
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
        attack: 0,
        spin: 0,
        rush: 0,
        shot: 0,
        rapid: 0,
        guard: 0,
        counter: 0,
        dodge: 0,
        curativeMagic: 0,
        destructionMagic: 0,
        supportMagic: 0,
        curseMagic: 0,
        talk: 0,
        threaten: 0,
        taunt: 0,
        summon: 0,
        occultism: 0,
        fusion: 0,
        demonology: 0,
        weaponKnowledge: 0,
        survivalTechniques: 0,
        psychology: 0,
        medicalSciences: 0,
        crushingTechniques: 0,
        mineralogy: 0,
        biology: 0,
        botany: 0,
        mechanicalEngineering: 0,
        informationEngineering: 0,
        blades: 0,
        sketching: 0,
        creation: 0,
        firearmsKnowledge: 0,
        gunKnowledge: 0,
        pursuit: 0,
        magicControl: 0,
        bless: 0
      }
    };
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
  },
  computed: {
    currentExpertise() {
      const values = Object.values(this.expertise);
      return values.reduce((a, b) => a + b, 0);
    },
    progressType() {
      const values = Object.values(this.expertise);
      var a = values.reduce((a, b) => a + b, 0);
      if (a <= (this.expertiseFloor + this.bonusExpertise)) return "is-warning";
      else return "is-danger";
    },
    bonusExpertise(){
      const values = Object.values(this.expertiseOptions);
      var a = values.reduce((a, b) => a + b, 0) - this.expertiseOptions.level;
      var b = Math.floor(this.expertiseOptions.level / 10) * 1000
      return a+b;
    }
  }
};
</script>

<style lang="scss">


.force-newline.b-tooltip.is-multiline:after {
  white-space: pre;
}
p.progress-value {
  color: #222 !important;
}

section.tab-content {
  border: 1px solid #dbdbdb;
  border-top: 0px;
}
</style>
