package com.truemark.demo.helloworld;

import lombok.Data;
import lombok.experimental.Accessors;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

@RestController
@Slf4j
public class HelloWorldController {

    // This value comes from application.yml or if set an environment variables called MESSAGE
    @Value("${message}")
    private String message;

    @Data
    @Accessors(chain = true)
    public static class Hello {
        private String message;
    }

    @RequestMapping(value = "**")
    public Hello hello(HttpServletRequest req) {
        if (log.isTraceEnabled()) {
            log.trace(String.format("Received request from %s to %s",req.getRemoteAddr(), req.getRequestURI()));
        }
        return new Hello().setMessage(message);
    }

}
