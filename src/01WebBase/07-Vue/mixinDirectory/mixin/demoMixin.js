export default {
    data() {
        return {
            hero: "i'm 吕布",
            weapon: {
                name: '方天画戟',
                type: '长矛'
            }
        }
    },
    created() {
        console.log('大丈夫生居天地间，岂能郁郁久居人下！')
    }
}