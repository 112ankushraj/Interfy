pipeline {
    agent any

    tools {
        nodejs "nodejs" // Ensure you've configured this in Jenkins Global Tools
    }

    environment {
        DEPLOY_DIR = '/var/www/internfy.in'
    }

    stages {
        stage('Checkout Code') {
            steps {
                git url: "https://github.com/112ankushraj/Interfy.git", branch: "main"
            }
        }

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
                sh 'sudo -S rm -rf $DEPLOY_DIR/*'
                sh 'sudo -S cp -r client/dist/* $DEPLOY_DIR/'
                sh 'sudo -S /bin/systemctl reload nginx'
            }
        }
}

    post {
        success {
            echo '✅ Deployed successfully from Jenkins!'
        }
        failure {
            echo '❌ Build or deployment failed. Please check logs.'
        }
    }
}
