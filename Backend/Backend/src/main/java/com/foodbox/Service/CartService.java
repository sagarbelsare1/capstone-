package com.foodbox.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.Entity.FoodItem;
import com.foodbox.Repository.MyFoodItemRepository;

@Service
public class CartService {

	@Autowired
    MyFoodItemRepository mfi;

    public List<FoodItem> getFoodItem(){
        List<FoodItem> foodItemList;
        foodItemList = mfi.findEnabledFoods();

        return foodItemList;

    }
}
