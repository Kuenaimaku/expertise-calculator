<template>
  <div>
    <h4 class="title is-4">Selected Expertise</h4>
    <div
      v-for="item in expertise.filter(function (e) {
        return e.value > 0;
      })"
      :key="item.queryParam"
    >
      <span class="has-text-primary option-title">{{ item.name }}</span>
      {{ classRank(item.value) }}
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpertiseList",
  props: {
    expertise: {
      type: Array,
      required: true,
    },
  },
  methods: {
    classRank(amount) {
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
  },
};
</script>

<style lang="scss" scoped>
</style>