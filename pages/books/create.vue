<template>
  <div>
    <page-header 
        :pageTitle="`Book App`"
        :pageSubtitle="`Add New Book`"
        :left="true"
    />

    <div class="container">
        <div class="row">
            <div class="col">
                <button class="btn btn-sm btn-outline-danger" 
                    @click="$router.push('/')"
                > Back </button>
            </div>
        </div>
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
            <div class="text-right">
                <b-button :disabled="isLoading" type="reset" variant="light">Reset</b-button>
                <b-button :disabled="isLoading" type="submit" variant="danger">Create</b-button>

            </div>
          </b-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState,mapActions } from 'vuex'
import PageHeader from '~/components/PageHeader.vue'
export default {
  components: { PageHeader },
  data() {
    return {
      form: {
        title: '',
        description: '',
        author: '',
      },
      show: true,
    }
  },
  computed: {
      ...mapState({
          isLoading: (state) => state.book.isLoading
      })
  },
  methods: {
    ...mapActions({
      createOneRequest: 'book/createOneRequest',
    }),
    async onSubmit(event) {
      event.preventDefault()
      await this.createOneRequest(this.form)
      this.$router.push('/')
    },
    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.title = ''
      this.form.description = ''
      this.form.author = ''
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