import { ModelDefine } from '../model/model-define'

export function renderCurdIndex(model: ModelDefine) {
  const columns = model.properties.filter(prop => !prop.isPrimaryKey).map(prop => {
    return `{ caption: '${prop.caption}', prop: '${prop.name}' }`
  })
  return `<template lang="pug">
youi-curd-page(url='${model.pageQueryUrl}', :form='formPage', :columns='columns', :filter='filter', :operator='operator')
  template #filter
    el-form(:model='filter')
</template>
<script>
import { YouiCurdPage } from '@/components';
import { Form as ElForm } from 'element-ui';
import FormPage from './${model.name}PageForm';

export default {
  components: {
    YouiCurdPage,
    ElForm,
  },
  data() {
    return {
      columns: [
        ${columns.join(',\n        ')}
      ],
      filter: {},
      operator: {},
      formPage: FormPage,
    };
  },
};
</script>
`
}
