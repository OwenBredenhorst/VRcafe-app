package vrcafe.repositories;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Repository;
import vrcafe.models.User;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

// todo add DAO later
@Repository
public class UserMemoryRepository {

    private static int userCount = 0;
    private final List<User> users;

    private BCryptPasswordEncoder encoder;
    public UserMemoryRepository() {
        users = new ArrayList<>();
        generateUser();
    }

    private void generateUser() {

        save(new User(null, "Emma", "Johnson", "emma_johnson", "emma@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "admin", "admin", "admin_admin", "admin@gmail.com" ,"$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://avatars.githubusercontent.com/u/119951456?v=4.png"));
        save(new User(null, "Max", "Smith", "max_smithy", "maxsmith@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Sophie", "Davis", "sophiedavis", "sophie.davis@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Oliver", "Jones", "oliverjones", "ojones@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Ava", "Taylor", "avataylor", "ava.taylor@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "William", "Wilson", "williamwilson", "wwilson@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Emily", "Martin", "emily_martin", "emartin@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Benjamin", "Moore", "benmoore", "benjamin.moore@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Charlotte", "Garcia", "charlotteg", "charlotte.garcia@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));
        save(new User(null, "Lucas", "Rodriguez", "lucasr", "lucas.rodriguez@gmail.com", "$2a$10$C80Wh.FvY9OFg3MoATx0NOjJT9VQarmm6WufuAS3xFY2.tsc9ewUu", "https://t4.ftcdn.net/jpg/00/65/77/27/360_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"));

    }

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */
    public List<User> getAll() {
        return users;
    }

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */
    public User deleteById(int id) throws Exception {
        Iterator<User> iterator = users.iterator();
        while (iterator.hasNext()) {
            User user = iterator.next();

            if (user.getId() == id) {
                iterator.remove();
                return user;
            }
        }
        return null;
    }




    public User save(User object) {
        if (object.getId() == null) {
            synchronized (UserMemoryRepository.class) {
                object.setId(++userCount);
            }
        }

        int pos = users.indexOf(object);

        if(pos == -1) {
            users.add(object);
        } else {
            users.set(pos,object);
        }

        return object;
    }
    /**
     * Find a T by its ID.
     *
     * @param id The id of the object you want to find.
     * @return The object of the type T that has the id that was passed in.
     */

    public User findByID(int id) {
        for(User u : users) {
            if(u.getId() == id) {
                return u;
            }
        }
        return null;
    }

    /**
     * Find all objects of type T that have an id equal to the given id.
     *
     * @param id The id of the object you want to find.
     * @return A list of objects of type T
     */

    public List<User> findAllByID(int id) {
        return null;
    }


    /**
     * Find a user by email and password.
     *
     * @param email The email of the user
     * @return A User object
     */
    public User findByEmail(String email) {
        for(User u : users) {
            if(u.getEmail().equals(email)) {
                return u;
            }
        }
        return null;
    }
}

