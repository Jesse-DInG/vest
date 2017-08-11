<template>
    <div id="app">
        <suite-list-view>
        </suite-list-view>
        <div class="row show-grid">
            <div class="left-view col-md-6">
                <CaseListView></CaseListView>
            </div>
            <div class="left-view col-md-6">
                <CaseListView></CaseListView>
            </div>
        </div>
    </div>
</template>
<script lang="ts" src="./app.ts"></script>
<<style lang="less">
    html{
        width:500px;
    }
</style>
