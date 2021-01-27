<template>
  <div class="mb-3">
    <b-card
      title="Title"
      header-tag="header"
      footer-tag="footer"
      class="cursor-pointer"
      v-on:click="goToBookDetail(book.title)"
    >
      <b-card-text>Header and footers using slots.</b-card-text>
      <template #footer>
        <em>Footer Slot</em>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    book: Object,
  },
  methods: {
    goToBookDetail: function (bookId) {
      this.$router.push(`/books/${bookId}`)
    },
  },
}
</script>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>