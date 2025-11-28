---
layout: page
title: Empfehlungen
permalink: /testing/recommendations/
parent: Softwaretest mit ABAP Unit
nav_order: 99
---


{: .no_toc}
# Empfehlungen

1. TOC
{:toc}

Folgend möchten wir versuchen, Ihnen aus den vielen Informationen eine Empfehlung zusammenzustellen, die Ihnen und Ihrem Team einen schnellen und nachhaltigen Start ermöglichen.

## Konsens

Unit Tests und damit Code-Qualität sind kein Selbstzweck, sondern ein wichtiger Bestandteil für Ihre produktiven Softwareprodukte. Deswegen gibt es aus unserer Sicht keine Ausrede, Unit Tests nicht zu verwenden. 

Es gibt zwei verschiedene Perspektiven, die zusammenpassen müssen:
1. Entwickelnde müssen Unit Tests erstellen wollen
2. Das Management muss die Verwendung von Unit Tests unterstützen

Wenn Entwickelnde gezwungen werden, Unit Tests zu erstellen, dies jedoch aus unterschiedlichen Gründen verweigern, dann wird es keine oder unnütze Unit Tests geben.
Wenn das Management die Entwickelnden nicht unterstützt und keine Rückendeckung gibt (Schulung, Zeit, etc.), dann wird es ein paar Unit Tests geben, die jedoch nicht ausreichend sein werden.

## Verantwortlichkeiten

Wir haben in dem Kapitel [ABAP Unit](#abap_unit_advanced) versucht, die Notwendigkeit und die Vorteile von Unit Tests klarzumachen. In welcher Form und in welchem Umfang Sie dies in Ihrer Firma, in Ihrem Team einsetzen, müssen Sie erarbeiten. Aus diesem Grund sollte es eine verantwortliche Person geben, die in der Entwicklungsabteilung als auch auf Managementebene die Weichen stellt und Dinge vorantreibt.

## Am Anfang war das Konzept

Ein wichtiger Punkt bei Neuentwicklungen ist, dass ein gutes technisches Konzept erstellt wird. In diesem Konzept sollten Unit Tests berücksichtigt werden. Eventuell ist Test-Driven-Design eine Möglichkeit zur Entwicklung der Applikation. Aber auch hierfür ist es wichtig, dass ein vernünftiges Konzept vorhanden ist. An einem Konzept können erfahrene Personen bereits erkennen, ob Unit Tests möglich sein werden oder nicht. 

## Einfach anfangen

Wenn wir Ihnen nahelegen, Unit Tests zu verwenden, dann sind wir uns bewusst, dass dies leichter gesagt ist, als getan. Wenn es nur wenig Erfahrungen mit dieser Technik gibt, dann müssen diese vom Entwicklungsteam gesammelt werden. Nur wenn man weiß, welche Voraussetzungen notwendig sind, kann man das Management für die notwendigen Maßnahmen gewinnen.

Aber: Sie müssen anfangen! Am einfachsten ist es bei Methoden, bei denen man denkt: "Die ist ja so simpel, da brauche ich doch keinen Unit Test für!" Aber gerade das sind die Methoden, die den Einstieg einfach machen. Achten Sie darauf, dass keine Datenselektionen vorgenommen oder Benutzerabfragen im Dialog gemacht werden. Machen Sie den ersten Unit Test eventuell mit Kollegen zusammen und teilen Sie Ihre Erfahrungen.

Automatisierte Tests mit Hilfe von ABAP Unit sind ein sehr weites Feld. Es gibt unzählige Methoden, Techniken und Anwendungsgebiete. Deswegen möchten wir an dieser Stelle keine weitere Empfehlung, keinen "Fahrplan" geben, wie es nach Ihren ersten Gehversuchen weitergehen sollte. Wenn Sie sich mit ABAP Unit beschäftigen, werden Sie die Schwachstellen und die Potentiale kennenlernen. Sie werden für sich und Ihr Team einen Weg finden. Lassen Sie sich nach anfänglichen Fehlversuchen nicht entmutigen, sondern bleiben Sie am Ball. In diesem Leitfaden geben wir Ihnen ein Dokument an die Hand, mit dem Sie Hilfe zu vielen Bereichen der automatisierten Tests finden. Es gibt jedoch nie eine Universallösung. Erfahrung ist der sicherste Weg, um Ihre Software qualitativ zu verbessern.

## Management

Das Erstellen und Verwalten von Unit Tests ist ein zeitlicher Mehraufwand. Dieser wird durch eine höhere Softwarequalität und damit geringere Anwendertests oder gar Produktionsausfälle jedoch wett gemacht. Entwickelnde benötigen - gerade in der Anfangszeit - deutlich mehr Zeit für die Erstellung der Unit Tests. Dies muss durch das Management gewollt sein und muss unterstützt werden. Definieren Sie, was Sie vom Management erwarten, aber auch, was das Management dafür bekommt. Suchen Sie sich einen Bereich, eine Applikation oder ein Team, das Erfahrungen mit automatisiertem Testing sammelt. Setzen Sie sich Ziele, was Sie in einem bestimmten Zeitraum erreicht haben wollen.

## Weiterbildung

Gerade bei Unit Tests ist es wichtig, dass Sie sich weiterbilden und mehr und mehr Erfahrung sammeln. Die Lernkurve ist sehr steil, aber danach gibt es unglaublich viele Möglichkeiten, Varianten und Techniken. Besuchen Sie Workshops, lesen Sie Bücher und vor allen Dingen: Tauschen Sie sich im Team aus. 

## Code - Test - Repeat

Unit Tests sind ein wichtiger Bestandteil der Softwareentwicklung. Es ist wichtig, sich damit zu beschäftigen und diese Technik kennenzulernen. Am allerwichtigsten ist es jedoch, dass Unit Tests zu einem unabdingbaren Teil Ihrer Arbeit werden. Unit Tests müssen gewartet, dokumentiert und weiterentwickelt werden. Lassen Sie die Unit Tests nicht in Vergessenheit geraten.

## Fazit

Als Fazit zu Unit Tests möchten wir mit dem Zitat von Kapitän Kirk schließen:
"Die Vorurteile, die man gegeneinander hegt, verschwinden, wenn man sich kennenlernt."
