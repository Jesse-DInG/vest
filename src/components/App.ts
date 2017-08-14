
import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import SuiteListView from './SuiteListView.vue';
import CaseListView from './case/CaseListView.vue';
import ProgressBar from './progressBar/index.vue';

@Component({
    components: {
        SuiteListView,
        CaseListView,
        ProgressBar,
    },
})
export default class App extends Vue {
    // components = {
    //     SuiteListView,
    //     CaseListView,
    // };
}
