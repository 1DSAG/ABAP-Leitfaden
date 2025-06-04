---
layout: page
title: Das ABAP RESTful Application Programming Model (RAP)
permalink: /abap/restful_abap/
parent: Moderne ABAP Entwicklung
nav_order: 5
---

{: .no_toc}
# ABAP RESTful Application Programming Model (RAP)

1. TOC
{:toc}


## Einleitung
Das [ABAP RESTful Application Programming Model](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/289477a81eec4d4e84c0302fb6835035.html?locale=en-US), kurz _RAP_, wurde seitens der SAP 2019 erstmalig vorgestellt und ist seit dem S/4 Release 2019 nutzbar. Konzeptuell weist es viele Parallelen zum [ABAP-Programming Model for SAP Fiori](https://help.sap.com/docs/ABAP_PLATFORM/cc0c305d2fab47bd808adcad3ca7ee9d/3b77569ca8ee4226bdab4fcebd6f6ea6.html?mt=de-DE) auf und kann daher als dessen spiritueller Nachfolger gesehen werden.  

Beide Programmiermodelle geben die nötigen Entwicklungsobjekte und deren Zusammenspiel vor um in einem S/4 System Applikationen und Schnittstellen mit eigener Datenhaltung aufzubauen. Die Weiterentwicklung zu RAP hat die Entwicklung nochmals deutlich vereinfacht und kommt gänzlich ohne SAP GUI Transaktionen oder SEGW Services aus. Auch bei RAP dreht sich die gesamte Anwendungslogik um ein sogenanntes Business Objekt, das Datenhaltung und vorhandene Businesslogik definiert und Konsumenten anbietet. Erste Wahl sollte RAP sein, wenn transaktionale Fiori Elements Applikationen zu entwickeln sind (List Report & Object Page). Aber auch rein lesende APIs, SAPUI5 Freestyle Apps oder SAP-fremde UI-Technologien lassen sich mit RAP umsetzen durch die Nutzung der resultierenden OData-Services.

RAP bildet dabei das komplette E2E-Szenario von der Datenbankschicht bis hin zum veröffentlichten OData-Service ab. Das Business Objekt (BO) wird einerseits durch das virtuelle Datenmodell (VDM) sowie andererseits durch das (optional) verfügbare Verhalten definiert. Im VDM werden durch die Anlage von CDS-Views die Felder aus der Datenbank selektiert und über Beziehungen zwischen den CDS-Views der BO Composition Tree festgelegt. Dieser besteht immer aus einer Wurzel-Entität (Root, beispielsweise eine Reise mit entsprechend möglichen Instanzen) und beliebig vielen Kind-Entitäten (etwa eine oder mehrere Instanzen von Flugbuchungen unterhalb der Reise). Dieser Kompositionsbaum kann beliebig tief aufgebaut werden. Jede Kind-Entität kann dabei lediglich gemeinsam mit ihrem direkten Elter exististieren und dessen Schlüssel ist Teil des eigenen.  

## Empfehlungen / Best Practices 
>* RAP sollte frühestens ab Release 2020 produktiv genutzt werden. Setzen Sie sich bei Bedarf detailliert mit dem eingeschränkten Funktionsumfang im Release 2019 (wie das Fehlen von Validations, Determinations, Draft, ...) auseinander!  
* Da RAP als Technologie relativ neu ist gibt es teils eklatante Unterschiede je nach S/4 Release. Machen Sie sich mit den Einschränkungen ihres Systems vorab vertraut!  
* Wann immer möglich sollten neue Applikationen mit Fiori Elements umgesetzt werden. SAPUI5 Freestyle-Apps verlocken gerne dazu, sich durch zusätzliche Freiheiten in erhöhte Komplexität locken zu lassen und führen in der Regel zu deutlichem Mehraufwand.
{: .highlight}

## Hauptinhalt
Einleitung..

![RAP Big Picture, © SAP](./img/RAP.png)
  
RAP Big Picture, © SAP
{: .img-caption}

Datenmodell: Datenbank

Virtuelles Datenmodell (VDM) via CDS Views aufbauen - diese wurden zuvor im Kapitel [Core Data Services](./core-data-services/index.md) erläutert.

RAP

Die SAP stellt ein zentrales Repository bereit, das als Beispielapplikation in ihrem S/4 System installiert werden kann. Diese [RAP Feature Showcase App](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase) zeigt Ihnen interaktiv, welche Funktionalitäten mit RAP und Fiori Elements generell umgesetzt werden können und hilft Ihnen dabei, die nötigen Entwicklungen direkt im System nachzuvollziehen.

## Migration von CDS-generiertem BOPF
Sie haben die Möglichkeit [Migration von CDS-generiertem BOPF zu RAP über Migration Guide](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/0a54d0c8a2be4136a8b5d41a367dd537/2e48e205756c4dafb02ef0e2ff14b1bc.html?locale=en-US)  

## Verfügbarkeitsübersicht der Features

**1909**
+ Erstes Release von RAP, EML in ABAP Syntax
+ Nur Unterstützung von Queries (read-only) und unmanaged transaktionalen Apps mit Legacy-Coding.
+ Nur OData v2

**2020**
+ Virtuelle Elemente im CDS-View fürs RAP-BO (vgl. Transiente Felder im BOPF)
+ Managed Scenario, Unmanaged/Additional Save (Custom Save Handler), Unmanaged Lock
+ Draft Scenario (total eTag)
+ OData v4
+ Type & Control MappingOData Navigation über mehr als zwei BO-Hierarchie-Ebenen
+ Dokumentation via Knowledge Transfer Document für Behavior Definition, Service Binding
+ Actions/Functions erlauben andere Entitäten / Strukturen als Result-Rückgabeparameter
+ Control-Struktur für Create liefert Information, welche Felder nicht vom Client befüllt wurden
+ Dynamisches Operation/Feature Control
+ Einführung der DVM (Determinations-Validations-Machine) mit Trigger Operationen + Feldern

**2021**
+ Zusätzliche Implementierung für Draft Actions
+ Simulationsmodus für COMMIT ENTITIES (EML)
+ Singleton-Root-Instanz für Multi-Line Editierung mehrerer Haupt-Entitäten (Customizing-Einträge, etc.)
+ Zusätzliche Actions, Functions in Behavior Projection
+ InA Service für CDS Analytische Queries

**2022**
+ Erweiterbarkeit von RAP Business Objekten
+ Business Events (Define & Raise)
+ Abstraktions-Ebene via Business Object Interface
+ Large Objects (Binärdateien, Datei-Upload)
+ ADT-Wizard: Generate ABAP Repository Objects (RAP-Generierung auf Basis einer Datenbanktabelle)
+ Instance Factory Actions zur Erzeugung von Entitäten
+ Read Access Logging für RAP BOs

**2023**
+ Side Effects zum Triggern von Feld-Aktualisierungen
+ Erweiterbarkeit von Service Definitions
+ Initiales Release des Background Processing Framework
+ Migrations-Tool für bestehende BOPF BOs (siehe unten)
+ Consumption von Business Events

**2025, verfügbar ab Herbst**
+ RAP-Modellierung von Hierarchien
+ Fiori Elements Applikationen zur Änderung von RAP-Hierarchien
  
## Weiterführende Quellen
+ [RAP Feature Matrix der Software Heroes](https://software-heroes.com/en/abap-feature-matrix)
+ [Migration von CDS-generiertem BOPF zu RAP über Migration Guide](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/0a54d0c8a2be4136a8b5d41a367dd537/2e48e205756c4dafb02ef0e2ff14b1bc.html?locale=en-US)  
+ [RAP Feature Showcase App](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase)


## Notizen TODOS
+ aber auch CDS (annotationen) und UI5 Control Beispiele
+ Framework - dedizierte Stellen wo was passiert  
+ Trennung Technik von Businesslogik  
+ Viele Geschenke durch Framework 
+ Integrieren & Querverweise zu anderen Kapiteln
+ Framework gibt die Trennung der einzelnen Entwicklungsobjekte sowieso schon vor
+ Mehr zum Flex Model schreiben
+ Peter Bescheidgeben & um Feedback fragen