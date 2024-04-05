FROM amazoncorretto:21-al2023-headless
USER nobody
WORKDIR /home/app
COPY target/*.jar /home/app/
#HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 CMD curl --fail http://localhost:8080/actuator/info || exit 1
ENV MESSAGE="Hello Universe!"
EXPOSE 8080
ENTRYPOINT ["/bin/bash", "-c", "java -Xmx64m -jar *.jar"]
