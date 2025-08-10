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

- *Angemessenheit* erfasst, wie gut die gewählte Technologie hilft, das vorliegende Problem zu lösen.
- *Dokumentation* fasst die Verfügbarkeit, Vollständigkeit und Qualität der Dokumentation zusammen.
- *Lizenzkompatibilität* erfasst, ob die Lizenz einer Technologie für das Einsatzszenario geeignet ist und ob die Lizenz kompatibel zu den Lizenzen anderer eingesetzter Technologien ist.
- *Verbreitungsgrad* fasst die Marktdurchdringung einer Technologie zusammen.
- *Werkzeugunterstützung* erfasst, ob die Technologie durch Werkzeuge wie z.B. Entwicklungsumgebungen dediziert unterstützt wird oder ob ihr Einsatz diese gar behindert. Dieses Kriterium ist nicht für alle Technologien gleichermaßen anwendbar.
- *Herstellerunterstützung* beschreibt, inwiefern Pflege und Weiterentwicklung einer Technologie durch den Hersteller (in diesem Fall die Open-Source-Community) auch langfristig sichergestellt ist.
- *interne Qualität und Security*

Um diese Kriterien angemessen bewerten zu können, ist eine eingehende Überprüfung (Due Diligence) erforderlich.
Einige "Red Flags" für den Unternehmenseinsatz sind leicht zu identifizieren und können als erste Ausschlusskriterien verstanden werden:
Ist der letzte Commit sehr lange her? Existieren offene Issues, auf die lange Zeit nicht reagiert wurde? Ist keine Lizenz-Information vorhanden oder widerspricht die Lizenz den Vorgaben des eigenen Unternehmens?
In diesen Fällen sollte von der Nutzung der Komponente abgesehen werden.

Die Entscheidung *für* die Nutzung erfordert eine Reihe weiterer Überlegungen und ist immer das Ergebnis einer Abwägung:
Wieviel eigenen Entwicklungsaufwand spart man sich durch die Nutzung der Open-Source-Komponente, und welchem Risiko setzt man sich dadurch aus?

### Best Practices

**Angemessenheit** Um die Komponente zu identifizieren, welche die einen Anforderungen am besten erfüllt, sollte zunächst eine Recherche stattfinden, die idealerweise mehrere Kandidaten liefert. Neben der reinen Funktionalität sollte dabei auch jeweils der erforderliche Aufwand abgeschätzt werden, um die Funktionalität zu implementieren, im Vergleich zur Lizenzierung einer kommerziellen Komponente. Insbesondere für gängige Funktionalität empfiehlt sich oft die Nutzung einer Drittanbieter-Komponenten anstatt einer eigenen Implementierung. Dennoch sollte der erwartete Aufwand einer Eigenentwicklung in die Entscheidung einfließen. Sollten bei einer identifizierten Open-Source-Komponente nur wenige Details fehlen, um die eigenen Anforderungen zu erfüllen, ist es auch möglich, diese als eigenen Beitrag zur Open-Source-Komponente bereitzustellen (siehe [Beteiligung an Open Source](../contributing-to-open-source/))

**Interne Qualität und Security** Da Open-Source-Komponenten als Code veröffentlicht werden, sollte dieser vor einer Entscheidung zur Nutzung eingehend geprüft werden. Gerade bei größeren Komponenten empfiehlt sich der Einsatz von Codeanalyse-Werkzeugen. Teilweise enthalten die Repositories der Komponenten vielleicht bereits Ergebnis-Reports von Tools wie abaplint. In jedem Fall sollten automatische Prüfungen gegenüber den eigenen Sicherheits-Vorgaben durchgeführt werden, sofern dafür ohnehin schon Werkzeuge im Einsatz sind.

Auch die Verständlichkeit des Codes sollte bewertet werden. Dies betrifft einerseits die Klarkeit der Schnittstellen (APIs) der verwendeten Komponente, um sie möglichst einfach zu integrieren, andererseit auch interne Merkmale wie die Kommentierung von Klassen und Methoden oder die sprechende Benennung von Klassen oder Variablen. Verständlicher Code erleichtert die Fehlersuche und ggf. künftige Erweiterungen oder Anpassungen. Siehe dazu auch den Abschnitt zu [Code Reviews](../../application-lifecycle-management/ensuring-quality/).

2. Einbeziehung der Stakeholder
Kollaborative Entscheidungsfindung: Binden Sie alle relevanten Teammitglieder und Rollen in die Auswahl der geeigneten Open-Source-Komponenten ein.
Egal, ob Sie eine Shortlist für eine bestimmte Funktionalität erstellen können oder nicht – stellen Sie sicher, dass alle relevanten Stakeholder in den Entscheidungsprozess einbezogen werden. Mindestens sollten folgende Rollen beteiligt sein:

Entwickler
Sicherheitsspezialisten
Projektmanager
Produktverantwortliche

3. Integration und Testing
Komplexität der Integration: Stellen Sie sicher, dass die Komponente leicht zu verstehen und in Ihr bestehendes System zu integrieren ist.
Automatisiertes Testing: Überprüfen Sie das Vorhandensein und die Abdeckung automatisierter Tests, um die Zuverlässigkeit und Wartbarkeit zu gewährleisten.

