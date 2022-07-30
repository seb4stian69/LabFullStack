package org.sofka.mykrello.controller;

import org.sofka.mykrello.model.domain.LogDomain;
import org.sofka.mykrello.model.domain.LogDto;
import org.sofka.mykrello.model.domain.TaskDomain;
import org.sofka.mykrello.model.service.LogDtoService;
import org.sofka.mykrello.model.service.LogService;
import org.sofka.mykrello.utilities.MyResponseUtility;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(value = "*")
@RestController
public class LogController {

    @Autowired
    private MyResponseUtility response;

    @Autowired
    private LogService logService;

    @Autowired
    private LogDtoService logDtoService;

    @GetMapping(path = "/log")
    public ResponseEntity<MyResponseUtility> get(){
        response.data = logService.findAll();
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @GetMapping(path = "/log/{id}")
    public ResponseEntity<MyResponseUtility> getById(@PathVariable("id") Integer id){
        response.data = logService.findById(id);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping(path= "/log")
    public ResponseEntity<MyResponseUtility> post(@RequestBody LogDto log){
        response.data = logDtoService.create(log);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }

    @PutMapping(path= "/log/{id}")
    public ResponseEntity<MyResponseUtility> put(@PathVariable("id") Integer id, @RequestBody LogDto log){
        LogDto logUpdate = logDtoService.findById(id);

        logUpdate.setTaskId(log.getTaskId());
        logUpdate.setColumnaPrevious(log.getColumnaPrevious());
        logUpdate.setColumnaCurrent(log.getColumnaCurrent());


        response.data = logDtoService.update(logUpdate);
        return new ResponseEntity<>(response, HttpStatus.CREATED);
    }


    @DeleteMapping(path = "/log/{id}")
    public ResponseEntity<MyResponseUtility> delete(@PathVariable("id") Integer id){

        response.data =  logService.findById(id);
        logService.delete(id);
        return new ResponseEntity<>(response, HttpStatus.OK);

    }
}
