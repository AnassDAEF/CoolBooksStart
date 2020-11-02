<template>
  <div id="app">

    <div class="page-wrapper">
        <!-- HEADER DESKTOP-->
        <header class="header-desktop3 d-none d-lg-block">
            <div class="section__content section__content--p35">
                <div class="header3-wrap">
                    <div class="header__logo">
                        <a href="#">
                            <img src="@/assets/images/icon/logo-white.png" alt="CoolAdmin" />
                        </a>
                    </div>
                    <div class="header__navbar">
                        <ul class="list-unstyled">

                            <li>
                                <a href="/books">
                                    <i class="fas fa-book"></i>
                                    <span class="bot-line"></span>Livres</a>
                            </li>
                            <li>
                                <a href="/genres">
                                    <i class="fas fa-copy"></i>
                                    <span class="bot-line"></span>Genre</a>
                            </li>
                            <li>
                                <router-link to="/admin">
                                    <i class="fas fa-cogs"></i>
                                    <span class="bot-line"></span>Admin</router-link>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </header>
        <!-- END HEADER DESKTOP-->

        <!-- PAGE CONTENT-->
        <div class="page-content--bgf7">

            <!-- WELCOME-->
            <section class="welcome p-t-10">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                        </div>
                    </div>
                </div>
            </section>
            <!-- END WELCOME-->


            <!-- Content -->
            <section class="container">



            <router-view></router-view>


            </section>
            <!-- END STATISTIC CHART-->


        </div>

    </div>




  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>

</style>
