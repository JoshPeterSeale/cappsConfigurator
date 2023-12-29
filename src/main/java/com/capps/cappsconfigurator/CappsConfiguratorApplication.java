package com.capps.cappsconfigurator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class CappsConfiguratorApplication {

	public static void main(String[] args) { SpringApplication.run(CappsConfiguratorApplication.class, args);}

}
