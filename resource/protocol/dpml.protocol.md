# Deepractice Prompt Markup Language Schema Protocol (DPML)

> **TL;DR:** DPML (Deepractice Prompt Markup Language) ist eine speziell für das #Prompt-Engineering entwickelte Auszeichnungssprache, die #Tags (XML-Struktur) und #Inhalt (Markdown-Inhalt) kombiniert, um einen standardisierten Ausdrucksrahmen für verschiedene Arten von Anweisungen zu bieten und so die strukturelle Klarheit und semantische Genauigkeit der Anweisungen zu gewährleisten.

### Zweck und Anwendungsbereich

DPML zielt darauf ab, eine standardisierte Ausdrucksweise für das Prompt-Engineering bereitzustellen und die folgenden Schlüsselprobleme zu lösen:
- Bereitstellung einer klaren #semantischen Struktur für verschiedene Arten von Anweisungen (Denken, Ausführen usw.)
- Beibehaltung der natürlichen Sprachausdrucksfähigkeit und Flexibilität von Anweisungen
- Unterstützung der modularen Organisation und Wiederverwendung von Anweisungen
- Gewährleistung der maschinellen Lesbarkeit und menschlichen Lesbarkeit von Anweisungen

DPML eignet sich für alle Szenarien, die eine strukturierte Darstellung von Anweisungen erfordern, einschließlich, aber nicht beschränkt auf:
- Anweisungssysteme für KI-Assistenten
- Anweisungsdesign für komplexe Aufgaben
- Anweisungsdefinitionen für automatisierte Arbeitsabläufe
- Anweisungsorganisation für das Wissensmanagement

### Designphilosophie

Das Kerndesignkonzept von DPML basiert auf den folgenden Schlüsselideen:

1. **Natürlichsprachlich getrieben**: DPML geht davon aus, dass Anweisungen im Wesentlichen eine strukturierte Darstellung der natürlichen Sprache sind und keine traditionelle Programmiersprache. Die #Tag-Struktur dient nur zur Bereitstellung #semantischer Grenzen, der #Inhalt bleibt hauptsächlich in natürlicher Sprache.

2. **Interpretation ist Implementierung**: In DPML stellt die #semantische Interpretation der Anweisung selbst die #Implementierung dar. Wenn ein KI-System die Semantik einer Anweisung versteht, ist kein zusätzlicher Konvertierungsschritt erforderlich; der Verstehensprozess ist der Ausführungsprozess.

3. **Semantische Transparenz**: #Tag- und #Attributnamen sind selbsterklärend, sodass sowohl Menschen als auch KI die Absicht und Funktion der Struktur intuitiv verstehen können.

4. **Kombination und Wiederverwendung**: Durch Protokollimplementierungsbindung (A:B-Syntax) können einfache Protokolle zu komplexen Funktionen kombiniert werden, was ein "baukastenartiges" Prompt-Engineering ermöglicht.

5. **Konsistentes Verständnis**: Dieselbe DPML-Struktur sollte in verschiedenen KI-Systemen zu einem konsistenten Verständnis und Verhalten führen, um die Portabilität und Stabilität von Anweisungen zu gewährleisten.

Diese Designideen leiten alle Protokolldesigns von DPML und ermöglichen es, dass Anweisungen sowohl eine strukturierte maschinelle Lesbarkeit als auch die Ausdruckskraft und Flexibilität der natürlichen Sprache aufweisen.

### Verwandte Protokolle

- **XML**: Die grundlegende #Tag-Struktur von DPML ist von XML inspiriert
- **Markdown**: Der #Inhaltsbereich von DPML verwendet das Markdown-Format

## 📝 Syntaxregeln

### Formale Definition

```ebnf
dokument    ::= element | (element dokument)
element     ::= '<' tag attribute '>' inhalt '</' tag '>' | '<' tag attribute '/>'
tag         ::= [namespace ':'] name
namespace   ::= name
name        ::= [A-Za-z][A-Za-z0-9_-]*
attribute  ::= (attribut attribute) | ε
attribut    ::= name '="' wert '"'
wert        ::= [^"]*
inhalt      ::= markdown_text | (element inhalt) | ε
markdown_text ::= (* jeder gültige Markdown-Text *)
```

