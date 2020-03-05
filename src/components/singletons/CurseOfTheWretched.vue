<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    name="Curse of the Wretched"
  >
    <template slot="content">
      <p>
        <span class="option-title">Destruction Magic</span>: minimum Class 1 Rank 0.
        <span class="option-title">10%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.destructionMagic.value * 0.1)}})
      </p>
      <p>
        <span class="option-title">Curse Magic</span>: minimum Class 2 Rank 0.
        <span class="option-title">50%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.curseMagic.value * 0.5)}})
      </p>
      <p>
        <span class="option-title">Magic Control</span>: minimum Class 1 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.magicControl.value * 0.2)}})
      </p>
      <p>
        <span class="option-title">Bless</span>: minimum Class 1 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.bless.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "CurseOfTheWretched",
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
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.destructionMagic.value >= 1000 &&
        this.expertise.curseMagic.value >= 2000 &&
        this.expertise.magicControl.value >= 1000 &&
        this.expertise.bless.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let destructionMagic = this.expertise.destructionMagic.value * 0.1;
      let curseMagic = this.expertise.curseMagic.value * 0.5;
      let magicControl = this.expertise.magicControl.value * 0.2;
      let bless = this.expertise.bless.value * 0.2;

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
    }
  }
};
</script>
