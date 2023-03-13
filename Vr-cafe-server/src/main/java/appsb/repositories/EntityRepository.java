package appsb.repositories;

import java.util.List;

public interface EntityRepository<E> {
    List<E> findAll();           // finds all available instances
}

