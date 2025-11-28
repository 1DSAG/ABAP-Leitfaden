---
layout: page
title: Organisation
permalink: /organization/
nav_order: 1
---

{: .no_toc}
# Organisation

1. TOC
{:toc}

Wieso sollte das Management in Softwarequalität und eine gut aufgestellte Entwicklungsorganisation investieren? Softwarequalität als Basis wird in der Regel implizit von Stakeholdern automatisch erwartet, dafür notwendige Maßnahmen aber oft wenig unterstützt, denn „Es liegt kein Ruhm in Prävention“.

Aus Managementsicht ist ein solcher Invest (Zeit, Ressourcen, Tooling) mit einem Business Case zu hinterlegen, der sich am einfachsten für ihr Unternehmen individuell erarbeiten lässt, wenn Sie einen Blick auf die aktuellen Probleme ihres Unternehmens und ihrer IT werfen. Falls sie einige dieser bei sich wiederfinden, kann eine Optimierung ihrer Entwicklungsabteilung und Kultur mit Fokus auf Qualität und Technologien ein Lösungsansatz sein:

*   (zu) langsame Umsetzung von Innovationen und gesetzlichen Anforderungen im Vergleich zu ihren Konkurrenten
*   Unzufriedene Endkunden aufgrund von IT-Themen, Fehlern, Prozessen oder nicht eingehaltene SLAs etc.
*   Fehlerhafte Prozesse und Daten in ihren Systemen mit entsprechenden Aufwänden für Korrekturen
*   Dauerhafte Überlastung der IT-Abteilung, Tendenz zu Burnout, Personalfluktuation, Wissenssilos, Wissensverlust
*   Schwierige Kooperation zwischen Fachabteilungen und IT
*   Implementierungen erfüllen nicht die fachlichen Anforderungen der Fachbereiche
*   Lange Projektlaufzeiten und Feedbackprozesse, hoher Bedarf an Nacharbeit
*   Historisch gewachsene komplexe Systemkonstellationen und Code-Basen

Die Lösungen dieser Probleme sind in der Regel in zwei Kategorien einzuteilen, für die dieser DSAG Leitfaden sowie weitere Leitfäden mögliche Lösungsoptionen aufzeigen:

*   Kulturell-Organisatorisch: Querschnittliche Teams, Auflösung von Silos, klare Rollenverteilungen und Verantwortlichkeiten, Vertrauen, Kommunikationsstrukturen, gemeinsames Ziel und Vision, Förderung von Kooperation statt Konkurrenz etc.
*   Software-Qualität: Automatisierung, professionelles Testen, Entwicklungsrichtlinien, Software-Architekturmanagement, Enterprise Architecture Management (EAM), gezielte Trainings, Pair-Programming, Code Reviews, Community of Practice etc.
    

Teile dieser Lösungen können für sie als Unternehmen Quick Wins sein oder sich mit kleinen Keimzellen evaluieren und nachhaltig gestalten. Es lohnt sich hierbei einen Blick darauf zu werfen, was seit viele Jahren außerhalb der SAP-Welt im Bereich Software-Engineering betrieben wird und dies zu adaptieren. Einen Ausblick hierzu gibt ihnen das folgende Kapitel.


## Bausteine einer effektiven Entwicklungsorganisation

Die Transformation zu einem erfolgreichen S/4HANA Technologie-Team stellt aus Unternehmenssicht eine komplexe und oft unterschätzte Herausforderung dar. Abhängig vom Reifegrad und  der Ausrichtung ihrer IT Organisation, ist für das Erreichen des strategischen Zielbilds eine Anpassung von kulturellen und organisatorischen Stellschrauben notwendig.

