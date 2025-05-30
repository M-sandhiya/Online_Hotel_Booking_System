package com.hotelbooking.controller;

import com.hotelbooking.model.User;
import com.hotelbooking.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public User registerUser(@RequestBody User user) {
        return userService.registerUser(user);
    }
    
    @PostMapping("/login")
    public User loginUser(@RequestBody User loginData) {
        User user = userService.loginUser(loginData.getEmail(), loginData.getPassword());
        if (user != null) {
            return user;
        } else {
            throw new RuntimeException("Invalid email or password");
        }
    }

}
