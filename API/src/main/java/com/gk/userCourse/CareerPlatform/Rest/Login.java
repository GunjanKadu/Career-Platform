package com.gk.userCourse.CareerPlatform.Rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gk.userCourse.CareerPlatform.Entity.AuthRequest;
import com.gk.userCourse.CareerPlatform.Util.JwtUtil;

@RestController
@RequestMapping("/api")
public class Login {

	@Autowired
	private JwtUtil jtwUtil;

	@Autowired
	private AuthenticationManager authenticationManager;

	@PostMapping("/login")
	public String login(@RequestBody AuthRequest authRequest) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(authRequest.getUserName(),
					authRequest.getPasswordString()));
		} catch (Exception e) {
			throw new Exception("Invalid UserName or password");
		}
		return jtwUtil.generateToken(authRequest.getUserName());
	}
}
