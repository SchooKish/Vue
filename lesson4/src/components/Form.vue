<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal" role="dialog" aria-labelledby="modalTitle" aria-describedby="modalDescription">
        <header class="modal-header" id="modalTitle">
          <slot name="header">
            Add new cost

            <button type="button" class="btn-close" @click="close" aria-label="Close modal">
              x
            </button>
          </slot>
        </header>
        <section class="modal-body" id="modalDescription">
          <slot name="body">
            <form class="modal-body-form">
              <label class="modal-body-form-label" for="date">Date</label>
              <input type="date" id="date" v-model="date" />
              <label class="modal-body-form-label" for="select">Category</label>
              <select name="select" id="select" v-model="category">
                <option v-for="(item, id) in getCategoryList" :key="id">{{ item }}</option>
              </select>
              <label class="modal-body-form-label" for="price">Price</label>
              <input type="number" id="price" v-model.number="price" />
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">
            <div class="modal-footer-add">
              <label class="" for="add">Add new category</label>
              <input type="text" id="add" v-model="newCategory" />
              <button type="button" class="btn-add" @click="addNewCategory">Add new category</button>
            </div>
            <button type="button" class="btn-green" @click="save" aria-label="Close modal">
              Save and close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
export default {
  name: "modal",

  data() {
    return {
      date: "",
      category: "",
      price: "",
      newCategory: "",
    };
  },
  methods: {
    ...mapMutations(["updateMainList"]),
    ...mapMutations(["addNewCateg"]),
    close() {
      this.$emit("close");
    },
    save() {
      const { date, category, price } = this;
      this.updateMainList({ date, category, price });
      this.date = "";
      this.category = "";
      this.price = "";
      this.$emit("close");
    },
    addNewCategory() {
      // const { newCategory } = this;
      this.addNewCateg(this.newCategory);
      this.newCategory = "";
    },
  },
  computed: {
    ...mapGetters(["getCategoryList"]),
  },
};
</script>

<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal {
  background: #ffffff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
}

.modal-header,
.modal-footer {
  padding: 15px;
  display: flex;
}

.modal-header {
  border-bottom: 1px solid #eeeeee;
  color: #4aae9b;
  justify-content: space-between;
}

.modal-footer {
  border-top: 1px solid #eeeeee;
  justify-content: flex-end;
  flex-direction: column;
}

.modal-footer-add {
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.modal-body {
  position: relative;
  padding: 20px 10px;
}

.modal-body-form {
  display: flex;
  flex-direction: column;
}

.modal-body-form-label {
  margin-bottom: 5px;
}

.modal-body-form-label:not(:first-child) {
  margin-top: 15px;
}

.btn-close {
  border: none;
  font-size: 20px;
  padding: 5px;
  cursor: pointer;
  font-weight: bold;
  color: #4aae9b;
  background: transparent;
}

.btn-green {
  display: block;
  color: white;
  background: #4aae9b;
  border: 1px solid #4aae9b;
  border-radius: 2px;
}
</style>
