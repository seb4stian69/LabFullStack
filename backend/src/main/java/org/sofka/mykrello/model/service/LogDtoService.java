package org.sofka.mykrello.model.service;

import org.sofka.mykrello.model.domain.LogDto;
import org.sofka.mykrello.model.repository.LogDtoRepository;
import org.sofka.mykrello.model.service.interfaces.LogDtoInterface;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

<<<<<<< HEAD
<<<<<<< HEAD

@Service
public class LogDtoService implements LogDtoInterface {

    @Autowired
    private LogDtoRepository logDtoRepository;

=======
=======
>>>>>>> testBranch
/**
 * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
 * @Description Clase tipo Servicio para el manejo del log
 * @Anotation Service
 */
@Service
public class LogDtoService implements LogDtoInterface {

    /**
     * Repositorio de LogDto
     */
    @Autowired
    private LogDtoRepository logDtoRepository;

    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Devuelve una lista de Log
     * @return listado de Log
     */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
    public List<LogDto> findAll(){
        return logDtoRepository.findAll();
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Devuelve un Log de acuerdo al id
     * @param id Identificador del Log
     * @return Log
     ** @Anotation Override
     */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
    @Override
    public LogDto findById(Integer id) {
        Optional<LogDto> log = logDtoRepository.findById(id);
        return log.orElse(null);
    }
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch

    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Crea un Log de acuerdo a la informacion entregada
     * @param log Informacion del Log
     * @return Log
     ** @Anotation Override
     */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
    @Override
    public LogDto create(LogDto log) {
        return logDtoRepository.save(log);
    }

<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> testBranch
    /**
     * @Author [Julian Lasso] - Sebastian santis - Sebastian Torres
     * @Description Actualiza un Log de acuerdo a la informacion entregada
     * @param log Informacion del Log
     * @return Log
     ** @Anotation Override
     */
<<<<<<< HEAD
>>>>>>> bc3cc6e57c59a282a9ff5ef62afa61622603c445
=======
>>>>>>> testBranch
    @Override
    public LogDto update(LogDto log) {
        return logDtoRepository.save(log);
    }
}
