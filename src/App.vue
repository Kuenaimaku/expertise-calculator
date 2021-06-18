<template>
  <div id="app">
    <section class="hero is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column is-2 has-text-centered">
              <figure class="image is-128x128 is-inline-block">
                <img alt="ReIMAGINE logo" src="@/assets/logo.png" />
              </figure>
            </div>
            <div class="column is-10">
              <!-- Left side -->
              <h1 class="title">Expertise Calculator</h1>
              <p class="subtitle">For ReIMAGINE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column is-two-fifths">
            <h2 class="title is-2">Input</h2>
            <b-tabs
              type="is-boxed"
              size="is-medium"
              expanded
              v-model="activeTab"
            >
              <b-tab-item label="Expertise">
                <expertise
                  v-for="item in expertise"
                  :key="item.queryParam"
                  :expertise="item"
                />
              </b-tab-item>
              <b-tab-item label="Options">
                <options :options="this.options" />
              </b-tab-item>
            </b-tabs>
          </div>
          <div class="column is-three-fifths">
            <div :class="isStickySummary">
              <b-field grouped>
                <template slot="label">
                  <h2 class="title is-2 is-label">Summary</h2>
                </template>
                <b-switch size="is-small" v-model="stickySummary"
                  >Sticky</b-switch
                >
              </b-field>
              <div class="box">
                <h4 class="title is-4">Expertise Limit</h4>
                <b-progress
                  :type="progressType"
                  size="is-large"
                  :value="currentExpertise"
                  :max="expertiseFloor + bonusExpertise"
                  show-value
                  >{{ currentExpertise }}/{{
                    expertiseFloor + bonusExpertise
                  }}</b-progress
                >
                <section class="section box">
                  <expertise-list :expertise="Object.values(this.expertise)" />
                </section>
                <section class="section box">
                  <chain-expertise-list
                    :expertise="this.expertise"
                    :options="this.options"
                  />
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="fixed">
      <b-field grouped>
        <p class="control">
          <b-button
            type="is-primary"
            size="is-large"
            icon-left="link"
            @click="showGenerateLinkModal"
            >Generate Link</b-button
          >
        </p>
        <p class="control">
          <b-button
            type="is-primary"
            size="is-large"
            icon-left="refresh"
            @click="resetValues"
            >Reset</b-button
          >
        </p>
      </b-field>
    </section>
    <footer class="footer">
      <div class="content has-text-centered">
        <p>
          <strong>Expertise Calculator</strong> by
          <a href="https://github.com/kuenaimaku">Kuenaimaku</a>. The
          <a href="https://github.com/Kuenaimaku/expertise-calculator"
            >source code</a
          >
          is licensed
          <a href="http://opensource.org/licenses/mit-license.php">MIT</a>.
        </p>
      </div>
    </footer>
  </div>
</template>

<script>
//Services
import dataService from "@/services/dataService";

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
    ChainExpertiseList,
  },
  data() {
    return {
      activeTab: 0,
      stickySummary: true,
      expertiseFloor: 17000,
      options: {},
      expertise: {},
    };
  },
  created() {
    let uri = window.location.search.substring(0);
    let params = new URLSearchParams(uri);
    let hydratedValues = dataService.fromQueryParams(params);
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
          expertise: this.expertise,
        },
      });
    },
    resetValues() {
      let hydratedValues = dataService.reset();
      this.expertise = hydratedValues.expertise;
      this.options = hydratedValues.options;
    },
  },
  computed: {
    currentExpertise() {
      const values = Object.values(this.expertise);
      let e = 0;
      values.forEach(function (v) {
        e += v.value;
      });
      return e;
    },
    isStickySummary() {
      if (this.stickySummary) return "is-sticky";
      return "";
    },
    progressType() {
      if (this.currentExpertise <= this.expertiseFloor + this.bonusExpertise)
        return "is-warning";
      else return "is-danger";
    },
    bonusExpertise() {
      const values = Object.values(this.options);
      let e = 0;
      values.forEach(function (v) {
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
    },
  },
};
</script>

<style lang="scss">
// Import Bulma's core
@import "~bulma/sass/utilities/initial-variables";
$lavender: hsl(275, 20%, 50%);
$lavender-dark: hsl(275, 20%, 40%);
$primary: $lavender;
$scheme-main: hsl(275, 5%, 15%);
$scheme-main-bis:hsl(275, 5%, 12%);
$scheme-main-ter:hsl(275, 5%, 15%);;
$body-background-color: hsl(275, 5%, 10%);
$scheme-invert: hsl(275, 5%, 00%);
$text: hsl(0, 0%, 80%);
$text-strong: hsl(0, 0%, 90%);
$background: hsl(275, 5%, 10%);
$body-color: hsl(0, 0%, 80%);
@import "~bulma/sass/utilities/_all";
@import "~bulma/sass/base/_all";
@import "~bulma/sass/elements/_all";
@import "~bulma/sass/components/_all";
@import "~bulma/sass/grid/_all";
@import "~bulma/sass/layout/_all";

// Setup $colors to use as bulma classes (e.g. 'is-twitter')
$colors: (
  "white": (
    $white,
    $black,
  ),
  "black": (
    $black,
    $white,
  ),
  "light": (
    $light,
    $light-invert,
  ),
  "dark": (
    $dark,
    $dark-invert,
  ),
  "primary": (
    $primary,
    $primary-invert,
  ),
  "info": (
    $info,
    $info-invert,
  ),
  "success": (
    $success,
    $success-invert,
  ),
  "warning": (
    $warning,
    $warning-invert,
  ),
  "danger": (
    $danger,
    $danger-invert,
  )
);

// Links
$link: $primary;
$link-invert: $lavender-dark;
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

.tabs ul{
  border-bottom-color: #333;
}
.tabs.is-boxed li.is-active a{
  border-color: #333;
}
.select select, .textarea, .input, .taginput .taginput-container.is-focusable, .select select:hover, .textarea:hover, .input:hover, .taginput:hover .taginput-container.is-focusable:hover{
  border-color:#222;
}

section.tab-content {
  border: 1px solid #333;
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

.is-label {
  margin-right: 1rem;
}

.footer {
    background-color: #1f1d20;
    padding: 3rem 1.5rem 6rem;
}
</style>
