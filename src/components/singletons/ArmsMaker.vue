<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Arms Maker"
  >
    <template slot="content">
      <p>
        <span class="option-title">Crafts</span>: minimum Class 1 Rank 0.
        <span class="option-title">80%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.crafts.value * 0.8)}})
      </p>
      <p>
        <span class="option-title">Gun Knowledge</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.gunKnowledge.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "ArmsMaker",
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
        this.expertise.crafts.value = 0
        this.expertise.gunKnowledge.value = 0
      }else if (to === "required"){
        this.expertise.crafts.value = 1000
        this.expertise.gunKnowledge.value = 1000
      }else if (to === "max"){
        this.expertise.crafts.value = this.expertise.crafts.max
        this.expertise.gunKnowledge.value = this.expertise.gunKnowledge.max
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.crafts.value >= 1000 &&
        this.expertise.gunKnowledge.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let crafts = this.expertise.crafts.value * 0.8;
      let gunKnowledge = this.expertise.gunKnowledge.value * 0.2;

      var a = Number.parseInt(crafts + gunKnowledge) / 100;
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
