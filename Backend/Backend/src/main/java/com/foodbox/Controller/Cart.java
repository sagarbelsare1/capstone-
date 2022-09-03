package com.foodbox.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.foodbox.Entity.FoodItem;

@RestController
public class Cart {

	@Autowired
    com.foodbox.Service.CartService cs;

    @CrossOrigin
    @RequestMapping(value = "/getEnabledFoodList", method = RequestMethod.GET)
    List<FoodItem> getEnabledFoodList() {

        List<FoodItem> foodItemList = cs.getFoodItem();

        return foodItemList;
    }
}
