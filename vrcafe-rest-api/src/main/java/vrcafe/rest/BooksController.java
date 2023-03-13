package vrcafe.rest;

import vrcafe.exceptions.ResourceNotFoundException;
import vrcafe.models.Book;
import vrcafe.models.ViewClasses;
import vrcafe.repositories.EntityRepository;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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

    @JsonView(ViewClasses.Summary.class)
    @GetMapping(path = "", produces = "application/json")
    public List<Book> getAllBooks() {
        return this.booksRepo.findAll();
    }

    @GetMapping(path = "{id}", produces = "application/json")
    public ResponseEntity<Book> getOneBook(@PathVariable() long id) {
        Book book = this.booksRepo.findById(id);

        if (book == null) {
            throw new ResourceNotFoundException("Cannot provide a book with id="+id);
        }

        return ResponseEntity.ok().body(book);
    }

    @DeleteMapping(path = "{id}", produces = "application/json")
    public Book deleteOneBook(@PathVariable() long id) {
        Book book = this.booksRepo.deleteById(id);

        if (book == null) {
            throw new ResourceNotFoundException("Cannot delete a book with id="+id);
        }

        return book;
    }
}
