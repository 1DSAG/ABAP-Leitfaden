---
layout: page
title: Grundlagen zu Unit Tests
permalink: /testing/abap_unit_methods/
parent: Softwaretest mit ABAP Unit 
nav_order: 1
---

{: .no_toc}
# Grundlagen zu ABAP Unit Tests

1. TOC
{:toc}

## Voraussetzungen für ABAP Unit Tests

Nachdem im vorigen Abschnitt Herausforderungen und Voraussetzungen vor allem organisatorischer Art angesprochen wurden, gehen wir Im Folgenden Abschnitt auf technische Aspekte und Belange ein, die zu berücksichtigen sind um erfolgreich ABAP Unit Tests zum Einsatz zu bringen.

### Trennung von Datenmodell, Geschäftslogik und Präsentationsschicht

Im SAP-Umfeld hat es sich leider etabliert, dass alles, was für den Programmablauf benötigt wird, dort passiert, wo es gerade passt. Die Daten werden mit zusätzlichen SELECTS angereichert, aufbereitet und ausgegeben. Bei einem Doppelklick werden weitere Daten gelesen und es wird ein Popup ausgegeben, das den Anwender über irgendetwas informiert. All dies passiert in einem Stück Software, welches als Business Funktion gemäß der beschriebenen Geschäftsanforderung erstellt wurde und diese mit all dem was nötig ist umsetzt.  
So entsteht Code, in der beispielsweise eine Methode ```create_sales_order``` einen BAPI aufruft, der Daten verbucht und damit eine Auftragsnummer erstellt. In dieser klassischen, am Geschäftsprozess orientierten Entwicklung, wie sie viele Jahre üblich war und auch heute noch im Einsatz ist, findet keine Trennung verschiedener Belange gemäß dem "Separation of Concerns"-Prinzips statt. 

Eine grundlegende Regel von fachkompetenter Arbeit ist, dass Datenbeschaffung, Geschäftslogik und Datenausgabe (Präsentationsschicht) in der Anwendung technisch getrennt sind und sich im Code nicht vermischen. In einem Unit Test gibt es keinen Anwender, der eine Info-Meldung wegklicken kann, was die automatisierte Testbarkeit von solchen All-in-one Programmteilen stark erschwert.  

Es gibt Programmbereiche, die nicht mittels Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die von einem Dialog oder anderen Präsentationsfunktionen, wie z.B. ALV-Grid, abhängig sind. Ebenso sollten SAP Funktionen nicht durch eigene Unit Tests getestet werden. 
Eine Trennung von Datenbeschaffung, Geschäftslogik und Anzeige ist in jedem Fall eine Verbesserung für die Softwarequalität. Unit Tests können einfacher umgesetzt werden, wenn vorhandenen Programmen neu strukturiert (refactored) und nach den Regeln von Clean-ABAP geschrieben werden und den Designprinzipien der Objektorientierung (SOLID) folgen.

