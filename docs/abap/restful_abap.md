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
* In der Regel sollten Sie für Neuentwicklungen das integrierte Draft-Konzept nutzen und lediglich bei triftigen Gründen darauf verzichten.
* Da RAP als Technologie relativ neu ist gibt es teils eklatante Unterschiede je nach S/4 Release. Machen Sie sich mit den Einschränkungen ihres Systems vorab vertraut!  
* Wann immer möglich sollten neue Applikationen mit Fiori Elements umgesetzt werden. SAPUI5 Freestyle-Apps verlocken gerne dazu, sich durch zusätzliche Freiheiten in erhöhte Komplexität locken zu lassen und führen in der Regel zu deutlichem Mehraufwand.
{: .highlight}

## Entwicklungen mit RAP
Per Definition trennt das RAP-Framework die einzelnen Entwicklungsobjekte ohnehin und gibt dadurch die Softwarearchitektur und eine saubere Trennung ohnehin vor. Die tatsächliche Anwendungslogik wird dabei strikt von der Datenhaltung getrennt. Diese strikten Vorgaben des Framework erleichtern Entwickler:innen das Orientieren und Implementieren von Anwendungen und nimmt viel Arbeit diesbezüglich ab. Das nachstehende Bild zeigt das grobe Zusammenspiel der Teilelemente in RAP Programmierungen.  

![RAP Big Picture, © SAP](./img/RAP.png)
  
RAP Big Picture, © SAP
{: .img-caption}

### Datenbankebene
Bei Neuentwicklungen sollte stets das Managed Szenario genutzt werden um möglichst viele Funktionalitäten (CRUD-Handlung, Draft, ...) automatisiert vom Framework zu nutzen und manuellen Entwicklungsaufwand zu reduzieren. Einige Unterschiede im [Unmanaged Szenario](#unmanaged-szenario) finden Sie unten. Auf unterster Ebene wird das Datenmodell für das RAP Business Objekt klassisch via DDIC Tabellen oder auf neueren Systemen mit CDS Tabellenentitäten erstellt. Jeder Knoten, der später über RAP als eigenes EntitySet veröffentlicht werden soll, erhält eine eigene Datenhaltung. Es ist darauf zu achten, UUIDs als Schlüssel zu verwenden und den UUID-Schlüssel aller hierarchisch obergeordneten Knoten mit einzubeziehen.

### Virtuelles Datenmodell
Basierend auf den Tabellen wird nun das Virtuelle Datenmodell (VDM) via CDS Views aufgebaut - mehr Informationen zu diesem Entwicklungsobjekt finden Sie im Kapitel [Core Data Services](../core-data-services/index.md). Gemäß der SAP-Empfehlungen sollten hierfür mehrere Ebenen oder Layer aufgebaut werden (von unten nach oben):
* **I_** Interface Layer (Umbenennung der Felder, Definition der Annotationen, entfällt ggf. bei Nutzung von CDS Table Entities)  
* **R_** Reuse Layer (Composition Tree für RAP)  
* **C_** Consumption Layer (Projektion mit App-spezifischen UI-Annotationen)  

### Behavior Definition & Pool
Bezieht sich auf die CDS Root Reuse View.

### Behavior Projection
Bezieht sich auf die CDS Root Consumption View.

### OData Veröffentlichung

### Erweiterbarkeit
Beachten Sie, sämtliche Entwicklungsobjekte für die Erweiterung freizugeben, falls dies gewünscht ist.

### Unmanaged Szenario
Unterschiede zum oben beschriebenen

### RAP Feature Showcase App
Die SAP stellt ein zentrales Repository bereit, das als Beispielapplikation in ihrem S/4 System installiert werden kann. Diese [RAP Feature Showcase App](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase) zeigt Ihnen interaktiv, welche Funktionalitäten mit RAP und Fiori Elements generell umgesetzt werden können und hilft Ihnen dabei, die nötigen Entwicklungen direkt im System nachzuvollziehen. Nach der Installation können Sie die App auf Ihrem S/4 System ausführen und alle verfügbaren Möglichkeiten erkunden. Die App gibt auch konkrete Auskunft dazu, wie bestimmte Funktionen umgesetzt werden können.

### Migration von CDS-generiertem BOPF
Sie haben die Möglichkeit, bestehende BOPF-Anwendungen in das modernere RAP Framework zu migrieren, wenn diese nicht mit der BOBX-Transaktion sondern über @ObjectModel-Annotationen aus CDS heraus generiert wurden. Weitere Informationen zur Vorgehensweise finden Sie im offiziellen [Migration Guide Migration von CDS-generiertem BOPF zu RAP](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/0a54d0c8a2be4136a8b5d41a367dd537/2e48e205756c4dafb02ef0e2ff14b1bc.html?locale=en-US).  

## Verfügbarkeitsübersicht der Features
Wie oben erwähnt machte das RAP-Framework insbesondere direkt nach Release große Sprünge von S/4 Version zu S/4 Version. Welche Features Sie daher nutzen können hängt stark von Ihrem Systemstand ab. Vor dem Release 2020 ist in den meisten Fällen von der Nutzung abzuraten. Die folgende Auflistung soll Ihnen eine erste Orientierung ermöglichen, welche Features ab wann unterstützt werden und was künftig erwartet werden kann.

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
+ Ausschließlich CDS-basiertes Datenmodell (CDS Table Entities als Persistenz, CDS Simple Types, CDS Exact Cardinalities, CDS Scalar Functions, CDS Aspects)
+ RAP-Modellierung von Hierarchien
+ Kollaborativer Draft (Parallele Zusammenarbeit an einer BO-Instanz)
+ Fiori Elements Tabellen zur Anzeige und Änderung von RAP-Hierarchien
  
## Weiterführende Quellen
+ [RAP Cloud Documentation](https://help.sap.com/docs/ABAP_PLATFORM_NEW/fc4c71aa50014fd1b43721701471913d/289477a81eec4d4e84c0302fb6835035.html?locale=en-US)
+ [RAP Feature Matrix der Software Heroes](https://software-heroes.com/en/abap-feature-matrix)
+ [RAP Feature Cheat Sheet](https://www.brandeis.de/blog/cheat-sheet-sap-rap-basics-de)
+ [Migration von CDS-generiertem BOPF zu RAP über Migration Guide](https://help.sap.com/docs/SAP_S4HANA_ON-PREMISE/0a54d0c8a2be4136a8b5d41a367dd537/2e48e205756c4dafb02ef0e2ff14b1bc.html?locale=en-US)  
+ [RAP Feature Showcase App](https://github.com/SAP-samples/abap-platform-fiori-feature-showcase)  
+ [SAP Samples: RAP Repositories](https://github.com/orgs/SAP-samples/repositories?q=rap)
+ [SAP Learning Course: Building Apps with RAP](https://learning.sap.com/courses/building-apps-with-the-abap-restful-application-programming-model)
+ [SAP Learning Journey: Creating a Fiori Elements App with RAP OData V4](https://learning.sap.com/learning-journeys/getting-started-with-creating-an-sap-fiori-elements-app-based-on-an-odata-v4-rap-service)
+ [SAP Technology Blog: Getting Started with RAP](https://community.sap.com/t5/technology-blog-posts-by-sap/getting-started-with-the-abap-restful-application-programming-model-rap/ba-p/13420829)


## Notizen TODOS
+ Mehr zum Flex Model schreiben
+ Peter Bescheidgeben & um Feedback fragen
+ [Fiori Elements Feature Map](https://sapui5.hana.ondemand.com/#/topic/62d3f7c2a9424864921184fd6c7002eb)