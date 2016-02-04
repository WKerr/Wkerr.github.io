---
title: "SonarQube Tutorial - Setting up for Development"
layout: "post"
isPost: true
date: 2016-01-08
info:
    name: "SonarQube Tutorial - Setting up for Development"
    description: "This tutorial will cover how to set up your environment for SonarQube development covering how to build, deploy and debug."
    strDate: "January 8th, 2016"
---


## Setting up the SonarQube Development Environment
The SonarQube server is needed to act as our local development server to hold and display dashboard reports. The scanner tool will be run against a specific code base or report and send the results to the server to be parsed.
Things that are needed:
1. Download the latest SonarQube server and scanner at, [sonarqube.org/downloads/](http://www.sonarqube.org/downloads/)
2. Get the sample [Generic Test Coverage](http://docs.sonarqube.org/display/PLUG/Generic+Test+Coverage) plugin Java source files and set up workspace using Maven.

*Note: Test that the standalone server works by running located in, "bin/{environment}/" folder in the SonarQube folder. Where {environment} is the current operating system.
maven is require either by cmd or in your IDE.
When setting up for IDE, import the project using Maven pom.xml. Make sure the Java language level is set to 6+.*


## Build the Jar
To produce the standalone jar file, run the maven commands in the project root where pom.xml is located.

        maven clean compile install
The resulting jar file should be located in the root of the project under:

        /target/sonar-generic-imports.jar
(If an error occurs while running see debug section for more information). For specific plugin information see related sections.


## How to Deploy Plugin to the Server?
In order for the plugin to be run you must compile into a JAR file and placed in the server plugin folder. The plugin will be picked up on the next server restart. Sonar Plugin folder:

        {Sonar-Server}/extensions/plugins/
If an error occurs on the next restart see the debug section for more details.


## How to debug
Maven - check the stack trace of the run by adding either flag, `-X`,`-e`. The first will give the full debug log and other respectively will return the full error stack trace.
SonarQube Server - If the server fails to start, check the server logs for additional information. A stack trace is provided if it is caused by the plugin.
SonarQube Scanner - If the scanner fails to run, check the console output for additional information. A stack trace can be found by adding additional flag, `-X`. If you would like to step through the code see below for more information.


### Modifying Sonar Scanner Debug Mode
1. Include the following settings in the batch file of the Scanner:

        SET SONAR_RUNNER_OPTS=-Xdebug -Xnoagent -Djava.compiler=NONE -Xrunjdwp:transport=dt_socket,server=y,suspend=y,address=8000
   It will have worked correctly if it starts waiting for a host to connect to port 8000.
2. Set up IDE to do a remote connection with host:localhost port:8000
3. Run the remote connect after starting the Scanner



### Modifying Sonar Server to Debug Mode (never worked for me)
1. Modify, 'conf/wrapper.conf' file in SonarQube server.
2. Add,

        wrapper.java.additional.2=-agentlib:jdwp=transport=dt_socket,server=y,address=8001
3. Set up IDE to do a remote connection with host:localhost port:8001
4. Run the remote connect after starting the SonarQube Server


## Summary
So we've built a plugin and deployed it to our SonarQube server. Learnt to debug our plugin with our ide if there are problems. In the future we will cover more of the inner workings of plugins.
