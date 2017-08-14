import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import CaseItemView from './CaseItemView.vue';

@Component({
    components: {
        CaseItemView,
    },
})
export default class CaseListView extends Vue {
    caseList: number[] = [1, 2, 3, 4];
}
