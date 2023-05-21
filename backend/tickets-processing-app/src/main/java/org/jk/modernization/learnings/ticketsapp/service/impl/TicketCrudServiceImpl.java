package org.jk.modernization.learnings.ticketsapp.service.impl;

import org.jk.modernization.learnings.ticketsapp.dao.TicketRepository;
import org.jk.modernization.learnings.ticketsapp.entity.Ticket;
import org.jk.modernization.learnings.ticketsapp.service.TicketCrudService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class TicketCrudServiceImpl implements TicketCrudService {

    @Autowired private TicketRepository ticketRepository;
    @Override
    public Ticket create(Ticket ticket) {
        ticket.setId(UUID.randomUUID().toString());
        ticket = ticketRepository.save(ticket);
        return ticket;
    }

    @Override
    public Ticket getTicketById(String id) {
        return ticketRepository.findById(id).get();
    }

    @Override
    public List<Ticket> getAllTickets() {
        return (List<Ticket>) ticketRepository.findAll();
    }

    @Override
    public void deleteTicketById(String id) {
        ticketRepository.deleteById(id);
    }
}
