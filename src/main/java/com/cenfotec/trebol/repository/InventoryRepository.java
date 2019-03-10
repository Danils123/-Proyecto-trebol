package com.cenfotec.trebol.repository;

import com.cenfotec.trebol.domain.Inventory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

/**
 * Spring Data  repository for the Inventory entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InventoryRepository extends JpaRepository<Inventory, Long> {

    @Query(value = "select distinct inventory from Inventory inventory left join fetch inventory.products",
        countQuery = "select count(distinct inventory) from Inventory inventory")
    Page<Inventory> findAllWithEagerRelationships(Pageable pageable);

    @Query(value = "select distinct inventory from Inventory inventory left join fetch inventory.products")
    List<Inventory> findAllWithEagerRelationships();

    @Query("select inventory from Inventory inventory left join fetch inventory.products where inventory.id =:id")
    Optional<Inventory> findOneWithEagerRelationships(@Param("id") Long id);

}
