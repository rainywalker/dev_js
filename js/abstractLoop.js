const data = [
    { a:[1,2,3,4],
        b:'-'
    },
    [5,6,7,[10],11],
    8,7
]
//  알고리즘 : 상태와 제어문을 이용해서 원하는 값을 얻는 행위
const Comp = class {
    constructor(data) {
        this.data = data;
    }
    *gene() {
        const data = JSON.parse(JSON.stringify(this.data));
        let v;
        while(v=data.shift()) {
            if (v instanceof Object) {
                if (!Array.isArray(v)) v = Object.values(v);
                data.unshift(...v)
            }
            else  yield v
        }
    }
}



const comp = new Comp(data)
// const a = [...comp.gene()]
// console.log(a)




const Operator = class{
    static factory(v){
        if(v instanceof Object){
            if(!Array.isArray(v)) v = Object.values(v);
            return new ArrayOp(v.map(v=>Operator.factory(v)));
        }
        else return new PrimaOp(v);
    }
    constructor(v){
        this.v = v;
    }
    *gene(){
        throw 'override';
    }
}
const PrimaOp = class extends Operator{
    constructor(v){
        super(v);
    }
    *gene(){
        yield this.v;
    }
};

const ArrayOp = class extends Operator{
    constructor(v){
        super(v);
    }
    *gene(){
        for(const v of this.v) yield * v.gene();
    }
};
for(const v of Operator.factory([1,2,3,{a:4, b:5},6,7]).gene()) console.log(v);





