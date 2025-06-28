pipeline {
    agent any
    
    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/monisha200512/student-course-management-devops.git'
            }
        }
        
        stage('Build') {
            steps {
                sh 'chmod +x mvnw'
                sh './mvnw clean compile'
            }
        }
        
        stage('Package') {
            steps {
                sh './mvnw package -DskipTests'
            }
        }
        
        stage('Docker Build') {
            steps {
                sh 'docker build -t studentapp:latest .'
            }
        }
        
        stage('Deploy') {
            steps {
                sh 'docker-compose down || true'
                sh 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            echo 'Pipeline completed!'
        }
        success {
            echo 'Pipeline succeeded! 🎉'
        }
        failure {
            echo 'Pipeline failed! ❌'
        }
    }
}
