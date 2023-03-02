package nowel.vrcafe.server.repository;

import java.util.List;

/**
 *
 * DAO With CRUD
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   02/03/2023
 */


public interface DAO<T> {

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */
    List<T> getAll();

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */
    T deleteById(int id) throws Exception;

    /**
     * Save the object to the database and return the saved object.
     *
     * @param object The object to be saved.
     * @return The object that was saved.
     */
    T save(T object);

    /**
     * Find a T by its ID.
     *
     * @param id The id of the object you want to find.
     * @return The object of the type T that has the id that was passed in.
     */
    T findByID (int id);

    /**
     * Find all objects of type T that have an id equal to the given id.
     *
     * @param id The id of the object you want to find.
     * @return A list of objects of type T
     */
    List<T> findAllByID(int id);
}


