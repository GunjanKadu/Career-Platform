<h1 align="center">CAREER-PLATFORM</h1>
<p>A platform that allows instructors to build online courses on their preferred topics and users to buy those courses and start learning.A platform which also allows users to convert themselves into instructor and create their own courses
</p>



<span>
<h3 align="center">APPLICATION FEATURES</h3>
    <li>User is able to signUp and login securely using JSON Web Token.</li>
    <li>User Session persists even after browser reload or close.</li>
    <li>User is able to change his/her profile info.</li>
    <li>User is able to change his/her role.</li>
    <li>User can Register/De-Register For/From a course</li>
    <li>User(Role of Instructor) can perform CRUD Operation on the courses created.</li>
    <li>User Can filter courses based on his/her requirements.</li>
    <li>User can search for a particular course.</li>
</span>

<span>
<h3 align="center">TECHNICAL FEATURES</h3>

        --------------------------------------------------------------------------------
       | Category         | Feature                                                     |
       -------------------|--------------------------------------------------------------
       |REST API          | Richardson Maturity Model - Level 1 (Resources)             |
       |                  | Richardson Maturity Model - Level 2 (HTTP Verbs)            |
       |                  | Richardson Maturity Model - Level 3 (HATEOAS)               |
       |                  | Api Supports Query Filters                                  |
       |                  | Api Supports Query Pagination                               |
       ---------------------------------------------------------------------------------|
       |DATABASE ACCESS   | Data Mapper Pattern                                         |
       |                  | Hibernate ORM 3rd Party Data Mapper                         |
       ---------------------------------------------------------------------------------|         
       |AUTHENTICATION    | Manual User Authentication using JWT                        |
       |                  | User Can Login from Frontend                                |
       |                  | User Can Register from Frontend                             |
       |                  | User Have Different Roles based on login                    |
       |                  | User Can edit profile settings                              |
       ---------------------------------------------------------------------------------|
       |FRONTEND          | MVC Angular                                                 |
       |                  | Frontend Routing                                            |
       |                  | Progressive Web App (No server side rendering)              |
       |                  | Electron Bundling for Desktop support                       |
       |                  | FrontEnd Unit Test                                          |
       ---------------------------------------------------------------------------------|
       |DevOps            | CI/CD Workflow using CircleCI                               |
       |                  | Docker file available for backend(./API)                    |
       |                  | Docker Compose Multi Container Application(./API)           |
       |                  | Backend Available in dockerhub(gunjankadu/career-platform)  |
        --------------------------------------------------------------------------------
       
       
       
</span>

<h3 align="center">TECHNOLOGY STACK</h3>

Component         | Technology
---               | ---
Frontend          | [Angular 9](https://github.com/angular/angular)
Backend (REST)    | [SpringBoot](https://projects.spring.io/spring-boot) (Java)
Security          | Token Based (Spring Security and [JWT](https://github.com/auth0/java-jwt) )
REST Documentation| [Swagger UI / Springfox](https://github.com/springfox/springfox) and [ReDoc](https://github.com/Rebilly/ReDoc)
REST Spec         | [Open API Standard](https://www.openapis.org/) 
DB                | PostGreSql
Persistence       | JPA (Using Spring Data)
Client Build Tools| [angular-cli](https://github.com/angular/angular-cli), Webpack, npm
Server Build Tools| Maven(Java) or Gradle

<span align="center">
<h3 >LIVE AT</h3>
    

[FrontEnd](https://career-platform-26828.web.app/)





[BackEnd](https://career-platform.herokuapp.com/swagger-ui.html)





[Final Video Presentation](https://drive.google.com/drive/folders/1WV2SRrCf9_wt3u5kHyjIu64mPL6MGe0O?usp=sharing)





[Docker Image For Backend](https://hub.docker.com/repository/docker/gunjankadu/career-platform)



</span>

<br/>
<h3 align="center">STEPS TO RUN FRONTEND</h3>
<li>Clone the repo and navigate into the repo</li>

    npm i && ng serve
    
    
<li>Navigate To </li>
    
    http://localhost:4200


<h3 align="center">STEPS TO RUN BACKEND DOCKER IMAGE</h3>
<li>Pull The Image From the Docker Hub</li>

    docker pull gunjankadu/career-platform:version2 

<li>Check Whether the image is pulled </li>

    docker image ls

<li>Run the Image </li>
    
    docker run -p 8086:8086 -d --name career-platform-i gunjankadu/career-platform:version2
    
<li>Check the container</li>

    docker container ls 
    
<li>Check Logs of the running container</li>
    
    docker logs -t career-platform-i
   
<li>If the logs are successful Navigate to Local Host </li>
    
    http://localhost:8086
    
 <li>If Application not visible on Local Host 8086 Navigate to </li> 
 
    http://192.168.99.100:8086/   
