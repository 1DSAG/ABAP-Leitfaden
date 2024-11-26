---
layout: page
title: Einsatz von Open Source
permalink: /open-source/using-open-source/
parent: Open Source
prev_page_link: /open-source/
prev_page_title: Open Source
next_page_link: /open-source/contributing-to-open-source/
next_page_title: Beteiligung an Open-Source
nav_order: 1
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

<!-- Andreas -->

Extern entwickelte Open-Source-Abhängigkeiten dauerhaft gewinnbringend einzusetzen erfordert eine eingehende Bewertung im Vorfeld, 
um die in den vorigen Abschnitten genannten Chancen und Risiken gegeneinander abzuwägen. 

Insbesondere bezüglich der Risiken existieren bereits veröffentlichte Kriterien, anhand derer eine solche Bewertung vorgenommen
werden kann, z.B. [^1]. Kriterien dabei sind unter anderem

* Angemessenheit: Die *Angemessenheit* erfasst, wie gut die gewählte Technologie hilft, das vorliegende Problem zu lösen.
* Dokumentation: Das Kriterium *Dokumentation* fasst die Verfügbarkeit, Vollständigkeit und Qualität der Dokumentation zusammen.
* Lizenzkompatibilität: Die *Lizenzkompatibilität* erfasst, ob die Lizenz einer Technologie für das Einsatzszenario geeignet ist und ob die Lizenz kompatibel zu den Lizenzen anderer eingesetzter Technologien ist.
* Verbreitungsgrad: Der *Verbreitungsgrad* fasst die Marktdurchdringung einer Technologie zusammen.
* Werkzeugunterstützung: Die *Werkzeugunterstützung* erfasst, ob die Technologie durch Werkzeuge wie z.B. Entwicklungsumgebungen dediziert unterstützt wird oder ob ihr Einsatz diese gar behindert. Dieses Kriterium ist nicht für alle Technologien gleichermaßen anwendbar.
* Herstellerunterstützung: Die *Herstellerunterstützung* beschreibt, inwiefern Pflege und Weiterentwicklung einer Technologie durch den Hersteller (in diesem Fall die Open-Source-Community) auch langfristig sichergestellt ist. 



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


[^1] Bauer et al., "A structured approach to assess third-party library usage", in 28th IEEE International Conference on Software Maintenance (ICSM)", <https://doi.org/10.1109/ICSM.2012.6405311>

<!--
@InProceedings{2012_bauerv_library,
  author    = {Veronika Bauer and Lars Heinemann and Florian Deissenboeck},
  booktitle = {28th {IEEE} International Conference on Software Maintenance {ICSM}},
  title     = {A structured approach to assess third-party library usage},
  year      = {2012},
  pages     = {483--492},
  publisher = {IEEE Computer Society},
  bibsource = {dblp computer science bibliography, https://dblp.org},
  biburl    = {https://dblp.org/rec/conf/icsm/BauerHD12.bib},
  doi       = {10.1109/ICSM.2012.6405311},
  timestamp = {Wed, 16 Oct 2019 14:14:50 +0200},
  url       = {https://doi.org/10.1109/ICSM.2012.6405311},
}
-->

## Sicherheitsaspekte

- Horrorszenarien durchgehen

## Verhalten bei Upgrades

## Lizenzen

- "Die Lizenz einer Open-Source-Komponente ist wichtig. Sie kann auch die kommerzielle Nutzung untersagen oder eine kompatible Lizenz für alle durchgeführten Modifikationen erzwingen. Ebenfalls können Lizenzen verschiedener Open-Source-Projekte und die Lizenz der eigenen Software miteinander inkompatibel sein."

## Support

- Argument "Keine Software ohne Enterprise Support" durchgehen

## Auslieferung von Open-Source-Abhängigkeiten in eigenen Produkten

- Namensräume, Rename, Lizenzen, kein Z beim Kunden
