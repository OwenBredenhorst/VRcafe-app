package vrcafe.repositories;


import org.springframework.stereotype.Repository;
import vrcafe.models.Order;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 *
 * Class for all the Order attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


@Repository
public class OrderInMemoryRepository {

    private static int OrderCount = 0;
    private final List<Order> orders;

    public OrderInMemoryRepository() {
        orders = new ArrayList<Order>();
        generateOrders();
    }

    private void generateOrders() {
    }

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */

    public List<Order> getAll() {
        return orders;
    }

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */

    public Order deleteById(int id) throws Exception {
        Iterator<Order> iterator = orders.iterator();
        while (iterator.hasNext()) {
            Order order = iterator.next();

            if (order.getId() == id) {
                iterator.remove();
                return order;
            }
        }
        return null;
    }




    public Order save(Order object) {
        if (object.getId() == null) {
            synchronized (OrderInMemoryRepository.class) {
                object.setId(++OrderCount);
            }
        }

        int pos = orders.indexOf(object);

        if(pos == -1) {
            orders.add(object);
        } else {
            orders.set(pos,object);
        }

        return object;
    }

    /**
     * Find a T by its ID.
     *
     * @param id The id of the object you want to find.
     * @return The object of the type T that has the id that was passed in.
     */

    public Order findByID(int id) {
        for(Order o : orders) {
            if(o.getId() == id) {
                return o;
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

    public List<Order> findAllByID(int id) {
        return null;
    }


}

