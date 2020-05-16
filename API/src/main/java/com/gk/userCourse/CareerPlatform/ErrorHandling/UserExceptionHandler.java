package com.gk.userCourse.CareerPlatform.ErrorHandling;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class UserExceptionHandler {

	// Exception handler for handling exception
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleException(UserNotFoundExecption exc) {
		UserErrorResponse errorResponse = new UserErrorResponse();
		errorResponse.setMessage(exc.getMessage());
		errorResponse.setStatus(HttpStatus.NOT_FOUND.value());
		errorResponse.setTimeStamp(System.currentTimeMillis());

		return new ResponseEntity<>(errorResponse, HttpStatus.NOT_FOUND);
	}

	// Handling all exceptions
	@ExceptionHandler
	public ResponseEntity<UserErrorResponse> handleException(Exception exc) {
		UserErrorResponse errorResponse = new UserErrorResponse();
		errorResponse.setMessage(exc.getMessage());
		errorResponse.setStatus(HttpStatus.BAD_REQUEST.value());
		errorResponse.setTimeStamp(System.currentTimeMillis());

		return new ResponseEntity<>(errorResponse, HttpStatus.BAD_REQUEST);
	}
}