### Lexikalische Elemente

| Element | Form | Beschreibung |
|---|---|---|
| #Tag | `<tag>...</tag>` | Definiert eine #semantische Einheit, z. B. `<thinking>`, `<executing>` |
| #Selbstschließendes Tag | `<tag />` | Ein Tag ohne Inhalt, z. B. `<import />` |
| #Attribut | `eigenschaft="wert"` | #Tag-Konfigurationsinformationen, z. B. `type="analysis"` |
| #Inhalt | Markdown-formatierter Text | Der eigentliche Anweisungstext innerhalb des #Tags |
| Kommentar | `<!-- kommentar -->` | Protokollkommentar, nicht als Anweisungsinhalt |

### Kombinationsregeln

1. #Tags können verschachtelt werden, um eine hierarchische Struktur zu bilden
2. Ein #Tag kann mehrere #Attribute haben, Attributnamen dürfen innerhalb desselben Tags nicht wiederholt werden
3. #Tags müssen korrekt geschlossen werden, entweder als gepaartes Tag `<tag></tag>` oder als #selbstschließendes Tag `<tag/>`
4. Der #Inhaltsbereich kann reiner Markdown-Text sein oder andere #Tags enthalten
5. Das Wurzelelement wird empfohlen, `<prompt>` zu verwenden, ist aber nicht zwingend erforderlich

## 🧩 Semantische Definition

### Kernkonzepte

| Konzept | Definition | Beispiel |
|---|---|---|
| #Anweisungseinheit | Eine semantisch vollständige Anweisungskomponente, die durch ein #Tag definiert ist | `<thinking>Problem analysieren...</thinking>` |
| #Attributmodifikation | Verfeinerung der Verhaltensmerkmale einer #Anweisungseinheit durch #Attribute | `<executing priority="high">` |
| #Inhaltsausdruck | Der eigentliche Anweisungstext, ausgedrückt in Markdown | `# Schritte\n1. Zuerst...` |
| #Kombinierte Anweisung | Mehrere #Anweisungseinheiten werden zu einer vollständigen Anweisung kombiniert | `<thinking>...</thinking><executing>...</executing>` |

### Attributbeschränkungen

DPML wendet die folgenden Einschränkungen und Spezifikationen auf #Attribute an:

1. **Grundsatz der Allgemeingültigkeit von Attributen**:
   - #Attribute sind ein allgemeiner Mechanismus, der auf jedes #Tag angewendet werden kann
   - Dasselbe #Attribut kann für verschiedene #Tags verwendet werden, hat aber eine konsistente Semantik
   - #Attribute werden unabhängig von #Tags definiert und sind nicht an bestimmte #Tags gebunden

2. **Grundsatz der Attributdefinition**:
   - DPML selbst definiert keine spezifischen #Attribute, sondern stellt nur den Syntaxrahmen für #Attribute bereit
   - Alle verwendeten #Attribute müssen in einem spezifischen Protokoll oder einer Attributspezifikation klar definiert sein
   - Nicht definierte #Attribute dürfen nicht verwendet werden
   - #Attributwerte müssen dem angegebenen Typ und Bereich entsprechen

3. **Verwaltung von Attributspezifikationen**:
   - #Attribute werden in separaten Attributspezifikationsdokumenten definiert
   - Jede #Attributdefinition enthält: Name, Datentyp, Anwendungsbereich, Semantik
   - Neue #Attribute müssen über einen standardisierten Prozess eingeführt werden
   - Kompatibilitätsänderungen müssen die Abwärtskompatibilität berücksichtigen


#Attributbeschränkungen gewährleisten die Konsistenz und Interoperabilität von Anweisungen. Bei der Entwicklung von Anweisungen mit DPML sollten Entwickler die definierten #Attributspezifikationen befolgen und keine privaten oder nicht dokumentierten #Attribute erstellen.

### Protokollimplementierungsbindung

Die Doppelpunkt-Syntax (:) in DPML ist ein zentraler semantischer Mechanismus zur Darstellung der Implementierungsbeziehung zwischen #Tags:

