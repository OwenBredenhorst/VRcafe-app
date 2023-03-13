package vrcafe.repositories;


import org.springframework.stereotype.Repository;
import vrcafe.models.Post;

import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Random;

/**
 *
 * Class for all the Post attributes
 *
 * @author  Owen Bredenhorst
 * @version 1.0
 * @since   05/3/2023
 */


@Repository
public class PostInMemoryRepository  {

    private static int postCount = 0;
    private final List<Post> posts;

    public PostInMemoryRepository() {
        posts = new ArrayList<Post>();
        generateUser();
    }

    private void generateUser() {
        Random rand = new Random();

        for (int i = 1; i <= 2; i++) {
            String title = "Title " + i + " of card";
            String description = "This is a description of post " + i;
            String imageUrl = "https://www.vrcafehaarlem.nl/wp-content/uploads/2021/06/vrcafe-1.jpeg";
            save(new Post(null, title, description, imageUrl));
        }
    }

    /**
     * Get all the things.
     *
     * @return A list of all the objects in the database.
     */

    public List<Post> getAll() {
        return posts;
    }

    /**
     * Delete the object with the given id from the database and return it.
     *
     * @param id The id of the object to be deleted.
     * @return The object that was deleted.
     */

    public Post deleteById(int id) throws Exception {
        Iterator<Post> iterator = posts.iterator();
        while (iterator.hasNext()) {
            Post post = iterator.next();

            if (post.getId() == id) {
                iterator.remove();
                return post;
            }
        }
        return null;
    }




    public Post save(Post object) {
        if (object.getId() == null) {
            synchronized (PostInMemoryRepository.class) {
                object.setId(++postCount);
            }
        }

        int pos = posts.indexOf(object);

        if(pos == -1) {
            posts.add(object);
        } else {
            posts.set(pos,object);
        }

        return object;
    }

    /**
     * Find a T by its ID.
     *
     * @param id The id of the object you want to find.
     * @return The object of the type T that has the id that was passed in.
     */

    public Post findByID(int id) {
        for(Post p : posts) {
            if(p.getId() == id) {
                return p;
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

    public List<Post> findAllByID(int id) {
        return null;
    }


}

