---
layout: page
title: Design und Erstellung von ABAP Entwicklungen mit ABAP OO
permalink: /abap/software_design_of_object_structur/
parent: Moderne ABAP Entwicklung
nav_order: 3
---

{: .no_toc}
# Design und Erstellung von ABAP-Entwicklungen mit ABAP OO

1. TOC
{:toc}

## Moderne Geschäftsanwendungen erfordern moderne Softwareentwicklungsmethoden

Geschäftsanwendungen in der klassischen ABAP Entwicklung wurden oft mit Reports erstellt, die durch komplexe, prozedurale Kontrollstrukturen geprägt waren. Modularisierung erfolgte mittels Form-Routinen oder für Wiederverwendung mit Funktionsbausteinen. Bei guter Planung waren Funktionsgruppen nicht überladen, sondern für spezifische und zusammengehörige Funktionen gebildet. Mit der Anzahl der vorgenommenen Änderungen wurden diese Anwendung immer komplexer, fehleranfälliger und immer schwerer zu warten. 

Die moderne ABAP-Entwicklungsweld ist ungleich komplexer und heterogener geworden als sie es zu Zeiten vor S/4HANA war. An moderne Anwendungen werden heute hohe Anforderungen gestellt. Sie sollen flexibel, die Anforderungen bestens erfüllen, schnell umgesetzt werden und robust, performant und fehlerfrei im Betrieb laufen.

Schon seit vielen Jahren gibt es in ABAP die Möglichkeit objektorientiert zu programmieren. Auch wenn dies anfangs noch nicht erforderlich war, ist es heute einerseits technisch notwendig, wenn neue Möglichkeiten genutzt werden sollen, Andererseits bietet die Methodik der Objektorientierung sehr viele gute Ansätze Geschäftsanwendung so zu entwickeln, dass sie flexibel, wartbar, erweiterbar und robust umgesetzt werden. Und durch die Nutzung von ABAP-Unit und eines guten Designs, können zahlreiche Tests bereits als UNIT Tests abgedeckt werden womit das Testen durch den Endanwender auf die TEstung des Prozesses und der Funktion reduziert werden kann.

Die Objektorientierung und die zahlreichen Möglichkeiten des modernen ABAP können wir in diesem Leitfaden nicht abhandeln, möchten Ihnen aber bezüglich des Vorgehens ein paar Hineweise geben, die den Einstieg erleichtern und einen Überblick über Handlungsfelder geben, die schnell zu Verbesserungen führen können.

## Grundsätzliches zur Entwicklung mit ABAP OO

### Was ist eine ABAP-OO Klasse und wann ist es objektorientierte Entwicklung
Eine ABAP-Klasse besteht aus Attributen, die Werte speichern können oder Konstanten sein können. Man kann auch Klassenspezifische Typen definieren. Es es gibt Methoden, die Funktionen implementieren und in Public, Protected und Private Methoden unterteilt sind. Darüber hinaus definieren Klassen weitergehende Eigenschaften wie Paketzugehörigkeit und die Art der Instanziierbarkeit und ggf. Vererbungsinformationen.
Oft werden ABAP-Klassen als eine moderne Form von Funktiosnbausteinen betrachtet, dieser Vergleich wird den Möglichkeiten einer Klasse nicht gerecht.
Der Entscheidende Unterschied ist die Instanziierbarkeit, d.h. es könne für Klassen mehrere Objekte im gleichen Programmkontext erzeugt werden. 
Bei einer Klasse, die nur statische Methoden beinhaltet und in der Verwendung nicht instanziiert wird, handelt es sich so nicht bereits um vollumfängliche Objektorientierte PRogrammiermethodik.




* Was ist eine Klasse
* Eigenschaften einer guten Klasse
* Wie werden Klassen instantiiert
* Aufteilung der Funktionen auf einzelne Klassen
* Namenskonventionen
* Fehlerbehandlung mit Exceptions
* Delegieren statt vererben
* Nutzung von Interfaces



# Testbarkeit als Designprinzip - später
Wer UNTI Test methodik anwendet, schreibt die Tests, der Produktcode ist dann quasi automatisch da und viel besser da besser durchdacht.
...
Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt. Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden. Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist. Daher sollte dieses Vorgehen vermieden werden.  
Moderne Softwareentwicklung bietet mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.


Bei der modernen Entwicklungsmethodik werden potenzielle Fehler bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.



{: .note }
SOLID: Beschreibung hat Lukas schon - kann ich hier rüberziehen !