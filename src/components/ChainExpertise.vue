<template>
  <div id="chain-expertise">
    <h3 class="subtitle">Chain Expertise</h3>
    <div v-if="hasRampage">
      <span class="option-title">Rampage</span>
      - {{rampageValue}}
    </div>
  </div>
</template>
<script>
export default {
  name: "ChainExpertise",
  props: {
    expertise: {
      type: Object,
      required: true
    }
  },
  computed: {
    hasRampage() {
      if (
        this.expertise.attack >= 2000 &&
        this.expertise.spin >= 2000 &&
        this.expertise.rush >= 2000 &&
        this.expertise.pursuit >= 3000
      )
        return true;
      else return false;
    },
    rampageValue() {
      let attack = this.expertise.attack * 0.2;
      let spin = this.expertise.spin * 0.2;
      let rush = this.expertise.rush * 0.2;
      let pursuit = this.expertise.pursuit * 0.4;

      var a = Number.parseInt(attack + spin + rush + pursuit) / 100;
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
  data() {
    return {};
  }
};
</script>

<style lang="scss" scoped>
.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
}
</style>
