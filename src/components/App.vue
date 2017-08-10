<template>
    <div class="app">
        <SuiteListView>
        </SuiteListView>
        <div>
            <div class="left-view">
            <CaseListView></CaseListView>
            </div>
            <div class="left-view">
            <CaseListView></CaseListView>
            </div>
        </div>
    </div>
</template>
<script>
    import SuiteListView from './SuiteListView'
    import CaseListView from './case/CaseListView'
    export default {
        components:{
            SuiteListView,
            CaseListView
        }
    }
</script>
