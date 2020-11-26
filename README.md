youi-cli
========



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/youi-cli.svg)](https://npmjs.org/package/youi-cli)
[![Downloads/week](https://img.shields.io/npm/dw/youi-cli.svg)](https://npmjs.org/package/youi-cli)
[![License](https://img.shields.io/npm/l/youi-cli.svg)](https://github.com/ismezy/youi-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g youi-cli
$ youi-cli COMMAND
running command...
$ youi-cli (-v|--version|version)
youi-cli/0.0.0 linux-x64 node-v12.14.1
$ youi-cli --help [COMMAND]
USAGE
  $ youi-cli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`youi-cli $ youi-cli gencode <model.yml>`](#youi-cli--youi-cli-gencode-modelyml)
* [`youi-cli hello [FILE]`](#youi-cli-hello-file)
* [`youi-cli help [COMMAND]`](#youi-cli-help-command)

## `youi-cli $ youi-cli gencode <model.yml>`

```
USAGE
  $ youi-cli $ youi-cli gencode <model.yml>

ARGUMENTS
  MODELPATH  model文件路径

EXAMPLE
  $ youi-cli gencode model.yml
```

_See code: [src/commands/gencode.ts](https://github.com/ismezy/youi-cli/blob/v0.0.0/src/commands/gencode.ts)_

## `youi-cli hello [FILE]`

```
USAGE
  $ youi-cli hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ youi-cli hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/ismezy/youi-cli/blob/v0.0.0/src/commands/hello.ts)_

## `youi-cli help [COMMAND]`

```
USAGE
  $ youi-cli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
