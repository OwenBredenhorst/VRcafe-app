package nowel.vrcafe.server.repository;

import nowel.vrcafe.server.model.Coupon;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

/**
 *
 * Class for all the Coupon attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


@Repository
public class CouponDAO implements DAO<Coupon> {

    private static int CouponCount = 0;
    private final List<Coupon> coupons;

    public CouponDAO() {
        coupons = new ArrayList<Coupon>();
        generateCoupons();
    }

    private void generateCoupons() {
    }

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */
    @Override
    public List<Coupon> getAll() {
        return coupons;
    }

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */
    @Override
    public Coupon deleteById(int id) throws Exception {
        Iterator<Coupon> iterator = coupons.iterator();
        while (iterator.hasNext()) {
            Coupon coupon = iterator.next();

            if (coupon.getId() == id) {
                iterator.remove();
                return coupon;
            }
        }
        return null;
    }



    @Override
    public Coupon save(Coupon object) {
        if (object.getId() == null) {
            synchronized (CouponDAO.class) {
                object.setId(++CouponCount);
            }
        }

        int pos = coupons.indexOf(object);

        if(pos == -1) {
            coupons.add(object);
        } else {
            coupons.set(pos,object);
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
    public Coupon findByID(int id) {
        for(Coupon c : coupons) {
            if(c.getId() == id) {
                return c;
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
    public List<Coupon> findAllByID(int id) {
        return null;
    }


}

