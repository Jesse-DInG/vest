import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import CaseItemView from './CaseItemView.vue';

@Component({
    components: {
        CaseItemView,
    },
})
class CaseListView extends Vue {
    caseList: number[] = [1, 2, 3, 4];
}
export default CaseListView;
