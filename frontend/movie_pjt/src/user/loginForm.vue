<template>
  <div>
    <form>
      <div class="mb-3">
        <label for="username" class="form-label">Username</label>
        <input v-model="userInfo.username" type='text' id="username" class="form-control">We'll never share your email with anyone else.
      </div>
      <div class="mb-3">
        <label for="Password" class="form-label">Password</label>
        <input v-model="userInfo.password" type="password" class="form-control" id="Password">
      </div>
      <button @click.prevent="onClick" type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
}
</script>

<style>

</style>