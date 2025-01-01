## 0. `tfstate`を管理するバケットと、`tfstate`をロックするDynamoDBテーブルを作成する

tfstateは**必ず**リモート（≠ git）で管理する。tfstateにはcredential情報も含まれる可能性があるため適切にアクセス権を管理する。
例えば、Secret Managersの情報を参照するときtfstateには、その値の平文が含まれる。

tfstateの管理にはデファクトスタンダードでS3が使われる。S3ではバージョニングと自動バックアップを有効にすることで、意図しない削除からtfstateを守ったり、過去の状態へのロールバックを行うことができる。

tfstateは複数人が同時に変更をすることによってコンフリクトが発生することがある。tfstateへのアクセスを制御するDynamoDBテーブルを作成することで、これを防ぐことができる。

これらのバケットとテーブルは通常terraformで管理しないため、手動（マネジメントコンソール or AWS CLIなど）で作成する。

### 0-1. `tfstate`を管理するバケット

- バケット名：`joeyama-library-dev-tfstates`
- バケットのバージョニング：有効
- デフォルトの暗号化：SSE-S3
- ブロックパブリックアクセス：パブリックアクセスをすべてブロック

### 0-2. `tfstate`をロックするDynamoDBテーブル

- テーブル名：`TerraformLockState`
- パーティションキー：`LockID` (文字列)

### 0-3. 最低限必要なterraformファイルを作成する

いかなる場合でも以下のファイルは必ず作成する（例え空となる場合でも作成する）

参考：https://www.youtube.com/watch?v=0IQ4IScqQws

#### `backend.tf`

tfstateを管理するバケットとstateをロックするDynamoDBテーブルをここで指定する。

#### `version.tf`

Terraform自体のバージョンとprovider (`aws`) のバージョンを指定する。`terraform`は最後に実行されたバージョン以降のバージョンでしか動作しないため必ず記載する。
providerのバージョンも固定しておかないと、apply時に明示的に指定していないパラメーターがズレてしまう可能性があるため必ず記載する。

```terraform
terraform {
  required_version = "1.10.3"
  required_providers {
    aws = { 
      source = "hashicorp/aws"
      version = "5.82.2"
    }
  }
}
```

#### `provider.tf`

provider (`aws`) の設定は個々に記載する。regionなど。

```terraform
provider "aws" {
  region = "ap-northeast-1"
}
```

## 1. terraformを実行する

```bash
$ AWS_PROFILE=<your aws profile> terraform init
Terraform has been successfully initialized!
```

```bash
$ AWS_PROFILE=<your aws profile> terraform plan
data.aws_caller_identity.current: Reading...
data.aws_caller_identity.current: Read complete after 0s [id=980921710283]

Changes to Outputs:
  + aws_account_id = "980921710283"
  + aws_caller_arn = "arn:aws:sts::980921710283:assumed-role/AWSReservedSSO_AWSAdministratorAccess_a3dd3dd6f5674cfc/aws.jyamane+library@gmail.com"
```

