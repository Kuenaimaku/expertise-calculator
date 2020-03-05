<template>
  <div id="chain-expertise-list">
    <b-field grouped>
      <template slot="label">
        <h4 class="title is-4 is-label">Chain Expertise</h4>
      </template>
      <b-switch size="is-small" v-model="hideLocked">Hide Locked Chain Expertise</b-switch>
    </b-field>
    <arms-maker :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <conditions-magic :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <conditions-melee :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <conditions-ranged :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <craftsmanship :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <curse-of-the-wretched :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <enhancement :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <magic-bullet :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <magic-fist :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <three-forms :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <miitama :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <rampage :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <retaliation :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <sharpshooter :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <support-bullet :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <swordsmith :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
    <synthesis :expertise="this.expertise" :options="this.options" :hideLocked="this.hideLocked" />
  </div>
</template>
<script>
import Rampage from "@/components/singletons/Rampage"
import MagicFist from "@/components/singletons/MagicFist"
import Miitama from "@/components/singletons/Miitama"
import CurseOfTheWretched from "@/components/singletons/CurseOfTheWretched"
import ThreeForms from "@/components/singletons/ThreeForms"
import Synthesis from "@/components/singletons/Synthesis"
import Enhancement from "@/components/singletons/Enhancement"
import SupportBullet from "@/components/singletons/SupportBullet"
import MagicBullet from "@/components/singletons/MagicBullet"
import Sharpshooter from "@/components/singletons/Sharpshooter"
import Retaliation from "@/components/singletons/Retaliation"
import ConditionsMelee from "@/components/singletons/ConditionsMelee"
import ConditionsMagic from "@/components/singletons/ConditionsMagic"
import ConditionsRanged from "@/components/singletons/ConditionsRanged"
import Swordsmith from "@/components/singletons/Swordsmith"
import ArmsMaker from "@/components/singletons/ArmsMaker"
import Craftsmanship from "@/components/singletons/Craftsmanship"

export default {
  name: "ChainExpertiseList",
  components: {
    Rampage,
    MagicFist,
    Miitama,
    CurseOfTheWretched,
    ThreeForms,
    Synthesis,
    Enhancement,
    SupportBullet,
    MagicBullet,
    Sharpshooter,
    Retaliation,
    ConditionsMelee,
    ConditionsMagic,
    ConditionsRanged,
    Swordsmith,
    ArmsMaker,
    Craftsmanship
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
