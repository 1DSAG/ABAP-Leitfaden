---
layout: page
title: Open Source
permalink: /open-source/
next_page_link: /open-source/using-open-source/
next_page_title: Einsatz von Open Source
has_children: true
nav_order: 5
---

{: .no_toc}
# Open Source

1. TOC
{:toc}

## Einleitung

Open Source hat es in der ABAP-Entwicklung besonders schwer Fuß zu fassen. Immer noch halten sich Einwände, dass der Einsatz von frei verfügbarer Software in den geschäftskritischen SAP-Systemen mit den Unternehmensdaten gar nicht möglich oder zu rechtfertigen sei. Dabei gibt es für viele der berechtigten Einwände Lösungen, um die _Risiken_ zu minimieren und die _Chancen_, die Open-Source-Software bietet, nutzen zu können. In anderen Programmierumfeldern überwiegen die Chancen bereits lange gegenüber den Restrisiken und es wurden Prozesse und Tools geschaffen, um Open-Source-Bestandteile effektiv in den eigenen Entwicklungsprozess zu integrieren. Dieses Kapitel soll einen Überblick über den aktuellen Stand von Open Source in der ABAP-Entwicklung geben sowie Prozesse und Tools vorstellen, um...

1. ...Open-Source-Projekte in die eigenen Lösungen zu integrieren ([Einsatz von Open Source](using-open-source))
2. ...an Open-Source-Projekten mitzuwirken ([Beteiligung an Open Source](contributing-to-open-source))
3. ...eigene Lösungen als Open-Source-Projekt bereitzustellen ([Entwicklung von Open-Source](developing-open-source)).

Eine _Open-Source-Strategie_ muss jedes Unternehmen für sich selbst erschließen. Hier finden Sie eine Arbeitsgrundlage und Erfahrungsberichte.

## Was ist Open Source?

