# RapidFort Project Documentation

This documentation outlines the steps and details of the project that involve to perform the given task. 

## Project Overview

The main goal of this project is to create a web server that allows users to upload files and obtain information about the uploaded files. The project includes the following tasks:

1. **Create a REST API Server:** Develop a REST API server that supports file uploads and provides file information.

2. **API Definition:** Clearly define the REST API endpoints and methods (GET, POST) used for file uploading and retrieving information.

3. **Add a Simple UI:** Enhance the user experience by adding a basic web-based user interface for file uploads and information retrieval.

4. **Setup GitHub Action for Docker Build:** Automate the Docker container build process using GitHub Actions or an equivalent CI/CD pipeline.

5. **Run the Container via a Bash Script:** Create a Bash script to start the Docker container.

6. **Create Kubernetes Manifest Files:** Develop Kubernetes manifest files to deploy and manage the web server application in a Kubernetes cluster.

## API Definition

The REST API endpoints are defined as follows:

- **POST / :** Accepts file uploads and gives back the required response using "express-fileupload" library.
- **GET / :**  Used to intialize the server with a basic HTML file 'index.html' which has the file-upload functionality and simple UI.

## GitHub Repository

The project is stored in a GitHub repository: [(https://github.com/RajveerHayer09/RapidFort-Project)](https://github.com/RajveerHayer09/RapidFort-Project)

The repository includes the following components:

- Source code for index.html
- server.js for backend of this node-app
- Dockerfile for building the Docker container
- GitHub Actions configuration for automating Docker builds( .github/workflows/main.yml)
- Bash script for running the Docker container
- Kubernetes manifest files for deploying the application in a Kubernetes cluster

## How to Use
### Using bash :
1. Clone the GitHub repository: `git clone https://github.com/RajveerHayer09/RapidFort-Project.git`
2. Navigate to the project directory: `cd your-dir`
3. Run the Bash script to start the Docker container: `./run-container.sh`
4. Access the application at: `http://localhost:3000`
5. Use the UI to upload files and retrieve information.

6. 
   ![image](https://github.com/RajveerHayer09/RapidFort-Project/assets/91181106/79f50480-ccdc-4a92-ba32-093022e1113f)
   Simple UI.

7. ![image](https://github.com/RajveerHayer09/RapidFort-Project/assets/91181106/d217ff74-f434-48a5-90af-2eeed890fe4c)
   Details shown :



### Using kubernetes(minikube on a local system)
1. Clone the GitHub repository: `git clone https://github.com/RajveerHayer09/RapidFort-Project.git`
2. Navigate to the project directory: `cd your-dir`
3. Start kubernetes using minikube.(first install minikube and then to start kubernetes using minikube use the command: ```minikube start --driver docker ``` )
4. Apply the Deployment manifest using kubectl: ```kubectl apply -f deployment.yaml```
5. Expose the services using manifest using kubectl: ```kubectl apply -f service.yaml```
   >here, we do not have a loadbalancer in minikube , so to do this use minikube tunnel.
   >open another terminal and run ```minikube tunnel ```
   >Do Not close this terminal as it would help you to use loadbalancer service.
6. Now, you can access the web-app at `http://localhost:3000`
7. Use the UI to upload files and retrieve information.


## Bonus Tasks

- The GitHub repository is set up to trigger Docker container builds automatically whenever changes are pushed to the main branch using github actions pipeline.Therefore, the workflow changes and updates the docker image on the rajveer09 repository on dockerHub automatically after any new push.
- The Docker container can be run using the provided Bash script.
- Kubernetes manifest files are included to deploy and manage the application in a Kubernetes cluster.

## Deployed using Google Cloud
- The app is also deployed on google cloud platform using the docker image and can be accessed at : [(HOSTED WEB-APP)](http://35.197.130.99:3000/) .
- This hosting is done using Kubernetes clusters which help us to provide scalability and maintenance.
- The docker-image used to deploy this app is from the dockerHub repository: rajveer09/rapid.
  

## Conclusion

This project demonstrates the creation of a simple REST API-based web server that supports file uploads and information retrieval. By following the steps outlined in this documentation, you can host the application on your local machine, utilize Docker for containerization, and even deploy the application in a Kubernetes cluster for scalability and management.
