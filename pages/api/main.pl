:- use_module(library(clpz)).
:- use_module(library(serialization/json)).

jsonRes(X, JsonString) :- phrase(json_chars(pairs([string("Result")-number(X)])), JsonString), !.

numFind(Max) :- X #> 0, X #< Max, indomain(X), jsonRes(X, JsonString), write(JsonString), nl.