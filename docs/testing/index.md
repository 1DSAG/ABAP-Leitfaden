---
layout: page
title: Testen
permalink: /testing/
has_children: true
nav_order: 9
---

{: .no_toc}
# Testen

1. TOC
{:toc}


## Zielgruppe
tbd
- Management auch relevant
    - return on Invest 
- Hauptzielgruppe Lead / Senior-Entwickler, die motiviert sind 
    - Hilfe zur Selbsthilfe / Lernen
- Rechtfertigen als Quelle nutzen 
- Teständerung


## Abgrenzungen 
* Was betrachten wir nicht. ! Am Ende schreiben !
Mit jeder Form von Test die hier erläutert wird ist nicht gemeint, das es ein Programm / App gibt womit erstellter ABAP Code "ausprobiert" werden kann. 
Diese Form von Test hat nichts mit dem professionellen testing von ABAP gemein. 


## Mangelndes Wissen und Qualifikation
Auch im Jahr 2025 bleibt die Herausforderung für Unternehmen bestehen, dass der großteil der SAP Entwickler nur über eine Lückenhafte bis nicht vorhandene Ausbildung und Erfahrung im Bereich der automatisierten Softwaretest hat. 
Dies hat eine Vielzalh von Gründen, die vor allem in der Nachfragesituation von SAP Projektkunden liegen, da eine große Anzahl an Fachkräften in Beratungsfirmen ausgebildet werden, wo von Kunden diese Fähigkeiten nicht nachgefragt sind. 
In vielen Extern besetzten Projekten wird durch den hohen erfolgs und Zeitdruck auf die vermeindlich optionale Möglichkeit software durch autmatische Tests zu verbessern verzichtet. 
Kunden wünsche dies oft nicht, da sie davon ausgehen, dass die nicht zu einer Verkürung der Gesamtentwicklungsdauer beitragen wird. Beratungen fördern aufgrund der mangelnden Nachfrage diese Fähigkeiten der Entwickler viel zu wenig. 
Vielmehr ist es leider schon so das Entwickler, die aus eigenem Antrieb / Qualitätbewustsein oder um sich selber mittelfristig arbeit zu sparen Unit tests erstellen somit gegen projektregeln verstoßen und mit problemen rechnen müssen. 

Damit sich Unit Tests in ABAP weiter durchsetzen ist hier in Umdenken aus dem Projektmanagement und bei den Verantworlichen für den Betrieb von Software nötig. 
Robert C. Martin sagte "The only way to go fast is, to go well" 
Erst wenn dies in den Organisationen angekommen ist dass der vermeintliche zusätzliche Aufwand für unit test code kein zusätzlicher Aufwand ist, sondern nur eine Verlagerung der Tätigkeiten vom Fehlersuchen, manuellen Daten erstelen, Testen, hin zur programmierung, wird es nachhaltig dazu kommen dass Unitest flächendeckend eingesetzt werden. 
Hier sollten wir uns aus dem Bereich SAP vorbilder aus anderen erfolgreichen Unternehmen suchen. 

** tmplade Agilität wird nicht zurende eingesetzt.  nur änderungen am laufenden band alles andere wird nicht umgesetzt **

Unittetst und das Wissen dazu muss sich zu einem nötignen und geprüften Skill etablieren. Für einen ABAP entwickler muss analog zu anderen unabdingbaren bauteilen gehören unittests zu erstellen, zu pflegen und weiter zu entickeln. 

** template: ausbau wissen ABAP OO +++

## Einleitung Testing
### Trennung von Datenmodell, Geschäftslogik und Präsentationsschicht

Im SAP-Umfeld hat es sich leider "etabliert", dass alles, was für den Programmablauf benötigt wird, dort passiert, wo es gerade passt. Die Daten werden Selektiert, mit zusätzlichen SELECTS angereichert, aufbereitet und ausgegeben. Bei einem Doppelklick werden weitere Daten gelesen und es wird ein Popup ausgegeben, das den Anwender über irgendetwas informiert. 

Eine grundlegende Voraussetzung von Unit Tests ist, dass die Geschäftslogik nicht mit der Datenausgabe (Präsentationsschicht) gemischt ist. In einem Unit Test gibt es keinen Anwender, der eine Info-Meldung wegklicken kann!

Ein weiterer Aspekt, der von der Geschäftslogik abgekoppelt sein sollte, ist die Datenbeschaffung (Datenmodell). 

