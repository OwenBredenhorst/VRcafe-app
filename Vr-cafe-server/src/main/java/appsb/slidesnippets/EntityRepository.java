package appsb.slidesnippets;

import java.util.List;

public interface EntityRepository<E> {
    List<E> findAll();                  // finds all available instances
    E findById(long id);                // finds one instance identified by id
                                            // returns null if the instance does not exist
    E save(E entity);                   // updates or creates the instance matching entity.getId()
                                            // generates a new unique Id if entity.getId()==0
    E deleteById(long id);              // deletes the instance identified by id
                                            // returns the instance that has been deleted or null
    List<E> findByQuery(String jpqlName, Object... params);
                                        // finds all instances from a named jpql-query
}


