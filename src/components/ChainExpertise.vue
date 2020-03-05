<template>
  <div id="chain-expertise">
    <b-collapse class="card" v-if="visible" :open="false">
      <div
        slot="trigger"
        slot-scope="props"
        class="card-header"
        role="button"
      >
        <p class="card-header-title">
          <span class="option-title">{{name}}</span>
          - {{classRank}}
        </p>
        <a class="card-header-icon">
          Details
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <slot v-if="$slots.content" name="content"/>
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
    },
    visible: {
      type: Boolean,
      required: true
    },
    name: {
      type: String
    },
    classRank: {
      type: String
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

<style lang="scss">
.is-label {
  margin-right: 1rem;
}

.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
}
</style>
