
import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import SuiteListView from './SuiteListView.vue';
import CaseListView from './case/CaseListView.vue';

@Component({
    components: {
        SuiteListView,
        CaseListView,
    },
})
class App extends Vue {
    // components = {
    //     SuiteListView,
    //     CaseListView,
    // };
}
export default App;
const a = new App();
debugger;
console.log(a);
