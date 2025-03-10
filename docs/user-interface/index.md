---
layout: page
title: UI
permalink: /user-interface/
nav_order: 8
---

{: .no_toc}
# User Interface (UI)

1. TOC
{:toc}

## Einleitung 
Dieses Kapitel gibt einen Überblick über verschiedene UI-Technologien, die im Kontext von ABAP-System zum Einsatz kommen. Der Hauptfokus liegt relevanzbedingt auf Fiori und SAPUI5. Im späteren Verlauf wird jedoch auch auf CRM Web UI sowie andere, teils ältere Technologien eingegangen.

## Fiori / SAPUI5
Unter dem Begriff **Fiori** sammeln sich in der SAP-Welt mehrere Teilbereiche:
* Fiori als Designsprache moderner Oberflächen
* Fiori-Empfehlungen zu guter User Experience
* Fiori Elements Technologie zur annotationsgestützten Generierung von Applikationen
* Entwicklung von Fiori-Apps mit SAPUI5

Wenn auch mittlerweile archiviert sei an dieser Stelle dennoch auf den (englischsprachigen) [DSAG UI5 Best Practice Guide](https://1dsag.github.io/UI5-Best-Practice/) hingewiesen.

SAPUI5 ist die strategische Oberflächentechnologie der SAP und sollte in den meisten Fällen von Neuentwicklungen als gesetzte Technologie angesehen werden. In der folgenden Tabelle werden die Vor- und Nachteile von SAPUI5 gegenübergestellt. 

| Vorteile SAPUI5                      | Nachteile SAPUI5           |
| ------------------------------------ | ------------------------- | 
| Umfassende SAmmlung von Standard-UI-Elementen, die die Implementierung stark vereinfachen. | JavaScript erforderlich (ABAP nur im BackEnd). Daher Skill-Aufbau notwendig. |
| Modernstes Aussehen | SAP Gateway erforderlich (bei der separaten Installation zusätzliche Kosten) |
| Theoretisch ist alles möglich, was HTML5 in Verbindung mit JavaScript erlaubt. | In Spezialfällen u.U. fehlende Features und schlechtere Performance gegenüber SAP GUI / ALV. |
| Nutzung auf Tablets und Smartphones. | Komplexe Apps erfordern mehr Aufwand (Stateless Apps) |
| Responsive UI (Automatische Anpassung an das jeweilige Endgerät) | |
| Nutzung der Endgerätefähigkeiten wie z.B. Kameras | |
| Native SAP-Fiori-Launchpad-Integration | |
| Relativ neue, ständig weiterentwickelte Technologie. Daher optimale Integration in aktuelle Web-Browser | |

### Fiori Elements
Zur Entwicklung wird auf den [DSAG ADT Leitfaden](https://1dsag.github.io/ADT-Leitfaden/) verwiesen, da die nötigen UI Annotationen zur Generierung von Fiori Elements Apps nur in der Entwicklungsumgebung Eclipse angelegt werden können. Grundsätzlich ist auch die Entwicklung mit dem Cloud Application Programming Model (CAP) möglich - im Kontext dieses ABAP Leitfadens jedoch nicht weiter im Fokus.

### Fiori Freestyle

### Flexible Programming Model
Input Gregor Wolf

## CRM Web UI
Input Gregor Wolf

## Legacy Technologien
Dieses Kapitel soll einen kurzen Überblick über bisher nicht genannte Oberflächentechnologien geben. Da diese im Laufe der Zeit immer mehr an Relevanz verlieren wird an dieser Stelle nicht näher auf einzelne Technologien eingegangen.  

| UI-Technologie                       | SAP-Roadmap               | Kommentar           | Empfehlung für Neuentwicklungen           |
| ------------------------------------ | ------------------------- | ------------------- |  ---------------------------------------- |
| Dynpro (klassisch) | nur noch Support | SAP rät von Neuentwicklungen ab. Geringerer Entwicklungsaufwand, vor allem bei einfachen Reports mit generiertem Selektionsbild. Bei Power-Usern beliebt. | Für kleinere Entwicklungen in vielen Fällen weiterhin sinnvoll |
| Business Server Pages (BSP) | nur noch Support | Durch Web Dynpro abgelöst | Nicht sinnvoll |
| Webclient UIF | nur noch Support | Im CRM auf Basis der BSP-Technologie entwicklet und im Einsatz | Für klassische CRM-Apps weiterhin relevant. SAP Hybris C4C setzt hier auf SAPUI5 / SAP Fiori |
| Web Dynpro Java | nur noch Support | Sollte nicht mehr verwendet werden | Nicht sinnvoll |
| Web Dynpro ABAP inkl. Floorplan Manager | Kleinere Erweiterungen | In Kombination mit Floorplan Manager weniger aufwändig als Standalone. | Stattdessen SAPUI5 in Erwägung ziehen. |
| SAP Screen Personas | Kleinere Erweiterungen | Konfiguration und Scripting (Java-Script), um existierende Anwendungen auf Basis klassischer Dynpros attraktiver und besser bedienbar zu machen. | Für UI-Überarbeitung existeriender Dynpro-Programme sinnvoll. |




