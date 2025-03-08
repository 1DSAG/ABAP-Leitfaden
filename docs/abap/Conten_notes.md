---
layout: page
title: Peters ToDO / Vorschläge / Cross References / Parkplatz
permalink: /abap/Content_notes/
parent: Moderne ABAP Entwicklung
nav_order: 7
---


## Parkplatz

*** TEXTSAVER - ****



### ABGLEICH TEST Kapitel ob dort was fehlt

Moderne Softwareentwicklung bietet die Möglichkeit mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden. potenzielle Fehler werden bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.

Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt.  
Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden.   
Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist.
Daher sollte dieses Vorgehen vermieden werden.

Moderne Softwareentwicklung bietet die Möglichkeit mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden. potenzielle Fehler werden bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.

Das Schreiben der UNIT-Tests und der benötigten Mocks und Testdaten erfordert einiges an Aufwand. Die Bereitstellung einer testbaren Version verzögert sich durch den Aufwand der sich durch die Erstellung des Objektgeflechts und der Testartefakte ergeben.

Im Gegenzug entsteht der sogenannte Produktcode, der die Logik enthält anschließend fast von selbst. Die Erkenntnisse, die sich beim Design der Testdaten und der Tests ergeben, führen dazu, dass viele Situationen und Fragestellungen der Anwendung sich schon frühzeitig ergeben und vorab geklärt werden und über die automatisieren Tests abgedeckt werden können. Viele Fehler werden frühzeitig während der Entwicklung entdeckt und behoben und müssen nicht erst durch die Fachabteilung entdeckt werden. Die Anwendung wird damit robuster und ausgereifter als sie es ohne die Unit Test Erstellung wäre und somit entfallen auch zahlreiche Transportzyklen von Entwicklungs- in Test- oder gar Produktivsysteme.


## Reihenfolge der Kapitel:
Mein Vorschlag für die generelle Struktur:
- Einleitung - klar was sonst  

**Strategie Blocks**
- Organisation - Rahmenbedingungen und Grundsätze, die in den einzelnen Kapiteln wieder aufgegriffen werden
    Unterteilung in subfiles sinnvoll - Inhaltlich top !  
- Clean Core - Basis Strategie - wie und mit welchen Prinzipien will man entwicklen (wie clean)

**Moderne SAP Entwicklung - Technologien**
-    Core Data Service (vor ABAP, weil benötigt in ABAP zum Datenzugriff und anderes Programmiermodell) 
- ABAP -  Basis der Programmierung - Unterteilung in weitere Files wegen größe
- UI
- Testen - Software tests - braucht wiederum ABAP wegen OO und so
- Formulare
- Dokumentation - Doku der Entwicklung - ABAP DOC nich ausführlicher

**Übergreifende Themen**
- Software Lifecycle Management
    - ALM  (alm und VW mergen in Softwaremanagment)
    - Versionsverwaltung
- Open Source
- Integration
- Sicherheit
- KI
