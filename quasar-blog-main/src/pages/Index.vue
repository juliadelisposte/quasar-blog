<template>
  <q-page class="flex flex-center">
    <card/>
      <!-- <template v-slot:card>
        <div class="page-post">
            <div class="shadow-12">
              <div class="page-post__card">
                <div class="page-post__header--size-lg">
                  <div class="page-post__title">
                      <div class="text-primary">
                        <div class='text-h6'>some title</div>
                      </div>
                    <test author="desconhecido" date="15/04/2021" category="apartamento"/>
                  </div>
                   <div class="page-post__image">
                    <image-test photo="https://besthqwallpapers.com/Uploads/27-12-2017/35250/thumb2-4k-living-room-white-and-gray-interior-modern-apartment-sofa.jpg"/>
                  </div>
                    <span class="page-post__description"> Breve descrição sobre o assunto do post </span>
                    <description button="Leia Mais" button_two="Excluir Post" button_three="Editar Post" />
                </div>
              </div>
            </div>
        </div>
        <div class="q-ml-md">
        <div class="page-post">
          <div class ="row">
            <div class="shadow-12">
              <div class="page-post__card">
                <div class="page-post__header--size-lg">
                  <div class="page-post__title">
                      <div class="text-primary">
                        <div class="title">
                        <div class='text-h6'>test</div>
                        </div>
                      </div>
                    <test author="desconhecido" date="16/04/2021" category="Casa"/>
                  </div>
                   <div class="page-post__image">
                    <image-test photo="https://wallpaperaccess.com/full/5089528.jpg"/>
                  </div>
                    <span class="page-post__description"> Breve descrição sobre o assunto do post </span>
                    <description button="Leia Mais" button_two="Excluir Post" button_three="Editar Post" />
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </template> -->
  </q-page>
</template>

<script>
import Card from 'components/Card'
// import Test from 'components/Test'
// import Description from 'components/Description'
// import ImageTest from 'components/ImageTest'

export default {
  components: {
    Card
    // Test,
    // Description,
    // ImageTest
  },

  name: 'PageIndex'
}
</script>

<style>
   .text-h6{
    margin-left: 80px;
  }
  .title{
    margin-left: 30px;
  }
</style>
