package com.foodbox.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.foodbox.Entity.User;

@Controller
public class Login {

	@Autowired
    com.foodbox.Service.LoginRegister ru;

    @CrossOrigin
    @RequestMapping(value = "/userRegister", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> userRegister(@RequestBody User user) {

        boolean exists = ru.registerUser(user);

        if(!exists){
            return new ResponseEntity<>("User is registered", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("User already exists", HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/userLogin", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> userLogin(@RequestBody User user) {

        boolean auth = ru.loginUser(user);

        if(auth){
            return new ResponseEntity<>("User and Password OK", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("User or Password not ok", HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/adminLogin", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> adminLogin(@RequestBody User user) {

        boolean auth = ru.adminLogin(user);

        if(auth){
            return new ResponseEntity<>("User and Password OK", HttpStatus.OK);
        }else{
            return new ResponseEntity<>("User or Password not ok", HttpStatus.BAD_REQUEST);
        }
    }

}
