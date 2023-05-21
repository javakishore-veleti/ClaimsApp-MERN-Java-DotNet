package org.jk.modernization.learnings.ticketsapp.service;

import org.jk.modernization.learnings.ticketsapp.entity.Ticket;

import java.util.List;

public interface TicketCrudService {

    Ticket create(Ticket ticket);

    Ticket getTicketById(String id);

    List<Ticket> getAllTickets();

    void deleteTicketById(String id);

}
