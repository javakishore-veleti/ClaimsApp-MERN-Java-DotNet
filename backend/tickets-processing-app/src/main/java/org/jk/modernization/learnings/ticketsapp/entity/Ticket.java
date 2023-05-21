package org.jk.modernization.learnings.ticketsapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.*;

@Entity
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Ticket {

    // designed for UUID
    @Id
    private String id;

    @Column(name = "name")
    private String name;

    @Column(name = "description")
    private String description;

    @Override
    public boolean equals(Object o) {
        if (o == null || this.getClass() != o.getClass()) {
            return false;
        }
        Ticket other = (Ticket) o;
        return other.id.equals(this.id);
    }

    @Override
    public int hashCode() {
        return java.util.Objects.hashCode(id);
    }

}
