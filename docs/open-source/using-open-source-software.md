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

Eine optionale Erweiterung dieser Ausbaustufe ist die Nutzung von Open-Source-Bibliotheken in Ihrer eigenen Software. In diesem Fall integrieren Sie die gewählten Bibliotheken über API-Aufrufe und liefern diese mit aus. Hier ergibt sich ein noch deutlich größerer Mehrwert, da Funktionen in Ihren Anwendungen bereitgestellt werden können, die andernfalls nicht mit verhältnismäßigem Aufwand entwickelbar oder wartbar gewesen wären. Es ergibt sich aber zwangsläufig die Fragestellung, wie mit solchen Open-Source-Komponenten in produktiven Umgebungen und in der Auslieferung von Software umgegangen wird. Die Wichtigkeit von [Bewertung und Lebenszyklus einer externen Abhängigkeit](#bewertung-und-lebenszyklus-einer-externen-abhängigkeit) wird damit nochmal deutlich erhöht.

- **Chancen**
  - Reduzierung von Aufwänden durch Integration von fertigen Komponenten
  - Erhöhung des Funktionsumfangs Ihrer Anwendungen
- **Risiken**
  - Installation und Auslieferung von Fremdsoftware

## Bewertung und Lebenszyklus einer externen Abhängigkeit

Extern entwickelte Open-Source-Abhängigkeiten (im Folgenden auch "Komponenten" genannt) dauerhaft gewinnbringend einzusetzen erfordert eine eingehende Bewertung im Vorfeld,
um die in den vorigen Abschnitten genannten Chancen und Risiken gegeneinander abzuwägen.

Insbesondere bezüglich der Risiken existieren bereits veröffentlichte Kriterien, anhand derer eine solche Bewertung vorgenommen
werden kann, z.B. [Bauer et al., "A structured approach to assess third-party library usage"](https://doi.org/10.1109/ICSM.2012.6405311). Kriterien dabei sind unter anderem

- **Angemessenheit** erfasst, wie gut die gewählte Komponente hilft, das vorliegende Problem zu lösen.
- **Dokumentation** fasst die Verfügbarkeit, Vollständigkeit und Qualität der Dokumentation zusammen.
- **Lizenzkompatibilität** erfasst, ob die Lizenz einer Komponente für das Einsatzszenario geeignet ist und ob die Lizenz kompatibel zu den Lizenzen anderer eingesetzter Komponenten ist.
- **Verbreitungsgrad** fasst die Marktdurchdringung einer Komponente zusammen.
- **Werkzeugunterstützung** erfasst, ob die Komponente durch Werkzeuge wie z.B. Entwicklungsumgebungen dediziert unterstützt wird oder ob ihr Einsatz diese gar behindert. Dieses Kriterium ist nicht für alle Komponenten gleichermaßen anwendbar.
- **Herstellerunterstützung** beschreibt, inwiefern Pflege und Weiterentwicklung einer Komponente durch den Hersteller (das veröffentlichende Unternehmen oder die Open-Source-Community) auch langfristig sichergestellt ist.
- **interne Qualität und Security** erfasst, inwiefern eine Komponente interne Qualitätskriterien wie Wartbarkeit, Verständlichkeit berücksichtigt und ob Mechanismen existieren um die Sicherheit zu überprüfen und auf Sicherheitsmängel zu reagieren.

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

**Angemessenheit:** Um die Komponente zu identifizieren, welche die einen Anforderungen am besten erfüllt, sollte zunächst eine Recherche stattfinden, die idealerweise mehrere Kandidaten liefert. Neben der reinen Funktionalität sollte dabei auch jeweils der erforderliche Aufwand abgeschätzt werden, um die Funktionalität zu implementieren, im Vergleich zur Lizenzierung einer kommerziellen Komponente. Insbesondere für gängige Funktionalität empfiehlt sich oft die Nutzung einer Drittanbieter-Komponenten anstatt einer eigenen Implementierung. Dennoch sollte der erwartete Aufwand einer Eigenentwicklung in die Entscheidung einfließen, genauso wie das zu erwartende Risiko. Insbesondere, wenn Drittanbietercode in einem Produktivsystem potenziell Zugriff auf geschäftskritische Daten hat, muss dies Teil der Bewertung sein.

Die Angemessenheit beschreibt, inwieweit der geplante Einsatzzweck dem für die Komponente vorgesehenen Szenario entspricht. Sollten bei einer identifizierten Open-Source-Komponente nur wenige Details fehlen, um die eigenen Anforderungen zu erfüllen, ist es auch möglich, diese als eigenen Beitrag zur Open-Source-Komponente bereitzustellen (siehe [Beteiligung an Open Source](../contributing-to-open-source/)). In diesem Fall ist es empfehlenswert, die Anpassung oder Ergänzung an das ursprüngliche Projekt zurückzugeben, damit sichergestellt ist, dass diese bei künftigen Updates kompatibel bleibt.

Ein wichtiger Teilaspekt der Angemessenheit ist, inwiefern die Komponente Teil der eigenen Anwendung werden soll, also im Produktivsystem ausgeführt werden soll, oder ausschließlich für die Entwicklung eingesetzt wird, also etwa zum Generieren von Code aus API-Beschreibungen. Dies spielt auch bei der Betrachtung der Lizenz eine wichtige Rolle (siehe "Lizenzkompatibilität").

**Interne Qualität und Security:** Da Open-Source-Komponenten als Code veröffentlicht werden, sollte dieser vor einer Entscheidung zur Nutzung eingehend geprüft werden. Gerade bei größeren Komponenten empfiehlt sich der Einsatz von Codeanalyse-Werkzeugen. Teilweise enthalten die Repositories der Komponenten vielleicht bereits Ergebnis-Reports von Tools wie *abaplint*. In jedem Fall sollten automatische Prüfungen gegenüber den eigenen Sicherheits-Vorgaben durchgeführt werden, sofern dafür ohnehin schon Werkzeuge im Einsatz sind. Auch das Vorhandensein automatisierter Tests ist ein guter Indikator für die Zuverlässigkeit und Wartbarkeit einer Open-Source-Komponente.

Darüber hinaus sollte die Verständlichkeit des Codes betrachtet werden. Dies betrifft einerseits die Klarheit der Schnittstellen (APIs) der verwendeten Komponente, um sie möglichst einfach zu integrieren, andererseit auch interne Merkmale wie die Kommentierung von Klassen und Methoden oder die sprechende Benennung von Klassen oder Variablen. Verständlicher Code erleichtert die Fehlersuche und ggf. künftige Erweiterungen oder Anpassungen. Siehe dazu auch den Abschnitt zu [Code Reviews](../../application-lifecycle-management/ensuring-quality/). Insbesondere für den Fall, dass die Komponente perspektivisch erweitert werden soll (s.o.), ist dies ein wichtiger Aspekt.

**Dokumentation:** Ein Erfolgsfaktor für die Nutzung von Open Source ist die zur Verfügung stehende Dokumentation, insbesondere der durch die Komponente bereitgestellten Schnittstellen (API). Hier sollte insbesondere auf Umfang, Verständlichkeit und Aktualität geachtet werden. Einerseits hilft  Dokumentation beim korrekten Einsatz der Komponente und vermeidet oft den aufwändigen Blick in den Source Code. Andererseits signalisiert sie auch, dass die Komponente zur Nutzung durch die Öffentlichkeit vorgesehen ist, und kann so auch ein Hinweis darauf sein, dass die Komponente selbst gut gepflegt ist (siehe auch "Herstellerunterstützung").

Auch für den Fall, dass Verbesserungen, Anpassungen oder Ergänzungen zurückgespielt werden sollen, bietet es sich an, im Vorfeld auf Dokumentation zum Beitragen von Änderungen zu achten. Oft enthalten Open-Source-Projekte einen "Contribution Guide", etwa in Form einer Datei `Contributing.md`.

**Lizenzkompatibilität:** Gerade im Unternehmenskontext ist die Lizenz einer Open-Source-Komponente von essentieller Bedeutung. Es sollte unbedingt überprüft werden, dass die Komponente unter einer Lizenz veröffentlicht ist, die mit dem geplanten Einsatzzweck kompatibel ist und den eigenen Unternehmensrichtlinien übereinstimmt. Einige Lizenzen könnten etwa fordern, dass man bei Verwendung und Auslieferung einer Komponente als Teil einer größeren Anwendung die gesamte Anwendung unter derselben Lizenz bereitstellen, also den gesamten Sourcecode offenlegen muss. Sollte eine Komponente hingegen ausschließlich als Entwicklungs-Tooling zum Einsatz kommen und keine Auslieferung in ein Produktivsystem erfolgen, könnte eine solche Klausel gegebenenfalls gar nicht zur Anwendung kommen. Hier empfiehlt sich in jedem Fall eine Abstimmung mit der eigenen Rechtsabteilung.

Auch sollte darauf geachtet werden, dass die Lizenz es erlaubt, die Komponente zu modifizieren. Dies könnte entscheidend sein, um Bugs zu beheben oder Funktionen hinzuzufügen, falls die Community-Unterstützung nachlässt. Bei Verwendung mehrerer Open-Source-Komponenten ist außerdem zu beachten, dass deren Lizenzen miteinander kompatibel sind, sich also nicht widersprechen. Zudem ist zu beachten, dass Open Source nicht automatisch kostenlos bedeutet. Eine Komponente könnte etwa ausschließlich die private Nutzung kostenlos erlauben, während bei kommerzieller Nutzung eine Lizenzgebühr erhoben wird. Hierzu gibt es oft je nach Anwendungsfall (privat, kommerziell) unterschiedliche Lizenzen.

**Verbreitungsgrad:** Bei der Bewertung einer Open-Source-Komponente spielt deren Verbreitungsgrad eine wichtige Rolle. Hauptargument für die Nutzung beliebter und weit verbreiteter Komponenten ist die geringere Abhängigkeit vom jeweiligen Anbieter.

Um die Verbreitung zu bewerten, können verschiedene Kriterien herangezogen werden, etwa die Anzahl der "Sterne" oder Forks auf GitHub, oder die Anzahl der Ergebnisse bei einer Internet-Suche. Bei einer Internet-Recherche sollte natürlich auch die Art der Suchergebnisse betrachtet werden. Eine aktive Diskussion oder Blog Posts zum erfolgreichen Einsatz der Komponente können positive Signale senden, verzweifelte Hilfegesuche oder gehäufte Beschwerden negative. Insbesondere im Kontext der ABAP-Entwicklung ist auch die Haltung der SAP zum jeweiligen Projekt ein wichtiger Hinweis: Erwähnt SAP das Projekt selbst oder nutzt es sogar in seinen eigenen Produkten? Dann ist davon auszugehen, dass eine Nutzung auch im eigenen Projekt vermutlich mit geringem Risiko verbunden ist.

**Werkzeugunterstützung:** Eine wichtige Eigenschaft bei der Auswahl von Open-Source-Komponenten stellt die Integrierbarkeit mit der bestehenden Entwicklungs-Infrastruktur dar. Da diese in der ABAP-Welt recht einheitlich ist, spielt dieses Kriterium eine untergeordnete Rolle. Ein Pluspunkt wäre etwa, wenn es für gängige Fehlerquellen in Bezug auf die Nutzung der Komponente direkt ATC-Checks mitgeliefert würden. Ein weiteres Beispiel für Werkzeugunterstützung ist die Übertragbarkeit in den eigenen Namensraum wie unter [Auslieferung in eigenen Produkten](#auslieferung-von-open-source-abhängigkeiten-in-eigenen-produkten) beschrieben. Der dort skizzierte Ansatz über *abaplint* in einer Pipeline funktioniert grundsätzlich, unterstützt aber nicht alle Arten von Codeobjekten.

**Herstellerunterstützung:** Bei der Verwendung einer Open-Source-Komponente begibt man sich grundsätzlich in eine Abhängigkeit zu deren Anbieter. Daher empfiehlt es sich vorab zu prüfen, inwiefern die Komponente durch den Anbieter aktiv weiterentwickelt wird. Nur so ist etwa im Falle von Fehlern oder Sicherheitsmängeln davon auszugehen, dass diese zeitnah behoben werden. Indikatoren hierfür können die Anzahl von Beitragenden ("Contributors"), die Häufigkeit von Codeänderungen ("Commits") sowie die Release-Frequenz sein. Neben der reinen Aktivität ist auch der Umgang mit Releases und Versionen zu beachten. Gibt es Haupt- und Nebenversionen? Werden Änderungen eines Releases klar dokumentiert und auf eventuell inkompatible Änderungen explizit hingewiesen?

Die Begriffe "Hersteller" oder "Anbieter" bedeuten dabei ausdrücklich *nicht*, dass es sich um ein Unternehmen handeln muss. Viele erfolgreiche Open-Source-Komponenten werden durch eine Community Freiwilliger betreut und können trotzdem mit gutem Gewissen im Unternehmenskontext eingesetzt werden, sofern eine gewisse Kontinuität gewährleistet ist und die eigenen Unternehmensrichtlinien nichts Gegensätzliches fordern. Community-Projekte dieser Art bieten oft keine kommerziellen Supportverträge an, was den Einsatz in einigen Unternehmen erschweren kann. Kommt die Komponente jedoch von einem namhaften Unternehmen wie etwa der SAP selbst, erleichtert dies oft den internen Freigabeprozess. Andererseits sind Open-Source-Projekte aus der Community oft besonders schnell in der Behebung von Fehlern.

### Best Practices: Vorgehen und Prozess

**Regelmäßige Wiedervorlage:** Beim Einsatz von Open-Source-Komponenten empfiehlt es sich grundsätzlich, eine regelmäßige Überprüfung aller oben genannten Kriterien durchzuführen um auf Änderungen auf Seiten der Open-Source-Projekte oder in der eigenen Anwendung reagieren zu können. Eine Anpassung des eigenen Funktionsumfangs kann etwa zu einer anderen Bewertung hinsichtlich der Angemessenheit einer Komponente führen, oder ein Wechsel in der Projektstruktur, dessen Aktivität oder Lizenz führt zu einer neuen Risikobewertung. Idealerweise schließt eine solche Überprüfung auch die Recherche nach neueren Open-Source-Projekten mit ein, welche für den eigenen Anwendungsfall vielleicht noch besser geeignet sind.

**Kompetenz:** Die Arbeit mit der Open-Source-Community erfordert eine gewisse Fähigkeiten im Team, etwa zum Melden von Fehlern oder Änderungswünschen an die betreffenden Projekte, oder zum Einreichen von Pull Requests, um eigene Anpassungen vorzunehmen und der Community zurückzugeben. Falls an dieser Stelle Erfahrungen in Ihrem Team fehlen, sollten Sie Schulungen einplanen, um die Arbeit mit den Open-Source-Projekten möglichst effektiv gestalten zu können.

**Aktualisierungen:** Vorgehen und Verantwortlichkeiten für die Aktualisierung externer Abhängigkeiten sollten definiert sein. Wann immer eine Komponente in einer neuen Version verfügbar wird, muss diese Änderung hinsichtlich der Relevanz für die eigene Anwendung bewertet werden. Im positiven Fall muss die Änderung integriert und getestet werden, bis sie schließlich in die Produktivumgebung übernommen werden kann. Ein eingespieltes Vorgehen ist insbesondere bei Bekanntwerden eines Sicherheitsproblems in einer Open-Source-Komponente relevant, um schnell reagieren zu können.

## Auslieferung von Open-Source-Abhängigkeiten in eigenen Produkten

Eine Problemstellung bei der Nutzung von Open-Source-Komponenten in der eigenen Software ergibt sich bei der Auslieferung an externe Systeme. Entwickeln Sie ein Produkt / Add-On, welches in Kundensystemen installiert wird, dann ist die Auslieferung der abhängigen Open-Source-Komponenten besonders zu betrachten.

Die meisten Open-Source-ABAP-Projekte verwenden den Kundennamensraum (`Z`/`Y`). Kunden, an die Ihre Software ausgeliefert wird, verwenden auch den Kundennamensraum. Sollte Ihr Add-On einen reservierten Namensraum verwenden (`/NSPC/`), um Namenskollisionen zu verhindern, so gilt diese Garantie nicht für die abhängigen Open-Source-Komponenten. Zudem könnten Kunden Bedenken äußern, wenn Softwareanbieter in ihren Kundennamensraum "eindringen". Es kann sogar sein, dass im Kundensystem die Open-Source-Komponente bereits installiert ist und dort aktiv verwendet wird, aber in einer für Sie unpassenden Version.

{: .solution }
Ein möglicher Lösungsansatz ist die Open-Source-Komponente in Ihren Namensraum zu kopieren und somit isoliert auszuliefern und zu aktualisieren. Mit [abaplint](https://github.com/abaplint/abaplint) ist es möglich, eine CI-Pipeline aufzusetzen, die ein Mirror-Repository der Open-Source-Komponente in Ihrem reserviertem Namensraum aufsetzt und automatisch aktualisiert. Dieses Repository können Sie dann mit ausliefern. abapGit verwendet diese Technik, um das [ajson-Projekt](https://github.com/sbcgua/ajson) zusammen mit abapGit auszuliefern. Details können Sie in folgendem Blog Post lesen: [Automagic standalone renaming of ABAP objects](https://community.sap.com/t5/application-development-and-automation-blog-posts/automagic-standalone-renaming-of-abap-objects/ba-p/13499851).
