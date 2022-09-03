package com.foodbox.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.Entity.Cuisine;
import com.foodbox.Service.CuisineService;

@RestController
public class CuisineController {

	@Autowired
    CuisineService cus;

    @CrossOrigin
    @RequestMapping(value = "/addCuisine", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> addFoodItem(@RequestBody Cuisine cu) {

        boolean added = cus.addCuisine(cu);

        if(added){
            return new ResponseEntity<>("Cuisine added", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("An Error occured", HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/getCuisineList", method = RequestMethod.GET)
    List<Cuisine> getCuisineList() {

        List<Cuisine> cuisineList = cus.getCuisineList();

        return cuisineList;
    }
}
