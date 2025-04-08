---
layout: page
title: ALM
permalink: /application-lifecycle-management/
nav_order: 9
---

{: .no_toc}
# Application Lifecycle Management (ALM)

1. ToC
{:toc}

## Einleitung

ALM: (Marco)

Unter dem Begriff "Application Lifecycle Management" (ALM) werden von SAP Prozesse, Werkzeuge, Best Practices und Services bereitgestellt, um SAP- und nicht-SAP-Lösungen über ihren kompletten Lebenszyklus zu verwalten, also von der Planung und Einführung über den Betrieb bis zur Stillegung von Systemen und Applikationen(?) (siehe dazu https://support.sap.com/en/alm.html). 

Dazu wurde ab Mitte der 2000er-Jahre(?) der SAP Solution Manager als On-Premise-System augeliefert und stetig erweitert, der jedoch zum Ende des Jahres 2027 - analog der Business Suite - aus der Mainstream-Wartung läuft.

Das Nachfolgeprodukt des SAP Solution Managers nennt sich SAP Cloud ALM und ist - wie der Name schon sagt - eine reine Cloud-Lösung, die auf der SAP Business Technology Platform (BTP) läuft. SAP Cloud ALM befindet sich seit einigen Jahren im Aufbau und wird kontinuierlich weiterentwickelt, in enger Abstimmung mit der DSAG und Anwenderundernehmen. Der Funktionsumfang ist im Vergleich zum SAP Solution Manager derzeit noch eingeschränkt und aktuell (Stand: Anfang 2025) eher für kleinere Unternehmen ohne über Jahre gewachsenes ALM sowie für cloud-zentrierte Systemlandschaften geeignet/brauchbar.

Weitere SAP-Produkte aus der ALM-Familie sind SAP Focused Run als eigenständiges On-Premise-System für den Monitoring-Bereich, das in diesem ABAP-Leitfaden jedoch keine (große?) Rolle spielt, sowie die SAP Solution Manager-Addons Focused Build (mit Erweiterungen im (agil...Verweis???) und im Testmamagement, siehe dazu Kapitel ...Verweis...) und Focused Insights für Dashboards jeglicher Art.

In diesem Kapitel wird lediglich auf die im Rahmen der Softwareentwicklung relevanten Aspekte und Werkzeuge eingegangen.

## Nutzen von ALM

Der Nutzen des Application Lifecycle Managements liegt einerseits im Erfüllen von externen Anforderungen, und andererseits auch bei den SAP-Teams im Unternehmen.

So können durch das ALM - korrekt implementiert und stringent angewendet - die Anforderungen von Wirtschaftsprüfern und sämtliche(?) rechtliche Regularien bis hin zum regulierten Umfeld lückenlos erfüllt werden, vom Anforderungsmanagement über ein nachvollziehbares Test- und Transportmanagement bis zur vollständigen Dokumentation einschließlich aller Änderungen, um nur die wichtigsten Aspekte hervorzuheben.

Aus Sicht der SAP-Entwicklung ist in erster Linie das Change and Request Management (ChaRM) hervorzuheben, das die Prozesse und Anwendungen des Anforderungs- und Transportmanagements perfekt verbindet, inklusive definierbarer (Code?-)Prüfungen vor und während Transportvorgängen entlang der Systemlandschaft(?).

Grafik??

Hinsichtlich der Dokumentation besteht unter anderem die Möglichkeit, Entwicklungsobjekte automatisch aus den angebundenen SAP-Systemen auszulesen und anschließend (manuell) den entsprechenden Prozessen zuzuweisen, was etwa die Änderung von Prozessen durch den Entwickler vereinfachen kann.

Im Bereich der Verwaltung von kundeneigenem Code stehen Werkzeuge zur Verfügung, um die (ABAP-)Codequalität aus ATC-Prüfungen über einen Zeitverlauf darzustellen (?) und um nicht mehr gebrauchten Code zu identifizieren mit dem Ziel, diesen aus den ABAP(?)-Systemen zu entfernen. Gerade im Hinblick auf eine geplante S/4HANA-Migration kann das Codestillegungscockpit ein Baustein sein, um unnötigen Ballast schon vor der Syntax(?)-Anpassung loszuwerden und damit Zeit und Ressourcen(?) einzusparen.
