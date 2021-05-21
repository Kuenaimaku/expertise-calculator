<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Miitama Demon Growth Science"
  >
    <template slot="content">
      <p>
        <span class="option-title">Demonology</span>: minimum Class 3 Rank 0.
        <span class="option-title">60%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.demonology.value * 0.6)
        }})
      </p>
      <p>
        <span class="option-title">Psychology</span>: minimum Class 2 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.psychology.value * 0.4)
        }})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "MiitamaDemonGrowthScience",
  components: {
    ChainExpertise,
  },
  props: {
    expertise: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    hideLocked: {
      type: Boolean,
      default: false,
    },
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
        this.expertise.demonology.value = 0;
        this.expertise.psychology.value = 0;
      } else if (to === "required") {
        this.expertise.demonology.value = 3000;
        this.expertise.psychology.value = 2000;
      } else if (to === "max") {
        this.expertise.demonology.value = this.expertise.demonology.max;
        this.expertise.psychology.value = this.expertise.psychology.max;
      }
    },
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.demonology.value >= 3000 &&
        this.expertise.psychology.value >= 2000
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
      } else if (a >= 100) {
        return "Class " + b.charAt(0) + b.charAt(1) + " Rank " + b.charAt(2);
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
  },
};
</script>
