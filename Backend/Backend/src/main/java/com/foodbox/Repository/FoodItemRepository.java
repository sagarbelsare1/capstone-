package com.foodbox.Repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.foodbox.Entity.FoodItem;

@Repository
public interface FoodItemRepository extends CrudRepository<FoodItem, Integer>  {
	   FoodItem save(FoodItem fi);
	    List<FoodItem> findAll();
}
