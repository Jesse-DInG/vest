import { Component, Inject, Model, Prop, Vue, Watch } from 'vue-property-decorator';

@Component
export default class Bar extends Vue {
    @Prop()
    current:number;
    @Prop()
    total:number ;
    get progress () {
        return this.current / this.total;
    }
}
