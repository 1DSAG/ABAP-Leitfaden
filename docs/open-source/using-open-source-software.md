---
layout: page
title: Einsatz von Open-Source-Software
permalink: /open-source/using-open-source-software/
parent: Open Source
nav_order: 2
---

{: .no_toc}
# Einsatz von Open-Source-Software

Dieser Abschnitt beschreibt den Anwendungsfall als Open-Source-Software in den eigenen Entwicklungsprozess oder die eigens entwickelte Software zu integrieren. Er thematisiert damit die erste [Ausbaustufe](/ABAP-Leitfaden/open-source/#ausbaustufen).

1. TOC
{:toc}

## abapGit zum Bezug von Open-Source-Software

Dreh- und Angelpunkt im Kontext von Open Source in der ABAP-Entwicklung ist abapGit. Ohne den Git-Client für ABAP ist eine Zusammenarbeit an einem Softwareprodukt über Systemgrenzen hinweg nicht möglich. In unserem Anwendungsfall, dem Einsatz von Open-Source-Komponenten, ist der Bezug eben dieser mit Hilfe von abapGit sehr einfach. Die Installationsanleitung finden Sie unter [Installation](https://docs.abapgit.org/user-guide/getting-started/install.html). Die Standalone Version reicht in der Regel aus.

Mit abapGit installieren Sie ein Tool in Ihrem System, welches die Versionierung von Objekten einer Pakethierarchie mit [git](https://git-scm.com/) erlaubt. Dazu verbindet es sich entweder direkt mit einem Git Host anhand von Online-Repositories, wie zum Beispiel github.com, oder es werden ZIP-Dateien ausgetauscht, im Fall von Offline-Repositories. Letztere sind insbesondere dann hilfreich, wenn keine Netzwerkkonnektivität zwischen dem SAP-System und dem Internet gewünscht ist.

{: .note }
**Massenverarbeitung mit abapGit**  
In beiden Fällen ermöglicht das Tool massenhaft Entwicklungsobjekte in Ihr System zu importieren oder auch Entwicklungsobjekte aus Ihrem System zu exportieren. Dies kann für den ein oder anderen ein ungewollter Effekt sein, wo ansonsten doch in der ABAP-Plattform sämtliche Aktivitäten in der Entwicklung umfassend geschützt und über Berechtigungen eingeschränkt werden können.  
Von diesem Gedanken sollten Sie sich allerdings verabschieden. Sie können zwar auch die Verwendung von abapGit anhand von Berechtigungen einschränken, sogar [Exits](https://docs.abapgit.org/user-guide/reference/authorizations.html) können implementiert werden, um die Berechtigungslogik weiter zu verfeinern. Solange Entwickler aber die Möglichkeit haben im System zu entwickeln, was ihre eigentlich Tätigkeit ist, können Sie mit wenigen Zeilen Coding unter Umgehung aller Berechtigungsprüfungen ein eigenes Datenexportprogramm implementieren oder sich selbst die erforderlichen Berechtigungen zuweisen. Eine zu umfangreiche Reglementierung von Tooling führt zwangsläufig zum Bau von Workarounds und hindert den Entwicklungsprozess.  
Es ist daher eher zu empfehlen, einen Prozess zu definieren, wie mit dem verfügbaren Tooling sinnvoll und im Team abgestimmt umgegangen wird.

## Wer stellt ABAP-Open-Source-Software bereit?

Eine umfangreiche Auflistung von auf GitHub publizierten Open-Source-ABAP-Projekten finden Sie auf [dotabap.org](https://dotabap.org). Eigene Projekte, die den Anforderungen für die Listung entsprechen, können Sie bei [dotabap-list](https://github.com/dotabap/dotabap-list) über eine Pull Request einreichen.

![Screenshot dotabap.org](/ABAP-Leitfaden/open-source//img/dot-abap-dot-org.png)

Screenshot dotabap.org
{: .img-caption}

## Wer nutzt ABAP-Open-Source-Software?

Auf der Seite [Who Uses abapGit?](https://docs.abapgit.org/user-guide/other/where-used.html) der abapGit-Dokumentation finden Sie eine Auflistung an Unternehmen, die abapGit einsetzen und sich aktiv für eine Listung entschieden haben. Daraus ist abzuleiten, dass sie mindestens abapGit selbst als Open-Source-Software nutzen. Auch SAP nutzt Open-Source-ABAP. abapGit ist in einer angepassten Version in SAP S/4HANA Cloud Public Edition und dem SAP BTP ABAP Environment [vorinstalliert](https://help.sap.com/docs/btp/sap-business-technology-platform/working-with-abapgit?locale=en-US). Projekte wie [Code Pal for ABAP](https://github.com/SAP/code-pal-for-abap-cloud), [Project Kernseife](https://github.com/SAP/project-kernseife) und [RAP Generator](https://github.com/SAP-samples/cloud-abap-rap) sind auf GitHub verfügbar und mit der Open-Source-Lizenz Apache 2.0 versehen.

## Integration von Open-Source-Tools im Entwicklungsprozess

Einen ersten Schritt zur Auseinandersetzung mit Open-Source-Software in der ABAP-Entwicklung können Sie gehen, indem Sie den Einsatz von Open-Source-Tools in Ihrem Entwicklungsprozess abwägen. Dabei kann bereits eine Reduktion von Aufwänden entstehen, ohne, dass eine umfangreiche Open-Source-Strategie entwickelt werden muss.

- **Chancen**
  - Reduzierung von Aufwänden durch Verwendung von Generatoren
  - Erhöhung der Codequalität durch Einsatz von zusätzlichen Codeanalysewerkzeugen
- **Risiken**
  - Installation von Fremdsoftware im Entwicklungssystem / Entwickler-PCs / Continous-Integration-Umgebungen

Viele der Chancen dieses Anwendungsfalls wurden bereits unter [Motivation und Chancen](/ABAP-Leitfaden/open-source/#motivation-und-chancen) mit Beispielen genannt. Zusammenfassen lässt sich der Einsatz von Open-Source-Tools im Entwicklungsprozess als eine Entlastung der Entwickler, da Arbeitsschritte automatisiert werden oder die Qualitätsvorgaben automatisch geprüft / Verletzungen der Vorgaben früh und teilweise automatisch korrigiert werden können.

Um die Chancen nutzen zu können, muss die gewählte Open-Source-Software installiert werden. Abhängig von der Software passiert dies auf Entwickler-PCs, in Continuous-Integration-Umgebungen oder im SAP-System. Wie unter [Lizenzen](/ABAP-Leitfaden/open-source/licenses.md) ersichtlich ist, schließen Open-Source-Lizenzen Haftung und Garantie aus, sofern keine gesonderte Vereinbarung getroffen wird. Es ergeben sich folgerecht sicherheitsrelevante Implikationen für die Installation und Nutzung der Software. Auf dieses Thema wird in [Bewertung und Lebenszyklus einer externen Abhängigkeit](#bewertung-und-lebenszyklus-einer-externen-abhängigkeit) näher eingegangen.

## Nutzung von Open-Source-Bibliotheken in der eigenen Software

Eine optionale Erweiterung dieser Ausbaustufe ist die Nutzung von Open-Source-Bibliotheken in Ihrer eigenen Software. In diesem Fall integrieren Sie die gewählten Bibliotheken über API-Aufrufe und liefern die diese mit aus. Hier ergibt sich ein noch deutlich größerer Mehrwert, da Funktionen in Ihren Anwendungen bereitgestellt werden können, die andernfalls nicht mit verhältnismäßigem Aufwand entwickelbar oder wartbar gewesen wären. Es ergibt sich aber zwangsläufig die Fragestellung, wie mit solchen Open-Source-Komponenten in produktiven Umgebungen und in der Auslieferung von Software umgegangen wird. Die Wichtigkeit von [Bewertung und Lebenszyklus einer externen Abhängigkeit](#bewertung-und-lebenszyklus-einer-externen-abhängigkeit) wird damit nochmal deutlich erhöht.

- **Chancen**
  - Reduzierung von Aufwänden durch Integration von fertigen Komponenten
  - Erhöhung des Funktionsumfangs Ihrer Anwendungen
- **Risiken**
  - Installation und Auslieferung von Fremdsoftware

## Bewertung und Lebenszyklus einer externen Abhängigkeit

TODO
{: .label .label-red }

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
- Externes Coding gelangt ins System, welches ggf. nicht geprüft wurde und Sicherheitslücken oder Schadsoftware enthält
- Externes Coding gelangt ins System, welches einen separaten Softwarelebenszyklus hat. Wie mit Updates umgehen?
- Externes Coding gelangt ins System, welches standardmäßig keinen Support hat. Wie mit Problemen umgehen? Was ist bei Betrieb-stilllegenden-Bug im Produktivsystem in der externen Software?
- Tooling wird eingeführt, mit dem Entwickler einfach externes Coding installieren können. Wie halte ich die davon hab, dass sie einfach alles installieren und die Systemstabilität kompromittieren?
- Sicherheitsaspekte
- Verhalten bei Upgrades
- Bewertung der Lizenz und Kompatibilität zwischen Lizenzen
- Support: Argument "Keine Software ohne Enterprise Support" durchgehen
- Andreas?

End-TODO
{: .label .label-red }

## Auslieferung von Open-Source-Abhängigkeiten in eigenen Produkten

Eine Problemstellung bei der Nutzung von Open-Source-Komponenten in der eigenen Software ergibt sich bei der Auslieferung an externe Systeme. Entwickeln Sie ein Produkt / Add-On, welches in Kundensystemen installiert wird, dann ist die Auslieferung der abhängigen Open-Source-Komponenten besonders zu betrachten.

Die meisten Open-Source-ABAP-Projekte verwenden den Kundennamensraum (`Z`/`Y`). Kunden, an die Ihre Software ausgeliefert wird, verwenden auch den Kundennamensraum. Sollte Ihr Add-On einen reservierten Namensraum verwenden (`/NSPC/`), um Namenskollisionen zu verhindern, so gilt diese Garantie nicht für die abhängigen Open-Source-Komponenten. Zudem könnten Kunden Bedenken äußern, wenn Softwareanbieter in ihren Kundennamensraum "eindringen". Es kann sogar sein, dass im Kundensystem die Open-Source-Komponente bereits installiert ist und dort aktiv verwendet wird, aber in einer für Sie unpassenden Version.

{: .solution }
Ein möglicher Lösungsansatz ist die Open-Source-Komponente in Ihren Namensraum zu kopieren und somit isoliert auszuliefern und zu aktualisieren. Mit [abaplint](https://github.com/abaplint/abaplint) ist es möglich eine CI-Pipeline aufzusetzen, die ein Mirror-Repository der Open-Source-Komponente in Ihrem reserviertem Namensraum aufsetzt und automatisch aktualisiert. Dieses Repository können Sie dann mit ausliefern. abapGit verwendet diese Technik, um das [ajson](https://github.com/sbcgua/ajson) Projekt mit in abapGit auszuliefern. Details können Sie in folgendem Blog-Post lesen: [Automagic standalone renaming of ABAP objects](https://community.sap.com/t5/application-development-and-automation-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851).
