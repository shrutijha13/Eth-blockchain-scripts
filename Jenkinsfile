pipeline {
    agent any

    stages {
        stage('Installing npm dependencies') {
            steps {
                sh 'npm install solc'
                sh 'npm install web3'
                sh 'npm install @truffle/hdwallet-provider'
            }
        }
        stage('Compiling contract') {
            steps {
                sh 'node contracts/compile.js'
            }
        }
        stage('Deploying contract') {
            steps {
                sh 'node contracts/eth-script.js'
            }
        }
    }
}
