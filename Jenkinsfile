node{
    stage('Checkout'){
        checkout scm
    }
    stage('Instalando dependencias'){
        sh 'npm install'
    }

    stage('COnstrucción de la app'){
        sh 'npm run build'
    }
}