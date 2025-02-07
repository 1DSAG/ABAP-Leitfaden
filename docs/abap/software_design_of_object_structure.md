---
layout: page
title: Design und Erstellung von ABAP Entwicklungen mit ABAP OO
permalink: /abap/software_design_of_object_structur/
parent: Moderne ABAP Entwicklung
nav_order: 3
---

{: .no_toc}
# Design und Erstellung von ABAP Entwicklungen mit ABAP OO

1. TOC
{:toc}


* Was ist eine Klasse
* Eigenschaften einer guten Klasse
* Wie werden Klassen instantiiert
* Aufteilung der Funktionen auf einzelne Klassen
* Namenskonventionen
* Fehlerbehandlung mit Exceptions
* Delegieren statt vererben
* Nutzung von Interfaces



# Testbarkeit als Designprinzip - später
Im klassischen ABAP-Umfeld besteht die Vorgehensweise klassischerweise darin, dass zeitnah eine Entwicklung durch die Entwickler bereitgestellt werden und sobald als möglich die Tests durch die Entwickler und die Fachabteilung erfolgt. Beim Auftreten eines Fehlers oder Defekts wird dann die Entwicklung korrigiert und weitere Anpassungen vorgenommen. Dies kann dann zu zahlreichen Zyklen von Entwicklung - Test - Korrektur - Test usw. führen. Tests einzelner Komponenten ist entweder schwierig oder bedingt durch die monolithische Anwendungsstruktur nicht möglich. Daher können hier auch nur vollständige Funktions- oder gar Prozesstests mit entsprechend hohem Aufwand durchgeführt werden. Dabei kann nicht ausgeschlossen werden, dass einige Fehler erst im Rahmen des Produktivbetriebes erkannt werden, da auf Testsystem weder die kompletten Prozessdaten vorhanden sind, weder die Masse an Transaktionen durchgeführt wird, noch die Varianz an Transaktionsausführung vorhanden ist. Daher sollte dieses Vorgehen vermieden werden.  
Moderne Softwareentwicklung bietet mittels moderner Softwarearchitektur das Testing in die frühe Phase der Softwareerstellung zu verschieben und Fehler frühzeitig zu finden.
Ziel einer modernen Anwendungsarchitektur ist es, eine Anwendung in kleine, abgrenzbare und testbare Komponenten aufzuteilen. Diese werden in entsprechenden Unterpaketen des Anwendungspaketes gekapselt. Da diese Komponenten kaum manuell testbar sind, ist hier UNIT Testing mit ABAP UNIT einzusetzen. Dies erfordert aber eine gute Strukturierung und weitere Hilfspakete, die Testfunktionalitäten bereitstellen.


Bei der modernen Entwicklungsmethodik werden potenzielle Fehler bereits in der Designphase betrachtet, das gewünschte Programmverhalten definiert und evtl. Problematiken im Vorfeld mit dem Anforderer besprochen.



{: .note }
SOLID: Beschreibung hat Lukas schon - kann ich hier rüberziehen !