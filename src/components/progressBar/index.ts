
import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';
import Bar from './Bar.vue';

@Component({
    components: {
        Bar,
    },
})
export default class Progress extends Vue {
    current = 50;
    total = 100;
}
