package nowel.vrcafe.server.repository;

import nowel.vrcafe.server.model.User;
import org.springframework.stereotype.Repository;
import java.util.concurrent.atomic.AtomicInteger;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;


@Repository
public class UserDAO implements DAO<User> {

    private static int userCount = 0;
    private final List<User> users;

    public UserDAO() {
        users = new ArrayList<>();
        generateUser();
    }

    private void generateUser() {


        save(new User(null, "Emma", "Johnson", "emma_johnson", "emma@gmail.com", "p4ssword", "emmaimg.png"));
        save(new User(null, "Max", "Smith", "max_smithy", "maxsmith@gmail.com", "maxpassword", "maximg.png"));
        save(new User(null, "Sophie", "Davis", "sophiedavis", "sophie.davis@gmail.com", "sophie123", "sophieimg.png"));
        save(new User(null, "Oliver", "Jones", "oliverjones", "ojones@gmail.com", "oliver456", "oliverimg.png"));
        save(new User(null, "Ava", "Taylor", "avataylor", "ava.taylor@gmail.com", "taylorpass", "avaimg.png"));
        save(new User(null, "William", "Wilson", "williamwilson", "wwilson@gmail.com", "wilson1234", "williamimg.png"));
        save(new User(null, "Emily", "Martin", "emily_martin", "emartin@gmail.com", "emilypass", "emilyimg.png"));
        save(new User(null, "Benjamin", "Moore", "benmoore", "benjamin.moore@gmail.com", "moorepass", "benimg.png"));
        save(new User(null, "Charlotte", "Garcia", "charlotteg", "charlotte.garcia@gmail.com", "charlotte123", "charlotteimg.png"));
        save(new User(null, "Lucas", "Rodriguez", "lucasr", "lucas.rodriguez@gmail.com", "rodriguezpass", "lucasimg.png"));

    }

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */
    @Override
    public List<User> getAll() {
        return users;
    }

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */
    @Override
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



    @Override
    public User save(User object) {
        if (object.getId() == null) {
            synchronized (UserDAO.class) {
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
    @Override
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
    @Override
    public List<User> findAllByID(int id) {
        return null;
    }


    /**
     * Find a user by email and password.
     *
     * @param email The email of the user
     * @param password The password of the user.
     * @return A User object
     */
    public User findByEmailAndPassword(String email, String password) {
        for(User u : users) {
            if(u.getEmail().equals(email) && u.getPassword().equals(password)) {
                return u;
            }
        }
        return null;
    }
}

