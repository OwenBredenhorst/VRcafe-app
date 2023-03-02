package nowel.vrcafe.server.model;
import org.springframework.data.annotation.Id;
import javax.persistence.*;
import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * Class for all the user attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   02/3/2023
 */

@Entity
public class  User {


    private static final AtomicInteger idGenerator = new AtomicInteger(0);
    @Id
    @GeneratedValue
    private Integer id;
    private String firstName;
    private String lastName;
    private String username;
    private String email;
    private String password;
    private String img;

    public User(Integer id, String firstName, String lastName, String username, String email, String password, String img) {
        this.id = idGenerator.incrementAndGet();
        this.firstName = firstName;
        this.lastName = lastName;
        this.username = username;
        this.email = email;
        this.password = password;
        this.img = img;
    }

    public User() {

    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }


}
