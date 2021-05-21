<template>
  <div id="chain-expertise">
    <b-collapse class="card" v-if="visible" :open="false">
      <div slot="trigger" slot-scope="props" class="card-header" role="button">
        <p class="card-header-title">
          <span class="option-title">{{ name }}</span>
          - {{ classRank }}
        </p>
        <a class="card-header-icon">
          Details
          <b-icon :icon="props.open ? 'menu-down' : 'menu-up'"></b-icon>
        </a>
      </div>
      <div class="card-content">
        <div class="content">
          <slot v-if="$slots.content" name="content" />
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item" @click.prevent="setValues('zero')"
          >Set to Zero</a
        >
        <a
          href="#"
          class="card-footer-item"
          @click.prevent="setValues('required')"
          >Set to Required</a
        >
        <a href="#" class="card-footer-item" @click.prevent="setValues('max')"
          >Set to Max</a
        >
      </footer>
    </b-collapse>
  </div>
</template>
<script>
export default {
  name: "ChainExpertise",
  props: {
    expertise: {
      type: Object,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    visible: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
    },
    classRank: {
      type: String,
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
      this.$emit("setValues", to);
    },
  },
  computed: {},
  data() {
    return {
      hideLocked: false,
    };
  },
};
</script>

<style lang="scss">
.is-label {
  margin-right: 1rem;
}

.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
}

.collapse.card {
  margin: 1em auto;
}
</style>
