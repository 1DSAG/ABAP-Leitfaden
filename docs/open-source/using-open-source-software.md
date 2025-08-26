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
  - Installation von Fremdsoftware im Entwicklungssystem / Entwickler-PCs / Continuous-Integration-Umgebungen

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

Extern entwickelte Open-Source-Abhängigkeiten dauerhaft gewinnbringend einzusetzen erfordert eine eingehende Bewertung im Vorfeld,
um die in den vorigen Abschnitten genannten Chancen und Risiken gegeneinander abzuwägen.

Insbesondere bezüglich der Risiken existieren bereits veröffentlichte Kriterien, anhand derer eine solche Bewertung vorgenommen
werden kann, z.B. [Bauer et al., "A structured approach to assess third-party library usage"](https://doi.org/10.1109/ICSM.2012.6405311). Kriterien dabei sind unter anderem

- **Angemessenheit** erfasst, wie gut die gewählte Technologie hilft, das vorliegende Problem zu lösen.
- **Dokumentation** fasst die Verfügbarkeit, Vollständigkeit und Qualität der Dokumentation zusammen.
- **Lizenzkompatibilität** erfasst, ob die Lizenz einer Technologie für das Einsatzszenario geeignet ist und ob die Lizenz kompatibel zu den Lizenzen anderer eingesetzter Technologien ist.
- **Verbreitungsgrad** fasst die Marktdurchdringung einer Technologie zusammen.
- **Werkzeugunterstützung** erfasst, ob die Technologie durch Werkzeuge wie z.B. Entwicklungsumgebungen dediziert unterstützt wird oder ob ihr Einsatz diese gar behindert. Dieses Kriterium ist nicht für alle Technologien gleichermaßen anwendbar.
- **Herstellerunterstützung** beschreibt, inwiefern Pflege und Weiterentwicklung einer Technologie durch den Hersteller (das veröffentlichende Unternehmen oder die Open-Source-Community) auch langfristig sichergestellt ist.
- **interne Qualität und Security**

<!--
  author    = {Veronika Bauer and Lars Heinemann and Florian Deissenboeck},
  booktitle = {28th {IEEE} International Conference on Software Maintenance {ICSM}},
  title     = {A structured approach to assess third-party library usage},
  year      = {2012},
  pages     = {483--492},
  publisher = {IEEE Computer Society},
  biburl    = {https://dblp.org/rec/conf/icsm/BauerHD12.bib},
  url       = {https://doi.org/10.1109/ICSM.2012.6405311},
-->

Um diese Kriterien angemessen bewerten zu können, ist eine eingehende Überprüfung (Due Diligence) erforderlich.
Einige "Red Flags" für den Unternehmenseinsatz sind leicht zu identifizieren und können als erste Ausschlusskriterien verstanden werden:
Ist der letzte Commit sehr lange her? Existieren offene Issues, auf die lange Zeit nicht reagiert wurde? Ist keine Lizenz-Information vorhanden oder widerspricht die Lizenz den Vorgaben des eigenen Unternehmens?
In diesen Fällen sollte von der Nutzung der Komponente abgesehen werden.

Die Entscheidung *für* die Nutzung erfordert eine Reihe weiterer Überlegungen und ist immer das Ergebnis einer Abwägung:
Wieviel eigenen Entwicklungsaufwand spart man sich durch die Nutzung der Open-Source-Komponente, und welchem Risiko setzt man sich dadurch aus?

### Best Practices: Bewertungskriterien

**Angemessenheit:** Um die Komponente zu identifizieren, welche die einen Anforderungen am besten erfüllt, sollte zunächst eine Recherche stattfinden, die idealerweise mehrere Kandidaten liefert. Neben der reinen Funktionalität sollte dabei auch jeweils der erforderliche Aufwand abgeschätzt werden, um die Funktionalität zu implementieren, im Vergleich zur Lizenzierung einer kommerziellen Komponente. Insbesondere für gängige Funktionalität empfiehlt sich oft die Nutzung einer Drittanbieter-Komponenten anstatt einer eigenen Implementierung. Dennoch sollte der erwartete Aufwand einer Eigenentwicklung in die Entscheidung einfließen.

Die Angemessenheit beschreibt, inwieweit der geplante Einsatzzweck dem für die Komponente vorgesehenen Szenario entspricht. Sollten bei einer identifizierten Open-Source-Komponente nur wenige Details fehlen, um die eigenen Anforderungen zu erfüllen, ist es auch möglich, diese als eigenen Beitrag zur Open-Source-Komponente bereitzustellen (siehe [Beteiligung an Open Source](../contributing-to-open-source/)). In diesem Fall ist es empfehlenswert, die Anpassung oder Ergänzung an das ursprüngliche Projekt zurückzugeben, damit sichergestellt ist, dass diese bei künftigen Updates kompatibel bleibt.

**Interne Qualität und Security:** Da Open-Source-Komponenten als Code veröffentlicht werden, sollte dieser vor einer Entscheidung zur Nutzung eingehend geprüft werden. Gerade bei größeren Komponenten empfiehlt sich der Einsatz von Codeanalyse-Werkzeugen. Teilweise enthalten die Repositories der Komponenten vielleicht bereits Ergebnis-Reports von Tools wie *abaplint*. In jedem Fall sollten automatische Prüfungen gegenüber den eigenen Sicherheits-Vorgaben durchgeführt werden, sofern dafür ohnehin schon Werkzeuge im Einsatz sind.

Auch die Verständlichkeit des Codes sollte bewertet werden. Dies betrifft einerseits die Klarheit der Schnittstellen (APIs) der verwendeten Komponente, um sie möglichst einfach zu integrieren, andererseit auch interne Merkmale wie die Kommentierung von Klassen und Methoden oder die sprechende Benennung von Klassen oder Variablen. Verständlicher Code erleichtert die Fehlersuche und ggf. künftige Erweiterungen oder Anpassungen. Siehe dazu auch den Abschnitt zu [Code Reviews](../../application-lifecycle-management/ensuring-quality/). Insbesondere für den Fall, dass die Komponente perspektivisch erweitert werden soll (s.o.), ist dies ein wichtiger Aspekt.

**Dokumentation:** Ein Erfolgsfaktor für die Nutzung von Open Source ist die zur Verfügung stehende Dokumentation, insbesondere der durch die Komponente bereitgestellten Schnittstellen (API). Hier sollte insbesondere auf Umfang, Verständlichkeit und Aktualität geachtet werden. Einerseits hilft  Dokumentation beim korrekten Einsatz der Komponente und vermeidet oft den aufwändigen Blick in den Source Code. Andererseits signalisiert sie auch, dass die Komponente zur Nutzung durch die Öffentlichkeit vorgesehen ist, und kann so auch ein Hinweis darauf sein, dass die Komponente selbst gut gepflegt ist (siehe auch "Herstellerunterstützung").

Auch für den Fall, dass Verbesserungen, Anpassungen oder Ergänzungen zurückgespielt werden sollen, bietet es sich an, im Vorfeld auf Dokumentation zum Beitragen von Änderungen zu achten. Oft enthalten Open-Source-Projekte einen "Contribution Guide", etwa in Form einer Datei `Contributing.md`.

**Lizenzkompatibilität:** Gerade im Unternehmenskontext ist die Lizenz einer Open-Source-Komponente von essentieller Bedeutung. Es sollte unbedingt überprüft werden, dass die Komponente unter einer Lizenz veröffentlicht ist, die mit dem geplanten Einsatzzweck kompatibel ist und den eigenen Unternehmensrichtlinien übereinstimmt. Einige Lizenzen könnten etwa fordern, dass man bei Verwendung einer Komponente das gesamte resultierende Softwaresystem unter derselben Lizenz bereitstellen, also den gesamten Sourcecode offenlegen muss. Auch sollte darauf geachtet werden, dass die Lizenz es erlaubt, die Komponente zu modifizieren. Dies könnte entscheidend sein, um Bugs zu beheben oder Funktionen hinzuzufügen, falls die Community-Unterstützung nachlässt. Bei Verwendung mehrerer Open-Source-Komponenten ist außerdem zu beachten, dass deren Lizenzen miteinander kompatibel sind, sich also nicht widersprechen.

Zudem ist zu beachten, dass Open Source nicht automatisch kostenlos bedeutet. Eine Komponente könnte etwa ausschließlich die private Nutzung kostenlos erlauben, während bei kommerzieller Nutzung eine Lizenzgebühr erhoben wird. Hierzu gibt es oft je nach Anwendungsfall (privat, kommerziell) unterschiedliche Lizenzen.

**Verbreitungsgrad:** Bei der Bewertung einer Open-Source-Komponente spielt deren Verbreitungsgrad eine wichtige Rolle. Hauptargument für die Nutzung beliebter und weit verbreiteter Komponenten ist die geringere Abhängigkeit vom jeweiligen Anbieter.

Um die Verbreitung zu bewerten, können verschiedene Kriterien herangezogen werden, etwa die Anzahl der "Sterne" oder Forks auf GitHub, oder die Anzahl der Ergebnisse bei einer Internet-Suche. Bei einer Internet-Recherche sollte natürlich auch die Art der Suchergebnisse betrachtet werden. Eine aktive Diskussion oder Blog Posts zum erfolgreichen Einsatz der Komponente können positive Signale senden, verzweifelte Hilfegesuche oder gehäufte Beschwerden negative. Insbesondere im Kontext der ABAP-Entwicklung ist auch die Haltung der SAP zum jeweiligen Projekt ein wichtiger Hinweis: Erwähnt SAP das Projekt selbst oder nutzt es sogar in seinen eigenen Produkten? Dann ist davon auszugehen, dass eine Nutzung auch im eigenen Projekt vermutlich mit geringem Risiko verbunden ist.

**Werkzeugunterstützung:**

3. Integration und Testing
   Komplexität der Integration: Stellen Sie sicher, dass die Komponente leicht zu verstehen und in Ihr bestehendes System zu integrieren ist.
   Automatisiertes Testing: Überprüfen Sie das Vorhandensein und die Abdeckung automatisierter Tests, um die Zuverlässigkeit und Wartbarkeit zu gewährleisten.
   Kompatibilität mit der Entwicklungsinfrastruktur: Stellen Sie sicher, dass die Komponente gut mit Ihren bestehenden Entwicklungstools und -prozessen harmoniert.

**Herstellerunterstützung:**

5. Verfügbarkeit von Builds/Packages
   Neue Versionen von OSS-Komponenten werden recht häufig veröffentlicht. Berücksichtigen Sie daher stets Folgendes:

Stabile Releases: Wählen Sie Komponenten aus vertrauenswürdigen Repositories mit stabilen Versionen.
Gründe für Updates: Verstehen Sie den Zweck neuer Releases, ob sie neue Funktionalitäten, Bugfixes usw. einführen.
Code-Qualität: Achten Sie auf die Qualität des Codes und die Aktivität der Community rund um die Komponente.

- Verbreitung, aktive Weiterentwicklung, Anzahl Contributors
- "Empfiehlt" SAP das Projekt eventuell auch, oder nutzt dieses?
  - Kommt es vielleicht sogar von der SAP und SAP übernimmt den Support/die Wartung?
- Argument "Keine Software ohne Enterprise Support" durchgehen

### Best Practices: Vorgehen und Prozess

**Regelmäßige Wiedervorlage**

6. Revisionsprozess
   Wir empfehlen eine regelmäßige, periodische Überprüfung aller verwendeten Open-Source-Komponenten, idealerweise einmal pro Jahr. Inkludieren Sie auch die Recherche nach neuen OSS-Projekten, die zentrale Funktionalitäten implementieren, in diesen Revisionsprozess. Dies stellt sicher, dass Ihr Produkt/Ihre Dienstleistung stets die besten verfügbaren Open-Source-Komponenten nutzt.

**Kompetenz**

7. Fähigkeiten und Wartung
   Team-Expertise: Stellen Sie sicher, dass Ihr Team die notwendigen Fähigkeiten besitzt, um die Open-Source-Software zu warten, zu aktualisieren und bereitzustellen.
   Fortbildung: Falls Lücken bestehen, planen Sie Schulungen ein, um die Bereitstellung und Integration effektiv zu handhaben.

**Verantwortlichkeit**

11. Sicherheitsbewusstsein
    Verwaltung von Sicherheitslücken: Erkennen Sie an, dass Open-Source-Komponenten Sicherheitslücken aufweisen können, und haben Sie Strategien bereit, diese umgehend zu beheben.

- Wer kümmert sich um Updates, wer testet diese, bewertet diese
- Verhalten bei Upgrades

### Sicherheitsaspekte

- Worauf hätte die Software Zugriff im System, ist sie nur auf Entwicklung oder auch Produktiv, bestehen Netzwerkverbindungen
- Horrorszenarien durchgehen

## Auslieferung von Open-Source-Abhängigkeiten in eigenen Produkten

Eine Problemstellung bei der Nutzung von Open-Source-Komponenten in der eigenen Software ergibt sich bei der Auslieferung an externe Systeme. Entwickeln Sie ein Produkt / Add-On, welches in Kundensystemen installiert wird, dann ist die Auslieferung der abhängigen Open-Source-Komponenten besonders zu betrachten.

Die meisten Open-Source-ABAP-Projekte verwenden den Kundennamensraum (`Z`/`Y`). Kunden, an die Ihre Software ausgeliefert wird, verwenden auch den Kundennamensraum. Sollte Ihr Add-On einen reservierten Namensraum verwenden (`/NSPC/`), um Namenskollisionen zu verhindern, so gilt diese Garantie nicht für die abhängigen Open-Source-Komponenten. Zudem könnten Kunden Bedenken äußern, wenn Softwareanbieter in ihren Kundennamensraum "eindringen". Es kann sogar sein, dass im Kundensystem die Open-Source-Komponente bereits installiert ist und dort aktiv verwendet wird, aber in einer für Sie unpassenden Version.

{: .solution }
Ein möglicher Lösungsansatz ist die Open-Source-Komponente in Ihren Namensraum zu kopieren und somit isoliert auszuliefern und zu aktualisieren. Mit [abaplint](https://github.com/abaplint/abaplint) ist es möglich, eine CI-Pipeline aufzusetzen, die ein Mirror-Repository der Open-Source-Komponente in Ihrem reserviertem Namensraum aufsetzt und automatisch aktualisiert. Dieses Repository können Sie dann mit ausliefern. abapGit verwendet diese Technik, um das [ajson-Projekt](https://github.com/sbcgua/ajson) zusammen mit abapGit auszuliefern. Details können Sie in folgendem Blog Post lesen: [Automagic standalone renaming of ABAP objects](https://community.sap.com/t5/application-development-and-automation-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851).
