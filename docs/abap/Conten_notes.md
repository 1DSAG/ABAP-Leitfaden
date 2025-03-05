---
layout: page
title: Notizzettel und ToDos im ABAP Kapitel + Parkplatz
permalink: /abap/Content_notes/
parent: Moderne ABAP Entwicklung
nav_order: 7
---


**Notizen und Inhaltsplanung**
 Strukturierung:  


# Design for testability
check ob nicht voll in Test schon drin ... Connect Design zu test ... noch checken.  
Passt gut zu Softwaredesign (OO) Abschnitt - Aber nur Basis und Verweis auf Testkapitel ...
 
*** TEXTSAVER ****
# Testbarkeit - besserer Titel und Bezug zum Testkapitel herstellen - ist mehr Teaser hier
Wenn die Grundlagen einer guten Softwarearchitektur und eines guten Designs gegeben sind, sind auch die Voraussetzungen gegeben um die Methodik des Unit Tests anzuwenden.  Ein Punkt der oft verhindert ABAP-UNIT einzusetzen ist neben mangelnder OO Kenntnisse das Problem des Zeitaufwands und der Diskrepanz der zur Verfügung stehenden Zeit. Hier erfordert es einige Anstrengungen, gute Kenntnisse und hohe Motivation im Entwicklerteam um UNIT Tests nicht nur vereinzelt anzuwenden.  

Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt.  
Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden.   
Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist.
Daher sollte dieses Vorgehen vermieden werden.   

Moderne Softwareentwicklung bietet die Möglichkeit mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden. potenzielle Fehler werden bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.

Das Schreiben der UNIT-Tests und der benötigten Mocks und Testdaten erfordert einiges an Aufwand. Die Bereitstellung einer testbaren Version verzögert sich durch den Aufwand der sich durch die Erstellung des Objektgeflechts und der Testartefakte ergeben.    

Im Gegenzug entsteht der sogenannte Produktcode, der die Logik enthält anschließend fast von selbst. Die Erkenntnisse, die sich beim Design der Testdaten und der Tests ergeben, führen dazu, dass viele Situationen und Fragestellungen der Anwendung sich schon frühzeitig ergeben und vorab geklärt werden und über die automatisieren Tests abgedeckt werden können. Viele Fehler werden frühzeitig während der Entwicklung entdeckt und behoben und müssen nicht erst durch die Fachabteilung entdeckt werden. Die Anwendung wird damit robuster und ausgereifter als sie es ohne die Unit Test Erstellung wäre und somit entfallen auch zahlreiche Transportzyklen von Entwicklungs- in Test- oder gar Produktivsysteme.