Um ein umfangreiches Überarbeiten erstellter Software zu vermeiden, ist daher ein gutes Design der Anwendung essentiell für die Umsetzung von Unit-Tests. Erläuterungen finden Sie hierzu im Kapitel [Moderne ABAP Entwicklung](/ABAP-Leitfaden/abap/oo-design/#design-und-erstellung-von-sap-anwendungen) und Abschnitt [Testbarkeit durch gutes Design](/ABAP-Leitfaden/abap/oo-design/#testbarkeit-durch-gutes-design).

### Unit Tests sind nicht optional - Unit Tests als Teil der Definition of Done

> "Erst die Funktion implementieren - dann machen wir die Unit Tests (wenn dann noch Zeit ist)."

Leider ist dieser Satz noch sehr häufig in ABAP Entwicklungsprojekten im Alltag zu finden. Im Vordergrund steht bei Zeitdruck eben die Lieferung der Funktionalität. 
Erweitern sie Ihre "Definition of Done" und nehmen sie Unit Tests darin auf.  
Es wird langfristig äußerst hilfreich sein das frühzeitige Erstellen von Unit Test in den Entwicklungsprozess zu integrieren. Das spätere Erstellen von Tests wird aufgrund von (Projekt-)Zeitdruck kaum funktionieren.
Jeder Softwareentwickler sollte stets die Möglichkeit haben, qualitativ hochwertige Software zu erstellen. Hiervon sind automatische Tests ein wichtiger Bestandteil, auch wenn diese Tests länger und umfassender als das eigentliche Programm sein können. Dies ist ein Ausdruck der geschäftlichen Anforderung und Komplexität der Funktion.

### TDD (Test-Driven-Development)

Wenn das Stichwort "Unit Tests" fällt, kommt es fast unweigerlich auch zu dem Thema _Test Driven Development_, kurz _TDD_. TDD ist ein Programmiervorgehen, bei dem - vereinfacht - zuerst definiert wird, welche Eingaben einer Funktion zu welchen Ergebnissen führen soll. Erst danach wird die Implementierung der Funktion realisiert. Durch das zuvor definierte Verhalten kann überprüft werden, ob die gewünschte Funktionalität gegeben ist.

Es geht an dieser Stelle explizit nicht um die Methode des Test Driven Development. Unit Tests können auch dann sinnvoll eingesetzt werden, wenn nicht nach dieser Methode vorgegangen wurde. Das Wichtigste ist aus unserer Sicht das Verständnis, wie Unit Tests funktionieren und welche Wichtigkeit sie haben.

Als wichtigste Eckpfeiler des TDD sind folgende Fragen vorab zu klären, bevor die Umsetzung der Funktionalität erfolgt:

* in welche Funktionen wird die Gesamtfunktion aufgeteilt
* welche Schnittstellen haben diese Funktionen
* welche Daten werden benötigt um die Tests durchzuführen
* welche Funktionen werden nicht mitgetestet und benötigen entsprechenden Testersatz (Mocks, Stubs ...)

Der Einsatz von TDD nach reiner Lehre ist nicht einfach und erfordert einige Erfahrung. Aber zumindest die Vorgehensweise sich als Entwickler über die o.g. Punkte Gedanken zu machen führt dazu, dass sich viele Fragestellungen bereits in einer frühen Phase der Entwicklung ergeben und somit später aufwändige (Konzept-)Änderungen und Nacharbeiten mit Nachtests ausbleiben.

## Allgemeines zu Unit Tests - Begriffsdefinitionen und Erläuterungen

### Einstieg

Unit Tests sind wichtig. Das Erstellen, Verwalten und Entwickeln von Unit Tests erfordert umfangreiche Kenntnisse, die über das reine Schreiben von ABAP hinaus gehen. Das widerspricht der Aussage, dass sich dieses Kapitel an alle Programmierende richtet, unabhängig vom Wissensstand. Das ist jedoch nur auf den ersten Blick widersprüchlich, denn wir wollen mit diesem Kapitel alle erreichen. Wenn jemand noch nicht gut oder gar nicht objektorientiert programmieren kann, sich nicht mit Entwurfsmustern und anderen Programmierparadigmen auskennt, dann sollte das gelernt werden. Unit Test können eine gute Umgebung darstellen Techniken zu erlernen und diese anschließend auf den produktiven Code zu übertragen.
Wir wollen Anregungen und Hilfestellungen dazu geben. Gleichwohl können wir an dieser Stelle nur begrenzt Informationen zu diesem Thema bereitstellen.

{: .recommendation }
> - Wir empfehlen Unit Tests

#### Skills, die beim Arbeiten mit Unit Tests trainiert werden

* Objektorientiertes Design z.B. lose Kopplung
* Erstellen von testbaren Designs (Inversion of Control & Dependency Injection)
* Agile Prinzipien und Methoden der Software Entwicklung z.B. ( S.O.L.I.D )
* Test Prinzipien ( F.I.R.S.T )
* Erstellen von kleinen Einheiten

### Was sind Unit Tests genau?

Unit Tests sind Funktionen, die modularisierte Einheiten (Methoden, Funktionsbausteine) oder ganze Prozesse mit vorgegebenen Funktionen aufrufen und das Ergebnis mit den erwarteten Vorgaben abgleichen. 

Folgendes Beispiel demonstriert die Vorgehensweise: Es gibt eine Klasse mit einer Methode, die aus einem Text die Straße und die Hausnummer ermitteln soll. Es werden nun Unit Tests erstellt, die aus bereits bekannten Fehlern testen, ob das erwartete Ergebnis ermittelt wird.

Rufe die Methode ```ZCL_ADDRESS->SEPARATE_HOUSENO_FROM_STREET``` mit der Eingabe ```ABC-Straße 13``` auf und prüfe, ob das Ergebnis ```13``` ist. Sollte das Ergebnis vom erwarteten Wert abweichen, dann schlägt der Unit Test fehlt und erzeugt eine Fehlermeldung in der Testumgebung.

Für die Prüfung des Ergebnisses gibt es eine Reihe von Methoden der Klasse ```CL_ABAP_UNIT_ASSERT```. Die bekannteste Methode ist ```EQUALS```. Sie prüft, ob der vorgegebene Wert gleich dem erwarteten Wert ist. Es gibt noch andere Methoden, auf die wir im weiteren Kapitel eingehen.

Unit Tests werden in der Regel als lokale Testklassen zu einer globalen Klasse definiert. Die Unit Tests werden nur im Entwicklungssystem durchgeführt. 

### Wann sind Unit Tests sinnvoll?

Beim Thema Unit Tests gibt es in der Regel zwei Lager: Die einen sagen, dass jegliches Coding mit Unit Tests geprüft werden muss (100% Code-Abdeckung). Die anderen sind der Meinung, dass Unit Tests überbewertet werden.
Wir sind der Meinung, dass Unit Tests zum Programmieralltag dazugehören und dort eingesetzt werden sollten, wo sie sinnvoll sind. 

Was unter "sinnvoll" zu verstehen ist, sollte jedes Team für sich selbst herausfinden. Ebenso sollte bewertet werden, ob eine Funktionalität als "kritisch" eingestuft werden kann. Wenn es eine kritische Geschäftsfunktion gibt, dann sollte die Funktionalität auf jeden Fall über Unit Tests abgedeckt werden.

Besonders prädestiniert für Unit Tests sind Methoden, die eine komplexe Logik haben und/ oder geschäftskritisch sind. 

### Mocking

Ein sehr wichtiger und hier oft erwähnter Begriff ist das sogenannte Mocking. Generell versteht man unter Mocking, dass Objekte wie z.B: Funktionsbausteine oder Klassen von SAP, die nicht Teil des Unit-Tests sind, durch Stellvertreterobjekte ersetzt werden. Wie ein Mocking erreicht wird, wird in einschlägen Kursen zu ABAP oder auch Fachbüchern vermittelt, daher gehen wir wegen der technischen Detailtiefe hier nicht weiter darauf ein.  
Es gibt auch verschiedene Formen des Mockings was im Abschnitt Testtechniken kurz erläutert wird.

### Testlevel

#### Methoden Tests

Tests einzelner Methoden mit dem Fokus die korrekte Arbeitsweise der Methoden sicher zu stellen. Die Tests sollten unbedingt unabhägig von der Datenbank ausgeführt werden.  
Aus dieser Definition ergeben sich bereits oft die ersten Grundlagen für ein Refactoring, da viele Methoden mehrere Aufgaben ausführen.
Eine große Anzahl oder sehr umfangreiche Unit Tests deuten oft darauf hin, dass Sie eine Methode zerlegen sollten.

#### Komponententests

Tests ganzer Klassen oder zusammenhängender Komponenten wie eine Klasse und ein BAPI zur Verbuchung.
Diese Test sind häufig von der Datenbank abhängig. Hier sollte mit entsprechenden Techniken gearbeitet werden um einen konsistenten Datenbankzustand für jeden Test herzustellen.  
Hierzu eignen sich die entsprechenden Frameworks der SAP:

* CDS Test Double Framework (Read Access)
* ABAP SQL Test Double Framework (Read and Write Access)    
  siehe [Managing Dependencies with ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/04a2d0fc9cd940db8aedf3fa29e5f07e.html?locale=en-US)

#### Integrationstests

Bei Integrationtests werden Teile von oder ganze Prozessen getestet, um das Zusammenspiel der Komponenten abzusichern. 
Diese Tests sind oft davon gekennzeichnet, dass die Vorbereitung der Ausgangslage an Daten aufwändig ist. Es wird benötigt: Kunde mit Liefersperre, Material ohne bestand, aber mit eingehender Bestellung usw.  Hier wird man einen Großteil der Tests auf eine effiziente Bereitstellung dieser Testdaten verwenden müssen. 

## Vorgehen und Methodiken

### Clean Islands

Um zu vermitteln wie eine gute Umsetzung von Unit Tests aussehen kann, können so genannte _Clean Islands_ helfen.
Es handelt sich dabei um Pakete oder Klassen die in Bezug auf die Softwarequalität - und auch Unit-Tests - einen Vorzeigestatus haben.
Somit dienen sie als Referenz für Teams, Externe und neue Kollegen um analog neue Software zu erstellen.

### Unit Tests modularisieren

Unit Tests bestehen aus Code, der ebenso wie Produktcode, modularisiert, gewartet und erweitert werden muss. Es ist fast immer ratsam, einen Unit Test in kleine Methoden zu modularisieren, da es in der Natur der Tests liegt, dass mehrere Fälle identische Ausgangsdaten oder Absicherungen verwenden. Das Ziel muss sein, die Unit Tests übersichtlicher und besser wartbar zu machen.

*Vorgehen und Empfehlungen zur Modularisierung von Testcode:*

* Erstellen Sie für jede Methode ihrer Klasse eine eigene neue Testmethode.
* Gibt es verschiedene Testfälle für eine Methode, erstellen Sie pro Fall eine eigene Testmethode (z.B. Erfolgsfall und Fehlerfall)
* Kopieren Sie keine Methode. Wenn sie Code benötigen, den Sie bereits geschrieben haben, extrahieren Sie diesen in eine neue Testmethode um diesen wiederverwenden zu können.
* Überprüfen Sie dabei immer wieder die bisherigen Tests. Eine Engine die in der Lage ist, Testdaten in verschiedenen benötigten fachlichen Konstellationen zu erstellen, wird Ihnen beim Erstellen von Tests gute Dienste leisten.

Es gibt folgende zusätzliche Möglichkeiten, nach denen ebenfalls modularisiert werden kann:

* Methoden zur Zusammenstellung von abhängigen Klassen
* Methoden zum Aufbau von Testdaten
* Methoden zur Modularisierung von Tests

### Code-Abdeckung (coverage)

In den Entwicklungstools kann nachvollzogen werden, welche Code-Strecken beim Ausführen der Unit Tests durchlaufen wurden. Eine 100%-ige Codeabdeckung sollte dabei das Ziel sein.

Bei vorhandenen Klassen, bei denen nicht auf die Trennung geachtet wurde, ist eine 100%-ige Testabdeckung kaum zu erreichen. Man muss den Aufwand eines Refactorings dem Nutzen entgegenstellen. Wenn eine Klasse keine 100%-ige Testabdeckung hat, ist es sicherlich nicht schlimm, aber es erleichtert die Bewertung, wie vertrauenswürdig Unit Tests zu einem Modul einzustufen sind. Wenn es eine Klasse gibt, die zu 100% Geschäftslogik enthält, dann können Sie bei einer Testabdeckung von 100% relativ sicher sein, dass diese Klasse so funktioniert, wie sie funktionieren soll. Wenn eine Klasse jedoch aus einem Mix von Geschäftslogik und Datenpräsentation besteht, dann ist es schwer festzustellen, ob Code-Teile nicht gut per Unit Test getestet werden konnten oder ob sie einfach vergessen wurden.


{: .note }
> * [Unit Tests in ABAP](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/08c60b52cb85444ea3069779274b43db.html?locale=en-US)
> * [Leseprobe "ABAP To The Future" (Paul Hardy): ABAP Unit and Test Driven Development](https://tinyurl.com/tddph2)
> * [SAP Help "ABAP Unit in Test-Driven Development"](<https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/4e/c2efe26e391014adc9fffe4e204223/content.htm?no_cache=true>)
> * [SAP-Community Blogs: Unit Testing ](https://community.sap.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&filter=location&location=blog-board:application-developmentblog-board&q=abap%20unit%20tests)
> * [GIVEN - WHEN - THEN (Martin Fowler)](https://martinfowler.com/bliki/GivenWhenThen.html)
> * [CACAMBER (Dominik Panzer)](https://github.com/dominikpanzer/cacamber-BDD-for-ABAP)
> * [Agile ABAP-Entwicklung von Winfried Schwarzmann - Reinwerk](https://www.rheinwerk-verlag.de/agile-abap-entwicklung)
> * [ABAPKoans von Damir Majer](https://github.com/damir-majer/ABAPKoans)
> * [ABAP Unit Tests - SAP Learning Hub](https://learning.sap.com/learning-journeys/acquire-core-abap-skills/implementing-code-tests-with-abap-unit_b23c7a00-c2e8-406d-8969-b00db3f1fd87)
