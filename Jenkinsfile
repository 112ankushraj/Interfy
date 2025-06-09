pipeline {
    agent any

    environment {
        DEPLOY_DIR = '/var/www/test.aakash1z.online'
    }

    stages {
        stage('Install Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                }
            }
        }

        stage('Build React App') {
            steps {
                dir('client') {
                    sh 'npm run build'
                }
            }
        }

        stage('Deploy to Nginx') {
            steps {
                sh 'sudo rm -rf $DEPLOY_DIR/*'
                sh 'sudo cp -r client/dist/* $DEPLOY_DIR/'
                sh 'sudo systemctl reload nginx'
            }
        }
    }

    post {
        success {
            echo '✅ Deployed from Jenkinsfile in repo!'
        }
        failure {
            echo '❌ Something went wrong.'
        }
    }
}
