package com.foodbox.Repository;

import java.util.List;

import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.foodbox.Entity.User;

@Repository
public interface UserRepository extends CrudRepository<User, Integer> {

	List<User> findAll();
    User save(User user);
}