Es gibt Programmbereiche, die nicht mittels Unit Tests überprüft werden können. Dazu gehören alle Programmteile, die auf einen Dialog angewiesen sind oder Daten Darstellen (ALV-Grid). Wenn Unit Tests sinnvoll eingesetzt werden sollen, dann muss möglichst von Anfang an darauf geachtet werden, dass die Geschäftslogik von allem anderen getrennt ist. Wenn Unit Tests in vorhandenen Programmen eingesetzt werden sollen, muss eventuell das bestehende Coding refakturiert werden. 

### Unit Tests sind nicht optional.
Erweitern sie Ihre "Definition of Done" und nehmen sie Unit Tests darin auf. 
Es wird langfristig äußerst hilfreich sein das frühzeitige - wenn nicht vorab #TDD - Erstellen von Unit Test in den Entwicklungsprozess zu integrieren
Test leiden immer unter (Projekt-)Zeitdruck und werden später in den seltensten Fällen nur erstellt. 


#### TDD
Wenn das Stichwort "Unit Tests" fällt, kommt es fast unweigerlich auch zu dem Thema _Test Driven Development_, kurz _TDD_. TDD ist ein Programmiervorgehen, bei dem - vereinfacht - zuerst definiert wird, welche Eingaben einer Funktion zu welchen Ergebnissen führen soll. Erst danach wird die Implementierung der Funktion realisiert. Durch das zuvor defnierte Verhalten kann überpfüt werden, ob die gewünschte Funktionalität gegeben ist.

Es geht an dieser Stelle explizit nicht um die Methode Test Driven Development. Unit Tests können auch dann sinnvoll eingesetzt werden, wenn nicht nach dieser Methode vorgegangen wurde. Das wichtigste ist aus unserer Sicht das Verständnis, wie Unit Tests funktionieren und welche wichtigkeit sie haben.

## Motivation
Unit Tests helfen dabei, Entwicklungen robuster zu machen. Programmierungen werden dabei automatisiert mit verschiedenen Parametern ausgeführt und auf Korrektheit überprüft. Robustheit und Korrektheit sind zwei Anforderungen, die in der modernen Softwareprogrammierung sehr hoch priorisiert werden sollten. Durch Unit Tests kann automatisiert sichergestellt werden, dass geschäftskritische Prozesse wie erwartet ausgeführt werden. 

<<-Warum beschäftigen wir uns mit Unit-Tests? 
 - Geschäftskritikalität.>>
 << Unit Test sind der Treiber für Agile Software Entwicklung und schnelle Änderungen => da sie sicherheit geben. >>

Die Entwicker die schon einmal eine Änderung an einem Programm gemacht haben und ganz langsamm vorsichtig rückwärts wieder raus aus dem Code gegangen sind wissen was es bedeutet, wenn ein Programm nicht wartbar ist. 
"Hoffentlich funktiniert noch alles und ich habe nichts kaputt gemacht" Mit jeder dieser Änderungen wird das Programm immer weniger wartbar, weil sich niemand mehr traut Verbesserungen an der Struktur durch zu führen. 
Unit Test bilden hier eine enorme Unterstützung, da sie die Möglichkeit für den Entwickler schaffen zu prüfen, dass alle bisherigen Anforderungen noch wie angefordert funktionieren. 

## Allgemeines zu Unit Tests

### Testlevel:
#### Methoden Tests
    Tests einzelner Methoden mit dem Fokus die korrekte Arbeitsweise der Methoden sicher zu stellen. Die tests sollten unbedingt unabhägig von der Datenbank ausgeführt werden. 
    Aus dieser Definition ergeben sich bereits oft die ersten Grundlagen für ein Refactoring, da viele Methoden mehrere Aufgaben ausführen. 
    Eine große Anzal oder sehr umfangreiche Unit Tests deuten oft darauf hin, dass sie eine Methode zerlegen sollten. 
