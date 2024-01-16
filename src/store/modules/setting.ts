import { defineStore } from 'pinia'

const useLayOutSettingStore = defineStore('SettingStore', {
  state: () => {
    return {
      fold: false, //用于控制菜单是折叠还是收起
      refresh: false, //界面刷新
    }
  },
})

export default useLayOutSettingStore
