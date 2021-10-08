<template>
  <header class="mb-auto">
    <div>
      <h3 class="float-md-start mb-0">Cover</h3>
      <nav class="nav nav-masthead justify-content-center float-md-end">
        <router-link class="nav-link active" aria-current="page" to="/">
          Home
        </router-link>

        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Contact</a>
      </nav>
    </div>
  </header>
</template>
<style lang="scss" scoped>
/*
 * Header
 */

.nav-masthead .nav-link {
  padding: 0.25rem 0;
  font-weight: 700;
  color: #000;
  background-color: transparent;
  border-bottom: 0.25rem solid transparent;
}

.nav-masthead .nav-link:hover,
.nav-masthead .nav-link:focus {
  border-bottom-color: #000;
}

.nav-masthead .nav-link + .nav-link {
  margin-left: 1rem;
}

.nav-masthead .active {
  color: #000;
  border-bottom-color: #000;
}
</style>
