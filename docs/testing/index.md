---
layout: page
title: Testen
permalink: /testing/
next_page_title: ABAP Unit Framework
next_page_link: /testing/abap_unit/
has_children: true
nav_order: 8
---

{: .no_toc}
# Testen

1. TOC
{:toc}


## Zielgruppe
- Management auch relevant
    - return on Invest 
- Hauptzielgruppe Lead / Senior-Entwickler, die motiviert sind 
    - Hilfe zur Selbsthilfe / Lernen
- Rechtfertigen als Quelle nutzen 
- Teständerung



# Abschnittstruktur: 
## Abgrenzungen 
* Was betrachten wir nicht. 
*  Am Ende schreiben 

## ABAP Unit Tests
Dieses Kapitel handelt von automatisierten Entwicklertests (Unit Tests) und richtet sich an Programmierende jeglichen Niveaus als auch an managende und organisierende Personen. Jede Person, die in irgendeiner Form mit ABAP-Programmierungen in Berührung kommt, sollte wissen, was Unit Tests sind, wie sie eingesetzt werden und welche Grenzen sie haben.

Wenn im Folgenden von _Unit Tests_ die Rede ist, dann sind ABAP Unit Tests gemeint. Das ABAP bezieht sich lediglich auf die Besonderheiten von Unit Tests im SAP-Kontext.

### Einstieg

Unit Tests sind wichtig. Das Erstellen, verwalten und entwickeln von Unit Tests erfordert umfangreiche Kenntnisse. Das widerspricht der Aussage, dass sich dieses Kapitel an alle Programmierende richtet, unabhängig vom Wissensstand. Das ist jedoch nur auf den ersten Blick widersprüchlich, denn wir wollen mit diesem Kapitel alle erreichen. Wenn jemand noch nicht gut oder gar nicht objektorientiert programmieren kann, sich nicht mit Entwurfsmustern und anderen Programmierparadigmen auskennt, dann sollte das gelernt werden. Wir wollen Anregungen und Hilfestellungen dazu geben. Gleichwohl können wir an dieser Stelle nur begrenzt Informationen zu diesem Thema bereitstellen.

Wenn das Stichwort "Unit Tests" fällt, kommt es fast unweigerlich auch zu dem Thema _Test Driven Development_, kurz _TDD_. TDD ist ein Programmiervorgehen, bei dem zuerst definiert wird, welche Eingaben einer Funktion zu welchen Ergebnissen führen soll. Erst danach wird die Implementierung der Funktion realisiert. Durch das zuvor defnierte Verhalten kann überpfüt werden, ob die gewünschte Funktionalität gegeben ist.

Es geht an dieser Stelle explizit nicht um die Methode Test Driven Development. Unit Tests können auch dann sinnvoll eingesetzt werden, wenn nicht nach dieser Methode vorgegangen wurde. Das wichtigste ist aus unserer Sicht das Verständnis, wie Unit Tests funktionieren.

### Motivation
Unit Tests helfen dabei, Entwicklungen robuster zu machen. Programmierungen werden dabei automatisiert mit verschiedenen Parametern ausgeführt und auf Korrektheit überprüft. Robustheit und Korrektheit sind zwei Anforderungen, die in der modernen Softwareprogrammierung sehr hoch priorisiert werden sollten. Durch Unit Tests kann sichergestellt werden, dass geschäftsrelevante Prozesse sicher und wie erwartet ausgeführt werden. 

### Was sind Unit Test nun genau?
Unit Tests sind Funktionen, die modularisierte Einheiten (Methoden, Funktionsbausteine) mit vorgegebenen Funktionen aufrufen und das Ergebnis mit den erwarteten Vorgaben abgleichen. 

Folgendes Beispiel demonstriert die Vorgehensweise: Es gibt eine Klasse mit einer Methode, die aus einem Text die Straße und die Hausnummer ermitteln soll. Es werden nun Unit Tests erstellt, die aus bereits bekannten Problemen testen, ob das erwartete Ergebnis ermittelt wird.

Rufe die Methode ```ZCL_ADDRESS->SEPARATE_HOUSENO_FROM_STREET``` mit der Eingabe ```ABC-Straße 13``` auf und prüfe, ob das Ergebnis ```13``` ist. Sollte das Ergebnis vom erwarteten Wert abweichen, dann schlägt der Unit Test fehlt und erzeugt eine Fehlermeldung in der Testumgebung.

Für die Prüfung des Ergebnisses gibt es eine Reihe von Methoden der Klasse ```CL_ABAP_UNIT_ASSERT```. Die bekannteste Methode ist ```EQUALS```. Sie prüft, ob der vorgegebene Wert gleich dem erwareteten Wert ist. Es gibt noch andere Methoden, auf die wir im weiteren Kapitel eingehen.

Unit Tests werden in der Regel als lokale Testklassen zu einer globalen Klasse definiert. Die Unit Tests werden nur im Entwicklungssystem durchgeführt. 

