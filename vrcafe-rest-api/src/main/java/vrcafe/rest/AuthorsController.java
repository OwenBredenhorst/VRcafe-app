package vrcafe.rest;

import vrcafe.exceptions.ResourceNotFoundException;
import vrcafe.models.Author;
import vrcafe.models.ViewClasses;
import vrcafe.repositories.EntityRepository;
import com.fasterxml.jackson.annotation.JsonView;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/authors")
public class AuthorsController {

    @Autowired
    EntityRepository<Author> authorsRepo;

    @GetMapping(path = "test", produces = "application/json")
    public List<Author> getTestAuthors() {
        return List.of(
                new Author(11, "Test-author-A"),
                new Author(12, "Test-author-B"));
    }

    @JsonView(ViewClasses.Summary.class)
    @GetMapping(path = "", produces = "application/json")
    public List<Author> getAllAuthors() {
        return this.authorsRepo.findAll();
    }

    @GetMapping(path = "{id}", produces = "application/json")
    public ResponseEntity<Author> getOneAuthor(@PathVariable() long id) {
        Author author = this.authorsRepo.findById(id);

        if (author == null) {
            throw new ResourceNotFoundException("Cannot provide a author with id="+id);
        }

        return ResponseEntity.ok().body(author);
    }
}