4. Dokumentation
Die Präsenz gut gepflegter Dokumentation zeigt, dass die Komponente von guter Qualität ist und Sie Unterstützung sowie weitere Entwicklung erwarten können.

Benutzerdokumentation: Enthält Beschreibungen, beispielsweise zur Nutzung eines Systems. Die Beschreibung kann je nach verschiedenen Rollen unterschiedlich sein.
Entwicklerdokumentation: Beschreibt, wie man zum Projekt beiträgt (Code hinzufügt oder ändert). Wenn die OSS Erweiterungsunterstützung bietet, enthält die Dokumentation in der Regel Informationen zur Implementierung solcher Erweiterungen. Für Bibliotheken stellen Sie sicher, dass eine gute API-Dokumentation vorhanden ist.

5. Verfügbarkeit von Builds/Packages
Neue Versionen von OSS-Komponenten werden recht häufig veröffentlicht. Berücksichtigen Sie daher stets Folgendes:

Stabile Releases: Wählen Sie Komponenten aus vertrauenswürdigen Repositories mit stabilen Versionen.
Gründe für Updates: Verstehen Sie den Zweck neuer Releases, ob sie neue Funktionalitäten, Bugfixes usw. einführen.

6. Revisionsprozess
Wir empfehlen eine regelmäßige, periodische Überprüfung aller verwendeten Open-Source-Komponenten, idealerweise einmal pro Jahr. Inkludieren Sie auch die Recherche nach neuen OSS-Projekten, die zentrale Funktionalitäten implementieren, in diesen Revisionsprozess. Dies stellt sicher, dass Ihr Produkt/Ihre Dienstleistung stets die besten verfügbaren Open-Source-Komponenten nutzt.

7. Fähigkeiten und Wartung
Team-Expertise: Stellen Sie sicher, dass Ihr Team die notwendigen Fähigkeiten besitzt, um die Open-Source-Software zu warten, zu aktualisieren und bereitzustellen.
Fortbildung: Falls Lücken bestehen, planen Sie Schulungen ein, um die Bereitstellung und Integration effektiv zu handhaben.

8. Infrastruktur und Technischer Support
Kompatibilität mit der Entwicklungsinfrastruktur: Stellen Sie sicher, dass die Komponente gut mit Ihren bestehenden Entwicklungstools und -prozessen harmoniert.
Compliance und Sicherheit: Halten Sie sich an Lizenz-, Sicherheits- und Exportkontrollvorschriften und seien Sie bereit, Abhängigkeiten zu verwalten.
Weitere Überlegungen:

Lizenzkonformität: Verstehen Sie die Lizenzanforderungen der OSS und stellen Sie sicher, dass diese mit Ihren Unternehmensrichtlinien übereinstimmen.
Code-Qualität: Achten Sie auf die Qualität des Codes und die Aktivität der Community rund um die Komponente.

10. Lizenzüberlegungen
Permissive Lizenzen: Bevorzugen Sie Lizenzen, die flexibler sind, Änderungen erlauben und die Einschränkungen minimieren.
Rechte zur Modifikation: Stellen Sie sicher, dass die Lizenz es Ihnen erlaubt, die Komponente zu modifizieren, was entscheidend ist, um Bugs zu beheben oder Funktionen hinzuzufügen, falls die Community-Unterstützung nachlässt.

11. Sicherheitsbewusstsein
Verwaltung von Sicherheitslücken: Erkennen Sie an, dass Open-Source-Komponenten Sicherheitslücken aufweisen können, und haben Sie Strategien bereit, diese umgehend zu beheben.

### TODO weitere Punkte

- Verbreitung, aktive Weiterentwicklung, Anzahl Contributors
- Wer kümmert sich um Updates, wer testet diese, bewertet diese
- Worauf hätte die Software Zugriff im System, ist sie nur auf Entwicklung oder auch Produktiv, bestehen Netzwerkverbindungen
- Entscheidungsmatrix SAP aus Open Source Forum (-> Fabian fragt beim Referenten nach)
- (Support, ...)
- Wie verbreitet ist das OpenSource Projekt/Produkt?
- "Empfiehlt" SAP das Projekt eventuell auch, oder nutzt dieses?
- Wird das OpenSource Projekt in Blogs erwähnt? Wie ist die Bewertung in diesen Blogs?
- Bevor man sich für Open Source oder ein bestimmtes Open Source Projekt entscheidet, sollte man folgende Dinge prüfen bzw. folgende Fragestellungen für sich beantworten:
  - Open Source bedeutet nicht automatisch kostenlos, was sind die Lizenzkosten?
  - Wie verbreitet ist ein Open Source Projekt?
  - Kommt es vielleicht sogar von der SAP und SAP übernimmt den Support/die Wartung?
  - Empfiehlt die SAP ein bestimmtes Projekt, oder nutzt es gar selbst?
  - Was sagt die Community zu einem Projekt, wie ist das Feedback, wie bekannt ist es (in Diskussionsforen ...), wie ist die „Bewertung“?
  - ...

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
