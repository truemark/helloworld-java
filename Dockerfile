FROM openjdk:11-jre
RUN useradd -ms /bin/bash app
USER app
WORKDIR /home/app
COPY target/*.jar /home/app/
EXPOSE 8080
ENTRYPOINT ["/bin/bash", "-c", "java -jar *.jar"]