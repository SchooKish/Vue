<template>
  <div>
    <div :class="[$style.wrapper]" v-if="name === 'PaymentForm'">
      <div :class="[$style.overlay]"></div>
      <div :class="[$style.content]">
        <Form :updatedId="idfromContext" />
      </div>
    </div>
    <div :class="[$style.context]" v-if="name === 'Context'">
      <ContextMenu :idCost="costId" @toModal="catchId" />
    </div>
  </div>
</template>

<script>
import Form from "../Form";
import ContextMenu from "../ContextMenu";

export default {
  data() {
    return {
      costId: this.id,
      editElem: this.elem,
      idfromContext: "",
    };
  },
  components: {
    Form,
    ContextMenu,
  },
  props: {
    name: String,
    id: Number,
    // elem: Object,
  },

  methods: {
    catchId(data) {
      this.idfromContext = data;
    },
  },

  computed: {
    // getCoor() {
    //   let coor = document.getElementById(this.id + 1);
    //   console.log(coor);
    // },
  },

  mounted() {
    // console.log(this.elem);
  },
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
