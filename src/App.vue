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
                  v-model="expertise.shot"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Shot</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Magic Bullet' by 30%
Effects 'Sharpshooter' by 40%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.shot)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.rapid"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="8000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Rapid</span>
                    <b-tooltip type="is-dark" label="Effects 'Support Bullet' by 20%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.rapid)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.guard"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Guard</span>
                    <span>{{subtitle(expertise.guard)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.counter"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Counter</span>
                    <span>{{subtitle(expertise.counter)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.dodge"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Dodge</span>
                    <span>{{subtitle(expertise.dodge)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.curativeMagic"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Curative Magic</span>
                    <b-tooltip type="is-dark" label="Effects 'Enhancement' by 30%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.curativeMagic)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.destructionMagic"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Destruction Magic</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Curse of the Wretched' by 10%
Effects 'Magic Fist' by 30%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.destructionMagic)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.supportMagic"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="8000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Support Magic</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Enhancement' by 40%
Effects 'Support Bullet' by 40%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.supportMagic)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.curseMagic"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="8000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Curse Magic</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Curse of the Wretched' by 50%
Effects 'Magic Bullet' by 10%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.curseMagic)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.talk"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="2000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Talk</span>
                    <span>{{subtitle(expertise.talk)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.threaten"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="2000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Threaten</span>
                    <span>{{subtitle(expertise.threaten)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.taunt"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="2000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Taunt</span>
                    <span>{{subtitle(expertise.taunt)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.summon"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Summon</span>
                    <span>{{subtitle(expertise.summon)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.occultism"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Occultism</span>
                    <b-tooltip type="is-dark" label="Effects 'Synthesis' by 40%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.occultism)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.fusion"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Fusion</span>
                    <span>{{subtitle(expertise.fusion)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.demonology"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Demonology</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Miitama Demon Growth Science' by 60%
Effects 'Sharpshooter' by 40%
Effects 'Synthesis' by 40%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.demonology)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.weaponKnowledge"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="9000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Weapon Knowledge</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Retaliation' by 40%
Effects 'Swordsmith' by 20%
Effects 'Synthesis' by 10%
Effects 'Spiriatual Mixing' Mechanic"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.weaponKnowledge)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.survivalTechniques"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Survival Techniques</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Retaliation' by 40%
Effects 'Spiritual Mixing' Mechanic"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.survivalTechniques)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.psychology"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Psychology</span>
                    <b-tooltip type="is-dark" label="Effects 'Miitama Demon Growth Science' by 40%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.psychology)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.medicalSciences"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="6000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Medical Sciences</span>
                    <b-tooltip type="is-dark" label="Effects 'Craftsmanship' by 20%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.medicalSciences)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.crushingTechnique"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Crushing Technique</span>
                    <b-tooltip
                      multilined
                      class="force-newline"
                      type="is-dark"
                      label="Effects 'Conditions of Melee Combat' by 40%
Effects 'Conditions of Ranged Combat' by 40%
Effects 'Conditions of Magic Combat' by 40%"
                    >
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.crushingTechnique)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.mineralogy"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="10000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Mineralogy</span>
                    <b-tooltip type="is-dark" label="Effects 'Synthesis' by 10%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.mineralogy)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.biology"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="7000"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Biology</span>
                    <span>{{subtitle(expertise.biology)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.mechanicalEngineering"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="0"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Mechanical Engineering</span>
                    <span>{{subtitle(expertise.mechanicalEngineering)}}</span>
                  </template>
                </multistep-number-input>
                <multistep-number-input
                  v-model="expertise.informationEngineering"
                  :step1="100"
                  :step2="1000"
                  :min="0"
                  :max="0"
                  :editable="false"
                >
                  <template slot="title">
                    <span class="has-text-primary option-title">Information Engineering</span>
                    <span>
                      {{subtitle(expertise.informationEngineering
                      )}}
                    </span>
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
                    <b-tooltip type="is-dark" label="Effects 'Rampage' by 40%">
                      <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
                    </b-tooltip>
                    <span>{{subtitle(expertise.pursuit)}}</span>
                  </template>
                </multistep-number-input>
              </b-tab-item>
              <b-tab-item label="Options">
                <options :options="this.expertiseOptions" />
              </b-tab-item>
            </b-tabs>
          </div>
          <div class="column is-three-fifths">
            <h2 class="title">Summary</h2>
            <chain-expertise :expertise="this.expertise" />
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
