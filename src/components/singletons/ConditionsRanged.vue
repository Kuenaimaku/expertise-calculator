<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Conditions of Ranged Combat"
  >
    <template slot="content">
      <p>
        <span class="option-title">Gun Knowledge</span>: minimum Class 3 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.gunKnowledge.value * 0.4)
        }})
      </p>
      <p>
        <span class="option-title">Crushing Technique</span>: minimum Class 3
        Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.crushingTechnique.value * 0.4)
        }})
      </p>
      <p>
        <span class="option-title">Demonology</span>: minimum Class 1 Rank 0
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.demonology.value * 0.2)
        }})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "ConditionsOfRangedCombat",
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
        this.expertise.gunKnowledge.value = 0;
        this.expertise.crushingTechnique.value = 0;
        this.expertise.demonology.value = 0;
      } else if (to === "required") {
        this.expertise.gunKnowledge.value = 3000;
        this.expertise.crushingTechnique.value = 3000;
        this.expertise.demonology.value = 1000;
      } else if (to === "max") {
        this.expertise.gunKnowledge.value = this.expertise.gunKnowledge.max;
        this.expertise.crushingTechnique.value = this.expertise.crushingTechnique.max;
        this.expertise.demonology.value = this.expertise.demonology.max;
      }
    },
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.gunKnowledge.value >= 3000 &&
        this.expertise.crushingTechnique.value >= 3000 &&
        this.expertise.demonology.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let gunKnowledge = this.expertise.gunKnowledge.value * 0.4;
      let crushingTechnique = this.expertise.crushingTechnique.value * 0.4;
      let demonology = this.expertise.demonology.value * 0.2;

      var a =
        Number.parseInt(
          Math.min(gunKnowledge + crushingTechnique + demonology, 8800)
        ) / 100;
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
