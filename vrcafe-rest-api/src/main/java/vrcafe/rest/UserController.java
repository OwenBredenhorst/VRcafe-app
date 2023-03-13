package vrcafe.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import vrcafe.exceptions.ResourceNotFoundException;
import vrcafe.models.User;
import vrcafe.repositories.UserMemoryRepository;

import java.net.URI;
import java.util.List;

/**
 * userController for all the Mapping
 *
 * @author Owen Bredenhorst
 * @version 1.0
 * @since 03/02/2023
 */

@RestController
public class UserController {

    @Autowired
    private UserMemoryRepository repo;

    @Autowired
    private BCryptPasswordEncoder encoder;


    /**
     * Get all users from the database and return them as a list of User objects.
     *
     * @return A list of all users in the database.
     */
    @GetMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000/")
    public List<User> getAll() {
        return repo.getAll();
    }


    @PostMapping("/users")
    @CrossOrigin(origins = "http://localhost:3000/")
    public ResponseEntity<User> createUser(@RequestBody User user) {

        String encodedPassword = encoder.encode(user.getPassword());
        user.setPassword(encodedPassword);

        User savedUser = repo.save(user);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(savedUser.getId()).toUri();

        return ResponseEntity.created(location).body(savedUser);
    }


    /**
     * If the user is not found, then create a new user with the next available id
     *
     * @param id The id of the user we want to retrieve.
     * @return A user object
     */
    @GetMapping("/users/{id}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public User getUserById(
            @PathVariable int id) {

        User user = repo.findByID(id);
        if (user.getId() == 0) {
            int lastUserIndex = getAll().size() - 1;
            User lastUser = repo.findByID(lastUserIndex);
            int uniqueId = lastUser.getId() + 1;
            user.setId(uniqueId);
//            throw new UserNotFoundExeption("id = " + id);
        }
        return user;
    }

    /**
     * It returns a user object with the given email and password.
     *
     * @param email The email of the user
     * @param password The password of the user.
     * @return A user object
     */
    @GetMapping("/users/{email}/{password}")
    @CrossOrigin(origins = "http://localhost:3000/")
    public User getUserByloginInfo(
            @PathVariable String email, @PathVariable String password) {

        User user = repo.findByEmail(email);

        if (user != null && encoder.matches(password, user.getPassword())) {
            return user;
        } else {
            throw new ResourceNotFoundException("User not found for email: " + email);
        }
    }




}


