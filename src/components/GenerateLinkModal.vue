<template>
  <div class="modal-card" style="min-width:680px">
    <header class="modal-card-head">
      <p class="modal-card-title">Share your Build</p>
    </header>
    <section class="modal-card-body">
      <b-field label="Copy the link below">
        <b-input type="textarea" v-model="link" readonly></b-input>
      </b-field>
    </section>
    <footer class="modal-card-foot">
      <b-button class="button" expanded type="is-primary" @click="$parent.close()">Close</b-button>
    </footer>
  </div>
</template>

<script>
import QueryParamTranslator from "@/services/queryParamTranslator.js";
export default {
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
  data() {
    return {
      password: ""
    };
  },
  computed: {
    link() {
      let params = QueryParamTranslator.toQueryParams(
        this.expertise,
        this.options
      );
      if (params !== "") {
        return "https://expertise.kuenaimaku.com?" + params.toString();
      } else {
        return "https://expertise.kuenaimaku.com";
      }
    }
  }
};
</script>

<style scoped>
textarea {
  resize: none;
}
</style>