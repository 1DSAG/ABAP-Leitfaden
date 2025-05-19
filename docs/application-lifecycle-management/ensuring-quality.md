---
layout: page
title: Qualitätssicherung und -Monitoring
permalink: /application-lifecycle-management/ensuring-quality/
parent: ALM
nav_order: 2
---

{: .no_toc}
# Qualitätssicherung und -Monitoring

1. TOC
{:toc}

In der Softwareentwicklung existieren unterschiedliche Prüfverfahren die Softwarequalität Ihrer Entwicklungen an bestimmten Zeitpunkten zu messen. Weit verbreitet ist der Einsatz von statischen Code-Analyse-Werkzeugen, die im Softwareentwicklungsprozess bei der Überprüfung von Entwicklungsaktivitäten zu festgelegten Prüfzeitpunkten (Quality Gates) für die Validierung von Entwicklungsrichtlinien zum Einsatz kommen. Für weitere Details zu dem Thema Statische Code Analyse mit SAP Werkzeugen verweisen wir gerne auf den unten verlinkten [DSAG ATC-Leitfaden](https://dsag.de/wp-content/uploads/2021/12/dsag_leitfaden_atc_2020_06.pdf).

Darüberhinaus existieren Software Analyse Werkzeuge, deren Ausrichtung eher ganzheitlicher Natur sind und die sich auf das Monitoring und die evolutionäre Entwicklung der Softwarearchitektur konzentrieren. Diese Werkzeugkategorie bietet Optionen an, die Informationen aus der statischen Code Analyse grafisch aufzubereiten und z.B. als Trend in einer Zeitleiste, als 3D-City-Model oder als Heatmap abzubilden. Hierfür werden weitere Daten über das Nutzungsverhalten, organisatorische Gegebenheiten, wie die Anzahl der unterschiedlichen Entwickler oder die Änderungshäufigkeit bestimmter Quellcode-Artefakte, hinzugelesen und für die Identifikation von potentiellen Hotspots verwendet, aus denen sich dann organisatorische Maßnahmen für Qualitätsverbesserungen ableiten lassen.

Neben den nachfolgend aufgeführten Prozessen, Praktiken und Werkzeugen zur Erkennung von Qualitätsmängeln kommt es vor allem darauf an, wie sie mit den identifizierten Mängeln umgehen. Gemäß dem Motto "Das Bessere ist der Feind des Guten", empfehlen wir ihnen angemessen und bewusst mit dem Thema Softwarequalität umzugehen. Hierfür eignet sich die Definition einer auf ihr Unternehmen zugeschnittene [Custom Code Strategie](/ABAP-Leitfaden/organization/#definition-der-passenden-custom-code-strategie), die konkret festlegt, welcher Qualitätsstandard für welche Kategorie von Entwicklung einzuhalten ist.

## Kontinuierliche Selbstüberprüfung durch den Entwickler

Je früher ein Mangel in der Softwareentwicklung gefunden wird, desto günstiger ist dessen Behebung. Gerade für den Entwickler ergibt sich hieraus ein hoher Anspruch an die eigene Verantwortung, die Codequalität adäquat im Auge zu behalten und frühzeitig Probleme aus dem Weg zu räumen. Zwei Faktoren spielen dabei eine entscheidende Rolle:

1. Die Disziplin des Entwicklers, den Code kontinuierlich auf Mängel zu prüfen
2. Das Werkzeug mit dem der Entwickler arbeitet

>**Die eingesetzte Entwicklungsumgebung ist ausschlaggebend für die Früherkennung und Behebung von Mängeln**

- Bevorzugen sie die ABAP Development Tools für Eclipse (ADT) als Entwicklungsumgebung für ABAP: Hierdurch können sie auf integrierte Refactoring-Möglichkeiten, erweitertes Syntax-Highlighting und erweiterte Code-Vervollständigung, Autokorrektur ausgewählter ATC-Fundstellen durch Quick-Fixes, Inline Anzeige von ATC-Fundstellen an der auftretenden Code-Zeile nach ausgeführter ATC Prüfung und eine frei konfigurierbare Benutzeroberfläche zugreifen.
- Nutzen sie das Eclipse-Ökosystem um die Effizienz Ihrer Entwickler zu steigern: Durch die Bereitstellung des [ADT-SDKs](https://www.sap.com/documents/2013/04/12289ce1-527c-0010-82c7-eda71af511fa.html) existiert die Möglichkeit, die ABAP Development Tools über standardisierte Schnittstellen zu erweitern. Hierdurch sind in den vergangenen Jahren diverse Projekte entstanden, die unter anderem Erweiterungen der IDE anbieten und das Entwicklerleben in vielerlei Hinsicht vereinfachen. Als Beispiel für so eine Erweiterung möchten wir den [ABAP Cleaner](https://github.com/SAP/abap-cleaner)erwähnen, der Code Refactorings unterstützt, die sich primär auf den Einsatz von moderner ABAP Syntax und die Einhaltung eines einheitlichen Styleguides konzentriert.
- Achten sie bei dem Einsatz von Eclipse Plug-Ins auf sicherheitsrelevante Rahmenbedingungen: Dieser Leitfaden soll keine Einladung sein, sämtliche Open Source oder frei verfügbaren Eclipse Plug-Ins ohne weiteres in Ihrem produktiven Entwicklungsumfeld zu verwenden. Bitte beachten Sie vor Installation der Plug-Ins auf die in ihrem Unternehmen geltenden Vorgänge für Sicherheitsprüfungen und Freigabeprozesse für die Nutzung neuer Software.
{: .highlight}

| **Webseiten & Ressourcen** |
|- [ABAP Open Source Projects](https://dotabap.org/)|

## Code Review

Ein wichtiges Mittel, um die Qualität des Codes zu gewährleisten und Wissen im Team zu teilen, sind Code Reviews. Unter Code Review versteht man gemeinhin, dass eine vom Autor verschiedene Person den Code liest, versucht zu verstehen, und Anmerkungen sowie Verbesserungsvorschläge hinterlässt.

In vielen Softwareprojekten werden Code Reviews basierend auf sog. *Pull Requests* durchgeführt. Dazu werden Code-Änderungen im Versionskontrollsystem auf einem separaten Branch vorgenommen, und sobald die Implementierung in einem ersten vollständigen Zustand vorliegt, einem anderen Mitglied des Teams zum Review übergeben. Plattformen wie GitHub, GitLab, Azure DevOps bieten dazu Möglichkeiten, sämtliche Änderungen auf diesem Branch übersichtlich darzustellen und mit Kommentaren zu versehen. Oft sind darüber hinaus aus Bewertungsfunktionen vorhanden, so dass etwa ein Pull Request nur dann freigegeben werden kann, wenn das Code Review mit positivem Ergebnis abgeschlossen wurde. Da in der SAP-Entwicklung aktuell kein Standard-Tool für Code Reviews existiert, ist die Abstimmung mit den Non-SAP-Teams empfehlenswert. Werden dort Reviews auf Pull Requests in GitHub oder Azure DevOps verwendet, kann bei Auswahl desselben Tools auf vorhandenes Vorwissen im Unternehmen zurückgegriffen werden.

Der folgende Abschnitt liefert einige allgemeine Best Practices zu Code Reviews. Anschließend wird erörtert, inwieweit diese in der ABAP-Entwicklung Anwendung finden können und welche Besonderheiten dabei ggf. zu beachten sind.

### Best Practices

>**1. Allgemeine Prinzipien**

- Kleine Änderungen, häufige Reviews: Große Code-Änderungen sind schwerer zu überblicken. Stattdessen sollten Reviews auf überschaubaren Einheiten durchgeführt werden.
- Statische Analyse als Eingangskriterium: Investiere erst, dann manuellen Aufwand für Code Reviews, wenn automatisierte Verfahren wie Unit Tests und statische Codeanalyse keine Probleme mehr im Code finden.
- Klare Erwartungen: Definiere im Team, was in einem Code Review überprüft werden soll. Hierfür empfiehlt sich die Erstellung einer gemeinsamen Review Guideline. Beispiele sind weiter unten verlinkt.
- Feedback-Kultur: Code-Review sollte nicht als zusätzlicher Freigabeprozess verstanden werden, sondern als Mittel zum Erfahrungsaustausch mit dem gemeinsamen Ziel, die Qualität zu verbessern. Dies bedeutet, dass sowohl Code-Autor als auch Reviewer offen für konstruktive Kritik sein sollten.
- Kurze Review-Zyklen: Lange Wartezeiten können den Entwicklungsprozess verlangsamen. Es sollte darauf geachtet werden, dass Änderungen zügig reviewt und ggf. nachgearbeitet werden. Hierfür empfiehlt es sich, interne Ziele zu vereinbaren und zu überwachen, etwa dass keine Änderung länger als 2 Tage auf Code Review warten muss.
{: .highlight}

>**2. Für den Autor**

- Codekommentare: Erkläre die Gründe für bestimmte Entscheidungen und den Kontext des Codes. Falls ein Reviewer den Code nicht versteht, tut man es selbst nach einigen Monaten vermutlich auch nicht mehr.
- Vor dem Review selbst überprüfen: Überprüfe den Code selbst gründlich, bevor du ihn zur Review stellst.
- Sei bereit, Änderungen anzunehmen: Sei offen für Feedback und bereit, deinen Code anzupassen.
{: .highlight}

>**3. Für den Reviewer**

- Konzentriere dich auf die Intention: Verstehe, was der Autor mit dem Code erreichen wollte.
- Sei respektvoll: Feedback sollte sich immer auf den Code beziehen, nicht die Person. Auch Verständnisfragen sind wertvolles Feedback.
- Sei konstruktiv: Gib konkrete Vorschläge zur Verbesserung.
- Fokus: Konzentriere dich auf Themen wie Verständlichkeit, Architektur, Algorithmen oder Testbarkeit des Codes.
- Augenmaß: Eine Flut von Kommentaren kann den Autor überfordern. Falls ohnehin eine Überarbeitung nötig ist, konzentriere dich zunächst auf die wichtigsten Vorschläge.
{: .highlight}

### Weitere Ressourcen

- [ABAP Code Reviews - A practical guide](https://github.com/SAP/styleguides/blob/main/abap-code-review/ABAPCodeReview.md)
- CQSE Blog "Lessons from Code Review" ([Teil 1](https://teamscale.com/blog/en/news/blog/lessons-from-code-reviews-pt1), [Teil 2](https://teamscale.com/blog/en/news/blog/lessons-from-code-reviews-pt2))
- [Google Engineering Practices Documentation](https://google.github.io/eng-practices/)

### abapGit

Eine Möglichkeit, ABAP-Code in einem Git-Repository mit Unterstützung für Pull Requests bereitzustellen, ist [abapGit](https://abapgit.org) (s. auch Kapitel [Versionsverwaltung](../../version-management/)).

Insbesondere ABAP-Entwicklungsteams setzen für Code Review häufig auf einen Prozess, der abapGit enthält. Dies haben verschiedene Praxisvorträge im Arbeitskreis Development gezeigt ([Veranstaltungsseite im DSAGNet](https://dsagnet.de/event/netzwerk-treffen-ak-development-ag-devops-ag-ui-technologien)). Das Vorgehen ist hier analog zur Non-SAP-Welt: Änderungen werden auf einem Branch vorgenommen und dort via Git Commit veröffentlicht. Dies geschieht entweder [manuell über das abapGit-UI](https://docs.abapgit.org/user-guide/projects/online/stage-commit.html) oder etwa automatisiert über einen [Background Push](https://docs.abapgit.org/user-guide/repo-settings/background-mode.html).

Auf GitHub ist zudem ein [Beispielprojekt](https://github.com/abapGit/abapgit-review-example) veröffentlicht, welches bei Taskfreigabe automatisch einen Pull Request via abapGit erstellt oder aktualisiert. Dieses ist laut den Autoren allerings nicht als fertiges Produkt zu verstehen, sondern als Startpunkt für eine eigene Implementierung, welche sich an den spezifischen Anforderungen und Prozessen des eigenen Unternehmens orientiert.

### Git-based CTS (gCTS)

Obwohl der SAP Styleguide [ABAP Code Reviews - A practical guide](https://github.com/SAP/styleguides/blob/main/abap-code-review/ABAPCodeReview.md) gCTS explizit erwähnt, stellt es zum aktuellen Zeitpunkt (Dezember 2024) keine praktikable Lösung für die Durchführung von Code Reviews dar. Es weist mehrere Eigenschaften auf, die im Widerspruch zu den oben genannten Anforderungen stehen. Konkret:

- Commits werden erst bei Transportfreigabe durchgeführt. Idealerweise sollte ein Code Review Teil der "Done-Kriterien“ eines Transportauftrags sein. Der Code muss folglich *vorher* im Repository verfügbar sein.
- Der Committer in gCTS ist die Person, die den Transport freigegeben hat. Das Repository enthält keine Information zu der Person, die den Code erstellt hat. Dies erschwert die Diskussion im Rahmen des Code Reviews.

Diese beiden Punkte können zu einem gewissen Grad durch Custom Code gelöst werden, etwa indem man bereits [bei Freigabe einer Entwickler-Aufgabe einen Commit erzeugt](https://community.sap.com/t5/technology-blogs-by-sap/create-a-commit-in-git-when-an-abap-task-is-released/ba-p/13483954). Das größte Hindernis für Code Reviews auf gCTS-Repositories ist allerdings, dass in gCTS-Repositories weder Dateipfade noch -inhalte für Menschen leicht lesbar sind. Teilweise werden technische Bezeichner als Dateinamen verwendet, bei anderen Objekttypen ist der Code auf einer einzigen Zeile dargestellt, als Teil einer großen JSON-Struktur. SAP hat zu diesem Zweck gemeinsam mit der Community die [ABAP File Formats](https://github.com/SAP/abap-file-formats) definiert, welche die genannten Probleme adressieren. Diese werden allerdings in gCTS aktuell nicht implementiert. Auf der GitHub-Seite der ABAP File Formats wird zwar darauf verwiesen, dass dies in Zukunft der Fall sein soll. Konkrete Zeitpläne oder Zusagen seitens SAP liegen den Autoren allerdings nicht vor.

### Fazit

Zusammenfassend lässt sich sagen, dass für die Durchführung von Reviews für ABAP-Code aktuell *abapGit* die einzige praktikable Lösung ist.
Allerdings ist abapGit ein zusätzliches Tool, das Entwickler:innen verwenden müssen. Ohne weitere Anpassung bettet es sich nicht natürlich in bestehende Entwicklungsprozesse ein. Eine erfolgreiche Lösung für Code Reviews erfordert daher einigen initialen Aufwand, um eine möglichst nahtlosen Integration in den eigenen Entwicklungsprozess sicherzustellen.
Beispiele aus der Praxis zeigen jedoch, dass dies durchaus möglich ist und letztlich ein wertvoller Baustein zur Entwicklung hochwertigen Codes sein kann. Nicht zuletzt die Tatsache, dass SAP selbst auf Code Reviews in der ABAP-Entwicklung setzt, sollte Argument genug sein, sich mit der Thematik auseinanderzusetzen.

## Quality Gates im Release-Prozess

Vor der Freigabe eines neuen Features in den Release-Prozess empfiehlt sich eine finale und automatisierte Qualitätskontrolle, die den erstellten Code auf kritische Sicherheits-Fundstellen überprüft und bei Treffern die Freigabe blockiert. Das bedeutet nicht, dass sie die Sicherheitsprüfungen bei der kontinuierlichen Qualitätsprüfen oder im Code Review auslassen sollen. Im Gegenteil! Die Sicherheitsprüfung muss fester Bestandteil der anderen Prüfverfahren sein, damit sie frühzeitig auf dieses sensible Thema reagieren können. Das Quality Gate im Release-Prozess ist vielmehr die abschließende Kontrollinstanz, um die unbeabsichtigte oder vorsätzliche Einführung von Sicherheitslücken vor dem Import in nachgelagerte Systeme zu erkennen und zu unterbinden. Die Prüfung dient als Versicherung, dass ihnen keine, durch statische Codeanalyse-Werkzeuge erkennbare Schwachstelle entwischen kann.

Alle anderen Fundstellen, wie z.B. die Verletzung von Wartbarkeits-, Robustheits- und Effizienz-Kriterien, sollten im Vorfeld durch die kontinuierliche Qualitätsprüfung des Entwickler und den Code Review Prozess angemessen behandelt werden. Vernachlässigen sie die vorgelagerten Prüfungen, endet das entweder in unglücklichen Business Usern, die sie wegen schwerwiegender und zu spät erkannter Qualitätsmängeln auf ein neues Releasedatum vertrösten müssen, oder in einem auf Dauer immer komplexeren, schwer verständlichen und wartungsintensiven System. Beide Szenarien sollten sie unbedingt vermeiden und Qualitätsprüfungen frühzeitig und kontinuierlich durchführen.

>**Quality-Gate Unterstützungs-Prozesse**

- Definieren sie ein Verfahren zur systematischen Kennzeichnung von Falsch-Positiv-Meldungen und Ausnahmegenehmigungen während der Qualitätskontrolle. Statische Code Analysetools bieten hierfür in der Regel Mechanismen an, mit der sie die identifizierten Findings entsprechend unterdrücken können. Vermeiden sie Engpässe und nutzen sie das Verfahren bereits vor der finalen Qualitätskontrolle.
- Nutzen sie bei der Einführung von Qualitätskontrollprozessen das sogenannten Baseline-Verfahren zur Unterdrückung von Qualitätsmeldungen, die vor der Einführung des Qualitätskontrollprozesses entstanden sind. Nützlich ist das vor allem in Bestandssystemen mit einer großen Code-Basis an Alt-Entwicklungen,  bei denen Sie Meldungen aus dem Bestands-Code von neu hinzugefügte Qualitätsmängel unterscheiden wollen. Achten sie darauf, sicherheitskritische Prüfungen nicht in die Baseline mit aufzunehmen. Diese müssen gesondert betrachtet, analysiert und ggf. über eine Falsch-Positiv Meldung ausgeschlossen, oder eine separate Korrektur-Initiative behoben werden.
- Setzen sie auf eine Nulltolleranz-Strategie für sicherheitskritische Fundstellen im Kunden- und Partner-Code. SAP ERP Systeme sind auf Grund ihrer zentralen Rollen in der Unternehmens-IT ein beliebtes Angriffsziel für Cyber-Kriminalität. Eine nicht erkannte oder absichtlich eingebaute Sicherheitslücke kann zur Betriebsunterbrechungen und [erheblichen finanziellen Schaden](https://onapsis.com/de/blog/sap-security-breach-cited-in-companys-bankruptcy/) führen. Falls sie von ihren Stakeholdern dennoch zu einer Ausnahmegenehmigung genötigt werden, fordern sie die Unterstützung von ihrem  Informationssicherheitsbeauftragten im Unternehmen ein und klären, ob für solch einen Bedarf ein Risiko-Akzeptanz-Prozess definiert ist. Weitere Informationen zu dem Thema finden sie im Kapitel [Sicher ABAP Programmierung](/ABAP-Leitfaden/security/).
- Führen Sie eine Sicherheitsprüfung aller Quellcode-Artefakte durch, bevor diese in Ihr System eingebunden werden. Lassen Sie sich von SAP Add-On Anbietern Löschtransporte zur Verfügung stellen, bevor Sie deren Produkte in Ihrem System einspielen. Importieren und scannen Sie die Transporte von Drittanbietern erstmalig nur in einem Sandbox System,  falls dieser Ihnen keinen Löschtransport bereitstellt.<br>
Setzen sie sich mit Ihrer Einkaufsabteilung oder dem in Ihrem Unternehmen zuständigen Bereich für Vertragsmanagement in Verbindung, falls sich der Anbieter wenig kooperativ zeigt und Ihnen keine Korrekturen der Findings oder ausführliche False-Positive-Beschreibungen zur Verfügung stellt.<br>
Gehen Sie keine rechtlichen Risiken ein und unterlassen Sie die Veröffentlichung der identifizierten Schwachstellen. Das Ausnutzen oder Veröffentlichen von Exploits kann nach deutschem Recht (s. [$202c Strafgesetzbuch](https://www.gesetze-im-internet.de/stgb/__202c.html)) unter Umständen als Vorbereitungshandlung für eine Straftat gelten. Im Härtefall ist das Gespräch mit einem IT-Rechtsanwalt, oder die Kontaktaufnahme mit einer anerkannten Stelle wie dem [Bundesamt for Sicherheit in der Informationstechnik - BSI](https://www.bsi.bund.de/DE/Service-Navi/Kontakt/Kontaktformular/kontaktformular_node.html) oder einer Bug-Bounty-Platform sinnvoll.
{: .highlight}

>**Manipulation von Quality Gates**

- Achten sie auf die Implementierung eines manipulationsfreien Prüf- und Freigabeprozesses: Die Freiheiten die ein Entwickler im Entwicklungssystem zur Verfügung hat, können in zeitkritischen Situationen (Entwicklung und Qualitätssicherung in mehreren Zeitzonen verteilt / Dezentrales Release Management / etc.) ein nicht zu unterschätzende Herausforderung darstellen. Gerade in Unternehmen die keine vorgelagerte kontinuierliche Selbstkontrolle durch den Entwickler, fehlende Pair Programming oder Code Review Prozesse, zu große und über lange Zeiträume gestreckte Releases, kann dies dazu führen, dass Entwickler mit einem festen Lieferdatum im Nacken, zu Kurzschluss-Reaktionen neigen und über die vorhandenen Debug and Replace Berechtigungen die Quality Gates und damit verbundenen Qualitätsprüfungen aushebeln. Die Manipulation des Prüf- und Freigabeprozesses ist nur durch kontinuierliches Monitoring von Debug- und Replace Aktivitäten im System-Logs (SM21) zu erkennen und kann nur teilweise durch Berechtigungseinschränkungen für die Freigabe von Transport Requests und Transport Tasks abgewehrt werden. Findige Entwickler finden fast immer einen Weg, vorhandene Quality Gates zu umgehen.
- Beheben sie die Ursache des Problems, nicht nur das Symptom: Bei der Entdeckung von Quality Gate Manipulation ist es ratsam zuerst das Gespräch mit dem Entwickler zu suchen und die Ursache zu identifizieren, die zu der Notwendigkeit einer Manipulation geführt hat. Oft ist die "Not" unter der der Entwickler handelt Unkenntnis über den, oder ein Mangel an fehlender Flexibilität im Entwicklungsprozess. Hilfreich ist die Investition in leichtgewichtiges und gut nachvollziehbares On-Boarding Material für den Entwickler und für prozessbeteiligte Personen. Zusätzlich kann eine Aufmerksamkeitsinitiative innerhalb der Produktteams über die Notwendigkeit früher und kontinuierlicher Qualitätssicherungsmaßnahmen sinnvoll sein.
- Greifen sie bei Wiederholungsfällen und nicht Einhaltung der Prozesse konsequent durch: Hierfür müssen sie den Prozess im Vorfeld mit der Management- und Entscheider-Ebene abgestimmt haben und sich die Handlungslegitimation einholen. Natürlich hat die psychologische Sicherheit der Entwickler eine hohe Priorität, weswegen grundsätzlich bei Erst-, oder Zweitverstößen das Gespräch mit dem Entwickler im vertraulichen Rahmen gesucht werden muss. Spätestens beim dritten Auftreten kann von einer arglistigen Täuschung oder beabsichtigter Schädigung des Unternehmens ausgegangen werden. Gerade bei durchgeschleusten Sicherheitsschwachstellen kann von einem Cybersecurity Vorfall ausgegangen werden, der rechtliche Konsequenzen nach sich ziehen sollte. Solche beabsichtigten Sicherheitsvorfälle sollten, sofern keine alibifreie Begründung vorliegt, bereits beim ersten Auftreten konsequent geahndet werden.  
{: .highlight}

## Ganzheitliche Betrachtung und Kontinuierliche Verbesserung


#ToDo: Einleitung und Hintergrund Custom-Code-Analytics, Hotspots, Continuous improvement, SQLM Performance.

Für SAP Business Suite Kunden mit SAP Enterprise Support enthält der SAP Solution Manager ab Version 7.2 SP5 eine Zusammenstellung von Werkzeugen, die unter dem Begriff Custom Code Lifecycle Management ein sehr umfangreiches Portfolio an Analyse- und Verwaltungswerkzeugen anbieten. Als bekannter Stellvertreter dieser Werkzeuge ist das Custom Code Decommissioning Cockpit zu nennen, das häufig bei der Vorbereitung von Migrationsprojekten von SAP ECC auf SAP S/4HANA verwendet wird, um nicht mehr genutzten Kundencode vor der Migration kostengünstig stillzulegen. Eine ausführliche Beschreibung über die Funktionalität mit Präsentationsmaterial und Videos finden Sie im verlinkten Expert Content [Custom Code Management with SAP Solution Manager](https://help.sap.com/docs/SUPPORT_CONTENT/sm/3627184393.html?locale=en-US).

Leider ist bis zum heutigen Tag (Stand April 2025) noch kein adäquates Nachfolgeprodukt für das Custom Code Lifecycle Management im SAP Solution Manager offiziell bekannt, das dessen Umfang und Leistung ansatzweise abdeckt. Stattdessen existieren verstreut spezialisierte Insellösungen und Services, die leider nur zeitpunktbezogene Analysen, aber kein ganzheitliches und evolutionäres Monitorings gewährleisten (SAP for Me Custom Code Analytics Application, S/4HANA Readiness Check, Clean Core Cockpit, Intelligent Custom Code Management Service). Gerade im Hinblick auf das technologie-offene Ökosystem im SAP-Umfeld macht es Sinn, sich mit Kollegen anderer Technologiebereiche auszutauschen und als Alternative ggf. auf ein bereits in Ihrem Unternehmen vorhandenes Software Analyse Werkzeug mit ABAP-Auswertungsmöglichkeiten zuzugreifen.

|**Weiterführende Internetquellen und Literaturempfehlung**|
|- [Intelligent Custom Code Management](https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/intelligent-custom-code-management/ba-p/13472631)|
|- [Managing Custom Code - SAP Cloud ALM or SAP Solution Manager?](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/managing-custom-code-sap-cloud-alm-or-sap-solution-manager/ba-p/13524454)