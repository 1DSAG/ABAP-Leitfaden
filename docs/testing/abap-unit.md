---
layout: page
title: ABAP Unit Framework
permalink: /testing/abap_unit/
parent: Testen
prev_page_link: /testing/
prev_page_title: Testen
next_page_link: /testing/other-test-tools/
next_page_title: Andere Test Tools
nav_order: 1
---

{: .no_toc}
# ABAP Unit Test

1. TOC
{:toc}


## ABAP Unit Tests
Dieses Kapitel handelt von automatisierten Entwicklertests (Unit Tests) und richtet sich an Programmierende jeglichen Niveaus als auch an managende und organisierende Personen. Jede Person, die in irgendeiner Form mit ABAP-Programmierungen in Berührung kommt, sollte wissen, was Unit Tests sind, wie sie eingesetzt werden und welche Grenzen sie haben.

Wenn im Folgenden von _Unit Tests_ die Rede ist, dann sind ABAP Unit Tests mit Hilfe des ABAP Unit Frameworks gemeint. Das ABAP bezieht sich lediglich auf die Besonderheiten von Unit Tests im SAP-Kontext.

### Einstieg

Unit Tests sind wichtig. Das Erstellen, Verwalten und Entwickeln von Unit Tests erfordert umfangreiche Kenntnisse, die über das reine schreiben von ABAP hinaus gehen. Das widerspricht der Aussage, dass sich dieses Kapitel an alle Programmierende richtet, unabhängig vom Wissensstand. Das ist jedoch nur auf den ersten Blick widersprüchlich, denn wir wollen mit diesem Kapitel alle erreichen. Wenn jemand noch nicht gut oder gar nicht objektorientiert programmieren kann, sich nicht mit Entwurfsmustern und anderen Programmierparadigmen auskennt, dann sollte das gelernt werden. Unit Test können eine gute Umgebung darstellen Techniken zu erlenen und diese anschließend auf den Produktiven Code zu übertragen.
Wir wollen Anregungen und Hilfestellungen dazu geben. Gleichwohl können wir an dieser Stelle nur begrenzt Informationen zu diesem Thema bereitstellen.


#### Skills die beim Arbeiten mit Unit Tests trainiert werden
 - Objekrientiertes Desing z.B. Lose Kopplung
 - erstellen von testbaren Designs (IoC & DI)
 - Agile Prinzipien und Methoden der Software Entwicklung z.B. ( S.O.L.I.D )
 - Test Prinzipien ( F.I.R.S.T )
 - Erstellen von keinen Einheiten


#### TDD
Wenn das Stichwort "Unit Tests" fällt, kommt es fast unweigerlich auch zu dem Thema _Test Driven Development_, kurz _TDD_. TDD ist ein Programmiervorgehen, bei dem - vereinfacht - zuerst definiert wird, welche Eingaben einer Funktion zu welchen Ergebnissen führen soll. Erst danach wird die Implementierung der Funktion realisiert. Durch das zuvor defnierte Verhalten kann überpfüt werden, ob die gewünschte Funktionalität gegeben ist.

Es geht an dieser Stelle explizit nicht um die Methode Test Driven Development. Unit Tests können auch dann sinnvoll eingesetzt werden, wenn nicht nach dieser Methode vorgegangen wurde. Das wichtigste ist aus unserer Sicht das Verständnis, wie Unit Tests funktionieren und welche wichtigkeit sie haben.

### Motivation
Unit Tests helfen dabei, Entwicklungen robuster zu machen. Programmierungen werden dabei automatisiert mit verschiedenen Parametern ausgeführt und auf Korrektheit überprüft. Robustheit und Korrektheit sind zwei Anforderungen, die in der modernen Softwareprogrammierung sehr hoch priorisiert werden sollten. Durch Unit Tests kann automatisiert sichergestellt werden, dass geschäftskritische Prozesse wie erwartet ausgeführt werden. 

<<-Warum beschäftigen wir uns mit Unit-Tests? 
 - Geschäftskritikalität.>>
 << Unit Test sind der Treiber für Agile Software Entwicklung und schnelle Änderungen => da sie sicherheit geben. >>