1. **Grundlegende Implementierungsbindung**: Ein Doppelpunkt zeigt an, dass eine Funktion durch ein bestimmtes Protokoll implementiert wird
   ```xml
   <store:execution>
     <!-- Gibt an, dass die store-Funktion durch das execution-Protokoll implementiert wird -->
   </store:execution>
   ```
   
   In DPML bedeutet `A:B` "A implementiert mit B". Die linke Seite des Doppelpunkts gibt an, "was zu tun ist" (Funktion), die rechte Seite, "wie es zu tun ist" (Implementierung).

2. **Implementierungsvererbung**: Bei Verwendung der Form `<A:B>` erbt das A-#Tag alle Strukturregeln und semantischen Merkmale des B-Protokolls. Zum Beispiel:
   ```xml
   <store:execution>
     <process>...</process>  <!-- Unter-Tag aus dem execution-Protokoll -->
     <rule>...</rule>        <!-- Unter-Tag aus dem execution-Protokoll -->
   </store:execution>
   ```

3. **Kombination mehrerer Protokolle**: Verschiedene Funktionen können durch verschiedene Protokolle implementiert werden, um gemeinsam komplexe Systeme aufzubauen
   ```xml
   <memory>
     <store:execution>Speichervorgang...</store:execution>
     <recall:resource>Abrufvorgang...</recall:resource>
   </memory>
   ```

4. **Implementierungshierarchie**:
   ```mermaid
   flowchart LR
     A["memory"] --> B["store:execution"]
     A --> C["recall:resource"]
     B --> D["process"]
     B --> E["rule"]
     C --> F["path-Referenz"]
   ```

Jede Implementierungsbindungsbeziehung drückt klar aus, "diese Funktion wird mit diesem Protokoll implementiert", was die semantische Klarheit und Interaktionskonsistenz der Anweisungskomponenten gewährleistet.

### Interpretationsregeln

1. Der #Tag-Name bestimmt den primären semantischen Typ der #Anweisungseinheit (Denken, Ausführen usw.)
2. #Attribute bieten zusätzliche Kontrolle und Metadaten, die die Interpretation der #Anweisungseinheit beeinflussen
3. Der #Inhaltsbereich wird nach der Markdown-Syntax analysiert, wobei seine Formatierungsmerkmale (Überschriften, Listen, Hervorhebungen usw.) erhalten bleiben
4. #Verschachtelte Tags stellen eine Einschlussbeziehung dar, wobei die innere #Anweisungseinheit ein Bestandteil der äußeren #Anweisungseinheit ist
5. #Tags auf derselben Ebene werden der Reihe nach interpretiert und stellen die Reihenfolge des Anweisungsprozesses dar


## 📋 Verwendungsbeispiele

### Gültige Beispiele

**1. Grundlegender Denk-Ausführungs-Ablauf**
```
<prompt>
  <thinking type="analysis">
    # Problemanalyse
    Dies ist ein **Datenverarbeitungsproblem**, das Folgendes berücksichtigt:
    1. Konvertierung des Datenformats
    2. Leistungsoptimierung
  </thinking>
  
  <executing>
    # Ausführungsschritte
    1. Zuerst die Eingabedatei lesen
    2. Den Konvertierungsalgorithmus anwenden
    3. Das Ergebnis an den Zielort ausgeben
    
    Stellen Sie sicher, dass Sie während des gesamten Prozesses **Protokolle aufzeichnen**, um das Debugging zu erleichtern.
  </executing>
</prompt>
```

**2. Komplexe Struktur mit Attributen**
```
<prompt>
  <context type="background">
    # Projekthintergrund
    Der Kunde benötigt ein Dashboard zur Datenvisualisierung.
  </context>
  
  <thinking type="design" priority="high">
    # Design-Ideen
    Verwenden Sie ein modulares Design, um die Datenschicht und die Ansichtsschicht zu trennen.
    
    <concept id="arch" domain="frontend">
      ## Architekturkonzept
      Verwenden Sie die Kombination React + D3.js
    </concept>
  </thinking>
  
  <executing steps="3">
    # Implementierungsschritte
    1. Grundgerüst aufbauen
    2. Datenkonnektor implementieren
    3. Visualisierungskomponenten entwickeln
  </executing>
</prompt>
```

