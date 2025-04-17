---
layout: page
title: Einsatz von Open Source
permalink: /open-source/using-open-source/
parent: Open Source
nav_order: 3
---

{: .no_toc}
# Einsatz von Open Source

1. TOC
{:toc}

## Chancen

## Risiken

- Tooling wird neu eingeführt, welches die Hürde erheblich senkt, um massenhaft proprietäres Coding zu extrahieren und "zur Konkurrenz mitzunehmen"
- Tooling wird eingeführt, welches massenhaft Entwicklungsobjekte im System ändern kann. Fehlbedienung könnte zu Datenverlust in der Codebase führen.
- Externes Coding gelangt ins System, welches ggf. nicht geprüft wurde und Sicherheitslücken oder Schadsoftware enthält
- Externes Coding gelangt ins System, welches einen separaten Softwarelebenszyklus hat. Wie mit Updates umgehen?
- Externes Coding gelangt ins System, welches standardmäßig keinen Support hat. Wie mit Problemen umgehen? Was ist bei Betrieb-stilllegenden-Bug im Produktivsystem in der externen Software?
- Tooling wird eingeführt, mit dem Entwickler einfach externes Coding installieren können. Wie halte ich die davon hab, dass sie einfach alles installieren und die Systemstabilität kompromittieren?

## Wer stellt Open-Source-Software bereit?

Eine umfangreiche Auflistung von auf GitHub gehosteten Open-Source-ABAP-Projekten finden Sie auf [dotabap.org](https://dotabap.org).

(Screenshot)

- Dotabap.org
- SAP Open Source Manifesto

## Wer nutzt Open-Source-Software?

- Who Uses abapGit? - abapGit Docs

## Bewertung und Lebenszyklus einer externen Abhängigkeit

- Verbreitung, aktive Weiterentwicklung, Anzahl Contributors
- Wer kümmert sich um Updates, wer testet diese, bewertet diese
- Worauf hätte die Software Zugriff im System, ist sie nur auf Entwicklung oder auch Produktiv, bestehen Netzwerkverbindungen
- Entscheidungsmatrix SAP aus Open Source Forum
- Due Diligence
- (Support, ...)
- Wie verbreitet ist das OpenSource Projekt/Produkt?
- "Empfiehlt" SAP das Projekt eventuell auch, oder nutzt dieses?
- Wird das OpenSource Projekt in Blogs erwähnt? Wie ist die Bewertung in diesen Blog‘s?
- Bevor man sich für Open Source oder ein bestimmtes Open Source Projekt entscheidet, sollte man folgende Dinge prüfen bzw. folgende Fragestellungen für sich beantworten:
  - Unter welcher Lizenz wird das jeweilige Projekt veröffentlicht?
  - Was sind die Lizenzbedingungen? Kann ich diese erfüllen?
  - Open Source bedeutet nicht automatisch kostenlos, was sind die Lizenzkosten?
  - Wie verbreitet ist ein Open Source Projekt?
  - Kommt es vielleicht sogar von der SAP und SAP übernimmt den Support/die Wartung?
  - Empfiehlt die SAP ein bestimmtes Projekt, oder nutzt es gar selbst?
  - Was sagt die Community zu einem Projekt, wie ist das Feedback, wie bekannt ist es (in Diskussionsforen ...), wie ist die „Bewertung“?
  - ...
- Andreas?

## Sicherheitsaspekte

- Horrorszenarien durchgehen

## Verhalten bei Upgrades

## Lizenzen

- "Diese Lizenz ist wichtig. Sie kann auch die kommerzielle Nutzung untersagen oder eine kompatible Lizenz für alle durchgeführten Modifikationen erzwingen. Ebenfalls können Lizenzen verschiedener Open-Source-Projekte und die Lizenz der eigenen Software miteinander inkompatibel sein."

Siehe auch [Lizenzen Allgemein](/ABAP-Leitfaden/open-source/index#lizenzen)

## Support

- Argument "Keine Software ohne Enterprise Support" durchgehen

## Auslieferung von Open-Source-Abhängigkeiten in eigenen Produkten

- Namensräume, Rename, Lizenzen, kein Z beim Kunden
