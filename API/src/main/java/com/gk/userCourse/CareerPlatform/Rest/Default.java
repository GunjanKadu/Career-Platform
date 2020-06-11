package com.gk.userCourse.CareerPlatform.Rest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@RestController
public class Default {

    @GetMapping("/")
    public void redirect(HttpServletResponse httpResponse) throws IOException {
        httpResponse.sendRedirect("/swagger-ui.html");
    }

}
