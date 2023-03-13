package nowel.vrcafe.server.model;

import org.springframework.data.annotation.Id;


import java.util.concurrent.atomic.AtomicInteger;

/**
 *
 * Class for all the Achievement attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


public class Achievement {

    private static final AtomicInteger idGenerator = new AtomicInteger(0);
    @Id
    private Integer id;
    private String title;
    private String description;
    private String img;

    public Achievement(Integer id, String title, String description, String img) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.img = img;
    }

    public Achievement() {}

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }
}



