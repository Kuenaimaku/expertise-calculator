<template>
  <multistep-number-input
    v-model="expertise.value"
    :step1="100"
    :step2="1000"
    :min="0"
    :max="expertise.max"
    :editable="false"
  >
    <template slot="title">
      <span class="has-text-primary option-title">{{ expertise.name }}</span>
      <b-tooltip
        v-if="expertise.tooltipMultiline && expertise.tooltip !== null"
        multilined
        class="force-newline"
        type="is-dark"
        :label="expertise.tooltip"
      >
        <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
      </b-tooltip>
      <b-tooltip
        v-else-if="!expertise.tooltipMultiline && expertise.tooltip !== null"
        class="force-newline"
        type="is-dark"
        :label="expertise.tooltip"
      >
        <b-icon size="is-small" type="is-dark" icon="help-circle-outline" />
      </b-tooltip>
      <span>{{ classRank(expertise.value) }}</span>
    </template>
  </multistep-number-input>
</template>

<script>
import MultistepNumberInput from "@/components/MultistepNumberInput.vue";
export default {
  name: "Expertise",
  data() {
    return {};
  },
  props: {
    expertise: {
      type: Object,
      required: true,
    },
  },
  components: {
    MultistepNumberInput,
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
.force-newline.b-tooltip.is-multiline:after {
  white-space: pre;
}
</style>