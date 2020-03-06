<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Magic Fist"
  >
    <template slot="content">
      <p>
        <span class="option-title">Rush</span>: minimum Class 1 Rank 0.
        <span class="option-title">30%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.rush.value * 0.3)}})
      </p>
      <p>
        <span class="option-title">Destruction Magic</span>: minimum Class 1 Rank 0.
        <span class="option-title">30%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.destructionMagic.value * 0.3)}})
      </p>
      <p>
        <span class="option-title">Magic Control</span>: minimum Class 1 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.magicControl.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "MagicFist",
  components: {
    ChainExpertise
  },
  props: {
    expertise: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    },
    hideLocked: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    parseExpertise(amount) {
      var a = Number.parseInt(amount) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 100) {
        return "Class " + b.charAt(0) + b.charAt(1) + " Rank " + b.charAt(2);
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
    setValues(to) {
      if (to === "zero") {
        this.expertise.rush.value = 0;
        this.expertise.destructionMagic.value = 0;
        this.expertise.magicControl.value = 0;
      } else if (to === "required") {
        this.expertise.rush.value = 1000;
        this.expertise.destructionMagic.value = 1000;
        this.expertise.magicControl.value = 1000;
      } else if (to === "max") {
        this.expertise.rush.value = this.expertise.rush.max;
        this.expertise.destructionMagic.value = this.expertise.destructionMagic.max;
        this.expertise.magicControl.value = this.expertise.magicControl.max;
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.rush.value >= 1000 &&
        this.expertise.destructionMagic.value >= 1000 &&
        this.expertise.magicControl.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let rush = this.expertise.rush.value * 0.3;
      let destructionMagic = this.expertise.destructionMagic.value * 0.3;
      let magicControl = this.expertise.magicControl.value * 0.4;

      var a = Number.parseInt(rush + destructionMagic + magicControl) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 100) {
        return "Class " + b.charAt(0) + b.charAt(1) + " Rank " + b.charAt(2);
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    }
  }
};
</script>
