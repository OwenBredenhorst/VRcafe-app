package vrcafe.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import vrcafe.exceptions.ResourceNotFoundException;
import vrcafe.models.Order;
import vrcafe.repositories.OrderInMemoryRepository;

import java.lang.module.ResolutionException;
import java.util.List;

/**
 * OrderController for all the Mapping
 *
 * @author Owen Bredenhorst
 * @version 1.0
 * @since 07/03/2023
 */

@RestController
public class CouponController {

    @Autowired
    private OrderInMemoryRepository repo;



    /**
     * Get all orders from the database and return them as a list of User objects.
     *
     * @return A list of all users in the database.
     */
    @GetMapping("/orders")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<Order> getAll() {
        return repo.getAll();
    }



    /**
     * If the orders is not found, then create a new user with the next available id
     *
     * @param id The id of the user we want to retrieve.
     * @return A user object
     */
    @GetMapping("/orders/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Order getUserById(
            @PathVariable int id) {

        Order o = repo.findByID(id);
        if (o.getId() == 0) {
            int lastUserIndex = getAll().size() - 1;
            Order last = repo.findByID(lastUserIndex);
            int uniqueId = last.getId() + 1;
            o.setId(uniqueId);
            throw new ResourceNotFoundException("id = " + id);
        }
        return o;
    }






}


