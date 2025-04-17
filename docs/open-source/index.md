---
layout: page
title: Open Source
permalink: /open-source/
has_children: true
nav_order: 11
---

{: .no_toc}

# Open Source

1. TOC
{:toc}

## Einleitung

Open Source hat es in der ABAP-Entwicklung besonders schwer Fuß zu fassen. Immer noch halten sich Einwände, dass der Einsatz von frei verfügbarer Software in den geschäftskritischen SAP-Systemen mit den Unternehmensdaten gar nicht möglich oder zu rechtfertigen sei. Dabei gibt es für viele der berechtigten Einwände Lösungen, um die _Risiken_ zu minimieren und die [_Chancen_](#motivation-und-chancen), die Open-Source-Software bietet, nutzen zu können. In anderen Programmierumfeldern überwiegen die Chancen bereits lange gegenüber den Restrisiken und es wurden Prozesse und Tools geschaffen, um Open-Source-Bestandteile effektiv in den eigenen Entwicklungsprozess zu integrieren. Dieses Kapitel soll Ihnen einen Überblick zum aktuellen Stand von Open Source in der ABAP-Entwicklung geben sowie Prozesse und Tools vorstellen, um...

1. ...Open-Source-Projekte in die eigenen Lösungen zu integrieren ([Einsatz von Open Source](using-open-source))
2. ...an Open-Source-Projekten mitzuwirken ([Beteiligung an Open Source](contributing-to-open-source))
3. ...eigene Lösungen als Open-Source-Projekt bereitzustellen ([Entwicklung von Open Source](developing-open-source)).

{: .highlight }
Eine _Open-Source-Strategie_ muss jedes Unternehmen für sich selbst erschließen. Hier finden Sie eine Arbeitsgrundlage und Erfahrungsberichte.

## Was ist Open Source?

Open Source Software (OSS) ist Software, welche unter einer [_Open-Source-Lizenz_](licenses) bereitgestellt wird. In allen drei zuvor genannten Anwendungsfällen ist die Lizenz maßgeblich für die Nutzung, die Modifikation und die Weiterverbreitung des bereitgestellten Codings. Zudem muss dieses _frei verfügbar_ sein, also nicht nur einer bestimmten Gruppe an Personen bereitgestellt werden. Dies ermöglicht es Ihnen zum Beispiel den Quellcode einer Anwendung vor dem Einsatz zu prüfen und die Binärdateien zur Ausführung selbst zu erzeugen, anstatt darauf zu vertrauen, dass die bereitgestellten Dateien auch zu dem Quellcode gehören. Bugs können Sie im Zweifel selbst beheben, statt auf den Softwareanbieter warten zu müssen oder auf Support angewiesen zu sein. Zusatzfunktionalität und Integrationen können Sie selbst entwickeln und auch anderen Nutzern der Software bereitstellen. Versprochene Features wie Ende-zu-Ende-Verschlüsselung und deaktivierte Telemetrie können Sie selbst überprüfen.

{: .note }
SAP S/4HANA ist nicht "Open Source" nur weil Sie als Entwickler den von der SAP geschriebenen Quellcode lesen können. Open Source ist viel mehr als die bloße Bereitstellung des Codings gegenüber dem Kunden und thematisiert die freie Nutzung, Modifikation und Weiterverbreitung _ohne in einem Kundenverhältnis_ mit dem Softwareanbieter zu stehen.

## Motivation und Chancen

Warum sollten Sie sich mit Open Source in der ABAP-Entwicklung beschäftigen? Langsam aber stetig steigt die Anzahl an Szenarien, in denen Ihnen Open Source, und _auch_ Open-Source-ABAP, im Alltag begegnet, statt, dass Sie danach selbst aktiv suchen müssen. Die Anzahl an in der Open Source Community verfügbaren ABAP-Projekten wächst - auf [dotabap.org](https://dotabap.org) werden zum Zeitpunkt der Erstellung dieses Kapitels 299 Projekte gelistet. Die SAP selbst veröffentlicht Software als Open-Source-Projekte, wie zum Beispiel [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap-cloud) oder auch den [RAP Generator](https://github.com/SAP-samples/cloud-abap-rap) und diverse Tutorials oder Lerninhalte, wie zum Beispiel [RAP100](https://github.com/SAP-samples/abap-platform-rap100) oder [Fiori Elements Feature Showcase for RAP](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase). Sich dem kategorisch zu verschließen führt zunehmend mehr zu verpassten __Chancen...__

### ...in der Optimierung der eigenen Entwicklungsprozesse

1. Mit Tools wie [ABAP Cleaner](https://github.com/SAP/abap-cleaner), [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap-cloud) und [abapOpenChecks](https://github.com/larshp/abapOpenChecks) können Sie Entwickler entlasten bei der Umsetzung von Entwicklungsrichtlinien und Best Practices, in dem diese teilweise automatisiert umgesetzt und in anderen Teilen statisch geprüft und Entwickler aktiv auf Findings hingewiesen werden. Und das weit über den Umfang der im SAP-Standard ausgelieferten Möglichkeiten hinaus (ABAP Formatter / Pretty Printer, ABAP Test Cockpit). Mit [zJoule](https://zjoule.com/) können Sie  unabhängig vom Joule-Rollout der SAP bereits KI-Unterstützung in der ABAP-Entwicklung einsetzen.  
2. Mit [abapGit](https://abapgit.org/) bietet sich Ihnen die Möglichkeit Ihre Entwicklungsprozesse _Technologie-übergreifend_ mit einheitlichem Tooling zu harmonisieren und Ihre gesamte Unternehmenscodebase in _einer_ Single Source of Truth zu verwalten, statt ABAP als Special Snowflake mit Sonderregeln zu betrachten. Sie können Code Reviews mit dafür ausgelegtem Tooling durchführen. Sie können angefangene Änderungen automatisiert zurücknehmen, wenn sie der Fachbereich nach Entwicklungszeit doch nicht mehr haben möchte ohne große manuelle Rückbauaufwände. Und das alles sogar bei Systemen ab SAP Basis 7.02.
3. Mit Hilfe von [abaplint](https://abaplint.org/) können Sie außerhalb eines SAP-Systems ABAP Coding prüfen, entwickeln und mit dem Transpiler sogar [ausführen](https://transpiler.abaplint.org/). Sie können so Continuous Integration Pipelines aufsetzen ohne dafür spezielle SAP-Systeme kostenintensiv aufsetzen zu müssen und statische Codeanalyse und Unit Tests ausführen (mit Einschränkungen im Vergleich zu "nativer" Ausführung in ABAP-Systemen).  
4. Über Generatoren wie den [RAP Generator](https://github.com/SAP-samples/cloud-abap-rap) oder [ABAP OpenAPI Generator](https://github.com/abap-openapi/abap-openapi) können Sie Boilerplate-Coding generieren und müssen dieses anschließend nur anpassen. So lassen sich Entwicklungsaufwände sparen und insbesondere auch schnell Prototypen aufsetzen.

### ...in der Umsetzung von betriebswirtschaftlichen Anforderungen

1. Mit [abap2xlsx](https://github.com/abap2xlsx/abap2xlsx) können Sie die kreativen Anforderungen der Fachbereiche zur Erstellung, zum Auslesen und zur Änderung von Excel-Dateien umsetzen. Und das schon ab SAP Basis 7.31. Sie müssen so nicht Ihre Prozesse anpassen, weil die OLE-basierte SAP API für Excel-Mappen keine Hintergrundjobs unterstützt und ein installiertes Microsoft Office beim Anwender erwartet. Sie müssen insbesondere auch nicht den Entwicklungsaufwand investieren selbst eine Codebase zu implementieren und zu warten, die sich mit der Konvertierung und den Umgang mit Excel-Dateien befasst. Und Sie müssen auch nicht in Anbetracht des Implementierungsaufwands die Anforderung als nicht verhältnismäßig umsetzbar abweisen sondern können auf der Arbeit aufsetzen, die andere sich bereits gemacht haben.
2. Ähnlich verhält es sich bei anderen technischen Problemstellungen, zu denen es bereits etablierte Open-Source-Lösungen gibt. Beispielsweise [ABAP Logger](https://github.com/ABAP-Logger/ABAP-Logger) anstelle eigener Wrapper-Klassen um die Funktionsbausteine des Business Application Log. Oder [ajson](https://github.com/sbcgua/ajson) als JSON-Bibliothek für ab SAP Basis 7.02.

### ...in der Außendarstellung

1. Sie können bewerten, ob wiederverwendbare Komponenten Ihrer ABAP-basierten Lösungen nicht auch als Open-Source-Projekt Sinn machen würden. Coding, welches nicht in Konkurrenz Ihr Geschäftsmodell umsetzt, sondern die Optimierung des Entwicklungsprozesses oder übergreifenden Themen wie der User Experience, Revisionssicherheit oder ähnlichem dient, könnte auch von anderen Unternehmen genutzt werden. Wenn Sie diese Komponenten als frei verfügbare Software publizieren, ermöglichen Sie externe Beteiligungen an der Entwicklung von denen Sie profitieren können.  
Zusätzlich kann dies als Aushängeschild im Recruiting neuer Entwickler dienen. Diese sehen direkt, dass Sie modern entwickeln und sich nicht scheuen den Quellcode nach außen zu zeigen.  
Beispiele: [IBM](https://github.com/IBM?q=&type=all&language=abap&sort=), [Microsoft](https://github.com/microsoft?q=&type=all&language=abap&sort=), [rku.it](https://github.com/rku-it-GmbH?q=&type=all&language=abap&sort=), [Schwarz IT](https://github.com/SchwarzIT?q=&type=all&language=abap&sort=)
2. Wenn Ihr Unternehmen Dienstleistungen zur Verfügung stellt, die über Schnittstellen mit Partnern/Kunden umgesetzt werden, welche diese auch in Ihren SAP-Systemen mittels ABAP implementieren, können Sie eine Open Source SDK bereitstellen, welche Ihre API implementiert. Die Nutzer der SDK haben direkt eine Möglichkeit Issues zu öffnen oder ergänzende Features selbst per Pull Request vorzuschlagen und Ihren Implementierungsaufwand erheblich zu verringern oder mehr Funktionalität in Ihrer Software anzubieten. Sie können intern die SDK selbst einsetzen oder für Integrationstests verwenden.  
Beispiele: [ABAP SDK für Azure](https://github.com/microsoft/ABAP-SDK-for-Azure), [ABAP SDK für Google Cloud](https://cloud.google.com/solutions/sap/docs/abap-sdk/overview), [AWS SDK für SAP ABAP](https://aws.amazon.com/sdk-for-sap-abap/), [Microsoft AI SDK für ABAP](https://github.com/microsoft/aisdkforsapabap), [ABAP SDK for IBM watsonx](https://github.com/IBM/abap-sdk-nwas-x)

### ...im Upskilling von Entwicklern

1. Durch die Auseinandersetzung mit externen Bibliotheken und deren Implementierung können Sie Ihre Kenntnisse erweitern mit Blick auf objektorientiertes Design und Softwarearchitektur. Sie können mit neuen Technologien oder Ansätzen vertraut werden und das direkt mit produktivem Quellcode, statt Demobeispielen. Dieser Effekt verstärkt sich insbesondere bei der Beteiligung durch eigene Features oder Bugfixes und Code Reviews.

{: .highlight }
Sie sehen es gibt viele Stellen an denen Open Source, _auch in der ABAP-Entwicklung_, einen erheblichen Mehrwert liefern kann. Eine Auseinandersetzung mit dem Thema lohnt sich daher in jedem Fall, selbst wenn nur einige der oben genannten Punkte in Ihrem Fall relevant sind.

## Ausbaustufen

Eine mögliche Herangehensweise an das Thema ist die verschiedenen Anwendungsfälle als aufeinander aufbauend zu sehen:

1. Sie können sich zunächst mit dem Thema befassen, wie Sie __Open Source Tools in Ihren Entwicklungsprozess integrieren__ und damit unmittelbar einen Mehrwert erzielen. Dabei geht es zunächst noch nicht um Open-Source-Softwarebestandteile, die sich in Ihrem Coding befinden, sondern lediglich um Tools, die in Ihrem Entwicklungsprozess und damit auch nur in Ihrer Entwicklungssystemlandschaft einziehen würden. Dies ist oft der am einfachsten zu betrachtende Fall und ein guter Einstiegspunkt in das Thema.  
Diese Ausbaustufe ist in [Einsatz von Open Source](using-open-source) beschrieben.
    1. Diese Stufe lässt sich optional erweitern mit der __Nutzung von Open-Source-Bibliotheken in Ihren entwickelten Softwarelösungen__. In diesem Fall erreichen die Open-Source-Bestandteile auch Ihr Produktivsystem oder werden mit als Bestandteil Ihrer Software ausgeliefert.

2. Als nächstes können Sie die __Beteiligung an Open-Source-Projekten__ ins Auge fassen. Dabei erweitern oder verändern Sie eine Open-Source-Bibliothek und stellen diese Anpassungen der Community wieder zur Verfügung, sodass auch andere Unternehmen davon profitieren können. Damit Entwickler so sich beteiligen können, muss in Ihrem Unternehmen eine Richtlinie vorhanden sein, wie dies konkret ausgestaltet werden kann.  
Diese Stufe wird in [Beteiligung an Open Source](contributing-to-open-source) behandelt.

3. Die letzte Stufe ist die __Entwicklung eigener Software als Open-Source-Software__. In diesem Fall bieten Sie selbst ausgewählte Komponenten Ihrer eigenen Softwarelösungen als Open-Source-Software an und ermöglichen es so, dass andere sie einsetzen, aber auch sich daran beteiligen können.  
Diese Stufe wird in [Entwicklung von Open Source](developing-open-source) thematisiert.

Die einzelnen Stufen bieten unterschiedliche Chancen, aber kommen auch mit unterschiedlichen Risiken und Aufwänden. Diese werden in den genannten Unterkapiteln aufgegriffen.
