package appsb.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import appsb.models.Book;
import appsb.repositories.EntityRepository;
import java.util.List;

@RestController
@RequestMapping("/books")
public class BooksController {

    @Autowired
    EntityRepository<Book> booksRepo;

    @GetMapping(path = "test", produces = "application/json")
    public List<Book> getTestBooks() {
        return List.of(
                new Book(11, "Test-book-A"),
                new Book(12, "Test-book-B"));
    }

    @GetMapping(path = "", produces = "application/json")
    public List<Book> getAllBooks() {
        return this.booksRepo.findAll();
    }
}
