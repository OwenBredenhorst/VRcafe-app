package vrcafe.repositories;

import vrcafe.models.Author;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository("AUTHORS.INMEMORY")
public class AuthorsInMemoryRepository
        implements EntityRepository<Author> {

    private long lastId = 80000L;
    private List<Author> authors;

    static Random randomizer = new Random();
    // manage the generation of a semi-random sequence of id-s
    private long getNextId() {
        this.lastId += 1 + randomizer.nextInt(5);
        return this.lastId;
    }

    public AuthorsInMemoryRepository() {
        this.authors = new ArrayList<>();
        // TODO use the Author.createSample method to initialise some 10 authors here with realistic info
        //  this is only for easy testing purposes now

        for (int i = 0; i < 10; i++) {
            this.authors.add(Author.createSample(getNextId()));
        }
    }

    @Override
    public List<Author> findAll() {
        return this.authors;
    }

    @Override
    public Author findById(long id) {
        return this.authors.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    @Override
    public Author save(Author entity) {
        // TODO
        return null;
    }

    @Override
    public Author deleteById(long id) {
        // TODO fix below code to actually delete the author from the list
        Author author = this.findById(id);
        author.setLastName("Delete this author");
        author.setInitials("TO.DO.");
        return author;
    }
}
