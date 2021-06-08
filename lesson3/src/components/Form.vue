<template>
  <transition name="modal-fade">
    <div class="modal-backdrop">
      <div class="modal"
        role="dialog"
        aria-labelledby="modalTitle"
        aria-describedby="modalDescription"
      >
        <header
          class="modal-header"
          id="modalTitle"
        >
          <slot name="header">
            Add new cost

            <button
              type="button"
              class="btn-close"
              @click="close"
              aria-label="Close modal"
            >
              x
            </button>
          </slot>
        </header>
        <section
          class="modal-body"
          id="modalDescription"
        >
          <slot name="body">
            <form class="modal-body-form">
              <label for="date">Date</label>
              <input type="date" id="date" v-model="date">
              <label for="select">Category</label>
              <select name="select" id="select" v-model="category">
                <option value="Food">Food</option>
                <option value="Transport">Transport</option>
                <option value="Entertainment">Entertainment</option>
              </select>
              <label for="price">Price</label>
              <input type="number" id="price" v-model.number="price">
            </form>
          </slot>
        </section>
        <footer class="modal-footer">
          <slot name="footer">

            <button
              type="button"
              class="btn-green"
              @click="save"
              aria-label="Close modal"
            >
              Save and close
            </button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
    name: 'modal',

    data() {
      return {
        date: '',
        category: '',
        price: ''
      }
    },

    methods: {
      close() {
        this.$emit('close');
      },
      save() {
        const { date, category, price } = this
        this.$emit('add', { date, category, price })
        this.date = '';
        this.category = '';
        this.price = '';
        this.$emit('close');
      }
    },
}
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
    background: #FFFFFF;
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
    color: #4AAE9B;
    justify-content: space-between;
  }

  .modal-footer {
    border-top: 1px solid #eeeeee;
    justify-content: flex-end;
  }

  .modal-body {
    position: relative;
    padding: 20px 10px;
  }

  .modal-body-form {
    display: flex;
    flex-direction: column;
  }

  .btn-close {
    border: none;
    font-size: 20px;
    padding: 5px;
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }

  .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  }
</style>