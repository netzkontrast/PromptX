# Deepractice Prompt Markup Language Schema Protocol (DPML)

> **TL;DR:** DPML (Deepractice Prompt Markup Language) is a markup language specially designed for #prompt-engineering, which combines #tags (XML structure) and #content (Markdown content) to provide a standardized expression framework for various types of prompts, thus ensuring the structural clarity and semantic accuracy of the prompts.

### Purpose and Scope

DPML aims to provide a standardized way of expression for prompt engineering and to solve the following key problems:
- Provide a clear #semantic structure for different types of prompts (thinking, executing, etc.)
- Maintain the natural language expression ability and flexibility of prompts
- Support the modular organization and reuse of prompts
- Ensure the machine readability and human readability of prompts

DPML is suitable for all scenarios that require a structured representation of prompts, including but not limited to:
- Prompt systems for AI assistants
- Instruction design for complex tasks
- Prompt definitions for automated workflows
- Prompt organization for knowledge management

### Design Philosophy

The core design concept of DPML is based on the following key ideas:

1. **Natural Language Driven**: DPML assumes that prompts are essentially a structured representation of natural language, not a traditional programming language. The #tag structure is only used to provide #semantic boundaries, the #content remains mainly in natural language.

2. **Interpretation is Implementation**: In DPML, the #semantic interpretation of the prompt itself constitutes the #implementation. When an AI system understands the semantics of a prompt, no additional conversion step is required; the understanding process is the execution process.

3. **Semantic Transparency**: #Tag and #attribute names are self-explanatory, so that both humans and AI can intuitively understand the intent and function of the structure.

4. **Combination and Reuse**: Through protocol implementation binding (A:B syntax), simple protocols can be combined to build complex functions, enabling "building block-style" prompt engineering.

5. **Consistent Understanding**: The same DPML structure should lead to consistent understanding and behavior in different AI systems to ensure the portability and stability of prompts.

These design ideas guide all protocol designs of DPML and enable prompts to have both structured machine readability and the expressiveness and flexibility of natural language.

### Related Protocols

- **XML**: The basic #tag structure of DPML is inspired by XML
- **Markdown**: The #content part of DPML uses the Markdown format

## 📝 Syntax Rules

### Formal Definition

```ebnf
document    ::= element | (element document)
element     ::= '<' tag attributes '>' content '</' tag '>' | '<' tag attributes '/>'
tag         ::= [namespace ':'] name
namespace   ::= name
name        ::= [A-Za-z][A-Za-z0-9_-]*
attributes  ::= (attribute attributes) | ε
attribute   ::= name '="' value '"'
value       ::= [^"]*
content     ::= markdown_text | (element content) | ε
markdown_text ::= (* any valid Markdown text *)
```

### Lexical Elements

| Element | Form | Description |
|---|---|---|
| #Tag | `<tag>...</tag>` | Defines a #semantic unit, e.g. `<thinking>`, `<executing>` |
| #Self-closing Tag | `<tag />` | A tag without content, e.g. `<import />` |
| #Attribute | `property="value"` | #Tag configuration information, e.g. `type="analysis"` |
| #Content | Markdown formatted text | The actual prompt text within the #tag |
| Comment | `<!-- comment -->` | Protocol comment, not as prompt content |

### Combination Rules

1. #Tags can be nested to form a hierarchical structure
2. A #tag can have multiple #attributes, attribute names must not be repeated within the same tag
3. #Tags must be closed correctly, either as a paired tag `<tag></tag>` or as a #self-closing tag `<tag/>`
4. The #content part can be plain Markdown text or contain other #tags
5. The root element is recommended to be `<prompt>`, but it is not mandatory

## 🧩 Semantic Definition

### Core Concepts

| Concept | Definition | Example |
|---|---|---|
| #Prompt Unit | A semantically complete prompt component defined by a #tag | `<thinking>Analyze problem...</thinking>` |
| #Attribute Modification | Refinement of the behavioral characteristics of a #prompt unit through #attributes | `<executing priority="high">` |
| #Content Expression | The actual prompt text, expressed in Markdown | `# Steps\n1. First...` |
| #Combined Prompt | Multiple #prompt units are combined to form a complete prompt | `<thinking>...</thinking><executing>...</executing>` |

### Attribute Constraints

DPML applies the following constraints and specifications to #attributes:

1. **Principle of Universality of Attributes**:
   - #Attributes are a general mechanism that can be applied to any #tag
   - The same #attribute can be used for different #tags, but has a consistent semantics
   - #Attributes are defined independently of #tags and are not bound to specific #tags

2. **Principle of Attribute Definition**:
   - DPML itself does not predefine specific #attributes, but only provides the syntax framework for #attributes
   - All used #attributes must be clearly defined in a specific protocol or attribute specification
   - Undefined #attributes must not be used
   - #Attribute values must correspond to the specified type and range

3. **Management of Attribute Specifications**:
   - #Attributes are defined in separate attribute specification documents
   - Each #attribute definition includes: name, data type, scope, semantics
   - New #attributes must be introduced via a standardized process
   - Compatibility changes must take into account backward compatibility


#Attribute constraints ensure the consistency and interoperability of prompts. When developing prompts with DPML, developers should follow the defined #attribute specifications and not create private or undocumented #attributes.

### Protocol Implementation Binding

The colon syntax (:) in DPML is a central semantic mechanism for representing the implementation relationship between #tags:

1. **Basic Implementation Binding**: A colon indicates that a function is implemented by a specific protocol
   ```xml
   <store:execution>
     <!-- Indicates that the store function is implemented by the execution protocol -->
   </store:execution>
   ```
   
   In DPML, `A:B` means "A implemented with B". The left side of the colon indicates "what to do" (function), the right side "how to do it" (implementation).

