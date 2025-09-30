---
layout: page
title: Architekturkonzepte
permalink: /clean-core/architectural-concepts/
parent: Clean Core
nav_order: 4
---

{: .no_toc}
# Architekturkonzepte

1. TOC
{:toc}


## Einstieg

Dieser Abschnitt befasst sich mit den möglichen Architekturen im Bereich Clean Core, wobei Sie mehr über On-Stack und Side-by-Side erfahren und wie Sie diese in Ihrer Architektur implementieren können. Die Extensibility und ihre Implementierung ist die Schlüsselkomponente für Ihr Unternehmen, um Clean Core zu erreichen. Dabei beschreibt Extensibility alle Kundenerweiterungen in einem SAP-Standardsystem sowie Partner-AddOns.


## Szenarien
Grundsätzlich haben Sie die Möglichkeit, Ihr System über On-Stack und/oder Side-by-Side Extensibility zu erweitern. Hier finden Sie eine schematische Darstellung der Möglichkeiten. 

![Extensibility Szenarien](./img/image-08.png)

Extensibility Szenarien
{: .img-caption}


### On-Stack

Auf der linken Seite finden Sie die On-Stack Extensibility, unterteilt in Pro Code und Low Code. Im Bereich Pro Code finden Sie die klassische ABAP Cloud Entwicklung mit dem Clean Core Level Concept, der Verwendung von Shared APIs und der Erweiterung von Objekten (C0-Objekte). Mehr zum Thema ABAP Cloud finden Sie im entsprechenden Abschnitt von Clean Core. 

Im Low Code Bereich gibt es vor allem die Key-User Extensibility, das sind einige Fiori Anwendungen, mit denen man das System erweitern kann. Die häufigsten Szenarien in diesem Bereich sind

* Field Extension - Erstellen Sie neue Z-Felder von der Datenbank bis zur UI über die Anwendung.
* Anpassung der Benutzeroberfläche - Passen Sie Fiori-Anwendungen an, benennen Sie Elemente um oder zeigen Sie die neuen Z-Felder an. Erstellen Sie Varianten und stellen Sie diese Ihren Fachabteilungen zur Verfügung.
* Eigene Logik - Implementieren Sie eigene BADIs und erweitern Sie den Prozess um eigene Prüfungen.
* Eigene Core Data Services - Erstellen Sie auf Basis der freigegebenen Views eigene Core Data Services und stellen Sie diese als APIs nach außen zur Verfügung.
* uvm.

Die Apps sind in erster Linie für Ihre Key-User gedacht, da sie einfache Änderungen im System ermöglichen. Die Änderungen werden über das Standard Change Management (z.B. CTS) produktiv gesetzt.

### Side-by-Side

Auf der rechten Seite finden Sie die Side-by-Side Extensibility, hier geht es um die entkoppelte Entwicklung außerhalb des Kernsystems. In diesem Beispiel handelt es sich um die Business Technology Platform, kurz BTP. Hier finden Sie verschiedene Werkzeuge und Systeme, mit denen Sie Anwendungen zur Erweiterung des Systems erstellen können.

* SAP BTP ABAP Environment - Erweiterungen auf Basis von ABAP in der Cloud entwickeln.
* SAP Build Code - Erweiterungen auf Basis von Java oder JavaScript entwickeln.

Neben den Pro Code Lösungen finden Sie hier auch Low Code und No Code Lösungen aus dem SAP Build Portfolio. Hier ein kleiner Überblick über die gängigen Tools und deren Einsatz.

* SAP Build Apps - Erstellen Sie hier Fiori und Mobile Apps per Drag'n Drop und einfachen Skripten. Die Apps werden dann im BTP zur Verfügung gestellt.
* SAP Build Process Automation - Wenn Sie einen Workflow oder eine Automatisierung benötigen, können Sie diese mit der Process Automation erstellen und sowohl SAP- als auch Non-SAP-Systeme anbinden.
* SAP Build Work Zone - Wenn Sie einen zentralen Zugriff auf alle SAP Anwendungen benötigen, egal ob On-Stack oder Side-by-Side, dann kann die Work Zone eine Alternative sein. Neben der Standard Edition gibt es auch eine Advanced Edition mit kollaborativen Funktionen.


## Strategie

Bevor Sie mit der Arbeit beginnen, sollten Sie sich Gedanken um die Erweiterungsstrategie machen. Das heißt, welche Tools und Umgebungen wollen Sie für die Erweiterungen einsetzen. 

### Modelle
Dabei sind einige Faktoren des Unternehmens zu berücksichtigen:

* Plattform - Welches Erweiterungsmodell möchten Sie im Unternehmen einsetzen (CAP oder RAP). Damit verbunden, wie viele Entwickler benötigen Sie in den Bereichen.
* Know-how - Ist das entsprechende Know-how für die Umgebung vorhanden oder muss es erst aufgebaut werden? Im Bereich ABAP wären dies CDS, RAP und Fiori Elements. Im Bereich CAP JavaScript oder Java, Build Pipelines, Git und BTP.


Dazu die folgende Detailgrafik mit den verschiedenen Szenarien.


![Tools und Strategie](./img/image-09.png)

Tools und Strategie
{: .img-caption}

Ihnen steht das gesamte Produktportfolio der SAP zur Verfügung, wobei jedes Produkt eigene Kompetenzen und Voraussetzungen erfordert. Wir empfehlen daher dringend, eine Strategie zu entwickeln.

### Kopplung

Bei der Kopplung geht es um die unterschiedlichen Anforderungen, die eine Anwendung mit sich bringt. Soll die Anwendung On-Premise oder Side-by-Side entwickelt werden? In diesem [Artikel](https://software-heroes.com/blog/abap-cloud-clean-core-szenarien) finden Sie verschiedene Kriterien, wann sich welche Umgebung lohnt. Grundsätzlich sollten Sie aber verstehen, dass Sie Clean Core auch On-Premise auf Ihrem eigenen System erreichen können und nicht zwingend die Side-by-Side Entwicklung benötigen.

Die beiden Kopplungsszenarien sind:

* Eng gekoppelt - Die Anwendung sollte On-Premise erstellt werden.
* Lose gekoppelt - Die Anwendung kann auch in der Cloud entwickelt werden.

## Make the Core clean
Wenn Sie den Brownfield-Ansatz gewählt und Ihr System auf S/4HANA migriert haben und sich für Clean Core entscheiden, empfiehlt sich eine schrittweise Migration Ihrer Anwendungen. Dabei lohnen sich vor allem häufig genutzte Anwendungen, um schnell von SAP Fiori zu profitieren. So können Sie Anwendung für Anwendung prüfen, welche Sie modernisieren oder vielleicht sogar stilllegen können, weil sie nicht mehr benötigt werden. Ein erster Überblick mit einer Inventarisierung ist daher sinnvoll.