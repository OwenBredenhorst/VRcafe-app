package vrcafe.repositories;

import vrcafe.models.Author;
import vrcafe.models.Book;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

@Repository("BOOKS.INMEMORY")
public class BooksInMemoryRepository
        implements EntityRepository<Book> {

    private long lastId = 30000L;
    private List<Book> books;

    static Random randomizer = new Random();
    // manage the generation of a semi-random sequence of id-s
    private long getNextId() {
        this.lastId += 1 + randomizer.nextInt(3);
        return this.lastId;
    }

    private final EntityRepository<Author> authorsRepo;

    // Here we use the pattern of constructor injection of the authorsRepo,
    // because we want to use the authorsRepo within the constructor of the booksRepo
    @Autowired
    public BooksInMemoryRepository(EntityRepository<Author> authorsRepo) {
        this.authorsRepo = authorsRepo;
        this.books = new ArrayList<>();

        // TODO use the Book.createSample method to initialise some 10 books here with realistic info
        //  using the authors that are available from the authorsRepo
        //  this is only for easy testing purposes now

        // Get the available authors from the authors repo
        List<Author> authors = this.authorsRepo.findAll();
        for (int i = 0; i < 10; i++) {
            Author author = authors.size() > 0 ? authors.get(randomizer.nextInt(authors.size())) : null;
            // create a sample book for a random author
            this.books.add(Book.createSample(getNextId(),author));
        }
    }

    @Override
    public List<Book> findAll() {
        return this.books;
    }

    @Override
    public Book findById(long id) {
        return this.books.stream().filter(b -> b.getId() == id).findFirst().orElse(null);
    }

    @Override
    public Book save(Book entity) {
        // TODO
        return null;
    }

    @Override
    public Book deleteById(long id) {
        // TODO fix below code to actually delete the book from the list
        Book book = this.findById(id);
        book.setTitle("TODO...truly delete this book");
        return book;
    }
}