### Wann sind Unit Tests sinnvoll?
Beim Thema Unit Tests gibt es in der Regel zwei Lager: Die einen sagen, dass jegliches Coding mit Unit Tests geprüft werden muss (100% Code-Abdeckung). Die anderen sind der Meinung, dass Unit Tests überbewertet werden.
Wir sind der Meinung, dass Unit Tests zum Programmieralltag dazugehören und dort eingesetzt werden sollten, wo sie sinnvoll sind. 

Was unter "sinnvoll" zu verstehen ist, sollte jedes Team für sich selbst herausfinden. Ebenso sollte bewertet werden, ob eine Funktionalität als "kritisch" eingestuft werden kann. Wenn es eine kritisch Geschäftsfunktion gibt, dann sollte die Funktionalität auf jeden Fall über Unit Tests abgedeckt werden.

Besonders Prädestiniert für Unit Tests sind Methoden, die eine komplexe Logik haben und/ oder geschäftskritisch sind. 




### Trennung von Datenmodell, Geschäftslogik und Präsentationsschicht

Im SAP-Umfeld hat es sich leider "etabliert", dass alles, was für den Programmablauf benötigt wird, dort passiert, wo es gerade passt. Die Daten werden Selektiert, mit zusätzlichen SELECTS angereichert, aufbereitet und ausgegeben. Bei einem Doppelklick werden weitere Daten gelesen und es wird ein Popup ausgegeben, das den Anwender über irgendetwas informiert. 

Eine grundlegende Voraussetzung von Unit Tests ist, dass die Geschäftslogik nicht mit der Datenausgabe (Präsentationsschicht) gemischt ist. In einem Unit Test gibt es keinen Anwender, der eine Info-Meldung wegklicken kann!

Ein weiterer Aspekt, der von der Geschäftslogik abgekoppelt sein sollte, ist die Datenbeschaffung (Datenmodell). 

Es gibt Programmbereiche, die nicht mittels Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten Darstellen (ALV-Grid). Wenn Unit Tests sinnvoll eingesetzt werden sollen, dann muss möglichst von Anfang an darauf geachtet werden, dass die Geschäftslogik von allem anderen getrennt ist. Wenn Unit Tests in vorhandenen Programmen eingesetzt werden sollen, muss eventuell das bestehende Coding refakturiert werden. 

### Code-Abdeckung
In den Entwicklungstools kann nachvollzogen werden, welche Code-Strecken beim Ausführen der Unit Tests durchlaufen wurden. Eine 100%-ige Codeabdeckung sollte dabei das Ziel sein.

Bei vorhanden Klassen, bei denen nicht auf die Trennung geachtet wurde, ist eine 100%-ige Testabdeckung kaum zu erreichen. Man muss den Aufwand einer Refakturing dem Nutzen entgegenstellen. Wenn eine Klasse keine 100%-ige Testabdeckung hat, ist es sicherlich nicht schlimm, aber es erleichetet die Bewertung, wie vertrauenswürdig Unit Tests zu einem Modul einzustufen sind. Wenn es eine Klasse gibt, die zu 100% Geschäftslogik enthält, dann kann man mit einer Testabdeckung von 100% relativ sicher sein, dass diese Klasse so funktioniert, wie sie funktionieren soll. Wenn eine Klasse jedoch ein Mix aus Geschäftslogik und Datenpräsentation besteht, dann ist es schwer festzustellen, ob Code-Teile nicht gut per Unit Test getestet werden konnten oder ob sie einfach vergessen wurden.

Bei anfälligen, kritischen oder komplexen Methoden kann es sinnvoll sein, nur für diese Unit Tests zu erstellen und die restlichen Methoden der Klasse ausser Acht zu lassen.


### Testen von privaten, geschützten und öffentlichen Methoden
Es gibt die Meinung, dass nur öffentliche Methoden getestet werden sollten. Über die Codeabdeckung kann analysiert werden, ob alle Codestrecken durchlaufen wurden.

Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests.

Beispiel Adressaufbereitung: Nehmen wir an, wir haben eine Klasse, die Adressen entgegen nimmt und analysiert. Die eine Methode ```SEPARATE_HOUSENO_FROM_STREET``` haben wir bereits kennengelernt. Zusätzlich gibt es eine Methode ```CHECK_POST_CODE```, die sicherstellen soll, dass die Postleitzahl 5-stellig ist und nur aus Zahlen besteht. Wenn beide privaten Methoden von der öffentlichen Methode ```CHECK_ADDRESS``` aufgerufen werden, müssen wir zum Testen immer eine komplette Adresse übergeben. Einfacher und auch deutlicher ist es, wenn wir die privaten Methoden separat testen.

### Unit Tests erweitern
Wenn wir uns das Beispiel mit dem Ermitteln der Hausnummer ansehen, dann gibt es viele Fallstricke, die ein unerwartetes Ergebnis hervorrufen können. Die Eingaben, die zu einem fehlerhafte Ergebnis führen, kennen wir im Vorfeld jedoch nicht. Wir lernen sie erst kennen, wenn sich Anwender beschweren, die ein falsches Ergebnis erhalten. In diesem Fall können die Eingaben, die zu fehlerhaften Ausgaben geführt haben, in einen Unit Test aufgenommen werden. Nach der Änderung des Codings werden alle bereits definierten Unit Tests durchgeführt und der Entwickelnde kann sicher sein, dass alles wie zuvor funktioniert.

