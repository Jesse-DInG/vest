<template>
    <div class="case-list-view">
        <div class="filter-view">
            <input />
        </div>
        <ul>
            <CaseItemView v-for="item in caseList"></CaseItemView>
        </ul>
    </div>
</template>
<script>
    import CaseItemView from './CaseItemView'
    export default {
        data(){
            caseList:[1,1,1,1]
        },
        components:{
            CaseItemView
        }
    }
</script>
