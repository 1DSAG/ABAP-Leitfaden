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