**3. Ressourcenreferenz**
```
<prompt>
  <resource type="reference" src="docs/api-spec.md">
    Siehe API-Spezifikationsdokument
    
    API-Endpunktdefinitionen befinden sich in den Zeilen 25-35 des Quellcodes
  </resource>
  
  <thinking>
    Entwerfen Sie basierend auf der API-Spezifikation...
  </thinking>
</prompt>
```

**4. Beispiel für protokollübergreifende Kombination**
```
<memory>
  <!-- Speichervorgang wird durch das execution-Protokoll implementiert -->
  <store:execution>
    <content>Benutzerbetriebssystem: MacOS 13.4</content>
    
    <process>
      # Speicherprozess
      ```mermaid
      flowchart TD
        A[Inhalt empfangen] --> B[Format überprüfen]
        B --> C[In Speicher schreiben]
      ```
    </process>
    
    <rule>
      1. Speicherschreibvorgänge müssen atomar sein
      2. Bei Konflikten die Version mit höherer Konfidenz beibehalten
    </rule>
  </store:execution>
  
  <!-- Abrufvorgang wird durch das resource-Protokoll implementiert -->
  <recall:resource>
    @memory://system/os_info?confidence=0.8
  </recall:resource>
</memory>
```

### Ungültige Beispiele

**1. Tag nicht geschlossen**
```
<prompt>
  <thinking>
    Denkinhalt...
  <!-- Fehlendes </thinking>-Tag -->
  
  <executing>
    Ausführungsschritte...
  </executing>
</prompt>
```
Fehlergrund: Das `<thinking>`-Tag wurde nicht korrekt geschlossen

**2. Falsches Attributformat**
```
<prompt>
  <thinking type=analysis>
    Denkinhalt...
  </thinking>
</prompt>
```
Fehlergrund: Der Attributwert fehlt in doppelten Anführungszeichen, es sollte `type="analysis"` sein

**3. Verwendung eines nicht definierten Attributs**
```
<prompt>
  <thinking color="blue" importance="9">
    Denkinhalt...
  </thinking>
</prompt>
```
Fehlergrund: Verwendung der nicht in der Attributspezifikation definierten Attribute `color` und `importance`

## 💡 Bewährte Praktiken

1. **Selbsterklärende Tag-Namen**: Wählen Sie selbsterklärende Tag-Namen, damit sie selbst die logische Semantik klar ausdrücken können, sodass auch ohne Computerverarbeitung Menschen und KI den logischen Kontext der Tag-Struktur leicht verstehen können
2. **Semantische Klarheit**: Wählen Sie Tag-Namen, die eine klare Bedeutung haben, damit die Anweisungsstruktur auf einen Blick verständlich ist
3. **Angemessene Schichtung**: Verwenden Sie verschachtelte Strukturen sinnvoll, um eine zu tiefe Hierarchie zu vermeiden, die die Lesbarkeit beeinträchtigt
4. **Fokus auf den Inhalt**: Jeder Tag-Inhalt sollte sich auf eine einzige Aufgabe konzentrieren, um eine Vermischung von Funktionen zu vermeiden
5. **Sinnvolle Attribute**: Verwenden Sie nur notwendige Attribute, um eine übermäßige Konfiguration zu vermeiden
6. **Konsistenz**: Behalten Sie im gesamten Projekt einen konsistenten DPML-Strukturstil bei
7. **Klarheit des Namensraums**: Stellen Sie bei Verwendung von Namensräumen sicher, dass die linke Seite angibt, "was zu tun ist" (Funktion), und die rechte Seite, "wie es zu tun ist" (Implementierung)
8. **Einhaltung der Attributregeln**: Verwenden Sie nur offiziell definierte Attribute und befolgen Sie die in der Attributspezifikation festgelegten Typ- und Wertbeschränkungen

## 📌 Zusammenfassung

DPML bietet durch die Kombination der strukturierten Fähigkeiten einer Auszeichnungssprache und der Ausdruckskraft von Markdown eine sowohl standardisierte als auch flexible Ausdrucksweise für das Prompt-Engineering. Seine Hauptvorteile liegen in der klaren semantischen Struktur, dem Mechanismus zur Wiederverwendung von Protokollen und der menschlichen Lesbarkeit, was es besonders geeignet für den Aufbau komplexer, modularer KI-Interaktions-Anweisungssysteme macht.
