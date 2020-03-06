<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Magic Bullet"
  >
    <template slot="content">
      <p>
        <span class="option-title">Shot</span>: minimum Class 2 Rank 0.
        <span class="option-title">30%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.shot.value * 0.3)}})
      </p>
      <p>
        <span class="option-title">Curse Magic</span>: minimum Class 2 Rank 0.
        <span class="option-title">10%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.curseMagic.value * 0.1)}})
      </p>
      <p>
        <span class="option-title">Gun Knowledge</span>: minimum Class 1 Rank 0
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.bless.value * 0.4)}})
      </p>
      <p>
        <span class="option-title">Magic Control</span>: minimum Class 1 Rank 0
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{parseExpertise(expertise.magicControl.value * 0.2)}})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "MagicBullet",
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
        this.expertise.shot.value = 0;
        this.expertise.curseMagic.value = 0;
        this.expertise.gunKnowledge.value = 0;
        this.expertise.magicControl.value = 0;
      } else if (to === "required") {
        this.expertise.shot.value = 2000;
        this.expertise.curseMagic.value = 2000;
        this.expertise.gunKnowledge.value = 1000;
        this.expertise.magicControl.value = 1000;
      } else if (to === "max") {
        this.expertise.shot.value = this.expertise.curseMagic.max;
        this.expertise.curseMagic.value = this.expertise.curseMagic.max;
        this.expertise.gunKnowledge.value = this.expertise.gunKnowledge.max;
        this.expertise.magicControl.value = this.expertise.magicControl.max;
      }
    }
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.shot.value >= 2000 &&
        this.expertise.curseMagic.value >= 2000 &&
        this.expertise.gunKnowledge.value >= 1000 &&
        this.expertise.magicControl.value >= 1000
      )
        return true;
      else return false;
    },
    classRank() {
      let shot = this.expertise.shot.value * 0.3;
      let curseMagic = this.expertise.curseMagic.value * 0.1;
      let gunKnowledge = this.expertise.gunKnowledge.value * 0.4;
      let magicControl = this.expertise.magicControl.value * 0.2;

      var a =
        Number.parseInt(shot + curseMagic + gunKnowledge + magicControl) / 100;
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
