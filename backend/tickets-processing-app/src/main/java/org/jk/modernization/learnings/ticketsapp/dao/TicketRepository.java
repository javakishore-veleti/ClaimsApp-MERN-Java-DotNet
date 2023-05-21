package org.jk.modernization.learnings.ticketsapp.dao;

import org.jk.modernization.learnings.ticketsapp.entity.Ticket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepository extends CrudRepository<Ticket, String> {
}
