<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Craftsmanship"
  >
    <template slot="content">
      <p>
        <span class="option-title">Creation</span>: minimum Class 1 Rank 0.
        <span class="option-title">60%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.creation.value * 0.6)}})
      </p>
      <p>
        <span class="option-title">Medical Sciences</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.medicalSciences.value * 0.2)}})
      </p>
            <p>
        <span class="option-title">Sketching</span>:
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.sketching.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "Craftsmanship",
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
        return "Class " +  b.charAt(0) +b.charAt(1) + " Rank " + b.charAt(2);
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    },
    setValues(to) {
      if(to === "zero"){
        this.expertise.creation.value = 0
        this.expertise.medicalSciences.value = 0
        this.expertise.sketching.value = 0
      }else if (to === "required"){
        this.expertise.creation.value = 1000
        this.expertise.medicalSciences.value = 2000
      }else if (to === "max"){
        this.expertise.creation.value = this.expertise.creation.max
        this.expertise.medicalSciences.value = this.expertise.medicalSciences.max
        this.expertise.sketching.value = this.expertise.sketching.max
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.creation.value >= 1000 &&
        this.expertise.medicalSciences.value >= 2000
      )
        return true;
      else return false;
    },
    classRank() {
      let creation = this.expertise.creation.value * 0.6;
      let medicalSciences = this.expertise.medicalSciences.value * 0.2;
      let sketching = this.expertise.sketching.value * 0.2;

      var a = Number.parseInt(creation + medicalSciences + sketching) / 100;
      var b = a.toString();
      if (a === 0) {
        return "Class 0 Rank 0";
      } else if (a >= 100) {
        return "Class " +  b.charAt(0) +b.charAt(1) + " Rank " + b.charAt(2);
      } else if (a >= 10) {
        return "Class " + b.charAt(0) + " Rank " + b.charAt(1);
      } else {
        return "Class 0 Rank " + b.charAt(0);
      }
    }
  }
};
</script>
