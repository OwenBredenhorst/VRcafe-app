package vrcafe.models;



import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * Class for all the Coupon attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


public class Coupon {

    private static final AtomicInteger idGenerator = new AtomicInteger(0);
    private Integer id;
    private String amount;
    private String description;
    private String kind;
    private String barcode;

    public Coupon(Integer id, String amount, String description, String kind, String barcode) {
        this.id = id;
        this.amount = amount;
        this.description = description;
        this.kind = kind;
        this.barcode = barcode;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAmount() {
        return amount;
    }

    public void setAmount(String amount) {
        this.amount = amount;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getKind() {
        return kind;
    }

    public void setKind(String kind) {
        this.kind = kind;
    }

    public String getBarcode() {
        return barcode;
    }

    public void setBarcode(String barcode) {
        this.barcode = barcode;
    }
}
