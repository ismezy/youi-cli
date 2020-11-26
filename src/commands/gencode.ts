import Command from '@oclif/command'
import * as YMAL from 'yaml'
import * as fs from 'fs'
import { ModelDefine } from '../model/model-define'
import { renderCurdIndex } from '../templates/curd-index'
import { renderCurdForm } from '../templates/curd-form'

export default class Gencode extends Command {
  static description = '生成前端代码'

  static args = [
    { name: 'modelPath', required: true, description: 'model文件路径' },
  ]

  static usage = '$ youi-cli gencode <model.yml>'

  static examples = [
    '$ youi-cli gencode model.yml',
  ]

  async run() {
    const { args } = this.parse(Gencode)
    const buffer = fs.readFileSync(args.modelPath, 'utf8')
    const modelDefine: ModelDefine = YMAL.parse(buffer)
    const indexPage = renderCurdIndex(modelDefine)
    const formPage = renderCurdForm(modelDefine)
    fs.mkdirSync(modelDefine.name, { recursive: true })
    const indexPath = `${modelDefine.name}/${modelDefine.name}Index.vue`
    const formPath = `${modelDefine.name}/${modelDefine.name}Form.vue`
    if (!fs.existsSync(indexPath)) {
      fs.writeFileSync(indexPath, indexPage, 'utf8')
    }
    if (!fs.existsSync(formPath)) {
      fs.writeFileSync(formPath, formPage, 'utf8')
    }
  }
}
