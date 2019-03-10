package com.cenfotec.trebol.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A ScheduleCommerce.
 */
@Entity
@Table(name = "schedule_commerce")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class ScheduleCommerce implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "day")
    private String day;

    @Column(name = "open_time")
    private String openTime;

    @Column(name = "closing_time")
    private String closingTime;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getDay() {
        return day;
    }

    public ScheduleCommerce day(String day) {
        this.day = day;
        return this;
    }

    public void setDay(String day) {
        this.day = day;
    }

    public String getOpenTime() {
        return openTime;
    }

    public ScheduleCommerce openTime(String openTime) {
        this.openTime = openTime;
        return this;
    }

    public void setOpenTime(String openTime) {
        this.openTime = openTime;
    }

    public String getClosingTime() {
        return closingTime;
    }

    public ScheduleCommerce closingTime(String closingTime) {
        this.closingTime = closingTime;
        return this;
    }

    public void setClosingTime(String closingTime) {
        this.closingTime = closingTime;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        ScheduleCommerce scheduleCommerce = (ScheduleCommerce) o;
        if (scheduleCommerce.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), scheduleCommerce.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "ScheduleCommerce{" +
            "id=" + getId() +
            ", day='" + getDay() + "'" +
            ", openTime='" + getOpenTime() + "'" +
            ", closingTime='" + getClosingTime() + "'" +
            "}";
    }
}
