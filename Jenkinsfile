node{
    stage('Checkout'){
        checkout scm
    }
    stage('Instalando dependencias'){
        sh 'npm install'
    }

    stage('Construcción de la app'){
        sh 'npm run build'
    }
    stage('Copia de archivos a nginx'){
        sh 'cp -r dist/ /home/wlady3190/Documentos/jenkins'
    }
}