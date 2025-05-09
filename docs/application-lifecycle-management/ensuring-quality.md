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

In der Softwareentwicklung existieren unterschiedliche Prüfverfahren die Softwarequalität ihrer Entwicklungen an bestimmten Zeitpunkten zu messen. Weit verbreitet ist der Einsatz von statischen Code Analyse Werkzeugen, die im Softwareentwicklungsprozess bei der Überprüfung von Entwicklungsaktivitäten zu festgelegten Prüfzeitpunkten (Quality Gates) für die Validierung von Entwicklungsrichtlinien zum Einsatz kommen. Für weitere Details zu dem Thema Statische Code Analyse mit SAP Werkzeugen verweisen wir gerne auf den unten verlinkten DSAG ATC-Leitfaden.

Darüberhinaus existieren Software Analyse Werkzeuge, deren Ausrichtung eher ganzheitlicher Natur sind und die sich auf das Monitoring und die evolutionäre Entwicklung der Softwarearchitektur konzentrieren. Diese Werkzeugkategorie bietet Optionen an, die Informationen aus der statischen Code Analyse grafisch aufzubereiten und z.B. als Trend in einer Zeitleiste, als 3D-City-Model oder als Heatmap abzubilden. Hierfür werden weitere Daten über das Nutzungsverhalten, organisatorische Gegebenheiten, wie die Anzahl der unterschiedlichen Entwickler oder die Änderungshäufigkeit bestimmter Quellcode-Artefakte, hinzugelesen und für die Identifikation von potentiellen Hotspots verwendet, aus denen sich dann organisatorische Maßnahmen für Qualitätsverbesserungen ableiten lassen. 

Für SAP Business Suite Kunden mit SAP Enterprise Support enthält der SAP Solution Manager ab Version 7.2 SP5 eine Zusammenstellung von Werkzeugen, die unter dem Begriff Custom Code Lifecycle Management ein sehr umfangreiches Portfolio an Analyse- und Verwaltungswerkzeugen anbieten. Als bekannter Stellvertreter dieser Werkzeuge ist das Custom Code Decommissioning Cockpit zu nennen, das häufig bei der Vorbereitung von Migrationsprojekten von SAP ECC auf SAP S/4HANA verwendet wird, um nicht mehr genutzten Kundencode vor der Migration kostengünstig stillzulegen. Eine ausführliche Beschreibung über die Funktionalität mit Präsentationsmaterial und Videos finden Sie im verlinkten Expert Content Custom Code Management with SAP Solution Manager.

Leider ist bis zum heutigen Tag (Stand 23.04.2025) noch kein adäquates Nachfolgeprodukt für das Custom Code Lifecycle Management im SAP Solution Manager offiziell bekannt, dass dessen Umfang und Leistung ansatzweise abdeckt. Stattdessen existieren verstreut spezialisierte Insellösungen und Services, die leider nur Zeitpunkt-bezogene Analysen und kein ganzheitliches und evolutionäres Monitorings gewährleisten (SAP for Me Custom Code Analytics Application, S/4HANA Readiness Check, Clean Core Cockpit, Intelligent Custom Code Management Service). Gerade im Hinblick auf das technologie-offene Ökosystem im SAP Umfeld macht es Sinn, sich mit Kollegen anderer Technologiebereiche auszutauschen und als Alternative ggf. auf ein bereits in Ihrem Unternehmen vorhandenes Software Analyse Werkzeug mit ABAP Auswertungsmöglichkeiten zuzugreifen.

