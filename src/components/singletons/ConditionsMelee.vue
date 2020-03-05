<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    name="Conditions of Melee Combat"
  >
    <template slot="content">
      <p>
        <span class="option-title">Weapon Knowledge</span>: minimum Class 3 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.weaponKnowledge.value * 0.4)}})
      </p>
      <p>
        <span class="option-title">Crushing Technique</span>: minimum Class 3 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.crushingTechnique.value * 0.4)}})
      </p>
      <p>
        <span class="option-title">Demonology</span>: minimum Class 1 Rank 0
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.demonology.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "ConditionsOfMeleeCombat",
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
        this.expertise.weaponKnowledge.value >= 3000 &&
        this.expertise.crushingTechnique.value >= 3000 &&
        this.expertise.demonology.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let weaponKnowledge = this.expertise.weaponKnowledge.value * 0.4;
      let crushingTechnique = this.expertise.crushingTechnique.value * 0.4;
      let demonology = this.expertise.demonology.value * 0.2;

      var a = Number.parseInt(Math.min((weaponKnowledge + crushingTechnique + demonology),8800)) / 100;
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
