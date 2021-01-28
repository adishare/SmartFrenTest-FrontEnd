<template>
  <div>
    <div class="d-none d-md-block" >
      <b-container fluid class="p-0">
        <b-jumbotron
          bg-variant="info"
          text-variant="white"
          class="border-radius-0 bg-red text-center"
          style="border-radius: 0; margin-horizontal: 0;"
        >
          <template #header>{{pageTitle}}</template>
          <template #lead> {{pageSubtitle}} </template>
        </b-jumbotron>
      </b-container>
    </div>
  </div>
</template>

<script>
export default {
    props: ['pageTitle', 'pageSubtitle']
        
    
}
</script>

<style lang="scss" scoped>
</style>