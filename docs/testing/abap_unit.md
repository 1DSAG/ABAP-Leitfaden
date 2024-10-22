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

Einleitung, wo können Fehler passieren?  Beschreiben. 

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


### Clean Islands
Um zu vermitteln wie eine gute Umsetzung von Unit Tests ausehen kann könen so genannte clean Islands helden. 
Es handelt sich dabei um Pakete oder Klassen die in bezug auf softwarequalität - und auch unittest - einen vorzeigestatus haben. 
Somit diesen sie als Referenz für Teams, Externe und neue Kollegen um analog neue Software zu erstellen. 


## Einstieg
§ Motivation, Benefits aufzeigen
§ Nötige Skills
· Gutes ABAP OO design ist Grundlage 
o	ABAP OO 
o Unit test erfordern einen höheren Level an OO-Skills 
· Beispiel RFC Fuba, mit OO versorgen.
· 
## ABAP Unit Tests sind nicht optional.
· Definition of Done erweitern und unit tests mit aufnehmen
· Kultur einhalten
o Beispiele für sinnvoll.
· Test leiden immer unter (Projekt-)Zeitdruck 
· 
## Grundsätzlich ist fasst alles mit ABAO Unit testbar! 
§ NO excuses. 
o Experten Themen 
§ Unittest / Infrastruktur ausbauen um Auswand für neue Tests zu verringern. 

## Testlevel:
### Methoden Tests
### Komponententests
### Integrationstests
 - Datenbank neu "Aufbauen" 
  - CDS / DB Mock Framework 

- Mocking
- Unit Tests für Bapis 

-Warum beschäftigen wir uns mit Unit-Tests? 
 - Geschäftskritikalität.


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

