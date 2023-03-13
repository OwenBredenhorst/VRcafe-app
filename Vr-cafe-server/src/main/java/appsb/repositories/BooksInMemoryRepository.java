package appsb.repositories;

import org.springframework.stereotype.Repository;
import appsb.models.Book;

import java.util.List;

@Repository("BOOKS.INMEMORY")
public class BooksInMemoryRepository
        implements EntityRepository<Book> {

    private List<Book> books;

    public BooksInMemoryRepository() {
        // TODO use the Book.createSample method to initialise some 10 books here with realistic info
        this.books = List.of(new Book(20001L, "Sample-book-1"), new Book(20002L, "Sample-book-2"));
    }

    @Override
    public List<Book> findAll() {
        return this.books;
    }
}
