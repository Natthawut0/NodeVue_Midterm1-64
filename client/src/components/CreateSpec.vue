<template>
  <div>
    <h1> Create Spec</h1>
      <form v-on:submit.prevent = " createSpec">
        <p>Product: <input type="text" v-model="spec.Product"></p>
        <p>Aspect Ratio: <input type="text" v-model="spec.Aspect_Ratio"></p>
        <p>Display_Resolution_Maximum:<input type="text" v-model="spec.Display_Resolution_Maximum"></p>
        <p>Screen_Size: <input type="text" v-model="spec.Screen_Size"></p>
        <p>Item_Dimensions: <input type="text" v-model="spec.Item_Dimensions"></p>
        <p>Item_Weight: <input type="text" v-model="spec.Item_Weight"></p>
        <p>Refresh_Rate: <input type="text" v-model="Refresh_Rate"></p>
        <p>Size: <input type="text" v-model="spec.Refresh_Rate"></p>
        <div><button type="submit">Create Spec</button></div>
      </form>
    <hr>
      <div>
        <p>Product: {{ spec.Product }} </p>
        <p>Aspect Ratio: {{spec.Aspect_Ratio }}</p>
        <p>Display_Resolution_Maximum: {{spec.Display_Resolution_Maximum}}</p>
        <p>Screen_Size: {{spec.Screen_Size}}</p>
        <p>Item_Dimensions: {{spec.Item_Dimensions}}</p>
        <p>Item_Weight: {{spec.Item_Weight}}</p>
        <p>Refresh_Rate: {{spec.Refresh_Rate}}</p>
        <p>Size: {{spec.Size}}</p>
      </div>
  </div>
</template>
<script>
import SpecsService from '@/services/SpecsService'

export default{
  data () {
    return {
      spec : {
        Product : '',
        Aspect_Ratio : '',
        Display_Resolution_Maximum : '',
        Screen_Size: '',
        Item_Dimensions: '',
        Refresh_Rate: '',
        Size: '',
      }
    }
  },
  methods: {
    async createSpec () {
      try {
        await SpecsService.post(this.spec)
          this.$router.push({
            name : 'specs'
        })
      }catch (error) {
        console.log(error)
      }
    }
  },
}
</script>
<style scoped>

</style>

