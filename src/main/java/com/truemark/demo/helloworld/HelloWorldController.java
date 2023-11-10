package com.truemark.demo.helloworld;

import lombok.Data;
import lombok.experimental.Accessors;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloWorldController {

    @Data
    @Accessors(chain = true)
    public class Hello {
        private String message;
    }

    @RequestMapping(value = "**")
    public Hello hello() {
        return new Hello().setMessage("Hello world!");
    }

}
