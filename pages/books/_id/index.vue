<template>
  <div>
    <div class="container-fluid bg-info">
      <div class="container">Book Detail</div>
    </div>

    <div class="container my-5">
      <div class="row">
        <div class="col">
          <div v-if="activeBook" class="mb-3">
            <div class="card cursor-pointer">
              <!-- <img class="card-img-top" src="..." alt="Card image cap" /> -->
              <div class="card-body">
                <h5 class="card-title">
                  {{ activeBook.title }}
                </h5>
                <p class="card-text">
                  {{ activeBook.description }}
                </p>
              </div>
              <div class="card-body text-right">
                <em>{{ activeBook.author }}</em>
              </div>
              <div class="card-footer text-right">
                  <button :disabled="isLoading" class="btn btn-danger" @click="deleteBook">Delete</button>
                  <button :disabled="isLoading" class="btn btn-info" @click="$router.push(`/books/${activeBook.bookId}/edit`)">Edit</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data() {
    return {}
  },
  created() {
    this.getOneByIdRequest(this.$route.params.id)
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.book.isLoading,
      activeBook: (state) => state.book.active,
    }),
  },
  methods: {
    ...mapActions({
      getOneByIdRequest: 'book/getOneByIdRequest',
      deleteBookByIdRequest: 'book/deleteOneByIdRequest'
    }),
    deleteBook : function() {
        this.deleteBookByIdRequest(this.activeBook.bookId)
        this.$router.push('/')
    }
  },
}
</script>

<style lang="scss" scoped>
</style>