### GIVEN - WHEN - THEN
GIVEN-WHEN-THEN ist ein Stil, um Unit Test zu formulieren. Mit GIVEN wird eine Bedingung angegeben, unter denen der Test stattfinden soll. WHEN beschreibt die Aktion, die durchgeführt wird und THEN beschreibt das erwartete Ergebnis.

Bezogen auf unser Beispiel mit der Hausnummer könnte die Formulierung heißen:
GIVEN: ABC-Straße 13
WHEN: die Hausnummer aus diesem String ermittelt wird
THEN: Sollte die Hausnummer 13 sein

Link: CACAMBER

### Unit Tests modularisieren

### Unit Test Klasse
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
* Vorstellung CL_ABAP_UNIT_ASSERT

### Beispiel Testklasse

### Testumgebung
* Ausführen Unit Tests
* Anzeige Ergebnis
* Codeabdeckung
* 

#### Eclipse

#### SAPGUI/ SE80

### Weiterführende Links
* Leseprobe "ABAP ToThe Future" (Paul Hardy): ABAP Unit and Test Driven Development: <https://tinyurl.com/tddph2>
* SAP Help "ABAP Unit in Test-Driven Development": <https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/4e/c2efe26e391014adc9fffe4e204223/content.htm?no_cache=true>
* SAP-Community Blogs: <https://community.sap.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&filter=location&location=blog-board:application-developmentblog-board&q=abap%20unit%20tests>
* GIVEN - THEN - WHEN (Martin Fowler): https://martinfowler.com/bliki/GivenWhenThen.html
* CACAMBER (Dominik Panzer): https://github.com/dominikpanzer/cacamber-BDD-for-ABAP

### Stichpunkte
    
* Motivation, Benefits aufzeigen
* Nötige Skills
  * Gutes ABAP OO design ist Grundlage 
* ABAP OO 
  * Unit test erfordern einen höheren Level an OO-Skills 
    * Beispiel RFC Funktionsbaustein, mit OO versorgen.
* ABAP Unit Tests sind nicht optional.
  * Definition of Done erweitern und unit tests mit aufnehmen
  * Kultur einhalten
* sinnvolle Beispiele
  * Test leiden immer unter (Projekt-)Zeitdruck 
  * Grundsätzlich ist fast alles mit ABAP Unit testbar! 
* NO excuses. 
  * Experten Themen 
  * Unittest / Infrastruktur ausbauen um Aufwand für neue Tests zu verringern. 
* Technik
  * ABAP Unit Tests SAPGUI/ Eclipse
  * Test-Seams
  * Test-Doubles
    * SQL
    * Funktionsbausteine

## Testunterstützung:
* Ecatt? 
  * Wohl nicht mehr relevant
* TestdatenContainer Ecatt für Testdaten 
  * Nutzen für CDS /DB Mocks
* Andere TestFriends:
  * Dynamische Logpoints => ABAP Kaptiel, ADT Leitfaden,  Link 
  * End2End Trace Cross Trace  …
  * https://github.com/dominikpanzer/cacamber-BDD-for-ABAP
  * ATC &  Transportintegration
 
## Empfehlungen für Test-Tools
* Marco Krapf 
* Cloud ALM
  * Marco Krapf 
  * ?Automatische Prozesstests mit CloudALM? 
  * Geht das ? 
  * Stand Sept 2024 laut Marco noch nicht gut nutzbar. ( freundlich formulieren ) 
* Tricentris: https://www.tricentis.com/de/sap
  * Hat erst mal mit ABAP-Entwicklung wenig zu tun, also da wäre nix zu beaachten, aber als allgemeines Tool, um Software zu testen

## Mermaid Demo

```mermaid
classDiagram
    direction RL
    class ZIF_AUTH_PROVIDER {
        <<interface>>
        is_authorized() abap_bool
    }
    class ZCL_AUTH_PROVIDER
    ZCL_AUTH_PROVIDER ..|> ZIF_AUTH_PROVIDER : implements
    class LTD_AUTH_PROVIDER {
        +abap_bool fail_on_next_check
    }
    LTD_AUTH_PROVIDER ..|> ZIF_AUTH_PROVIDER : implements
    class ZCL_AUTH_PROV_FACTORY {
        +get_instance() ZIF_AUTH_PROVIDER
    }
    ZCL_AUTH_PROV_FACTORY ..> ZIF_AUTH_PROVIDER
    ZCL_AUTH_PROV_FACTORY ..> ZCL_AUTH_PROVIDER : instantiates
    class ZCL_PROCESSOR {
        
    }
    ZCL_PROCESSOR ..> ZIF_AUTH_PROVIDER : uses
    ZCL_PROCESSOR ..> ZCL_AUTH_PROV_FACTORY : uses
```
