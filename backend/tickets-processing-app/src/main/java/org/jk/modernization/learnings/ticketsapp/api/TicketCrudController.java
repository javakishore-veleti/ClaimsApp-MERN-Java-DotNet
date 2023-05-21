package org.jk.modernization.learnings.ticketsapp.api;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path = "/api/tickets-app/tickets/crud", produces = "application/json", consumes = "application/json")
public class TicketCrudController {
}
