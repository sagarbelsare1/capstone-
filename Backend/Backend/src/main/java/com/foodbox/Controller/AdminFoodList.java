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

import com.foodbox.Entity.FoodItem;

@RestController
public class AdminFoodList {

	@Autowired
    com.foodbox.Service.AdminFood af;

    @CrossOrigin
    @RequestMapping(value = "/addFoodItem", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> addFoodItem(@RequestBody FoodItem fi) {

        boolean added = af.addFoodItem(fi);

        if(added){
            return new ResponseEntity<>("FoodItem added", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("An Error occured", HttpStatus.BAD_REQUEST);
        }
    }

    @CrossOrigin
    @RequestMapping(value = "/getFoodItem", method = RequestMethod.GET)
    List<FoodItem> getFoodItem() {

        List<FoodItem> foodItemList = af.getFoodItem();

        return foodItemList;
    }

    @CrossOrigin
    @RequestMapping(value = "/updateFoodItem", method = RequestMethod.POST, consumes = "application/json")
    ResponseEntity<String> updateFoodItem(@RequestBody FoodItem fi) {

        boolean updated = af.updateFoodItem(fi);

        if(updated){
            return new ResponseEntity<>("FoodItem updated", HttpStatus.CREATED);
        }else{
            return new ResponseEntity<>("An Error occured", HttpStatus.BAD_REQUEST);
        }
    }
}