Die Entwicker die schon einmal eine Änderung an einem Programm gemacht haben und ganz langsamm vorsichtig rückwärts wieder raus aus dem Code gegangen sind wissen was es bedeutet, wenn ein Programm nicht wartbar ist. 
"Hoffentlich funktiniert noch alles und ich habe nichts kaputt gemacht" Mit jeder dieser Änderungen wird das Programm immer weniger wartbar, weil sich niemand mehr traut Verbesserungen an der Struktur durch zu führen. 
Unit Test bilden hier eine enorme Unterstützung, da sie die Möglichkeit für den Entwickler schaffen zu prüfen, dass alle bisherigen Anforderungen noch wie angefordert funktionieren. 


### Was sind Unit Test nun genau?
Unit Tests sind Funktionen, die modularisierte Einheiten (Methoden, Funktionsbausteine) oder ganze Prozesse mit vorgegebenen Funktionen aufrufen und das Ergebnis mit den erwarteten Vorgaben abgleichen. 

Folgendes Beispiel demonstriert die Vorgehensweise: Es gibt eine Klasse mit einer Methode, die aus einem Text die Straße und die Hausnummer ermitteln soll. Es werden nun Unit Tests erstellt, die aus bereits bekannten Problemen testen, ob das erwartete Ergebnis ermittelt wird.

Rufe die Methode ```ZCL_ADDRESS->SEPARATE_HOUSENO_FROM_STREET``` mit der Eingabe ```ABC-Straße 13``` auf und prüfe, ob das Ergebnis ```13``` ist. Sollte das Ergebnis vom erwarteten Wert abweichen, dann schlägt der Unit Test fehlt und erzeugt eine Fehlermeldung in der Testumgebung.

Für die Prüfung des Ergebnisses gibt es eine Reihe von Methoden der Klasse ```CL_ABAP_UNIT_ASSERT```. Die bekannteste Methode ist ```EQUALS```. Sie prüft, ob der vorgegebene Wert gleich dem erwareteten Wert ist. Es gibt noch andere Methoden, auf die wir im weiteren Kapitel eingehen.

Unit Tests werden in der Regel als lokale Testklassen zu einer globalen Klasse definiert. Die Unit Tests werden nur im Entwicklungssystem durchgeführt. 


### Wann sind Unit Tests sinnvoll?
Beim Thema Unit Tests gibt es in der Regel zwei Lager: Die einen sagen, dass jegliches Coding mit Unit Tests geprüft werden muss (100% Code-Abdeckung). Die anderen sind der Meinung, dass Unit Tests überbewertet werden.
Wir sind der Meinung, dass Unit Tests zum Programmieralltag dazugehören und dort eingesetzt werden sollten, wo sie sinnvoll sind. 

Was unter "sinnvoll" zu verstehen ist, sollte jedes Team für sich selbst herausfinden. Ebenso sollte bewertet werden, ob eine Funktionalität als "kritisch" eingestuft werden kann. Wenn es eine kritisch Geschäftsfunktion gibt, dann sollte die Funktionalität auf jeden Fall über Unit Tests abgedeckt werden.

Besonders Prädestiniert für Unit Tests sind Methoden, die eine komplexe Logik haben und/ oder geschäftskritisch sind. 

#### Grundsätzlich ist fasst alles mit ABAP Unit testbar 
"Das kann man nicht testen" 
Es gibt Programmbereiche, die nicht mittels ABAP Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten Darstellen (ALV-Grid).
Für alles andere gibt es möglichkeiten diese Programme mit unittest ab zu sichern. Anfänglich wird dies aufwändig und müsam sein. Die Mühe wird sich aber lohnen uns schnell auszahlen.
Es is definitiv möglich Bapis / Badis / RFC / IDOC / mit Unitest ab zu sichern. 


### Trennung von Datenmodell, Geschäftslogik und Präsentationsschicht

Im SAP-Umfeld hat es sich leider "etabliert", dass alles, was für den Programmablauf benötigt wird, dort passiert, wo es gerade passt. Die Daten werden Selektiert, mit zusätzlichen SELECTS angereichert, aufbereitet und ausgegeben. Bei einem Doppelklick werden weitere Daten gelesen und es wird ein Popup ausgegeben, das den Anwender über irgendetwas informiert. 

