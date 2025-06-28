# Use OpenJDK as base image
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy pom.xml first for dependency caching
COPY pom.xml ./

# Copy Maven wrapper files (if they exist)
COPY mvnw* ./

# Make mvnw executable (if it exists)
RUN chmod +x ./mvnw || true

# Install Maven (since .mvn folder doesn't exist)
RUN apt-get update && apt-get install -y maven

# Copy source code
COPY src ./src

# Build the application using Maven
RUN mvn clean package -DskipTests

# Expose port 8085
EXPOSE 8085

# Run the Spring Boot application
CMD ["java", "-jar", "target/studentapp-0.0.1-SNAPSHOT.jar"]
