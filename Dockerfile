#FROM openjdk:11
#ARG version
#RUN echo ${version}
#RUN useradd -ms /bin/bash build
#USER build
#COPY --chown=build:build . /home/build/sources
#WORKDIR /home/build/sources
#RUN ./mvnw package

FROM openjdk:11-jre
RUN useradd -ms /bin/bash app
USER app
WORKDIR /home/app
COPY target/*.jar /home/app/
EXPOSE 8080
ENTRYPOINT ["/bin/bash", "-c", "java -jar *.jar"]