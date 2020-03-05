<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    name="Miitama Demon Growth Science"
  >
    <template slot="content">
      <p>
        <span class="option-title">Demonology</span>: minimum Class 3 Rank 0.
        <span class="option-title">60%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.demonology.value * 0.6)}})
      </p>
      <p>
        <span class="option-title">Psychology</span>: minimum Class 2 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.psychology.value * 0.4)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "Rampage",
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
        this.expertise.rush.value >= 1000 &&
        this.expertise.destructionMagic.value >= 1000 &&
        this.expertise.magicControl.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let demonology = this.expertise.demonology.value * 0.6;
      let psychology = this.expertise.psychology.value * 0.4;

      var a = Number.parseInt(Math.min(demonology + psychology, 7200)) / 100;
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
