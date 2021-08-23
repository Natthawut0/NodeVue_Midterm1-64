<template>
 <div>
    <h1> Get All Users </h1>
    <h4>จำนวนผู้ใช้งาน {{ specs.length }}</h4>

   <p> <button v-on:click="navigateTo('/spec/create/')">สร้างผู้ใช้</button></p>

    <div v-for="spec in specs" v-bind:key="spec.id">


    <p>Product: {{ spec.Product }} </p>
    <p>Aspect Ratio: {{spec.Aspect_Ratio }}</p>
    <p>Display_Resolution_Maximum: {{spec.Display_Resolution_Maximum}}</p>
    <p>Screen_Size: {{spec.Screen_Size}}</p>
    <p>Item_Dimensions: {{spec.Item_Dimensions}}</p>
    <p>Item_Weight: {{spec.Item_Weight}}</p>
    <p>Refresh_Rate: {{spec.Refresh_Rate}}</p>
    <p>Size: {{spec.Size}}</p>
        <p><button v-on:click="navigateTo('/spec/'+ spec.id)">ดูข้อมูลผู้ใช้</button>
        <button v-on:click="navigateTo('/spec/edit/'+ spec.id)">แก้ไขข้อมูล</button>
        <button v-on:click="deleteUser(spec)">ลบข้อมูล</button></p>

        <hr>
    </div>
</div>
</template>
<script>

import SpecsService from '@/services/SpecsService'

    export default {
        data () {
            return {
                specs : []
            }
        },
       async created (){
           this.specs = (await SpecsService.index()).data
           console.log(results)
        },
        methods: {
            navigateTo (route){
                this.$router.push(route)

        },
        async deleteUser(spec) {
            let result = confirm("What To Delete?")
               if(result) {
                   try {
                    await SpecsService.delete(spec)
                    this.refreshData()
            } catch (error){
            console.log(error)
          }
        }
         },
         async refreshData() {
             this.specs = (await SpecsService.index()).data
         }
    }
}


</script>
<style scoped>


</style>
