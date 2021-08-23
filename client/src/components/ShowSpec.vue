<template>
  <div>
    <h1> Show Spec</h1>
    <p>Product: {{ spec.Product }} </p>
    <p>Aspect Ratio: {{spec.Aspect_Ratio }}</p>
    <p>Display_Resolution_Maximum: {{spec.Display_Resolution_Maximum}}</p>
    <p>Screen_Size: {{spec.Screen_Size}}</p>
    <p>Item_Dimensions: {{spec.Item_Dimensions}}</p>
    <p>Item_Weight: {{spec.Item_Weight}}</p>
    <p>Refresh_Rate: {{spec.Refresh_Rate}}</p>
    <p>Size: {{spec.Size}}</p>
  </div>
</template>
<script>
import SpecsService from '@/services/SpecsService'

export default{
    data () {
      return {
        spec: null,
      }
    },
    async created () {
      try{
      let specId = this.$route.params.specId
      this.spec = (await SpecsService.show(specId)).data
      }
      catch (error) {
        console.log (error)
      }
  }
}
</script>
<style scoped>

</style>
