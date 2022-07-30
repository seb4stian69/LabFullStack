package org.sofka.mykrello.model.repository;

import org.sofka.mykrello.model.domain.LogDto;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LogDtoRepository extends JpaRepository<LogDto, Integer> {

}
