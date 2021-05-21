<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Synthesis"
  >
    <template slot="content">
      <p>
        <span class="option-title">Occultism</span>: minimum Class 1 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.occultism.value * 0.4)
        }})
      </p>
      <p>
        <span class="option-title">Demonology</span>:
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.demonology.value * 0.4)
        }})
      </p>
      <p>
        <span class="option-title">Weapon Knowledge</span>:
        <span class="option-title">10%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.weaponKnowledge.value * 0.1)
        }})
      </p>
      <p>
        <span class="option-title">Mineralogy</span>:
        <span class="option-title">10%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.mineralogy.value * 0.1)
        }})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "Synthesis",
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
        this.expertise.occultism.value = 0;
        this.expertise.demonology.value = 0;
        this.expertise.weaponKnowledge.value = 0;
        this.expertise.mineralogy.value = 0;
      } else if (to === "required") {
        this.expertise.occultism.value = 1000;
      } else if (to === "max") {
        this.expertise.occultism.value = this.expertise.occultism.max;
        this.expertise.demonology.value = this.expertise.demonology.max;
        this.expertise.weaponKnowledge.value = this.expertise.weaponKnowledge.max;
        this.expertise.mineralogy.value = this.expertise.mineralogy.max;
      }
    },
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (this.expertise.occultism.value >= 1000) return true;
      else return false;
    },
    classRank() {
      let occultism = this.expertise.occultism.value * 0.4;
      let demonology = this.expertise.demonology.value * 0.4;
      let weaponKnowledge = this.expertise.weaponKnowledge.value * 0.1;
      let mineralogy = this.expertise.mineralogy.value * 0.1;

      var a =
        Number.parseInt(occultism + demonology + weaponKnowledge + mineralogy) /
        100;
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
