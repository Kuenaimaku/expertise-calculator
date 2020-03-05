<template>
  <div id="options">
    <section class="container">
      <multistep-number-input
        v-model="options.level.value"
        :editable="false"
        :step1="1"
        :step2="10"
        :min="1"
        :max="99">
        <template slot="title">
          <span class="has-text-primary option-title">Level</span>
        </template>
      </multistep-number-input>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">Golden Arc Casino</span>
        </template>
        <b-numberinput
          min="0"
          max="4000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.casino.value"
        />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">Special Training</span>
        </template>
        <b-numberinput
          min="0"
          max="3000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.specialTraining.value"
        />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">
            Tier 1 Demon Digitalize
            <b-tooltip type="is-dark" multilined label="Races: Divines, Wild Birds, Earth Elements, Fairies, Beasts, Elementals, Brutes, Evil Dragons, Haunts">
              <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
            </b-tooltip>
          </span>
        </template>
        <b-numberinput
          min="0"
          max="3000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.tierOneDDS.value"
        />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">
            Tier 2 Demon Digitalize
            <b-tooltip type="is-dark" label="Races: Raptor, Yoma, Nocturne, Wilder, Dragon King, Femme, Foul">
              <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
            </b-tooltip>
          </span>
        </template>
        <b-numberinput
          min="0"
          max="3000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.tierTwoDDS.value"
        />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">
            Tier 3 Demon Digitalize
            <b-tooltip type="is-dark" label="Races: Fallen Angel, Dragon, Avian, Evil Demon, Godly Beast, Holy Beast">
              <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
            </b-tooltip>
          </span>
        </template>
        <b-numberinput
          min="0"
          max="3000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.tierThreeDDS.value"
        />
      </b-field>
      <b-field>
        <p class="control option-title">
          Level 10 Demon Digitalize: Group 1
          <b-tooltip type="is-dark" label="Races: Demigod">
            <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
          </b-tooltip>
        </p>
        <b-checkbox size="is-medium" v-model.number="options.levelTenDDS1.value" true-value=3000 false-value=0 />
      </b-field>
      <b-field>
        <p class="control option-title">
          Level 10 Demon Digitalize: Group 2
          <b-tooltip type="is-dark" label="Races: Goddess, Vile, Heavenly God">
            <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
          </b-tooltip>
        </p>
        <b-checkbox size="is-medium" v-model.number="options.levelTenDDS2.value" true-value=3000 false-value=0 />
      </b-field>
      <b-field>
        <p class="control option-title">
          Level 10 Demon Digitalize: Group 3
          <b-tooltip type="is-dark" label="Races: Reaper">
            <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
          </b-tooltip>
        </p>
        <b-checkbox size="is-medium" v-model.number="options.levelTenDDS3.value" true-value=3000 false-value=0 />
      </b-field>
      <b-field>
        <p class="control option-title">
          Level 10 Demon Digitalize: Group 4
          <b-tooltip type="is-dark" label="Races: Guardian, Earth Mother, Nation Ruler">
            <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
          </b-tooltip>
        </p>
        <b-checkbox size="is-medium" v-model.number="options.levelTenDDS4.value" true-value=3000 false-value=0 />
      </b-field>
      <b-field>
        <p class="control option-title">
          Level 10 Demon Digitalize: Group 5
          <b-tooltip type="is-dark" label="Races: Entity">
            <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
          </b-tooltip>
        </p>
        <b-checkbox size="is-medium" v-model.number="options.levelTenDDS5.value" true-value=3000 false-value=0 />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">Diaspora</span>
        </template>
        <b-numberinput
          min="0"
          max="16000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.diaspora.value"
        />
      </b-field>
      <b-field>
        <template slot="label">
          <span class="has-text-primary option-title">St. Germain Quests</span>
        </template>
        <b-numberinput
          min="0"
          max="2000"
          step="1000"
          controls-position="compact"
          expanded
          v-model="options.saintGermain.value"
        />
      </b-field>
    </section>
  </div>
</template>

<script>
import MultistepNumberInput from "./MultistepNumberInput";
export default {
  name: "Options",
  components: {
    MultistepNumberInput
  },
  props: {
    options: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
    };
  }
};
</script>

<style lang="scss" scoped>
p.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
  padding-right: 1rem;
}
</style>
