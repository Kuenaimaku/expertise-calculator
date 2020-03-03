<template>
  <div id="chain-expertise">
    <b-field grouped>
      <template slot="label">
        <span class="summary-section-title">Chain Expertise</span>
      </template>
      <b-switch size="is-small" v-model="hideLocked">Hide Locked Chain Expertise</b-switch>
    </b-field>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasRampage" :open=false>
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Rampage</span>
          - {{rampageValue}}
        </p>
        <a class="card-header-icon">
          View Requirements <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <span class="option-title">Attack</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.attack * 0.2)}})
          </p>
          <p>
            <span class="option-title">Spin</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.spin * 0.2)}})
          </p>
          <p>
            <span class="option-title">Rush</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.rush * 0.2)}})
          </p>
          <p>
            <span class="option-title">Pursuit</span>
            Requires Class 3 Rank 0, accounts for 40% (adds {{parseExpertise(this.expertise.pursuit * 0.4)}})
          </p>
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasRampage" :open=false>
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Rampage</span>
          - {{rampageValue}}
        </p>
        <a class="card-header-icon">
          View Requirements <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <span class="option-title">Attack</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.attack * 0.2)}})
          </p>
          <p>
            <span class="option-title">Spin</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.spin * 0.2)}})
          </p>
          <p>
            <span class="option-title">Rush</span>
            Requires Class 2 Rank 0, accounts for 20% (adds {{parseExpertise(this.expertise.rush * 0.2)}})
          </p>
          <p>
            <span class="option-title">Pursuit</span>
            Requires Class 3 Rank 0, accounts for 40% (adds {{parseExpertise(this.expertise.pursuit * 0.4)}})
          </p>
        </div>
      </div>
    </b-collapse>
  </div>
</template>
<script>
export default {
  name: "ChainExpertise",
  props: {
    expertise: {
      type: Object,
      required: true
    }
  },
  methods: {
    parseExpertise(amount) {
      var a = Number.parseInt(amount) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    }
  },
  computed: {
    hasRampage() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.attack >= 2000 &&
        this.expertise.spin >= 2000 &&
        this.expertise.rush >= 2000 &&
        this.expertise.pursuit >= 3000
      )
        return true;
      else return false;
    },
    rampageValue() {
      let attack = this.expertise.attack * 0.2;
      let spin = this.expertise.spin * 0.2;
      let rush = this.expertise.rush * 0.2;
      let pursuit = this.expertise.pursuit * 0.4;

      var a = Number.parseInt(attack + spin + rush + pursuit) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    }
  },
  data() {
    return {
      hideLocked: false
    };
  }
};
</script>

<style lang="scss" scoped>
.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
}

.summary-section-title {
  font-weight: bold;
  font-size: 1.25em;
  margin-bottom: 0 !important;
  margin-right: 1rem;
}
</style>
