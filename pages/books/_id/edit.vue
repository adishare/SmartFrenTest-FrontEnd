<template>
  <div>
    <div class="container-fluid bg-info">
      <div class="container">Create New Book</div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col">
          <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group
              id="input-group-1"
              label="Book Title:"
              label-for="input-1"
            >
              <b-form-input
                id="input-1"
                v-model="form.title"
                placeholder="Enter book title"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-2"
              label="Description:"
              label-for="input-2"
            >
              <b-form-input
                id="input-2"
                v-model="form.description"
                placeholder="Enter description"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group
              id="input-group-3"
              label="Author:"
              label-for="input-3"
            >
              <b-form-input
                id="input-3"
                v-model="form.author"
                placeholder="Enter Author Name"
                required
              ></b-form-input>
            </b-form-group>

            <b-button :disabled="isLoading" type="submit" variant="primary"
              >update</b-button
            >
            <b-button :disabled="isLoading" type="reset" variant="danger"
              >Reset</b-button
            >
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {
      form: {
        bookId: '',
        title: '',
        description: '',
        author: '',
      },
      show: true,
    }
  },
  async created() {
    if (!this.activeBook.bookId) {
      await this.getBookByIdRequest(this.$route.params.id)
      this.form.bookId = this.activeBook.bookId
      this.form.title = this.activeBook.title
      this.form.description = this.activeBook.description
      this.form.author = this.activeBook.title
    }
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.book.isLoading,
      activeBook: (state) => state.book.active,
    }),
  },
  mounted() {
    this.form.bookId = this.activeBook.bookId
    this.form.title = this.activeBook.title
    this.form.description = this.activeBook.description
    this.form.author = this.activeBook.title
  },
  methods: {
    ...mapActions({
      updateOneByIdRequest: 'book/updateOneByIdRequest',
      getBookByIdRequest: 'book/getOneByIdRequest',
    }),
    async onSubmit(event) {
      event.preventDefault()
      await this.updateOneByIdRequest(this.form)
      this.$router.push('/books/' + this.$route.params.id)
    },
    onReset(event) {
      event.preventDefault()
      this.form.bookId = this.activeBook.bookId
      this.form.title = this.activeBook.title
      this.form.description = this.activeBook.description
      this.form.author = this.activeBook.author
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>

<style lang="scss" scoped>
</style>