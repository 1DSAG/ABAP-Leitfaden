---
layout: page
title: Einsatz von Open Source
permalink: /open-source/using-open-source/
parent: Open Source
nav_order: 2
---

{: .no_toc}
# Einsatz von Open Source

Dieser Abschnitt beschreibt den Anwendungsfall als Open Source veröffentlichte Software in den eigenen Entwicklungsprozess oder die eigens entwickelte Software zu integrieren. Er entspricht der ersten [Ausbaustufe](/ABAP-Leitfaden/open-source/index.md#ausbaustufen)

1. TOC
{:toc}

## abapGit zum Bezug von Open-Source-Software

Dreh- und Angelpunkt im Kontext von Open Source in der ABAP-Entwicklung ist abapGit. Ohne den Git-Client für ABAP ist eine Zusammenarbeit an einem Softwareprodukt über Systemgrenzen hinweg nicht möglich. In unserem Anwendungsfall, dem Einsatz von Open-Source-Komponenten, ist der Bezug eben dieser mit Hilfe von abapGit einfach möglich. Die Installationsanleitung finden Sie unter [Installation](https://docs.abapgit.org/user-guide/getting-started/install.html). Die Standalone Version reicht in der Regel aus.

Mit abapGit installieren Sie ein Tool in Ihrem System, welches die Versionierung von Paketen mit git erlaubt. Dazu verbindet es sich entweder direkt mit einem Git Host anhand von Online Repositories, wie zum Beispiel github.com, oder es werden ZIP-Dateien ausgetauscht, im Fall von Offline Repositories. Letztere sind insbesondere dann hilfreich, wenn keine Netzwerkkonnektivität zwischen dem SAP-System und dem Internet gewünscht ist.

{: .note }
**Massenverarbeitung mit abapGit**  
In beiden Fällen ermöglicht das Tool jedoch massenhaft Entwicklungsobjekte in Ihr System zu importieren oder auch Entwicklungsobjekte aus Ihrem System zu exportieren. Dies kann für den ein oder anderen ein ungewollter Effekt sein, wo ansonsten doch in der ABAP-Plattform sämtliche Aktivitäten in der Entwicklung umfassend geschützt und über Berechtigungen eingeschränkt werden können.  
Von diesem Gedanken sollten Sie sich allerdings verabschieden. Sie können zwar auch die Verwendung von abapGit anhand von Berechtigungen einschränken, sogar Exits können implementiert werden, um die Berechtigungslogik weiter zu verfeinern. Solange Entwickler aber die Möglichkeit haben im System zu entwickeln, was ihre eigentlich Tätigkeit ist, können Sie mit wenigen Zeilen Coding unter Umgehung aller Berechtigungsprüfungen ein eigenes Datenexportprogramm implementieren oder sich selbst die erforderlichen Berechtigungen zuweisen. Eine zu umfangreiche Reglementierung von Tooling führt zwangsläufig zum Bau von Umgehungen und hindert den Entwicklungsprozess.  
Es ist daher eher zu empfehlen, einen Prozess zu dokumentieren, wie mit dem verfügbaren Tooling sinnvoll und im Team abgestimmt umgegangen wird. Im SAP BTP ABAP Environment und in SAP S/4HANA Cloud Public Edition ist abapGit bereits vorinstalliert.

Weitere Informationen zu abapGit finden Sie auch unter [abapGit als Versionsverwaltung](#abapgit-als-versionsverwaltung) und [abapGit als Enabler von Open Source](/ABAP-Leitfaden/open-source/abapgit-as-enabler).



## abapGit als Versionsverwaltung




## Integration von Open-Source-Tools im Entwicklungsprozess

Einen ersten Schritt zur Auseinandersetzung mit Open-Source-Software in der ABAP-Entwicklung können Sie gehen, indem Sie den Einsatz von Open-Source-Tools in Ihrem Entwicklungsprozess abwägen. Dabei können bereits ein erheblicher Mehrwert oder eine Reduktion von Aufwänden entstehen, ohne, dass eine umfangreiche Strategie entwickelt werden muss.

### Chancen

Viele der Chancen dieses Anwendungsfalls wurden bereits unter [Motivation und Chancen](/ABAP-Leitfaden/open-source/#motivation-und-chancen) mit Beispielen genannt. Zusammenfassen lässt sich der Einsatz der Einsatz von Open-Source-Tools im Entwicklungsprozess als eine Entlastung der Entwickler, da Arbeitsschritte automatisiert werden oder die Qualitätsvorgaben automatisch geprüft / Verletzungen der Vorgaben automatisch korrigiert werden.

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
