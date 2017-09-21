<template>
  <div class="p_syfrelink">
    <div class="s_center">
      <h4><i class="icon"></i>合作机构</h4>
      <div class="clr p_syfrlist">
        <ul>
          <li v-for="item in list"><img :src="item.src" alt="" width="140px" height="40px"></li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {src: 'https://www.yitianlicai.com/data/attachments/f179afa1-b781-4e06-bf47-c2bc2d659353'},
        {src: 'https://www.yitianlicai.com/data/attachments/d69cecf1-b11f-4dae-babe-bf206c0c89c9'},
        {src: 'https://www.yitianlicai.com/data/attachments/7f78a162-71b0-4c04-bf8d-8a4e8bd521a1'},
        {src: 'https://www.yitianlicai.com/data/attachments/20264300-2fd3-49a4-9e3d-fe0371222c3f'},
        {src: 'https://www.yitianlicai.com/data/attachments/0e7362c2-929a-4752-844a-34f7d128c128'},
        {src: 'https://www.yitianlicai.com/data/attachments/ba690651-0c72-4934-b6cd-8f018e086b66'},
        {src: 'https://www.yitianlicai.com/data/attachments/b771d5a3-65fb-42b5-9b63-b1d46c0c79c7'},
        {src: 'https://www.yitianlicai.com/data/attachments/3c33014d-b37a-4864-91dd-4f5668065911'},
        {src: 'https://www.yitianlicai.com/data/attachments/0e6cc62f-2e85-4c25-812a-26f4c27835e4'},
        {src: 'https://www.yitianlicai.com/data/attachments/82f16b83-87d5-4a1e-9b79-48e5748c5126'},
        {src: 'https://www.yitianlicai.com/data/attachments/2d6a9be7-8c7e-4fda-8f8a-4fa26e971274'},
        {src: 'https://www.yitianlicai.com/data/attachments/1047937e-8e5e-416e-9c0a-328ed9bc58c5'},
      ]
    }
  }
}
</script>