Je größer der Anteil an kundenindividueller Anpassung und Erweiterung ihrer vorhandenen SAP Software ist bzw. strategisch werden soll (siehe [Kapitel Clean Core](/ABAP-Leitfaden//clean-core/problems-and-challenges/)), desto wichtiger ist der unternehmerische Fokus auf die Effizienz und Effektivität ihrer Entwicklungsorganisation. Der nachfolgende Auszug streift die aus unserer Sicht wichtigsten Themenfelder, die sie auf dem Weg zu einer erfolgreichen Entwicklungsorganisation unterstützen werden. 


### Definition der passenden Aufbau- und Ablauforganisation

Die Ausrichtung ihrer Entwicklungsorganisation ist von der Menge, Komplexität und Häufigkeit an Kundenanpassungen in ihren SAP Systemen abhängig (_Make-or-Buy_ _bzw. „Do nothing“_ _Entscheidung_). Gehören Sie zu den Kunden, die SAP Software im Rahmen einer Standard-Software ohne größere Anpassungen nutzen können, lohnt sich die Investition in eine eigene SAP Entwicklungsabteilung aus wirtschaftlicher Sicht in der Regel nicht. Für den Fall empfiehlt es sich, auf externe Spezialisten mit entsprechender Kernkompetenz und Reputation zurückzugreifen und die geringe Menge von Kundenanpassungen im SAP System unter dem Schirm von definierten Dokumentationsrichtlinien (Änderungsdokumentation, Betriebshandbücher, etc.) und klar definierter Service Level / KPIs abzuwickeln.  Die genaue Ausprägung der Entscheidung ist vom individuellen Einzelfall in Ihrem Unternehmen abhängig und kann von geringfügigen Änderungen, bis hin zu einem kompletten Plattformbetrieb durch ein eigenes Team oder einen externen Service Partner variieren. 

Besteht die Notwendigkeit Ihre SAP-Systeme auf Grund von fehlender Funktionalität in Ihren Kerngeschäftsprozessen, bzw. der notwendigen Integration von Alleinstellungsmerkmalen, die Ihnen zu Wettbewerbsvorteilen verhelfen mittels Kundenindividualentwicklung häufig anzupassen, lohnt sich die Investitionsprüfung in eine eigene SAP Entwicklungsorganisation. Der Aufbau einer erfolgreichen  Entwicklungsorganisation ist ein komplexes Vorhaben und muss neben den technologischen Themen besonders auf sozioökonomische Aspekte Rücksicht nehmen. Nutzen Sie die nachfolgenden Punkte, um die Stellschrauben in Ihrem Unternehmen auf Ihre Bedürfnisse anzupassen.


### Teamorganisation und Teamzusammensetzung

Softwareentwicklungs-Teams sind das Schlüsselelement für die erfolgreiche Umsetzung und Implementierung Ihrer Entwicklungsvorhaben. Hier spielt die Musik, wenn es darum geht, die fachlichen Anforderungen in Technologie zu gießen und die Lösung über Jahrzehnte hinweg kostengünstig und wartbar zu halten. Damit das Team dieser Anforderung gerecht werden kann, muss es mit entsprechenden Kompetenzen, Mitteln und Prozessen ausgestattet und unterstützt werden. Wenn Sie z.B. feststellen, dass Ihre Teams erhebliche Zeit und Energie darauf verwenden, sich gegen Schuldzuweisungen anderer Teams abzusichern, oder dass es zu langen Wartezeiten zwischen den einzelnen Schritten in ihrem Softwareentwicklungsprozess kommt, könnte dies ein Hinweis auf einen suboptimalen Teamschnitt sein, der dringend optimiert werden sollte. Beigefügte finden sie einige  Handlungsempfehlungen, um Probleme bei der Teamorganisation zu vermeiden.

*   Die richtige Teamzusammensetzung ist essenziell für die effektive Bewältigung der an das Team herangetragenen Aufgaben. Hierbei spielen die Teamgröße, kultureller Hintergrund, fachliche und technische Kompetenz und die Hilfsmittelausstattung eine wesentliche Rolle. Achten Sie darauf, dass das Team alle Tätigkeiten zur Aufgabenerfüllung und Ergebnislieferung nach Möglichkeit eigenständig durchführen kann und Abhängigkeiten zu vor- bzw. nachgelagerten Prozessen so gering wie möglich sind.
*   Berücksichtigen Sie bei der Teamzusammenstellung die fachliche und technische Komplexität. Gerade im SAP Umfeld stellt die Komplexitätsbewältigung in den unterschiedlichen Anwendungsbereichen oft eine Herausforderung dar. Neben dem fachlichen Kontext muss sich das Team zusätzlich mit anwendungsspezifischen Frameworks, kundenseitigem Bestandscode, Technologietrends und unterschiedlichen Technologie Stacks auseinandersetzen. Achten Sie darauf, dass das Team nicht in zu viel unterschiedlichen Aufgabenbereichen arbeitet und stattdessen Fokus auf einen beherrschbaren Bereich, wie z.B. auf ein fachliches Modul, setzen kann. Nehmen Sie Ihr Team ernst, wenn es über eine zu hohe Komplexitätsbewältigung klagt. Anderenfalls riskieren Sie durch zu häufigen Kontextwechsel und kognitive Überforderung des Teams langfristige Gesundheitsschäden und negative Produktivität.
*   Achten Sie besonders darauf, dass sich die Entwickler auf ihre Kernkompetenz, das Designen und Erstellen von qualitativ angemessener Software, konzentrieren können und sich nicht zusätzlich um Themen wie Anforderungsmanagement oder Prozessdokumentationen kümmern müssen. Eine Ausnahme bildet hier die zeitlich begrenzte Durchführung dieser Aktivitäten, um die fachliche Problemdomäne präziser zu erfassen und die zugrunde liegenden Konzepte besser zu verstehen. In der Regel führt ein vertieftes Verständnis der Problemdomäne zu einem effizienteren Softwaredesign und bildet somit einen Mehrwert für den Entwickler. 
*   Stellen Sie Ihren Softwareentwicklungsteams den angemessenen Freiraum für Experimente, Weiterbildung und zur Produktoptimierung bereit. Vermeiden Sie es Ihre Entwickler dauerhaft mit einer 100% Auslastung zu verheizen. Ermöglichen Sie den Entwicklern, durch Maßnahmen wie die Einrichtung einer Community of Practice, voneinander zu lernen. Experimentieren Sie z.B. mit [Pair-Programming](https://en.wikipedia.org/wiki/Pair_programming) und profitieren Sie von den damit verbundenen [Vorteilen](https://medium.com/the-liberators/in-depth-the-costs-and-benefits-of-pair-programming-b4b54b27c6ff), wie einer potentiell höheren Code Qualität und besserem Software Design.
*   Geben sie den Teams die Mittel und Tools in die Hand, um Transparenz über ihr Arbeitsgebiet zu erlangen. Eine effektive Optimierung lässt sich nur auf Grundlage von Zahlen, Daten und Fakten siehe [Kapitel ALM](/ABAP-Leitfaden/application-lifecycle-management/ensuring-quality/) durchführen. Sind die Informationen über Custom Code und Prozess-Metriken nicht vorhanden, ist eine betriebswirtschaftlich sinnvolle Entscheidung über eine lohnenswerte Investition in ein Optimierungsprojekt nahezu unmöglich.
    
{: .note }
> 
> Artikel & Blogposts
> - [Inverse Conway Maneuver – ThoughtWorks](https://www.thoughtworks.com/en-de/insights/blog/customer-experience/inverse-conway-maneuver-product-development-teams)
> 
> Webseiten & Ressourcen
> - [Team Topologies](https://teamtopologies.com/)
> - [Flow Engineering](https://flowengineering.org/)
> - [Core Domain Charts – GitHub](https://github.com/ddd-crew/core-domain-charts)
> - [Managing the Unmanageable](https://managingtheunmanageable.net/)
> 
> Bücher
> - Lean Software Development – An Agile Toolkit [Pearson Verlag](https://www.pearson.de/lean-software-development-an-agile-toolkit-an-agile-toolkit-9780133812954)

### Definition der passenden Custom Code Strategie

Eine klar definierte Custom-Code-Strategie unterstützt Sie bei der transparenten Kommunikation ihrer technologiebasierten Investitionen. Anhand der definierten Strategie lassen sich gezielt Investitionsentscheidungen wie z.B. in Personalplanung- und Fortbildungsmaßnahmen, sowie in In- oder Outsourcing Aktivitäten treffen und der konkrete Umgang mit Entwicklungsaktivitäten festlegen.

*   Erstellen Sie ein Technologieradar und nutzen Sie es, um den Auswahlprozess für bestimmten Technologien und Werkzeuge zu vereinheitlichen. Legen Sie über das Radar fest, in welche Technologien sie strategisch investieren möchten, welche lediglich gewartet, aber nicht weiterentwickelt werden, und aus welchen Technologien ein geplanter Rückzug erfolgen soll. Konzentrieren Sie sich auf eine überschaubare Auswahl an Schlüsseltechnologien, um die Handhabbarkeit (Wartungszyklen, Lifecycle-Management-Tools, interne Expertise etc.) sicherzustellen und die damit verbundene Komplexität nachhaltig zu steuern. Beispiel: [SAP Tech Radar](https://tobiashofmann.github.io/sap-dev-tech-radar/)
    
*   Identifizieren Sie die kritischen Geschäftsfelder, die ihrem Unternehmen einen Wettbewerbsvorteil verschaffen, oder von existentieller Bedeutung sind, und richten Sie den Schwerpunkt ihrer Technologie-, Personal- und Software-Entwicklungsstrategie darauf hin aus.  Beispielsweise ist es sinnvoll als Spezialist für die Materialwirtschaft oder Produktionsplanung, das Wissen über die kundeneigene Erweiterung in der Variantenkonfiguration auf ein internes Entwicklungsteam zu verteilen, als im kritischen Bedarfsfall von einem externen Dienstleister abhängig zu sein. Konzepte wie das [Core Domain Pattern](https://medium.com/nick-tune-tech-strategy-blog/core-domain-patterns-941f89446af5) (Domain Driven Design), oder Praktiken aus der Disziplin des Enterprise Architecture Managements können Sie bei Ihren Entscheidungen unterstützen.
    
*   Nutzen Sie bei der Entscheidung über die Erstellung von Individualentwicklungen das [Vermeidungsprinzip](https://blog.codinghorror.com/the-best-code-is-no-code-at-all/):  

    1.  Bevor Sie mit der Entwicklung einer neuen Funktionalität beginnen, sollten Sie prüfen, ob der SAP-Standard durch Customizing und Kundenerweiterungen ausreichen würde.
    2. Prüfen Sie, ob sich ihre Anforderung durch einen (organisatorischen) Workaround lösen lässt. 
    3.  Ist das nicht der Fall, oder verursacht der Workaround zu hohe Kosten, prüfen Sie, ob eine Standardlösung von einem Drittanbieter ihre Anforderung erfüllt und profitieren Sie davon, dass sich der Anbieter um die Wartung und Weiterentwicklung (idealerweise außerhalb ihrer Systemlandschaft) kümmert.
    4.  Erst nach Prüfung der oben genannten Optionen sollten Sie eine Individualentwicklung in Betracht ziehen. Beachten  Sie dabei, dass jede zusätzliche Codezeile in ihrem Namensraum laufende Unterstützung erfordert: Neben der initialen Entwicklung ihrer neuen Lösung muss diese langfristig von ihren Mitarbeitern gelesen, debuggt und gewartet werden, was zusätzliche Ressourcen und Kosten bedeutet.
    
*   Folgen Sie offiziellen Coding Standards wie den [SAP ABAP Programmierrichtlinien](https://help.sap.com/doc/abapdocu_latest_index_htm/latest/en-US/index.htm?file=abenabap_pgl.htm), [SAP Code Style Guides](https://github.com/SAP/styleguides) und natürlich den Empfehlungen aus dem aktuell vorliegenden Dokument. Sorgen sie dafür, dass die Überprüfung der Regeln nach Möglichkeit automatisch erfolgt, die Entwickler Werkzeuge mit kurzen Feedback-Zyklen und Korrekturvorschlägen verwenden und neben der automatischen Regelüberprüfung auch ein manuelles Code Review stattfindet.
*   Definieren sie konkrete Entwicklungstypen und legen sie Entwicklungstyp-spezifische Qualitätsstandards und Vorgehensweisen fest. Beispielsweise ist ein einmalig auszuführendes Korrekturprogramm kurzfristig und zweckgebunden, wodurch Effizienz, Zeitersparnis und geringe Kosten im Fokus stehen. Eine Developer-On-Stack-Applikation für kundenindividuelle Geschäftsprozesse hingegen erfordert höhere Qualitätsstandards, da sie langfristig genutzt, regelmäßig erweitert und gewartet wird. Hier sind Wartbarkeit, Skalierbarkeit sowie die Minimierung langfristiger Kosten entscheidend. Die unterschiedlichen Standards helfen den Entwicklern dabei, sich auf die Kernaufgabe zu konzentrieren und ihre begrenzte Zeit effektiv einzusetzen. Zusätzlich empfehlen wir als Leitlinie einen abstrakten Makro-Qualitätsstandard zu definieren, auf dessen Grundlage sich die Entwicklungstyp spezifischen Szenarien ableiten lassen.

* [Siehe Beispiel „Was ist guter ABAP-Code?“](/ABAP-Leitfaden/abap/oo-design/#moderne-gesch%C3%A4ftsanwendungen-erfordern-moderne-softwareentwicklungsmethoden)


 
*   Regeln Sie die Zuordnung der Code Ownership auf Team-Ebene. Zwei Rollen sind bei der Code Ownership ausschlaggebend: Auf der fachlichen Seite steht der Product Owner, der für die Priorisierung von Änderungen verantwortlich ist und Aussagen über den Lebenszyklus und die Angemessenheit der technischen Qualität für die Kundenentwicklung treffen kann. Dieser wird auf der technischen Seite von einem Architekten / Lead-Developer, der die Verantwortung für die konzeptionelle Integrität technischer Konzepte und das Kommunizieren von notwendigen Aufräumarbeiten in der zu verantwortenden Softwarearchitektur übernimmt, ergänzt. Als Hilfsmittel für die klare Zuordnung der technischen Artefakte zu einer Rolle steht ihnen das Paket- und Softwarekomponentenkonzept zur Verfügung.
*   Erlangen Sie das Mandat für die kontinuierliche Verbesserung ihrer Kundenindividualsoftware. Gewährleisten sie, dass sich ihre Entwickler mit der Strukturoptimierung zur besseren Wartbarkeit mittels [Refactorings](https://refactoring.com/), oder mit dem [Tidy First Ansatz](https://software-architektur.tv/2024/07/26/episode225.html), auseinandersetzen können. Achten Sie dabei auf ein ausgewogenes Verhältnis zwischen funktionalen Erweiterungen und struktureller Optimierung. Überzeugen Sie die Stakeholder mit Zahlen, Daten und Fakten aus dem Application Lifecycle und Custom Code Management und zeigen Sie die Kausalzusammenhänge auf, warum es Sinn macht, in die Code Qualität zu investieren. 
    
Der erste Entwurf einer Softwarelösung ist selten von langlebigem Bestand. In Unternehmen mit einem hohen Reifegrad in der Softwareentwicklung basiert die erste Auslieferung oft auf einer bewusst getroffenen Entscheidung, in kurzer Zeit mit einem reduzierten Funktionsumfang und geringer Softwarequalität live zu gehen, um strategische, marktorientierte oder operationelle Ziele zu erreichen (s. [Lean Startup / MVP](https://www.atlassian.com/agile/product-management/minimum-viable-product)). Nach der Zielerreichung konzentrieren sich die Unternehmen in der Regel darauf, die Softwarequalität auf ein angemessenes Level zu bringen, um die negativen Auswirkungen auf die Benutzererfahrung und die langfristige Stabilität des Produkts zu minimieren. Gegebenenfalls wird die erste Auslieferung komplett verworfen und von Grund auf mit der gesammelten Erfahrung neu und in, von Beginn an, angemessener Qualität entwickelt.

Unternehmen mit einem geringen Reifegrad in der Softwareentwicklung fahren oft einen ähnlichen Ansatz, mit dem fatalen Unterschied, dass sie ihre Entscheidung zur Aufnahme von technischen Schulden unbewusst treffen und über kurz oder lang im sogenannten [C.R.A.P. Cycle](https://visualstudiomagazine.com/articles/2015/07/01/domain-driven-design.aspx) landen. Häufig wird das Problem durch fehlendes Knowhow im Umgang mit [langlebiger Softwarearchitektur](https://www.informatik-aktuell.de/entwicklung/methoden/langlebige-architekturen-technische-schulden-erkennen-und-beseitigen.html) verstärkt und durch einen rein auf Funktionserweiterung ausgerichteten Change Prozess unter hohem Zeitdruck und geringer Investitionsbereitschaft ad absurdum geführt. Vermeiden Sie diesen Fehler für ein ERP System mit einem Lebenszyklus von 10 - 20 Jahren unbedingt!

*   Stellen sie klare Regeln für den Umgang mit dem Versionskontrollsystem auf. Definieren sie, wie lange ein Transport im Entwicklungssystem verweilen darf, bis die Entwicklung zurückgebaut werden muss und richten Sie dafür ein entsprechendes Monitoring ein. Legen Sie für Systemlandschaften mit mehreren Produktiv-Systemen und einem zentralen Entwicklungssystem fest, dass der Quellcode in allen Produktivsystemen identisch seien muss. Definieren Sie, wie mit Quellcode umgegangen werden soll, der über mehrere Systemlandschaften hinweg genutzt wird, wie die Abwärtskompatibilität zu unterschiedlichen Release-Ständen gewährleistet wird und wie man mit Namespaces und Forks umgehen soll.
    
{: .note }
> - [Langlebige Softwarearchitekturen](https://www.langlebige-softwarearchitekturen.de/)
> - [Refactoring.com](https://refactoring.com/)
> - [Software-Architektur.tv](https://software-architektur.tv/)
> - [SAP Application Extension Methodology](https://help.sap.com/docs/sap-btp-guidance-framework/sap-application-extension-methodology/sap-application-extension-methodology-overview)
> - [SAP Architecture Center](https://architecture.learning.sap.com/)

## Prozesse und Methodik

Wenn Sie eine Entwicklungsabteilung haben, dann sollten Sie auch in Prozesse und Methodik investieren.  
Neben kulturellen und technologischen Themen ist ein wichtiger Aspekt das Vorgehen der Organisation vom Punkt der Idee bzw. Anforderung bis hin zum go live der entsprechenden Lösung. Das „WIE“, d.h. der gelebte Entwicklungsprozess, ist  im Markt vielfältig und stark geprägt von Größe der Organisation, Branche, gesetzliche Rahmenbedingungen durch einen Regulator, zentrale Vorgaben von Muttergesellschaften  und KnowHow.

Eine allgemeingültige Empfehlung lässt sich daher nicht geben, wir möchten allerdings einige Punkte aus unseren Erfahrungen teilen, die eine Einordnung für ein individuelles Vorgehen ermöglichen:

*   Viele Organisationen machen seit Jahren klassisches Projektmanagement mit klar definierten Rollen, Konzepten, Artefakten. Eine Änderung dieser Vorgehensmodelle an sich ist ein großes Change Projekt, dass viel Nachdenken, Zeit und Know-How bedarf. Konsistent und über Jahre hinweg.
*   Oft ist ein Vorschlag, „agiler zu werden“. Letztendlich sind Stakeholder oft unzufrieden mit der Innovationskraft oder Umsetzungsgeschwindigkeit von Anforderungen und sehen agile Methoden als geeignetes Instrument. Teils kommen diese Vorschläge auch aus der Entwicklungsorganisation selbst, da Mitarbeitende dort mit den aktuellen Abläufen unzufrieden sind.
*   Vorgehensmodelle, Methoden, Prozesse und Strategien sind kontextabhängig – nicht jede Organisation, jedes Team oder jedes Projekt ist für jedes Modell sinnvoll. Daher ist es sinnvoll, nicht mit dem Statement „Wir sind jetzt agil!“ oder „Wir machen jetzt Scrum!“ zu starten, sondern zunächst zu prüfen, wo Herausforderungen und Probleme bestehen, in welchen Bereichen das Unternehmen besser werden möchte und wie das Know-how und die Ressourcen verteilt sind. Auf dieser Basis sollte dann das Problem angegangen werden und nicht eine potenzielle Lösung. Beziehen Sie die Menschen mit ein, die die wertschöpfende Arbeit verrichten und die Probleme lösen müssen.
*   In Unternehmen gibt es teils gescheiterte Implementierung von „agile“, so dass dieses Wort einen negativen Beigeschmack hat. Die Ursachen hierfür sind mannigfaltig und multifaktoriell: zu wenig Coaching, zu viel Load in Kombination mit einem komplexen Projekt, zu wenig Ausbildung, schlechtes Tooling, kein Grund oder Wille zum Change, Big Bangs etc. Wenn sie agile Methoden nutzen möchten, müssen sie diesen Kontext bzw. die Historie ihres Unternehmens und Mitarbeitenden beachten.
*   Die erwünschten Ergebnisse eines Weges hin zur Agilität, lässt sich nicht isoliert erzielen: Es nutzt wenig, wenn eine Entwicklungsabteilung agil arbeitet, aber vor- und nachgelagerte Teams und Prozesse weiter wie zuvor arbeiten. Wenn beispielsweise ein Change Advisory Board zur Freigabe von Entwicklungen nur alle 2 Monate tagt, kann die Entwicklungsabteilung nicht flexibler sein, als diese gegebene Rahmenbedingung es ermöglicht.
*   Eine Hoffnung, die an agile Methoden geknüpft ist, ist dass sie schneller Ergebnisse liefern. Dies ist nicht zwangsweise der Fall: Agile Methoden zielen auf Flexibilität, d.h. sich ändernde Anforderungen und Priorisierungen ab sowie auf schnelles Feedback – das Wissen, das Richtige umzusetzen, da Anforderungen oft nicht vorab ausreichend ermittelbar sind. Damit werden drei zentrale Probleme adressiert: Der stetige Wandel, Ungewissheit und Kommunikation.
*   Methoden bedürfen eine technische Basis und Unterstützung – wenn heute noch aufwendige manuelle Prozesse existieren, sollten sie diese optimieren.
*   Es existieren viele Strategien und Methoden, die sich in ihrem Ansatz, ihren Ideen und ihrem Freiheitsgrad unterscheiden. Auszugsweise sind dies beispielsweise:
*   Auf Team-Ebene: [Scrum](https://www.scrum.org/), [Kanban](https://de.wikipedia.org/wiki/Kanban_\(Entwicklung\)), [Extreme Programming](https://de.wikipedia.org/wiki/Extreme_Programming), [Scrumban](https://de.wikipedia.org/wiki/Scrumban)
*   Teamübergreifend  / organisationsweit: [LeSS](https://less.works), [Nexus](https://www.scrum.org/resources/scaling-scrum), [SAFe](https://scaledagileframework.com/), Scaled Kanban
    
Darüber hinaus ist „agile“ definiert durch Werte und Prinzipien, so dass kein Framework notwendig ist, sondern jede Organisation sich an daran ausgerichtet einen eigenen Prozess erschaffen kann.

*   Innerhalb dieser gibt es zusätzlich verschiedene Level und Reifegrade, an denen entlang sich eine Organisation entwickeln kann. Das [Kanban Maturity Modell](https://www.kanbanmaturitymodel.com/) ist hierfür ein Beispiel
    

Welche Änderung auch immer für ihr Unternehmen gut ist – bedenken sie, dass es letztendlich und Menschen und Kommunikation geht. Versuchen sie ein gemeinsames Ziel, einen „Unity of Puprose“ zu schaffen, an dem sie ihr Vorgehen messen können und Konflikte auflösen können. Ansonsten besteht die Gefahr, dass ihre Initiative unter verschiedenen Richtungen („weniger Regeln und Struktur“ vs „mehr Vorgaben“) oder Interessen (z.B. Gegenläufigen Jahreszielen von Führungskräften) zerrieben wird. Oft gibt es auch die Konstellation, dass ein agiles Team dennoch einen Projektmanager oder Projektleiter hat, wodurch eine hybride Struktur entsteht. In diesem Fall empfiehlt es sich, im Kontext der Organisation zu prüfen, ob ein Wechsel von „Projekten zu Produkten“ hilfreich sein kann.

## Status Quo in gewachsenen Landschaften

Aus unserer Erfahrung im DSAG-Netzwerk wissen wir: Die Qualität der Softwareentwicklung hängt stark von der Kompetenz und Motivation der Entwicklungsteams und den Bedingungen innerhalb des Unternehmens ab. Oft fehlt dem Management das technische Verständnis. Vorgaben von außen oder oben wirken selten motivierend. Die Folge: mangelhafte Umsetzung von Qualitätsmaßnahmen oder deren bewusste Umgehung. Kurzfristige Anreize, wie z.B. der Einsatz von Gamification-Elementen oder ein direktes Coaching mit Experten können helfen, aber langfristige organisatorische Veränderungen sind notwendig, um Entwickler zu motivieren, hohe Qualitäts- und Entwicklungsstandards zu setzen. Oft beginnt dieser Prozess damit ein Bewusstsein zu schaffen, dass hohe Softwarequalität und deren positive Effekte nicht ein implizit oder explizit existierender Anspruch von verschiedenen Stakeholdern ist, sondern vor allem auch den Entwicklern selbst hilft.


### Best Practice

Es gibt eine große Auswahl an von Entwicklungsstandards, die beispielsweise im ABAP Leitfaden 2016 [dsag\_handlungsempfehlung\_abap\_2016\_0.pdf](https://www.dsag.de/wp-content/uploads/2021/12/dsag_handlungsempfehlung_abap_2016_0.pdf), [Clean ABAP](/ABAP-Leitfaden//abap/clean_and_modern_abap/) sowie diversen Büchern zu entnehmen sind. Aus unserer Sicht sind grobe Pfeiler, zu denen ein Konsens besteht:

{: .recommendation}
> - Namenskonventionen für die kundeneigene Entwicklungen, optional im separaten Namensraum
> - Strukturiertes Paketkonzeptes, optional mit klaren Paketschnittstellen
> - Statische Codeprüfung (z.B. ATC Checks) als Teil des Transportwesens mit der Prüfung nach den folgenden Code-Kriterien: Performance, Sicherheit, Compliance, Robustheit, Wartbarkeit, Erweiterbarkeit (ABAP Cloud). Siehe hierzu auch den DSAG ATC Leitfaden [dsag\_leitfaden\_atc\_2020\_06.pdf](https://www.dsag.de/wp-content/uploads/2021/12/dsag_leitfaden_atc_2020_06.pdf)
> - Dokumentation von öffentlichen Methoden/Funktionsbausteinen
> - Erstellung von [angemessener Dokumentation](/ABAP-Leitfaden/documentation/documentation_tipps/) .
> - Der Einsatz von ABAP Unit und Code Coverage
> - Genehmigungsverfahren für Classical Extensibility – den sogenannten Level D Entwicklungen [siehe Kapitel Clean Core](/ABAP-Leitfaden//clean-core/solution-approach/)
> - Anpassung der Geschäftsprozess- und technischen Dokumentation nach einer Programmänderung

### Warum sollte sich etwas ändern?

Die SAP-Entwicklungskultur bei Bestandskunden ist oft gewachsen und heterogen. Es gibt viele Implementierungen mit verschiedenen ABAP-Varianten und Entwicklerpräferenzen. Im Gegensatz dazu basieren die neuen S/4HANA-Technologien wie *On-Stack Extensibility* auf objektorientiertem ABAP, *Modern ABAP* (Syntax 7.4+), ABAP Unit, ABAP Core Data Services und dem ABAP RESTful Application Programming Model. Diese neueren Teile der ABAP-Sprache müssen in einem S/4HANA-System verwendet werden, um Standardanwendungen, Fiori-Apps und Standard-Services nutzen zu können.

Moderne ABAP-Entwicklung erfordert Entwicklungsrichtlinien als gemeinsame Basis. Die "Technologie-Stacks" werden immer umfangreicher und ein Entwickler kann nicht alle Technologien in der Tiefe beherrschen. Richtlinien allein reichen aber nicht aus.

Erst durch organisatorische Änderungen, wie z.B. eine Development Factory, Community Of Practice oder ein interdisziplinäres Team, beginnt der eigentliche Veränderungsprozess. Wenn Sie eine Clean-Core-Strategie verfolgen, dann ist es umso wichtiger, das Sie das Change Management richtig angehen. Eine Umschulung bestehender Entwickler wird nicht ausreichen, um Veränderung zu leben. 


### Der nächste Schritt

Ohne Schlüsselpersonen, die Qualität vorantreiben, neigen Teams unter dem andauernden Druck von Projektarbeit und Fachbereich dazu, Funktionalität über Qualität zu stellen. Kontrolle und Qualitätsprüfungen sind auch für externe Mitwirkende entscheidend. Die Initiative benötigt engagierte Hauptentwickler, die intrinsisch motiviert sind, Veränderungen  über Jahre hinweg zu unterstützen und zu managen (= Change Management).

Es muss eine klare Vision, Strategie und definierte Ziele geben, die vom Management unterstützt werden, oder am besten explizit von der Geschäftsleitung gefordert werden. Die strikte Trennung von SAP-Standardcode und Eigenentwicklungen - die sogenannte Clean-Core-Strategie - wird verfolgt, um das System langfristig wartbar, erweiterbar und entwicklungsfähig zu halten [siehe Kapitel Clean Core](/ABAP-Leitfaden//clean-core/solution-approach/). Wir konzentrieren uns daher auf die Vision und die Umsetzung der Strategie.


## Erfahrungsbericht aus der Praxis: Brownfield in S/4HANA

Das nachfolgende Beispiel soll die Umsetzung der Clean Core Strategie anhand eines SAP-Kunden im gewachsenen Brownfield aufzeigen. Hier wurde der Bottom-Up Ansatz im Change Management gewählt; Die globalen Entwicklerteams definieren durch Repräsentanten in einem Clean-Core-Governance Gremium, die Entwicklungslandschaft und die Richtlinien in der SAP Entwicklung.


### Vision

Wir wollen die ABAP Cloud-Technologien und den SAP-Standard effektiv nutzen. Wir setzen Custom Code richtig, sauber und gezielt ein um Wettwerbevorteile zu erhalten. Dadurch reduzieren wir die Fehler und den Wartungsaufwands um 90%!


### Umsetzung

**Jahr 1**: **„Strategie finden“**

*   Definition einer Clean-Core-Strategie, unter Abwägung diverser SAP und Non-SAP Software
*   Aufbau einer Community of Practice: Senior ABAP Coaches
*   Aktivierung der ersten ATC-Checks (z.B. Fokus Security, HANA Readiness) auf Basis der "Low hanging fruits"
*   Schulung der ABAP-Entwickler, wo benötigt.
*   Einführung eines Paketkonzepts mit Benennung von Verantwortlichkeiten für alle  Pakethierarchien.
    

**Jahr 2** **„Strategie umsetzen“**

*   Eine gestaffelte Einführung der Clean-Core-Entwicklung 
*   Definition und Implementierung von Rollen für das Change Management: Lead Developer (nach SAFe: Product Architect), Verantwortlich für: Richtlinien im Team vermitteln, Code Reviews  [siehe Kapitel ALM](/ABAP-Leitfaden/application-lifecycle-management/ensuring-quality/), Pair-Programming, ATC Checks -  Code Findings für Ihre Team-Pakete verteilen, ABAP Unit in die Entwicklungslandschaft bringen.
*   Beschaffung von Werkzeugen für die Qualitätssicherung
*   Einführung von Code Reviews und statischen Code Checks als obligatorische Elemente des Entwicklungsprozesses
*   Weitere Schulung aller ABAP-Entwickler, teilweise durch Train-the-Trainer


## Abschließende Gedanken

Die effektive Ausrichtung der SAP-Entwicklungsteams an den Unternehmenszielen sowie der organisatorischen Struktur ist eine anspruchsvolle Aufgabe, die aufgrund ihrer Komplexität eine erhebliche Herausforderung darstellen kann. Wir sind der Meinung, dass der Faktor Mensch auch in einer hochgradig maschinellen und technologieorientierten Welt eine wesentliche Rolle spielt. Es lohnt sich, in ein sozioökonomisches System mit gut ausgebildeten und intrinsisch motivierten Mitarbeitern zu investieren. Die Zeiten der Chuck-Norris-Entwickler und Cowboy-Coder sollten endlich der Vergangenheit angehören und durch professionelle Teams, deren Mitglieder voneinander lernen können, ersetzt worden sein.

Denken Sie daran: Ein System ist nur so gut wie das schwächste Glied in seiner Kette. Die lokal begrenzten Optimierungsmaßnahmen in Ihrem Entwicklungsteam lindern vielleicht nur Symptome und einen kleinen, aber wesentlichen Teil in ihrem Softwareentwicklungsprozess. Schauen sie über Ihre Team-Grenzen hinweg und suchen Sie den Engpass, der das gesamte System negativ beeinflusst. Oft sind es langatmige Governance- oder Freigabeprozesse die Verzögerungskosten (Cost of Delay) verursachen.  Sprechen Sie offen mit den verantwortlichen Stellen und unterstützen Sie diese mit Zahlen, Daten und Fakten, um den Gesamtprozess zu verbessern. Eine durchgängige Abstimmung über alle beteiligten Prozesse hinweg ist der Schlüssel, um das volle Potenzial Ihrer Entwicklungsabteilung – und darüber hinaus – zu entfalten.