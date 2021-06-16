<template>
  <div>
    <div :class="[$style.wrapper]" v-if="name === 'PaymentForm'">
      <div :class="[$style.overlay]"></div>
      <div :class="[$style.content]">
        <Form :id="settings" />
      </div>
    </div>
  </div>
</template>

<script>
import Form from "../Form";

export default {
  data() {
    return {};
  },
  components: {
    Form,
  },
  props: {
    name: String,
    settings: Object,
  },

  methods: {},
};
</script>

<style module lang="scss">
.wrapper {
  position: absolute;
  width: 100%;
  height: 100vh;

  .overlay {
    z-index: 0;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(50, 50, 50, 0.5);
  }

  .content {
    position: relative;
    z-index: 100;
  }

  .context {
    position: absolute;
  }
}
</style>
