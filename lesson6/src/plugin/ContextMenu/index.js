export default {
  install(Vue) {
    if (this.installed) {
      return;
    }

    this.installed = true;

    Vue.prototype.$context = {
      EventBus: new Vue(),

      show(name, id) {
        this.EventBus.$emit("show", { name, id });
      },

      close() {
        this.EventBus.$emit("close");
      },
    };
  },
};
