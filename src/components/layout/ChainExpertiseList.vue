<template>
  <div id="chain-expertise-list">
    <b-field grouped>
      <template slot="label">
        <h4 class="title is-4 is-label">Chain Expertise</h4>
      </template>
      <b-switch size="is-small" v-model="hideLocked">Hide Locked Chain Expertise</b-switch>
    </b-field>
    <curse-of-the-wretched :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <magic-fist :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <three-forms :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <miitama :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <rampage :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
  </div>
</template>
<script>
import Rampage from "@/components/singletons/Rampage"
import MagicFist from "@/components/singletons/MagicFist"
import Miitama from "@/components/singletons/Miitama"
import CurseOfTheWretched from "@/components/singletons/CurseOfTheWretched"
import ThreeForms from "@/components/singletons/ThreeForms"

export default {
  name: "ChainExpertiseList",
  components: {
    Rampage,
    MagicFist,
    Miitama,
    CurseOfTheWretched,
    ThreeForms
  },
  props: {
    expertise: {
      type: Object,
      required: true
    },
    options: {
      type: Object,
      required: true
    }
  },
  methods: {
    parseExpertise(amount) {
      var a = Number.parseInt(amount) / 100;
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
  computed: {
  },
  data() {
    return {
      hideLocked: false
    };
  }
};
</script>

<style lang="scss" scoped>
.is-label {
  margin-right: 1rem;
}

.option-title {
  font-weight: bold;
  font-size: 1.1em;
  color: #7957d5;
}
</style>
