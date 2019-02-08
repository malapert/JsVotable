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

    Constants.API = {
        version: "[VERSION_API]"
    };

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