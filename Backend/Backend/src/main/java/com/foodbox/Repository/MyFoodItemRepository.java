package com.foodbox.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.Entity.FoodItem;

@Repository
public interface MyFoodItemRepository extends JpaRepository<FoodItem, Integer>  {

	// EXAMPLE SPRING DATA METHOD
    List<FoodItem> findEnabledFoods();
}
