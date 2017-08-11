<template>
    <div class="case-list-view">
        <div class="filter-view">
            <input />
        </div>
        <ul>
            <CaseItemView v-for="item in caseList" :key="item"></CaseItemView>
        </ul>
    </div>
</template>
<script lang="ts" src="./CaseListView.ts">
</script>