Eine grundlegende Voraussetzung von Unit Tests ist, dass die Geschäftslogik nicht mit der Datenausgabe (Präsentationsschicht) gemischt ist (Separation of Concerns). In einem Unit Test gibt es keinen Anwender, der eine Info-Meldung wegklicken kann!

Ein weiterer Aspekt, der von der Geschäftslogik abgekoppelt sein sollte, ist die Datenbeschaffung (Datenmodell). 

Wenn Unit Tests sinnvoll eingesetzt werden sollen, dann muss möglichst von Anfang an darauf geachtet werden, dass die Geschäftslogik von allem anderen getrennt ist. Wenn Unit Tests in vorhandenen Programmen eingesetzt werden sollen, muss eventuell das bestehende Coding refakturiert werden. 

### Code-Abdeckung
In den Entwicklungstools kann nachvollzogen werden, welche Code-Strecken beim Ausführen der Unit Tests durchlaufen wurden. Eine möglichst große Codeabdeckung ( >80% ) sollte dabei das Ziel sein.

Bei vorhanden Klassen, bei denen nicht auf die Trennung geachtet wurde, ist eine 100%-ige Testabdeckung kaum zu erreichen. Man muss den Aufwand einer Refakturing dem Nutzen entgegenstellen. Wenn eine Klasse keine 100%-ige Testabdeckung hat, ist es sicherlich nicht schlimm, aber es erleichetet die Bewertung, wie vertrauenswürdig Unit Tests zu einem Modul einzustufen sind. Wenn es eine Klasse gibt, die zu 100% Geschäftslogik enthält, dann kann man mit einer Testabdeckung von 100% relativ sicher sein, dass diese Klasse so funktioniert, wie sie funktionieren soll. Wenn eine Klasse jedoch ein Mix aus Geschäftslogik und Datenpräsentation besteht, dann ist es schwer festzustellen, ob Code-Teile nicht gut per Unit Test getestet werden konnten oder ob sie einfach vergessen wurden.

Bei anfälligen, kritischen oder komplexen Methoden kann es sinnvoll sein, nur für diese Unit Tests zu erstellen und die restlichen Methoden der Klasse ausser Acht zu lassen.


### Testen von privaten, geschützten und öffentlichen Methoden
Es gibt die Meinung, dass nur öffentliche Methoden getestet werden sollten. Über die Codeabdeckung kann analysiert werden, ob alle Codestrecken durchlaufen wurden.

Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests.

Beispiel Adressaufbereitung: Nehmen wir an, wir haben eine Klasse, die Adressen entgegen nimmt und analysiert. Die eine Methode ```SEPARATE_HOUSENO_FROM_STREET``` haben wir bereits kennengelernt. Zusätzlich gibt es eine Methode ```CHECK_POST_CODE```, die sicherstellen soll, dass die Postleitzahl 5-stellig ist und nur aus Zahlen besteht. Wenn beide privaten Methoden von der öffentlichen Methode ```CHECK_ADDRESS``` aufgerufen werden, müssen wir zum Testen immer eine komplette Adresse übergeben. Einfacher und auch deutlicher ist es, wenn wir die privaten Methoden separat testen.

### Unit Tests erweitern
Wenn wir uns das Beispiel mit dem Ermitteln der Hausnummer ansehen, dann gibt es viele Fallstricke, die ein unerwartetes Ergebnis hervorrufen können. Die Eingaben, die zu einem fehlerhafte Ergebnis führen, kennen wir im Vorfeld jedoch nicht. Wir lernen sie erst kennen, wenn sich Anwender beschweren, die ein falsches Ergebnis erhalten. In diesem Fall können die Eingaben, die zu fehlerhaften Ausgaben geführt haben, in einen neuen Unit Test aufgenommen werden. Nach der Änderung des Codings werden alle bereits definierten Unit Tests durchgeführt und der Entwickelnde kann sicher sein, dass alles wie zuvor funktioniert.


### Clean Islands
Um zu vermitteln wie eine gute Umsetzung von Unit Tests ausehen kann könen so genannte clean Islands helden. 
Es handelt sich dabei um Pakete oder Klassen die in bezug auf softwarequalität - und auch unittest - einen vorzeigestatus haben. 
Somit diesen sie als Referenz für Teams, Externe und neue Kollegen um analog neue Software zu erstellen. 