2. **Implementation Inheritance**: When using the form `<A:B>`, the A-#tag inherits all structure rules and semantic features of the B protocol. For example:
   ```xml
   <store:execution>
     <process>...</process>  <!-- Sub-tag from the execution protocol -->
     <rule>...</rule>        <!-- Sub-tag from the execution protocol -->
   </store:execution>
   ```

3. **Combination of multiple protocols**: Different functions can be implemented by different protocols to jointly build complex systems
   ```xml
   <memory>
     <store:execution>Storage operation...</store:execution>
     <recall:resource>Retrieval operation...</recall:resource>
   </memory>
   ```

4. **Implementation hierarchy**:
   ```mermaid
   flowchart LR
     A["memory"] --> B["store:execution"]
     A --> C["recall:resource"]
     B --> D["process"]
     B --> E["rule"]
     C --> F["path-reference"]
   ```

Each implementation binding relationship clearly expresses "this function is implemented with that protocol", which ensures the semantic clarity and interaction consistency of the prompt components.

### Interpretation Rules

1. The #tag name determines the primary semantic type of the #prompt unit (thinking, executing, etc.)
2. #Attributes provide additional control and metadata that affect the interpretation of the #prompt unit
3. The #content part is parsed according to the Markdown syntax, preserving its formatting features (headings, lists, emphasis, etc.)
4. #Nested tags represent an inclusion relationship, where the inner #prompt unit is a component of the outer #prompt unit
5. #Tags at the same level are interpreted in order and represent the sequence of the prompt process


## 📋 Usage Examples

### Valid Examples

**1. Basic think-execute flow**
```
<prompt>
  <thinking type="analysis">
    # Problem analysis
    This is a **data processing problem** that considers the following:
    1. Conversion of the data format
    2. Performance optimization
  </thinking>
  
  <executing>
    # Execution steps
    1. First read the input file
    2. Apply the conversion algorithm
    3. Output the result to the target location
    
    Make sure you **record logs** throughout the process to facilitate debugging.
  </executing>
</prompt>
```

**2. Complex structure with attributes**
```
<prompt>
  <context type="background">
    # Project background
    The customer needs a dashboard for data visualization.
  </context>
  
  <thinking type="design" priority="high">
    # Design ideas
    Use a modular design to separate the data layer and the view layer.
    
    <concept id="arch" domain="frontend">
      ## Architecture concept
      Use the combination React + D3.js
    </concept>
  </thinking>
  
  <executing steps="3">
    # Implementation steps
    1. Build basic framework
    2. Implement data connector
    3. Develop visualization components
  </executing>
</prompt>
```

**3. Resource reference**
```
<prompt>
  <resource type="reference" src="docs/api-spec.md">
    See API specification document
    
    API endpoint definitions are in lines 25-35 of the source code
  </resource>
  
  <thinking>
    Design based on the API specification...
  </thinking>
</prompt>
```

**4. Example of cross-protocol combination**
```
<memory>
  <!-- Storage operation is implemented by the execution protocol -->
  <store:execution>
    <content>User operating system: MacOS 13.4</content>
    
    <process>
      # Storage process
      ```mermaid
      flowchart TD
        A[Receive content] --> B[Check format]
        B --> C[Write to memory]
      ```
    </process>
    
    <rule>
      1. Memory writes must be atomic
      2. In case of conflict, keep the version with higher confidence
    </rule>
  </store:execution>
  
  <!-- Retrieval operation is implemented by the resource protocol -->
  <recall:resource>
    @memory://system/os_info?confidence=0.8
  </recall:resource>
</memory>
```

### Invalid Examples

**1. Tag not closed**
```
<prompt>
  <thinking>
    Thinking content...
  <!-- Missing </thinking> tag -->
  
  <executing>
    Execution steps...
  </executing>
</prompt>
```
Reason for error: The `<thinking>` tag was not closed correctly

**2. Incorrect attribute format**
```
<prompt>
  <thinking type=analysis>
    Thinking content...
  </thinking>
</prompt>
```
Reason for error: The attribute value is missing in double quotes, it should be `type="analysis"`

**3. Use of an undefined attribute**
```
<prompt>
  <thinking color="blue" importance="9">
    Thinking content...
  </thinking>
</prompt>
```
Reason for error: Use of the attributes `color` and `importance` which are not defined in the attribute specification

## 💡 Best Practices

1. **Self-explanatory tag names**: Choose self-explanatory tag names so that they themselves can clearly express the logical semantics, so that even without computer processing, humans and AI can easily understand the logical context of the tag structure
2. **Semantic clarity**: Choose tag names that have a clear meaning, so that the prompt structure is understandable at a glance
3. **Appropriate layering**: Use nested structures sensibly to avoid a too deep hierarchy that affects readability
4. **Focus on the content**: Each tag content should focus on a single task to avoid a mixture of functions
5. **Meaningful attributes**: Use only necessary attributes to avoid excessive configuration
6. **Consistency**: Maintain a consistent DPML structure style throughout the project
7. **Clarity of the namespace**: When using namespaces, make sure that the left side indicates "what to do" (function) and the right side "how to do it" (implementation)
8. **Compliance with attribute rules**: Use only officially defined attributes and follow the type and value constraints specified in the attribute specification

## 📌 Summary

DPML provides a standardized and flexible way of expression for prompt engineering by combining the structured capabilities of a markup language and the expressiveness of Markdown. Its main advantages lie in the clear semantic structure, the mechanism for reusing protocols and human readability, which makes it particularly suitable for building complex, modular AI interaction prompt systems.
