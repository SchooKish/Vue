<template>
  <div>
      <table>
          <thead>
              <tr>
                  <td>
                      #
                  </td>
                  <td>
                      Date
                  </td>
                  <td>
                      Category
                  </td>
                  <td>
                      Value
                  </td>
              </tr>
          </thead>
          <tbody>
              <tr v-for="(item, id) in items" :key="id">
                  <td>{{id + 1}}</td>
                  <td>{{item.date}}</td>
                  <td>{{item.category}}</td>
                  <td>{{item.price}}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
export default {
 props: ['items']
}
</script>

<style>

td {
    width: 100px;
}

</style>