### GIVEN - WHEN - THEN
GIVEN-WHEN-THEN ist ein Stil, um Unit Test zu formulieren. Mit GIVEN wird eine Bedingung angegeben, unter denen der Test stattfinden soll. WHEN beschreibt die Aktion, die durchgeführt wird und THEN beschreibt das erwartete Ergebnis.

Bezogen auf unser Beispiel mit der Hausnummer könnte die Formulierung heißen:
GIVEN: ABC-Straße 13
WHEN: die Hausnummer aus diesem String ermittelt wird
THEN: Sollte die Hausnummer 13 sein

Link: CACAMBER


### Clean Code in Unit Tests
Oft trifft man auf die Einstellung, dass es in unit tests nicht nötig ist sich an Regen der Code Qualität zu halten #cleanABAP. Schlechte wartbarkeit Qualität in Unit Tests wird dazu führen dass die Tests nicht weiterentwickelt werden und nutzlos werden. 
Doppelter Code, fehlende Modularisierung ist hier ebenso zu vermeiden wie in produktiven code. 

#### Unit Test sauber halten
<<keine Roten Unit tests dann kommen schnell noch mehr hinzu - AUSFORMILEREN>>



### Unit Tests modularisieren
<< in unit test wird bitte auch mit untermethoden und Hilfklassen gearbeitet ....>>


### Unit Test Klasse
?? macht das wirklich Sinn das zu erklären ?? 
* Beschreibung, wie eine Klasse aufgebaut ist
* Risklevel
* Duration
* erstellen in
  * Eclipse
  * SE80
* SETUP 
* TEARDOWN
* FOR TESTING
* genereller Ablauf

### ASSERT
* Vorstellung CL_ABAP_UNIT_ASSERT ?? macht das wirklich Sinn das zu erklären ?? 

### Beispiel Testklasse
?? macht das wirklich Sinn das zu erklären ?? 

### Testumgebung
ABAP Unit test können in ADT als auch im SAP GUI ausgeführt und ihre Ergebnisse analysiert werden. 
Empfohlen wird hier klar ADT, da hier auch die verwendung von [Test Relations](https://www.youtube.com/watch?app=desktop&v=yiKhKlQz89Y&t=14s) möglich ist. 

- RS_AUCV_RUNNER  
It's a good idea to run all available unit test on daily basis using RS_AUCV_RUNNER and mail the results to the developers. 





## ABAP Unit Tests sind nicht optional.
· Definition of Done erweitern und unit tests mit aufnehmen
· Kultur einhalten
o Beispiele für sinnvoll.
· Test leiden immer unter (Projekt-)Zeitdruck 
· 


## Testlevel:
### Methoden Tests
    Tests einzelner Methoden mit dem Fokus die korrekte Arbeitsweise der Methoden sicher zu stellen. 
    Die tests sollten unbedingt unabhägig von der Datenbank ausgeführt werden. 
### Komponententests
    Tests ganzer Klassen oder zusammenhängender Komponenten wie eine Klasse und BAPI zur Verbuchung. 
    Diese Test sind häufig von der Datenbank abhängig.
### Integrationstests







 
### Mocking / Faking / Doubling 
- Datenbank neu "Aufbauen" 
  - CDS / DB Mock Framework 

#### Unit Tests für Bapis 
<< Datebank muss gemockt werden, dann ist es schön wiederholbar.>>
<< Nur ganz grob sagen wir das läuft undd as dass es geht>>



## Testbaren Code schreiben
–	Auf was muss der Entwickler achten, damit der Code Testbar werden kann :Enno




## Unittests im Unternehmen
–	Am Anfange des Projekts definieren wie unit tests anzuwenden sind
    o	% an Coverage t
    o	Ausgeschlossene Objekte
–	Software Architektutr
    o	2,3 Achitekturkonzepte
        §	Alles hinter interfaces verschachteln. 



### Beispiele Anbringen: 
- ?Woher bekommen wir Beispiele mit Fleisch dran, die nicht nur SFLIGHT sind. 
- Erfahrungen und bekannte Probleme bei Unit Tests.  Z.B. das SAP Factories immer wieder gemockt werden müssen.

