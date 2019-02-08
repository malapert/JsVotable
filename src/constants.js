/*******************************************************************************
 * Copyright 2016-2019 - Jean-Christophe Malapert
 *
 * This file is part of JsVotable.
 *
 * JsVotable is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * JsVotable is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with JVotable.  If not, see <http://www.gnu.org/licenses/>.
 ******************************************************************************/
define(function() {
    var Constants = function() {};

    /**
     * @namespace
     * API
     * @property {string} version - API version
     */    
    Constants.API = {
        version: "[VERSION_API]"
    };

    /**
     * @namespace
     * TAG
     * @property {string} BINARY - BINARY tag
     * @property {string} BINARY2 - BINARY2 tag
     * @property {string} COOSYS - COOSYS tag
     * @property {string} DATA - DATA tag
     * @property {string} DEFINITIONS - DEFINITIONS tag  
     * @property {string} DESCRIPTION - DESCRIPTION tag
     * @property {string} FIELD - FIELD tag
     * @property {string} FIELDref - FIELDref tag
     * @property {string} FITS - FITS tag
     * @property {string} GROUP - GROUP tag
     * @property {string} INFO - INFO tag
     * @property {string} VOTABLE - VOTABLE tag
     * @property {string} LINK - LINK tag
     * @property {string} MAX - MAX tag
     * @property {string} MIN - MIN tag
     * @property {string} OPTION - OPTION tag
     * @property {string} PARAM - PARAM tag
     * @property {string} PARAMref - PARAMref tag
     * @property {string} RESOURCE - RESOURCE tag
     * @property {string} STREAM - STREAM tag
     * @property {string} TABLE - TABLE tag
     * @property {string} TABLEDATA - TABLEDATA tag
     * @property {string} TR - TR tag
     * @property {string} TD - TD tag
     * @property {string} VALUES - VALUES tag               
     */    
    Constants.TAG = {
        BINARY: "BINARY",
        BINARY2: "BINARY2",
        COOSYS: "COOSYS",
        DATA: "DATA",
        DEFINITIONS: "DEFINITIONS",
        DESCRIPTION: "DESCRIPTION",
        FIELD: "FIELD",
        FIELDref: "FIELDref",
        FITS: "FITS",
        GROUP: "GROUP",
        INFO: "INFO",
        VOTABLE: "VOTABLE",
        LINK: "LINK",
        MAX: "MAX",
        MIN: "MIN",
        OPTION: "OPTION",
        PARAM: "PARAM",
        PARAMref: "PARAMref",
        RESOURCE: "RESOURCE",
        STREAM: "STREAM",
        TABLE: "TABLE",
        TABLEDATA: "TABLEDATA",
        TD: "TD",
        TR: "TR",
        VALUES: "VALUES"
    }

    return Constants;
})    