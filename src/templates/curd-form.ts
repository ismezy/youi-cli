import { ModelDefine } from '../model/model-define'

export function renderCurdForm(model: ModelDefine) {
  let primaryKey = ''
  const controls = model.properties.map(prop => {
    if (prop.isPrimaryKey) {
      primaryKey = prop.name
      return ''
    }
    return `{ caption: '${prop.caption}', property: '${prop.name}', control: Input }`
  }).filter(it => it)
  return `<template lang="pug">
youi-subpage(:show.sync='showPage', v-loading='loading')
  el-form(label-position='right', label-width='120px', ref='form', :model='record')
    youi-form-layout(:controls='controls', :record='record')
  template(#buttons)
    el-button(type='primary', @click='save()', :loading='saving') 保 存
</template>

<script>
import { YouiSubpage, YouiBaseFormPage, YouiFormLayout } from '@/components';
import { Input, Form as ElForm, Button as ElButton } from 'element-ui';
export default {
  components: { YouiSubpage, YouiFormLayout, ElForm, ElButton },
  mixins: [YouiBaseFormPage],
  data() {
    return {
      record: {},
      controls: [
        ${controls.join(',\n        ')}
      ],
    };
  },
  computed: {
    loadUrl() {
      return '${model.getUrl}?${primaryKey}=' + this.record.${primaryKey};
    },
    saveUrl() {
      return '${model.saveUrl}';
    },
  },
  props: {},
  methods: {},
};
</script>
`
}