Open Source Software (OSS) ist Software, welche unter einer [_Open-Source-Lizenz_](#lizenzen) bereitgestellt wird. In allen drei zuvor genannten Anwendungsfällen ist die Lizenz maßgeblich für die Nutzung, die Modifikation und die Weiterverbreitung des bereitgestellten Codings. Zudem muss dieses _frei verfügbar_ sein, also nicht nur einer bestimmten Gruppe an Personen bereitgestellt werden. Dies ermöglicht es zum Beispiel den Quellcode einer Anwendung vor dem Einsatz zu prüfen und die Binärdateien zur Ausführung selbst zu erzeugen, anstatt darauf zu vertrauen, dass die bereitgestellten Dateien auch zu dem Quellcode gehören. Bugs können im Zweifel selbst behoben werden, statt auf den Softwareanbieter warten zu müssen oder angewiesen zu sein. Zusatzfunktionalität und Integrationen können selbst entwickelt und anderen Nutzern bereitgestellt werden. Versprochene Features wie Ende-zu-Ende-Verschlüsselung und deaktivierte Telemetrie können selbst überprüft werden.

{: .note }
SAP S/4HANA ist nicht "Open Source" nur weil Sie als Entwickler den von der SAP geschriebenen Quellcode lesen können. Open Source ist viel mehr als die bloße Bereitstellung des Codings gegenüber dem Kunden und thematisiert die freie Nutzung, Modifikation und Weiterverbreitung ohne in einem Kundenverhältnis mit dem Softwareanbieter zu stehen.

## Motivation und Chancen

Warum sollten Sie sich mit Open Source in der ABAP-Entwicklung beschäftigen? Langsam aber stetig steigt die Anzahl an Szenarien, in denen Ihnen Open Source, und _auch_ Open-Source-ABAP im Alltag begegnet, statt, dass Sie danach selbst aktiv suchen müssen. Die Anzahl an in der Open Source Community verfügbaren ABAP-Projekten wächst - auf [dotabap.org](https://dotabap.org) werden zum Zeitpunkt der Erstellung dieses Kapitels 290 Projekte gelistet. Die SAP selbst veröffentlicht Software als Open-Source-Projekte, wie zum Beispiel [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap-cloud) oder auch den [RAP Generator](https://github.com/SAP-samples/cloud-abap-rap) und diverse Tutorials, wie zum Beispiel [RAP100](https://github.com/SAP-samples/abap-platform-rap100). Sich dem kategorisch zu verschließen führt zunehmend mehr zu verpassten Chancen in...

1. __...der Optimierung der eigenen Entwicklungsprozesse__
    - Mit Tools wie [ABAP Cleaner](https://github.com/SAP/abap-cleaner), [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap-cloud) und [abapOpenChecks](https://github.com/larshp/abapOpenChecks) können Sie __Entwickler entlasten__ bei der Umsetzung von Entwicklungsrichtlinien und Best Practices, in dem diese __teilweise automatisiert umgesetzt__ und in anderen Teilen statisch geprüft und Entwickler __aktiv auf Findings hingewiesen__ werden. Und das __weit über den Umfang der im SAP-Standard ausgelieferten Möglichkeiten hinaus__ (ABAP Formatter / Pretty Printer, ABAP Test Cockpit).  
    - Mit [abapGit](https://abapgit.org/) bietet sich Ihnen die Möglichkeit Ihre __Entwicklungsprozesse _Technologie-übergreifend_ mit einheitlichem Tooling zu harmonisieren__ und Ihre __gesamte Unternehmenscodebase in _einer_ Single Source of Truth__ zu verwalten, statt ABAP als special Snowflake mit Sonderregeln zu betrachten. Sie können __Code Reviews__ mit dafür ausgelegtem Tooling durchführen. Sie können angefangene __Änderungen automatisiert zurücknehmen__, wenn sie der Fachbereich nach Entwicklungszeit doch nicht mehr haben möchte __ohne große manuelle Rückbauaufwände__. Und das alles sogar bei Systemen bis Basis-Release 7.02 runter.  
    - Mit Hilfe von [abaplint](https://abaplint.org/) können Sie __außerhalb eines SAP-Systems__ ABAP Coding prüfen, entwickeln und sogar [ausführen](https://transpiler.abaplint.org/). Sie können so __Continuous Integration Pipelines aufsetzen__ ohne dafür spezielle SAP-Systeme aufsetzen zu müssen und statische Codeanalyse und Unit Tests ausführen (mit Einschränkungen im Vergleich zu "nativer" Ausführung in ABAP-Systemen).  
    - Über Generatoren wie den [RAP Generator](https://github.com/SAP-samples/cloud-abap-rap) oder [ABAP OpenAPI Generator](https://github.com/abap-openapi/abap-openapi) können Sie __Boilerplate-Coding generieren__ und müssen dieses anschließend nur anpassen. So lassen sich __Entwicklungsaufwände sparen__ und insbesondere auch schnell Prototypen aufsetzen.

2. __...der Umsetzung von betriebswirtschaftlichen Anforderungen.__
    - Mit [abap2xlsx](https://github.com/abap2xlsx/abap2xlsx) können Sie die kreativen Anforderungen der Fachbereiche zur Erstellung, zum Auslesen und zur Änderung von Excel-Dateien umsetzen. Und das schon mit ABAP 7.31. Sie müssen so __nicht Ihre Prozesse anpassen__, weil die OLE-basierte SAP API für Excel-Mappen keine Hintergrundjobs unterstützt und ein installiertes Microsoft Office beim Anwender erwartet. Sie müssen insbesondere auch __nicht den Entwicklungsaufwand investieren selbst eine Codebase zu implementieren und zu warten__, die sich um die Konvertierung und den Umgang mit Excel-Dateien befasst. Und Sie müssen auch nicht in Anbetracht des Implementierungsaufwand die Anforderung als nicht verhältnismäßig lösbar abweisen sondern __können auf der Arbeit aufsetzen, die andere sich bereits gemacht haben__.

An dieser Stelle ist bereits eine Unterscheidung erkennbar, die bei einer stückweisen Einführung einer Open-Source-Strategie im SAP- und speziell im ABAP-Kontext helfen kann. Punkt 1, die Optimierung der Entwicklungsprozesse, betrifft Tooling, welches _im Entwicklungsprozess_ genutzt wird. Dies ist oft zunächst einfacher zu betrachten als Punkt 2, die Umsetzung von betriebswirtschaftlichen Anforderungen. Bibliotheken, die dabei genutzt werden, erreichen zwangsläufig an der Stelle auch Ihr Produktivsystem und sind somit nochmal unter anderen Gesichtspunkten zu betrachten.


Notizen:

- Fertige Lösungen für eigene Probleme existieren bereits
  - Kostenersparnis gegenüber Eigenentwicklung und Wartung
  - End-User-Benefit gegenüber "Aufwand zu groß" / rentiert sich nicht
- Open-Source-Tools für den Entwicklungsprozess erhöhen die Softwarequalität, verkürzen Entwicklungszeiten, verringern Fehler
- Aushängeschild in der Personalsuche: Nutzung moderner Tools, wir entwickeln modern
- Möglichkeit externer Contributions
- Enablement der Nutzung eigener Lösungen für Kunden (SDK/API für ABAP)

## Erschwerte Rahmenbedingungen

- Code in der Datenbank
- Proprietäre Programmiersprache
- Monolithisches System
- Geschäftskritische Anwendungen und Prozesse
- Unternehmenskritische Daten im System

## Lizenzen

- TODO: Lizenzübersicht hier oder in using-open-source
