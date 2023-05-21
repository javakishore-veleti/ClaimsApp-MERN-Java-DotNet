package org.jk.modernization.learnings.ticketsapp.api;

import org.jk.modernization.learnings.ticketsapp.entity.Ticket;
import org.jk.modernization.learnings.ticketsapp.service.TicketCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "/api/tickets-app/tickets/crud", produces = "application/json", consumes = "application/json")
public class TicketCrudController {

    @Autowired
    private TicketCrudService ticketCrudService;

    @RequestMapping(path = "create")
    public ResponseEntity<Ticket> create(@RequestBody Ticket ticket) {
        ticket = ticketCrudService.create(ticket);
        return ResponseEntity.ok(ticket);
    }

    @RequestMapping(path = "getAll")
    public ResponseEntity<List<Ticket>> getAll() {
     return ResponseEntity.ok(ticketCrudService.getAllTickets());
    }

    @RequestMapping(path = "getById/{id}")
    public ResponseEntity<Ticket> getById(@PathVariable("id")String id) {
        return ResponseEntity.ok(ticketCrudService.getTicketById(id));
    }

    @RequestMapping(path = "deleteById/{id}")
    public ResponseEntity<Boolean> deleteById(@PathVariable("id")String id) {
        ticketCrudService.deleteTicketById(id);
        return ResponseEntity.ok(Boolean.TRUE);
    }
}
