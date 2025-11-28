---
layout: page
title: Entwicklung von Open-Source-Software
permalink: /open-source/developing-open-source-software/
parent: Open Source
nav_order: 4
---

# Entwicklung von Open-Source-Software
{: .no_toc}

Dieser Abschnitt beschreibt den Anwendungsfall als Unternehmen eigene Komponenten als Open-Source-Projekt zu entwickeln. Dies entspricht der dritten [Ausbaustufe](/ABAP-Leitfaden/open-source/#ausbaustufen) und damit der Anspruchsvollsten.

1. TOC
{:toc}

## Mehrwert aus Unternehmenssicht

In diesem Anwendungsfall entscheiden Sie sich dafür eine ABAP-basierte Komponente Ihrer Software als Open-Source-Projekt zu veröffentlichen und weiterzuentwickeln. Dies bedeutet, dass Sie diese Komponente für andere Verwender außerhalb Ihres Unternehmens öffnen und zur Verfügung stellen. Sie entscheiden sich für eine [Open-Source-Lizenz](/ABAP-Leitfaden/open-source/licenses) und erlauben damit ausdrücklich die Nutzung, Modifikation und Weitergabe des Quellcodes der Komponente im Rahmen der konkreten Lizenzbedingungen.

Dies hört sich zunächst vielleicht nicht nach einem erstrebenswerten Modell an. Konkret nehmen Sie allerdings nicht Ihre proprietäre Implementierung des Geschäftsmodells Ihres Unternehmens sondern Sie wählen geeignete Komponenten aus. Besonderes eignen sich folgende:

- Wiederverwendbare Komponenten ("Reuse Services"), die wiederkehrende technische Probleme lösen (z. B. Protokollierung, Pflegedialoge, Unit-Test-barkeit, ...)
- SDKs zur Anbindung Ihrer Kunden, beispielsweise zur Einbindung Ihrer bereitgestellten Webservices
- Proof of Concepts und technische Demos

Durch die Entwicklung als Open-Source-Projekt ergeben sich Ihnen folgende Vorteile:

- **Beteiligung durch externe Entwickler**  
  Externe Entwickler können Ihre Komponente in anderen Systemen mit anderen Release-Ständen oder installierten Abhängigkeiten testen. Sie können Features vorschlagen oder mit Ihrer Unterstützung in der Komponente selbst ergänzen. Ihre Open-Source-Komponente gewinnt an Qualität und Funktionsumfang, ohne dass zwangsläufig in Ihrem Unternehmen Entwicklungsaufwände entstehen.  
  Dieses Szenario ist aus der Sicht des sich beteiligenden Entwicklers in [Beteiligung an Open-Source-Software](/ABAP-Leitfaden/open-source/contributing-to-open-source-software.md) beschrieben.
- **Entwicklerperspektiven über den eigenen Tellerrand hinaus**  
  Durch die externe Beteiligung gewinnen Sie neue Perspektiven hinzu. Dies kann dadurch entstehen, dass Externe einen anderen Releasestand, eine andere Laufzeitumgebung oder ein anderes SAP-Produkt für den Einsatz Ihrer Komponente verwenden oder weil sie technisch andere Erfahrungen gemacht haben und andere Architekturen oder Entwurfsmuster kennen. Sie lernen diese Perspektiven kennen und können sie bewerten und gegebenenfalls in weiteren, auch internen, Projekten einbringen.
- **Entwicklung als eigenständige Komponente**  
  Um die Komponente als Open-Source-Projekt veröffentlichen zu können, müssen Sie sich zwangsläufig mit einigen technischen Fragestellungen zur Softwarearchitektur befassen, die sich gerade in der Inhouse-Entwicklung in der Regel nicht stellen. Die Auseinandersetzung mit diesem Thema kann Ihre Softwarequalität erhöhen. Einige dieser Fragestellungen sind im Abschnitt [Architektur](#architektur) beschrieben.
- **Außendarstellung**  
  Mit der Veröffentlichung Ihrer Komponente als Open-Source-Software zeigen Sie als Unternehmen, dass Sie von Ihren Entwicklungsfähigkeiten und -prozessen überzeugt sind und qualitativ hochwertige Software entwickeln können. Dies kann als Aushängeschild dienen und sich positiv im Recruiting darstellen.

## Anpassung des Entwicklungsprozesses zur Berücksichtigung externer Entwickler

Haben Sie sich für eine Komponente entschieden, die Sie "open-sourcen" möchten, gibt es einige Punkte zu beachten, um den Zugang für externe Beteiligung möglichst einfach zu gestalten.

### Dokumentation

Stellen Sie Dokumentation bereit, wie sich Externe an Ihrem Projekt beteiligen können. Dazu zählt eine README-Datei mit Installationsanweisungen und Details zu Abhängigkeiten und unterstützten Produkten und Releases. Dazu zählen aber auch beispielweise Issue-Templates als Vorlage für Bug-Reports und Contribution-Guidelines mit den verwendeten Namenskonventionen und Architekturmustern. Dies ist nicht ABAP-spezifisch, Tipps finden Sie beispielsweise auf [Open Source Guides](https://opensource.guide/starting-a-project/#launching-your-own-open-source-project).

### Namensräume

Das Namensraumkonzept in ABAP führt dazu, dass lediglich im Kundennamensraum die Beteiligung ohne zusätzliche Schritte möglich ist. Der Kundennamensraum erhöht allerdings die Wahrscheinlichkeit für Namenskonflikte über verschiedene Projekte hinweg. Es gibt zwei verschiedene Lösungsansätze:

#### Kollisionsprüfung auf dotabap.org

Ist Ihr Projekt auf [dotabap.org](https://dotabap.org) gelistet, werden die enthaltenen Objekte automatisch auf Namenskollisionen mit allen anderen dort gelisteten Projekten geprüft. Die Bezeichner Ihrer Entwicklungsobjekte sollten neben dem Namensraum ein Projektkürzel, oft ein dreistelliges Akronym, tragen, welches noch nicht verwendet wird.

#### Eigener reservierter Namensraum

Sie können einen selbst reservierten Namensraum (`/NSPC/`) verwenden. In diesem Fall müssen Sie jedoch den externen Entwicklern einen Entwicklungs- oder Reparaturschlüssel zur Beteiligung bereitstellen. abapGit bietet dafür eingebauten Support und serialisiert/deserialisiert die Reparaturlizenz automatisch in der Community-Version ([Dokumentation](https://docs.abapgit.org/user-guide/reference/namespaces.html)). Die SAP-Version von abapGit in den Public-Cloud-Systemen bietet die Funktionalität nicht. Der vorgesehene Weg zur Installation von Namensräumen über die Maintain-Namespaces-App ist ebenfalls ungeeignet, da Sie nicht beliebigen Personen und Unternehmen den Namensraum freigegeben können ([Dokumentation](https://help.sap.com/docs/sap-btp-abap-environment/landscape-portal/maintain-namespaces?locale=en-US)). Eine Lösung dafür sind die ABAP Open Source Namespaces.

#### ABAP Open Source Namespaces

Ein ABAP Open Source Namespace ist ein reservierter Namensraum, dessen Reparaturlizenz öffentlich einsehbar ist. Sie sind in der Maintain-Namespaces-App automatisch verfügbar und lösen damit die Problematik der Installation in Public-Cloud-Systemen. Der Schwierigkeitsgrad im Vergleich zur Verwendung des Kundennamensraum wird trotzdem erhöht, da die Berechtigungen zum Zugriff auf die App in der Regel in Unternehmen sehr eingeschränkt sind. Ein solcher Namensraum kann insbesondere auch ohne Zugriff auf die Maintain-Namespaces-App in SAP for Me oder Geschäftsbeziehung zur SAP beantragt werden. Details finden Sie unter [ABAP Open Source Namespaces](https://github.com/SAP/abap-open-source-namespaces).

### Architektur

Ihre Komponente sollte von externen Entwicklern außerhalb Ihres Entwicklungssystems verwendbar sein. Das heißt sie darf keine Abhängigkeiten zu Objekten haben, die nicht im unterstützten SAP-Produkt und Release verfügbar sind. Das beinhaltet auch eigene Utility-Bibliotheken die entweder ebenfalls als Open-Source-Projekt und damit als installierbare Abhängigkeit veröffentlicht werden müssten oder deren Verwendung in der Komponente entfernt werden muss. Auch innerhalb des SAP-Standards sollten Sie sich über Einschränkungen Gedanken machen. Entwickeln Sie eine Hilfsbibliothek, die technische Probleme löst, sollten Sie es vermeiden unnötigerweise Objekte aus dem SAP-Standard zu verwenden, die beispielsweise in den Softwarekomponenten `SAP_APPL` oder `S4CORE` angesiedelt sind. Damit schränken Sie die Beteiligung auf einen Personenkreis ein, der Zugriff auf ein SAP ERP / SAP S/4HANA System hat und schließen die Verwendung des [ABAP Cloud Developer Trials](https://community.sap.com/t5/technology-blog-posts-by-sap/abap-cloud-developer-trial-2023-available-now/ba-p/14057183) aus. Dieses ist besonders beliebt in der Open-Source-Community, da es lokal betrieben werden kann, kostenlos ist und keine aktive Geschäftsbeziehung mit der SAP benötigt.

### Unterstützung verschiedener Releases

Unabhängig von der Produkt-Unterstützung (ABAP Cloud Developer Trial, SAP ERP, SAP S/4HANA, Branchenlösung) und den damit generell verfügbaren Softwarekomponenten, sollten Sie sich auch Gedanken über die Release-Unterstützung machen, dem Release-Stand und Patch-Level dieser Softwarekomponenten, den Sie minimal unterstützen möchten. Es ist unwahrscheinlich, dass externe Entwickler exakt den Releasestand Ihres Entwicklungssystem verwenden. Je mehr Sie unterstützen, desto einfacher ist die Beteiligung, desto schwieriger ist aber auch die Entwicklung, da Sie auf neue Features und APIs verzichten müssen.

[abapGit](https://github.com/abapGit/abapGit) und [abap2UI5](https://github.com/abap2UI5/abap2UI5) unterstützen beispielsweise beide noch den ABAP-Release 7.02. Technisch verwenden Sie dafür zwei verschiedene Ansätze:

abapGit schränkt sich auf den Syntax und die verfügbaren APIs von ABAP 7.02 ein. Dass niemand versehentlich neueren Syntax verwendet, wird über Continuous Integration mit [abaplint](https://github.com/abaplint/abaplint) sichergestellt, welches auf Release-spezifischen Syntax prüfen kann. Wird technisch eine API benötigt, die in dem unterstützten Release nicht zur Verfügung steht, wird der Aufruf dynamisch implementiert.

abap2UI5 verwendet einen anderen Ansatz. Der verwendete Syntax wird mit abaplint auf Kompatibilität mit ABAP 7.50 geprüft. Über eine [CI-Pipeline](https://github.com/abap2UI5/abap2UI5/blob/main/.github/workflows/ABAP_702.yaml) wird ebenfalls mit abaplint ein automatischer Downport des Syntax vorgenommen und in einem separaten Branch committet. Details zu diesem Ansatz finden Sie auch in diesem [Beitrag](https://www.linkedin.com/pulse/running-abap2ui5-older-r3-releases-downport-compatibility-abaplint-mjkle/) des Maintainers.

### Unterstützung verschiedener ABAP-Sprachversionen

Eine weitere Komplexität ist die Unterstützung mehrerer ABAP-Sprachversionen. Es kann beispielsweise sein, dass Sie sich auf ABAP-Release 7.50 einschränken und eine SAP-API dort bereits verfügbar und auch im ABAP Cloud Developer Trial enthalten ist. Sie ist allerdings nicht für die Nutzung in ABAP Cloud freigegeben. In diesem Fall würden Sie regulär im Clean Core Level Concept einen Wrapper anlegen. Dieser ist aber natürlich nicht mehr in Level A und damit nicht in Public-Cloud-Systeme auslieferbar. Vielleicht gibt es in ABAP Cloud eine neuere API, die freigegeben ist. Diese ist jedoch nicht in ABAP 7.50 verfügbar. Möchten Sie dieses Szenario unterstützen, haben Sie verschiedene Möglichkeiten:

- __Branching__  
  Sie können pro Unterscheidung nach Release oder ABAP-Sprachversion einen eigenen Branch in git verwenden. Dies bietet den Vorteil, dass sie spezifische APIs und Features normal und statisch geprüft verwenden können. Auch für den Nutzer Ihrer Komponente ist die Installation vergleichsweise einfach, da dieser einfach den spezifischen Branch wählt. Die Wartung dieses Setups ist jedoch sehr aufwändig, da sie alle neuen Funktionen und Bugfixes in verschiedene Branches kontinuierlich portieren müssen.
- __Standard ABAP als Abhängigkeit in separatem Repository__  
  Sie können das primäre Coding Ihrer Anwendung mit der Sprachversion ABAP für Cloud-Entwicklung implementieren und alle spezifischen Release- / Produkt- oder Sprachversion-abhängigen Aufrufe in separate Repositorys auslagern, die dann als Abhängigkeit im jeweiligen System installiert werden müssen.
- __Dynamische API-Verwendung__  
  Sie können die nur in Standard ABAP und nur in ABAP Cloud verwendbaren APIs beide dynamisch Aufrufen und die ABAP-Cloud-API als Fallback verwenden. In diesem Fall verlieren Sie weitgehend die Syntaxprüfung. Sie gewinnen allerdings eine einfachere Installation und ein einfacheres Repository-Setup. Beispiele für solche Aufrufe finden Sie unter [steampunkification](https://github.com/heliconialabs/steampunkification).

abapGit bietet zusätzlich weitere Optionen zur Handhabung der ABAP-Sprachversion. Diese finden Sie unter [abapGit Docs - ABAP Language Version](https://docs.abapgit.org/user-guide/reference/abap-language-version.html).

### Continuous Integration ohne SAP-System

Die nächste Schwierigkeit ist die Tooling-Unterstützung für statische und dynamische Quellcodeanalyse zur Qualitätssicherung. Regulär käme hier das ABAP Test Cockpit (ATC) zum Einsatz. In der Open-Source-Entwicklung steht dieses jedoch nicht integriert zur Verfügung, da es kein ein Originalsystem zur Entwicklung gibt. Die Single Source of Truth ist das Git-Repository. Sie können in Ihrem Entwicklungssystem natürlich ATC einsetzen, davon profitieren allerdings die externen Entwickler nicht und Sie sehen kein direktes Feedback in Pull Requests. Ein Anbindung Ihres Entwicklungssystem an den Git-Anbieter wie GitHub ist technisch unproblematisch, allerdings lizenztechnisch nicht abgedeckt. Die Lösung ist die Verwendung von Quellcodeanalysetools außerhalb des SAP-Systems.

[abaplint](https://abaplint.org/) lässt sich nativ in Continous-Integration-Umgebungen wie GitHub Actions integrieren und bietet für statische Quellcodeanalyse einen vergleichsbaren Funktionsumfang zu Standard-ATC-Prüfungen oder auch Code Pal for ABAP. Zusätzlich ist es über den eingebauten Transpiler möglich auch Unit-Tests außerhalb des Systems auszuführen und damit vollumfänglich den Entwicklungsprozess zu unterstützen. Auch die Syntaxprüfung über mehrere Repositories hinweg ist möglich.
