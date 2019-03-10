package com.cenfotec.trebol.domain;


import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Commerce.
 */
@Entity
@Table(name = "commerce")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Commerce implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "identification")
    private Integer identification;

    @Column(name = "name")
    private String name;

    @Column(name = "address")
    private String address;

    @Column(name = "latitude")
    private String latitude;

    @Column(name = "longitude")
    private String longitude;

    @Column(name = "email")
    private String email;

    @Column(name = "ranking")
    private Integer ranking;

    @Column(name = "photograph")
    private String photograph;

    @Column(name = "state")
    private Integer state;

    @Column(name = "phone")
    private String phone;

    @OneToOne
    @JoinColumn(unique = true)
    private Inventory inventory;

    @OneToOne
    @JoinColumn(unique = true)
    private ScheduleCommerce schedule;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getIdentification() {
        return identification;
    }

    public Commerce identification(Integer identification) {
        this.identification = identification;
        return this;
    }

    public void setIdentification(Integer identification) {
        this.identification = identification;
    }

    public String getName() {
        return name;
    }

    public Commerce name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getAddress() {
        return address;
    }

    public Commerce address(String address) {
        this.address = address;
        return this;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getLatitude() {
        return latitude;
    }

    public Commerce latitude(String latitude) {
        this.latitude = latitude;
        return this;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public Commerce longitude(String longitude) {
        this.longitude = longitude;
        return this;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }

    public String getEmail() {
        return email;
    }

    public Commerce email(String email) {
        this.email = email;
        return this;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Integer getRanking() {
        return ranking;
    }

    public Commerce ranking(Integer ranking) {
        this.ranking = ranking;
        return this;
    }

    public void setRanking(Integer ranking) {
        this.ranking = ranking;
    }

    public String getPhotograph() {
        return photograph;
    }

    public Commerce photograph(String photograph) {
        this.photograph = photograph;
        return this;
    }

    public void setPhotograph(String photograph) {
        this.photograph = photograph;
    }

    public Integer getState() {
        return state;
    }

    public Commerce state(Integer state) {
        this.state = state;
        return this;
    }

    public void setState(Integer state) {
        this.state = state;
    }

    public String getPhone() {
        return phone;
    }

    public Commerce phone(String phone) {
        this.phone = phone;
        return this;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public Inventory getInventory() {
        return inventory;
    }

    public Commerce inventory(Inventory inventory) {
        this.inventory = inventory;
        return this;
    }

    public void setInventory(Inventory inventory) {
        this.inventory = inventory;
    }

    public ScheduleCommerce getSchedule() {
        return schedule;
    }

    public Commerce schedule(ScheduleCommerce scheduleCommerce) {
        this.schedule = scheduleCommerce;
        return this;
    }

    public void setSchedule(ScheduleCommerce scheduleCommerce) {
        this.schedule = scheduleCommerce;
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
        Commerce commerce = (Commerce) o;
        if (commerce.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), commerce.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Commerce{" +
            "id=" + getId() +
            ", identification=" + getIdentification() +
            ", name='" + getName() + "'" +
            ", address='" + getAddress() + "'" +
            ", latitude='" + getLatitude() + "'" +
            ", longitude='" + getLongitude() + "'" +
            ", email='" + getEmail() + "'" +
            ", ranking=" + getRanking() +
            ", photograph='" + getPhotograph() + "'" +
            ", state=" + getState() +
            ", phone='" + getPhone() + "'" +
            "}";
    }
}