#### Komponententests
    Tests ganzer Klassen oder zusammenhängender Komponenten wie eine Klasse und BAPI zur Verbuchung. 
    Diese Test sind häufig von der Datenbank abhängig. Hier sollte mit entsprechenden Techniken gearbeitet werden um einen Konsistenten Datenbankzustand für jeden Test herzustellen. 
    Hierzu eignen sich die entsprechenden Framworks der SAP: 
    **CDS Test Double Framework (Read Access)
    **ABAP SQL Test Double Framework (Read and Write Access)
    siehe [Managing Dependencies with ABAP Unit](https://help.sap.com/docs/ABAP_PLATFORM_NEW/c238d694b825421f940829321ffa326a/04a2d0fc9cd940db8aedf3fa29e5f07e.html?locale=en-US)
#### Integrationstests
  Bei Integrationtests Teile oder ganze Prozessen getestet um das Zusammenspiel der Komponenten abzusichern. 


### Testen von privaten, geschützten und öffentlichen Methoden
Es gibt die Meinung, dass nur öffentliche Methoden getestet werden sollten. Über die Codeabdeckung kann analysiert werden, ob alle Codestrecken durchlaufen wurden.
Allerdings kann das Bereitstellen der notwendigen Daten sehr aufwändig sein, so dass es sinnvoll sein kann, die kleineren Einheiten (private und geschützte Methoden) zu testen. Zudem "verwässern" umfangreiche Datenkonstellationen den Zweck eines Unit Tests.


### Clean Islands
Um zu vermitteln wie eine gute Umsetzung von Unit Tests ausehen kann könen so genannte clean Islands helden. 
Es handelt sich dabei um Pakete oder Klassen die in bezug auf softwarequalität - und auch unittest - einen vorzeigestatus haben. 
Somit diesen sie als Referenz für Teams, Externe und neue Kollegen um analog neue Software zu erstellen. 


### Unit Tests modularisieren
Unit Tests sind auch Programme, die sorgfältig geplant, benannt, gewartet und erweitert werden müssen. Je nachdem, wie umfangreich die zu testenden Einheiten sind, kann es sinnvoll sein, Teile davon zu modularisieren. Das Ziel muss sein, die Unit Tests übersichtlicher und besser wartbar machen.

Es gibt folgende Möglichkeiten, nach denen modularisiert werden kann:
* Methoden zur Zusammenstellung von abhängigen Klassen
* Methoden zum Aufbau von Testdaten
* Methoden zur Modularisierung von Tests

### Code-Abdeckung
In den Entwicklungstools kann nachvollzogen werden, welche Code-Strecken beim Ausführen der Unit Tests durchlaufen wurden. Eine 100%-ige Codeabdeckung sollte dabei das Ziel sein.

Bei vorhanden Klassen, bei denen nicht auf die Trennung geachtet wurde, ist eine 100%-ige Testabdeckung kaum zu erreichen. Man muss den Aufwand einer Refakturing dem Nutzen entgegenstellen. Wenn eine Klasse keine 100%-ige Testabdeckung hat, ist es sicherlich nicht schlimm, aber es erleichetet die Bewertung, wie vertrauenswürdig Unit Tests zu einem Modul einzustufen sind. Wenn es eine Klasse gibt, die zu 100% Geschäftslogik enthält, dann können Sie bei einer Testabdeckung von 100% relativ sicher sein, dass diese Klasse so funktioniert, wie sie funktionieren soll, wenn wir annehmen, dass die Test korrekt sind.  Wenn eine Klasse jedoch ein Mix aus Geschäftslogik und Datenpräsentation besteht, dann ist es schwer festzustellen, ob Code-Teile nicht gut per Unit Test getestet werden konnten oder ob sie einfach vergessen wurden. 

Bei anfälligen, kritischen oder komplexen Methoden kann es sinnvoll sein, nur für diese Unit Tests zu erstellen und die restlichen Methoden der Klasse ausser Acht zu lassen.

### Unittests im Unternehmen
–	Am Anfange des Projekts definieren wie unit tests anzuwenden sind
    o	% an Coverage t
    o	Ausgeschlossene Objekte
–	Software Architektutr
    o	2,3 Achitekturkonzepte
        §	Alles hinter interfaces verschachteln. 



### Hilfreiche Tipps



### Weiterführende Links
* Leseprobe "ABAP To The Future" (Paul Hardy): ABAP Unit and Test Driven Development: <https://tinyurl.com/tddph2>
* SAP Help "ABAP Unit in Test-Driven Development": <https://help.sap.com/doc/saphelp_nw75/7.5.5/en-US/4e/c2efe26e391014adc9fffe4e204223/content.htm?no_cache=true>
* SAP-Community Blogs: <https://community.sap.com/t5/forums/searchpage/tab/message?advanced=false&allow_punctuation=false&filter=location&location=blog-board:application-developmentblog-board&q=abap%20unit%20tests>
* GIVEN - THEN - WHEN (Martin Fowler): https://martinfowler.com/bliki/GivenWhenThen.html
* CACAMBER (Dominik Panzer): https://github.com/dominikpanzer/cacamber-BDD-for-ABAP

### Stichpunkte
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


##### Mermaid Demo
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
