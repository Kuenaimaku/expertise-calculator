<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Retaliation"
  >
    <template slot="content">
      <p>
        <span class="option-title">Attack</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.attack.value * 0.2)}})
      </p>
      <p>
        <span class="option-title">Weapon Knowledge</span>: minimum Class 1 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.weaponKnowledge.value * 0.4)}})
      </p>
      <p>
        <span class="option-title">Survival Techniques</span>: minimum Class 1 Rank 0
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.survivalTechniques.value * 0.4)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "Retaliation",
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
        this.expertise.attack.value = 0;
        this.expertise.weaponKnowledge.value = 0;
        this.expertise.survivalTechniques.value = 0;
      } else if (to === "required") {
        this.expertise.attack.value = 2000;
        this.expertise.weaponKnowledge.value = 1000;
        this.expertise.survivalTechniques.value = 1000;
      } else if (to === "max") {
        this.expertise.attack.value = this.expertise.attack.max;
        this.expertise.weaponKnowledge.value = this.expertise.weaponKnowledge.max;
        this.expertise.survivalTechniques.value = this.expertise.survivalTechniques.max;
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.attack.value >= 2000 &&
        this.expertise.weaponKnowledge.value >= 1000 &&
        this.expertise.survivalTechniques.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let attack = this.expertise.attack.value * 0.2;
      let weaponKnowledge = this.expertise.weaponKnowledge.value * 0.4;
      let survivalTechniques = this.expertise.survivalTechniques.value * 0.4;

      var a =
        Number.parseInt(attack + weaponKnowledge + survivalTechniques) / 100;
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
