<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Support Bullet"
  >
    <template slot="content">
      <p>
        <span class="option-title">Rapid</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.rapid.value * 0.3)
        }})
      </p>
      <p>
        <span class="option-title">Support Magic</span>: minimum Class 2 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.supportMagic.value * 0.4)
        }})
      </p>
      <p>
        <span class="option-title">Bless</span>: minimum Class 2 Rank 0
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.bless.value * 0.4)
        }})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "SupportBullet",
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
        this.expertise.rapid.value = 0;
        this.expertise.supportMagic.value = 0;
        this.expertise.bless.value = 0;
      } else if (to === "required") {
        this.expertise.rapid.value = 2000;
        this.expertise.supportMagic.value = 2000;
        this.expertise.bless.value = 2000;
      } else if (to === "max") {
        this.expertise.rapid.value = this.expertise.rapid.max;
        this.expertise.supportMagic.value = this.expertise.supportMagic.max;
        this.expertise.bless.value = this.expertise.bless.max;
      }
    },
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.rapid.value >= 2000 &&
        this.expertise.supportMagic.value >= 2000 &&
        this.expertise.bless.value >= 2000
      )
        return true;
      else return false;
    },
    classRank() {
      let rapid = this.expertise.rapid.value * 0.2;
      let supportMagic = this.expertise.supportMagic.value * 0.4;
      let bless = this.expertise.bless.value * 0.4;

      var a = Number.parseInt(rapid + supportMagic + bless) / 100;
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
