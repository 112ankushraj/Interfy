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
                // Clean deploy directory
                sh 'sudo rm -rf $DEPLOY_DIR/*'

                // Copy build output
                sh 'sudo cp -r client/dist/* $DEPLOY_DIR/'

                // Reload Nginx to reflect changes
                sh 'sudo /bin/systemctl reload nginx'
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
