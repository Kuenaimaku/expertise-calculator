<template>
  <div id="chain-expertise">
    <b-field grouped>
      <template slot="label">
        <span class="summary-section-title">Chain Expertise</span>
      </template>
      <b-switch size="is-small" v-model="hideLocked">Hide Locked Chain Expertise</b-switch>
    </b-field>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasRampage" :open="false">
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
          View Requirements
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
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
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasMagicFist" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Magic Fist</span>
          - {{magicFistValue}}
        </p>
        <a class="card-header-icon">
          View Requirements
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <span class="option-title">Rush</span>
            Requires Class 1 Rank 0, accounts for 30% (adds {{parseExpertise(this.expertise.rush * 0.3)}})
          </p>
          <p>
            <span class="option-title">Destruction Magic</span>
            Requires Class 1 Rank 0, accounts for 30% (adds {{parseExpertise(this.expertise.destructionMagic * 0.3)}})
          </p>
          <p>
            <span class="option-title">Magic Control</span>
            Requires Class 1 Rank 0, accounts for 40% (adds {{parseExpertise(this.expertise.magicControl * 0.4)}})
          </p>
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasCotw" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Curse of the Wretched</span>
          - {{cotwValue}}
        </p>
        <a class="card-header-icon">
          View Requirements
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <span class="option-title">Destruction Magic</span>
            Requires Class 1 Rank 0, accounts for 10% (adds {{parseExpertise(this.expertise.destructionMagic * 0.1)}})
          </p>
          <p>
            <span class="option-title">Curse Magic</span>
            Requires Class 2 Rank 0, accounts for 10% (adds {{parseExpertise(this.expertise.curseMagic * 0.1)}})
          </p>
          <p>
            <span class="option-title">Magic Control</span>
            Requires Class 1 Rank 0, accounts for 10% (adds {{parseExpertise(this.expertise.magicControl * 0.1)}})
          </p>
          <p>
            <span class="option-title">Bless</span>
            Requires Class 1 Rank 0, accounts for 10% (adds {{parseExpertise(this.expertise.bless * 0.1)}})
          </p>
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasMiitama" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Miitama Demon Growth Science</span>
          - {{miitamaValue}}
        </p>
        <a class="card-header-icon">
          View Requirements
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>
            <span class="option-title">Demonology</span>
            Requires Class 3 Rank 0, accounts for 60% (adds {{parseExpertise(this.expertise.demonology * 0.6)}})
          </p>
          <p>
            <span class="option-title">Psychology</span>
            Requires Class 2 Rank 0, accounts for 40% (adds {{parseExpertise(this.expertise.psychology * 0.4)}})
          </p>
        </div>
      </div>
    </b-collapse>
    <b-collapse class="card" aria-id="RampageChainExpertise" v-if="hasThreeForms" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
        aria-controls="contentIdForA11y3"
      >
        <p class="card-header-title">
          <span class="option-title">Mastery of Three Forms of Life</span>
          - {{threeFormsValue}}
        </p>
        <a class="card-header-icon">
          View Requirements
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <p>Requirement to unlock: Level 98+, Act XX Clear, Complete various quests.</p>
          <p>1-0 Skill is unlocked by clearing Act XX.</p>
          <p>1-2 Skill is unlocked by completing the Mastery of Three Forms of Life (1) quest from Saint Germain</p>
          <p>1-4 Skill is unlocked by completing the Mastery of Three Forms of Life (2) quest from Saint Germain</p>
          <p>1-6 Skill is unlocked by completing the Mastery of Three Forms of Life (3) quest from the Slime in Home 2's Residential Area</p>
          <p>All three quests have a Level 98+ requirement.</p>
          <p>
            <span class="option-title">Weapon Knowledge</span>
            accounts for 20% (adds {{parseExpertise(this.expertise.weaponKnowledge * 0.2)}})
          </p>
          <p>
            <span class="option-title">Gun Knowledge</span>
            accounts for 20% (adds {{parseExpertise(this.expertise.gunKnowledge * 0.2)}})
          </p>
          <p>
            <span class="option-title">Magic Control</span>
            accounts for 20% (adds {{parseExpertise(this.expertise.magicControl * 0.2)}})
          </p>
          <p>
            <span class="option-title">Bless</span>
            accounts for 20% (adds {{parseExpertise(this.expertise.bless * 0.2)}})
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
    },
    options: {
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
    },
    hasMagicFist() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.rush >= 1000 &&
        this.expertise.destructionMagic >= 1000 &&
        this.expertise.magicControl >= 1000
      )
        return true;
      else return false;
    },
    magicFistValue() {
      let rush = this.expertise.rush * 0.3;
      let destructionMagic = this.expertise.destructionMagic * 0.3;
      let magicControl = this.expertise.magicControl * 0.4;

      var a = Number.parseInt(rush + destructionMagic + magicControl) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
    hasMiitama() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.demonology >= 3000 &&
        this.expertise.psychology >= 2000
      )
        return true;
      else return false;
    },
    miitamaValue() {
      let demonology = this.expertise.demonology * 0.6;
      let psychology = this.expertise.psychology * 0.4;

      var a = Number.parseInt(Math.min(demonology + psychology, 7200)) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
    hasCotw() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.destructionMagic >= 1000 &&
        this.expertise.curseMagic >= 2000 &&
        this.expertise.magicControl >= 1000 &&
        this.expertise.bless >= 1000
      )
        return true;
      else return false;
    },
    cotwValue() {
      let destructionMagic = this.expertise.destructionMagic * 0.1;
      let curseMagic = this.expertise.curseMagic * 0.5;
      let magicControl = this.expertise.magicControl * 0.2;
      let bless = this.expertise.bless * 0.2;

      var a =
        Number.parseInt(destructionMagic + curseMagic + magicControl + bless) /
        100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
    hasThreeForms() {
      if (!this.hideLocked) return true;
      else if (this.options.level >= 98) return true;
      else return false;
    },
    threeFormsValue() {
      let weaponKnowledge = this.expertise.weaponKnowledge * 0.2;
      let gunKnowledge = this.expertise.gunKnowledge * 0.2;
      let magicControl = this.expertise.magicControl * 0.2;
      let bless = this.expertise.bless * 0.2;

      var a =
        Number.parseInt(
          Math.min(weaponKnowledge + gunKnowledge + magicControl + bless, 6600)
        ) / 100;
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
