package nowel.vrcafe.server.exeption;
/**
 *
 * if user is not found get a message with the code
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   02/02/2023
 */
public class UserNotFoundExeption extends RuntimeException{
    public UserNotFoundExeption(String message) {
        super(message);
    }
}
