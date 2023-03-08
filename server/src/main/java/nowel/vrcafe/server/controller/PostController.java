package nowel.vrcafe.server.controller;

import nowel.vrcafe.server.exeption.UserNotFoundExeption;
import nowel.vrcafe.server.model.Coupon;
import nowel.vrcafe.server.model.Post;
import nowel.vrcafe.server.repository.CouponDAO;
import nowel.vrcafe.server.repository.PostDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * PostController for all the Mapping
 *
 * @author Owen Bredenhorst
 * @version 1.0
 * @since 07/03/2023
 */

@RestController
public class PostController {

    @Autowired
    private PostDAO repo;



    /**
     * Get all posts from the database and return them as a list of User objects.
     *
     * @return A list of all users in the database.
     */
    @GetMapping("/post")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<Post> getAll() {
            return repo.getAll();
    }



    /**
     * If the posts is not found, then create a new user with the next available id
     *
     * @param id The id of the user we want to retrieve.
     * @return A user object
     */
    @GetMapping("/post/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public Post getUserById(
            @PathVariable int id) {

        Post p = repo.findByID(id);
        if (p.getId() == 0) {
            int lastUserIndex = getAll().size() - 1;
            Post last = repo.findByID(lastUserIndex);
            int uniqueId = last.getId() + 1;
            p.setId(uniqueId);
            throw new UserNotFoundExeption("id = " + id);
        }
        return p;
    }

}


