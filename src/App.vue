<template>
  <div id="app">
    <section class="hero is-info">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">Expertise Calculator</h1>
          <p class="subtitle">For REImagine</p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <h2 class="title is-2">Input</h2>
            <b-tabs type="is-boxed" size="is-medium" expanded v-model="activeTab">
              <b-tab-item label="Expertise">
                <expertise v-for="item in expertise" :key="item.queryParam" :expertise="item" />
              </b-tab-item>
              <b-tab-item label="Options">
                <options :options="this.options" />
              </b-tab-item>
            </b-tabs>
          </div>
          <div class="column is-three-fifths">
            <div class="is-sticky">
              <h2 class="title is-2">Summary</h2>
              <div class="box">
                <h4 class="title is-4">Expertise Limit</h4>
                <b-progress
                  :type="progressType"
                  size="is-large"
                  :value="currentExpertise"
                  :max="expertiseFloor + bonusExpertise"
                  show-value
                >{{currentExpertise}}/{{(expertiseFloor + bonusExpertise)}}</b-progress>
                <section class="section box">
                  <expertise-list :expertise="Object.values(this.expertise)" />
                </section>
                <section class="section box">
                  <chain-expertise-list :expertise="this.expertise" :options="this.options" />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <b-button
      type="is-primary"
      size="is-large"
      icon-left="link"
      @click="showGenerateLinkModal"
      class="fixed"
    >Generate Link</b-button>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Expertise Calculator</strong> by
          <a href="https://github.com/kuenaimaku">Kuenaimaku</a>. The <a href="https://github.com/Kuenaimaku/expertise-calculator">source code</a> is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
//Services
import QueryParamTranslator from "@/services/queryParamTranslator";

//Components
import Options from "@/components/Options.vue";
import Expertise from "@/components/Expertise.vue";
import ExpertiseList from "@/components/layout/ExpertiseList.vue";
import ChainExpertiseList from "@/components/layout/ChainExpertiseList.vue";
import GenerateLinkModal from "@/components/GenerateLinkModal.vue";
export default {
  name: "App",
  components: {
    Expertise,
    ExpertiseList,
    Options,
    ChainExpertiseList
  },
  data() {
    return {
      activeTab: 0,
      expertiseFloor: 17000,
      options: {},
      expertise: []
    };
  },
  created() {
    let uri = window.location.search.substring(0);
    let params = new URLSearchParams(uri);
    let hydratedValues = QueryParamTranslator.fromQueryParams(params);
    this.expertise = hydratedValues.expertise;
    this.options = hydratedValues.options;
  },
  methods: {
    showGenerateLinkModal() {
      this.$buefy.modal.open({
        parent: this,
        component: GenerateLinkModal,
        width: 680,
        hasModalCard: true,
        props: {
          options: this.options,
          expertise: this.expertise
        }
      });
    }
  },
  computed: {
    currentExpertise() {
      const values = Object.values(this.expertise);
      let e = 0;
      values.forEach(function(v) {
        e += v.value;
      });
      return e;
    },
    progressType() {
      if (this.currentExpertise <= this.expertiseFloor + this.bonusExpertise)
        return "is-warning";
      else return "is-danger";
    },
    bonusExpertise() {
      const values = Object.values(this.options);
      let e = 0;
      values.forEach(function(v) {
        e += v.value;
      });
      e -= this.options.level.value;
      if (this.options.level.value !== 1) {
        e += Math.floor(this.options.level.value / 10) * 1000;
      }
      if (this.options.level.value === 99) {
        e += 1000;
      }
      return e;
    }
  }
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/_all";

// Set your colors
$primary: #8c67ef;
$primary-invert: findColorInvert($primary);
$twitter: #4099FF;
$twitter-invert: findColorInvert($twitter);

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
    "white": ($white, $black),
    "black": ($black, $white),
    "light": ($light, $light-invert),
    "dark": ($dark, $dark-invert),
    "primary": ($primary, $primary-invert),
    "info": ($info, $info-invert),
    "success": ($success, $success-invert),
    "warning": ($warning, $warning-invert),
    "danger": ($danger, $danger-invert),
    "twitter": ($twitter, $twitter-invert)
);

// Links
$link: $primary;
$link-invert: $primary-invert;
$link-focus-border: $primary;

//footer
$footer-color: true;
$footer-background-color: $dark-invert;

// Import Bulma and Buefy styles
@import "~bulma";
@import "~buefy/src/scss/buefy";

.progress-value {
  color: #222 !important;
}

section.tab-content {
  border: 1px solid #dbdbdb;
  border-top: 0px;
  border-radius: 6px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

.fixed {
  position: fixed !important;
  right: 5vw;
  bottom: 5vh;
}

.is-sticky {
  position: sticky;
  top: 2vh;
}
</style>
