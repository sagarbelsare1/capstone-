package com.foodbox.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.foodbox.Entity.Cuisine;
import com.foodbox.Repository.CuisineRepository;


@Service
public class CuisineService {

	@Autowired
    CuisineRepository cr;

    public boolean addCuisine(Cuisine fi){
        cr.save(fi);
        return true;
    }

    public List<Cuisine> getCuisineList(){

        List<Cuisine> cl = cr.findAll();
        return cl;
    }
}