## Weiterführende Internetquellen und Literaturempfehlung
### Webseiten & Ressourcen
- [DSAG ATC-Leitfaden](https://dsag.de/wp-content/uploads/2021/12/dsag_leitfaden_atc_2020_06.pdf)
- [Custom Code Management with SAP Solution Manager](https://help.sap.com/docs/SUPPORT_CONTENT/sm/3627184393.html?locale=en-US)
- [Intelligent Custom Code Management](https://community.sap.com/t5/enterprise-resource-planning-blogs-by-sap/intelligent-custom-code-management/ba-p/13472631)
- [Managing Custom Code - SAP Cloud ALM or SAP Solution Manager?](https://community.sap.com/t5/enterprise-resource-planning-blog-posts-by-sap/managing-custom-code-sap-cloud-alm-or-sap-solution-manager/ba-p/13524454)


//ToDo: Übergang

## Kontinuierliche Selbstüberprüfung durch den Entwickler
Je früher ein Mangel in der Softwareentwicklung gefunden werden kann, desto günstiger ist dessen Behebung. Gerade für den Entwickler ergibt sich hieraus ein hoher Anspruch an die eigene Verantwortung, die Codequalität adäquat im Auge zu behalten und frühzeitig Probleme aus dem Weg zu räumen. Zwei Faktoren spielen dabei eine entscheidende Rolle: 
1. Die Disziplin des Entwicklers, den Code kontinuierlich auf Mängel zu prüfen
2. Das Werkzeug mit dem der Entwickler arbeitet

>**Die eingesetzte Entwicklungsumgebung ist ausschlaggebend für die Früherkennung und Behebung von Mängeln**
- Bevorzugen sie die ABAP Development Tools für eclipse (ADT) als Entwicklungsumgebung für ABAP: Hierdurch können sie auf integrierte Refactoring-Möglichkeiten, erweitertes Syntax-Highlighting und erweiterte Code-Vervollständigung, Autokorrektur ausgewählter ATC-Fundstellen durch Quick-Fixes, Inline Anzeige von ATC-Fundstellen an der auftretenden Code-Zeile nach ausgeführter ATC Prüfung und eine frei konfigurierbare Benutzeroberfläche zugreifen. 
- Nutzen sie das eclipse Ökosystem um die Effizienz Ihrer Entwickler zu steigern: Durch die Bereitstellung des ADT-SDKs existiert die Möglichkeit, die ABAP Development Tools über standardisierte Schnittstellen zu erweitern. Hierdurch sind in den verganenen Jahren diverse Projekte entstanden, die unter anderem Erweiterungen der IDE anbieten und das Entwicklerleben in vielerlei Hinsicht vereinfachen. Als Beispiel für so eine Erweiterung möchten wir den ABAP Cleaner erwähnen, der Code Refactorings unterstützt, die sich primär auf den Einsatz von moderner ABAP Syntax und die Einhaltung eines einheitlichen Styleguides konzentriert.
- Achten sie bei dem Einsatz von eclipse Plug-Ins auf sicherheitsrelevante Rahmenbedingungen: Dieser Leitfaden soll keine Einladung sein, sämtliche Open Source oder frei verfügbaren eclipse Plug-Ins ohne weiteres in Ihrem produktiven Entwicklungsumfeld zu verwenden. Bitte beachten Sie vor Installation der Plug-Ins auf die in ihrem Unternehmen geltenden Vorgänge für Sicherheitsprüfungen und Freigabeprozesse für die Nutzung neuer Software. 
{: .highlight}

### Webseiten & Ressourcen
- [How To... Create RESTful APIs And Consume Them in ABAP Development Tools](https://www.sap.com/documents/2013/04/12289ce1-527c-0010-82c7-eda71af511fa.html)
- [ABAP Open Source Projects](https://dotabap.org/)
- [ABAP Cleaner](https://github.com/SAP/abap-cleaner)

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
Vor der Freigabe eines neuen Features in den Release-Prozess empfiehlt sich eine finale und automomatisierte Qualitätskontrolle, die den erstellten Code auf kritische Fundstellen aus dem Bereich Sicherheitsschwachstellen überprüft. Alle anderen Fundstellen, wie z.B. die Verletzung von Wartbarkeits-, Robustheits- und Effizienz-Kriterien, sollten nach Möglichkeit durch die im Vorfeld aufgeführten Prozesse, kontinuierliche Qualitätsprüfung durch den Entwickler, Code Review, behandelt worden sein.  
- Quality Gates / Baseline / Verteilte Verantwortlichkeiten

>**Manipulation von Quality Gates**
- Achten sie auf die Implementierung eines manipulationsfreien Prüf- und Freigabeprozesses: Die Freiheiten die ein Entwickler im Entwicklungssystem zur Verfügung hat, können in zeitkritischen Situationen (Entwicklung und Qualitätssicherung in mehreren Zeitzonen verteilt / Dezentrales Release Management / etc.) ein nicht zu unterschätzende Herausforderung darstellen. Gerade in Unternehmen die keine vorgelagerte kontinuierliche Selbstkontrolle durch den Entwickler, fehlende Pair Programming oder Code Review Prozesse, zu große und über lange Zeiträume gestreckte Releases, kann dies dazu führen, dass Entwickler mit einem festen Lieferdatum im Nacken, zu Kurzschluss-Reaktionen neigen und über die vorhandenen Debug and Replace Berechtigungen die Quality Gates und damit verbundenen Qualitätsprüfungen aushebeln. Die Manipulation des Prüf- und Freigabeprozesses ist nur durch kontinuierliches Monitoring von Debug- und Replace Aktivitöten im System-Logs (SM21) zu erkennen und kann nur teilweise durch Berechtigungseinschränkungen für die Freigabe von Transport Requests und Transport Tasks abgewehrt werden. Findige Entwickler finden fast immer einen Weg, vorhandene Quality Gates zu umgehen.
- Beheben sie die Ursache des Problems, nicht nur das Symptom: Bei der Entdeckung von Quality Gate Manipulation ist es ratsam zuerst das Gespräch mit dem Entwickler zu suchen und die Ursache zu identifizieren, die zu der Notwendigkeit einer Manipulation geführt hat. Oft ist die "Not" unter der der Entwickler handelt Unkenntnis über den, oder ein Mangel an fehlender Flexibilität im Entwicklungsprozess. Hilfreich ist die Investition in leichtgewichtiges und gut nachvollziehbares On-Boarding Material für den Entwickler und für prozessbeteiligte Personen. Zusätzlich kann eine Aufmerksamkeitsinitiative innerhalb der Produktteams über die Notwendigkeit früher und kontinuierlicher Qualitätssicherungsmaßnahmen sinnvoll sein.
- Greifen sie bei Wiederholungsfällen und nicht Einhaltung der Prozesse konsequent durch: Hierfür müssen sie den Prozess im Vorfeld mit der Management- und Entscheider-Ebene abgestimmt haben und sich die Handlungslegitimation einholen. Natürlich hat die psychologische Sicherheit der Entwickler eine hohe Priorität, weswegen grundsättzlich bei Erst-, oder Zweitverstößen das Gespräch mit dem Entwickler im vertraulichen Rahmen gesucht werden muss. Spätestens beim dritten Auftreten kann von einer arglistigen Täuschung oder beabsichtigter Schädigung des Unternehmens ausgegangen werden. Gerade bei durchgeschleusten Sicherheitsschwachstellen kann von einem Cybersecurity Vorfall ausgegangen werden, der rechtliche Konsequenzen nach sich ziehen sollte. Solche beabsichtigten Sicherheitsvorfälle sollten, sofern keine alibifreie Begründung vorliegt, bereits beim ersten Auftreten konsequent geahndet werden.  
{: .highlight}

## Predictive Maintenance / Proactive Problem Management
- Hotspots / technical debt