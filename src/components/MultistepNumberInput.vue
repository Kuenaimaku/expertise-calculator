<template>
  <div>
    <slot v-if="$slots.title" name="title"/>
    <template v-else>{{ title }}</template>
    <b-field>
      <p class="control" @click="stepLeft(step2)">
        <b-button type="is-primary" :disabled="disabledMin">
          <b-icon icon="chevron-double-left"></b-icon>
        </b-button>
      </p>
      <p class="control" @click="stepLeft(step1)">
        <b-button type="is-info" :disabled="disabledMin">
          <b-icon icon="chevron-left"></b-icon>
        </b-button>
      </p>
      <b-input type="number" expanded :editable="editable" v-model.number="computedValue"></b-input>
      <p class="control" @click="stepRight(step1)">
        <b-button type="is-info" :disabled="disabledMax">
          <b-icon icon="chevron-right"></b-icon>
        </b-button>
      </p>
      <p class="control" @click="stepRight(step2)">
        <b-button type="is-primary" :disabled="disabledMax">
          <b-icon icon="chevron-double-right"></b-icon>
        </b-button>
      </p>
    </b-field>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newValue: !isNaN(this.value) ? this.value : parseFloat(this.min) || 0
    };
  },
  props: {
    title: {
      type: String,
    },
    step1: {
      type: Number,
      required: true
    },
    step2: {
      type: Number,
      required: true
    },
    min: {
      type: Number,
      required: false
    },
    max: {
      type: Number,
      required: false
    },
    value: {
      type: Number,
      required: false
    },
    editable: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    stepLeft(amount) {
      let oldValue = this.computedValue;
      var _value = 0;
      if (oldValue - amount < this.min) {
        _value = this.min;
      } else {
        _value = this.computedValue - amount;
      }
      this.computedValue = _value;
    },
    stepRight(amount) {
      let oldValue = this.computedValue;
      var _value = 0;
      if (oldValue + amount > this.max) {
        _value = this.max;
      } else {
        _value = this.computedValue + amount;
      }
      this.computedValue = _value;
    }
  },
  computed: {
    disabledMin() {
      return this.computedValue <= this.min;
    },
    disabledMax() {
      return this.computedValue >= this.max;
    },
    computedValue: {
      get() {
        return this.newValue;
      },
      set(value) {
        let newValue = value;
        if (value === "") {
          newValue = parseFloat(this.min) || null;
        }
        this.newValue = newValue;
        this.$emit("input", newValue);
      }
    }
  },
  watch: {
    /**
     * When v-model is changed:
     *   1. Set internal value.
     */
    value(value) {
      this.newValue = value;
    }
  }
};
</script>

<style lang="scss">
.option-title {
  font-weight: bold;
  font-size: 1.1em;
}
.option-subtitle {
  font-weight: normal;
  font-size: 1em;
}

input[type="number"] {
  text-align: center;
}
/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>