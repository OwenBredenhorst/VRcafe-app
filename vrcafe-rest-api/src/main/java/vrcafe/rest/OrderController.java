package vrcafe.rest;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import vrcafe.models.Coupon;
import vrcafe.repositories.CouponMemoryRepository;

import java.util.List;

/**
 * CouponController for all the Mapping
 *
 * @author Owen Bredenhorst
 * @version 1.0
 * @since 07/03/2023
 */

@RestController
public class OrderController {

    @Autowired
    private CouponMemoryRepository repo;



    /**
     * Get all users from the database and return them as a list of User objects.
     *
     * @return A list of all users in the database.
     */
    @GetMapping("/coupons")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<Coupon> getAll() {
        return repo.getAll();
    }



    /**
     * If the user is not found, then create a new user with the next available id
     *
     * @param id The id of the user we want to retrieve.
     * @return A user object
     */
    @GetMapping("/coupon/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Coupon getUserById(
            @PathVariable int id) {

        Coupon coupon = repo.findByID(id);
        if (coupon.getId() == 0) {
            int lastUserIndex = getAll().size() - 1;
            Coupon last = repo.findByID(lastUserIndex);
            int uniqueId = last.getId() + 1;
            coupon.setId(uniqueId);
//            throw new UserNotFoundExeption("id = " + id);
        }
        return coupon;
    }






}


