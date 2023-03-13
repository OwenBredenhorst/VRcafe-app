package vrcafe.models;


import java.util.Date;
import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * Class for all the Order attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


public class Order {

    private static final AtomicInteger idGenerator = new AtomicInteger(0);

    private Integer id;
    private String product;
    private double price;
    private Date date;

    public Order(Integer id, String product, double price, Date date) {
        this.id = id;
        this.product = product;
        this.price = price;
        this.date = date;
    }

    public Order() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getProduct() {
        return product;
    }

    public void setProduct(String product) {
        this.product = product;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }
}
