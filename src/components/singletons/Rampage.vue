<template>
  <chain-expertise
    :expertise="this.expertise"
    :options="this.options"
    :visible="isVisible"
    :classRank="classRank"
    @setValues="setValues"
    name="Rampage"
  >
    <template slot="content">
      <p>
        <span class="option-title">Attack</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.attack.value * 0.2)
        }})
      </p>
      <p>
        <span class="option-title">Spin</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.spin.value * 0.2)
        }})
      </p>
      <p>
        <span class="option-title">Rush</span>: minimum Class 2 Rank 0.
        <span class="option-title">20%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.rush.value * 0.2)
        }})
      </p>
      <p>
        <span class="option-title">Pursuit</span>: minimum Class 3 Rank 0.
        <span class="option-title">40%</span>
        is converted to Chain Expertise ({{
          parseExpertise(expertise.pursuit.value * 0.4)
        }})
      </p>
    </template>
  </chain-expertise>
</template>

<script>
import ChainExpertise from "@/components/ChainExpertise.vue";
export default {
  name: "Rampage",
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
        this.expertise.attack.value = 0;
        this.expertise.spin.value = 0;
        this.expertise.rush.value = 0;
        this.expertise.pursuit.value = 0;
      } else if (to === "required") {
        this.expertise.attack.value = 2000;
        this.expertise.spin.value = 2000;
        this.expertise.rush.value = 2000;
        this.expertise.pursuit.value = 3000;
      } else if (to === "max") {
        this.expertise.attack.value = this.expertise.attack.max;
        this.expertise.spin.value = this.expertise.spin.max;
        this.expertise.rush.value = this.expertise.rush.max;
        this.expertise.pursuit.value = this.expertise.pursuit.max;
      }
    },
  },
  computed: {
    isVisible() {
      if (!this.hideLocked) return true;
      else if (
        this.expertise.attack.value >= 2000 &&
        this.expertise.spin.value >= 2000 &&
        this.expertise.rush.value >= 2000 &&
        this.expertise.pursuit.value >= 3000
      )
        return true;
      else return false;
    },
    classRank() {
      let attack = this.expertise.attack.value * 0.2;
      let spin = this.expertise.spin.value * 0.2;
      let rush = this.expertise.rush.value * 0.2;
      let pursuit = this.expertise.pursuit.value * 0.4;

      let a = Number.parseInt(attack + spin + rush + pursuit) / 100;
      let b = a.toString();
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
