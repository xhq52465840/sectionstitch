var z=class{constructor(e,t,r){this.line=void 0,this.column=void 0,r!==void 0&&(this.index=void 0),this.line=e,this.column=t,r!==void 0&&(this.index=r)}},ht=class{start;end;filename;identifierName;constructor(e,t){this.start=e,this.end=t}};function H(n,e){let{line:t,column:r,index:i}=n;return new z(t,r+e,i+e)}var Fe="BABEL_PARSER_SOURCETYPE_MODULE_REQUIRED",xr={ImportMetaOutsideModule:{message:`import.meta may appear only with 'sourceType: "module"'`,code:Fe},ImportOutsideModule:{message:`'import' and 'export' may appear only with 'sourceType: "module"'`,code:Fe}},Be={ArrayPattern:"array destructuring pattern",AssignmentExpression:"assignment expression",AssignmentPattern:"assignment expression",ArrowFunctionExpression:"arrow function expression",ConditionalExpression:"conditional expression",CatchClause:"catch clause",ForOfStatement:"for-of statement",ForInStatement:"for-in statement",ForStatement:"for-loop",FormalParameters:"function parameter list",Identifier:"identifier",ImportSpecifier:"import specifier",ImportDefaultSpecifier:"import default specifier",ImportNamespaceSpecifier:"import namespace specifier",ObjectPattern:"object destructuring pattern",ParenthesizedExpression:"parenthesized expression",RestElement:"rest element",UpdateExpression:{true:"prefix operation",false:"postfix operation"},VariableDeclarator:"variable declaration",YieldExpression:"yield expression"},At=n=>n.type==="UpdateExpression"?Be.UpdateExpression[`${n.prefix}`]:Be[n.type],br={AccessorIsGenerator:({kind:n})=>`A ${n}ter cannot be a generator.`,ArgumentsInClass:"'arguments' is only allowed in functions and class methods.",AsyncFunctionInSingleStatementContext:"Async functions can only be declared at the top level or inside a block.",AwaitBindingIdentifier:"Can not use 'await' as identifier inside an async function.",AwaitBindingIdentifierInStaticBlock:"Can not use 'await' as identifier inside a static block.",AwaitExpressionFormalParameter:"'await' is not allowed in async function parameters.",AwaitUsingNotInAsyncContext:"'await using' is only allowed within async functions and at the top levels of modules.",AwaitNotInAsyncContext:"'await' is only allowed within async functions and at the top levels of modules.",BadGetterArity:"A 'get' accessor must not have any formal parameters.",BadSetterArity:"A 'set' accessor must have exactly one formal parameter.",BadSetterRestParameter:"A 'set' accessor function argument must not be a rest parameter.",ConstructorClassField:"Classes may not have a field named 'constructor'.",ConstructorClassPrivateField:"Classes may not have a private field named '#constructor'.",ConstructorIsAccessor:"Class constructor may not be an accessor.",ConstructorIsAsync:"Constructor can't be an async function.",ConstructorIsGenerator:"Constructor can't be a generator.",DeclarationMissingInitializer:({kind:n})=>`Missing initializer in ${n} declaration.`,DecoratorArgumentsOutsideParentheses:"Decorator arguments must be moved inside parentheses: use '@(decorator(args))' instead of '@(decorator)(args)'.",DecoratorsBeforeAfterExport:"Decorators can be placed *either* before or after the 'export' keyword, but not in both locations at the same time.",DecoratorConstructor:"Decorators can't be used with a constructor. Did you mean '@dec class { ... }'?",DecoratorSemicolon:"Decorators must not be followed by a semicolon.",DecoratorStaticBlock:"Decorators can't be used with a static block.",DeferImportRequiresNamespace:'Only `import defer * as x from "./module"` is valid.',DeferExportInvalidAll:'`export defer * from "./module"` is invalid. Explicitly list the re-exported names.',DeletePrivateField:"Deleting a private field is not allowed.",DestructureNamedImport:"ES2015 named imports do not destructure. Use another statement for destructuring after the import.",DuplicateConstructor:"Duplicate constructor in the same class.",DuplicateDefaultExport:"Only one default export allowed per module.",DuplicateExport:({exportName:n})=>`\`${n}\` has already been exported. Exported identifiers must be unique.`,DuplicateProto:"Redefinition of __proto__ property.",DuplicateRegExpFlags:"Duplicate regular expression flag.",ElementAfterRest:"Rest element must be last element.",EscapedCharNotAnIdentifier:"Invalid Unicode escape.",ExportBindingIsString:({localName:n,exportName:e})=>`A string literal cannot be used as an exported binding without \`from\`.
- Did you mean \`export { '${n}' as '${e}' } from 'some-module'\`?`,ExportDefaultFromAsIdentifier:"'from' is not allowed as an identifier after 'export default'.",FilteredNamespaceDuplicateName:({name:n})=>`Duplicate name '${n}' in filtered namespace.`,FilteredNamespaceRename:"Names in a filtered namespace cannot be renamed using `as`.",FilteredNamespaceTypeModifier:"Names in a filtered namespace cannot have a type modifier.",ForInOfLoopInitializer:({type:n})=>`'${n==="ForInStatement"?"for-in":"for-of"}' loop variable declaration may not have an initializer.`,ForInUsing:"For-in loop may not start with 'using' declaration.",ForOfAsync:"The left-hand side of a for-of loop may not be 'async'.",ForOfLet:"The left-hand side of a for-of loop may not start with 'let'.",GeneratorInSingleStatementContext:"Generators can only be declared at the top level or inside a block.",IllegalBreakContinue:({type:n})=>`Unsyntactic ${n==="BreakStatement"?"break":"continue"}.`,IllegalLanguageModeDirective:"Illegal 'use strict' directive in function with non-simple parameter list.",IllegalReturn:"'return' outside of function.",ImportBindingIsString:({importName:n})=>`A string literal cannot be used as an imported binding.
- Did you mean \`import { "${n}" as foo }\`?`,ImportCallArity:({phase:n,sync:e})=>`\`import${n?`.${n}`:e?".sync":""}()\` requires exactly one or two arguments.`,ImportCallNotNewExpression:({phase:n,sync:e})=>`Cannot use new with import${n?`.${n}`:e?".sync":""}().`,ImportCallSpreadArgument:({phase:n,sync:e})=>`\`...\` is not allowed in \`import${n?`.${n}`:e?".sync":""}()\`.`,IncompatibleRegExpUVFlags:"The 'u' and 'v' regular expression flags cannot be enabled at the same time.",InvalidBigIntLiteral:"Invalid BigIntLiteral.",InvalidCodePoint:"Code point out of bounds.",InvalidCoverDiscardElement:"'void' must be followed by an expression when not used in a binding position.",InvalidCoverInitializedName:"Invalid shorthand property initializer.",InvalidDigit:({radix:n})=>`Expected number in radix ${n}.`,InvalidEscapeSequence:"Bad character escape sequence.",InvalidEscapeSequenceTemplate:"Invalid escape sequence in template.",InvalidEscapedReservedWord:({reservedWord:n})=>`Escape sequence in keyword ${n}.`,InvalidIdentifier:({identifierName:n})=>`Invalid identifier ${n}.`,InvalidLhs:({ancestor:n})=>`Invalid left-hand side in ${At(n)}.`,InvalidLhsBinding:({ancestor:n})=>`Binding invalid left-hand side in ${At(n)}.`,InvalidLhsOptionalChaining:({ancestor:n})=>`Invalid optional chaining in the left-hand side of ${At(n)}.`,InvalidOrMissingExponent:"Floating-point numbers require a valid exponent after the 'e'.",InvalidOrUnexpectedToken:({unexpected:n})=>`Unexpected character '${n}'.`,InvalidParenthesizedAssignment:"Invalid parenthesized assignment pattern.",InvalidPrivateFieldResolution:({identifierName:n})=>`Private name #${n} is not defined.`,InvalidPropertyBindingPattern:"Binding member expression.",InvalidRestAssignmentPattern:"Invalid rest operator's argument.",LabelRedeclaration:({labelName:n})=>`Label '${n}' is already declared.`,LetInLexicalBinding:"'let' is disallowed as a lexically bound name.",LineTerminatorBeforeArrow:"No line break is allowed before '=>'.",MalformedRegExpFlags:"Invalid regular expression flag.",MissingClassName:"A class name is required.",MissingEqInAssignment:"Only '=' operator can be used for specifying default value.",MissingSemicolon:"Missing semicolon.",MissingPlugin:({missingPlugin:n})=>`This experimental syntax requires enabling the parser plugin: ${n.map(e=>JSON.stringify(e)).join(", ")}.`,MissingOneOfPlugins:({missingPlugin:n})=>`This experimental syntax requires enabling one of the following parser plugin(s): ${n.map(e=>JSON.stringify(e)).join(", ")}.`,MissingUnicodeEscape:"Expecting Unicode escape sequence \\uXXXX.",MixingCoalesceWithLogical:"Nullish coalescing operator(??) requires parens when mixing with logical operators.",ModuleAttributeInvalidValue:"Only string literals are allowed as module attribute values.",ModuleAttributesWithDuplicateKeys:({key:n})=>`Duplicate key "${n}" is not allowed in module attributes.`,ModuleExportNameHasLoneSurrogate:({surrogateCharCode:n})=>`An export name cannot include a lone surrogate, found '\\u${n.toString(16)}'.`,ModuleExportUndefined:({localName:n})=>`Export '${n}' is not defined.`,MultipleDefaultsInSwitch:"Multiple default clauses.",NewlineAfterThrow:"Illegal newline after throw.",NoCatchOrFinally:"Missing catch or finally clause.",NumberIdentifier:"Identifier directly after number.",NumericSeparatorInEscapeSequence:"Numeric separators are not allowed inside unicode escape sequences or hex escape sequences.",ObsoleteAwaitStar:"'await*' has been removed from the async functions proposal. Use Promise.all() instead.",OptionalChainingNoNew:"Constructors in/after an Optional Chain are not allowed.",OptionalChainingNoTemplate:"Tagged Template Literals are not allowed in optionalChain.",OverrideOnConstructor:"'override' modifier cannot appear on a constructor declaration.",ParamDupe:"Argument name clash.",PatternHasAccessor:"Object pattern can't contain getter or setter.",PatternHasMethod:"Object pattern can't contain methods.",PrivateInExpectedIn:({identifierName:n})=>`Private names are only allowed in property accesses (\`obj.#${n}\`) or in \`in\` expressions (\`#${n} in obj\`).`,PrivateNameRedeclaration:({identifierName:n})=>`Duplicate private name #${n}.`,RestTrailingComma:"Unexpected trailing comma after rest element.",SloppyFunction:"In non-strict mode code, functions can only be declared at top level or inside a block.",SloppyFunctionAnnexB:"In non-strict mode code, functions can only be declared at top level, inside a block, or as the body of an if statement.",SourcePhaseImportRequiresDefault:'Only `import source x from "./module"` is valid.',StaticPrototype:"Classes may not have static property named prototype.",SuperCallNotNewExpression:"Cannot use new with super(...).",SuperNotAllowed:"`super()` is only valid inside a class constructor of a subclass. Maybe a typo in the method name ('constructor') or not extending another class?",SuperPrivateField:"Private fields can't be accessed on super.",TrailingDecorator:"Decorators must be attached to a class element.",UnexpectedArgumentPlaceholder:"Unexpected argument placeholder.",UnexpectedDigitAfterHash:"Unexpected digit after hash token.",UnexpectedImportExport:"'import' and 'export' may only appear at the top level.",UnexpectedKeyword:({keyword:n})=>`Unexpected keyword '${n}'.`,UnexpectedLeadingDecorator:"Leading decorators must be attached to a class declaration.",UnexpectedLexicalDeclaration:"Lexical declaration cannot appear in a single-statement context.",UnexpectedNewTarget:"`new.target` can only be used in functions or class properties.",UnexpectedNumericSeparator:"A numeric separator is only allowed between two digits.",UnexpectedPrivateField:"Unexpected private name.",UnexpectedReservedWord:({reservedWord:n})=>`Unexpected reserved word '${n}'.`,UnexpectedSuper:"'super' is only allowed in object methods and classes.",UnexpectedToken:({expected:n,unexpected:e})=>`Unexpected token${e?` '${e}'.`:""}${n?`, expected "${n}"`:""}`,UnexpectedTokenUnaryExponentiation:"Illegal expression. Wrap left hand side or entire exponentiation in parentheses.",UnexpectedUsingDeclaration:"Using declaration cannot appear in the top level when source type is `script` or in the bare case statement.",UnexpectedVoidPattern:"Unexpected void binding.",UnsupportedDecoratorExport:"A decorated export must export a class declaration.",UnsupportedDefaultExport:"Only expressions, functions or classes are allowed as the `default` export.",UnsupportedImport:"`import` can only be used in `import()` or `import.meta`.",UnsupportedMetaProperty:({target:n,onlyValidPropertyName:e})=>`The only valid meta property for ${n} is ${n}.${e}.`,UnsupportedParameterDecorator:"Decorators cannot be used to decorate parameters.",UnsupportedPropertyDecorator:"Decorators cannot be used to decorate object literal properties.",UnsupportedSuper:"'super' can only be used with function calls (i.e. super()) or in property accesses (i.e. super.prop or super[prop]).",UnterminatedComment:"Unterminated comment.",UnterminatedRegExp:"Unterminated regular expression.",UnterminatedString:"Unterminated string constant.",UnterminatedTemplate:"Unterminated template.",UsingDeclarationExport:"Using declaration cannot be exported.",UsingDeclarationHasBindingPattern:"Using declaration cannot have destructuring patterns.",VarRedeclaration:({identifierName:n})=>`Identifier '${n}' has already been declared.`,VoidPatternCatchClauseParam:"A void binding can not be the catch clause parameter. Use `try { ... } catch { ... }` if you want to discard the caught error.",VoidPatternInitializer:"A void binding may not have an initializer.",YieldBindingIdentifier:"Can not use 'yield' as identifier inside a generator.",YieldInParameter:"Yield expression is not allowed in formal parameters.",YieldNotInGeneratorFunction:"'yield' is only allowed within generator functions.",ZeroDigitNumericSeparator:"Numeric separator can not be used after leading 0."},ur={StrictDelete:"Deleting local variable in strict mode.",StrictEvalArguments:({referenceName:n})=>`Assigning to '${n}' in strict mode.`,StrictEvalArgumentsBinding:({bindingName:n})=>`Binding '${n}' in strict mode.`,StrictFunction:"In strict mode code, functions can only be declared at top level or inside a block.",StrictNumericEscape:"The only valid numeric escape in strict mode is '\\0'.",StrictOctalLiteral:"Legacy octal literals are not allowed in strict mode.",StrictWith:"'with' in strict mode."},wr={ParseExpressionEmptyInput:"Unexpected parseExpression() input: The input is empty or contains only comments.",ParseExpressionExpectsEOF:({unexpected:n})=>`Unexpected parseExpression() input: The input should contain exactly one expression, but the first expression is followed by the unexpected character \`${String.fromCodePoint(n)}\`.`},fr=new Set(["ArrowFunctionExpression","AssignmentExpression","ConditionalExpression","YieldExpression"]),yr={PipeTopicRequiresHackPipes:'Topic references are only supported when using the `"proposal": "hack"` version of the pipeline proposal.',PipeTopicUnbound:"Topic reference is unbound; it must be inside a pipe body.",PipeTopicUnconfiguredToken:({token:n})=>`Invalid topic token ${n}. In order to use ${n} as a topic reference, the pipelineOperator plugin must be configured with { "proposal": "hack", "topicToken": "${n}" }.`,PipeTopicUnused:"Hack-style pipe body does not contain a topic reference; Hack-style pipes must use topic at least once.",PipeUnparenthesizedBody:({type:n})=>`Hack-style pipe body cannot be an unparenthesized ${At({type:n})}; please wrap it in parentheses.`,PipelineUnparenthesized:"Cannot mix binary operator with solo-await F#-style pipeline. Please wrap the pipeline in parentheses."},Pr={UnsupportedBind:"Binding should be performed on object property.",UnsupportedBindRHS:"The right-hand side of binding can not be super or import."};function ze(n,e,t){Object.defineProperty(n,e,{enumerable:!1,configurable:!0,value:t})}function Sr({toMessage:n,code:e,reasonCode:t,syntaxPlugin:r}){let i=t==="MissingPlugin"||t==="MissingOneOfPlugins";return function a(s,o,_){let m=new SyntaxError;return m.code=e,m.reasonCode=t,m.loc=s,m.pos=o,m.syntaxPlugin=r,i&&(m.missingPlugin=_.missingPlugin),ze(m,"clone",function(c={}){let{line:g,column:d,index:x=o}=c.loc??s;return a(new z(g,d),x,{..._,...c.details})}),ze(m,"details",_),Object.defineProperty(m,"message",{configurable:!0,get(){let l=`${n(_)} (${s.line}:${s.column})`;return this.message=l,l},set(l){Object.defineProperty(this,"message",{value:l,writable:!0})}}),m}}function W(n,e){if(Array.isArray(n))return r=>W(r,n[0]);let t={};for(let r of Object.keys(n)){let i=n[r],{message:a,...s}=typeof i=="string"?{message:()=>i}:typeof i=="function"?{message:i}:i,o=typeof a=="string"?()=>a:a;t[r]=Sr({code:"BABEL_PARSER_SYNTAX_ERROR",reasonCode:r,toMessage:o,...e?{syntaxPlugin:e}:{},...s})}return t}var p={...W(xr),...W(br),...W(ur),...W(wr),...W`pipelineOperator`(yr),...W`functionBind`(Pr)};function Cr(){return{sourceType:"script",sourceFilename:void 0,startIndex:0,startColumn:0,startLine:1,allowAwaitOutsideFunction:!1,allowReturnOutsideFunction:!1,allowNewTargetOutsideFunction:!1,allowImportExportEverywhere:!1,allowSuperOutsideMethod:!1,allowUndeclaredExports:!1,allowYieldOutsideFunction:!1,plugins:[],strictMode:void 0,ranges:!1,locations:!0,tokens:!1,createImportExpressions:!0,createParenthesizedExpressions:!1,errorRecovery:!1,attachComment:!0,annexB:!0}}function Er(n){let e=Cr();if(n==null)return e;if(n.annexB!=null&&n.annexB!==!1)throw new Error("The `annexB` option can only be set to `false`.");for(let t of Object.keys(e))n[t]!=null&&(e[t]=n[t]);if(e.startLine===1)n.startIndex==null&&e.startColumn>0?e.startIndex=e.startColumn:n.startColumn==null&&e.startIndex>0&&(e.startColumn=e.startIndex);else if(n.startColumn==null||n.startIndex==null)throw new Error("With a `startLine > 1` you must also specify `startIndex` and `startColumn`.");if(e.sourceType==="commonjs"){if(n.allowAwaitOutsideFunction!=null)throw new Error("The `allowAwaitOutsideFunction` option cannot be used with `sourceType: 'commonjs'`.");if(n.allowReturnOutsideFunction!=null)throw new Error("`sourceType: 'commonjs'` implies `allowReturnOutsideFunction: true`, please remove the `allowReturnOutsideFunction` option or use `sourceType: 'script'`.");if(n.allowNewTargetOutsideFunction!=null)throw new Error("`sourceType: 'commonjs'` implies `allowNewTargetOutsideFunction: true`, please remove the `allowNewTargetOutsideFunction` option or use `sourceType: 'script'`.")}return e}function pt(n){if(n.loc){let{start:e,end:t}=n.loc;n.loc.start=new z(e.line,e.column),n.loc.end=new z(t.line,t.column)}return n}var Or=n=>class extends n{createPosition(t){return new z(t.line,t.column)}parse(){let t=super.parse();return this.optionFlags&512&&(t.tokens=t.tokens.map(pt)),pt(t)}parseRegExpLiteral({pattern:t,flags:r}){let i=null;try{i=new RegExp(t,r)}catch{}let a=this.estreeParseLiteral(i);return a.regex={pattern:t,flags:r},a}parseBigIntLiteral(t){let r;try{r=BigInt(t)}catch{r=null}let i=this.estreeParseLiteral(r);return i.bigint=i.value!==null?String(i.value):t,i}estreeParseLiteral(t){return this.parseLiteral(t,"Literal")}parseStringLiteral(t){return this.estreeParseLiteral(t)}parseNumericLiteral(t){return this.estreeParseLiteral(t)}parseNullLiteral(){return this.estreeParseLiteral(null)}parseBooleanLiteral(t){return this.estreeParseLiteral(t)}estreeParseChainExpression(t,r){let i=this.startNodeAtNode(t);return i.expression=t,this.finishNodeAtNode(i,"ChainExpression",r)}directiveToStmt(t){let r=t.value;delete t.value,this.castNodeTo(r,"Literal"),r.raw=r.extra.raw,r.value=r.extra.expressionValue;let i=this.castNodeTo(t,"ExpressionStatement");return i.expression=r,i.directive=r.extra.rawValue,delete r.extra,i}fillOptionalPropertiesForTSESLint(t){}cloneEstreeStringLiteral(t){let{start:r,end:i,loc:a,range:s,raw:o,value:_}=t,m=Object.create(t.constructor.prototype);return m.type="Literal",m.start=r,m.end=i,m.loc=a,m.range=s,m.raw=o,m.value=_,m}initFunction(t,r){super.initFunction(t,r),t.expression=!1}checkDeclaration(t){t!=null&&this.isObjectProperty(t)?this.checkDeclaration(t.value):super.checkDeclaration(t)}getObjectOrClassMethodParams(t){return t.value.params}isValidDirective(t){return t.type==="ExpressionStatement"&&t.expression.type==="Literal"&&typeof t.expression.value=="string"&&!t.expression.extra?.parenthesized}parseBlockBody(t,r,i,a,s){super.parseBlockBody(t,r,i,a,s);let o=t.directives.map(_=>this.directiveToStmt(_));t.body=o.concat(t.body),delete t.directives}parsePrivateName(){let t=super.parsePrivateName();return this.convertPrivateNameToPrivateIdentifier(t)}convertPrivateNameToPrivateIdentifier(t){let r=super.getPrivateNameSV(t);return delete t.id,t.name=r,this.castNodeTo(t,"PrivateIdentifier")}isPrivateName(t){return t.type==="PrivateIdentifier"}getPrivateNameSV(t){return t.name}parseLiteral(t,r){let i=super.parseLiteral(t,r);return i.raw=i.extra.raw,delete i.extra,i}parseFunctionBody(t,r,i=!1){super.parseFunctionBody(t,r,i),t.expression=t.body.type!=="BlockStatement"}parseMethod(t,r,i,a,s,o,_=!1){let m=this.startNode();m.kind=t.kind,m=super.parseMethod(m,r,i,a,s,o,_),delete m.kind;let{typeParameters:l}=t;l&&(delete t.typeParameters,m.typeParameters=l,this.resetStartLocationFromNode(m,l));let c=this.castNodeTo(m,this.hasPlugin("typescript")&&!m.body?"TSEmptyBodyFunctionExpression":"FunctionExpression");return t.value=c,o==="ClassPrivateMethod"&&(t.computed=!1),this.hasPlugin("typescript")&&t.abstract?(delete t.abstract,this.finishNode(t,"TSAbstractMethodDefinition")):o==="ObjectMethod"?(t.kind==="method"&&(t.kind="init"),t.shorthand=!1,this.finishNode(t,"Property")):this.finishNode(t,"MethodDefinition")}nameIsConstructor(t){return t.type==="Literal"?t.value==="constructor":super.nameIsConstructor(t)}parseClassProperty(...t){let r=super.parseClassProperty(...t);return r.abstract&&this.hasPlugin("typescript")?(delete r.abstract,this.castNodeTo(r,"TSAbstractPropertyDefinition")):this.castNodeTo(r,"PropertyDefinition"),r}parseClassPrivateProperty(...t){let r=super.parseClassPrivateProperty(...t);return r.abstract&&this.hasPlugin("typescript")?this.castNodeTo(r,"TSAbstractPropertyDefinition"):this.castNodeTo(r,"PropertyDefinition"),r.computed=!1,r}parseClassAccessorProperty(t){let r=super.parseClassAccessorProperty(t);return r.abstract&&this.hasPlugin("typescript")?(delete r.abstract,this.castNodeTo(r,"TSAbstractAccessorProperty")):this.castNodeTo(r,"AccessorProperty"),r}parseObjectProperty(t,r,i,a){let s=super.parseObjectProperty(t,r,i,a);return s&&(s.kind="init",this.castNodeTo(s,"Property")),s}finishObjectProperty(t){return t.kind="init",this.finishNode(t,"Property")}isValidLVal(t,r,i,a){return t==="Property"?"value":super.isValidLVal(t,r,i,a)}isAssignable(t,r){return t!=null&&this.isObjectProperty(t)?this.isAssignable(t.value,r):super.isAssignable(t,r)}toAssignable(t,r=!1){if(t!=null&&this.isObjectProperty(t)){let{key:i,value:a}=t;this.isPrivateName(i)&&this.classScope.usePrivateName(this.getPrivateNameSV(i),i.start),this.toAssignable(a,r)}else super.toAssignable(t,r)}toAssignableObjectExpressionProp(t,r,i){t.type==="Property"&&(t.kind==="get"||t.kind==="set")?this.raise(p.PatternHasAccessor,t.key):t.type==="Property"&&t.method?this.raise(p.PatternHasMethod,t.key):super.toAssignableObjectExpressionProp(t,r,i)}finishCallExpression(t,r){let i=super.finishCallExpression(t,r);return i.callee.type==="Import"?(this.castNodeTo(i,"ImportExpression"),i.source=i.arguments[0],i.options=i.arguments[1]??null,delete i.arguments,delete i.callee):i.type==="OptionalCallExpression"?this.castNodeTo(i,"CallExpression"):i.optional=!1,i}parseExport(t,r){let i=this.state.lastTokStartLoc,a=super.parseExport(t,r);switch(a.type){case"ExportAllDeclaration":a.exported=null;break;case"ExportNamedDeclaration":a.specifiers.length===1&&a.specifiers[0].type==="ExportNamespaceSpecifier"&&!a.specifiers[0].exportsFilter&&(this.castNodeTo(a,"ExportAllDeclaration"),a.exported=a.specifiers[0].exported,delete a.specifiers);case"ExportDefaultDeclaration":{let{declaration:s}=a;s?.type==="ClassDeclaration"&&s.decorators?.length>0&&s.start===a.start&&this.resetStartLocation(a,i)}break}return a}stopParseSubscript(t,r){let i=super.stopParseSubscript(t,r);return r.optionalChainMember?this.estreeParseChainExpression(i,t):i}parseMember(t,r,i,a,s){let o=super.parseMember(t,r,i,a,s);return o.type==="OptionalMemberExpression"?this.castNodeTo(o,"MemberExpression"):o.optional=!1,o}isOptionalMemberExpression(t){return t.type==="ChainExpression"?t.expression.type==="MemberExpression":super.isOptionalMemberExpression(t)}hasPropertyAsPrivateName(t){return t.type==="ChainExpression"&&(t=t.expression),super.hasPropertyAsPrivateName(t)}isObjectProperty(t){return t.type==="Property"&&t.kind==="init"&&!t.method}isObjectMethod(t){return t.type==="Property"&&(t.method||t.kind==="get"||t.kind==="set")}castNodeTo(t,r){let i=super.castNodeTo(t,r);return this.fillOptionalPropertiesForTSESLint(i),i}cloneIdentifier(t){let r=super.cloneIdentifier(t);return this.fillOptionalPropertiesForTSESLint(r),r}cloneStringLiteral(t){return t.type==="Literal"?this.cloneEstreeStringLiteral(t):super.cloneStringLiteral(t)}finishNodeAt(t,r,i){return pt(super.finishNodeAt(t,r,i))}finishNodeAtNode(t,r,i){return pt(super.finishNodeAtNode(t,r,i))}finishNode(t,r){let i=super.finishNode(t,r);return this.fillOptionalPropertiesForTSESLint(i),i}resetStartLocation(t,r){super.resetStartLocation(t,r),pt(t)}resetEndLocation(t,r=this.state.lastTokEndLoc){super.resetEndLocation(t,r),pt(t)}},O=!0,b=!0,qt=!0,bt=!0,et=!0,vr=!0,Lt=class{label;keyword;beforeExpr;startsExpr;rightAssociative;isLoop;isAssign;prefix;postfix;binop;constructor(e,t={}){this.label=e,this.keyword=t.keyword,this.beforeExpr=!!t.beforeExpr,this.startsExpr=!!t.startsExpr,this.rightAssociative=!!t.rightAssociative,this.isLoop=!!t.isLoop,this.isAssign=!!t.isAssign,this.prefix=!!t.prefix,this.postfix=!!t.postfix,this.binop=t.binop!=null?t.binop:null}},ye=new Map;function k(n,e={}){e.keyword=n;let t=y(n,e);return ye.set(n,t),t}function U(n,e){return y(n,{beforeExpr:O,binop:e})}var ft=-1,Pe=[],Se=[],Ce=[],Ee=[],Oe=[],ve=[];function y(n,e={}){return++ft,Se.push(n),Ce.push(e.binop??-1),Ee.push(e.beforeExpr??!1),Oe.push(e.startsExpr??!1),ve.push(e.prefix??!1),Pe.push(new Lt(n,e)),ft}function S(n,e={}){return++ft,ye.set(n,ft),Se.push(n),Ce.push(e.binop??-1),Ee.push(e.beforeExpr??!1),Oe.push(e.startsExpr??!1),ve.push(e.prefix??!1),Pe.push(new Lt("name",e)),ft}var kr={bracketL:y("[",{beforeExpr:O,startsExpr:b}),bracketR:y("]"),braceL:y("{",{beforeExpr:O,startsExpr:b}),braceBarL:y("{|",{beforeExpr:O,startsExpr:b}),braceR:y("}"),braceBarR:y("|}"),parenL:y("(",{beforeExpr:O,startsExpr:b}),parenR:y(")"),comma:y(",",{beforeExpr:O}),semi:y(";",{beforeExpr:O}),colon:y(":",{beforeExpr:O}),doubleColon:y("::",{beforeExpr:O}),dot:y("."),question:y("?",{beforeExpr:O}),questionDot:y("?."),arrow:y("=>",{beforeExpr:O}),template:y("template"),ellipsis:y("...",{beforeExpr:O}),backQuote:y("`",{startsExpr:b}),dollarBraceL:y("${",{beforeExpr:O,startsExpr:b}),templateTail:y("...`",{startsExpr:b}),templateNonTail:y("...${",{beforeExpr:O,startsExpr:b}),at:y("@"),hash:y("#",{startsExpr:b}),interpreterDirective:y("#!..."),eq:y("=",{beforeExpr:O,isAssign:bt}),assign:y("_=",{beforeExpr:O,isAssign:bt}),slashAssign:y("_=",{beforeExpr:O,isAssign:bt}),xorAssign:y("_=",{beforeExpr:O,isAssign:bt}),moduloAssign:y("_=",{beforeExpr:O,isAssign:bt}),incDec:y("++/--",{prefix:et,postfix:vr,startsExpr:b}),bang:y("!",{beforeExpr:O,prefix:et,startsExpr:b}),tilde:y("~",{beforeExpr:O,prefix:et,startsExpr:b}),doubleCaret:y("^^",{startsExpr:b}),doubleAt:y("@@",{startsExpr:b}),pipeline:U("|>",0),nullishCoalescing:U("??",1),logicalOR:U("||",1),logicalAND:U("&&",2),bitwiseOR:U("|",3),bitwiseXOR:U("^",4),bitwiseAND:U("&",5),equality:U("==/!=/===/!==",6),lt:U("</>/<=/>=",7),gt:U("</>/<=/>=",7),relational:U("</>/<=/>=",7),bitShift:U("<</>>/>>>",8),bitShiftL:U("<</>>/>>>",8),bitShiftR:U("<</>>/>>>",8),plusMin:y("+/-",{beforeExpr:O,binop:9,prefix:et,startsExpr:b}),modulo:y("%",{binop:10,startsExpr:b}),star:y("*",{binop:10}),slash:U("/",10),exponent:y("**",{beforeExpr:O,binop:11,rightAssociative:!0}),_in:k("in",{beforeExpr:O,binop:7}),_instanceof:k("instanceof",{beforeExpr:O,binop:7}),_break:k("break"),_case:k("case",{beforeExpr:O}),_catch:k("catch"),_continue:k("continue"),_debugger:k("debugger"),_default:k("default",{beforeExpr:O}),_else:k("else",{beforeExpr:O}),_finally:k("finally"),_function:k("function",{startsExpr:b}),_if:k("if"),_return:k("return",{beforeExpr:O}),_switch:k("switch"),_throw:k("throw",{beforeExpr:O,prefix:et,startsExpr:b}),_try:k("try"),_var:k("var"),_const:k("const"),_with:k("with"),_new:k("new",{beforeExpr:O,startsExpr:b}),_this:k("this",{startsExpr:b}),_super:k("super",{startsExpr:b}),_class:k("class",{startsExpr:b}),_extends:k("extends",{beforeExpr:O}),_export:k("export"),_import:k("import",{startsExpr:b}),_null:k("null",{startsExpr:b}),_true:k("true",{startsExpr:b}),_false:k("false",{startsExpr:b}),_typeof:k("typeof",{beforeExpr:O,prefix:et,startsExpr:b}),_void:k("void",{beforeExpr:O,prefix:et,startsExpr:b}),_delete:k("delete",{beforeExpr:O,prefix:et,startsExpr:b}),_do:k("do",{isLoop:qt,beforeExpr:O}),_for:k("for",{isLoop:qt}),_while:k("while",{isLoop:qt}),_arguments:S("arguments",{startsExpr:b}),_as:S("as",{startsExpr:b}),_assert:S("assert",{startsExpr:b}),_async:S("async",{startsExpr:b}),_await:S("await",{startsExpr:b}),_defer:S("defer",{startsExpr:b}),_from:S("from",{startsExpr:b}),_get:S("get",{startsExpr:b}),_let:S("let",{startsExpr:b}),_meta:S("meta",{startsExpr:b}),_of:S("of",{startsExpr:b}),_sent:S("sent",{startsExpr:b}),_set:S("set",{startsExpr:b}),_source:S("source",{startsExpr:b}),_static:S("static",{startsExpr:b}),_struct:S("struct",{startsExpr:b}),_sync:S("sync",{startsExpr:b}),_using:S("using",{startsExpr:b}),_yield:S("yield",{startsExpr:b}),_asserts:S("asserts",{startsExpr:b}),_checks:S("checks",{startsExpr:b}),_exports:S("exports",{startsExpr:b}),_global:S("global",{startsExpr:b}),_implements:S("implements",{startsExpr:b}),_intrinsic:S("intrinsic",{startsExpr:b}),_infer:S("infer",{startsExpr:b}),_is:S("is",{startsExpr:b}),_mixins:S("mixins",{startsExpr:b}),_proto:S("proto",{startsExpr:b}),_require:S("require",{startsExpr:b}),_satisfies:S("satisfies",{startsExpr:b}),_keyof:S("keyof",{startsExpr:b}),_readonly:S("readonly",{startsExpr:b}),_unique:S("unique",{startsExpr:b}),_abstract:S("abstract",{startsExpr:b}),_declare:S("declare",{startsExpr:b}),_enum:S("enum",{startsExpr:b}),_module:S("module",{startsExpr:b}),_namespace:S("namespace",{startsExpr:b}),_interface:S("interface",{startsExpr:b}),_type:S("type",{startsExpr:b}),_opaque:S("opaque",{startsExpr:b}),name:y("name",{startsExpr:b}),placeholder:y("%%",{startsExpr:b}),string:y("string",{startsExpr:b}),num:y("num",{startsExpr:b}),bigint:y("bigint",{startsExpr:b}),regexp:y("regexp",{startsExpr:b}),privateName:y("#name",{startsExpr:b}),eof:y("eof"),jsxName:y("jsxName"),jsxText:y("jsxText",{beforeExpr:O}),jsxTagStart:y("jsxTagStart",{startsExpr:b}),jsxTagEnd:y("jsxTagEnd")};function A(n){return n>=89&&n<=132}function Tr(n){return n<=88}function q(n){return n>=54&&n<=132}function Ye(n){return n>=54&&n<=135}function Ar(n){return Ee[n]}function wt(n){return Oe[n]}function Ir(n){return n>=25&&n<=29}function Re(n){return n>=128&&n<=130}function Nr(n){return n>=86&&n<=88}function Bt(n){return n>=54&&n<=88}function Lr(n){return n>=35&&n<=55}function Dr(n){return n===30}function Mr(n){return ve[n]}function Fr(n){return n>=120&&n<=122}function Br(n){return n>=123&&n<=129}function it(n){return Se[n]}function It(n){return Ce[n]}function zr(n){return n===53}function Yt(n){return n>=20&&n<=21}function Qe(n){return Pe[n]}var lt=class{constructor(e,t){this.token=e,this.preserveSpace=!!t}token;preserveSpace},L={brace:new lt("{"),j_oTag:new lt("<tag"),j_cTag:new lt("</tag"),j_expr:new lt("<tag>...</tag>",!0)},Ue=/[\p{ID_Start}\u0558\u058b\u058c\u088f\u0c5c\u0cdc\u208f\u209d-\u209f\ua7ce\ua7cf\ua7d2\ua7d4\ua7dd\ua7e2\ua7f1\uab6c\uab6d]/u,je=/[\p{ID_Continue}\u0558\u058b\u058c\u088f\u0c5c\u0cdc\u208f\u209d-\u209f\ua7ce\ua7cf\ua7d2\ua7d4\ua7dd\ua7e2\ua7f1\uab6c\uab6d\u05c8\u05c9\u0b53\u0b54\u1acf-\u1af0]/u,Ze=[1979,4,385,25,1388,2,18,21,3100,0,678,43,22,0,1662,0,6,10,209,310,18458,24,3,24,287,4,6146,7,1239,4,47,23,96,114,14,913,15,50,8017,5,64,0,9534,0,2169,5,7,86,15,6,55,50,1729,30,2,2,2,1,2,6,3,4,10,1,53307,5,223,0,5764,11,21763,4297,39815,11327],Rr=[3787,4,33,11,3173,7,633,9,7,0,45879,1,296,2,9,1,3,0,33,1,5218,0,3,0,8,1,6,0];function Qt(n,e){let t=65536;for(let r=0,i=e.length;r<i;r+=2){if(t+=e[r],t>n)return!1;if(t+=e[r+1],t>=n)return!0}return!1}function J(n){return n<65?n===36:n<=90?!0:n<97?n===95:n<=122?!0:n<=65535?n>=170&&Ue.test(String.fromCharCode(n)):!isNaN(n)&&n<=1114111&&(Ue.test(String.fromCodePoint(n))||Qt(n,Ze))}function at(n){return n<48?n===36:n<58?!0:n<65?!1:n<=90?!0:n<97?n===95:n<=122?!0:n<=65535?n>=170&&je.test(String.fromCharCode(n)):!isNaN(n)&&n<=1114111&&(je.test(String.fromCodePoint(n))||Qt(n,Ze)||Qt(n,Rr))}var ke={keyword:["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete"],strict:["implements","interface","let","package","private","protected","public","static","yield"],strictBind:["eval","arguments"]},Ur=new Set(ke.keyword),jr=new Set(ke.strict),$r=new Set(ke.strictBind);function Te(n,e){return e&&n==="await"||n==="enum"}function tr(n,e){return Te(n,e)||jr.has(n)}function er(n){return $r.has(n)}function rr(n,e){return tr(n,e)||er(n)}function ir(n){return Ur.has(n)}function qr(n,e,t){return n===64&&e===64&&J(t)}var Vr=new Set(["break","case","catch","continue","debugger","default","do","else","finally","for","function","if","return","switch","throw","try","var","const","while","with","new","this","super","class","extends","export","import","null","true","false","in","instanceof","typeof","void","delete","implements","interface","let","package","private","protected","public","static","yield","eval","arguments","enum","await"]);function Hr(n){return Vr.has(n)}var yt=class{flags=0;names=new Map;firstLexicalName="";constructor(e){this.flags=e}},Pt=class{parser;scopeStack=[];inModule;undefinedExports=new Map;constructor(e,t){this.parser=e,this.inModule=t}get inTopLevel(){return(this.currentScope().flags&1)>0}get inFunction(){return(this.currentVarScopeFlags()&2)>0}get allowSuper(){return(this.currentThisScopeFlags()&16)>0}get allowDirectSuper(){return(this.currentThisScopeFlags()&32)>0}get allowNewTarget(){return(this.currentThisScopeFlags()&512)>0}get inClass(){return(this.currentThisScopeFlags()&64)>0}get inClassAndNotInNonArrowFunction(){let e=this.currentThisScopeFlags();return(e&64)>0&&(e&2)===0}get inStaticBlock(){for(let e=this.scopeStack.length-1;;e--){let{flags:t}=this.scopeStack[e];if(t&128)return!0;if(t&3779)return!1}}get inNonArrowFunction(){return(this.currentThisScopeFlags()&2)>0}get inBareCaseStatement(){return(this.currentScope().flags&256)>0}get treatFunctionsAsVar(){return this.treatFunctionsAsVarInScope(this.currentScope())}createScope(e){return new yt(e)}enter(e){this.scopeStack.push(this.createScope(e))}exit(){return this.scopeStack.pop().flags}treatFunctionsAsVarInScope(e){return!!(e.flags&130||!this.parser.inModule&&e.flags&1)}declareName(e,t,r){let i=this.currentScope();if(t&8||t&16){this.checkRedeclarationInScope(i,e,t,r);let a=i.names.get(e)||0;t&16?a=a|4:(i.firstLexicalName||(i.firstLexicalName=e),a=a|2),i.names.set(e,a),t&8&&this.maybeExportDefined(i,e)}else if(t&4)for(let a=this.scopeStack.length-1;a>=0&&(i=this.scopeStack[a],this.checkRedeclarationInScope(i,e,t,r),i.names.set(e,(i.names.get(e)||0)|1),this.maybeExportDefined(i,e),!(i.flags&3715));--a);this.parser.inModule&&i.flags&1&&this.undefinedExports.delete(e)}maybeExportDefined(e,t){this.parser.inModule&&e.flags&1&&this.undefinedExports.delete(t)}checkRedeclarationInScope(e,t,r,i){this.isRedeclaredInScope(e,t,r)&&this.parser.raise(p.VarRedeclaration,i,{identifierName:t})}isRedeclaredInScope(e,t,r){if(!(r&1))return!1;if(r&8)return e.names.has(t);let i=e.names.get(t)||0;return r&16?(i&2)>0||!this.treatFunctionsAsVarInScope(e)&&(i&1)>0:(i&2)>0&&!(e.flags&8&&e.firstLexicalName===t)||!this.treatFunctionsAsVarInScope(e)&&(i&4)>0}checkLocalExport(e){let{name:t}=e;this.scopeStack[0].names.has(t)||this.undefinedExports.set(t,e.start)}currentScope(){return this.scopeStack[this.scopeStack.length-1]}currentVarScopeFlags(){for(let e=this.scopeStack.length-1;;e--){let{flags:t}=this.scopeStack[e];if(t&3715)return t}}currentThisScopeFlags(){for(let e=this.scopeStack.length-1;;e--){let{flags:t}=this.scopeStack[e];if(t&3779&&!(t&4))return t}}},Zt=class extends yt{declareFunctions=new Set},te=class extends Pt{createScope(e){return new Zt(e)}declareName(e,t,r){let i=this.currentScope();if(t&2048){this.checkRedeclarationInScope(i,e,t,r),this.maybeExportDefined(i,e),i.declareFunctions.add(e);return}super.declareName(e,t,r)}isRedeclaredInScope(e,t,r){if(super.isRedeclaredInScope(e,t,r))return!0;if(r&2048&&!e.declareFunctions.has(t)){let i=e.names.get(t);return(i&4)>0||(i&2)>0}return!1}checkLocalExport(e){this.scopeStack[0].declareFunctions.has(e.name)||super.checkLocalExport(e)}},Kr=new Set(["_","any","bool","boolean","empty","extends","false","interface","mixed","null","number","static","string","true","typeof","void"]),Wr={AmbiguousConditionalArrow:"Ambiguous expression: wrap the arrow functions in parentheses to disambiguate.",AmbiguousDeclareModuleKind:"Found both `declare module.exports` and `declare export` in the same module. Modules can only have 1 since they are either an ES module or they are a CommonJS module.",AssignReservedType:({reservedType:n})=>`Cannot overwrite reserved type ${n}.`,DeclareClassElement:"The `declare` modifier can only appear on class fields.",DeclareClassFieldInitializer:"Initializers are not allowed in fields with the `declare` modifier.",DuplicateDeclareModuleExports:"Duplicate `declare module.exports` statement.",EnumBooleanMemberNotInitialized:({memberName:n,enumName:e})=>`Boolean enum members need to be initialized. Use either \`${n} = true,\` or \`${n} = false,\` in enum \`${e}\`.`,EnumDuplicateMemberName:({memberName:n,enumName:e})=>`Enum member names need to be unique, but the name \`${n}\` has already been used before in enum \`${e}\`.`,EnumInconsistentMemberValues:({enumName:n})=>`Enum \`${n}\` has inconsistent member initializers. Either use no initializers, or consistently use literals (either booleans, numbers, or strings) for all member initializers.`,EnumInvalidExplicitType:({invalidEnumType:n,enumName:e})=>`Enum type \`${n}\` is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${e}\`.`,EnumInvalidExplicitTypeUnknownSupplied:({enumName:n})=>`Supplied enum type is not valid. Use one of \`boolean\`, \`number\`, \`string\`, or \`symbol\` in enum \`${n}\`.`,EnumInvalidMemberInitializerPrimaryType:({enumName:n,memberName:e,explicitType:t})=>`Enum \`${n}\` has type \`${t}\`, so the initializer of \`${e}\` needs to be a ${t} literal.`,EnumInvalidMemberInitializerSymbolType:({enumName:n,memberName:e})=>`Symbol enum members cannot be initialized. Use \`${e},\` in enum \`${n}\`.`,EnumInvalidMemberInitializerUnknownType:({enumName:n,memberName:e})=>`The enum member initializer for \`${e}\` needs to be a literal (either a boolean, number, or string) in enum \`${n}\`.`,EnumInvalidMemberName:({enumName:n,memberName:e,suggestion:t})=>`Enum member names cannot start with lowercase 'a' through 'z'. Instead of using \`${e}\`, consider using \`${t}\`, in enum \`${n}\`.`,EnumNumberMemberNotInitialized:({enumName:n,memberName:e})=>`Number enum members need to be initialized, e.g. \`${e} = 1\` in enum \`${n}\`.`,EnumStringMemberInconsistentlyInitialized:({enumName:n})=>`String enum members need to consistently either all use initializers, or use no initializers, in enum \`${n}\`.`,GetterMayNotHaveThisParam:"A getter cannot have a `this` parameter.",ImportTypeShorthandOnlyInPureImport:"The `type` and `typeof` keywords on named imports can only be used on regular `import` statements. It cannot be used with `import type` or `import typeof` statements.",InexactInsideExact:"Explicit inexact syntax cannot appear inside an explicit exact object type.",InexactInsideNonObject:"Explicit inexact syntax cannot appear in class or interface definitions.",InexactVariance:"Explicit inexact syntax cannot have variance.",InvalidNonTypeImportInDeclareModule:"Imports within a `declare module` body must always be `import type` or `import typeof`.",MissingTypeParamDefault:"Type parameter declaration needs a default, since a preceding type parameter declaration has a default.",NestedDeclareModule:"`declare module` cannot be used inside another `declare module`.",NestedFlowComment:"Cannot have a flow comment inside another flow comment.",PatternIsOptional:{message:"A binding pattern parameter cannot be optional in an implementation signature."},SetterMayNotHaveThisParam:"A setter cannot have a `this` parameter.",SpreadVariance:"Spread properties cannot have variance.",ThisParamAnnotationRequired:"A type annotation is required for the `this` parameter.",ThisParamBannedInConstructor:"Constructors cannot have a `this` parameter; constructors don't bind `this` like other functions.",ThisParamMayNotBeOptional:"The `this` parameter cannot be optional.",ThisParamMustBeFirst:"The `this` parameter must be the first function parameter.",ThisParamNoDefault:"The `this` parameter may not have a default value.",TypeBeforeInitializer:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeCastInPattern:"The type cast expression is expected to be wrapped with parenthesis.",UnexpectedExplicitInexactInObject:"Explicit inexact syntax must appear at the end of an inexact object.",UnexpectedReservedType:({reservedType:n})=>`Unexpected reserved type ${n}.`,UnexpectedReservedUnderscore:"`_` is only allowed as a type argument to call or new.",UnexpectedSpaceBetweenModuloChecks:"Spaces between `%` and `checks` are not allowed here.",UnexpectedSpreadType:"Spread operator cannot appear in class or interface definitions.",UnexpectedSubtractionOperand:'Unexpected token, expected "number" or "bigint".',UnexpectedTokenAfterTypeParameter:"Expected an arrow function after this type parameter declaration.",UnexpectedTypeParameterBeforeAsyncArrowFunction:"Type parameters must come after the async keyword, e.g. instead of `<T> async () => {}`, use `async <T>() => {}`.",UnsupportedDeclareExportKind:({unsupportedExportKind:n,suggestion:e})=>`\`declare export ${n}\` is not supported. Use \`${e}\` instead.`,UnsupportedStatementInDeclareModule:"Only declares and type imports are allowed inside declare module.",UnterminatedFlowComment:"Unterminated flow-comment."},w=W`flow`(Wr);function Xr(n){return n.type==="DeclareExportAllDeclaration"||n.type==="DeclareExportDeclaration"&&(!n.declaration||n.declaration.type!=="TypeAlias"&&n.declaration.type!=="InterfaceDeclaration")}function Vt(n){return n.importKind==="type"||n.importKind==="typeof"}var Jr={const:"declare export var",let:"declare export var",type:"export type",interface:"export interface"};function Gr(n,e){let t=[],r=[];for(let i=0;i<n.length;i++)(e(n[i],i,n)?t:r).push(n[i]);return[t,r]}var Yr=/\*?\s*@((?:no)?flow)\b/,Qr=n=>class extends n{flowPragma=void 0;getScopeHandler(){return te}shouldParseTypes(){return this.getPluginOption("flow","all")||this.flowPragma==="flow"}finishToken(t,r){t!==133&&t!==9&&t!==24&&this.flowPragma===void 0&&(this.flowPragma=null),super.finishToken(t,r)}addComment(t){if(this.flowPragma===void 0){let r=Yr.exec(t.value);if(r)if(r[1]==="flow")this.flowPragma="flow";else if(r[1]==="noflow")this.flowPragma="noflow";else throw new Error("Unexpected flow pragma")}super.addComment(t)}flowParseTypeInitialiser(t){let r=this.state.inType;this.state.inType=!0,this.expect(t||10);let i=this.flowParseType();return this.state.inType=r,i}flowParsePredicate(){let t=this.startNode(),r=this.state.startLoc;return this.next(),this.expectContextual(109),this.state.lastTokStartLoc.index>r.index+1&&this.raise(w.UnexpectedSpaceBetweenModuloChecks,r),this.eat(6)?(t.value=super.parseExpression(),this.expect(7),this.finishNode(t,"DeclaredPredicate")):this.finishNode(t,"InferredPredicate")}flowParseTypeAndPredicateInitialiser(t){let r=this.state.inType;this.state.inType=!0,this.expect(10);let i=null,a=null;return t&&this.match(50)?(this.state.inType=r,a=this.flowParsePredicate()):(i=this.flowParseType(),this.state.inType=r,this.match(50)&&(a=this.flowParsePredicate())),[i,a]}flowParseDeclareClass(t){return this.next(),this.flowParseInterfaceish(t,!0),this.finishNode(t,"DeclareClass")}flowParseDeclareFunction(t){this.next();let r=t.id=this.parseIdentifier(),i=this.startNode(),a=this.startNode();this.match(43)?i.typeParameters=this.flowParseTypeParameterDeclaration():i.typeParameters=null,this.expect(6);let s=this.flowParseFunctionTypeParams();return i.params=s.params,i.rest=s.rest,i.this=s._this,this.expect(7),[i.returnType,t.predicate]=this.flowParseTypeAndPredicateInitialiser(!1),a.typeAnnotation=this.finishNode(i,"FunctionTypeAnnotation"),r.typeAnnotation=this.finishNode(a,"TypeAnnotation"),this.resetEndLocation(r),this.semicolon(),this.scope.declareName(t.id.name,2048,t.id.start),this.finishNode(t,"DeclareFunction")}flowParseDeclare(t,r){if(this.match(76))return this.flowParseDeclareClass(t);if(this.match(64))return this.flowParseDeclareFunction(t);if(this.match(70))return this.flowParseDeclareVariable(t);if(this.eatContextual(126))return this.match(12)?this.flowParseDeclareModuleExports(t):(r&&this.raise(w.NestedDeclareModule,this.state.lastTokStartLoc),this.flowParseDeclareModule(t));if(this.isContextual(129))return this.flowParseDeclareTypeAlias(t);if(this.isContextual(130))return this.flowParseDeclareOpaqueType(t);if(this.isContextual(128))return this.flowParseDeclareInterface(t);if(this.match(78))return this.flowParseDeclareExportDeclaration(t,r);throw this.unexpected()}flowParseDeclareVariable(t){return this.next(),t.id=this.flowParseTypeAnnotatableIdentifier(),this.scope.declareName(t.id.name,5,t.id.start),this.semicolon(),this.finishNode(t,"DeclareVariable")}flowParseDeclareModule(t){this.scope.enter(0),this.match(133)?t.id=super.parseExprAtom():t.id=this.parseIdentifier();let r=this.startNode(),i=r.body=[];for(this.expect(2);!this.match(4);){let o=this.startNode();this.match(79)?(this.next(),!this.isContextual(129)&&!this.match(83)&&this.raise(w.InvalidNonTypeImportInDeclareModule,this.state.lastTokStartLoc),i.push(super.parseImport(o))):(this.expectContextual(124,w.UnsupportedStatementInDeclareModule),i.push(this.flowParseDeclare(o,!0)))}this.scope.exit(),this.expect(4),t.body=this.finishNode(r,"BlockStatement");let a=null,s=!1;return i.forEach(o=>{Xr(o)?(a==="CommonJS"&&this.raise(w.AmbiguousDeclareModuleKind,o),a="ES"):o.type==="DeclareModuleExports"&&(s&&this.raise(w.DuplicateDeclareModuleExports,o),a==="ES"&&this.raise(w.AmbiguousDeclareModuleKind,o),a="CommonJS",s=!0)}),t.kind=a||"CommonJS",this.finishNode(t,"DeclareModule")}flowParseDeclareExportDeclaration(t,r){if(this.expect(78),this.eat(61))return this.match(64)||this.match(76)?t.declaration=this.flowParseDeclare(this.startNode()):(t.declaration=this.flowParseType(),this.semicolon()),t.default=!0,this.finishNode(t,"DeclareExportDeclaration");if(this.match(71)||this.isLet()||(this.isContextual(129)||this.isContextual(128))&&!r){let i=this.state.value;throw this.raise(w.UnsupportedDeclareExportKind,this.state.startLoc,{unsupportedExportKind:i,suggestion:Jr[i]})}if(this.match(70)||this.match(64)||this.match(76)||this.isContextual(130))return t.declaration=this.flowParseDeclare(this.startNode()),t.default=!1,this.finishNode(t,"DeclareExportDeclaration");if(this.match(51)||this.match(2)||this.isContextual(128)||this.isContextual(129)||this.isContextual(130)){let i=this.parseExport(t,null);return i.type==="ExportNamedDeclaration"?(i.default=!1,delete i.exportKind,this.castNodeTo(i,"DeclareExportDeclaration")):this.castNodeTo(i,"DeclareExportAllDeclaration")}throw this.unexpected()}flowParseDeclareModuleExports(t){return this.next(),this.expectContextual(110),t.typeAnnotation=this.flowParseTypeAnnotation(),this.semicolon(),this.finishNode(t,"DeclareModuleExports")}flowParseDeclareTypeAlias(t){this.next();let r=this.flowParseTypeAlias(t);return this.castNodeTo(r,"DeclareTypeAlias"),r}flowParseDeclareOpaqueType(t){return this.next(),this.flowParseOpaqueType(t,!0)}flowParseDeclareInterface(t){return this.next(),this.flowParseInterfaceish(t,!1),this.finishNode(t,"DeclareInterface")}flowParseInterfaceish(t,r){if(t.id=this.flowParseRestrictedIdentifier(!r,!0),this.scope.declareName(t.id.name,r?17:8201,t.id.start),this.match(43)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.extends=[],this.eat(77))do t.extends.push(this.flowParseInterfaceExtends());while(!r&&this.eat(8));if(r){let i=[],a=[];if(this.eatContextual(116))do a.push(this.flowParseInterfaceExtends());while(this.eat(8));if(this.eatContextual(112))do i.push(this.flowParseClassImplements());while(this.eat(8));t.implements=i,t.mixins=a}t.body=this.flowParseObjectType({allowStatic:r,allowExact:!1,allowSpread:!1,allowProto:r,allowInexact:!1})}flowParseInterfaceExtends(){let t=this.startNode();return t.id=this.flowParseQualifiedTypeIdentifier(),this.match(43)?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"InterfaceExtends")}flowParseInterface(t){return this.flowParseInterfaceish(t,!1),this.finishNode(t,"InterfaceDeclaration")}checkNotUnderscore(t){t==="_"&&this.raise(w.UnexpectedReservedUnderscore,this.state.startLoc)}checkReservedType(t,r,i){Kr.has(t)&&this.raise(i?w.AssignReservedType:w.UnexpectedReservedType,r,{reservedType:t})}flowParseRestrictedIdentifierName(t,r){return this.checkReservedType(this.state.value,this.state.startLoc,r),this.parseIdentifierName(t)}flowParseRestrictedIdentifier(t,r){let i=this.startNode(),a=this.flowParseRestrictedIdentifierName(t,r);return this.createIdentifier(i,a)}flowParseTypeAlias(t){return t.id=this.flowParseRestrictedIdentifier(!1,!0),this.scope.declareName(t.id.name,8201,t.id.start),this.match(43)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.right=this.flowParseTypeInitialiser(25),this.semicolon(),this.finishNode(t,"TypeAlias")}flowParseOpaqueType(t,r){return this.expectContextual(129),t.id=this.flowParseRestrictedIdentifier(!0,!0),this.scope.declareName(t.id.name,8201,t.id.start),this.match(43)?t.typeParameters=this.flowParseTypeParameterDeclaration():t.typeParameters=null,t.supertype=null,this.match(10)&&(t.supertype=this.flowParseTypeInitialiser(10)),t.impltype=null,r||(t.impltype=this.flowParseTypeInitialiser(25)),this.semicolon(),this.finishNode(t,r?"DeclareOpaqueType":"OpaqueType")}flowParseTypeParameterBound(){if(this.match(10)||this.isContextual(77)){let t=this.startNode();return this.next(),t.typeAnnotation=this.flowParseType(),this.finishNode(t,"TypeAnnotation")}}flowParseTypeParameter(t=!1){let r=this.state.startLoc,i=this.startNode(),a=this.flowParseVariance();return i.name=this.flowParseRestrictedIdentifierName(),i.variance=a,i.bound=this.flowParseTypeParameterBound(),this.match(25)?(this.eat(25),i.default=this.flowParseType()):t&&this.raise(w.MissingTypeParamDefault,r),this.finishNode(i,"TypeParameter")}flowParseTypeParameterDeclaration(){let t=this.state.inType,r=this.startNode();r.params=[],this.state.inType=!0,this.match(43)||this.match(141)?this.next():this.unexpected();let i=!1;do{let a=this.flowParseTypeParameter(i);r.params.push(a),a.default&&(i=!0),this.match(44)||this.expect(8)}while(!this.match(44));return this.expect(44),this.state.inType=t,this.finishNode(r,"TypeParameterDeclaration")}flowInTopLevelContext(t){if(this.curContext()!==L.brace){let r=this.state.context;this.state.context=[r[0]];try{return t()}finally{this.state.context=r}}else return t()}flowParseTypeParameterInstantiationInExpression(){if(this.reScan_lt()===43)return this.flowParseTypeParameterInstantiation()}flowParseTypeParameterInstantiation(){let t=this.startNode(),r=this.state.inType;return this.state.inType=!0,t.params=[],this.flowInTopLevelContext(()=>{this.expect(43);let i=this.state.noAnonFunctionType;for(this.state.noAnonFunctionType=!1;!this.match(44);)t.params.push(this.flowParseType()),this.match(44)||this.expect(8);this.state.noAnonFunctionType=i}),this.state.inType=r,!this.state.inType&&this.curContext()===L.brace&&this.reScan_lt_gt(),this.expect(44),this.finishNode(t,"TypeParameterInstantiation")}flowParseTypeParameterInstantiationCallOrNew(){if(this.reScan_lt()!==43)return null;let t=this.startNode(),r=this.state.inType;for(t.params=[],this.state.inType=!0,this.expect(43);!this.match(44);)t.params.push(this.flowParseTypeOrImplicitInstantiation()),this.match(44)||this.expect(8);return this.expect(44),this.state.inType=r,this.finishNode(t,"TypeParameterInstantiation")}flowParseInterfaceType(){let t=this.startNode();if(this.expectContextual(128),t.extends=[],this.eat(77))do t.extends.push(this.flowParseInterfaceExtends());while(this.eat(8));return t.body=this.flowParseObjectType({allowStatic:!1,allowExact:!1,allowSpread:!1,allowProto:!1,allowInexact:!1}),this.finishNode(t,"InterfaceTypeAnnotation")}flowParseObjectPropertyKey(){return this.match(134)||this.match(133)?super.parseExprAtom():this.parseIdentifier(!0)}flowParseObjectTypeIndexer(t,r,i){return t.static=r,this.lookahead().type===10?(t.id=this.parseIdentifier(!0),t.key=this.flowParseTypeInitialiser()):(t.id=null,t.key=this.flowParseType()),this.expect(1),t.value=this.flowParseTypeInitialiser(),t.variance=i,this.finishNode(t,"ObjectTypeIndexer")}flowParseObjectTypeInternalSlot(t,r){return t.static=r,t.id=this.parseIdentifier(!0),this.expect(1),this.expect(1),this.match(43)||this.match(6)?(t.method=!0,t.optional=!1,t.value=this.flowParseObjectTypeMethodish(this.startNodeAtNode(t))):(t.method=!1,this.eat(13)&&(t.optional=!0),t.value=this.flowParseTypeInitialiser()),this.finishNode(t,"ObjectTypeInternalSlot")}flowParseObjectTypeMethodish(t){for(t.params=[],t.rest=null,t.typeParameters=null,t.this=null,this.match(43)&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),this.expect(6),this.match(74)&&(t.this=this.flowParseFunctionTypeParam(!0),t.this.name=null,this.match(7)||this.expect(8));!this.match(7)&&!this.match(17);)t.params.push(this.flowParseFunctionTypeParam(!1)),this.match(7)||this.expect(8);return this.eat(17)&&(t.rest=this.flowParseFunctionTypeParam(!1)),this.expect(7),t.returnType=this.flowParseTypeInitialiser(),this.finishNode(t,"FunctionTypeAnnotation")}flowParseObjectTypeCallProperty(t,r){let i=this.startNode();return t.static=r,t.value=this.flowParseObjectTypeMethodish(i),this.finishNode(t,"ObjectTypeCallProperty")}flowParseObjectType({allowStatic:t,allowExact:r,allowSpread:i,allowProto:a,allowInexact:s}){let o=this.state.inType;this.state.inType=!0;let _=this.startNode();_.callProperties=[],_.properties=[],_.indexers=[],_.internalSlots=[];let m,l,c=!1;for(r&&this.match(3)?(this.expect(3),m=5,l=!0):(this.expect(2),m=4,l=!1),_.exact=l;!this.match(m);){let d=!1,x=null,f=null,u=this.startNode();if(a&&this.isContextual(117)){let C=this.lookahead();C.type!==10&&C.type!==13&&(this.next(),x=this.state.startLoc,t=!1)}if(t&&this.isContextual(103)){let C=this.lookahead();C.type!==10&&C.type!==13&&(this.next(),d=!0)}let P=this.flowParseVariance();if(this.eat(0))x!=null&&this.unexpected(x),this.eat(0)?(P&&this.unexpected(P.start),_.internalSlots.push(this.flowParseObjectTypeInternalSlot(u,d))):_.indexers.push(this.flowParseObjectTypeIndexer(u,d,P));else if(this.match(6)||this.match(43))x!=null&&this.unexpected(x),P&&this.unexpected(P.start),_.callProperties.push(this.flowParseObjectTypeCallProperty(u,d));else{let C="init";if(this.isContextual(96)||this.isContextual(101)){let E=this.lookahead();Ye(E.type)&&(C=this.state.value,this.next())}let V=this.flowParseObjectTypeProperty(u,d,x,P,C,i,s??!l);V===null?(c=!0,f=this.state.lastTokStartLoc):_.properties.push(V)}this.flowObjectTypeSemicolon(),f&&!this.match(4)&&!this.match(5)&&this.raise(w.UnexpectedExplicitInexactInObject,f)}this.expect(m),i&&(_.inexact=c);let g=this.finishNode(_,"ObjectTypeAnnotation");return this.state.inType=o,g}flowParseObjectTypeProperty(t,r,i,a,s,o,_){if(this.eat(17))return this.match(8)||this.match(9)||this.match(4)||this.match(5)?(o?_||this.raise(w.InexactInsideExact,this.state.lastTokStartLoc):this.raise(w.InexactInsideNonObject,this.state.lastTokStartLoc),a&&this.raise(w.InexactVariance,a),null):(o||this.raise(w.UnexpectedSpreadType,this.state.lastTokStartLoc),i!=null&&this.unexpected(i),a&&this.raise(w.SpreadVariance,a),t.argument=this.flowParseType(),this.finishNode(t,"ObjectTypeSpreadProperty"));{t.key=this.flowParseObjectPropertyKey(),t.static=r,t.proto=i!=null,t.kind=s;let m=!1;return this.match(43)||this.match(6)?(t.method=!0,i!=null&&this.unexpected(i),a&&this.unexpected(a.start),t.value=this.flowParseObjectTypeMethodish(this.startNodeAtNode(t)),s==="get"||s==="set"?this.flowCheckGetterSetterParams(t):!r&&!o&&t.key.name==="constructor"&&t.value.this&&this.raise(w.ThisParamBannedInConstructor,t.value.this)):(s!=="init"&&this.unexpected(),t.method=!1,this.eat(13)&&(m=!0),t.value=this.flowParseTypeInitialiser(),t.variance=a),t.optional=m,this.finishNode(t,"ObjectTypeProperty")}}flowCheckGetterSetterParams(t){let r=t.kind==="get"?0:1,i=t.value,a=i.params.length+(i.rest?1:0);i.this&&this.raise(t.kind==="get"?w.GetterMayNotHaveThisParam:w.SetterMayNotHaveThisParam,i.this),a!==r&&this.raise(t.kind==="get"?p.BadGetterArity:p.BadSetterArity,t),t.kind==="set"&&i.rest&&this.raise(p.BadSetterRestParameter,t)}flowObjectTypeSemicolon(){!this.eat(9)&&!this.eat(8)&&!this.match(4)&&!this.match(5)&&this.unexpected()}flowParseQualifiedTypeIdentifier(t,r){t??=this.state.startLoc;let i=r||this.flowParseRestrictedIdentifier(!0);for(;this.eat(12);){let a=this.startNodeAt(t);a.qualification=i,a.id=this.flowParseRestrictedIdentifier(!0),i=this.finishNode(a,"QualifiedTypeIdentifier")}return i}flowParseGenericType(t,r){let i=this.startNodeAt(t);return i.typeParameters=null,i.id=this.flowParseQualifiedTypeIdentifier(t,r),this.match(43)&&(i.typeParameters=this.flowParseTypeParameterInstantiation()),this.finishNode(i,"GenericTypeAnnotation")}flowParseTypeofType(){let t=this.startNode();return this.expect(83),t.argument=this.flowParsePrimaryType(),this.finishNode(t,"TypeofTypeAnnotation")}flowParseTupleType(){let t=this.startNode();for(t.types=[],this.expect(0);this.state.pos<this.length&&!this.match(1)&&(t.types.push(this.flowParseType()),!this.match(1));)this.expect(8);return this.expect(1),this.finishNode(t,"TupleTypeAnnotation")}flowParseFunctionTypeParam(t){let r=null,i=!1,a,s=this.startNode(),o=this.lookahead(),_=this.state.type===74;return o.type===10||o.type===13?(_&&!t&&this.raise(w.ThisParamMustBeFirst,s),r=this.parseIdentifier(_),this.eat(13)&&(i=!0,_&&this.raise(w.ThisParamMayNotBeOptional,s)),a=this.flowParseTypeInitialiser()):a=this.flowParseType(),s.name=r,s.optional=i,s.typeAnnotation=a,this.finishNode(s,"FunctionTypeParam")}reinterpretTypeAsFunctionTypeParam(t){let r=this.startNodeAtNode(t);return r.name=null,r.optional=!1,r.typeAnnotation=t,this.finishNode(r,"FunctionTypeParam")}flowParseFunctionTypeParams(t=[]){let r=null,i=null;for(this.match(74)&&(i=this.flowParseFunctionTypeParam(!0),i.name=null,this.match(7)||this.expect(8));!this.match(7)&&!this.match(17);)t.push(this.flowParseFunctionTypeParam(!1)),this.match(7)||this.expect(8);return this.eat(17)&&(r=this.flowParseFunctionTypeParam(!1)),{params:t,rest:r,_this:i}}flowIdentToTypeAnnotation(t,r,i){switch(i.name){case"any":return this.finishNode(r,"AnyTypeAnnotation");case"bool":case"boolean":return this.finishNode(r,"BooleanTypeAnnotation");case"mixed":return this.finishNode(r,"MixedTypeAnnotation");case"empty":return this.finishNode(r,"EmptyTypeAnnotation");case"number":return this.finishNode(r,"NumberTypeAnnotation");case"string":return this.finishNode(r,"StringTypeAnnotation");case"symbol":return this.finishNode(r,"SymbolTypeAnnotation");default:return this.checkNotUnderscore(i.name),this.flowParseGenericType(t,i)}}flowParsePrimaryType(){let t=this.state.startLoc,r=this.startNode(),i,a,s=!1,o=this.state.noAnonFunctionType;switch(this.state.type){case 2:return this.flowParseObjectType({allowStatic:!1,allowExact:!1,allowSpread:!0,allowProto:!1,allowInexact:!0});case 3:return this.flowParseObjectType({allowStatic:!1,allowExact:!0,allowSpread:!0,allowProto:!1,allowInexact:!1});case 0:return this.state.noAnonFunctionType=!1,a=this.flowParseTupleType(),this.state.noAnonFunctionType=o,a;case 43:{let _=this.startNode();return _.typeParameters=this.flowParseTypeParameterDeclaration(),this.expect(6),i=this.flowParseFunctionTypeParams(),_.params=i.params,_.rest=i.rest,_.this=i._this,this.expect(7),this.expect(15),_.returnType=this.flowParseType(),this.finishNode(_,"FunctionTypeAnnotation")}case 6:{let _=this.startNode();if(this.next(),!this.match(7)&&!this.match(17))if(A(this.state.type)||this.match(74)){let m=this.lookahead().type;s=m!==13&&m!==10}else s=!0;if(s){if(this.state.noAnonFunctionType=!1,a=this.flowParseType(),this.state.noAnonFunctionType=o,this.state.noAnonFunctionType||!(this.match(8)||this.match(7)&&this.lookahead().type===15))return this.expect(7),a;this.eat(8)}return a?i=this.flowParseFunctionTypeParams([this.reinterpretTypeAsFunctionTypeParam(a)]):i=this.flowParseFunctionTypeParams(),_.params=i.params,_.rest=i.rest,_.this=i._this,this.expect(7),this.expect(15),_.returnType=this.flowParseType(),_.typeParameters=null,this.finishNode(_,"FunctionTypeAnnotation")}case 133:return this.parseLiteral(this.state.value,"StringLiteralTypeAnnotation");case 81:case 82:return r.value=this.match(81),this.next(),this.finishNode(r,"BooleanLiteralTypeAnnotation");case 49:if(this.state.value==="-"){if(this.next(),this.match(134))return this.parseLiteralAtNode(-this.state.value,"NumberLiteralTypeAnnotation",r);if(this.match(135))return this.parseLiteralAtNode(-this.state.value,"BigIntLiteralTypeAnnotation",r);throw this.raise(w.UnexpectedSubtractionOperand,this.state.startLoc)}throw this.unexpected();case 134:return this.parseLiteral(this.state.value,"NumberLiteralTypeAnnotation");case 135:return this.parseLiteral(this.state.value,"BigIntLiteralTypeAnnotation");case 84:return this.next(),this.finishNode(r,"VoidTypeAnnotation");case 80:return this.next(),this.finishNode(r,"NullLiteralTypeAnnotation");case 74:return this.next(),this.finishNode(r,"ThisTypeAnnotation");case 51:return this.next(),this.finishNode(r,"ExistsTypeAnnotation");case 83:return this.flowParseTypeofType();default:if(Bt(this.state.type)){let _=it(this.state.type);return this.next(),super.createIdentifier(r,_)}else if(A(this.state.type))return this.isContextual(128)?this.flowParseInterfaceType():this.flowIdentToTypeAnnotation(t,r,this.parseIdentifier())}throw this.unexpected()}flowParsePostfixType(){let t=this.state.startLoc,r=this.flowParsePrimaryType(),i=!1;for(;(this.match(0)||this.match(14))&&!this.canInsertSemicolon();){let a=this.startNodeAt(t),s=this.eat(14);i=i||s,this.expect(0),!s&&this.match(1)?(a.elementType=r,this.next(),r=this.finishNode(a,"ArrayTypeAnnotation")):(a.objectType=r,a.indexType=this.flowParseType(),this.expect(1),i?(a.optional=s,r=this.finishNode(a,"OptionalIndexedAccessType")):r=this.finishNode(a,"IndexedAccessType"))}return r}flowParsePrefixType(){let t=this.startNode();return this.eat(13)?(t.typeAnnotation=this.flowParsePrefixType(),this.finishNode(t,"NullableTypeAnnotation")):this.flowParsePostfixType()}flowParseAnonFunctionWithoutParens(){let t=this.flowParsePrefixType();if(!this.state.noAnonFunctionType&&this.eat(15)){let r=this.startNodeAtNode(t);return r.params=[this.reinterpretTypeAsFunctionTypeParam(t)],r.rest=null,r.this=null,r.returnType=this.flowParseType(),r.typeParameters=null,this.finishNode(r,"FunctionTypeAnnotation")}return t}flowParseIntersectionType(){let t=this.startNode();this.eat(41);let r=this.flowParseAnonFunctionWithoutParens();for(t.types=[r];this.eat(41);)t.types.push(this.flowParseAnonFunctionWithoutParens());return t.types.length===1?r:this.finishNode(t,"IntersectionTypeAnnotation")}flowParseUnionType(){let t=this.startNode();this.eat(39);let r=this.flowParseIntersectionType();for(t.types=[r];this.eat(39);)t.types.push(this.flowParseIntersectionType());return t.types.length===1?r:this.finishNode(t,"UnionTypeAnnotation")}flowParseType(){let t=this.state.inType;this.state.inType=!0;let r=this.flowParseUnionType();return this.state.inType=t,r}flowParseTypeOrImplicitInstantiation(){if(this.state.type===131&&this.state.value==="_"){let t=this.state.startLoc,r=this.parseIdentifier();return this.flowParseGenericType(t,r)}else return this.flowParseType()}flowParseTypeAnnotation(){let t=this.startNode();return t.typeAnnotation=this.flowParseTypeInitialiser(),this.finishNode(t,"TypeAnnotation")}flowParseTypeAnnotatableIdentifier(){let t=this.startNode(),r=this.parseIdentifierName();return this.match(10)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),this.createIdentifier(t,r)}typeCastToParameter(t){return t.expression.typeAnnotation=t.typeAnnotation,this.resetEndLocationFromNode(t.expression,t.typeAnnotation),t.expression}flowParseVariance(){let t=null;return this.match(49)?(t=this.startNode(),this.state.value==="+"?t.kind="plus":t.kind="minus",this.next(),this.finishNode(t,"Variance")):t}parseFunctionBody(t,r,i=!1){if(r){this.forwardNoArrowParamsConversionAt(t,()=>super.parseFunctionBody(t,!0,i));return}super.parseFunctionBody(t,!1,i)}parseFunctionBodyAndFinish(t,r,i=!1){if(this.match(10)){let a=this.startNode();r==="FunctionDeclaration"||r==="FunctionExpression"||r==="ArrowFunctionExpression"?[a.typeAnnotation,t.predicate]=this.flowParseTypeAndPredicateInitialiser(!0):a.typeAnnotation=this.flowParseTypeInitialiser(),t.returnType=a.typeAnnotation?this.finishNode(a,"TypeAnnotation"):null}return super.parseFunctionBodyAndFinish(t,r,i)}parseStatementLike(t){if(this.state.strict&&this.isContextual(128)){let i=this.lookahead();if(q(i.type)){let a=this.startNode();return this.next(),this.flowParseInterface(a)}}else if(this.isContextual(125)){let i=this.startNode();return this.next(),this.flowParseEnumDeclaration(i)}let r=super.parseStatementLike(t);return this.flowPragma===void 0&&!this.isValidDirective(r)&&(this.flowPragma=null),r}parseExpressionStatement(t,r,i){if(r.type==="Identifier"){if(r.name==="declare"){if(this.match(76)||A(this.state.type)||this.match(64)||this.match(70)||this.match(78))return this.flowParseDeclare(t)}else if(A(this.state.type)){if(r.name==="interface")return this.flowParseInterface(t);if(r.name==="type")return this.flowParseTypeAlias(t);if(r.name==="opaque")return this.flowParseOpaqueType(t,!1)}}return super.parseExpressionStatement(t,r,i)}shouldParseExportDeclaration(){let{type:t}=this.state;return t===125||Re(t)?!this.state.containsEsc:super.shouldParseExportDeclaration()}isExportDefaultSpecifier(){let{type:t}=this.state;return t===125||Re(t)?this.state.containsEsc:super.isExportDefaultSpecifier()}parseExportDefaultExpression(){if(this.isContextual(125)){let t=this.startNode();return this.next(),this.flowParseEnumDeclaration(t)}return super.parseExportDefaultExpression()}parseConditional(t,r,i){if(!this.match(13))return t;if(i!=null){let d=this.lookaheadCharCode();if(d===44||d===61||d===58||d===41)return this.setOptionalParametersError(i),t}this.expect(13);let a=this.state.clone(),s=this.state.noArrowAt,o=this.startNodeAt(r),{consequent:_,failed:m}=this.tryParseConditionalConsequent(),l=this.getArrowLikeExpressions(_),c=l[0],g=l[1];if(m||g.length>0){let d=[...s];if(g.length>0){this.state=a,this.state.noArrowAt=d;for(let x=0;x<g.length;x++)d.push(g[x].start);({consequent:_,failed:m}=this.tryParseConditionalConsequent()),[c]=this.getArrowLikeExpressions(_)}m&&c.length>1&&this.raise(w.AmbiguousConditionalArrow,a.startLoc),m&&c.length===1&&(this.state=a,d.push(c[0].start),this.state.noArrowAt=d,{consequent:_}=this.tryParseConditionalConsequent())}return this.getArrowLikeExpressions(_,!0),this.state.noArrowAt=s,this.expect(10),o.test=t,o.consequent=_,o.alternate=this.forwardNoArrowParamsConversionAt(o,()=>this.parseMaybeAssign()),this.finishNode(o,"ConditionalExpression")}tryParseConditionalConsequent(){this.state.noArrowParamsConversionAt.push(this.state.start);let t=this.parseMaybeAssignAllowIn(),r=!this.match(10);return this.state.noArrowParamsConversionAt.pop(),{consequent:t,failed:r}}getArrowLikeExpressions(t,r){let i=[t],a=[];for(;i.length!==0;){let s=i.pop();s.type==="ArrowFunctionExpression"?(s.typeParameters||!s.returnType?this.finishArrowValidation(s):a.push(s),s.body.type!=="BlockStatement"&&i.push(s.body)):s.type==="ConditionalExpression"&&(i.push(s.consequent),i.push(s.alternate))}return r?(a.forEach(s=>this.finishArrowValidation(s)),[a,[]]):Gr(a,s=>s.params.every(o=>this.isAssignable(o,!0)))}finishArrowValidation(t){this.toAssignableList(t.params,t.extra?.trailingCommaLoc,!1),this.scope.enter(518),super.checkParams(t,!1,!0),this.scope.exit()}forwardNoArrowParamsConversionAt(t,r){let i;return this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start))?(this.state.noArrowParamsConversionAt.push(this.state.start),i=r(),this.state.noArrowParamsConversionAt.pop()):i=r(),i}parseParenItem(t,r){let i=super.parseParenItem(t,r);if(this.eat(13)&&(i.optional=!0,this.resetEndLocation(t)),this.match(10)){let a=this.startNodeAt(r);return a.expression=i,a.typeAnnotation=this.flowParseTypeAnnotation(),this.finishNode(a,"TypeCastExpression")}return i}assertModuleNodeAllowed(t){t.type==="ImportDeclaration"&&(t.importKind==="type"||t.importKind==="typeof")||t.type==="ExportNamedDeclaration"&&t.exportKind==="type"||t.type==="ExportAllDeclaration"&&t.exportKind==="type"||super.assertModuleNodeAllowed(t)}parseExportDeclaration(t){if(this.isContextual(129)){t.exportKind="type";let r=this.startNode();return this.next(),this.match(2)?(t.specifiers=this.parseExportSpecifiers(!0),super.parseExportFrom(t),null):this.flowParseTypeAlias(r)}else if(this.isContextual(130)){t.exportKind="type";let r=this.startNode();return this.next(),this.flowParseOpaqueType(r,!1)}else if(this.isContextual(128)){t.exportKind="type";let r=this.startNode();return this.next(),this.flowParseInterface(r)}else if(this.isContextual(125)){t.exportKind="value";let r=this.startNode();return this.next(),this.flowParseEnumDeclaration(r)}else return super.parseExportDeclaration(t)}eatExportStar(t){return super.eatExportStar(t)?!0:this.isContextual(129)&&this.lookahead().type===51?(t.exportKind="type",this.next(),this.next(),!0):!1}maybeParseExportNamespaceSpecifier(t){let{startLoc:r}=this.state,i=super.maybeParseExportNamespaceSpecifier(t);return i&&t.exportKind==="type"&&this.unexpected(r),i}maybeParseExportNamedSpecifiers(t){if(!super.maybeParseExportNamedSpecifiers(t))return!1;let r=t.specifiers[t.specifiers.length-1];return t.exportKind==="type"&&r?.type==="ExportNamespaceSpecifier"&&this.unexpected(r.start),!0}parseClassId(t,r,i){if((!r||i)&&this.isContextual(112)){t.id=null;return}super.parseClassId(t,r,i),this.match(43)&&(t.typeParameters=this.flowParseTypeParameterDeclaration())}parseClassMember(t,r,i){let{startLoc:a}=this.state;if(this.isContextual(124)){if(super.parseClassMemberFromModifier(t,r))return;r.declare=!0}super.parseClassMember(t,r,i),r.declare&&(r.type!=="ClassProperty"&&r.type!=="ClassPrivateProperty"&&r.type!=="PropertyDefinition"?this.raise(w.DeclareClassElement,a):r.value&&this.raise(w.DeclareClassFieldInitializer,r.value))}isIterator(t){return t==="iterator"||t==="asyncIterator"}readIterator(){let t=super.readWord1(),r="@@"+t;(!this.isIterator(t)||!this.state.inType)&&this.raise(p.InvalidIdentifier,this.state.curPosition(),{identifierName:r}),this.finishToken(131,r)}getTokenFromCode(t){let r=this.input.charCodeAt(this.state.pos+1);t===123&&r===124?this.finishOp(3,2):this.state.inType&&(t===62||t===60)?this.finishOp(t===62?44:43,1):this.state.inType&&t===63?r===46?this.finishOp(14,2):this.finishOp(13,1):qr(t,r,this.input.charCodeAt(this.state.pos+2))?(this.state.pos+=2,this.readIterator()):super.getTokenFromCode(t)}isAssignable(t,r){return t.type==="TypeCastExpression"?this.isAssignable(t.expression,r):super.isAssignable(t,r)}toAssignable(t,r=!1){!r&&t.type==="AssignmentExpression"&&t.left.type==="TypeCastExpression"&&(t.left=this.typeCastToParameter(t.left)),super.toAssignable(t,r)}toAssignableListItem(t,r,i){let a=t[r];a.type==="TypeCastExpression"&&(t[r]=this.typeCastToParameter(a)),super.toAssignableListItem(t,r,i)}toReferencedList(t,r){for(let i=0;i<t.length;i++){let a=t[i];a?.type==="TypeCastExpression"&&!a.extra?.parenthesized&&(t.length>1||!r)&&this.raise(w.TypeCastInPattern,a.typeAnnotation)}return t}parseArrayLike(t,r){let i=super.parseArrayLike(t,r);return i.type==="ArrayExpression"&&this.toReferencedList(i.elements),i}isValidLVal(t,r,i,a){return t==="TypeCastExpression"||super.isValidLVal(t,r,i,a)}parseClassProperty(t){return this.match(10)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),super.parseClassProperty(t)}parseClassPrivateProperty(t){return this.match(10)&&(t.typeAnnotation=this.flowParseTypeAnnotation()),super.parseClassPrivateProperty(t)}isClassMethod(){return this.match(43)||super.isClassMethod()}isClassProperty(){return this.match(10)||super.isClassProperty()}isNonstaticConstructor(t){return!this.match(10)&&super.isNonstaticConstructor(t)}pushClassMethod(t,r,i,a,s,o){if(r.variance&&this.unexpected(r.variance.start),delete r.variance,this.match(43)&&(r.typeParameters=this.flowParseTypeParameterDeclaration()),super.pushClassMethod(t,r,i,a,s,o),r.params&&s){let _=r.params;_.length>0&&this.isThisParam(_[0])&&this.raise(w.ThisParamBannedInConstructor,r)}else if(r.type==="MethodDefinition"&&s&&r.value.params){let _=r.value.params;_.length>0&&this.isThisParam(_[0])&&this.raise(w.ThisParamBannedInConstructor,r)}}pushClassPrivateMethod(t,r,i,a){r.variance&&this.unexpected(r.variance.start),delete r.variance,this.match(43)&&(r.typeParameters=this.flowParseTypeParameterDeclaration()),super.pushClassPrivateMethod(t,r,i,a)}flowParseClassImplements(){let t=this.startNode();return t.id=this.flowParseRestrictedIdentifier(!0),this.match(43)?t.typeParameters=this.flowParseTypeParameterInstantiation():t.typeParameters=null,this.finishNode(t,"ClassImplements")}parseClassSuper(t){if(super.parseClassSuper(t),t.superClass&&(this.match(43)||this.match(47))&&(t.superTypeArguments=this.flowParseTypeParameterInstantiationInExpression()),this.eatContextual(112)){let r=t.implements=[];do r.push(this.flowParseClassImplements());while(this.eat(8))}}checkGetterSetterParams(t){super.checkGetterSetterParams(t);let r=this.getObjectOrClassMethodParams(t);if(r.length>0){let i=r[0];this.isThisParam(i)&&t.kind==="get"?this.raise(w.GetterMayNotHaveThisParam,i):this.isThisParam(i)&&this.raise(w.SetterMayNotHaveThisParam,i)}}parsePropertyNamePrefixOperator(t){t.variance=this.flowParseVariance()}parseObjPropValue(t,r,i,a,s,o,_){t.variance&&this.unexpected(t.variance.start),delete t.variance;let m;this.match(43)&&!o&&(m=this.flowParseTypeParameterDeclaration(),this.match(6)||this.unexpected());let l=super.parseObjPropValue(t,r,i,a,s,o,_);return m&&((l.value||l).typeParameters=m),l}parseFunctionParamType(t){return this.eat(13)&&(t.type!=="Identifier"&&this.raise(w.PatternIsOptional,t),this.isThisParam(t)&&this.raise(w.ThisParamMayNotBeOptional,t),t.optional=!0),this.match(10)?t.typeAnnotation=this.flowParseTypeAnnotation():this.isThisParam(t)&&this.raise(w.ThisParamAnnotationRequired,t),this.match(25)&&this.isThisParam(t)&&this.raise(w.ThisParamNoDefault,t),this.resetEndLocation(t),t}parseMaybeDefault(t,r){let i=super.parseMaybeDefault(t,r);return i.type==="AssignmentPattern"&&i.typeAnnotation&&i.right.start<i.typeAnnotation.start&&this.raise(w.TypeBeforeInitializer,i.typeAnnotation),i}parseImportSpecifierLocal(t,r,i){r.local=Vt(t)?this.flowParseRestrictedIdentifier(!0,!0):this.parseIdentifier(),t.specifiers.push(this.finishImportSpecifier(r,i))}isPotentialImportPhase(t){if(super.isPotentialImportPhase(t))return!0;if(this.isContextual(129)){if(!t)return!0;let r=this.lookaheadCharCode();return r===123||r===42}return!t&&this.isContextual(83)}applyImportPhase(t,r,i,a){if(super.applyImportPhase(t,r,i,a),r){if(!i&&this.match(61))return;t.exportKind=i==="type"?i:"value"}else i==="type"&&this.match(51)&&this.unexpected(),t.importKind=i==="type"||i==="typeof"?i:"value"}parseNamedOrFilteredImportSpecifiers(t){super.parseNamedOrFilteredImportSpecifiers(t);let r=t.specifiers[t.specifiers.length-1];Vt(t)&&r?.type==="ImportNamespaceSpecifier"&&this.unexpected(r.start)}parseImportSpecifier(t,r,i,a){let s=t.imported,o=null;if(s.type==="Identifier"&&(s.name==="type"?o="type":s.name==="typeof"&&(o="typeof")),this.isContextual(90)&&!this.isLookaheadContextual("as")){let _=this.parseIdentifier(!0);o!==null&&!q(this.state.type)?(t.imported=_,t.importKind=o,t.local=this.cloneIdentifier(_)):(t.imported=s,t.importKind=null,t.local=this.parseIdentifier())}else o!==null&&q(this.state.type)?(t.imported=this.parseIdentifier(!0),t.importKind=o):(t.imported=s,t.importKind=null),this.eatContextual(90)?t.local=this.parseIdentifier():t.local=this.cloneIdentifier(t.imported);return this.finishNode(t,"ImportSpecifier")}checkImportSpecifier(t,r){let i=Vt(t),a=r||i;if(a){r&&i&&this.raise(w.ImportTypeShorthandOnlyInPureImport,t);let{local:s}=t;this.checkReservedType(s.name,s.start,!0)}super.checkImportSpecifier(t,r,8201,!a)}parseBindingAtom(){return this.state.type===74?this.parseIdentifier(!0):super.parseBindingAtom()}parseFunctionParams(t,r){let i=t.kind;i!=="get"&&i!=="set"&&this.match(43)&&(t.typeParameters=this.flowParseTypeParameterDeclaration()),super.parseFunctionParams(t,r)}parseVarId(t,r){super.parseVarId(t,r),this.match(10)&&(t.id.typeAnnotation=this.flowParseTypeAnnotation(),this.resetEndLocation(t.id))}parseAsyncArrowFromCallExpression(t,r){if(this.match(10)){let i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0,t.returnType=this.flowParseTypeAnnotation(),this.state.noAnonFunctionType=i}return super.parseAsyncArrowFromCallExpression(t,r)}shouldParseAsyncArrow(){return this.match(10)||super.shouldParseAsyncArrow()}parseMaybeAssign(t,r){let i=null,a;if(this.hasPlugin("jsx")&&(this.match(141)||this.match(43))){if(i=this.state.clone(),a=this.tryParse(()=>super.parseMaybeAssign(t,r),i),!a.error)return a.node;let{context:s}=this.state,o=s[s.length-1];(o===L.j_oTag||o===L.j_expr)&&s.pop()}if(a?.error||this.match(43)){i=i||this.state.clone();let s,o=this.tryParse(m=>{s=this.flowParseTypeParameterDeclaration();let l=this.forwardNoArrowParamsConversionAt(s,()=>{let g=super.parseMaybeAssign(t,r);return this.resetStartLocationFromNode(g,s),g});l.extra?.parenthesized&&m();let c=this.maybeUnwrapTypeCastExpression(l);return c.type!=="ArrowFunctionExpression"&&m(),c.typeParameters=s,this.resetStartLocationFromNode(c,s),l},i),_=null;if(o.node&&this.maybeUnwrapTypeCastExpression(o.node).type==="ArrowFunctionExpression"){if(!o.error&&!o.aborted)return o.node.async&&this.raise(w.UnexpectedTypeParameterBeforeAsyncArrowFunction,s),o.node;_=o.node}if(a?.node)return this.state=a.failState,a.node;if(_)return this.state=o.failState,_;throw a?.thrown?a.error:o.thrown?o.error:this.raise(w.UnexpectedTokenAfterTypeParameter,s)}return super.parseMaybeAssign(t,r)}parseArrow(t){if(this.match(10)){let r=this.tryParse(()=>{let i=this.state.noAnonFunctionType;this.state.noAnonFunctionType=!0;let a=this.startNode();return[a.typeAnnotation,t.predicate]=this.flowParseTypeAndPredicateInitialiser(!0),this.state.noAnonFunctionType=i,this.canInsertSemicolon()&&this.unexpected(),this.match(15)||this.unexpected(),a});if(r.thrown)return null;r.error&&(this.state=r.failState),t.returnType=r.node.typeAnnotation?this.finishNode(r.node,"TypeAnnotation"):null}return super.parseArrow(t)}shouldParseArrow(t){return this.match(10)||super.shouldParseArrow(t)}setArrowFunctionParameters(t,r){this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start))?t.params=r:super.setArrowFunctionParameters(t,r)}checkParams(t,r,i,a=!0){if(!(i&&this.state.noArrowParamsConversionAt.includes(this.offsetToSourcePos(t.start)))){for(let s=0;s<t.params.length;s++)this.isThisParam(t.params[s])&&s>0&&this.raise(w.ThisParamMustBeFirst,t.params[s]);super.checkParams(t,r,i,a)}}parseParenAndDistinguishExpression(t){return super.parseParenAndDistinguishExpression(t&&!this.state.noArrowAt.includes(this.sourceToOffsetPos(this.state.start)))}parseSubscripts(t,r,i){if(t.type==="Identifier"&&t.name==="async"&&this.state.noArrowAt.includes(r.index)){this.next();let a=this.startNodeAt(r);a.callee=t,a.arguments=super.parseCallExpressionArguments(),t=this.finishNode(a,"CallExpression")}else if(t.type==="Identifier"&&t.name==="async"&&this.match(43)){let a=this.state.clone(),s=this.tryParse(_=>this.parseAsyncArrowWithTypeParameters(r)||_(),a);if(!s.error&&!s.aborted)return s.node;let o=this.tryParse(()=>super.parseSubscripts(t,r,i),a);if(o.node&&!o.error)return o.node;if(s.node)return this.state=s.failState,s.node;if(o.node)return this.state=o.failState,o.node;throw s.error||o.error}return super.parseSubscripts(t,r,i)}parseSubscript(t,r,i,a){if(this.match(14)&&this.isLookaheadToken_lt()){if(a.optionalChainMember=!0,i)return a.stop=!0,t;this.next();let s=this.startNodeAt(r);return s.callee=t,s.typeArguments=this.flowParseTypeParameterInstantiationInExpression(),this.expect(6),s.arguments=this.parseCallExpressionArguments(),s.optional=!0,this.finishCallExpression(s,!0)}else if(!i&&this.shouldParseTypes()&&(this.match(43)||this.match(47))){let s=this.startNodeAt(r);s.callee=t;let o=this.tryParse(()=>(s.typeArguments=this.flowParseTypeParameterInstantiationCallOrNew(),this.expect(6),s.arguments=super.parseCallExpressionArguments(),a.optionalChainMember&&(s.optional=!1),this.finishCallExpression(s,a.optionalChainMember)));if(o.node)return o.error&&(this.state=o.failState),o.node}return super.parseSubscript(t,r,i,a)}parseNewCallee(t){super.parseNewCallee(t);let r=null;this.shouldParseTypes()&&this.match(43)&&(r=this.tryParse(()=>this.flowParseTypeParameterInstantiationCallOrNew()).node),t.typeArguments=r}parseAsyncArrowWithTypeParameters(t){let r=this.startNodeAt(t);if(this.parseFunctionParams(r,!1),!!this.parseArrow(r))return super.parseArrowExpression(r,void 0,!0)}readToken_mult_modulo(t){let r=this.input.charCodeAt(this.state.pos+1);if(t===42&&r===47&&this.state.hasFlowComment){this.state.hasFlowComment=!1,this.state.pos+=2,this.nextToken();return}super.readToken_mult_modulo(t)}readToken_pipe_amp(t){let r=this.input.charCodeAt(this.state.pos+1);if(t===124&&r===125){this.finishOp(5,2);return}super.readToken_pipe_amp(t)}parseTopLevel(t,r){let i=super.parseTopLevel(t,r);return this.state.hasFlowComment&&this.raise(w.UnterminatedFlowComment,this.state.curPosition()),i}skipBlockComment(){if(this.hasPlugin("flowComments")&&this.skipFlowComment()){if(this.state.hasFlowComment)throw this.raise(w.NestedFlowComment,this.state.startLoc);this.hasFlowCommentCompletion();let t=this.skipFlowComment();t&&(this.state.pos+=t,this.state.hasFlowComment=!0);return}return super.skipBlockComment(this.state.hasFlowComment?"*-/":"*/")}skipFlowComment(){let{pos:t}=this.state,r=2;for(;[32,9].includes(this.input.charCodeAt(t+r));)r++;let i=this.input.charCodeAt(r+t),a=this.input.charCodeAt(r+t+1);return i===58&&a===58?r+2:this.input.slice(r+t,r+t+12)==="flow-include"?r+12:i===58&&a!==58?r:!1}hasFlowCommentCompletion(){if(this.input.indexOf("*/",this.state.pos)===-1)throw this.raise(p.UnterminatedComment,this.state.curPosition())}flowEnumErrorBooleanMemberNotInitialized(t,r){this.raise(w.EnumBooleanMemberNotInitialized,t,r)}flowEnumErrorInvalidMemberInitializer(t,r){return this.raise(r.explicitType?r.explicitType==="symbol"?w.EnumInvalidMemberInitializerSymbolType:w.EnumInvalidMemberInitializerPrimaryType:w.EnumInvalidMemberInitializerUnknownType,t,r)}flowEnumErrorNumberMemberNotInitialized(t,r){this.raise(w.EnumNumberMemberNotInitialized,t,r)}flowEnumErrorStringMemberInconsistentlyInitialized(t,r){this.raise(w.EnumStringMemberInconsistentlyInitialized,t,r)}flowEnumMemberInit(){let t=this.state.startLoc,r=()=>this.match(8)||this.match(4);switch(this.state.type){case 134:{let i=this.parseNumericLiteral(this.state.value);if(r())return{type:"number",loc:i.start,value:i};break}case 133:{let i=this.parseStringLiteral(this.state.value);if(r())return{type:"string",loc:i.start,value:i};break}case 81:case 82:{let i=this.parseBooleanLiteral(this.match(81));if(r())return{type:"boolean",loc:i.start,value:i}}}return{type:"invalid",loc:t}}flowEnumMemberRaw(){let t=this.state.startLoc,r=this.parseIdentifier(!0),i=this.eat(25)?this.flowEnumMemberInit():{type:"none",loc:t};return{id:r,init:i}}flowEnumCheckExplicitTypeMismatch(t,r,i){let{explicitType:a}=r;a!==null&&a!==i&&this.flowEnumErrorInvalidMemberInitializer(t,r)}flowEnumMembers({enumName:t,explicitType:r}){let i=new Set,a={booleanMembers:[],numberMembers:[],stringMembers:[],defaultedMembers:[]},s=!1;for(;!this.match(4);){if(this.eat(17)){s=!0;break}let o=this.startNode(),{id:_,init:m}=this.flowEnumMemberRaw(),l=_.name;if(l==="")continue;/^[a-z]/.test(l)&&this.raise(w.EnumInvalidMemberName,_,{memberName:l,suggestion:l[0].toUpperCase()+l.slice(1),enumName:t}),i.has(l)&&this.raise(w.EnumDuplicateMemberName,_,{memberName:l,enumName:t}),i.add(l);let c={enumName:t,explicitType:r,memberName:l};switch(o.id=_,m.type){case"boolean":{this.flowEnumCheckExplicitTypeMismatch(m.loc,c,"boolean"),o.init=m.value,a.booleanMembers.push(this.finishNode(o,"EnumBooleanMember"));break}case"number":{this.flowEnumCheckExplicitTypeMismatch(m.loc,c,"number"),o.init=m.value,a.numberMembers.push(this.finishNode(o,"EnumNumberMember"));break}case"string":{this.flowEnumCheckExplicitTypeMismatch(m.loc,c,"string"),o.init=m.value,a.stringMembers.push(this.finishNode(o,"EnumStringMember"));break}case"invalid":throw this.flowEnumErrorInvalidMemberInitializer(m.loc,c);case"none":switch(r){case"boolean":this.flowEnumErrorBooleanMemberNotInitialized(m.loc,c);break;case"number":this.flowEnumErrorNumberMemberNotInitialized(m.loc,c);break;default:a.defaultedMembers.push(this.finishNode(o,"EnumDefaultedMember"))}}this.match(4)||this.expect(8)}return{members:a,hasUnknownMembers:s}}flowEnumStringMembers(t,r,{enumName:i}){if(t.length===0)return r;if(r.length===0)return t;if(r.length>t.length){for(let a of t)this.flowEnumErrorStringMemberInconsistentlyInitialized(a,{enumName:i});return r}else{for(let a of r)this.flowEnumErrorStringMemberInconsistentlyInitialized(a,{enumName:i});return t}}flowEnumParseExplicitType({enumName:t}){if(!this.eatContextual(99))return null;if(!A(this.state.type))throw this.raise(w.EnumInvalidExplicitTypeUnknownSupplied,this.state.startLoc,{enumName:t});let{value:r}=this.state;return this.next(),r!=="boolean"&&r!=="number"&&r!=="string"&&r!=="symbol"&&this.raise(w.EnumInvalidExplicitType,this.state.startLoc,{enumName:t,invalidEnumType:r}),r}flowEnumBody(t,r){let i=r.name,a=r.start,s=this.flowEnumParseExplicitType({enumName:i});this.expect(2);let{members:o,hasUnknownMembers:_}=this.flowEnumMembers({enumName:i,explicitType:s});switch(t.hasUnknownMembers=_,s){case"boolean":return t.explicitType=!0,t.members=o.booleanMembers,this.expect(4),this.finishNode(t,"EnumBooleanBody");case"number":return t.explicitType=!0,t.members=o.numberMembers,this.expect(4),this.finishNode(t,"EnumNumberBody");case"string":return t.explicitType=!0,t.members=this.flowEnumStringMembers(o.stringMembers,o.defaultedMembers,{enumName:i}),this.expect(4),this.finishNode(t,"EnumStringBody");case"symbol":return t.members=o.defaultedMembers,this.expect(4),this.finishNode(t,"EnumSymbolBody");default:{let m=()=>(t.members=[],this.expect(4),this.finishNode(t,"EnumStringBody"));t.explicitType=!1;let l=o.booleanMembers.length,c=o.numberMembers.length,g=o.stringMembers.length,d=o.defaultedMembers.length;if(!l&&!c&&!g&&!d)return m();if(!l&&!c)return t.members=this.flowEnumStringMembers(o.stringMembers,o.defaultedMembers,{enumName:i}),this.expect(4),this.finishNode(t,"EnumStringBody");if(!c&&!g&&l>=d){for(let x of o.defaultedMembers)this.flowEnumErrorBooleanMemberNotInitialized(x.start,{enumName:i,memberName:x.id.name});return t.members=o.booleanMembers,this.expect(4),this.finishNode(t,"EnumBooleanBody")}else if(!l&&!g&&c>=d){for(let x of o.defaultedMembers)this.flowEnumErrorNumberMemberNotInitialized(x.start,{enumName:i,memberName:x.id.name});return t.members=o.numberMembers,this.expect(4),this.finishNode(t,"EnumNumberBody")}else return this.raise(w.EnumInconsistentMemberValues,a,{enumName:i}),m()}}}flowParseEnumDeclaration(t){let r=this.parseIdentifier();return t.id=r,t.body=this.flowEnumBody(this.startNode(),r),this.finishNode(t,"EnumDeclaration")}jsxParseOpeningElementAfterName(t){return this.shouldParseTypes()&&(this.match(43)||this.match(47))&&(t.typeArguments=this.flowParseTypeParameterInstantiationInExpression()),super.jsxParseOpeningElementAfterName(t)}isLookaheadToken_lt(){let t=this.nextTokenStart();if(this.input.charCodeAt(t)===60){let r=this.input.charCodeAt(t+1);return r!==60&&r!==61}return!1}reScan_lt_gt(){let{type:t}=this.state;t===43?(this.state.pos-=1,this.readToken_lt()):t===44&&(this.state.pos-=1,this.readToken_gt())}reScan_lt(){let{type:t}=this.state;return t===47?(this.state.pos-=2,this.finishOp(43,1),43):t}maybeUnwrapTypeCastExpression(t){return t.type==="TypeCastExpression"?t.expression:t}},Zr={__proto__:null,quot:'"',amp:"&",apos:"'",lt:"<",gt:">",nbsp:"\xA0",iexcl:"\xA1",cent:"\xA2",pound:"\xA3",curren:"\xA4",yen:"\xA5",brvbar:"\xA6",sect:"\xA7",uml:"\xA8",copy:"\xA9",ordf:"\xAA",laquo:"\xAB",not:"\xAC",shy:"\xAD",reg:"\xAE",macr:"\xAF",deg:"\xB0",plusmn:"\xB1",sup2:"\xB2",sup3:"\xB3",acute:"\xB4",micro:"\xB5",para:"\xB6",middot:"\xB7",cedil:"\xB8",sup1:"\xB9",ordm:"\xBA",raquo:"\xBB",frac14:"\xBC",frac12:"\xBD",frac34:"\xBE",iquest:"\xBF",Agrave:"\xC0",Aacute:"\xC1",Acirc:"\xC2",Atilde:"\xC3",Auml:"\xC4",Aring:"\xC5",AElig:"\xC6",Ccedil:"\xC7",Egrave:"\xC8",Eacute:"\xC9",Ecirc:"\xCA",Euml:"\xCB",Igrave:"\xCC",Iacute:"\xCD",Icirc:"\xCE",Iuml:"\xCF",ETH:"\xD0",Ntilde:"\xD1",Ograve:"\xD2",Oacute:"\xD3",Ocirc:"\xD4",Otilde:"\xD5",Ouml:"\xD6",times:"\xD7",Oslash:"\xD8",Ugrave:"\xD9",Uacute:"\xDA",Ucirc:"\xDB",Uuml:"\xDC",Yacute:"\xDD",THORN:"\xDE",szlig:"\xDF",agrave:"\xE0",aacute:"\xE1",acirc:"\xE2",atilde:"\xE3",auml:"\xE4",aring:"\xE5",aelig:"\xE6",ccedil:"\xE7",egrave:"\xE8",eacute:"\xE9",ecirc:"\xEA",euml:"\xEB",igrave:"\xEC",iacute:"\xED",icirc:"\xEE",iuml:"\xEF",eth:"\xF0",ntilde:"\xF1",ograve:"\xF2",oacute:"\xF3",ocirc:"\xF4",otilde:"\xF5",ouml:"\xF6",divide:"\xF7",oslash:"\xF8",ugrave:"\xF9",uacute:"\xFA",ucirc:"\xFB",uuml:"\xFC",yacute:"\xFD",thorn:"\xFE",yuml:"\xFF",OElig:"\u0152",oelig:"\u0153",Scaron:"\u0160",scaron:"\u0161",Yuml:"\u0178",fnof:"\u0192",circ:"\u02C6",tilde:"\u02DC",Alpha:"\u0391",Beta:"\u0392",Gamma:"\u0393",Delta:"\u0394",Epsilon:"\u0395",Zeta:"\u0396",Eta:"\u0397",Theta:"\u0398",Iota:"\u0399",Kappa:"\u039A",Lambda:"\u039B",Mu:"\u039C",Nu:"\u039D",Xi:"\u039E",Omicron:"\u039F",Pi:"\u03A0",Rho:"\u03A1",Sigma:"\u03A3",Tau:"\u03A4",Upsilon:"\u03A5",Phi:"\u03A6",Chi:"\u03A7",Psi:"\u03A8",Omega:"\u03A9",alpha:"\u03B1",beta:"\u03B2",gamma:"\u03B3",delta:"\u03B4",epsilon:"\u03B5",zeta:"\u03B6",eta:"\u03B7",theta:"\u03B8",iota:"\u03B9",kappa:"\u03BA",lambda:"\u03BB",mu:"\u03BC",nu:"\u03BD",xi:"\u03BE",omicron:"\u03BF",pi:"\u03C0",rho:"\u03C1",sigmaf:"\u03C2",sigma:"\u03C3",tau:"\u03C4",upsilon:"\u03C5",phi:"\u03C6",chi:"\u03C7",psi:"\u03C8",omega:"\u03C9",thetasym:"\u03D1",upsih:"\u03D2",piv:"\u03D6",ensp:"\u2002",emsp:"\u2003",thinsp:"\u2009",zwnj:"\u200C",zwj:"\u200D",lrm:"\u200E",rlm:"\u200F",ndash:"\u2013",mdash:"\u2014",lsquo:"\u2018",rsquo:"\u2019",sbquo:"\u201A",ldquo:"\u201C",rdquo:"\u201D",bdquo:"\u201E",dagger:"\u2020",Dagger:"\u2021",bull:"\u2022",hellip:"\u2026",permil:"\u2030",prime:"\u2032",Prime:"\u2033",lsaquo:"\u2039",rsaquo:"\u203A",oline:"\u203E",frasl:"\u2044",euro:"\u20AC",image:"\u2111",weierp:"\u2118",real:"\u211C",trade:"\u2122",alefsym:"\u2135",larr:"\u2190",uarr:"\u2191",rarr:"\u2192",darr:"\u2193",harr:"\u2194",crarr:"\u21B5",lArr:"\u21D0",uArr:"\u21D1",rArr:"\u21D2",dArr:"\u21D3",hArr:"\u21D4",forall:"\u2200",part:"\u2202",exist:"\u2203",empty:"\u2205",nabla:"\u2207",isin:"\u2208",notin:"\u2209",ni:"\u220B",prod:"\u220F",sum:"\u2211",minus:"\u2212",lowast:"\u2217",radic:"\u221A",prop:"\u221D",infin:"\u221E",ang:"\u2220",and:"\u2227",or:"\u2228",cap:"\u2229",cup:"\u222A",int:"\u222B",there4:"\u2234",sim:"\u223C",cong:"\u2245",asymp:"\u2248",ne:"\u2260",equiv:"\u2261",le:"\u2264",ge:"\u2265",sub:"\u2282",sup:"\u2283",nsub:"\u2284",sube:"\u2286",supe:"\u2287",oplus:"\u2295",otimes:"\u2297",perp:"\u22A5",sdot:"\u22C5",lceil:"\u2308",rceil:"\u2309",lfloor:"\u230A",rfloor:"\u230B",lang:"\u2329",rang:"\u232A",loz:"\u25CA",spades:"\u2660",clubs:"\u2663",hearts:"\u2665",diams:"\u2666"},Ot=/\r\n|[\r\n\u2028\u2029]/g;function ct(n){switch(n){case 10:case 13:case 8232:case 8233:return!0;default:return!1}}function ee(n,e,t){for(let r=e;r<t;r++)if(ct(n.charCodeAt(r)))return!0;return!1}var ti=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,ei=/(?:[^\S\n\r\u2028\u2029]|\/\*.*?\*\/)*(?:(?!-->)(?:\s|\/\/.*|\/\*[^]*?\*\/|<!--.*|-->.*)*)?/g,Ht=/(?:[^\S\n\r\u2028\u2029]|\/\/.*|\/\*.*?\*\/)*/g;function ri(n){switch(n){case 9:case 11:case 12:case 32:case 160:case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8239:case 8287:case 12288:case 65279:return!0;default:return!1}}var ii={AttributeIsEmpty:"JSX attributes must only be assigned a non-empty expression.",MissingClosingTagElement:({openingTagName:n})=>`Expected corresponding JSX closing tag for <${n}>.`,MissingClosingTagFragment:"Expected corresponding JSX closing tag for <>.",UnexpectedSequenceExpression:"Sequence expressions cannot be directly nested inside JSX. Did you mean to wrap it in parentheses (...)?",UnexpectedToken:({unexpected:n,HTMLEntity:e})=>`Unexpected token \`${n}\`. Did you mean \`${e}\` or \`{'${n}'}\`?`,UnsupportedJsxValue:"JSX value should be either an expression or a quoted JSX text.",UnterminatedJsxContent:"Unterminated JSX contents.",UnwrappedAdjacentJSXElements:"Adjacent JSX elements must be wrapped in an enclosing tag. Did you want a JSX fragment <>...</>?"},Y=W`jsx`(ii);function rt(n){return n?n.type==="JSXOpeningFragment"||n.type==="JSXClosingFragment":!1}function dt(n){if(n.type==="JSXIdentifier")return n.name;if(n.type==="JSXNamespacedName")return n.namespace.name+":"+n.name.name;if(n.type==="JSXMemberExpression")return dt(n.object)+"."+dt(n.property);throw new Error("Node had unexpected type: "+n.type)}var ai=n=>class extends n{jsxReadToken(){let t="",r=this.state.pos;for(;;){if(this.state.pos>=this.length)throw this.raise(Y.UnterminatedJsxContent,this.state.startLoc);let i=this.input.charCodeAt(this.state.pos);switch(i){case 60:case 123:if(this.state.pos===this.state.start){i===60&&this.state.canStartJSXElement?(++this.state.pos,this.finishToken(141)):super.getTokenFromCode(i);return}t+=this.input.slice(r,this.state.pos),this.finishToken(140,t);return;case 38:t+=this.input.slice(r,this.state.pos),t+=this.jsxReadEntity(),r=this.state.pos;break;case 62:case 125:this.raise(Y.UnexpectedToken,this.state.curPosition(),{unexpected:this.input[this.state.pos],HTMLEntity:i===125?"&rbrace;":"&gt;"});default:ct(i)?(t+=this.input.slice(r,this.state.pos),t+=this.jsxReadNewLine(!0),r=this.state.pos):++this.state.pos}}}jsxReadNewLine(t){let r=this.input.charCodeAt(this.state.pos),i;return++this.state.pos,r===13&&this.input.charCodeAt(this.state.pos)===10?(++this.state.pos,i=t?`
`:`\r
`):i=String.fromCharCode(r),++this.state.curLine,this.state.lineStart=this.state.pos,i}jsxReadString(t){let r="",i=++this.state.pos;for(;;){if(this.state.pos>=this.length)throw this.raise(p.UnterminatedString,this.state.startLoc);let a=this.input.charCodeAt(this.state.pos);if(a===t)break;a===38?(r+=this.input.slice(i,this.state.pos),r+=this.jsxReadEntity(),i=this.state.pos):ct(a)?(r+=this.input.slice(i,this.state.pos),r+=this.jsxReadNewLine(!1),i=this.state.pos):++this.state.pos}r+=this.input.slice(i,this.state.pos++),this.finishToken(133,r)}jsxReadEntity(){let t=++this.state.pos;if(this.codePointAtPos(this.state.pos)===35){++this.state.pos;let r=10;this.codePointAtPos(this.state.pos)===120&&(r=16,++this.state.pos);let i=this.readInt(r,void 0,!1,"bail");if(i!==null&&i<=1114111&&this.codePointAtPos(this.state.pos)===59)return++this.state.pos,String.fromCodePoint(i)}else{let r=0,i=!1;for(;r++<10&&this.state.pos<this.length&&!(i=this.codePointAtPos(this.state.pos)===59);)++this.state.pos;if(i){let a=this.input.slice(t,this.state.pos),s=Zr[a];if(++this.state.pos,s)return s}}return this.state.pos=t,"&"}jsxReadWord(){let t,r=this.state.pos;do t=this.input.charCodeAt(++this.state.pos);while(at(t)||t===45);this.finishToken(139,this.input.slice(r,this.state.pos))}jsxParseIdentifier(){let t=this.startNode();return this.match(139)?t.name=this.state.value:Bt(this.state.type)?t.name=it(this.state.type):this.unexpected(),this.next(),this.finishNode(t,"JSXIdentifier")}jsxParseNamespacedName(){let t=this.state.startLoc,r=this.jsxParseIdentifier();if(!this.eat(10))return r;let i=this.startNodeAt(t);return i.namespace=r,i.name=this.jsxParseIdentifier(),this.finishNode(i,"JSXNamespacedName")}jsxParseElementName(){let t=this.state.startLoc,r=this.jsxParseNamespacedName();if(r.type==="JSXNamespacedName")return r;for(;this.eat(12);){let i=this.startNodeAt(t);i.object=r,i.property=this.jsxParseIdentifier(),r=this.finishNode(i,"JSXMemberExpression")}return r}jsxParseAttributeValue(){let t;switch(this.state.type){case 2:return t=this.startNode(),this.setContext(L.brace),this.next(),t=this.jsxParseExpressionContainer(t,L.j_oTag),t.expression.type==="JSXEmptyExpression"&&this.raise(Y.AttributeIsEmpty,t),t;case 141:case 133:return this.parseExprAtom();default:throw this.raise(Y.UnsupportedJsxValue,this.state.startLoc)}}jsxParseEmptyExpression(){let t=this.startNodeAt(this.state.lastTokEndLoc);return this.finishNodeAt(t,"JSXEmptyExpression",this.state.startLoc)}jsxParseSpreadChild(t){return this.next(),t.expression=this.parseExpression(),this.setContext(L.j_expr),this.state.canStartJSXElement=!0,this.expect(4),this.finishNode(t,"JSXSpreadChild")}jsxParseExpressionContainer(t,r){if(this.match(4))t.expression=this.jsxParseEmptyExpression();else{let i=this.parseExpression();i.type==="SequenceExpression"&&!i.extra?.parenthesized&&this.raise(Y.UnexpectedSequenceExpression,i.expressions[1]),t.expression=i}return this.setContext(r),this.state.canStartJSXElement=!0,this.expect(4),this.finishNode(t,"JSXExpressionContainer")}jsxParseAttribute(){if(this.match(2)){let r=this.startNode();return this.setContext(L.brace),this.next(),this.expect(17),r.argument=this.parseMaybeAssignAllowIn(),this.setContext(L.j_oTag),this.state.canStartJSXElement=!0,this.expect(4),this.finishNode(r,"JSXSpreadAttribute")}let t=this.startNode();return t.name=this.jsxParseNamespacedName(),t.value=this.eat(25)?this.jsxParseAttributeValue():null,this.finishNode(t,"JSXAttribute")}jsxParseOpeningElementAt(t){if(this.eat(142)){let i=this.startNodeAt(t);return this.finishNode(i,"JSXOpeningFragment")}let r=this.startNodeAt(t);return r.name=this.jsxParseElementName(),this.jsxParseOpeningElementAfterName(r)}jsxParseOpeningElementAfterName(t){let r=[];for(;!this.match(52)&&!this.match(142);)r.push(this.jsxParseAttribute());return t.attributes=r,t.selfClosing=this.eat(52),this.expect(142),this.finishNode(t,"JSXOpeningElement")}jsxParseClosingElementAt(t){if(this.eat(142)){let i=this.startNodeAt(t);return this.finishNode(i,"JSXClosingFragment")}let r=this.startNodeAt(t);return r.name=this.jsxParseElementName(),this.expect(142),this.finishNode(r,"JSXClosingElement")}jsxParseElementAt(t){let r=this.startNodeAt(t),i=[],a=this.jsxParseOpeningElementAt(t),s=null;if(!a.selfClosing){t:for(;;)switch(this.state.type){case 141:if(t=this.state.startLoc,this.next(),this.eat(52)){s=this.jsxParseClosingElementAt(t);break t}i.push(this.jsxParseElementAt(t));break;case 140:i.push(this.parseLiteral(this.state.value,"JSXText"));break;case 2:{let o=this.startNode();this.setContext(L.brace),this.next(),this.match(17)?i.push(this.jsxParseSpreadChild(o)):i.push(this.jsxParseExpressionContainer(o,L.j_expr));break}default:this.unexpected()}rt(a)&&!rt(s)&&s!==null?this.raise(Y.MissingClosingTagFragment,s):!rt(a)&&rt(s)?this.raise(Y.MissingClosingTagElement,s,{openingTagName:dt(a.name)}):!rt(a)&&!rt(s)&&dt(s.name)!==dt(a.name)&&this.raise(Y.MissingClosingTagElement,s,{openingTagName:dt(a.name)})}if(rt(a)?(r.openingFragment=a,r.closingFragment=s):(r.openingElement=a,r.closingElement=s),r.children=i,this.match(43))throw this.raise(Y.UnwrappedAdjacentJSXElements,this.state.startLoc);return rt(a)?this.finishNode(r,"JSXFragment"):this.finishNode(r,"JSXElement")}jsxParseElement(){let t=this.state.startLoc;return this.next(),this.jsxParseElementAt(t)}setContext(t){let{context:r}=this.state;r[r.length-1]=t}parseExprAtom(t){return this.match(141)?this.jsxParseElement():this.match(43)&&this.input.charCodeAt(this.state.pos)!==33?(this.replaceToken(141),this.jsxParseElement()):super.parseExprAtom(t)}skipSpace(){this.curContext().preserveSpace||super.skipSpace()}getTokenFromCode(t){let r=this.curContext();if(r===L.j_expr){this.jsxReadToken();return}if(r===L.j_oTag||r===L.j_cTag){if(J(t)){this.jsxReadWord();return}if(t===62){++this.state.pos,this.finishToken(142);return}if((t===34||t===39)&&r===L.j_oTag){this.jsxReadString(t);return}}if(t===60&&this.state.canStartJSXElement&&this.input.charCodeAt(this.state.pos+1)!==33){++this.state.pos,this.finishToken(141);return}super.getTokenFromCode(t)}updateContext(t){let{context:r,type:i}=this.state;if(i===52&&t===141)r.splice(-2,2,L.j_cTag),this.state.canStartJSXElement=!1;else if(i===141)r.push(L.j_oTag);else if(i===142){let a=r[r.length-1];a===L.j_oTag&&t===52||a===L.j_cTag?(r.pop(),this.state.canStartJSXElement=r[r.length-1]===L.j_expr):(this.setContext(L.j_expr),this.state.canStartJSXElement=!0)}else this.state.canStartJSXElement=Ar(i)}},re=class extends yt{tsNames=new Map},ie=class extends Pt{get inTSNamespace(){let e=this.scopeStack;return e.length>=2&&e[e.length-1].flags===0&&(e[e.length-2].flags&2048)>0}importsStack=[];createScope(e){return this.importsStack.push(new Set),new re(e)}enter(e){e&3072&&this.importsStack.push(new Set),super.enter(e)}exit(){let e=super.exit();return e&3072&&this.importsStack.pop(),e}hasImport(e,t){let r=this.importsStack.length;if(this.importsStack[r-1].has(e))return!0;if(!t&&r>1){for(let i=0;i<r-1;i++)if(this.importsStack[i].has(e))return!0}return!1}declareName(e,t,r){if(t&4096){this.hasImport(e,!0)&&this.parser.raise(p.VarRedeclaration,r,{identifierName:e}),this.importsStack[this.importsStack.length-1].add(e);return}let i=this.currentScope(),a=i.tsNames.get(e)||0;if(t&1024){this.maybeExportDefined(i,e),i.tsNames.set(e,a|16);return}super.declareName(e,t,r),t&2&&(t&1||(this.checkRedeclarationInScope(i,e,t,r),this.maybeExportDefined(i,e)),a=a|1),t&256&&(a=a|2),t&512&&(a=a|4),t&128&&(a=a|8),a&&i.tsNames.set(e,a)}isRedeclaredInScope(e,t,r){let i=e.tsNames.get(t);if((i&2)>0){if(r&256){let a=(r&512)>0,s=(i&4)>0;return a!==s}return!0}return r&128&&(i&8)>0?e.names.get(t)&2?!!(r&1):!1:r&2&&(i&1)>0?!0:super.isRedeclaredInScope(e,t,r)}checkLocalExport(e){let{name:t}=e;if(this.hasImport(t))return;let r=this.scopeStack.length;for(let i=r-1;i>=0;i--){let s=this.scopeStack[i].tsNames.get(t);if((s&1)>0||(s&16)>0)return}super.checkLocalExport(e)}},ae=class{sawUnambiguousESM=!1;ambiguousScriptDifferentAst=!1;sourceToOffsetPos(e){return e+this.startIndex}offsetToSourcePos(e){return e-this.startIndex}hasPlugin(e){if(typeof e=="string")return this.plugins.has(e);{let[t,r]=e;if(!this.hasPlugin(t))return!1;let i=this.plugins.get(t);for(let a of Object.keys(r))if(i?.[a]!==r[a])return!1;return!0}}getPluginOption(e,t){return this.plugins.get(e)?.[t]}};function ar(n,e){n.trailingComments===void 0?n.trailingComments=e:n.trailingComments.unshift(...e)}function ni(n,e){n.leadingComments===void 0?n.leadingComments=e:n.leadingComments.unshift(...e)}function St(n,e){n.innerComments===void 0?n.innerComments=e:n.innerComments.unshift(...e)}function Q(n,e,t){let r=null,i=e.length;for(;r===null&&i>0;)r=e[--i];r===null||r.start>t.start?St(n,t.comments):ar(r,t.comments)}var ne=class extends ae{addComment(e){this.filename&&(e.loc.filename=this.filename);let{commentsLen:t}=this.state;this.comments.length!==t&&(this.comments.length=t),this.comments.push(e),this.state.commentsLen++}processComment(e){let{commentStack:t}=this.state,r=t.length;if(r===0)return;let i=r-1,a=t[i];a.start===e.end&&(a.leadingNode=e,i--);let s=e.start;for(;i>=0;i--){let o=t[i],_=o.end;if(_>s)o.containingNode=e,this.finalizeComment(o),t.splice(i,1);else{_===s&&(o.trailingNode=e);break}}}finalizeComment(e){let{comments:t}=e;if(e.leadingNode!==null||e.trailingNode!==null)e.leadingNode!==null&&ar(e.leadingNode,t),e.trailingNode!==null&&ni(e.trailingNode,t);else{let r=e.containingNode,i=e.start;if(this.input.charCodeAt(this.offsetToSourcePos(i)-1)===44)switch(r.type){case"ObjectExpression":case"ObjectPattern":Q(r,r.properties,e);break;case"CallExpression":case"NewExpression":case"OptionalCallExpression":Q(r,r.arguments,e);break;case"ImportExpression":Q(r,[r.source,r.options??null],e);break;case"FunctionDeclaration":case"FunctionExpression":case"ArrowFunctionExpression":case"ObjectMethod":case"ClassMethod":case"ClassPrivateMethod":case"TSTypeParameterDeclaration":Q(r,r.params,e);break;case"ArrayExpression":case"ArrayPattern":Q(r,r.elements,e);break;case"ExportNamedDeclaration":case"ImportDeclaration":Q(r,r.specifiers,e);break;case"ImportNamespaceSpecifier":case"ExportNamespaceSpecifier":Q(r,r.exportsFilter??[],e);break;case"TSEnumBody":Q(r,r.members,e);break;case"TSInterfaceBody":Q(r,r.body,e);break;default:St(r,t)}else St(r,t)}}finalizeRemainingComments(){let{commentStack:e}=this.state;for(let t=e.length-1;t>=0;t--)this.finalizeComment(e[t]);this.state.commentStack=[]}resetPreviousNodeTrailingComments(e){let{commentStack:t}=this.state,{length:r}=t;if(r===0)return;let i=t[r-1];i.leadingNode===e&&(i.leadingNode=null)}replaceNodeInPendingComments(e,t){for(let r of this.state.commentStack)r.leadingNode===e&&(r.leadingNode=t),r.trailingNode===e&&(r.trailingNode=t)}takeSurroundingComments(e,t,r){let{commentStack:i}=this.state,a=i.length;if(a===0)return;let s=a-1;for(;s>=0;s--){let o=i[s],_=o.end;if(o.start===r)o.leadingNode=e;else if(_===t)o.trailingNode=e;else if(_<t)break}}},se=class n{flags=2048;get strict(){return(this.flags&1)>0}set strict(e){e?this.flags|=1:this.flags&=-2}startIndex;curLine;lineStart;startLoc;endLoc;init({strictMode:e,sourceType:t,startIndex:r,startLine:i,startColumn:a}){this.strict=e===!1?!1:e===!0?!0:t==="module",this.startIndex=r,this.curLine=i,this.lineStart=-a,this.startLoc=this.endLoc=new z(i,a,r)}errors=[];noArrowAt=[];noArrowParamsConversionAt=[];regExpAllowedAt=-1;get canStartArrow(){return(this.flags&2)>0}set canStartArrow(e){e?this.flags|=2:this.flags&=-3}get inType(){return(this.flags&4)>0}set inType(e){e?this.flags|=4:this.flags&=-5}get noAnonFunctionType(){return(this.flags&8)>0}set noAnonFunctionType(e){e?this.flags|=8:this.flags&=-9}get hasFlowComment(){return(this.flags&16)>0}set hasFlowComment(e){e?this.flags|=16:this.flags&=-17}get isAmbientContext(){return(this.flags&32)>0}set isAmbientContext(e){e?this.flags|=32:this.flags&=-33}get inAbstractClass(){return(this.flags&64)>0}set inAbstractClass(e){e?this.flags|=64:this.flags&=-65}get inDisallowConditionalTypesContext(){return(this.flags&128)>0}set inDisallowConditionalTypesContext(e){e?this.flags|=128:this.flags&=-129}get inConditionalConsequent(){return(this.flags&256)>0}set inConditionalConsequent(e){e?this.flags|=256:this.flags&=-257}get inHackPipelineBody(){return(this.flags&512)>0}set inHackPipelineBody(e){e?this.flags|=512:this.flags&=-513}get seenTopicReference(){return(this.flags&1024)>0}set seenTopicReference(e){e?this.flags|=1024:this.flags&=-1025}labels=[];commentsLen=0;commentStack=[];pos=0;type=138;value=null;start=0;end=0;lastTokEndLoc=null;lastTokStartLoc=null;context=[L.brace];get canStartJSXElement(){return(this.flags&2048)>0}set canStartJSXElement(e){e?this.flags|=2048:this.flags&=-2049}get containsEsc(){return(this.flags&4096)>0}set containsEsc(e){e?this.flags|=4096:this.flags&=-4097}firstInvalidTemplateEscapePos=null;get hasTopLevelAwait(){return(this.flags&8192)>0}set hasTopLevelAwait(e){e?this.flags|=8192:this.flags&=-8193}strictErrors=new Map;tokensLength=0;curPosition(){return new z(this.curLine,this.pos-this.lineStart,this.pos+this.startIndex)}clone(){let e=new n;return e.flags=this.flags,e.startIndex=this.startIndex,e.curLine=this.curLine,e.lineStart=this.lineStart,e.startLoc=this.startLoc,e.endLoc=this.endLoc,e.errors=this.errors.slice(),e.noArrowAt=this.noArrowAt.slice(),e.noArrowParamsConversionAt=this.noArrowParamsConversionAt.slice(),e.regExpAllowedAt=this.regExpAllowedAt,e.labels=this.labels.slice(),e.commentsLen=this.commentsLen,e.commentStack=this.commentStack.slice(),e.pos=this.pos,e.type=this.type,e.value=this.value,e.start=this.start,e.end=this.end,e.lastTokEndLoc=this.lastTokEndLoc,e.lastTokStartLoc=this.lastTokStartLoc,e.context=this.context.slice(),e.firstInvalidTemplateEscapePos=this.firstInvalidTemplateEscapePos,e.strictErrors=this.strictErrors,e.tokensLength=this.tokensLength,e}},si=function(e){return e>=48&&e<=57},$e={decBinOct:new Set([46,66,69,79,95,98,101,111,43,45]),hex:new Set([46,88,95,120])},vt={bin:n=>n===48||n===49,oct:n=>n>=48&&n<=55,dec:n=>n>=48&&n<=57,hex:n=>n>=48&&n<=57||n>=65&&n<=70||n>=97&&n<=102};function qe(n,e,t,r,i,a){let s=t,o=r,_=i,m="",l=null,c=t,{length:g}=e;for(;;){if(t>=g){a.unterminated(s,o,_),m+=e.slice(c,t);break}let d=e.charCodeAt(t);if(oi(n,d,e,t)){m+=e.slice(c,t);break}if(d===92){m+=e.slice(c,t);let x=_i(e,t,r,i,n==="template",a);x.ch===null&&!l?l={pos:t,lineStart:r,curLine:i}:m+=x.ch,{pos:t,lineStart:r,curLine:i}=x,c=t}else d===8232||d===8233?(++t,++i,r=t):d===10||d===13?n==="template"?(m+=e.slice(c,t)+`
`,++t,d===13&&e.charCodeAt(t)===10&&++t,++i,c=r=t):a.unterminated(s,o,_):++t}return{pos:t,str:m,firstInvalidLoc:l,lineStart:r,curLine:i}}function oi(n,e,t,r){return n==="template"?e===96||e===36&&t.charCodeAt(r+1)===123:e===(n==="double"?34:39)}function _i(n,e,t,r,i,a){let s=!i;e++;let o=m=>({pos:e,ch:m,lineStart:t,curLine:r}),_=n.charCodeAt(e++);switch(_){case 110:return o(`
`);case 114:return o("\r");case 120:{let m;return{code:m,pos:e}=oe(n,e,t,r,2,!1,s,a),o(m===null?null:String.fromCharCode(m))}case 117:{let m;return{code:m,pos:e}=sr(n,e,t,r,s,a),o(m===null?null:String.fromCodePoint(m))}case 116:return o("	");case 98:return o("\b");case 118:return o("\v");case 102:return o("\f");case 13:n.charCodeAt(e)===10&&++e;case 10:t=e,++r;case 8232:case 8233:return o("");case 56:case 57:if(i)return o(null);a.strictNumericEscape(e-1,t,r);default:if(_>=48&&_<=55){let m=e-1,c=/^[0-7]+/.exec(n.slice(m,e+2))[0],g=parseInt(c,8);g>255&&(c=c.slice(0,-1),g=parseInt(c,8)),e+=c.length-1;let d=n.charCodeAt(e);if(c!=="0"||d===56||d===57){if(i)return o(null);a.strictNumericEscape(m,t,r)}return o(String.fromCharCode(g))}return o(String.fromCharCode(_))}}function oe(n,e,t,r,i,a,s,o){let _=e,m;return{n:m,pos:e}=nr(n,e,t,r,16,i,a,!1,o,!s),m===null&&(s?o.invalidEscapeSequence(_,t,r):e=_-1),{code:m,pos:e}}function nr(n,e,t,r,i,a,s,o,_,m){let l=e,c=i===16?$e.hex:$e.decBinOct,g=i===16?vt.hex:i===10?vt.dec:i===8?vt.oct:vt.bin,d=!1,x=0;for(let f=0,u=a??1/0;f<u;++f){let P=n.charCodeAt(e),C;if(P===95&&o!=="bail"){let V=n.charCodeAt(e-1),E=n.charCodeAt(e+1);if(o){if(Number.isNaN(E)||!g(E)||c.has(V)){if(m)return{n:null,pos:e};_.unexpectedNumericSeparator(e,t,r)}}else{if(m)return{n:null,pos:e};_.numericSeparatorInEscapeSequence(e,t,r)}++e;continue}if(P>=97?C=P-97+10:P>=65?C=P-65+10:si(P)?C=P-48:C=1/0,C>=i)if(C<=9){if(m)return{n:null,pos:e};_.invalidDigit(e,t,r,i),C=0}else if(s)C=0,d=!0;else break;++e,x=x*i+C}return e===l||a!=null&&e-l!==a||d?{n:null,pos:e}:{n:x,pos:e}}function sr(n,e,t,r,i,a){let s=n.charCodeAt(e),o;if(s===123){if(++e,{code:o,pos:e}=oe(n,e,t,r,n.indexOf("}",e)-e,!0,i,a),++e,o!==null&&o>1114111)if(i)a.invalidCodePoint(e,t,r);else return{code:null,pos:e}}else({code:o,pos:e}=oe(n,e,t,r,4,!1,i,a));return{code:o,pos:e}}function ut(n,e,t){return new z(t,n-e,n)}var mi=new Set([103,109,115,105,121,117,100,118]),_e=class{constructor(e){let t=e.startIndex||0;this.type=e.type,this.value=e.value,this.start=t+e.start,this.end=t+e.end,this.loc=new ht(e.startLoc,e.endLoc)}},kt,me=class extends ne{isLookahead;tokens=[];constructor(e,t){super(),this.state=new se,this.state.init(e),this.input=t,this.length=t.length,this.comments=[],this.isLookahead=!1,(!kt||kt.length<(this.length+1)*2)&&(kt=new Uint32Array((this.length+1)*2)),this.locData=kt}setLoc(e){let t=this.offsetToSourcePos(e.index);this.locData[t*2]=e.line,this.locData[t*2+1]=e.column}getLoc(e){let t=this.offsetToSourcePos(e);return new z(this.locData[t*2],this.locData[t*2+1],e)}pushToken(e){this.tokens.length=this.state.tokensLength,this.tokens.push(e),++this.state.tokensLength}next(){this.checkKeywordEscapes(),this.optionFlags&512&&this.pushToken(new _e(this.state)),this.state.lastTokEndLoc=this.state.endLoc,this.state.lastTokStartLoc=this.state.startLoc,this.nextToken()}eat(e){return this.match(e)?(this.next(),!0):!1}match(e){return this.state.type===e}createLookaheadState(e){return{pos:e.pos,value:null,type:e.type,start:e.start,end:e.end,context:[this.curContext()],inType:e.inType,strict:e.strict,startLoc:e.startLoc,lastTokEndLoc:e.lastTokEndLoc,curLine:e.curLine,lineStart:e.lineStart,curPosition:e.curPosition}}lookahead(){let e=this.state;this.state=this.createLookaheadState(e),this.isLookahead=!0,this.nextToken(),this.isLookahead=!1;let t=this.state;return this.state=e,t}nextTokenStart(){return this.nextTokenStartSince(this.state.pos)}nextTokenStartSince(e){let t=this.inModule||!(this.optionFlags&16384)?ti:ei;return t.lastIndex=e,t.test(this.input)?t.lastIndex:e}lookaheadCharCode(){return this.lookaheadCharCodeSince(this.state.pos)}lookaheadCharCodeSince(e){return this.input.charCodeAt(this.nextTokenStartSince(e))}nextTokenInLineStart(){return this.nextTokenInLineStartSince(this.state.pos)}nextTokenInLineStartSince(e){return Ht.lastIndex=e,Ht.test(this.input)?Ht.lastIndex:e}lookaheadInLineCharCode(){return this.input.charCodeAt(this.nextTokenInLineStart())}codePointAtPos(e){let t=this.input.charCodeAt(e);if((t&64512)===55296&&++e<this.input.length){let r=this.input.charCodeAt(e);(r&64512)===56320&&(t=65536+((t&1023)<<10)+(r&1023))}return t}setStrict(e){this.state.strict=e,e&&(this.state.strictErrors.forEach(([t,r])=>this.raise(t,r)),this.state.strictErrors.clear())}curContext(){return this.state.context[this.state.context.length-1]}nextToken(){if(this.skipSpace(),this.state.start=this.state.pos,this.isLookahead||(this.state.startLoc=this.state.curPosition()),this.state.pos>=this.length){this.finishToken(138);return}this.getTokenFromCode(this.codePointAtPos(this.state.pos))}skipBlockComment(e){let t;this.isLookahead||(t=this.state.curPosition());let r=this.state.pos,i=this.input.indexOf(e,r+2);if(i===-1)throw this.raise(p.UnterminatedComment,this.state.curPosition());for(this.state.pos=i+e.length,Ot.lastIndex=r+2;Ot.test(this.input)&&Ot.lastIndex<=i;)++this.state.curLine,this.state.lineStart=Ot.lastIndex;if(this.isLookahead)return;let a={type:"CommentBlock",value:this.input.slice(r+2,i),start:this.sourceToOffsetPos(r),end:this.sourceToOffsetPos(i+e.length),loc:new ht(t,this.state.curPosition())};return this.optionFlags&512&&this.pushToken(a),a}skipLineComment(e){let t=this.state.pos,r;this.isLookahead||(r=this.state.curPosition());let i=this.input.charCodeAt(this.state.pos+=e);if(this.state.pos<this.length)for(;!ct(i)&&++this.state.pos<this.length;)i=this.input.charCodeAt(this.state.pos);if(this.isLookahead)return;let a=this.state.pos,o={type:"CommentLine",value:this.input.slice(t+e,a),start:this.sourceToOffsetPos(t),end:this.sourceToOffsetPos(a),loc:new ht(r,this.state.curPosition())};return this.optionFlags&512&&this.pushToken(o),o}skipSpace(){let e=this.state.pos,t=(this.optionFlags&8192)>0,r;t:for(;this.state.pos<this.length;){let i=this.input.charCodeAt(this.state.pos);switch(i){case 32:case 160:case 9:++this.state.pos;break;case 13:this.input.charCodeAt(this.state.pos+1)===10&&++this.state.pos;case 10:case 8232:case 8233:++this.state.pos,++this.state.curLine,this.state.lineStart=this.state.pos;break;case 47:switch(this.input.charCodeAt(this.state.pos+1)){case 42:{let a=this.skipBlockComment("*/");a!==void 0&&(this.addComment(a),t&&(r??=[]).push(a));break}case 47:{let a=this.skipLineComment(2);a!==void 0&&(this.addComment(a),t&&(r??=[]).push(a));break}default:break t}break;default:if(ri(i))++this.state.pos;else if(i===45&&!this.inModule&&this.optionFlags&16384){let a=this.state.pos;if(this.input.charCodeAt(a+1)===45&&this.input.charCodeAt(a+2)===62&&(e===0||this.state.lineStart>e)){let s=this.skipLineComment(3);s!==void 0&&(this.addComment(s),t&&(r??=[]).push(s))}else break t}else if(i===60&&!this.inModule&&this.optionFlags&16384){let a=this.state.pos;if(this.input.charCodeAt(a+1)===33&&this.input.charCodeAt(a+2)===45&&this.input.charCodeAt(a+3)===45){let s=this.skipLineComment(4);s!==void 0&&(this.addComment(s),t&&(r??=[]).push(s))}else break t}else break t}}if(r?.length){let i=this.state.pos,a={start:this.sourceToOffsetPos(e),end:this.sourceToOffsetPos(i),comments:r,leadingNode:null,trailingNode:null,containingNode:null};this.state.commentStack.push(a)}}finishToken(e,t){this.state.end=this.state.pos,this.state.endLoc=this.state.curPosition();let r=this.state.type;this.state.type=e,this.state.value=t,this.isLookahead||this.updateContext(r)}replaceToken(e){this.state.type=e,this.updateContext()}readToken_numberSign(){if(this.state.pos===0&&this.readToken_interpreter())return;let e=this.state.pos+1,t=this.codePointAtPos(e);if(t>=48&&t<=57)throw this.raise(p.UnexpectedDigitAfterHash,this.state.curPosition());J(t)?(++this.state.pos,this.finishToken(137,this.readWord1(t))):t===92?(++this.state.pos,this.finishToken(137,this.readWord1())):this.finishOp(23,1)}readToken_dot(){let e=this.input.charCodeAt(this.state.pos+1);if(e>=48&&e<=57){this.readNumber(!0);return}e===46&&this.input.charCodeAt(this.state.pos+2)===46?(this.state.pos+=3,this.finishToken(17)):(++this.state.pos,this.finishToken(12))}readToken_slash(){this.input.charCodeAt(this.state.pos+1)===61?this.finishOp(27,2):this.finishOp(52,1)}readToken_interpreter(){if(this.state.pos!==0||this.length<2)return!1;let e=this.input.charCodeAt(this.state.pos+1);if(e!==33)return!1;let t=this.state.pos;for(this.state.pos+=1;!ct(e)&&++this.state.pos<this.length;)e=this.input.charCodeAt(this.state.pos);let r=this.input.slice(t+2,this.state.pos);return this.finishToken(24,r),!0}readToken_mult_modulo(e){let t=e===42?51:50,r=1,i=this.input.charCodeAt(this.state.pos+1);e===42&&i===42&&(r++,i=this.input.charCodeAt(this.state.pos+2),t=53),i===61&&!this.state.inType&&(r++,t=e===37?29:26),this.finishOp(t,r)}readToken_pipe_amp(e){let t=this.input.charCodeAt(this.state.pos+1);if(t===e){this.input.charCodeAt(this.state.pos+2)===61?this.finishOp(26,3):this.finishOp(e===124?37:38,2);return}if(e===124&&t===62){this.finishOp(35,2);return}if(t===61){this.finishOp(26,2);return}this.finishOp(e===124?39:41,1)}readToken_caret(){let e=this.input.charCodeAt(this.state.pos+1);e===61&&!this.state.inType?this.finishOp(28,2):e===94&&this.hasPlugin(["pipelineOperator",{proposal:"hack",topicToken:"^^"}])?(this.finishOp(33,2),this.input.codePointAt(this.state.pos)===94&&this.unexpected()):this.finishOp(40,1)}readToken_atSign(){this.input.charCodeAt(this.state.pos+1)===64&&this.hasPlugin(["pipelineOperator",{proposal:"hack",topicToken:"@@"}])?this.finishOp(34,2):this.finishOp(22,1)}readToken_plus_min(e){let t=this.input.charCodeAt(this.state.pos+1);if(t===e){this.finishOp(30,2);return}t===61?this.finishOp(26,2):this.finishOp(49,1)}readToken_lt(){let{pos:e}=this.state,t=this.input.charCodeAt(e+1);if(t===60){if(this.input.charCodeAt(e+2)===61){this.finishOp(26,3);return}this.finishOp(47,2);return}if(t===61){this.finishOp(45,2);return}this.finishOp(43,1)}readToken_gt(){let{pos:e}=this.state,t=this.input.charCodeAt(e+1);if(t===62){let r=this.input.charCodeAt(e+2)===62?3:2;if(this.input.charCodeAt(e+r)===61){this.finishOp(26,r+1);return}this.finishOp(48,r);return}if(t===61){this.finishOp(45,2);return}this.finishOp(44,1)}readToken_eq_excl(e){let t=this.input.charCodeAt(this.state.pos+1);if(t===61){this.finishOp(42,this.input.charCodeAt(this.state.pos+2)===61?3:2);return}if(e===61&&t===62){this.state.pos+=2,this.finishToken(15);return}this.finishOp(e===61?25:31,1)}readToken_question(){let e=this.input.charCodeAt(this.state.pos+1),t=this.input.charCodeAt(this.state.pos+2);e===63?t===61?this.finishOp(26,3):this.finishOp(36,2):e===46&&!(t>=48&&t<=57)?(this.state.pos+=2,this.finishToken(14)):(++this.state.pos,this.finishToken(13))}getTokenFromCode(e){switch(e){case 46:this.readToken_dot();return;case 40:++this.state.pos,this.finishToken(6);return;case 41:++this.state.pos,this.finishToken(7);return;case 59:++this.state.pos,this.finishToken(9);return;case 44:++this.state.pos,this.finishToken(8);return;case 91:++this.state.pos,this.finishToken(0);return;case 93:++this.state.pos,this.finishToken(1);return;case 123:++this.state.pos,this.finishToken(2);return;case 125:++this.state.pos,this.finishToken(4);return;case 58:this.hasPlugin("functionBind")&&this.input.charCodeAt(this.state.pos+1)===58?this.finishOp(11,2):(++this.state.pos,this.finishToken(10));return;case 63:this.readToken_question();return;case 96:this.readTemplateToken();return;case 48:{let t=this.input.charCodeAt(this.state.pos+1);if(t===120||t===88){this.readRadixNumber(16);return}if(t===111||t===79){this.readRadixNumber(8);return}if(t===98||t===66){this.readRadixNumber(2);return}}case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:this.readNumber(!1);return;case 34:case 39:this.readString(e);return;case 47:this.readToken_slash();return;case 37:case 42:this.readToken_mult_modulo(e);return;case 124:case 38:this.readToken_pipe_amp(e);return;case 94:this.readToken_caret();return;case 43:case 45:this.readToken_plus_min(e);return;case 60:this.readToken_lt();return;case 62:this.readToken_gt();return;case 61:case 33:this.readToken_eq_excl(e);return;case 126:this.finishOp(32,1);return;case 64:this.readToken_atSign();return;case 35:this.readToken_numberSign();return;case 92:this.readWord();return;default:if(J(e)){this.readWord(e);return}}throw this.raise(p.InvalidOrUnexpectedToken,this.state.curPosition(),{unexpected:String.fromCodePoint(e)})}finishOp(e,t){let r=this.input.slice(this.state.pos,this.state.pos+t);this.state.pos+=t,this.finishToken(e,r)}readRegexp(){let e=this.state.startLoc,t=this.state.start+1,r,i,{pos:a}=this.state;for(;;++a){if(a>=this.length)throw this.raise(p.UnterminatedRegExp,H(e,1));let m=this.input.charCodeAt(a);if(ct(m))throw this.raise(p.UnterminatedRegExp,H(e,1));if(r)r=!1;else{if(m===91)i=!0;else if(m===93&&i)i=!1;else if(m===47&&!i)break;r=m===92}}let s=this.input.slice(t,a);++a;let o="",_=()=>H(e,a+2-t);for(;a<this.length;){let m=this.codePointAtPos(a),l=String.fromCharCode(m);if(mi.has(m))m===118?o.includes("u")&&this.raise(p.IncompatibleRegExpUVFlags,_()):m===117&&o.includes("v")&&this.raise(p.IncompatibleRegExpUVFlags,_()),o.includes(l)&&this.raise(p.DuplicateRegExpFlags,_());else if(at(m)||m===92)this.raise(p.MalformedRegExpFlags,_());else break;++a,o+=l}this.state.pos=a,this.finishToken(136,{pattern:s,flags:o})}readInt(e,t,r=!1,i=!0){let{n:a,pos:s}=nr(this.input,this.state.pos,this.state.lineStart,this.state.curLine,e,t,r,i,this.errorHandlers_readInt,!1);return this.state.pos=s,a}readLiteralInt(e){let t=this.state.pos,r=0,i;for(;;){i=this.input.charCodeAt(t);let a;if(i>=48&&i<=57)a=i-48;else{if(a=(i|32)-97,a<0||a>5)break;a+=10}if(a>=e)break;r=r*e+a,++t}return i===95||i>=48&&i<=57?this.readInt(e):t===this.state.pos?null:(this.state.pos=t,r)}readRadixNumber(e){let t=this.state.pos,r=this.state.curPosition();this.state.pos+=2;let i=this.readLiteralInt(e),a=this.state.pos;i==null&&this.raise(p.InvalidDigit,H(r,2),{radix:e});let s=this.input.charCodeAt(this.state.pos)===110;if(s&&++this.state.pos,J(this.codePointAtPos(this.state.pos)))throw this.raise(p.NumberIdentifier,this.state.curPosition());if(s||i!==null&&i>Number.MAX_SAFE_INTEGER){let o=this.input.slice(t,a).replaceAll("_","");if(s){this.finishToken(135,o);return}i=Number(e!==16&&this.optionFlags&4096?o.replace(e===2?/[2-9]/g:/[89]/g,"0"):o)}this.finishToken(134,i)}readNumber(e){let t=this.state.pos,r=this.state.curPosition(),i=!1,a=!1,s=e?0:this.readLiteralInt(10),o=this.state.pos-t>=2&&this.input.charCodeAt(t)===48;if(o){let d=this.input.slice(t,this.state.pos);if(this.recordStrictModeErrors(p.StrictOctalLiteral,r),!this.state.strict){let x=d.indexOf("_");x>0&&this.raise(p.ZeroDigitNumericSeparator,H(r,x))}a=!/[89]/.test(d)}let _=this.input.charCodeAt(this.state.pos);_===46&&!a&&(++this.state.pos,this.readLiteralInt(10),i=!0,_=this.input.charCodeAt(this.state.pos)),(_===69||_===101)&&!a&&(_=this.input.charCodeAt(++this.state.pos),(_===43||_===45)&&++this.state.pos,this.readLiteralInt(10)===null&&this.raise(p.InvalidOrMissingExponent,r),i=!0,_=this.input.charCodeAt(this.state.pos));let m=this.state.pos,l=_===110;if(l&&((i||o)&&this.raise(p.InvalidBigIntLiteral,r),++this.state.pos),J(this.codePointAtPos(this.state.pos)))throw this.raise(p.NumberIdentifier,this.state.curPosition());if(!i&&!l&&!o&&s<=Number.MAX_SAFE_INTEGER){this.finishToken(134,s);return}let c=this.input.slice(t,m).replaceAll("_","");if(l){this.finishToken(135,c);return}let g=a?parseInt(c,8):parseFloat(c);this.finishToken(134,g)}readCodePoint(e){let{code:t,pos:r}=sr(this.input,this.state.pos,this.state.lineStart,this.state.curLine,e,this.errorHandlers_readCodePoint);return this.state.pos=r,t}readString(e){let{str:t,pos:r,curLine:i,lineStart:a}=qe(e===34?"double":"single",this.input,this.state.pos+1,this.state.lineStart,this.state.curLine,this.errorHandlers_readStringContents_string);this.state.pos=r+1,this.state.lineStart=a,this.state.curLine=i,this.finishToken(133,t)}readTemplateContinuation(){this.match(4)||this.unexpected(null,4),this.state.pos--,this.readTemplateToken()}readTemplateToken(){let e=this.input[this.state.pos],{str:t,firstInvalidLoc:r,pos:i,curLine:a,lineStart:s}=qe("template",this.input,this.state.pos+1,this.state.lineStart,this.state.curLine,this.errorHandlers_readStringContents_template);this.state.pos=i+1,this.state.lineStart=s,this.state.curLine=a,r&&(this.state.firstInvalidTemplateEscapePos=new z(r.curLine,r.pos-r.lineStart,this.sourceToOffsetPos(r.pos))),this.input.codePointAt(i)===96?this.finishToken(20,r?null:e+t+"`"):(this.state.pos++,this.finishToken(21,r?null:e+t+"${"))}recordStrictModeErrors(e,t){if(this.isLookahead)return;let r=t.index;this.state.strict&&!this.state.strictErrors.has(r)?this.raise(e,t):this.state.strictErrors.set(r,[e,t])}readWord1(e){this.state.containsEsc=!1;let t="",r=this.state.pos,i=this.state.pos;for(e!==void 0&&(this.state.pos+=e<=65535?1:2);this.state.pos<this.length;){let a=this.codePointAtPos(this.state.pos);if(at(a))this.state.pos+=a<=65535?1:2;else if(a===92){this.state.containsEsc=!0,t+=this.input.slice(i,this.state.pos);let s=this.state.curPosition(),o=this.state.pos===r?J:at;if(this.input.charCodeAt(++this.state.pos)!==117){this.raise(p.MissingUnicodeEscape,this.state.curPosition()),i=this.state.pos-1;continue}++this.state.pos;let _=this.readCodePoint(!0);_!==null&&(o(_)||this.raise(p.EscapedCharNotAnIdentifier,s),t+=String.fromCodePoint(_)),i=this.state.pos}else break}return t+this.input.slice(i,this.state.pos)}readWord(e){let t=this.readWord1(e),r=ye.get(t);r!==void 0?this.finishToken(r,it(r)):this.finishToken(131,t)}checkKeywordEscapes(){let{type:e}=this.state;Bt(e)&&this.state.containsEsc&&this.raise(p.InvalidEscapedReservedWord,this.state.startLoc,{reservedWord:it(e)})}raise(e,t,r={}){let i=t instanceof z?t:typeof t=="number"?this.getLoc(t):this.optionFlags&256?t.loc.start:this.getLoc(t.start),a=t instanceof z?i.index:typeof t=="number"?t:t.start,s=e(i,a,r);if(!(this.optionFlags&4096))throw s;return this.isLookahead||this.state.errors.push(s),s}raiseOverwrite(e,t,r={}){let i=t instanceof z?t:this.optionFlags&256?t.loc.start:this.getLoc(t.start),a=t instanceof z?i.index:t.start,s=this.state.errors;for(let o=s.length-1;o>=0;o--){let _=s[o];if(_.pos===a)return s[o]=e(i,a,r);if(_.pos<a)break}return this.raise(e,i,r)}updateContext(e){}unexpected(e,t){throw this.raise(p.UnexpectedToken,e??this.state.startLoc,{expected:t?it(t):null})}expectPlugin(e,t){if(this.hasPlugin(e))return!0;throw this.raise(p.MissingPlugin,t??this.state.startLoc,{missingPlugin:[e]})}expectOnePlugin(e){if(!e.some(t=>this.hasPlugin(t)))throw this.raise(p.MissingOneOfPlugins,this.state.startLoc,{missingPlugin:e})}errorBuilder(e){return(t,r,i)=>{this.raise(e,ut(t,r,i))}}errorHandlers_readInt={invalidDigit:(e,t,r,i)=>{this.raise(p.InvalidDigit,ut(e,t,r),{radix:i})},numericSeparatorInEscapeSequence:this.errorBuilder(p.NumericSeparatorInEscapeSequence),unexpectedNumericSeparator:this.errorBuilder(p.UnexpectedNumericSeparator)};errorHandlers_readCodePoint={...this.errorHandlers_readInt,invalidEscapeSequence:this.errorBuilder(p.InvalidEscapeSequence),invalidCodePoint:this.errorBuilder(p.InvalidCodePoint)};errorHandlers_readStringContents_string={...this.errorHandlers_readCodePoint,strictNumericEscape:(e,t,r)=>{this.recordStrictModeErrors(p.StrictNumericEscape,ut(e,t,r))},unterminated:(e,t,r)=>{throw this.raise(p.UnterminatedString,ut(e-1,t,r))}};errorHandlers_readStringContents_template={...this.errorHandlers_readCodePoint,strictNumericEscape:this.errorBuilder(p.StrictNumericEscape),unterminated:(e,t,r)=>{throw this.raise(p.UnterminatedTemplate,ut(e,t,r))}}},pe=class{privateNames=new Set;loneAccessors=new Map;undefinedPrivateNames=new Map},le=class{parser;stack=[];constructor(e){this.parser=e}current(){return this.stack[this.stack.length-1]}enter(){this.stack.push(new pe)}exit(){let e=this.stack.pop(),t=this.current();for(let[r,i]of Array.from(e.undefinedPrivateNames))t?t.undefinedPrivateNames.has(r)||t.undefinedPrivateNames.set(r,i):this.parser.raise(p.InvalidPrivateFieldResolution,i,{identifierName:r})}declarePrivateName(e,t,r){let{privateNames:i,loneAccessors:a,undefinedPrivateNames:s}=this.current(),o=i.has(e);if(t&3){let _=o&&a.get(e);if(_){let m=_&4,l=t&4,c=_&3,g=t&3;o=c===g||m!==l,o||a.delete(e)}else o||a.set(e,t)}o&&this.parser.raise(p.PrivateNameRedeclaration,r,{identifierName:e}),i.add(e),s.delete(e)}usePrivateName(e,t){let r;for(r of this.stack)if(r.privateNames.has(e))return;r?r.undefinedPrivateNames.set(e,t):this.parser.raise(p.InvalidPrivateFieldResolution,t,{identifierName:e})}},mt=class{constructor(e=0){this.type=e}canBeArrowParameterDeclaration(){return this.type===2||this.type===1}isCertainlyParameterDeclaration(){return this.type===3}isInitializer(){return this.type===4}},Dt=class extends mt{declarationErrors=new Map;constructor(e){super(e)}recordDeclarationError(e,t){this.declarationErrors.set(t,e)}clearDeclarationError(e){this.declarationErrors.delete(e)}iterateErrors(e){this.declarationErrors.forEach(e)}},de=class{parser;stack=[new mt];constructor(e){this.parser=e}enter(e){this.stack.push(e)}exit(){this.stack.pop()}canBeInParameters(){let e=this.stack[this.stack.length-1];return e.canBeArrowParameterDeclaration()||e.isCertainlyParameterDeclaration()}recordParameterInitializerError(e,t){let{stack:r}=this,i=r.length-1,a=r[i];for(;!a.isCertainlyParameterDeclaration();){if(a.canBeArrowParameterDeclaration())a.recordDeclarationError(e,t);else if(!a.isInitializer())return;a=r[--i]}this.parser.raise(e,t)}recordArrowParameterBindingError(e,t){let{stack:r}=this,i=r[r.length-1],a=t.start;if(i.isCertainlyParameterDeclaration())this.parser.raise(e,a);else if(i.canBeArrowParameterDeclaration())i.recordDeclarationError(e,a);else return}recordAsyncArrowParametersError(e){let{stack:t}=this;for(let r=t.length-1;;r--){let i=t[r];if(i.canBeArrowParameterDeclaration())i.type===2&&i.recordDeclarationError(p.AwaitBindingIdentifier,e);else if(!i.isInitializer())return}}validateAsPattern(){let{stack:e}=this,t=e[e.length-1];t.canBeArrowParameterDeclaration()&&t.iterateErrors((r,i)=>{this.parser.raise(r,i);for(let a=e.length-2;;a--){let s=e[a];if(s.canBeArrowParameterDeclaration())s.clearDeclarationError(i);else if(!s.isInitializer())break}})}};function pi(){return new Dt(1)}function li(){return new Dt(2)}var ce=new mt,di=new mt(3),ci=new mt(4),he=class{stacks=[];enter(e){this.stacks.push(e)}exit(){this.stacks.pop()}currentFlags(){return this.stacks[this.stacks.length-1]}get hasAwait(){return(this.currentFlags()&2)>0}get hasYield(){return(this.currentFlags()&1)>0}get hasReturn(){return(this.currentFlags()&4)>0}get hasIn(){return(this.currentFlags()&8)>0}get inFSharpPipelineDirectBody(){return(this.currentFlags()&16)===0}};function Nt(n,e){return(n?2:0)|(e?1:0)}var ge=class extends me{addExtra(e,t,r,i=!0){if(!e)return;let{extra:a}=e;a==null&&(a={},e.extra=a),i?a[t]=r:Object.defineProperty(a,t,{enumerable:i,value:r})}isContextual(e){return this.state.type===e&&!this.state.containsEsc}isUnparsedContextual(e,t){if(this.input.startsWith(t,e)){let r=this.input.charCodeAt(e+t.length);return!(at(r)||r===92||(r&64512)===55296)}return!1}isLookaheadContextual(e){let t=this.nextTokenStart();return this.isUnparsedContextual(t,e)}eatContextual(e){return this.isContextual(e)?(this.next(),!0):!1}expectContextual(e,t){if(!this.eatContextual(e)){if(t!=null)throw this.raise(t,this.state.startLoc);this.unexpected(null,e)}}canInsertSemicolon(){return this.match(138)||this.match(4)||this.hasPrecedingLineBreak()}hasPrecedingLineBreak(){return ee(this.input,this.offsetToSourcePos(this.state.lastTokEndLoc.index),this.state.start)}hasFollowingLineBreak(){return ee(this.input,this.state.end,this.nextTokenStart())}isLineTerminator(){return this.eat(9)||this.canInsertSemicolon()}semicolon(e=!0){(e?this.isLineTerminator():this.eat(9))||this.raise(p.MissingSemicolon,this.state.lastTokEndLoc)}expect(e,t){this.eat(e)||this.unexpected(t,e)}snapshotScopeStacks(){return{scopeDepth:this.scope.scopeStack.length,prodParamDepth:this.prodParam.stacks.length,classScopeDepth:this.classScope.stack.length,expressionScopeDepth:this.expressionScope.stack.length}}restoreScopeStacks(e){let{scope:t}=this;for(;t.scopeStack.length>e.scopeDepth;)t.exit();this.prodParam.stacks.length=e.prodParamDepth,this.classScope.stack.length=e.classScopeDepth,this.expressionScope.stack.length=e.expressionScopeDepth}tryParse(e,t=this.state.clone()){let r={node:null},i=this.snapshotScopeStacks();try{let a=e((s=null)=>{throw r.node=s,r});if(this.state.errors.length>t.errors.length){let s=this.state;return this.state=t,this.state.tokensLength=s.tokensLength,{node:a,error:s.errors[t.errors.length],thrown:!1,aborted:!1,failState:s}}return{node:a,error:null,thrown:!1,aborted:!1,failState:null}}catch(a){let s=this.state;if(this.state=t,this.restoreScopeStacks(i),a instanceof SyntaxError)return{node:null,error:a,thrown:!0,aborted:!1,failState:s};if(a===r)return{node:r.node,error:null,thrown:!1,aborted:!0,failState:s};throw a}}checkExpressionErrors(e,t){if(!e)return!1;let{shorthandAssignLoc:r,doubleProtoLoc:i,privateKeyLoc:a,optionalParametersLoc:s,voidPatternLoc:o}=e,_=!!r||!!i||!!s||!!a||!!o;if(!t)return _;r!=null&&this.raise(p.InvalidCoverInitializedName,r),i!=null&&this.raise(p.DuplicateProto,i),a!=null&&this.raise(p.UnexpectedPrivateField,a),s!=null&&this.unexpected(s),o!=null&&this.raise(p.InvalidCoverDiscardElement,o)}isLiteralPropertyName(){return Ye(this.state.type)}isPrivateName(e){return e.type==="PrivateName"}getPrivateNameSV(e){return e.id.name}hasPropertyAsPrivateName(e){return(e.type==="MemberExpression"||e.type==="OptionalMemberExpression")&&this.isPrivateName(e.property)}isObjectProperty(e){return e.type==="ObjectProperty"}isObjectMethod(e){return e.type==="ObjectMethod"}initializeScopes(e=this.options.sourceType==="module"){let t=this.state.labels;this.state.labels=[];let r=this.exportedIdentifiers;this.exportedIdentifiers=new Set;let i=this.inModule;this.inModule=e;let a=this.scope,s=this.getScopeHandler();this.scope=new s(this,e);let o=this.prodParam;this.prodParam=new he;let _=this.classScope;this.classScope=new le(this);let m=this.expressionScope;return this.expressionScope=new de(this),()=>{this.state.labels=t,this.exportedIdentifiers=r,this.inModule=i,this.scope=a,this.prodParam=o,this.classScope=_,this.expressionScope=m}}enterInitialScopes(){let e=0;(this.inModule||this.optionFlags&1)&&(e|=2),this.optionFlags&32&&(e|=1);let t=!this.inModule&&this.options.sourceType==="commonjs";(t||this.optionFlags&2)&&(e|=4),this.prodParam.enter(e);let r=t?514:1;this.optionFlags&4&&(r|=512),this.optionFlags&16&&(r|=48),this.scope.enter(r)}checkDestructuringPrivate(e){let{privateKeyLoc:t}=e;t!==null&&this.expectPlugin("destructuringPrivate",t)}},st=class{shorthandAssignLoc=null;doubleProtoLoc=null;privateKeyLoc=null;optionalParametersLoc=null;voidPatternLoc=null},ot=class{constructor(e,t,r,i){this.start=r,this.end=0,i!==void 0&&(this.loc=new ht(i)),e&128&&(this.range=[r,0]),i!==void 0&&t&&(this.loc.filename=t)}type=""},Ve=ot.prototype,xe=class extends ge{createPosition(e){return e}startNode(){return this.startNodeAt(this.state.startLoc)}startNodeAt(e){this.setLoc(e);let{optionFlags:t,filename:r}=this;return t&256?new ot(t,r,e.index,this.createPosition(e)):new ot(t,r,e.index)}startNodeAtNode(e){let{optionFlags:t,filename:r}=this;return t&256?new ot(t,r,e.start,e.loc.start):new ot(t,r,e.start)}finishNode(e,t){return this.finishNodeAt(e,t,this.state.lastTokEndLoc)}finishNodeAt(e,t,r){e.type=t,e.end=r.index;let{optionFlags:i}=this;return i&256&&(e.loc.end=this.createPosition(r)),i&128&&(e.range[1]=r.index),i&8192&&this.processComment(e),e}finishNodeAtNode(e,t,r){e.type=t,e.end=r.end;let{optionFlags:i}=this;return i&256&&(e.loc.end=r.loc.end),i&128&&(e.range[1]=e.end),i&8192&&this.processComment(e),e}resetStartLocation(e,t){e.start=t.index;let{optionFlags:r}=this;r&256&&(e.loc.start=this.createPosition(t)),r&128&&(e.range[0]=t.index)}resetEndLocation(e,t=this.state.lastTokEndLoc){e.end=t.index;let{optionFlags:r}=this;r&256&&(e.loc.end=this.createPosition(t)),r&128&&(e.range[1]=t.index)}resetStartLocationFromNode(e,t){e.start=t.start;let{optionFlags:r}=this;r&256&&(e.loc.start=t.loc.start),r&128&&(e.range[0]=t.start)}resetEndLocationFromNode(e,t){e.end=t.end;let{optionFlags:r}=this;r&256&&(e.loc.end=t.loc.end),r&128&&(e.range[1]=t.end)}castNodeTo(e,t){return e.type=t,e}cloneIdentifier(e){let{type:t,start:r,end:i,loc:a,range:s,name:o}=e,_=Object.create(Ve);return _.type=t,_.start=r,_.end=i,_.loc=a,_.range=s,_.name=o,e.extra&&(_.extra=e.extra),_}cloneStringLiteral(e){let{type:t,start:r,end:i,loc:a,range:s,extra:o}=e,_=Object.create(Ve);return _.type=t,_.start=r,_.end=i,_.loc=a,_.range=s,_.extra=o,_.value=e.value,_}},Mt=n=>n.type==="ParenthesizedExpression"?Mt(n.expression):n,be=class extends xe{raiseOnce(e,t){let{errors:r}=this.state,i=r.length,a=this.raise(e,t);if(r.length!==i){for(let s=i-1;s>=0;s--)if(r[s].pos===a.pos&&r[s].reasonCode===a.reasonCode){r.pop();return}}}toAssignable(e,t=!1){let r;switch((e.type==="ParenthesizedExpression"||e.extra?.parenthesized)&&(r=Mt(e),t?r.type==="Identifier"?this.expressionScope.recordArrowParameterBindingError(p.InvalidParenthesizedAssignment,e):r.type!=="CallExpression"&&r.type!=="MemberExpression"&&!this.isOptionalMemberExpression(r)&&this.raiseOnce(p.InvalidParenthesizedAssignment,e):this.raiseOnce(p.InvalidParenthesizedAssignment,e)),e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":case"VoidPattern":break;case"ObjectExpression":this.castNodeTo(e,"ObjectPattern");for(let i=0,a=e.properties.length,s=a-1;i<a;i++){let o=e.properties[i],_=i===s;this.toAssignableObjectExpressionProp(o,_,t),_&&o.type==="RestElement"&&e.extra?.trailingCommaLoc&&this.raise(p.RestTrailingComma,e.extra.trailingCommaLoc)}break;case"ObjectProperty":{let{key:i,value:a}=e;this.isPrivateName(i)&&this.classScope.usePrivateName(this.getPrivateNameSV(i),i.start),this.toAssignable(a,t);break}case"SpreadElement":throw new Error("Internal @babel/parser error (this is a bug, please report it). SpreadElement should be converted by .toAssignable's caller.");case"ArrayExpression":this.castNodeTo(e,"ArrayPattern"),this.toAssignableList(e.elements,e.extra?.trailingCommaLoc,t);break;case"AssignmentExpression":e.operator!=="="&&this.raise(p.MissingEqInAssignment,this.optionFlags&256?e.left.loc.end:e.left),this.castNodeTo(e,"AssignmentPattern"),delete e.operator,e.left.type==="VoidPattern"&&this.raise(p.VoidPatternInitializer,e.left),this.toAssignable(e.left,t);break;case"ParenthesizedExpression":this.toAssignable(r,t);break}}toAssignableObjectExpressionProp(e,t,r){if(e.type==="ObjectMethod")this.raise(e.kind==="get"||e.kind==="set"?p.PatternHasAccessor:p.PatternHasMethod,e.key);else if(e.type==="SpreadElement"){this.castNodeTo(e,"RestElement");let i=e.argument;this.checkToRestConversion(i,!1),this.toAssignable(i,r),t||this.raise(p.RestTrailingComma,e)}else this.toAssignable(e,r)}toAssignableList(e,t,r){let i=e.length-1;for(let a=0;a<=i;a++){let s=e[a];s&&(this.toAssignableListItem(e,a,r),s.type==="RestElement"&&(a<i?this.raise(p.RestTrailingComma,s):t&&this.raise(p.RestTrailingComma,t)))}}toAssignableListItem(e,t,r){let i=e[t];if(i.type==="SpreadElement"){this.castNodeTo(i,"RestElement");let a=i.argument;this.checkToRestConversion(a,!0),this.toAssignable(a,r)}else this.toAssignable(i,r)}isAssignable(e,t){switch(e.type){case"Identifier":case"ObjectPattern":case"ArrayPattern":case"AssignmentPattern":case"RestElement":case"VoidPattern":return!0;case"ObjectExpression":{let r=e.properties.length-1;return e.properties.every((i,a)=>i.type!=="ObjectMethod"&&(a===r||i.type!=="SpreadElement")&&this.isAssignable(i))}case"ObjectProperty":return this.isAssignable(e.value);case"SpreadElement":return this.isAssignable(e.argument);case"ArrayExpression":return e.elements.every(r=>r===null||this.isAssignable(r));case"AssignmentExpression":return e.operator==="=";case"ParenthesizedExpression":return this.isAssignable(e.expression);case"MemberExpression":case"OptionalMemberExpression":return!t;default:return!1}}toReferencedList(e,t){return e}parseSpread(e){let t=this.startNode();return this.next(),t.argument=this.parseMaybeAssignAllowIn(e),this.finishNode(t,"SpreadElement")}parseRestBinding(){let e=this.startNode();this.next();let t=this.parseBindingAtom();return t.type==="VoidPattern"&&this.raise(p.UnexpectedVoidPattern,t),e.argument=t,this.finishNode(e,"RestElement")}parseBindingAtom(){switch(this.state.type){case 0:{let e=this.startNode();return this.next(),e.elements=this.parseBindingList(1,93,1),this.finishNode(e,"ArrayPattern")}case 2:return this.parseObjectLike(4,!0);case 84:return this.parseVoidPattern(null)}return this.parseIdentifier()}parseBindingList(e,t,r){let i=r&1,a=[],s=!0;for(;!this.eat(e);)if(s?s=!1:this.expect(8),i&&this.match(8))a.push(null);else{if(this.eat(e))break;if(this.match(17)){let o=this.parseRestBinding();if(r&2&&(o=this.parseFunctionParamType(o)),a.push(o),!this.checkCommaAfterRest(t)){this.expect(e);break}}else{let o=[];if(r&2)for(this.match(22)&&this.hasPlugin("decorators")&&this.raise(p.UnsupportedParameterDecorator,this.state.startLoc);this.match(22);)o.push(this.parseDecorator());a.push(this.parseBindingElement(r,o))}}return a}parseBindingRestProperty(e){return this.next(),this.hasPlugin("discardBinding")&&this.match(84)?(e.argument=this.parseVoidPattern(null),this.raise(p.UnexpectedVoidPattern,e.argument)):e.argument=this.parseIdentifier(),this.checkCommaAfterRest(125),this.finishNode(e,"RestElement")}parseBindingProperty(){let{type:e,startLoc:t}=this.state;if(e===17)return this.parseBindingRestProperty(this.startNode());let r=this.startNode();return e===137?(this.expectPlugin("destructuringPrivate",t),this.classScope.usePrivateName(this.state.value,t),r.key=this.parsePrivateName()):this.parsePropertyName(r),r.method=!1,this.parseObjPropValue(r,t,!1,!1,!0,!1)}parseBindingElement(e,t){let{startLoc:r}=this.state,i=this.parseMaybeDefault();return e&2&&this.parseFunctionParamType(i),t.length&&(i.decorators=t,this.resetStartLocationFromNode(i,t[0])),this.parseMaybeDefault(r,i)}parseFunctionParamType(e){return e}parseMaybeDefault(e,t){if(e??=this.state.startLoc,t=t??this.parseBindingAtom(),!this.eat(25))return t;let r=this.startNodeAt(e);return t.type==="VoidPattern"&&this.raise(p.VoidPatternInitializer,t),r.left=t,r.right=this.parseMaybeAssignAllowIn(),this.finishNode(r,"AssignmentPattern")}isValidLVal(e,t,r,i){switch(e){case"AssignmentPattern":return"left";case"RestElement":return"argument";case"ObjectProperty":return"value";case"ParenthesizedExpression":return"expression";case"ArrayPattern":return"elements";case"ObjectPattern":return"properties";case"VoidPattern":return!0;case"CallExpression":if(!t&&!this.state.strict&&this.optionFlags&16384)return!0}return!1}isOptionalMemberExpression(e){return e.type==="OptionalMemberExpression"}checkLVal(e,t,r=64,i=!1,a=!1,s=!1,o=!1){let _=e.type;if(this.isObjectMethod(e))return;let m=this.isOptionalMemberExpression(e);if(m||_==="MemberExpression"){m&&(this.expectPlugin("optionalChainingAssign",e.start),t.type!=="AssignmentExpression"&&this.raise(p.InvalidLhsOptionalChaining,e,{ancestor:t})),r!==64&&this.raise(p.InvalidPropertyBindingPattern,e);return}if(_==="Identifier"){this.checkIdentifier(e,r,a);let{name:u}=e;i&&(i.has(u)?this.raise(p.ParamDupe,e):i.add(u));return}else _==="VoidPattern"&&t.type==="CatchClause"&&this.raise(p.VoidPatternCatchClauseParam,e);let l=Mt(e);o||=r!==64||l.type==="CallExpression"&&(l.callee.type==="Import"||l.callee.type==="Super");let c=this.isValidLVal(_,o,!(s||e.extra?.parenthesized)&&t.type==="AssignmentExpression",r);if(c===!0)return;if(c===!1){let u=r===64?p.InvalidLhs:p.InvalidLhsBinding;this.raise(u,e,{ancestor:t});return}let g,d;typeof c=="string"?(g=c,d=_==="ParenthesizedExpression"):[g,d]=c;let x=_==="ArrayPattern"||_==="ObjectPattern"?{type:_}:t,f=e[g];if(Array.isArray(f))for(let u of f)u&&this.checkLVal(u,x,r,i,a,d,!0);else f&&this.checkLVal(f,x,r,i,a,d,o)}checkIdentifier(e,t,r=!1){this.checkStrictBindReservedWord(e,t,r),t&8192&&e.name==="let"&&this.raise(p.LetInLexicalBinding,e),t&64||this.declareNameFromIdentifier(e,t)}checkStrictBindReservedWord(e,t,r=!1){this.state.strict&&(r?rr(e.name,this.inModule):er(e.name))&&(t===64?this.raise(p.StrictEvalArguments,e,{referenceName:e.name}):this.raise(p.StrictEvalArgumentsBinding,e,{bindingName:e.name}))}declareNameFromIdentifier(e,t){this.scope.declareName(e.name,t,e.start)}checkToRestConversion(e,t){switch(e.type){case"ParenthesizedExpression":this.checkToRestConversion(e.expression,t);break;case"Identifier":case"MemberExpression":break;case"ArrayExpression":case"ObjectExpression":if(t)break;default:this.raise(p.InvalidRestAssignmentPattern,e)}}checkCommaAfterRest(e){return this.match(8)?(this.raise(this.lookaheadCharCode()===e?p.RestTrailingComma:p.ElementAfterRest,this.state.startLoc),!0):!1}},ue=class extends be{checkProto(e,t,r){if(e.type==="SpreadElement"||this.isObjectMethod(e)||e.computed||e.shorthand)return t;let i=e.key;return(i.type==="Identifier"?i.name:i.value)==="__proto__"?(t&&(r?r.doubleProtoLoc===null&&(r.doubleProtoLoc=this.getLoc(i.start)):this.raise(p.DuplicateProto,i)),!0):t}shouldExitDescending(e){return e.type==="ArrowFunctionExpression"&&!e.extra?.parenthesized}getExpression(){if(this.enterInitialScopes(),this.nextToken(),this.match(138))throw this.raise(p.ParseExpressionEmptyInput,this.state.startLoc);let e=this.parseExpression();if(!this.match(138))throw this.raise(p.ParseExpressionExpectsEOF,this.state.startLoc,{unexpected:this.input.codePointAt(this.state.start)});return this.finalizeRemainingComments(),e.comments=this.comments,e.errors=this.state.errors,this.optionFlags&512&&(e.tokens=or(this.tokens)),e}parseExpression(e,t){return e?this.disallowInAnd(()=>this.parseExpressionBase(t)):this.allowInAnd(()=>this.parseExpressionBase(t))}parseExpressionBase(e){let t=this.state.startLoc,r=this.parseMaybeAssign(e);if(this.match(8)){let i=this.startNodeAt(t);for(i.expressions=[r];this.eat(8);)i.expressions.push(this.parseMaybeAssign(e));return this.toReferencedList(i.expressions),this.finishNode(i,"SequenceExpression")}return r}parseMaybeAssignDisallowIn(e){return this.disallowInAnd(()=>this.parseMaybeAssign(e))}parseMaybeAssignAllowIn(e,t){return this.allowInAnd(()=>this.parseMaybeAssign(e,t))}setOptionalParametersError(e){e.optionalParametersLoc=this.state.startLoc}parseMaybeAssign(e,t){let r=this.state.startLoc,i=this.isContextual(107);if(i&&this.prodParam.hasYield){this.next();let _=this.parseYield(r);return t&&(_=this.parseParenItem(_,r)),_}let a,s=!1;e?a=!1:(e=new st,a=!0,this.expressionScope.canBeInParameters()&&(this.expressionScope.enter(ci),s=!0)),this.state.canStartArrow=!0;let o=this.parseMaybeConditional(e);if(t&&(o=this.parseParenItem(o,r)),Ir(this.state.type)&&!(this.match(27)&&this.state.lastTokEndLoc.index===this.state.regExpAllowedAt)){let _=this.startNodeAt(r),m=this.state.value;if(_.operator=m,this.match(25)){this.toAssignable(o,!0),_.left=o;let l=r.index;e.doubleProtoLoc!=null&&e.doubleProtoLoc.index>=l&&(e.doubleProtoLoc=null),e.shorthandAssignLoc!=null&&e.shorthandAssignLoc.index>=l&&(e.shorthandAssignLoc=null),e.privateKeyLoc!=null&&e.privateKeyLoc.index>=l&&(this.checkDestructuringPrivate(e),e.privateKeyLoc=null),e.voidPatternLoc!=null&&e.voidPatternLoc.index>=l&&(e.voidPatternLoc=null)}else _.left=o;return this.next(),_.right=this.parseMaybeAssign(),s&&this.expressionScope.exit(),this.checkLVal(o,this.finishNode(_,"AssignmentExpression"),void 0,void 0,void 0,void 0,m==="||="||m==="&&="||m==="??="),_}else a&&(this.checkExpressionErrors(e,!0),s&&this.expressionScope.exit());if(i){let{type:_}=this.state;if((this.hasPlugin("v8intrinsic")?wt(_):wt(_)&&!this.match(50))&&!this.isAmbiguousPrefixOrIdentifier())return this.raiseOverwrite(p.YieldNotInGeneratorFunction,r),this.parseYield(r)}return o}parseMaybeConditional(e){let t=this.state.startLoc,r=this.parseExprOps(e);return this.shouldExitDescending(r)?r:this.parseConditional(r,t,e)}parseConditional(e,t,r){if(this.eat(13)){let i=this.startNodeAt(t);return i.test=e,i.consequent=this.parseMaybeAssignAllowIn(),this.expect(10),i.alternate=this.parseMaybeAssign(),this.finishNode(i,"ConditionalExpression")}return e}parseMaybeUnaryOrPrivate(e){return this.match(137)?this.parsePrivateName():this.parseMaybeUnary(e)}parseExprOps(e){let t=this.state.startLoc,r=this.parseMaybeUnaryOrPrivate(e);return this.shouldExitDescending(r)?r:(this.state.canStartArrow=!1,this.parseExprOp(r,t,-1))}isEscapedKeywordOperatorAfterLineBreak(){return Bt(this.state.type)&&this.state.containsEsc&&this.hasPrecedingLineBreak()}isBinaryOperator(e){return Lr(e)&&(this.prodParam.hasIn||e!==54)&&!this.isEscapedKeywordOperatorAfterLineBreak()}parseExprOp(e,t,r){let i=this.state.type,a=this.isBinaryOperator(i);if(this.isPrivateName(e)){let s=this.getPrivateNameSV(e);(r>=It(54)||i!==54||!a)&&this.raise(p.PrivateInExpectedIn,t,{identifierName:s}),this.classScope.usePrivateName(s,t)}if(a){let s=It(i);if(s>r){if(i===35&&(this.expectPlugin("pipelineOperator"),this.prodParam.inFSharpPipelineDirectBody))return e;let o=this.startNodeAt(t);o.left=e,o.operator=this.state.value;let _=i===37||i===38,m=i===36;m&&(s=It(38)),this.next(),o.right=this.parseExprOpRightExpr(i,s);let l=this.finishNode(o,_||m?"LogicalExpression":"BinaryExpression"),c=this.state.type;if(m&&(c===37||c===38)||_&&c===36)throw this.raise(p.MixingCoalesceWithLogical,this.state.startLoc);return this.parseExprOp(l,t,r)}}return e}parseExprOpRightExpr(e,t){switch(e){case 35:switch(this.getPluginOption("pipelineOperator","proposal")){case"hack":return this.withTopicBindingContext(()=>this.parseHackPipeBody());case"fsharp":return this.parseFSharpPipelineBody(t)}default:return this.parseExprOpBaseRightExpr(e,t)}}parseExprOpBaseRightExpr(e,t){let r=this.state.startLoc;return this.parseExprOp(this.parseMaybeUnaryOrPrivate(),r,zr(e)?t-1:t)}parseHackPipeBody(){let{startLoc:e}=this.state,t=this.parseMaybeAssign();return fr.has(t.type)&&!t.extra?.parenthesized&&this.raise(p.PipeUnparenthesizedBody,e,{type:t.type}),this.topicReferenceWasUsedInCurrentContext()||this.raise(p.PipeTopicUnused,e),t}checkExponentialAfterUnary(e){this.match(53)&&this.raise(p.UnexpectedTokenUnaryExponentiation,e.argument)}parseMaybeUnary(e,t){let r=this.state.startLoc,i=this.isContextual(93);if(i&&this.recordAwaitIfAllowed()){this.next();let _=this.parseAwait(r);return t||this.checkExponentialAfterUnary(_),_}let a=this.match(30),s=this.startNode();if(Mr(this.state.type)){s.operator=this.state.value,s.prefix=!0,this.state.canStartArrow=!1,this.match(68)&&this.expectPlugin("throwExpressions");let _=this.match(85);if(this.next(),s.argument=this.parseMaybeUnary(null,!0),this.checkExpressionErrors(e,!0),this.state.strict&&_){let m=Mt(s.argument);m.type==="Identifier"?this.raise(p.StrictDelete,s):this.hasPropertyAsPrivateName(m)&&this.raise(p.DeletePrivateField,s)}if(!a)return t||this.checkExponentialAfterUnary(s),this.finishNode(s,"UnaryExpression")}let o=this.parseUpdate(s,a,e);if(i){let{type:_}=this.state;if((this.hasPlugin("v8intrinsic")?wt(_):wt(_)&&!this.match(50))&&!this.isAmbiguousPrefixOrIdentifier())return this.raiseOverwrite(p.AwaitNotInAsyncContext,r),this.parseAwait(r)}return o}parseUpdate(e,t,r){if(t){let s=this.finishNode(e,"UpdateExpression");return this.checkLVal(s.argument,s),s}let i=this.state.startLoc,a=this.parseExprSubscripts(r);if(this.checkExpressionErrors(r,!1))return a;for(;Dr(this.state.type)&&!this.canInsertSemicolon();){let s=this.startNodeAt(i);s.operator=this.state.value,s.prefix=!1,s.argument=a,this.next(),this.checkLVal(a,a=this.finishNode(s,"UpdateExpression"))}return a}parseExprSubscripts(e){let t=this.state.startLoc;if(e!=null&&(this.match(2)||this.match(0))){let i=new st,a=this.parseExprAtom(i),s=this.parseSubscripts(a,t);return s!==a?this.checkExpressionErrors(i,!0):(e.shorthandAssignLoc??=i.shorthandAssignLoc,e.doubleProtoLoc??=i.doubleProtoLoc,e.privateKeyLoc??=i.privateKeyLoc,e.optionalParametersLoc??=i.optionalParametersLoc,e.voidPatternLoc??=i.voidPatternLoc),s}let r=this.parseExprAtom(e);return this.shouldExitDescending(r)?r:this.parseSubscripts(r,t)}parseSubscripts(e,t,r){let i={optionalChainMember:!1,maybeAsyncArrow:this.atPossibleAsyncArrow(e),stop:!1};do e=this.parseSubscript(e,t,r,i),i.maybeAsyncArrow=!1;while(!i.stop);return e}parseSubscript(e,t,r,i){let{type:a}=this.state;if(!r&&a===11)return this.parseBind(e,t,i);if(Yt(a))return this.parseTaggedTemplateExpression(e,t,i);let s=!1;if(a===14){if(r&&(this.raise(p.OptionalChainingNoNew,this.state.startLoc),this.lookaheadCharCode()===40))return this.stopParseSubscript(e,i);i.optionalChainMember=s=!0,this.next()}if(!r&&this.match(6))return this.parseCoverCallAndAsyncArrowHead(e,t,i,s);{let o=this.eat(0);return o||s||this.eat(12)?this.parseMember(e,t,i,o,s):this.stopParseSubscript(e,i)}}stopParseSubscript(e,t){return t.stop=!0,e}parseMember(e,t,r,i,a){let s=this.startNodeAt(t);return s.object=e,s.computed=i,i?(s.property=this.parseExpression(),this.expect(1)):this.match(137)?(e.type==="Super"&&this.raise(p.SuperPrivateField,t),this.classScope.usePrivateName(this.state.value,this.state.startLoc),s.property=this.parsePrivateName()):s.property=this.parseIdentifier(!0),r.optionalChainMember?(s.optional=a,this.finishNode(s,"OptionalMemberExpression")):this.finishNode(s,"MemberExpression")}parseBind(e,t,r){let i=this.startNodeAt(t);i.object=e,this.next();let a=this.parseNoCallExpr(s=>{throw this.raise(p.UnsupportedBindRHS,s)});if(a.type==="Super"||a.type==="Import")throw this.raise(p.UnsupportedBindRHS,a);return i.callee=a,r.stop=!0,this.parseSubscripts(this.finishNode(i,"BindExpression"),t,!1)}parseCoverCallAndAsyncArrowHead(e,t,r,i){let a=null;this.next();let s=this.startNodeAt(t);s.callee=e;let{maybeAsyncArrow:o,optionalChainMember:_}=r;o&&(this.expressionScope.enter(li()),a=new st),_&&(s.optional=i),i?s.arguments=this.parseCallExpressionArguments():s.arguments=this.parseCallExpressionArguments(e.type!=="Super",s,a);let m=this.finishCallExpression(s,_);return o&&this.shouldParseAsyncArrow()&&!i?(r.stop=!0,this.checkDestructuringPrivate(a),this.expressionScope.validateAsPattern(),this.expressionScope.exit(),m=this.parseAsyncArrowFromCallExpression(this.startNodeAt(t),m)):(o&&(this.checkExpressionErrors(a,!0),this.expressionScope.exit()),this.toReferencedList(s.arguments)),m}parseTaggedTemplateExpression(e,t,r){let i=this.startNodeAt(t);return i.tag=e,i.quasi=this.parseTemplate(!0),r.optionalChainMember&&this.raise(p.OptionalChainingNoTemplate,t),this.finishNode(i,"TaggedTemplateExpression")}atPossibleAsyncArrow(e){return e.type==="Identifier"&&e.name==="async"&&this.state.lastTokEndLoc.index===e.end&&!this.canInsertSemicolon()&&e.end-e.start===5&&this.state.canStartArrow}finishCallExpression(e,t){if(e.callee.type==="Import")if(e.arguments.length===0||e.arguments.length>2)this.raise(p.ImportCallArity,e);else for(let r of e.arguments)r.type==="SpreadElement"&&this.raise(p.ImportCallSpreadArgument,r);return this.finishNode(e,t?"OptionalCallExpression":"CallExpression")}parseCallExpressionArguments(e,t,r){let i=[],a=!0;for(;!this.eat(7);){if(a)a=!1;else if(this.expect(8),this.match(7)){t&&this.addTrailingCommaExtraToNode(t),this.next();break}i.push(this.parseExprListItem(7,!1,r,e))}return i}shouldParseAsyncArrow(){return this.match(15)&&!this.canInsertSemicolon()}parseAsyncArrowFromCallExpression(e,t){return this.resetPreviousNodeTrailingComments(t),this.expect(15),this.parseArrowExpression(e,t.arguments,!0,t.extra?.trailingCommaLoc),t.innerComments&&St(e,t.innerComments),t.callee.trailingComments&&St(e,t.callee.trailingComments),e}parseNoCallExpr(e){let t=this.state.startLoc,r=this.match(79);this.state.canStartArrow=!1;let i=this.parseExprAtom();return r&&i.type==="ImportExpression"&&e(i),this.parseSubscripts(i,t,!0)}parseExprAtom(e){let t,r=null,{type:i}=this.state;switch(i){case 75:return this.parseSuper();case 79:return t=this.startNode(),this.next(),this.match(12)?this.parseImportMetaPropertyOrPhaseCallOrSyncCall(t):this.match(6)?this.optionFlags&1024?this.parseImportCall(t):this.finishNode(t,"Import"):(this.raise(p.UnsupportedImport,this.state.lastTokStartLoc),this.finishNode(t,"Import"));case 74:return t=this.startNode(),this.next(),this.finishNode(t,"ThisExpression");case 86:return this.parseDo(this.startNode(),!1);case 52:case 27:return this.readRegexp(),this.parseRegExpLiteral(this.state.value);case 134:return this.parseNumericLiteral(this.state.value);case 135:return this.parseBigIntLiteral(this.state.value);case 133:return this.parseStringLiteral(this.state.value);case 80:return this.parseNullLiteral();case 81:return this.parseBooleanLiteral(!0);case 82:return this.parseBooleanLiteral(!1);case 6:return this.parseParenAndDistinguishExpression(this.state.canStartArrow);case 0:return this.parseArrayLike(1,e);case 2:return this.parseObjectLike(4,!1,e);case 64:return this.parseFunctionOrFunctionSent();case 22:r=this.parseDecorators();case 76:return this.parseClass(this.maybeTakeDecorators(r,this.startNode()),!1);case 73:return this.parseNewOrNewTarget();case 21:case 20:return this.parseTemplate(!1);case 11:{t=this.startNode(),this.next(),t.object=null;let a=t.callee=this.parseNoCallExpr(s=>{throw this.raise(p.UnsupportedBind,s)});if(a.type==="MemberExpression")return this.finishNode(t,"BindExpression");throw this.raise(p.UnsupportedBind,a)}case 137:return this.raise(p.PrivateInExpectedIn,this.state.startLoc,{identifierName:this.state.value}),this.parsePrivateName();case 29:return this.parseTopicReferenceThenEqualsSign(50,"%");case 28:return this.parseTopicReferenceThenEqualsSign(40,"^");case 33:case 34:return this.parseTopicReference("hack");case 40:case 50:case 23:{let a=this.getPluginOption("pipelineOperator","proposal");if(a)return this.parseTopicReference(a);throw this.unexpected()}case 43:{let a=this.input.codePointAt(this.nextTokenStart());throw(J(a)||a===62)&&this.expectOnePlugin(["jsx","flow","typescript"]),this.unexpected()}default:if(A(i)){if(this.isContextual(126)&&this.lookaheadInLineCharCode()===123)return this.parseModuleExpression();let{canStartArrow:a,containsEsc:s}=this.state,o=this.parseIdentifier();if(!s&&o.name==="async"&&!this.canInsertSemicolon()){let{type:_}=this.state;if(_===64)return this.resetPreviousNodeTrailingComments(o),this.next(),this.parseAsyncFunctionExpression(this.startNodeAtNode(o));if(A(_))return a&&this.lookaheadCharCode()===61?this.parseAsyncArrowUnaryFunction(this.startNodeAtNode(o)):o;if(_===86)return this.resetPreviousNodeTrailingComments(o),this.parseDo(this.startNodeAtNode(o),!0)}return a&&this.match(15)&&!this.canInsertSemicolon()?(this.next(),this.parseArrowExpression(this.startNodeAtNode(o),[o],!1)):o}else throw this.unexpected()}}parseTopicReferenceThenEqualsSign(e,t){let r=this.getPluginOption("pipelineOperator","proposal");if(r)return this.state.type=e,this.state.value=t,this.state.pos--,this.state.end--,this.state.endLoc=H(this.state.endLoc,-1),this.parseTopicReference(r);throw this.unexpected()}parseTopicReference(e){let t=this.startNode(),r=this.state.startLoc,i=this.state.type;return this.next(),this.finishTopicReference(t,r,e,i)}finishTopicReference(e,t,r,i){if(this.testTopicReferenceConfiguration(r,t,i))return this.topicReferenceIsAllowedInCurrentContext()||this.raise(p.PipeTopicUnbound,t),this.registerTopicReference(),this.finishNode(e,"TopicReference");throw this.raise(p.PipeTopicUnconfiguredToken,t,{token:it(i)})}testTopicReferenceConfiguration(e,t,r){if(e==="hack")return this.hasPlugin(["pipelineOperator",{topicToken:it(r)}]);throw this.raise(p.PipeTopicRequiresHackPipes,t)}parseAsyncArrowUnaryFunction(e){this.prodParam.enter(Nt(!0,this.prodParam.hasYield));let t=[this.parseIdentifier()];return this.prodParam.exit(),this.hasPrecedingLineBreak()&&this.raise(p.LineTerminatorBeforeArrow,this.state.curPosition()),this.expect(15),this.parseArrowExpression(e,t,!0)}parseDo(e,t){this.expectPlugin("doExpressions"),t&&this.expectPlugin("asyncDoExpressions"),e.async=t,this.next();let r=this.state.labels;return this.state.labels=[],t?(this.prodParam.enter(2),e.body=this.parseBlock(),this.prodParam.exit()):e.body=this.parseBlock(),this.state.labels=r,this.finishNode(e,"DoExpression")}parseSuper(){let e=this.startNode();return this.next(),this.match(6)&&!this.scope.allowDirectSuper?this.raise(p.SuperNotAllowed,e):this.scope.allowSuper||this.raise(p.UnexpectedSuper,e),!this.match(6)&&!this.match(0)&&!this.match(12)&&this.raise(p.UnsupportedSuper,e),this.finishNode(e,"Super")}parsePrivateName(){let e=this.startNode(),t=this.startNodeAt(H(this.state.startLoc,1)),r=this.state.value;return this.next(),e.id=this.createIdentifier(t,r),this.finishNode(e,"PrivateName")}parseFunctionOrFunctionSent(){let e=this.startNode();if(this.next(),this.prodParam.hasYield&&this.match(12)){let t=this.createIdentifier(this.startNodeAtNode(e),"function");return this.next(),this.match(100)?this.expectPlugin("functionSent"):this.hasPlugin("functionSent")||this.unexpected(),this.parseMetaProperty(e,t,"sent")}return this.parseFunction(e)}parseMetaProperty(e,t,r){e.meta=t;let i=this.state.containsEsc;return e.property=this.parseIdentifier(!0),(e.property.name!==r||i)&&this.raise(p.UnsupportedMetaProperty,e.property,{target:t.name,onlyValidPropertyName:r}),this.finishNode(e,"MetaProperty")}parseImportMetaPropertyOrPhaseCallOrSyncCall(e){if(this.next(),this.isContextual(102)||this.isContextual(94)){let t=this.isContextual(102);return this.expectPlugin(t?"sourcePhaseImports":"deferredImportEvaluation"),this.next(),e.phase=t?"source":"defer",this.parseImportCall(e)}else{if(this.isContextual(105))return this.expectPlugin("importSync"),this.next(),e.sync=!0,this.parseImportCall(e);{let t=this.createIdentifierAt(this.startNodeAtNode(e),"import",this.state.lastTokStartLoc);return this.isContextual(98)&&(this.inModule||this.raise(p.ImportMetaOutsideModule,t),this.sawUnambiguousESM=!0),this.parseMetaProperty(e,t,"meta")}}}parseLiteralAtNode(e,t,r){return this.addExtra(r,"rawValue",e),this.addExtra(r,"raw",this.input.slice(this.offsetToSourcePos(r.start),this.state.end)),r.value=e,this.next(),this.finishNode(r,t)}parseLiteral(e,t){let r=this.startNode();return this.parseLiteralAtNode(e,t,r)}parseStringLiteral(e){return this.parseLiteral(e,"StringLiteral")}parseNumericLiteral(e){return this.parseLiteral(e,"NumericLiteral")}parseBigIntLiteral(e){let t;try{t=BigInt(e)}catch{t=null}return this.parseLiteral(t,"BigIntLiteral")}parseRegExpLiteral(e){let t=this.startNode();return this.addExtra(t,"raw",this.input.slice(this.offsetToSourcePos(t.start),this.state.end)),t.pattern=e.pattern,t.flags=e.flags,this.next(),this.finishNode(t,"RegExpLiteral")}parseBooleanLiteral(e){let t=this.startNode();return t.value=e,this.next(),this.finishNode(t,"BooleanLiteral")}parseNullLiteral(){let e=this.startNode();return this.next(),this.finishNode(e,"NullLiteral")}parseParenAndDistinguishExpression(e){let t=this.state.startLoc,r;this.next(),this.expressionScope.enter(pi());let i=this.state.startLoc,a=[],s=new st,o=!0,_,m;for(;!this.match(7);){if(o)o=!1;else if(this.expect(8,s.optionalParametersLoc===null?null:s.optionalParametersLoc),this.match(7)){m=this.state.startLoc;break}if(this.match(17)){let g=this.state.startLoc;if(_=this.state.startLoc,a.push(this.parseParenItem(this.parseRestBinding(),g)),!this.checkCommaAfterRest(41))break}else a.push(this.parseMaybeAssignAllowInOrVoidPattern(7,s,!0))}let l=this.state.lastTokEndLoc;this.expect(7);let c=this.startNodeAt(t);return e&&this.shouldParseArrow(a)&&(c=this.parseArrow(c))?(this.checkDestructuringPrivate(s),this.expressionScope.validateAsPattern(),this.expressionScope.exit(),this.parseArrowExpression(c,a,!1),c):(this.expressionScope.exit(),a.length||this.unexpected(this.state.lastTokStartLoc),m&&this.unexpected(m),_&&this.unexpected(_),this.checkExpressionErrors(s,!0),this.toReferencedList(a,!0),a.length>1?(r=this.startNodeAt(i),r.expressions=a,this.finishNode(r,"SequenceExpression"),this.resetEndLocation(r,l)):r=a[0],this.wrapParenthesis(t,r))}wrapParenthesis(e,t){if(!(this.optionFlags&2048))return this.addExtra(t,"parenthesized",!0),this.addExtra(t,"parenStart",e.index),this.takeSurroundingComments(t,e.index,this.state.lastTokEndLoc.index),t;let r=this.startNodeAt(e);return r.expression=t,this.finishNode(r,"ParenthesizedExpression")}shouldParseArrow(e){return!this.canInsertSemicolon()}parseArrow(e){if(this.eat(15))return e}parseParenItem(e,t){return e}parseNewOrNewTarget(){let e=this.startNode();if(this.next(),this.match(12)){let t=this.createIdentifier(this.startNodeAtNode(e),"new");this.next();let r=this.parseMetaProperty(e,t,"target");return this.scope.allowNewTarget||this.raise(p.UnexpectedNewTarget,r),r}return this.parseNew(e)}parseNew(e){if(this.parseNewCallee(e),this.eat(6)){let t=this.parseExprList(7);this.toReferencedList(t),e.arguments=t}else e.arguments=[];return this.finishNode(e,"NewExpression")}parseNewCallee(e){let t=this.parseNoCallExpr(r=>{this.raise(p.ImportCallNotNewExpression,r,r)});e.callee=t,t.type==="Import"&&this.raise(p.ImportCallNotNewExpression,t),t.type==="Super"&&this.raise(p.SuperCallNotNewExpression,t)}parseTemplateElement(e){let{start:t,startLoc:r,end:i,value:a}=this.state,s=t+1,o=this.startNodeAt(H(r,1));a===null&&(e||this.raise(p.InvalidEscapeSequenceTemplate,H(this.state.firstInvalidTemplateEscapePos,1)));let _=this.match(20),m=_?-1:-2,l=i+m;o.value={raw:this.input.slice(s,l).replace(/\r\n?/g,`
`),cooked:a===null?null:a.slice(1,m)},o.tail=_,this.next();let c=this.finishNode(o,"TemplateElement");return this.resetEndLocation(c,H(this.state.lastTokEndLoc,m)),c}parseTemplate(e){let t=this.startNode(),r=this.parseTemplateElement(e),i=[r],a=[];for(;!r.tail;)a.push(this.parseTemplateSubstitution()),this.readTemplateContinuation(),i.push(r=this.parseTemplateElement(e));return t.expressions=a,t.quasis=i,this.finishNode(t,"TemplateLiteral")}parseTemplateSubstitution(){return this.parseExpression()}parseObjectLike(e,t,r){let i=!1,a=!0,s=this.startNode();for(s.properties=[],this.next();!this.match(e);){if(a)a=!1;else if(this.expect(8),this.match(e)){this.addTrailingCommaExtraToNode(s);break}let _;t?_=this.parseBindingProperty():(_=this.parsePropertyDefinition(r),i=this.checkProto(_,i,r)),s.properties.push(_)}this.next();let o=t?"ObjectPattern":"ObjectExpression";return this.finishNode(s,o)}addTrailingCommaExtraToNode(e){this.addExtra(e,"trailingComma",this.state.lastTokStartLoc.index),this.addExtra(e,"trailingCommaLoc",this.state.lastTokStartLoc,!1)}maybeAsyncOrAccessorProp(e){return!e.computed&&e.key.type==="Identifier"&&(this.isLiteralPropertyName()||this.match(0)||this.match(51))}parsePropertyDefinition(e){let t=[];if(this.match(22))for(this.hasPlugin("decorators")&&this.raise(p.UnsupportedPropertyDecorator,this.state.startLoc);this.match(22);)t.push(this.parseDecorator());let r=this.startNode(),i=!1,a=!1,s;if(this.match(17))return t.length&&this.unexpected(),this.parseSpread();t.length&&(r.decorators=t),r.method=!1,e&&(s=this.state.startLoc);let o=this.eat(51);this.parsePropertyNamePrefixOperator(r);let _=this.state.containsEsc;if(this.parsePropertyName(r,e),!o&&!_&&this.maybeAsyncOrAccessorProp(r)){let{key:m}=r,l=m.name;l==="async"&&!this.hasPrecedingLineBreak()&&(i=!0,this.resetPreviousNodeTrailingComments(m),o=this.eat(51),this.parsePropertyName(r)),(l==="get"||l==="set")&&(a=!0,this.resetPreviousNodeTrailingComments(m),r.kind=l,this.match(51)&&(o=!0,this.raise(p.AccessorIsGenerator,this.state.curPosition(),{kind:l}),this.next()),this.parsePropertyName(r))}return this.parseObjPropValue(r,s,o,i,!1,a,e)}getGetterSetterExpectedParamCount(e){return e.kind==="get"?0:1}getObjectOrClassMethodParams(e){return e.params}checkGetterSetterParams(e){let t=this.getGetterSetterExpectedParamCount(e),r=this.getObjectOrClassMethodParams(e);r.length!==t&&this.raise(e.kind==="get"?p.BadGetterArity:p.BadSetterArity,e),e.kind==="set"&&r[r.length-1]?.type==="RestElement"&&this.raise(p.BadSetterRestParameter,e)}parseObjectMethod(e,t,r,i,a){if(a){let s=this.parseMethod(e,t,!1,!1,!1,"ObjectMethod");return this.checkGetterSetterParams(s),s}if(r||t||this.match(6))return i&&this.unexpected(),e.kind="method",e.method=!0,this.parseMethod(e,t,r,!1,!1,"ObjectMethod")}parseObjectProperty(e,t,r,i){if(e.shorthand=!1,this.eat(10))return e.value=r?this.parseMaybeDefault(this.state.startLoc):this.parseMaybeAssignAllowInOrVoidPattern(4,i),this.finishObjectProperty(e);if(!e.computed&&e.key.type==="Identifier"){if(this.checkReservedWord(e.key.name,e.key.start,!0,!1),r)e.value=this.parseMaybeDefault(t,this.cloneIdentifier(e.key));else if(this.match(25)){let a=this.state.startLoc;i!=null?i.shorthandAssignLoc===null&&(i.shorthandAssignLoc=a):this.raise(p.InvalidCoverInitializedName,a),e.value=this.parseMaybeDefault(t,this.cloneIdentifier(e.key))}else e.value=this.cloneIdentifier(e.key);return e.shorthand=!0,this.finishObjectProperty(e)}}finishObjectProperty(e){return this.finishNode(e,"ObjectProperty")}parseObjPropValue(e,t,r,i,a,s,o){let _=this.parseObjectMethod(e,r,i,a,s)||this.parseObjectProperty(e,t,a,o);return _||this.unexpected(),_}parsePropertyName(e,t){if(this.eat(0))e.computed=!0,e.key=this.parseMaybeAssignAllowIn(),this.expect(1);else{let{type:r,value:i}=this.state,a;if(q(r))a=this.parseIdentifier(!0);else switch(r){case 134:a=this.parseNumericLiteral(i);break;case 133:a=this.parseStringLiteral(i);break;case 135:a=this.parseBigIntLiteral(i);break;case 137:{let s=this.state.startLoc;t!=null?t.privateKeyLoc===null&&(t.privateKeyLoc=s):this.raise(p.UnexpectedPrivateField,s),a=this.parsePrivateName();break}default:throw this.unexpected()}e.key=a,r!==137&&(e.computed=!1)}}initFunction(e,t){e.id=null,e.generator=!1,e.async=t}parseMethod(e,t,r,i,a,s,o=!1){this.initFunction(e,r),e.generator=t,this.scope.enter(530|(o?576:0)|(a?32:0)),this.prodParam.enter(Nt(r,e.generator)),this.parseFunctionParams(e,i);let _=this.parseFunctionBodyAndFinish(e,s,!0);return this.prodParam.exit(),this.scope.exit(),_}parseArrayLike(e,t){let r=this.startNode();return this.next(),r.elements=this.parseExprList(e,!0,t,r),this.finishNode(r,"ArrayExpression")}parseArrowExpression(e,t,r,i){this.scope.enter(518);let a=Nt(r,!1),s=this.match(2);return s||(a|=this.prodParam.currentFlags()&24),this.prodParam.enter(a),this.initFunction(e,r),t&&this.setArrowFunctionParameters(e,t,i),this.parseFunctionBody(e,!0),s&&(this.state.regExpAllowedAt=this.state.lastTokEndLoc.index),this.prodParam.exit(),this.scope.exit(),this.finishNode(e,"ArrowFunctionExpression")}setArrowFunctionParameters(e,t,r){this.toAssignableList(t,r,!1),e.params=t}parseFunctionBodyAndFinish(e,t,r=!1){return this.parseFunctionBody(e,!1,r),this.finishNode(e,t)}parseFunctionBody(e,t,r=!1){let i=t&&!this.match(2);if(this.expressionScope.enter(ce),i)e.body=this.parseMaybeAssign(),this.checkParams(e,!1,t,!1);else{let a=this.state.strict,s=this.state.labels;this.state.labels=[],this.prodParam.enter(this.prodParam.currentFlags()|4),e.body=this.parseBlock(!0,!1,o=>{let _=!this.isSimpleParamList(e.params);o&&_&&this.raise(p.IllegalLanguageModeDirective,(e.kind==="method"||e.kind==="constructor")&&e.key?this.optionFlags&256?e.key.loc.end:e.key:e);let m=!a&&this.state.strict;this.checkParams(e,!this.state.strict&&!t&&!r&&!_,t,m),e.id&&this.checkStrictBindReservedWord(e.id,65,m)}),this.prodParam.exit(),this.state.labels=s}this.expressionScope.exit()}isSimpleParameter(e){return e.type==="Identifier"}isSimpleParamList(e){for(let t=0,r=e.length;t<r;t++)if(!this.isSimpleParameter(e[t]))return!1;return!0}checkParams(e,t,r,i=!0){let a=!t&&new Set,s={type:"FormalParameters"};for(let o of e.params)this.checkLVal(o,s,5,a,i)}parseExprList(e,t,r,i){let a=[],s=!0;for(;!this.eat(e);){if(s)s=!1;else if(this.expect(8),this.match(e)){i&&this.addTrailingCommaExtraToNode(i),this.next();break}a.push(this.parseExprListItem(e,t,r))}return a}parseExprListItem(e,t,r,i){let a;if(this.match(8))t||this.raise(p.UnexpectedToken,this.state.curPosition(),{unexpected:","}),a=null;else if(this.match(17)){let s=this.state.startLoc;a=this.parseParenItem(this.parseSpread(r),s)}else if(this.match(13)){this.expectPlugin("partialApplication"),i||this.raise(p.UnexpectedArgumentPlaceholder,this.state.startLoc);let s=this.startNode();this.next(),a=this.finishNode(s,"ArgumentPlaceholder")}else a=this.parseMaybeAssignAllowInOrVoidPattern(e,r,!0);return a}parseIdentifier(e){let t=this.startNode(),r=this.parseIdentifierName(e);return this.createIdentifier(t,r)}createIdentifier(e,t){return e.name=t,this.optionFlags&256&&(e.loc.identifierName=t),this.finishNode(e,"Identifier")}createIdentifierAt(e,t,r){return e.name=t,this.optionFlags&256&&(e.loc.identifierName=t),this.finishNodeAt(e,"Identifier",r)}parseIdentifierName(e){let t,{start:r,type:i}=this.state;q(i)?t=this.state.value:this.unexpected();let a=Tr(i);return e?a&&this.replaceToken(131):this.checkReservedWord(t,this.sourceToOffsetPos(r),a,!1),this.next(),t}checkReservedWord(e,t,r,i){if(e.length>10||!Hr(e))return;if(r&&ir(e)){this.raise(p.UnexpectedKeyword,t,{keyword:e});return}if((this.state.strict?i?rr:tr:Te)(e,this.inModule)){this.raise(p.UnexpectedReservedWord,t,{reservedWord:e});return}else if(e==="yield"){if(this.prodParam.hasYield){this.raise(p.YieldBindingIdentifier,t);return}}else if(e==="await"){if(this.prodParam.hasAwait){this.raise(p.AwaitBindingIdentifier,t);return}if(this.scope.inStaticBlock){this.raise(p.AwaitBindingIdentifierInStaticBlock,t);return}this.expressionScope.recordAsyncArrowParametersError(t)}else if(e==="arguments"&&this.scope.inClassAndNotInNonArrowFunction){this.raise(p.ArgumentsInClass,t);return}}recordAwaitIfAllowed(){let e=this.prodParam.hasAwait;return e&&!this.scope.inFunction&&(this.state.hasTopLevelAwait=!0),e}parseAwait(e,t){let r=e.index,i=this.startNodeAt(e);return this.expressionScope.recordParameterInitializerError(p.AwaitExpressionFormalParameter,r),this.eat(51)&&this.raise(p.ObsoleteAwaitStar,e),!this.scope.inFunction&&!(this.optionFlags&1)&&(this.isAmbiguousPrefixOrIdentifier()?this.ambiguousScriptDifferentAst=!0:this.sawUnambiguousESM=!0),t||(this.state.canStartArrow=!1,i.argument=this.parseMaybeUnary(null,!0)),this.finishNode(i,"AwaitExpression")}isAmbiguousPrefixOrIdentifier(){if(this.hasPrecedingLineBreak())return!0;let{type:e}=this.state;return e===49||e===6||e===0||Yt(e)||e===99&&!this.state.containsEsc||e===136||e===52||this.hasPlugin("v8intrinsic")&&e===50}parseYield(e){let t=this.startNodeAt(e);this.expressionScope.recordParameterInitializerError(p.YieldInParameter,e.index);let r=!1,i=null;if(!this.hasPrecedingLineBreak())switch(r=this.eat(51),this.state.type){case 9:case 138:case 4:case 7:case 1:case 5:case 10:case 8:if(!r)break;case 54:if(this.options.annexB&&!r)break;default:i=this.parseMaybeAssign()}return i||(this.state.regExpAllowedAt=this.state.lastTokEndLoc.index),t.delegate=r,t.argument=i,this.finishNode(t,"YieldExpression")}parseImportCall(e){this.next();let t=this.parseCallExpressionArguments();if(t.length===0||t.length>2)this.raise(p.ImportCallArity,e,e);else for(let r of t)r.type==="SpreadElement"&&this.raise(p.ImportCallSpreadArgument,r,e);return e.source=t[0],e.options=t[1]??null,this.finishNode(e,"ImportExpression")}withTopicBindingContext(e){let t=this.state.inHackPipelineBody;this.state.inHackPipelineBody=!0;let r=this.state.seenTopicReference;this.state.seenTopicReference=!1;try{return e()}finally{this.state.inHackPipelineBody=t,this.state.seenTopicReference=r}}allowInAnd(e){let t=this.prodParam.currentFlags();if(24&~t){this.prodParam.enter(t|8|16);try{return e()}finally{this.prodParam.exit()}}return e()}disallowInAnd(e){let t=this.prodParam.currentFlags(),r=8&t,i=16&~t;if(r||i){this.prodParam.enter(t&-9|16);try{return e()}finally{this.prodParam.exit()}}return e()}registerTopicReference(){this.state.seenTopicReference=!0}topicReferenceIsAllowedInCurrentContext(){return this.state.inHackPipelineBody}topicReferenceWasUsedInCurrentContext(){return this.state.seenTopicReference}parseFSharpPipelineBody(e){let t=this.state.startLoc;this.prodParam.enter(this.prodParam.currentFlags()&-17);let r;if(this.isContextual(93)&&this.recordAwaitIfAllowed()){this.next(),r=this.parseAwait(t,!0);let i=this.state.type;i!==35&&this.isBinaryOperator(i)&&this.raise(p.PipelineUnparenthesized,t)}else this.state.canStartArrow=!0,r=this.parseExprOp(this.parseMaybeUnaryOrPrivate(),t,e);return this.prodParam.exit(),r}parseModuleExpression(){this.expectPlugin("moduleBlocks");let e=this.startNode();this.next(),this.match(2)||this.unexpected(null,2);let t=this.startNodeAt(this.state.endLoc);this.next();let r=this.initializeScopes(!0);this.enterInitialScopes();try{e.body=this.parseProgram(t,4,"module")}finally{r()}return this.finishNode(e,"ModuleExpression")}parseVoidPattern(e){this.expectPlugin("discardBinding");let t=this.startNode();return e!=null&&(e.voidPatternLoc=this.state.startLoc),this.next(),this.finishNode(t,"VoidPattern")}parseMaybeAssignAllowInOrVoidPattern(e,t,r){if(t!=null&&this.match(84)){let i=this.lookaheadCharCode();if(i===44||i===(e===1?93:e===4?125:41)||i===61)return this.parseMaybeDefault(this.state.startLoc,this.parseVoidPattern(t))}return this.parseMaybeAssignAllowIn(t,r)}parsePropertyNamePrefixOperator(e){}},Kt={kind:1},hi={kind:2},gi=/[\uD800-\uDFFF]/u,Wt=/in(?:stanceof)?/y,Xt=/[a-z]{2,10}/y;function or(n){for(let e=0;e<n.length;e++){let t=n[e],{type:r}=t;typeof r=="number"&&(t.type=Qe(r))}return n}var we=class extends ue{parseTopLevel(e,t){return e.program=this.parseProgram(t,138,this.options.sourceType==="module"?"module":"script"),e.comments=this.comments,this.optionFlags&512&&(e.tokens=or(this.tokens)),this.finishNode(e,"File")}parseProgram(e,t,r){if(e.sourceType=r,e.interpreter=this.parseInterpreterDirective(),this.parseBlockBody(e,!0,!0,t),this.inModule){if(!(this.optionFlags&64)&&this.scope.undefinedExports.size>0)for(let[a,s]of Array.from(this.scope.undefinedExports))this.raise(p.ModuleExportUndefined,s,{localName:a});this.addExtra(e,"topLevelAwait",this.state.hasTopLevelAwait)}let i;return t===138?i=this.finishNode(e,"Program"):i=this.finishNodeAt(e,"Program",H(this.state.startLoc,-1)),i}stmtToDirective(e){let t=this.castNodeTo(e,"Directive"),r=this.castNodeTo(e.expression,"DirectiveLiteral"),i=r.value,a=this.input.slice(this.offsetToSourcePos(r.start),this.offsetToSourcePos(r.end)),s=r.value=a.slice(1,-1);return this.addExtra(r,"raw",a),this.addExtra(r,"rawValue",s),this.addExtra(r,"expressionValue",i),t.value=r,delete e.expression,t}parseInterpreterDirective(){if(!this.match(24))return null;let e=this.startNode();return e.value=this.state.value,this.next(),this.finishNode(e,"InterpreterDirective")}isLet(){return this.isContextual(97)?this.hasFollowingBindingAtom():!1}isUsing(){return this.isContextual(106)?this.nextTokenIsIdentifierOnSameLine():!1}isForUsing(){if(!this.isContextual(106))return!1;let e=this.nextTokenInLineStart(),t=this.codePointAtPos(e);if(this.isUnparsedContextual(e,"of")){let r=this.lookaheadCharCodeSince(e+2);if(r!==61&&r!==58&&r!==59)return!1}return!!(this.chStartsBindingIdentifier(t,e)||this.isUnparsedContextual(e,"void"))}nextTokenIsIdentifierOnSameLine(){let e=this.nextTokenInLineStart(),t=this.codePointAtPos(e);return this.chStartsBindingIdentifier(t,e)}isAwaitUsing(){if(!this.isContextual(93))return!1;let e=this.nextTokenInLineStart();if(this.isUnparsedContextual(e,"using")){e=this.nextTokenInLineStartSince(e+5);let t=this.codePointAtPos(e);if(this.chStartsBindingIdentifier(t,e))return!0}return!1}chStartsBindingIdentifier(e,t){if(J(e)){if(Wt.lastIndex=t,Wt.test(this.input)){let r=this.codePointAtPos(Wt.lastIndex);if(!at(r)&&r!==92)return!1}return!0}else return e===92}isReservedWordOnNewLineAfterLet(e){if(!ee(this.input,this.state.end,e)||(Xt.lastIndex=e,!Xt.test(this.input)))return!1;let t=Xt.lastIndex,r=this.codePointAtPos(t);if(at(r)||r===92)return!1;let i=this.input.slice(e,t);return ir(i)||Te(i,!1)}chStartsBindingPattern(e){return e===91||e===123}hasFollowingBindingAtom(){let e=this.nextTokenStart(),t=this.codePointAtPos(e);return this.chStartsBindingPattern(t)||this.chStartsBindingIdentifier(t,e)}hasInLineFollowingBindingIdentifierOrBrace(){let e=this.nextTokenInLineStart(),t=this.codePointAtPos(e);return t===123||this.chStartsBindingIdentifier(t,e)}allowsUsing(){return(this.scope.inModule||!this.scope.inTopLevel)&&!this.scope.inBareCaseStatement}parseModuleItem(){return this.parseStatementLike(15)}parseStatementListItem(){return this.parseStatementLike(6|(!this.options.annexB||this.state.strict?0:8))}parseStatementOrSloppyAnnexBFunctionDeclaration(e=!1){let t=0;return this.options.annexB&&!this.state.strict&&(t|=4,e&&(t|=8)),this.parseStatementLike(t)}parseStatement(){return this.parseStatementLike(0)}parseStatementLike(e){let t=null;return this.match(22)&&(t=this.parseDecorators(!0)),this.parseStatementContent(e,t)}parseStatementContent(e,t){let r=this.state.type,i=this.startNode(),a=!!(e&2),s=!!(e&4),o=e&1;switch(r){case 56:return this.parseBreakContinueStatement(i,!0);case 59:return this.parseBreakContinueStatement(i,!1);case 60:return this.parseDebuggerStatement(i);case 86:return this.parseDoWhileStatement(i);case 87:return this.parseForStatement(i);case 64:if(this.lookaheadCharCode()===46)break;return s||this.raise(this.state.strict?p.StrictFunction:this.options.annexB?p.SloppyFunctionAnnexB:p.SloppyFunction,this.state.startLoc),this.parseFunctionStatement(i,!1,e);case 76:return a||this.unexpected(),this.parseClass(this.maybeTakeDecorators(t,i),!0);case 104:if(!this.state.containsEsc&&this.nextTokenIsIdentifierOnSameLine())return this.expectPlugin("structs"),a||this.unexpected(),this.parseStructDeclaration(i,!1);break;case 65:return this.parseIfStatement(i);case 66:return this.parseReturnStatement(i);case 67:return this.parseSwitchStatement(i);case 68:return this.parseThrowStatement(i);case 69:return this.parseTryStatement(i);case 93:if(this.isAwaitUsing())return this.allowsUsing()?a?this.recordAwaitIfAllowed()||this.raise(p.AwaitUsingNotInAsyncContext,i):this.raise(p.UnexpectedLexicalDeclaration,i):this.raise(p.UnexpectedUsingDeclaration,i),this.next(),this.parseVarStatement(i,"await using");break;case 106:if(this.state.containsEsc||!this.hasInLineFollowingBindingIdentifierOrBrace())break;return this.allowsUsing()?a||this.raise(p.UnexpectedLexicalDeclaration,this.state.startLoc):this.raise(p.UnexpectedUsingDeclaration,this.state.startLoc),this.parseVarStatement(i,"using");case 97:{if(this.state.containsEsc)break;let l=this.nextTokenStart(),c=this.codePointAtPos(l);if(c!==91&&(!a&&this.hasFollowingLineBreak()||!this.chStartsBindingIdentifier(c,l)&&c!==123||this.isReservedWordOnNewLineAfterLet(l)))break}case 71:a||this.raise(p.UnexpectedLexicalDeclaration,this.state.startLoc);case 70:{let l=this.state.value;return this.parseVarStatement(i,l)}case 88:return this.parseWhileStatement(i);case 72:return this.parseWithStatement(i);case 2:return this.parseBlock();case 9:return this.parseEmptyStatement(i);case 79:{let l=this.lookaheadCharCode();if(l===40||l===46)break}case 78:{!(this.optionFlags&8)&&!o&&this.raise(p.UnexpectedImportExport,this.state.startLoc),this.next();let l;return r===79?l=this.parseImport(i):l=this.parseExport(i,t),this.assertModuleNodeAllowed(l),l}default:if(this.isAsyncFunction())return a||this.raise(p.AsyncFunctionInSingleStatementContext,this.state.startLoc),this.next(),this.parseFunctionStatement(i,!0,e)}let _=this.state.value;if(r===89&&this.lookahead().type===10){let l=this.parseIdentifier(!0);return this.next(),this.parseLabeledStatement(i,_,l,e)}let m=this.parseExpression();return A(r)&&m.type==="Identifier"&&this.eat(10)?this.parseLabeledStatement(i,_,m,e):this.parseExpressionStatement(i,m,e)}assertModuleNodeAllowed(e){!(this.optionFlags&8)&&!this.inModule&&this.raise(p.ImportOutsideModule,e)}maybeTakeDecorators(e,t,r){return e&&(t.decorators?.length?(this.raise(p.DecoratorsBeforeAfterExport,t.decorators[0]),t.decorators.unshift(...e)):t.decorators=e,this.resetStartLocationFromNode(t,e[0]),r&&this.resetStartLocationFromNode(r,t)),t}canHaveLeadingDecorator(){return this.match(76)}parseDecorators(e){let t=[];do t.push(this.parseDecorator());while(this.match(22));if(this.match(78))e||this.unexpected();else if(!this.canHaveLeadingDecorator())throw this.raise(p.UnexpectedLeadingDecorator,this.state.startLoc);return t}parseDecorator(){this.expectOnePlugin(["decorators","decorators-legacy"]);let e=this.startNode();if(this.next(),this.hasPlugin("decorators")){let t=this.state.startLoc,r;if(this.match(6)){let i=this.state.startLoc;this.next(),r=this.parseExpression(),this.expect(7),r=this.wrapParenthesis(i,r);let a=this.state.startLoc;e.expression=this.parseMaybeDecoratorArguments(r,i),e.expression!==r&&this.raise(p.DecoratorArgumentsOutsideParentheses,a)}else{for(r=this.parseIdentifier(!1);this.eat(12);){let i=this.startNodeAt(t);i.object=r,this.match(137)?(this.classScope.usePrivateName(this.state.value,this.state.startLoc),i.property=this.parsePrivateName()):i.property=this.parseIdentifier(!0),i.computed=!1,r=this.finishNode(i,"MemberExpression")}e.expression=this.parseMaybeDecoratorArguments(r,t)}}else this.state.canStartArrow=!1,e.expression=this.parseExprSubscripts();return this.finishNode(e,"Decorator")}parseMaybeDecoratorArguments(e,t){if(this.eat(6)){let r=this.startNodeAt(t);return r.callee=e,r.arguments=this.parseCallExpressionArguments(),this.toReferencedList(r.arguments),this.finishNode(r,"CallExpression")}return e}parseBreakContinueStatement(e,t){return this.next(),this.isLineTerminator()?e.label=null:(e.label=this.parseIdentifier(this.match(89)),this.semicolon()),this.verifyBreakContinue(e,t),this.finishNode(e,t?"BreakStatement":"ContinueStatement")}verifyBreakContinue(e,t){let r;for(r=0;r<this.state.labels.length;++r){let i=this.state.labels[r];if((e.label==null||i.name===e.label.name)&&(i.kind!=null&&(t||i.kind===1)||e.label&&t))break}if(r===this.state.labels.length){let i=t?"BreakStatement":"ContinueStatement";this.raise(p.IllegalBreakContinue,e,{type:i})}}parseDebuggerStatement(e){return this.next(),this.semicolon(),this.finishNode(e,"DebuggerStatement")}parseHeaderExpression(){this.expect(6);let e=this.parseExpression();return this.expect(7),e}parseDoWhileStatement(e){return this.next(),this.state.labels.push(Kt),e.body=this.parseStatement(),this.state.labels.pop(),this.expect(88),e.test=this.parseHeaderExpression(),this.eat(9),this.finishNode(e,"DoWhileStatement")}parseForStatement(e){this.next(),this.state.labels.push(Kt);let t=null;if(this.isContextual(93)&&this.recordAwaitIfAllowed()&&(t=this.state.startLoc,this.next()),this.scope.enter(0),this.expect(6),this.match(9))return t!==null&&this.unexpected(t),this.parseFor(e,null);let r=this.isContextual(97);{let _=this.isAwaitUsing(),m=_||this.isForUsing(),l=r&&this.hasFollowingBindingAtom()||m;if(this.match(70)||this.match(71)||l){let c=this.startNode(),g;_?(g="await using",this.recordAwaitIfAllowed()||this.raise(p.AwaitUsingNotInAsyncContext,this.state.startLoc),this.next()):g=this.state.value,this.next(),this.parseVar(c,!0,g);let d=this.finishNode(c,"VariableDeclaration"),x=this.match(54);return x&&m&&this.raise(p.ForInUsing,d),(x||this.isContextual(99))&&d.declarations.length===1?this.parseForX(e,d,t):(t!==null&&this.unexpected(t),this.parseFor(e,d))}}let i=this.isContextual(92),a=new st,s=this.parseExpression(!0,a),o=this.isContextual(99);if(o&&(r&&this.raise(p.ForOfLet,s),t===null&&i&&s.type==="Identifier"&&this.raise(p.ForOfAsync,s)),o||this.match(54)){this.checkDestructuringPrivate(a),this.toAssignable(s,!0);let _=o?"ForOfStatement":"ForInStatement";return this.checkLVal(s,{type:_}),this.parseForX(e,s,t)}else this.checkExpressionErrors(a,!0);return t!==null&&this.unexpected(t),this.parseFor(e,s)}parseFunctionStatement(e,t,r){this.next();let i=1|(t?8:0);return!(r&2)&&r&4&&(i|=16,r&8||(i|=2)),this.parseFunction(e,i)}parseIfStatement(e){return this.next(),e.test=this.parseHeaderExpression(),e.consequent=this.parseStatementOrSloppyAnnexBFunctionDeclaration(),e.alternate=this.eat(62)?this.parseStatementOrSloppyAnnexBFunctionDeclaration():null,this.finishNode(e,"IfStatement")}parseReturnStatement(e){return this.prodParam.hasReturn||this.raise(p.IllegalReturn,this.state.startLoc),this.next(),this.isLineTerminator()?e.argument=null:(e.argument=this.parseExpression(),this.semicolon()),this.finishNode(e,"ReturnStatement")}parseSwitchStatement(e){this.next(),e.discriminant=this.parseHeaderExpression();let t=e.cases=[];this.expect(2),this.state.labels.push(hi),this.scope.enter(256);let r;for(let i;!this.match(4);)if(this.match(57)||this.match(61)){let a=this.match(57);r&&this.finishNode(r,"SwitchCase"),t.push(r=this.startNode()),r.consequent=[],this.next(),a?r.test=this.parseExpression():(i&&this.raise(p.MultipleDefaultsInSwitch,this.state.lastTokStartLoc),i=!0,r.test=null),this.expect(10)}else r?r.consequent.push(this.parseStatementListItem()):this.unexpected();return this.scope.exit(),r&&this.finishNode(r,"SwitchCase"),this.next(),this.state.labels.pop(),this.finishNode(e,"SwitchStatement")}parseThrowStatement(e){return this.next(),this.hasPrecedingLineBreak()&&this.raise(p.NewlineAfterThrow,this.state.lastTokEndLoc),e.argument=this.parseExpression(),this.semicolon(),this.finishNode(e,"ThrowStatement")}parseCatchClauseParam(){let e=this.parseBindingAtom();return this.scope.enter(this.options.annexB&&e.type==="Identifier"?8:0),this.checkLVal(e,{type:"CatchClause"},9),e}parseTryStatement(e){if(this.next(),e.block=this.parseBlock(),e.handler=null,this.match(58)){let t=this.startNode();this.next(),this.match(6)?(this.expect(6),t.param=this.parseCatchClauseParam(),this.expect(7)):(t.param=null,this.scope.enter(0)),t.body=this.parseBlock(!1,!1),this.scope.exit(),e.handler=this.finishNode(t,"CatchClause")}return e.finalizer=this.eat(63)?this.parseBlock():null,!e.handler&&!e.finalizer&&this.raise(p.NoCatchOrFinally,e),this.finishNode(e,"TryStatement")}parseVarStatement(e,t,r=!1){return this.next(),this.parseVar(e,!1,t,r),this.semicolon(),this.finishNode(e,"VariableDeclaration")}parseWhileStatement(e){return this.next(),e.test=this.parseHeaderExpression(),this.state.labels.push(Kt),e.body=this.parseStatement(),this.state.labels.pop(),this.finishNode(e,"WhileStatement")}parseWithStatement(e){return this.state.strict&&this.raise(p.StrictWith,this.state.startLoc),this.next(),e.object=this.parseHeaderExpression(),e.body=this.parseStatement(),this.finishNode(e,"WithStatement")}parseEmptyStatement(e){return this.next(),this.finishNode(e,"EmptyStatement")}parseLabeledStatement(e,t,r,i){for(let s of this.state.labels)s.name===t&&this.raise(p.LabelRedeclaration,r,{labelName:t});let a=Nr(this.state.type)?1:this.match(67)?2:null;for(let s=this.state.labels.length-1;s>=0;s--){let o=this.state.labels[s];if(o.statementStart===e.start)o.statementStart=this.sourceToOffsetPos(this.state.start),o.kind=a;else break}return this.state.labels.push({name:t,kind:a,statementStart:this.sourceToOffsetPos(this.state.start)}),e.body=i&8?this.parseStatementOrSloppyAnnexBFunctionDeclaration(!0):this.parseStatement(),this.state.labels.pop(),e.label=r,this.finishNode(e,"LabeledStatement")}parseExpressionStatement(e,t,r){return e.expression=t,this.semicolon(),this.finishNode(e,"ExpressionStatement")}parseBlock(e=!1,t=!0,r){let i=this.startNode();return e&&this.state.strictErrors.clear(),this.expect(2),t&&this.scope.enter(0),this.parseBlockBody(i,e,!1,4,r),t&&this.scope.exit(),this.finishNode(i,"BlockStatement")}isValidDirective(e){return e.type==="ExpressionStatement"&&e.expression.type==="StringLiteral"&&!e.expression.extra.parenthesized}parseBlockBody(e,t,r,i,a){let s=e.body=[],o=e.directives=[];this.parseBlockOrModuleBlockBody(s,t?o:void 0,r,i,a)}parseBlockOrModuleBlockBody(e,t,r,i,a){let s=this.state.strict,o=!1,_=!1;for(;!this.match(i);){let m=r?this.parseModuleItem():this.parseStatementListItem();if(t&&!_){if(this.isValidDirective(m)){let l=this.stmtToDirective(m);t.push(l),!o&&l.value.value==="use strict"&&(o=!0,this.setStrict(!0));continue}_=!0,this.state.strictErrors.clear()}e.push(m)}a?.call(this,o),s||this.setStrict(!1),this.next()}parseFor(e,t){return e.init=t,this.semicolon(!1),e.test=this.match(9)?null:this.parseExpression(),this.semicolon(!1),e.update=this.match(7)?null:this.parseExpression(),this.expect(7),e.body=this.parseStatement(),this.scope.exit(),this.state.labels.pop(),this.finishNode(e,"ForStatement")}parseForX(e,t,r){let i=this.match(54);return this.next(),i?r!==null&&this.unexpected(r):e.await=r!==null,t.type==="VariableDeclaration"&&t.declarations[0].init!=null&&(!i||!this.options.annexB||this.state.strict||t.kind!=="var"||t.declarations[0].id.type!=="Identifier")&&this.raise(p.ForInOfLoopInitializer,t,{type:i?"ForInStatement":"ForOfStatement"}),t.type==="AssignmentPattern"&&this.raise(p.InvalidLhs,t,{ancestor:{type:"ForStatement"}}),e.left=t,e.right=i?this.parseExpression():this.parseMaybeAssignAllowIn(),this.expect(7),e.body=this.parseStatement(),this.scope.exit(),this.state.labels.pop(),this.finishNode(e,i?"ForInStatement":"ForOfStatement")}parseVar(e,t,r,i=!1){let a=e.declarations=[];for(e.kind=r;;){let s=this.startNode();if(this.parseVarId(s,r),s.init=this.eat(25)?t?this.parseMaybeAssignDisallowIn():this.parseMaybeAssignAllowIn():null,s.init===null&&!i&&!(t&&a.length===0&&(this.match(54)||this.isContextual(99)))&&(s.id.type!=="Identifier"?this.raise(p.DeclarationMissingInitializer,this.state.lastTokEndLoc,{kind:"destructuring"}):(r==="const"||r==="using"||r==="await using")&&this.raise(p.DeclarationMissingInitializer,this.state.lastTokEndLoc,{kind:r})),a.push(this.finishNode(s,"VariableDeclarator")),!this.eat(8))break}return e}parseVarId(e,t){let r=this.parseBindingAtom();t==="using"||t==="await using"?(r.type==="ArrayPattern"||r.type==="ObjectPattern")&&this.raise(p.UsingDeclarationHasBindingPattern,r):r.type==="VoidPattern"&&this.raise(p.UnexpectedVoidPattern,r),this.checkLVal(r,{type:"VariableDeclarator"},t==="var"?5:8201),e.id=r}parseAsyncFunctionExpression(e){return this.parseFunction(e,8)}parseFunction(e,t=0){let r=!!(t&1),i=r&&!(t&4),a=!!(t&8);return this.initFunction(e,a),this.match(51)&&(t&16&&this.raise(p.GeneratorInSingleStatementContext,this.state.startLoc),this.next(),e.generator=!0),r&&(e.id=this.parseFunctionId(i)),this.scope.enter(514),this.prodParam.enter(Nt(a,e.generator)),!r&&A(this.state.type)&&(this.expressionScope.enter(ce),e.id=this.parseFunctionId(),this.expressionScope.exit()),this.parseFunctionParams(e,!1),this.parseFunctionBodyAndFinish(e,r?"FunctionDeclaration":"FunctionExpression"),this.prodParam.exit(),this.scope.exit(),r&&!(t&2)&&this.registerFunctionStatementId(e),e}parseFunctionId(e){return e||A(this.state.type)?this.parseIdentifier():null}parseFunctionParams(e,t){this.expect(6),this.expressionScope.enter(di),e.params=this.parseBindingList(7,41,2|(t?4:0)),this.expressionScope.exit()}registerFunctionStatementId(e){e.id&&this.scope.declareName(e.id.name,!this.options.annexB||this.state.strict||e.generator||e.async?this.scope.treatFunctionsAsVar?5:8201:17,e.id.start)}parseClass(e,t,r){this.next();let i=this.state.strict;return this.state.strict=!0,this.parseClassId(e,t,r),this.parseClassSuper(e),e.body=this.parseClassBody(!!e.superClass,i),this.finishNode(e,t?"ClassDeclaration":"ClassExpression")}isClassProperty(){return this.match(25)||this.match(9)||this.match(4)}isClassMethod(){return this.match(6)}nameIsConstructor(e){return e.type==="Identifier"&&e.name==="constructor"||e.type==="StringLiteral"&&e.value==="constructor"}isNonstaticConstructor(e){return!e.computed&&!e.static&&this.nameIsConstructor(e.key)}parseClassBody(e,t){this.classScope.enter();let r={hadConstructor:!1,hadSuperClass:e},i=[],a=this.startNode();for(a.body=[],this.expect(2);!this.match(4);){if(this.eat(9)){if(i.length>0)throw this.raise(p.DecoratorSemicolon,this.state.lastTokEndLoc);continue}if(this.match(22)){i.push(this.parseDecorator());continue}let s=this.startNode();i.length&&(s.decorators=i,this.resetStartLocationFromNode(s,i[0]),i=[]),this.parseClassMember(a,s,r)}if(this.state.strict=t,this.next(),i.length)throw this.raise(p.TrailingDecorator,this.state.startLoc);return this.classScope.exit(),this.finishNode(a,"ClassBody")}parseClassMemberFromModifier(e,t){let r=this.parseIdentifier(!0);if(this.isClassMethod()){let i=t;return i.kind="method",i.computed=!1,i.key=r,i.static=!1,this.pushClassMethod(e,i,!1,!1,!1,!1),!0}else if(this.isClassProperty()){let i=t;return i.computed=!1,i.key=r,i.static=!1,e.body.push(this.parseClassProperty(i)),!0}return this.resetPreviousNodeTrailingComments(r),!1}parseClassMember(e,t,r){let i=this.isContextual(103);if(i){if(this.parseClassMemberFromModifier(e,t))return;if(this.eat(2)){this.parseClassStaticBlock(e,t);return}}this.parseClassMemberWithIsStatic(e,t,r,i)}parseClassMemberWithIsStatic(e,t,r,i){let a=t,s=t,o=t,_=t,m=t,l=a,c=a;if(t.static=i,this.parsePropertyNamePrefixOperator(t),this.eat(51)){l.kind="method";let P=this.match(137);if(this.parseClassElementName(l),this.parsePostMemberNameModifiers(l),P){this.pushClassPrivateMethod(e,s,!0,!1);return}this.isNonstaticConstructor(a)&&this.raise(p.ConstructorIsGenerator,a.key),this.pushClassMethod(e,a,!0,!1,!1,!1);return}let g=!this.state.containsEsc&&A(this.state.type),d=this.parseClassElementName(t),x=g?d.name:null,f=this.isPrivateName(d),u=this.state.startLoc;if(this.parsePostMemberNameModifiers(c),this.isClassMethod()){if(l.kind="method",f){this.pushClassPrivateMethod(e,s,!1,!1);return}let P=this.isNonstaticConstructor(a),C=!1;P&&(a.kind="constructor",a.decorators&&a.decorators.length>0&&this.raise(p.DecoratorConstructor,t),r.hadConstructor&&!this.hasPlugin("typescript")&&this.raise(p.DuplicateConstructor,d),P&&this.hasPlugin("typescript")&&t.override&&this.raise(p.OverrideOnConstructor,d),r.hadConstructor=!0,C=r.hadSuperClass),this.pushClassMethod(e,a,!1,!1,P,C)}else if(this.isClassProperty())f?this.pushClassPrivateProperty(e,_):this.pushClassProperty(e,o);else if(x==="async"&&!this.isLineTerminator()){this.resetPreviousNodeTrailingComments(d);let P=this.eat(51);c.optional&&this.unexpected(u),l.kind="method";let C=this.match(137);this.parseClassElementName(l),this.parsePostMemberNameModifiers(c),C?this.pushClassPrivateMethod(e,s,P,!0):(this.isNonstaticConstructor(a)&&this.raise(p.ConstructorIsAsync,a.key),this.pushClassMethod(e,a,P,!0,!1,!1))}else if((x==="get"||x==="set")&&!(this.match(51)&&this.isLineTerminator())){this.resetPreviousNodeTrailingComments(d),l.kind=x;let P=this.match(137);this.parseClassElementName(a),P?this.pushClassPrivateMethod(e,s,!1,!1):(this.isNonstaticConstructor(a)&&this.raise(p.ConstructorIsAccessor,a.key),this.pushClassMethod(e,a,!1,!1,!1,!1)),this.checkGetterSetterParams(a)}else if(x==="accessor"&&!this.isLineTerminator()){this.expectPlugin("decoratorAutoAccessors"),this.resetPreviousNodeTrailingComments(d);let P=this.match(137);this.parseClassElementName(o),this.pushClassAccessorProperty(e,m,P)}else this.isLineTerminator()?f?this.pushClassPrivateProperty(e,_):this.pushClassProperty(e,o):this.unexpected()}parseClassElementName(e){let{type:t,value:r}=this.state;if((t===131||t===133)&&e.static&&r==="prototype"&&this.raise(p.StaticPrototype,this.state.startLoc),t===137){r==="constructor"&&this.raise(p.ConstructorClassPrivateField,this.state.startLoc);let i=this.parsePrivateName();return e.key=i,i}return this.parsePropertyName(e),e.key}parseClassStaticBlock(e,t){this.scope.enter(720);let r=this.state.labels;this.state.labels=[],this.prodParam.enter(0);let i=t.body=[];this.parseBlockOrModuleBlockBody(i,void 0,!1,4),this.prodParam.exit(),this.scope.exit(),this.state.labels=r,e.body.push(this.finishNode(t,"StaticBlock")),t.decorators?.length&&this.raise(p.DecoratorStaticBlock,t)}pushClassProperty(e,t){!t.computed&&this.nameIsConstructor(t.key)&&this.raise(p.ConstructorClassField,t.key),e.body.push(this.parseClassProperty(t))}pushClassPrivateProperty(e,t){let r=this.parseClassPrivateProperty(t);e.body.push(r),this.classScope.declarePrivateName(this.getPrivateNameSV(r.key),0,r.key.start)}pushClassAccessorProperty(e,t,r){!r&&!t.computed&&this.nameIsConstructor(t.key)&&this.raise(p.ConstructorClassField,t.key);let i=this.parseClassAccessorProperty(t);e.body.push(i),r&&this.classScope.declarePrivateName(this.getPrivateNameSV(i.key),0,i.key.start)}pushClassMethod(e,t,r,i,a,s){e.body.push(this.parseMethod(t,r,i,a,s,"ClassMethod",!0))}pushClassPrivateMethod(e,t,r,i){let a=this.parseMethod(t,r,i,!1,!1,"ClassPrivateMethod",!0);e.body.push(a);let s=a.kind==="get"?a.static?6:2:a.kind==="set"?a.static?5:1:0;this.declareClassPrivateMethodInScope(a,s)}declareClassPrivateMethodInScope(e,t){this.classScope.declarePrivateName(this.getPrivateNameSV(e.key),t,e.key.start)}parsePostMemberNameModifiers(e){}parseClassPrivateProperty(e){return this.parseInitializer(e),this.semicolon(),this.finishNode(e,"ClassPrivateProperty")}parseClassProperty(e){return this.parseInitializer(e),this.semicolon(),this.finishNode(e,"ClassProperty")}parseClassAccessorProperty(e){return this.parseInitializer(e),this.semicolon(),this.finishNode(e,"ClassAccessorProperty")}parseInitializer(e){this.scope.enter(592),this.expressionScope.enter(ce),this.prodParam.enter(0),e.value=this.eat(25)?this.parseMaybeAssignAllowIn():null,this.expressionScope.exit(),this.prodParam.exit(),this.scope.exit()}parseClassId(e,t,r,i=8331){if(A(this.state.type))e.id=this.parseIdentifier(),this.checkStrictBindReservedWord(e.id,i),t&&this.declareNameFromIdentifier(e.id,i);else if(r||!t)e.id=null;else throw this.raise(p.MissingClassName,this.state.startLoc)}parseClassSuper(e){this.eat(77)?(this.state.canStartArrow=!1,e.superClass=this.parseExprSubscripts()):e.superClass=null}parseStructDeclaration(e,t){this.next();let r=this.state.strict;return this.state.strict=!0,this.parseClassId(e,!0,t),this.parseClassSuper(e),e.body=this.parseStructBody(!!e.superClass,r),this.finishNode(e,"StructDeclaration")}parseStructBody(e,t){this.classScope.enter();let r={hadConstructor:!1,hadSuperClass:e},i=this.startNode();for(i.body=[],this.expect(2);!this.match(4);){if(this.eat(9))continue;let a=this.startNode();this.parseClassMember(i,a,r)}return this.state.strict=t,this.next(),this.classScope.exit(),this.finishNode(i,"StructBody")}parseExport(e,t){let r=this.parseMaybeImportPhase(e,!0),i=this.maybeParseExportDefaultSpecifier(e,r),a=!i||this.eat(8),s=a&&this.eatExportStar(e),o=s&&this.maybeParseExportNamespaceSpecifier(e),_=a&&!o;if(s&&!o){if(i&&this.unexpected(),t)throw this.raise(p.UnsupportedDecoratorExport,e);return e.phase==="defer"&&this.raise(p.DeferExportInvalidAll,e),this.parseExportFrom(e,!0),this.sawUnambiguousESM=!0,this.finishNode(e,"ExportAllDeclaration")}let m=_&&this.maybeParseExportNamedSpecifiers(e),l=i||s||e.phase==="defer"||m&&e.specifiers[0]?.type==="ExportNamespaceSpecifier";i&&a&&!s&&!m&&this.unexpected(null,2);let c;if(l||m){if(c=!1,t)throw this.raise(p.UnsupportedDecoratorExport,e);this.parseExportFrom(e,l)}else c=this.maybeParseExportDeclaration(e);if(l||m||c){let g=e;if(this.checkNamedExport(g,!!g.source),g.declaration?.type==="ClassDeclaration")this.maybeTakeDecorators(t,g.declaration,g);else if(t)throw this.raise(p.UnsupportedDecoratorExport,e);return this.hasPlugin("deferredReexports")&&(g.phase??=null),this.sawUnambiguousESM=!0,this.finishNode(g,"ExportNamedDeclaration")}if(this.eat(61)){let g=e,d=this.parseExportDefaultExpression();if(g.declaration=d,d.type==="ClassDeclaration")this.maybeTakeDecorators(t,d,g);else if(t)throw this.raise(p.UnsupportedDecoratorExport,e);return this.checkDuplicateExports(e,"default"),this.hasPlugin("exportDefaultFrom")&&d.type==="Identifier"&&d.name==="from"&&d.end-d.start===4&&!d.extra?.parenthesized&&this.raise(p.ExportDefaultFromAsIdentifier,d),this.sawUnambiguousESM=!0,this.finishNode(g,"ExportDefaultDeclaration")}throw this.unexpected(null,2)}eatExportStar(e){return this.eat(51)}maybeParseExportDefaultSpecifier(e,t){if(t||this.isExportDefaultSpecifier()){this.expectPlugin("exportDefaultFrom",t?.start);let r=t||this.parseIdentifier(!0),i=this.startNodeAtNode(r);return i.exported=r,e.specifiers=[this.finishNode(i,"ExportDefaultSpecifier")],!0}return!1}maybeParseExportNamespaceSpecifier(e){if(this.isContextual(90)){e.specifiers??=[];let t=this.startNodeAt(this.state.lastTokStartLoc);return this.next(),t.exported=this.parseModuleExportName(),e.specifiers.push(this.finishNode(t,"ExportNamespaceSpecifier")),!0}return!1}maybeParseExportNamedSpecifiers(e){if(this.match(2)){let t=e;t.specifiers||(t.specifiers=[]);let r=t.exportKind==="type",i=this.state.startLoc;this.setLoc(i);let a=this.parseExportSpecifiers(r);if(this.isContextual(90)&&!this.hasPrecedingLineBreak()){this.expectPlugin("namespaceImportFilter");let s=this.startNodeAt(i);s.exportsFilter=this.toNamespaceExportsFilter(a),this.next(),s.exported=this.parseModuleExportName(),t.specifiers.push(this.finishNode(s,"ExportNamespaceSpecifier"))}else t.specifiers.push(...a);return t.source=null,t.attributes=[],t.declaration=null,!0}return!1}maybeParseExportDeclaration(e){return this.shouldParseExportDeclaration()?(e.specifiers=[],e.source=null,e.attributes=[],e.declaration=this.parseExportDeclaration(e),!0):!1}isAsyncFunction(){if(!this.isContextual(92))return!1;let e=this.nextTokenInLineStart();return this.isUnparsedContextual(e,"function")}parseExportDefaultExpression(){let e=this.startNode();if(this.match(64))return this.next(),this.parseFunction(e,5);if(this.isAsyncFunction())return this.next(),this.next(),this.parseFunction(e,13);if(this.match(76))return this.parseClass(e,!0,!0);if(this.isContextual(104)){let r=this.nextTokenInLineStart(),i=this.codePointAtPos(r);if(i===123||this.chStartsBindingIdentifier(i,r))return this.expectPlugin("structs"),this.parseStructDeclaration(e,!0)}if(this.match(22))return this.parseClass(this.maybeTakeDecorators(this.parseDecorators(!1),this.startNode()),!0,!0);if(this.match(71)||this.match(70)||this.isLet()&&!this.isReservedWordOnNewLineAfterLet(this.nextTokenStart())||this.isUsing()||this.isAwaitUsing())throw this.raise(p.UnsupportedDefaultExport,this.state.startLoc);let t=this.parseMaybeAssignAllowIn();return this.semicolon(),t}parseExportDeclaration(e){return this.match(76)?this.parseClass(this.startNode(),!0,!1):this.isContextual(104)&&this.nextTokenIsIdentifierOnSameLine()?(this.expectPlugin("structs"),this.parseStructDeclaration(this.startNode(),!1)):this.isContextual(97)?this.parseVarStatement(this.startNode(),"let"):this.parseStatementListItem()}isExportDefaultSpecifier(){let{type:e}=this.state;if(A(e)){if(e===92&&!this.state.containsEsc||e===97)return!1;if((e===129||e===128||e===104)&&!this.state.containsEsc){let i=this.nextTokenStart(),a=this.input.charCodeAt(i);if(a===123||this.chStartsBindingIdentifier(a,i)&&!this.isUnparsedContextual(i,"from"))return e!==104&&this.expectOnePlugin(["flow","typescript"]),!1}}else if(!this.match(61))return!1;let t=this.nextTokenStart(),r=this.isUnparsedContextual(t,"from");if(this.input.charCodeAt(t)===44||A(this.state.type)&&r)return!0;if(this.match(61)&&r){let i=this.input.charCodeAt(this.hasPlugin("exportDefaultFrom")?this.nextTokenStartSince(t+4):this.nextTokenInLineStartSince(t+4));return i===34||i===39}return!1}parseExportFrom(e,t){this.eatContextual(95)?(e.source=this.parseImportSource(),this.maybeParseImportAttributes(e)):t&&this.unexpected(null,95),this.semicolon()}shouldParseExportDeclaration(){let{type:e}=this.state;return e===22&&(this.expectOnePlugin(["decorators","decorators-legacy"]),this.hasPlugin("decorators"))?!0:this.isUsing()?(this.raise(p.UsingDeclarationExport,this.state.startLoc),!0):this.isAwaitUsing()?(this.raise(p.UsingDeclarationExport,this.state.startLoc),!0):e===70||e===71||e===64||e===76||this.isLet()||this.isAsyncFunction()||this.isContextual(104)&&this.nextTokenIsIdentifierOnSameLine()}checkNamedExport(e,t){if(e.specifiers?.length)for(let r of e.specifiers){let{exported:i}=r,a=i.type==="Identifier"?i.name:i.value;if(this.checkDuplicateExports(r,a),!t&&r.type==="ExportSpecifier"){let{local:s}=r;s.type!=="Identifier"?this.raise(p.ExportBindingIsString,r,{localName:s.value,exportName:a}):(this.checkReservedWord(s.name,s.start,!0,!1),this.scope.checkLocalExport(s))}}else if(e.declaration){let r=e.declaration;if(r.type==="FunctionDeclaration"||r.type==="ClassDeclaration"||r.type==="StructDeclaration"){let{id:i}=r;if(!i)throw new Error("Assertion failure");this.checkDuplicateExports(e,i.name)}else if(r.type==="VariableDeclaration")for(let i of r.declarations)this.checkDeclaration(i.id)}}checkDeclaration(e){if(e.type==="Identifier")this.checkDuplicateExports(e,e.name);else if(e.type==="ObjectPattern")for(let t of e.properties)this.checkDeclaration(t);else if(e.type==="ArrayPattern")for(let t of e.elements)t&&this.checkDeclaration(t);else e.type==="ObjectProperty"?this.checkDeclaration(e.value):e.type==="RestElement"?this.checkDeclaration(e.argument):e.type==="AssignmentPattern"&&this.checkDeclaration(e.left)}checkDuplicateExports(e,t){this.exportedIdentifiers.has(t)&&(t==="default"?this.raise(p.DuplicateDefaultExport,e):this.raise(p.DuplicateExport,e,{exportName:t})),this.exportedIdentifiers.add(t)}parseExportSpecifiers(e){let t=[],r=!0;for(this.expect(2);!this.eat(4);){if(r)r=!1;else if(this.expect(8),this.eat(4))break;let i=this.isContextual(129),a=this.match(133),s=this.startNode();s.local=this.parseModuleExportName(),t.push(this.parseExportSpecifier(s,a,e,i))}return t}parseExportSpecifier(e,t,r,i){return this.eatContextual(90)?e.exported=this.parseModuleExportName():t?e.exported=this.cloneStringLiteral(e.local):e.exported||(e.exported=this.cloneIdentifier(e.local)),this.finishNode(e,"ExportSpecifier")}parseModuleExportName(){if(this.match(133)){let e=this.parseStringLiteral(this.state.value),t=gi.exec(e.value);return t&&this.raise(p.ModuleExportNameHasLoneSurrogate,e,{surrogateCharCode:t[0].charCodeAt(0)}),e}return this.parseIdentifier(!0)}toNamespaceExportsFilter(e){let t=new Set;return e.map(r=>{let i,a,s;r.type==="ImportSpecifier"?{imported:i,local:a,importKind:s}=r:{local:i,exported:a,exportKind:s}=r;let o=i.type==="Identifier"?i.name:this.isStringModuleExportName(i)?i.value:null;o!==null&&(t.has(o)&&this.raise(p.FilteredNamespaceDuplicateName,i,{name:o}),t.add(o));let _=!1;return a.start!==i.start&&(this.raise(p.FilteredNamespaceRename,a),_=!0),(s==="type"||s==="typeof")&&(this.raise(p.FilteredNamespaceTypeModifier,r),_=!0),_?r:(this.replaceNodeInPendingComments(r,i),i)})}checkImportPhase(e){if(e.phase==null)return;let{specifiers:t}=e,r=t.length===1?t[0].type:null;e.phase==="source"?r!=="ImportDefaultSpecifier"&&this.raise(p.SourcePhaseImportRequiresDefault,e):e.phase==="defer"&&r!=="ImportNamespaceSpecifier"&&this.raise(p.DeferImportRequiresNamespace,e)}isPotentialImportPhase(e){if(e){if(!this.isContextual(94))return!1;let t=this.lookaheadCharCode();return t===123||t===42}return this.isContextual(102)||this.isContextual(94)}applyImportPhase(e,t,r,i){if(t){r==="defer"&&(this.expectPlugin("deferredReexports",i),e.phase="defer");return}r==="source"?(this.expectPlugin("sourcePhaseImports",i),e.phase="source"):r==="defer"?(this.expectPlugin("deferredImportEvaluation",i),e.phase="defer"):(this.hasPlugin("sourcePhaseImports")||this.hasPlugin("deferredImportEvaluation"))&&(e.phase=null)}parseMaybeImportPhase(e,t){if(!this.isPotentialImportPhase(t))return this.applyImportPhase(e,t,null),null;let r=this.startNode(),i=this.parseIdentifierName(!0),{type:a}=this.state;return(q(a)?a!==95||this.lookaheadCharCode()===102:a!==8)?(this.applyImportPhase(e,t,i,r.start),null):(this.applyImportPhase(e,t,null),this.createIdentifier(r,i))}isPrecedingIdImportPhase(e){let{type:t}=this.state;return A(t)?t!==95||this.lookaheadCharCode()===102:t!==8}parseImport(e){return this.match(133)?this.parseImportSourceAndAttributes(e):this.parseImportSpecifiersAndAfter(e,this.parseMaybeImportPhase(e,!1))}parseImportSpecifiersAndAfter(e,t){e.specifiers=[];let i=!this.maybeParseDefaultImportSpecifier(e,t)||this.eat(8),a=i&&this.maybeParseStarImportSpecifier(e);return i&&!a&&this.parseNamedOrFilteredImportSpecifiers(e),this.expectContextual(95),this.parseImportSourceAndAttributes(e)}parseImportSourceAndAttributes(e){return e.specifiers??=[],e.source=this.parseImportSource(),this.maybeParseImportAttributes(e),this.checkImportPhase(e),this.semicolon(),this.sawUnambiguousESM=!0,this.finishNode(e,"ImportDeclaration")}parseImportSource(){return this.match(133)||this.unexpected(),this.parseExprAtom()}parseImportSpecifierLocal(e,t,r){t.local=this.parseIdentifier(),e.specifiers.push(this.finishImportSpecifier(t,r))}finishImportSpecifier(e,t){return this.checkLVal(e.local,{type:t},8201),this.finishNode(e,t)}parseImportAttributes(){this.expect(2);let e=[],t=new Set;do{if(this.match(4))break;let r=this.startNode(),i=this.state.value;if(t.has(i)&&this.raise(p.ModuleAttributesWithDuplicateKeys,this.state.startLoc,{key:i}),t.add(i),this.match(133)?r.key=this.parseStringLiteral(i):r.key=this.parseIdentifier(!0),this.expect(10),!this.match(133))throw this.raise(p.ModuleAttributeInvalidValue,this.state.startLoc);r.value=this.parseStringLiteral(this.state.value),e.push(this.finishNode(r,"ImportAttribute"))}while(this.eat(8));return this.expect(4),e}maybeParseImportAttributes(e){let t;if(this.match(72)){if(this.hasPrecedingLineBreak()&&this.lookaheadCharCode()===40)return;this.next(),t=this.parseImportAttributes()}else t=[];e.attributes=t}maybeParseDefaultImportSpecifier(e,t){if(t){let r=this.startNodeAtNode(t);return r.local=t,e.specifiers.push(this.finishImportSpecifier(r,"ImportDefaultSpecifier")),!0}else if(q(this.state.type))return this.parseImportSpecifierLocal(e,this.startNode(),"ImportDefaultSpecifier"),!0;return!1}maybeParseStarImportSpecifier(e){if(this.match(51)){let t=this.startNode();return this.next(),this.expectContextual(90),this.parseImportSpecifierLocal(e,t,"ImportNamespaceSpecifier"),!0}return!1}parseNamedOrFilteredImportSpecifiers(e){let t=this.state.startLoc;this.setLoc(t);let r=e.specifiers.length;if(this.parseNamedImportSpecifiers(e),this.isContextual(90)){this.expectPlugin("namespaceImportFilter");let a=this.startNodeAt(t);a.exportsFilter=this.toNamespaceExportsFilter(e.specifiers.splice(r)),this.next(),this.parseImportSpecifierLocal(e,a,"ImportNamespaceSpecifier");return}let i=e.importKind==="type"||e.importKind==="typeof";for(let a=r;a<e.specifiers.length;a++)this.checkImportSpecifier(e.specifiers[a],i)}parseNamedImportSpecifiers(e){let t=!0;for(this.expect(2);!this.eat(4);){if(t)t=!1;else{if(this.eat(10))throw this.raise(p.DestructureNamedImport,this.state.startLoc);if(this.expect(8),this.eat(4))break}let r=this.startNode(),i=this.match(133),a=this.isContextual(129);r.imported=this.parseModuleExportName();let s=this.parseImportSpecifier(r,i,e.importKind==="type"||e.importKind==="typeof",a);e.specifiers.push(s)}}parseImportSpecifier(e,t,r,i){return this.eatContextual(90)?e.local=this.parseIdentifier():e.local??=this.cloneIdentifier(e.imported),this.finishNode(e,"ImportSpecifier")}checkImportSpecifier(e,t,r=8201,i=!0){let{imported:a,local:s}=e;if(this.isStringModuleExportName(s))throw this.raise(p.ImportBindingIsString,e,{importName:a.value});i&&s.start===a.start&&this.checkReservedWord(s.name,s.start,!0,!0),this.checkLVal(s,{type:"ImportSpecifier"},r)}isStringModuleExportName(e){return e.type==="StringLiteral"||e.type==="Literal"}isThisParam(e){return e.type==="Identifier"&&e.name==="this"}},Jt=/in(?:stanceof)?|as|satisfies/y;function xi(n){if(n==null)throw new Error(`Unexpected ${n} value.`);return n}function He(n){if(!n)throw new Error("Assert fail")}var bi={AbstractMethodHasImplementation:({methodName:n})=>`Method '${n}' cannot have an implementation because it is marked abstract.`,AbstractPropertyHasInitializer:({propertyName:n})=>`Property '${n}' cannot have an initializer because it is marked abstract.`,AccessorCannotBeOptional:"An 'accessor' property cannot be declared optional.",AccessorCannotDeclareThisParameter:"'get' and 'set' accessors cannot declare 'this' parameters.",AccessorCannotHaveTypeParameters:"An accessor cannot have type parameters.",ClassMethodHasDeclare:"Class methods cannot have the 'declare' modifier.",ClassMethodHasReadonly:"Class methods cannot have the 'readonly' modifier.",ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference:"A 'const' initializer in an ambient context must be a string or numeric literal or literal enum reference.",ConstructorHasTypeParameters:"Type parameters cannot appear on a constructor declaration.",DeclaratorDefiniteAssertionRequiresTypeAnnotation:"Declarations with definite assignment assertions must also have type annotations.",DeclaratorDefiniteAssertionWithInitializer:"Declarations with initializers cannot also have definite assignment assertions.",DeclareAccessor:({kind:n})=>`'declare' is not allowed in ${n}ters.`,DeclareClassFieldHasInitializer:"Initializers are not allowed in ambient contexts.",DeclareFunctionHasImplementation:"An implementation cannot be declared in ambient contexts.",DecoratorAbstractMethod:({kind:n})=>`Decorators can't be used with ${n.startsWith("a")?"an":"a"} ${n}.`,DuplicateAccessibilityModifier:({modifier:n})=>`Accessibility modifier already seen: '${n}'.`,DuplicateModifier:({modifier:n})=>`Duplicate modifier: '${n}'.`,EmptyHeritageClauseType:({token:n})=>`'${n}' list cannot be empty.`,EmptyNamespaceName:"Namespace must be given a name.",EmptyTypeArguments:"Type argument list cannot be empty.",EmptyTypeParameters:"Type parameter list cannot be empty.",ExpectedAmbientAfterExportDeclare:"'export declare' must be followed by an ambient declaration.",ExportAssignmentInTSNamespace:"An export assignment cannot be used in a namespace.",ExportInTSNamespace:"Export declarations are not permitted in a namespace.",ImportAliasHasImportType:"An import alias can not use 'import type'.",ImportInTSNamespace:"Import declarations in a namespace cannot reference a module.",IncompatibleModifiers:({modifiers:n})=>`'${n[0]}' modifier cannot be used with '${n[1]}' modifier.`,IndexSignatureHasAbstract:"Index signatures cannot have the 'abstract' modifier.",IndexSignatureHasAccessibility:({modifier:n})=>`Index signatures cannot have an accessibility modifier ('${n}').`,IndexSignatureHasDeclare:"Index signatures cannot have the 'declare' modifier.",IndexSignatureHasOverride:"'override' modifier cannot appear on an index signature.",IndexSignatureHasStatic:"Index signatures cannot have the 'static' modifier.",InitializerNotAllowedInAmbientContext:"Initializers are not allowed in ambient contexts.",InlineModuleDeclarationMustUseString:"`module ... {}` declarations must have a string name. Use `namespace ... {}` instead.",InvalidHeritageClauseType:({token:n})=>`'${n}' list can only include identifiers or qualified-names with optional type arguments.`,InvalidModifierOnAwaitUsingDeclaration:n=>`'${n}' modifier cannot appear on an await using declaration.`,InvalidModifierOnTypeMember:({modifier:n})=>`'${n}' modifier cannot appear on a type member.`,InvalidModifierOnTypeParameter:({modifier:n})=>`'${n}' modifier cannot appear on a type parameter.`,InvalidModifierOnTypeParameterPositions:({modifier:n})=>`'${n}' modifier can only appear on a type parameter of a class, interface or type alias.`,InvalidModifierOnUsingDeclaration:n=>`'${n}' modifier cannot appear on a using declaration.`,InvalidModifiersOrder:({orderedModifiers:n})=>`'${n[0]}' modifier must precede '${n[1]}' modifier.`,InvalidNamespaceName:n=>`Namespace name cannot be '${n}'.`,InvalidPropertyAccessAfterInstantiationExpression:"Invalid property access after an instantiation expression. You can either wrap the instantiation expression in parentheses, or delete the type arguments.",InvalidTupleMemberLabel:"Tuple members must be labeled with a simple identifier.",MissingInterfaceName:"'interface' declarations must be followed by an identifier.",NamespaceExportInTSNamespace:"Global module exports may only appear at top level.",NonAbstractClassHasAbstractMethod:"Abstract methods can only appear within an abstract class.",NonClassMethodPropertyHasAbstractModifier:"'abstract' modifier can only appear on a class, method, or property declaration.",OptionalTypeBeforeRequired:"A required element cannot follow an optional element.",OverrideNotInSubClass:"This member cannot have an 'override' modifier because its containing class does not extend another class.",PatternIsOptional:"A binding pattern parameter cannot be optional in an implementation signature.",PrivateElementHasAbstract:"Private elements cannot have the 'abstract' modifier.",PrivateElementHasAccessibility:({modifier:n})=>`Private elements cannot have an accessibility modifier ('${n}').`,ReadonlyForMethodSignature:"'readonly' modifier can only appear on a property declaration or index signature.",ReservedArrowTypeParam:"This syntax is reserved in files with the .mts or .cts extension. Add a trailing comma, as in `<T,>() => ...`.",ReservedTypeAssertion:"This syntax is reserved in files with the .mts or .cts extension. Use an `as` expression instead.",SetAccessorCannotHaveOptionalParameter:"A 'set' accessor cannot have an optional parameter.",SetAccessorCannotHaveRestParameter:"A 'set' accessor cannot have rest parameter.",SetAccessorCannotHaveReturnType:"A 'set' accessor cannot have a return type annotation.",SingleTypeParameterWithoutTrailingComma:({typeParameterName:n})=>`Single type parameter ${n} should have a trailing comma. Example usage: <${n},>.`,StaticBlockCannotHaveModifier:"Static class blocks cannot have any modifier.",TupleOptionalAfterType:"A labeled tuple optional element must be declared using a question mark after the name and before the colon (`name?: type`), rather than after the type (`name: type?`).",TypeAnnotationAfterAssign:"Type annotations must come before default assignments, e.g. instead of `age = 25: number` use `age: number = 25`.",TypeImportCannotSpecifyDefaultAndNamed:"A type-only import can specify a default import or named bindings, but not both.",TypeModifierIsUsedInTypeExports:"The 'type' modifier cannot be used on a named export when 'export type' is used on its export statement.",TypeModifierIsUsedInTypeImports:"The 'type' modifier cannot be used on a named import when 'import type' is used on its import statement.",UnexpectedParameterInitializer:"A parameter initializer is only allowed in a function or constructor implementation.",UnexpectedParameterModifier:"A parameter property is only allowed in a constructor implementation.",UnexpectedReadonly:"'readonly' type modifier is only permitted on array and tuple literal types.",UnexpectedTypeAnnotation:"Did not expect a type annotation here.",UnexpectedTypeCastInParameter:"Unexpected type cast in parameter position.",UnexpectedTypeDeclaration:n=>`'${n}' declarations can only be declared inside a block.`,UnsupportedImportTypeArgument:"Argument in a type import must be a string literal.",UnsupportedParameterPropertyKind:"A parameter property may not be declared using a binding pattern.",UnsupportedSignatureParameterKind:({type:n})=>`Name in a signature must be an Identifier, ObjectPattern or ArrayPattern, instead got ${n}.`,UsingDeclarationInAmbientContext:n=>`'${n}' declarations are not allowed in ambient contexts.`},h=W`typescript`(bi);function ui(n){switch(n){case"any":return"TSAnyKeyword";case"boolean":return"TSBooleanKeyword";case"bigint":return"TSBigIntKeyword";case"never":return"TSNeverKeyword";case"number":return"TSNumberKeyword";case"object":return"TSObjectKeyword";case"string":return"TSStringKeyword";case"symbol":return"TSSymbolKeyword";case"undefined":return"TSUndefinedKeyword";case"unknown":return"TSUnknownKeyword";default:return}}function Ke(n){return n==="private"||n==="public"||n==="protected"}function wi(n){return n==="in"||n==="out"}function fe(n){if(n.extra?.parenthesized)return!1;switch(n.type){case"Identifier":return!0;case"MemberExpression":return!n.computed&&fe(n.object);case"TSInstantiationExpression":return fe(n.expression);default:return!1}}function Gt(n){switch(n.type){case"TSAsExpression":case"TSSatisfiesExpression":case"TSNonNullExpression":case"TSTypeAssertion":return!0;default:return!1}}var fi=_t(["declare","private","public","protected","override","abstract","readonly","static"],["in","out"]),yi=_t(["readonly"],["declare","abstract","private","protected","public","static","override"]),Pi=_t(["public","private","protected","override","readonly"]),Si=_t(["private","public","protected"]),Ci=n=>class extends n{getScopeHandler(){return ie}tsIsIdentifier(){return A(this.state.type)}tsTokenCanFollowModifier(){return this.match(0)||this.match(2)||this.match(51)||this.match(17)||this.match(137)||this.isLiteralPropertyName()}tsNextTokenOnSameLineAndCanFollowModifier(){return this.next(),this.hasPrecedingLineBreak()?!1:this.tsTokenCanFollowModifier()}tsNextTokenCanFollowModifier(){return this.match(103)?(this.next(),this.tsTokenCanFollowModifier()):this.tsNextTokenOnSameLineAndCanFollowModifier()}tsParseModifier(t,r,i){if(!A(this.state.type)&&this.state.type!==54&&this.state.type!==71)return;let a=this.state.value;if(t.has(a)){if(i&&this.match(103)||r&&this.tsIsStartOfStaticBlocks())return;let s=this.state.containsEsc&&!A(this.state.type)?this.state.startLoc:null;if(s&&(this.state.containsEsc=!1),this.tsTryParse(this.tsNextTokenCanFollowModifier.bind(this)))return s&&this.raise(p.InvalidEscapedReservedWord,s,{reservedWord:a}),a;s&&(this.state.containsEsc=!0)}}tsParseModifiers(t,r=h.InvalidModifierOnTypeMember,i,a=!1){let s=(_,m,l,c)=>{m===l&&i[c]&&this.raise(h.InvalidModifiersOrder,_,{orderedModifiers:[l,c]})},o=(_,m,l,c)=>{(i[l]&&m===c||i[c]&&m===l)&&this.raise(h.IncompatibleModifiers,_,{modifiers:[l,c]})};for(;;){let{startLoc:_}=this.state,m=this.tsParseModifier(t,a,i.static);if(!m)break;Ke(m)?i.accessibility?this.raise(h.DuplicateAccessibilityModifier,_,{modifier:m}):(s(_,m,m,"override"),s(_,m,m,"static"),s(_,m,m,"readonly"),i.accessibility=m):wi(m)?(i[m]&&this.raise(h.DuplicateModifier,_,{modifier:m}),i[m]=!0,s(_,m,"in","out")):(Object.hasOwn(i,m)?this.raise(h.DuplicateModifier,_,{modifier:m}):(s(_,m,"static","readonly"),s(_,m,"static","override"),s(_,m,"override","readonly"),s(_,m,"abstract","override"),o(_,m,"declare","override"),o(_,m,"static","abstract")),i[m]=!0),t.get(m)||this.raise(r,_,{modifier:m})}}tsIsListTerminator(t){switch(t){case"EnumMembers":case"TypeMembers":return this.match(4);case"HeritageClauseElement":return this.match(2);case"TupleElementTypes":return this.match(1);case"TypeParametersOrArguments":return this.match(44)}}tsParseList(t,r){let i=[];for(;!this.tsIsListTerminator(t);)i.push(r());return i}tsParseDelimitedList(t,r,i){return xi(this.tsParseDelimitedListWorker(t,r,!0,i))}tsParseDelimitedListWorker(t,r,i,a){let s=[],o=-1;for(;!this.tsIsListTerminator(t);){o=-1;let _=r();if(_==null)return;if(s.push(_),this.eat(8)){o=this.state.lastTokStartLoc.index;continue}if(this.tsIsListTerminator(t))break;i&&this.expect(8);return}return a&&(a.value=o),s}tsParseBracketedList(t,r,i,a,s){a||(i?this.expect(0):this.expect(43));let o=this.tsParseDelimitedList(t,r,s);return i?this.expect(1):this.expect(44),o}tsParseImportType(){let t=this.startNode();return this.expect(79),this.expect(6),this.match(133)?t.source=this.parseStringLiteral(this.state.value):(this.raise(h.UnsupportedImportTypeArgument,this.state.startLoc),t.source=this.tsParseNonConditionalType()),this.eat(8)?t.options=this.tsParseImportTypeOptions():t.options=null,this.expect(7),this.eat(12)&&(t.qualifier=this.tsParseEntityName(3)),this.match(43)&&(t.typeArguments=this.tsParseTypeArguments()),this.finishNode(t,"TSImportType")}tsParseImportTypeOptions(){let t=this.startNode();this.expect(2);let r=this.startNode();return this.isContextual(72)?(r.method=!1,r.key=this.parseIdentifier(!0),r.computed=!1,r.shorthand=!1):this.unexpected(null,72),this.expect(10),r.value=this.tsParseImportTypeWithPropertyValue(),t.properties=[this.finishObjectProperty(r)],this.eat(8),this.expect(4),this.finishNode(t,"ObjectExpression")}tsParseImportTypeWithPropertyValue(){let t=this.startNode(),r=[];for(this.expect(2);!this.match(4);){let i=this.state.type;A(i)||i===133?r.push(super.parsePropertyDefinition(null)):this.unexpected(),this.eat(8)}return t.properties=r,this.next(),this.finishNode(t,"ObjectExpression")}tsParseEntityName(t){let r;if(t&1&&this.match(74))if(t&2)r=this.parseIdentifier(!0);else{let i=this.startNode();this.next(),r=this.finishNode(i,"ThisExpression")}else r=this.parseIdentifier(!!(t&1));for(;this.eat(12);){let i=this.startNodeAtNode(r);i.left=r,i.right=this.parseIdentifier(!!(t&1)),r=this.finishNode(i,"TSQualifiedName")}return r}tsParseTypeReference(){let t=this.startNode();return t.typeName=this.tsParseEntityName(1),!this.hasPrecedingLineBreak()&&this.match(43)&&(t.typeArguments=this.tsParseTypeArguments()),this.finishNode(t,"TSTypeReference")}tsParseThisTypePredicate(t){this.next();let r=this.startNodeAtNode(t);return r.parameterName=t,r.typeAnnotation=this.tsParseTypeAnnotation(!1),r.asserts=!1,this.finishNode(r,"TSTypePredicate")}tsParseThisTypeNode(){let t=this.startNode();return this.next(),this.finishNode(t,"TSThisType")}tsParseTypeQuery(){let t=this.startNode();return this.expect(83),this.match(79)?t.exprName=this.tsParseImportType():t.exprName=this.tsParseEntityName(1),!this.hasPrecedingLineBreak()&&this.match(43)&&(t.typeArguments=this.tsParseTypeArguments()),this.finishNode(t,"TSTypeQuery")}tsParseInOutModifiers=this.tsParseModifiers.bind(this,_t(["in","out"],["const","public","private","protected","readonly","declare","abstract","override"]),h.InvalidModifierOnTypeParameter);tsParseConstModifier=this.tsParseModifiers.bind(this,_t(["const"],["in","out"]),h.InvalidModifierOnTypeParameterPositions);tsParseInOutConstModifiers=this.tsParseModifiers.bind(this,_t(["in","out","const"],["public","private","protected","readonly","declare","abstract","override"]),h.InvalidModifierOnTypeParameter);tsParseTypeParameter(t){let r=this.startNode();return t(r),r.name=this.tsParseTypeParameterName(),r.constraint=this.tsEatThenParseType(77),r.default=this.tsEatThenParseType(25),this.finishNode(r,"TSTypeParameter")}tsTryParseTypeParameters(t){if(this.match(43))return this.tsParseTypeParameters(t)}tsParseTypeParameters(t){let r=this.startNode();this.match(43)||this.match(141)?this.next():this.unexpected();let i={value:-1};return r.params=this.tsParseBracketedList("TypeParametersOrArguments",this.tsParseTypeParameter.bind(this,t),!1,!0,i),r.params.length===0&&this.raise(h.EmptyTypeParameters,r),i.value!==-1&&this.addExtra(r,"trailingComma",i.value),this.finishNode(r,"TSTypeParameterDeclaration")}tsFillSignature(t,r){let i=t===15,a="params",s="returnType";r.typeParameters=this.tsTryParseTypeParameters(this.tsParseConstModifier),this.expect(6),r[a]=this.tsParseBindingListForSignature(),i?r[s]=this.tsParseTypeOrTypePredicateAnnotation(t):this.match(t)&&(r[s]=this.tsParseTypeOrTypePredicateAnnotation(t))}tsParseBindingListForSignature(){let t=super.parseBindingList(7,41,2);for(let r of t){let{type:i}=r;(i==="AssignmentPattern"||i==="TSParameterProperty")&&this.raise(h.UnsupportedSignatureParameterKind,r,{type:i})}return t}tsParseTypeMemberSemicolon(){!this.eat(8)&&!this.isLineTerminator()&&this.expect(9)}tsParseSignatureMember(t,r){return this.tsFillSignature(10,r),this.tsParseTypeMemberSemicolon(),this.finishNode(r,t)}tsIsUnambiguouslyIndexSignature(){return this.next(),A(this.state.type)?(this.next(),this.match(10)):!1}tsTryParseIndexSignature(t){if(!(this.match(0)&&this.tsLookAhead(this.tsIsUnambiguouslyIndexSignature.bind(this))))return;this.expect(0);let r=this.parseIdentifier();r.typeAnnotation=this.tsParseTypeAnnotation(),this.resetEndLocation(r),this.expect(1),t.parameters=[r];let i=this.tsTryParseTypeAnnotation();return i&&(t.typeAnnotation=i),this.tsParseTypeMemberSemicolon(),this.finishNode(t,"TSIndexSignature")}tsParsePropertyOrMethodSignature(t,r){if(this.eat(13)&&(t.optional=!0),this.match(6)||this.match(43)){r&&this.raise(h.ReadonlyForMethodSignature,t);let i=t;if(i.kind&&this.match(43)&&this.raise(h.AccessorCannotHaveTypeParameters,this.state.curPosition()),this.tsFillSignature(10,i),this.tsParseTypeMemberSemicolon(),i.kind==="get")i.params.length>0&&(this.raise(p.BadGetterArity,this.state.curPosition()),this.isThisParam(i.params[0])&&this.raise(h.AccessorCannotDeclareThisParameter,this.state.curPosition()));else if(i.kind==="set"){if(i.params.length!==1)this.raise(p.BadSetterArity,this.state.curPosition());else{let a=i.params[0];this.isThisParam(a)&&this.raise(h.AccessorCannotDeclareThisParameter,this.state.curPosition()),a.type==="Identifier"&&a.optional&&this.raise(h.SetAccessorCannotHaveOptionalParameter,this.state.curPosition()),a.type==="RestElement"&&this.raise(h.SetAccessorCannotHaveRestParameter,this.state.curPosition())}i.returnType&&this.raise(h.SetAccessorCannotHaveReturnType,i.returnType)}else i.kind="method";return this.finishNode(i,"TSMethodSignature")}else{let i=t;r&&(i.readonly=!0);let a=this.tsTryParseTypeAnnotation();return a&&(i.typeAnnotation=a),this.tsParseTypeMemberSemicolon(),this.finishNode(i,"TSPropertySignature")}}tsParseTypeMember(){let t=this.startNode();if(this.match(6)||this.match(43))return this.tsParseSignatureMember("TSCallSignatureDeclaration",t);if(this.match(73)){let i=this.startNode();return this.next(),this.match(6)||this.match(43)?this.tsParseSignatureMember("TSConstructSignatureDeclaration",t):(t.key=this.createIdentifier(i,"new"),this.tsParsePropertyOrMethodSignature(t,!1))}this.tsParseModifiers(yi,void 0,t);let r=this.tsTryParseIndexSignature(t);return r||(super.parsePropertyName(t),!t.computed&&t.key.type==="Identifier"&&(t.key.name==="get"||t.key.name==="set")&&this.tsTokenCanFollowModifier()&&(t.kind=t.key.name,super.parsePropertyName(t),!this.match(6)&&!this.match(43)&&this.unexpected(null,6)),this.tsParsePropertyOrMethodSignature(t,!!t.readonly))}tsParseTypeLiteral(){let t=this.startNode();return t.members=this.tsParseObjectTypeMembers(),this.finishNode(t,"TSTypeLiteral")}tsParseObjectTypeMembers(){this.expect(2);let t=this.tsParseList("TypeMembers",this.tsParseTypeMember.bind(this));return this.expect(4),t}tsIsStartOfMappedType(){return this.next(),this.eat(49)?this.isContextual(121):(this.isContextual(121)&&this.next(),!this.match(0)||(this.next(),!this.tsIsIdentifier())?!1:(this.next(),this.match(54)))}tsParseMappedType(){let t=this.startNode();return this.expect(2),this.match(49)?(t.readonly=this.state.value,this.next(),this.expectContextual(121)):this.eatContextual(121)&&(t.readonly=!0),this.expect(0),t.key=this.tsParseTypeParameterName(),t.constraint=this.tsExpectThenParseType(54),t.nameType=this.eatContextual(90)?this.tsParseType():null,this.expect(1),this.match(49)?(t.optional=this.state.value,this.next(),this.expect(13)):this.eat(13)&&(t.optional=!0),t.typeAnnotation=this.tsTryParseType(),this.semicolon(),this.expect(4),this.finishNode(t,"TSMappedType")}tsParseTupleType(){let t=this.startNode();t.elementTypes=this.tsParseBracketedList("TupleElementTypes",this.tsParseTupleElementType.bind(this),!0,!1);let r=!1;return t.elementTypes.forEach(i=>{let{type:a}=i;r&&a!=="TSRestType"&&a!=="TSOptionalType"&&!(a==="TSNamedTupleMember"&&i.optional)&&this.raise(h.OptionalTypeBeforeRequired,i),r||=a==="TSNamedTupleMember"&&i.optional||a==="TSOptionalType"}),this.finishNode(t,"TSTupleType")}tsParseTupleElementType(){let t=this.state.startLoc,r=this.eat(17),{startLoc:i}=this.state,a,s,o,_,l=q(this.state.type)?this.lookaheadCharCode():null;if(l===58)a=!0,o=!1,s=this.parseIdentifier(!0),this.expect(10),_=this.tsParseType();else if(l===63){o=!0;let c=this.state.value,g=this.tsParseNonArrayType();this.lookaheadCharCode()===58?(a=!0,s=this.createIdentifier(this.startNodeAt(i),c),this.expect(13),this.expect(10),_=this.tsParseType()):(a=!1,_=g,this.expect(13))}else _=this.tsParseType(),o=this.eat(13),a=this.eat(10);if(a){let c;s?(c=this.startNodeAt(i),c.optional=o,c.label=s,c.elementType=_,this.eat(13)&&(c.optional=!0,this.raise(h.TupleOptionalAfterType,this.state.lastTokStartLoc))):(c=this.startNodeAt(i),c.optional=o,this.raise(h.InvalidTupleMemberLabel,_),c.label=_,c.elementType=this.tsParseType()),_=this.finishNode(c,"TSNamedTupleMember")}else if(o){let c=this.startNodeAt(i);c.typeAnnotation=_,_=this.finishNode(c,"TSOptionalType")}if(r){let c=this.startNodeAt(t);c.typeAnnotation=_,_=this.finishNode(c,"TSRestType")}return _}tsParseParenthesizedType(){let t=this.startNode();return this.expect(6),t.typeAnnotation=this.tsParseType(),this.expect(7),this.finishNode(t,"TSParenthesizedType")}tsParseFunctionOrConstructorType(t,r){let i=this.startNode();return t==="TSConstructorType"&&(i.abstract=!!r,r&&this.next(),this.next()),this.tsInAllowConditionalTypesContext(()=>this.tsFillSignature(15,i)),this.finishNode(i,t)}tsParseLiteralTypeNode(){let t=this.startNode();switch(this.state.type){case 134:case 135:case 133:case 81:case 82:t.literal=super.parseExprAtom();break;default:this.unexpected()}return this.finishNode(t,"TSLiteralType")}tsParseTemplateLiteralType(){let t=this.state.startLoc,r=this.parseTemplateElement(!1),i=[r];if(r.tail){let a=this.startNodeAt(t),s=this.startNodeAt(t);return s.expressions=[],s.quasis=i,a.literal=this.finishNode(s,"TemplateLiteral"),this.finishNode(a,"TSLiteralType")}else{let a=[];for(;!r.tail;)a.push(this.tsParseType()),this.readTemplateContinuation(),i.push(r=this.parseTemplateElement(!1));let s=this.startNodeAt(t);return s.types=a,s.quasis=i,this.finishNode(s,"TSTemplateLiteralType")}}parseTemplateSubstitution(){return this.state.inType?this.tsParseType():super.parseTemplateSubstitution()}tsParseThisTypeOrThisTypePredicate(){let t=this.tsParseThisTypeNode();return this.isContextual(115)&&!this.hasPrecedingLineBreak()?this.tsParseThisTypePredicate(t):t}tsParseNonArrayType(){switch(this.state.type){case 133:case 134:case 135:case 81:case 82:return this.tsParseLiteralTypeNode();case 49:if(this.state.value==="-"){let t=this.startNode(),r=this.lookahead();return r.type!==134&&r.type!==135&&this.unexpected(),t.literal=this.parseMaybeUnary(),this.finishNode(t,"TSLiteralType")}break;case 74:return this.tsParseThisTypeOrThisTypePredicate();case 83:return this.tsParseTypeQuery();case 79:return this.tsParseImportType();case 2:return this.tsLookAhead(this.tsIsStartOfMappedType.bind(this))?this.tsParseMappedType():this.tsParseTypeLiteral();case 0:return this.tsParseTupleType();case 6:if(!(this.optionFlags&2048)){let t=this.state.startLoc;this.next();let r=this.tsParseType();return this.expect(7),this.addExtra(r,"parenthesized",!0),this.addExtra(r,"parenStart",t.index),r}return this.tsParseParenthesizedType();case 21:case 20:return this.tsParseTemplateLiteralType();default:{let{type:t}=this.state;if(A(t)||t===84||t===80){let r=t===84?"TSVoidKeyword":t===80?"TSNullKeyword":ui(this.state.value);if(r!==void 0&&this.lookaheadCharCode()!==46){let i=this.startNode();return this.next(),this.finishNode(i,r)}return this.tsParseTypeReference()}}}throw this.unexpected()}tsParseArrayTypeOrHigher(){let{startLoc:t}=this.state,r=this.tsParseNonArrayType();for(;!this.hasPrecedingLineBreak()&&this.eat(0);)if(this.match(1)){let i=this.startNodeAt(t);i.elementType=r,this.expect(1),r=this.finishNode(i,"TSArrayType")}else{let i=this.startNodeAt(t);i.objectType=r,i.indexType=this.tsParseType(),this.expect(1),r=this.finishNode(i,"TSIndexedAccessType")}return r}tsParseTypeOperator(){let t=this.startNode(),r=this.state.value;return this.next(),t.operator=r,t.typeAnnotation=this.tsParseTypeOperatorOrHigher(),r==="readonly"&&this.tsCheckTypeAnnotationForReadOnly(t),this.finishNode(t,"TSTypeOperator")}tsCheckTypeAnnotationForReadOnly(t){switch(t.typeAnnotation.type){case"TSTupleType":case"TSArrayType":return;default:this.raise(h.UnexpectedReadonly,t)}}tsParseInferType(){let t=this.startNode();this.expectContextual(114);let r=this.startNode();return r.name=this.tsParseTypeParameterName(),r.constraint=this.tsTryParse(()=>this.tsParseConstraintForInferType()),t.typeParameter=this.finishNode(r,"TSTypeParameter"),this.finishNode(t,"TSInferType")}tsParseConstraintForInferType(){if(this.eat(77)){let t=this.tsInDisallowConditionalTypesContext(()=>this.tsParseType());if(this.state.inDisallowConditionalTypesContext||!this.match(13))return t}}tsParseTypeOperatorOrHigher(){return Fr(this.state.type)&&!this.state.containsEsc?this.tsParseTypeOperator():this.isContextual(114)?this.tsParseInferType():this.tsInAllowConditionalTypesContext(()=>this.tsParseArrayTypeOrHigher())}tsParseUnionOrIntersectionType(t,r,i){let a=this.startNode(),s=this.eat(i),o=[];do o.push(r());while(this.eat(i));return o.length===1&&!s?o[0]:(a.types=o,this.finishNode(a,t))}tsParseIntersectionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSIntersectionType",this.tsParseTypeOperatorOrHigher.bind(this),41)}tsParseUnionTypeOrHigher(){return this.tsParseUnionOrIntersectionType("TSUnionType",this.tsParseIntersectionTypeOrHigher.bind(this),39)}tsIsStartOfFunctionType(){return this.match(43)?!0:this.match(6)&&this.tsLookAhead(this.tsIsUnambiguouslyStartOfFunctionType.bind(this))}tsSkipParameterStart(){if(A(this.state.type)||this.match(74))return this.next(),!0;let t=this.match(2);if(t||this.match(0)){t||this.next();let{errors:r}=this.state,i=r.length,a=this.snapshotScopeStacks();try{return t?this.parseObjectLike(4,!0):super.parseBindingList(1,93,1),r.length===i}catch{return this.restoreScopeStacks(a),!1}}return!1}tsIsUnambiguouslyStartOfFunctionType(){return this.next(),!!(this.match(7)||this.match(17)||this.tsSkipParameterStart()&&(this.match(10)||this.match(8)||this.match(13)||this.match(25)||this.match(7)&&(this.next(),this.match(15))))}tsParseTypeOrTypePredicateAnnotation(t){return this.tsInType(()=>{let r=this.startNode();this.expect(t);let i=this.startNode(),a=!!this.tsTryParse(this.tsParseTypePredicateAsserts.bind(this));if(a&&this.match(74)){let _=this.tsParseThisTypeOrThisTypePredicate();return _.type==="TSThisType"?(i.parameterName=_,i.asserts=!0,i.typeAnnotation=null,_=this.finishNode(i,"TSTypePredicate")):(this.resetStartLocationFromNode(_,i),_.asserts=!0),r.typeAnnotation=_,this.finishNode(r,"TSTypeAnnotation")}let s=this.tsIsIdentifier()&&this.tsTryParse(this.tsParseTypePredicatePrefix.bind(this));if(!s)return a?(i.parameterName=this.parseIdentifier(),i.asserts=a,i.typeAnnotation=null,r.typeAnnotation=this.finishNode(i,"TSTypePredicate"),this.finishNode(r,"TSTypeAnnotation")):this.tsParseTypeAnnotation(!1,r);let o=this.tsParseTypeAnnotation(!1);return i.parameterName=s,i.typeAnnotation=o,i.asserts=a,r.typeAnnotation=this.finishNode(i,"TSTypePredicate"),this.finishNode(r,"TSTypeAnnotation")})}tsTryParseTypeOrTypePredicateAnnotation(){if(this.match(10))return this.tsParseTypeOrTypePredicateAnnotation(10)}tsTryParseTypeAnnotation(){if(this.match(10))return this.tsParseTypeAnnotation()}tsTryParseType(){return this.tsEatThenParseType(10)}tsParseTypePredicatePrefix(){let t=this.parseIdentifier();if(this.isContextual(115)&&!this.hasPrecedingLineBreak())return this.next(),t}tsParseTypePredicateAsserts(){if(this.state.type!==108)return!1;let t=this.state.containsEsc;return this.next(),!A(this.state.type)&&!this.match(74)?!1:(t&&this.raise(p.InvalidEscapedReservedWord,this.state.lastTokStartLoc,{reservedWord:"asserts"}),!0)}tsParseTypeAnnotation(t=!0,r=this.startNode()){return this.tsInType(()=>{t&&this.expect(10),r.typeAnnotation=this.tsParseType()}),this.finishNode(r,"TSTypeAnnotation")}tsParseType(){He(this.state.inType);let t=this.tsParseNonConditionalType();if(this.state.inDisallowConditionalTypesContext||this.hasPrecedingLineBreak()||!this.eat(77))return t;let r=this.startNodeAtNode(t);return r.checkType=t,r.extendsType=this.tsInDisallowConditionalTypesContext(()=>this.tsParseNonConditionalType()),this.expect(13),r.trueType=this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),this.expect(10),r.falseType=this.tsInAllowConditionalTypesContext(()=>this.tsParseType()),this.finishNode(r,"TSConditionalType")}isAbstractConstructorSignature(){return this.isContextual(123)&&this.isLookaheadContextual("new")}tsParseNonConditionalType(){return this.tsIsStartOfFunctionType()?this.tsParseFunctionOrConstructorType("TSFunctionType"):this.match(73)?this.tsParseFunctionOrConstructorType("TSConstructorType"):this.isAbstractConstructorSignature()?this.tsParseFunctionOrConstructorType("TSConstructorType",!0):this.tsParseUnionTypeOrHigher()}tsParseTypeAssertion(){this.getPluginOption("typescript","disallowAmbiguousJSXLike")&&this.raise(h.ReservedTypeAssertion,this.state.startLoc);let t=this.startNode();return t.typeAnnotation=this.tsInType(()=>(this.next(),this.match(71)?this.tsParseTypeReference():this.tsParseType())),this.expect(44),this.state.canStartArrow=!1,t.expression=this.parseMaybeUnary(),this.finishNode(t,"TSTypeAssertion")}tsParseHeritageClause(t){let r=this.state.startLoc,i=this.tsParseDelimitedList("HeritageClauseElement",()=>{let a=(this.state.canStartArrow=!1,super.parseExprSubscripts());fe(a)||this.raise(h.InvalidHeritageClauseType,a.start,{token:t});let s=t==="extends"?"TSInterfaceHeritage":"TSClassImplements";if(a.type==="TSInstantiationExpression")return a.type=s,a;let o=this.startNodeAtNode(a);return o.expression=a,(this.match(43)||this.match(47))&&(o.typeArguments=this.tsParseTypeArgumentsInExpression()),this.finishNode(o,s)});return i.length||this.raise(h.EmptyHeritageClauseType,r,{token:t}),i}tsParseInterfaceDeclaration(t,r={}){if(this.hasFollowingLineBreak())return null;this.expectContextual(128),r.declare&&(t.declare=!0),A(this.state.type)?(t.id=this.parseIdentifier(),this.checkIdentifier(t.id,130)):(t.id=null,this.raise(h.MissingInterfaceName,this.state.startLoc)),t.typeParameters=this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers),this.eat(77)&&(t.extends=this.tsParseHeritageClause("extends"));let i=this.startNode();return i.body=this.tsInType(this.tsParseObjectTypeMembers.bind(this)),t.body=this.finishNode(i,"TSInterfaceBody"),this.finishNode(t,"TSInterfaceDeclaration")}tsParseTypeAliasDeclaration(t){return t.id=this.parseIdentifier(),this.checkIdentifier(t.id,2),t.typeAnnotation=this.tsInType(()=>{if(t.typeParameters=this.tsTryParseTypeParameters(this.tsParseInOutModifiers),this.expect(25),this.isContextual(113)&&this.lookaheadCharCode()!==46){let r=this.startNode();return this.next(),this.finishNode(r,"TSIntrinsicKeyword")}return this.tsParseType()}),this.semicolon(),this.finishNode(t,"TSTypeAliasDeclaration")}tsInTopLevelContext(t){if(this.curContext()!==L.brace){let r=this.state.context;this.state.context=[r[0]];try{return t()}finally{this.state.context=r}}else return t()}tsInType(t){let r=this.state.inType;this.state.inType=!0;try{return t()}finally{this.state.inType=r}}tsInDisallowConditionalTypesContext(t){let r=this.state.inDisallowConditionalTypesContext;this.state.inDisallowConditionalTypesContext=!0;try{return t()}finally{this.state.inDisallowConditionalTypesContext=r}}tsInAllowConditionalTypesContext(t){let r=this.state.inDisallowConditionalTypesContext;this.state.inDisallowConditionalTypesContext=!1;try{return t()}finally{this.state.inDisallowConditionalTypesContext=r}}tsEatThenParseType(t){if(this.match(t))return this.tsNextThenParseType()}tsExpectThenParseType(t){return this.tsInType(()=>(this.expect(t),this.tsParseType()))}tsNextThenParseType(){return this.tsInType(()=>(this.next(),this.tsParseType()))}tsParseEnumMember(){let t=this.startNode();return t.id=this.match(133)?super.parseStringLiteral(this.state.value):this.parseIdentifier(!0),this.eat(25)&&(t.initializer=super.parseMaybeAssignAllowIn()),this.finishNode(t,"TSEnumMember")}tsParseEnumDeclaration(t,r={}){return r.const&&(t.const=!0),r.declare&&(t.declare=!0),this.expectContextual(125),t.id=this.parseIdentifier(),this.checkIdentifier(t.id,t.const?8971:8459),t.body=this.tsParseEnumBody(),this.finishNode(t,"TSEnumDeclaration")}tsParseEnumBody(){let t=this.startNode();return this.expect(2),t.members=this.tsParseDelimitedList("EnumMembers",this.tsParseEnumMember.bind(this)),this.expect(4),this.finishNode(t,"TSEnumBody")}tsParseModuleBlock(t){let r=this.startNode();return t||this.scope.enter(0),this.expect(2),super.parseBlockOrModuleBlockBody(r.body=[],void 0,!0,4),t||this.scope.exit(),this.finishNode(r,"TSModuleBlock")}tsParseNamespaceDeclaration(t){return t.id=this.tsParseEntityName(0),t.id.type==="Identifier"&&this.checkIdentifier(t.id,1024),this.scope.enter(2048),this.prodParam.enter(0),t.body=this.tsParseModuleBlock(!1),this.prodParam.exit(),this.scope.exit(),this.finishNode(t,"TSModuleDeclaration")}tsParseAmbientExternalModuleDeclaration(t){let r=this.isContextual(111);if(r)t.kind="global",t.id=this.parseIdentifier();else{t.kind="module";let{type:i,value:a}=this.state;i===133?t.id=super.parseStringLiteral(a):A(i)?(this.raise(h.InlineModuleDeclarationMustUseString,this.state.startLoc),t.id=this.tsParseEntityName(0)):i===2?this.raise(h.EmptyNamespaceName,this.state.startLoc):(this.raise(h.InvalidNamespaceName,this.state.startLoc,a),t.id=super.parseExprAtom())}return this.match(2)?(r||this.scope.enter(1024),this.prodParam.enter(0),t.body=this.tsParseModuleBlock(r),this.prodParam.exit(),r||this.scope.exit()):this.semicolon(),this.finishNode(t,"TSModuleDeclaration")}tsParseImportEqualsDeclaration(t,r){t.id=r||this.parseIdentifier(),this.checkIdentifier(t.id,4096),this.expect(25);let i=this.tsParseModuleReference();return t.importKind==="type"&&i.type!=="TSExternalModuleReference"&&this.raise(h.ImportAliasHasImportType,i),t.moduleReference=i,this.semicolon(),this.finishNode(t,"TSImportEqualsDeclaration")}tsIsExternalModuleReference(){return this.isContextual(118)&&this.lookaheadCharCode()===40}tsParseModuleReference(){return this.tsIsExternalModuleReference()?this.tsParseExternalModuleReference():this.tsParseEntityName(0)}tsParseExternalModuleReference(){let t=this.startNode();return this.expectContextual(118),this.expect(6),this.match(133)||this.unexpected(),t.expression=super.parseExprAtom(),this.expect(7),this.sawUnambiguousESM=!0,this.finishNode(t,"TSExternalModuleReference")}tsLookAhead(t){let r=this.state.clone(),i=t();return this.state=r,i}tsTryParseAndCatch(t){let r=this.tryParse(i=>t()||i());if(!(r.aborted||!r.node))return r.error&&(this.state=r.failState),r.node}tsTryParse(t){let r=this.state.clone(),i=t();if(i!==void 0&&i!==!1)return i;this.state=r}tsTryParseDeclare(t){if(this.isLineTerminator())return;let r=this.state.type;return this.tsInAmbientContext(()=>{switch(r){case 64:return t.declare=!0,super.parseFunctionStatement(t,!1,2);case 76:return t.declare=!0,this.parseClass(t,!0,!1);case 125:return this.tsParseEnumDeclaration(t,{declare:!0});case 111:return this.tsParseAmbientExternalModuleDeclaration(t);case 97:if(this.state.containsEsc)return;case 71:case 70:return!this.match(71)||!this.isLookaheadContextual("enum")?(t.declare=!0,this.parseVarStatement(t,this.state.value,!0)):(this.expect(71),this.tsParseEnumDeclaration(t,{const:!0,declare:!0}));case 106:if(this.isUsing())return this.raise(h.InvalidModifierOnUsingDeclaration,this.state.startLoc,"declare"),t.declare=!0,this.parseVarStatement(t,"using",!0);break;case 93:if(this.isAwaitUsing())return this.raise(h.InvalidModifierOnAwaitUsingDeclaration,this.state.startLoc,"declare"),t.declare=!0,this.next(),this.parseVarStatement(t,"await using",!0);break;case 128:{let i=this.tsParseInterfaceDeclaration(t,{declare:!0});if(i)return i}default:if(A(r))return this.tsParseDeclaration(t,this.state.type,!0,null)}})}tsTryParseExportDeclaration(){return this.tsParseDeclaration(this.startNode(),this.state.type,!0,null)}tsParseDeclaration(t,r,i,a){switch(r){case 123:if(this.tsCheckLineTerminator(i)&&(this.match(76)||A(this.state.type)))return this.tsParseAbstractDeclaration(t,a);break;case 126:if(this.tsCheckLineTerminator(i))return this.tsParseAmbientExternalModuleDeclaration(t);break;case 127:if(this.tsCheckLineTerminator(i)&&A(this.state.type))return t.kind="namespace",this.tsParseNamespaceDeclaration(t);break;case 129:if(this.tsCheckLineTerminator(i)&&A(this.state.type))return this.tsParseTypeAliasDeclaration(t);break}}tsCheckLineTerminator(t){return t?this.hasFollowingLineBreak()?!1:(this.next(),!0):!this.isLineTerminator()}tsTryParseGenericAsyncArrowFunction(t){if(!this.match(43))return;let r=this.tsTryParseAndCatch(()=>{let i=this.startNodeAt(t);return i.typeParameters=this.tsParseTypeParameters(this.tsParseConstModifier),super.parseFunctionParams(i),i.returnType=this.tsTryParseTypeOrTypePredicateAnnotation(),this.expect(15),i});if(r)return super.parseArrowExpression(r,null,!0)}tsParseTypeArgumentsInExpression(){if(this.reScan_lt()===43)return this.tsParseTypeArguments()}tsParseTypeArguments(){let t=this.startNode();return t.params=this.tsInType(()=>this.tsInTopLevelContext(()=>(this.expect(43),this.tsParseDelimitedList("TypeParametersOrArguments",this.tsParseType.bind(this))))),t.params.length===0?this.raise(h.EmptyTypeArguments,t):!this.state.inType&&this.curContext()===L.brace&&this.reScan_lt_gt(),this.expect(44),this.finishNode(t,"TSTypeParameterInstantiation")}tsIsDeclarationStart(){return Br(this.state.type)}isExportDefaultSpecifier(){return this.tsIsDeclarationStart()?!1:super.isExportDefaultSpecifier()}parseBindingElement(t,r){let i=r.length?null:this.state.startLoc,a={};this.tsParseModifiers(Pi,void 0,a);let s=a.accessibility,o=a.override,_=a.readonly;!(t&4)&&(s||_||o)&&this.raise(h.UnexpectedParameterModifier,i||r[0]);let m=this.state.startLoc,l=this.parseMaybeDefault(m);t&2&&this.parseFunctionParamType(l);let c=this.parseMaybeDefault(m,l);if(s||_||o){let g=i?this.startNodeAt(i):this.startNodeAtNode(r[0]);return r.length&&(g.decorators=r),s&&(g.accessibility=s),_&&(g.readonly=_),o&&(g.override=o),c.type!=="Identifier"&&c.type!=="AssignmentPattern"&&this.raise(h.UnsupportedParameterPropertyKind,i||r[0]),g.parameter=c,this.finishNode(g,"TSParameterProperty")}return r.length&&(l.decorators=r),c}isSimpleParameter(t){return t.type==="TSParameterProperty"&&super.isSimpleParameter(t.parameter)||super.isSimpleParameter(t)}tsDisallowOptionalPattern(t){for(let r of t.params)r.type!=="Identifier"&&r.optional&&!this.state.isAmbientContext&&this.raise(h.PatternIsOptional,r)}setArrowFunctionParameters(t,r,i){super.setArrowFunctionParameters(t,r,i),this.tsDisallowOptionalPattern(t)}parseFunctionBodyAndFinish(t,r,i=!1){this.match(10)&&(t.returnType=this.tsParseTypeOrTypePredicateAnnotation(10));let a=r==="FunctionDeclaration"?"TSDeclareFunction":r==="ClassMethod"||r==="ClassPrivateMethod"?"TSDeclareMethod":void 0;if(a&&!this.match(2)&&this.isLineTerminator()){if(a==="TSDeclareMethod"&&t.kind==="constructor")for(let s of t.params)s.type==="TSParameterProperty"?this.raise(h.UnexpectedParameterModifier,s):s.type==="AssignmentPattern"&&this.raise(h.UnexpectedParameterInitializer,s);else for(let s of t.params)s.type==="AssignmentPattern"&&this.raise(h.UnexpectedParameterInitializer,s);return this.finishNode(t,a)}return a&&this.state.isAmbientContext&&(this.raise(h.DeclareFunctionHasImplementation,this.state.startLoc),a==="TSDeclareFunction"&&t.declare)?super.parseFunctionBodyAndFinish(t,a,i):(this.tsDisallowOptionalPattern(t),super.parseFunctionBodyAndFinish(t,r,i))}registerFunctionStatementId(t){!t.body&&t.id?this.checkIdentifier(t.id,1024):super.registerFunctionStatementId(t)}tsCheckForInvalidTypeCasts(t){t.forEach(r=>{r?.type==="TSTypeCastExpression"&&this.raise(h.UnexpectedTypeAnnotation,r.typeAnnotation)})}toReferencedList(t,r){return this.tsCheckForInvalidTypeCasts(t),t}parseArrayLike(t,r){let i=super.parseArrayLike(t,r);return i.type==="ArrayExpression"&&this.tsCheckForInvalidTypeCasts(i.elements),i}parseSubscript(t,r,i,a){if(!this.hasPrecedingLineBreak()&&this.match(31)){this.state.canStartJSXElement=!1,this.next();let o=this.startNodeAt(r);return o.expression=t,this.finishNode(o,"TSNonNullExpression")}let s=!1;if(this.match(14)&&this.lookaheadCharCode()===60){if(i)return a.stop=!0,t;a.optionalChainMember=s=!0,this.next()}if(this.match(43)||this.match(47)){let o,_=this.tsTryParseAndCatch(()=>{if(!i&&this.atPossibleAsyncArrow(t)){let g=this.tsTryParseGenericAsyncArrowFunction(r);if(g)return a.stop=!0,g}let m=this.tsParseTypeArgumentsInExpression();if(!m)return;if(s&&!this.match(6)){o=this.state.curPosition();return}if(Yt(this.state.type)){let g=super.parseTaggedTemplateExpression(t,r,a);return g.typeArguments=m,g}if(!i&&this.eat(6)){let g=this.startNodeAt(r);return g.callee=t,g.arguments=this.parseCallExpressionArguments(),this.tsCheckForInvalidTypeCasts(g.arguments),g.typeArguments=m,a.optionalChainMember&&(g.optional=s),this.finishCallExpression(g,a.optionalChainMember)}let l=this.state.type;if(l===44||l===48||l!==6&&l!==90&&l!==119&&wt(l)&&!this.hasPrecedingLineBreak())return;let c=this.startNodeAt(r);return c.expression=t,c.typeArguments=m,this.finishNode(c,"TSInstantiationExpression")});if(o&&this.unexpected(o,6),_)return _.type==="TSInstantiationExpression"&&((this.match(12)||this.match(14)&&this.lookaheadCharCode()!==40)&&this.raise(h.InvalidPropertyAccessAfterInstantiationExpression,this.state.startLoc),!this.match(12)&&!this.match(14)&&(_.expression=super.stopParseSubscript(t,a))),_}return super.parseSubscript(t,r,i,a)}parseNewCallee(t){super.parseNewCallee(t);let{callee:r}=t;r.type==="TSInstantiationExpression"&&!r.extra?.parenthesized&&(t.typeArguments=r.typeArguments,t.callee=r.expression)}parseExprOp(t,r,i){let a;if(It(54)>i&&!this.hasPrecedingLineBreak()&&(this.isContextual(90)||(a=this.isContextual(119)))){let s=this.startNodeAt(r);s.expression=t,s.typeAnnotation=this.tsInType(()=>(this.next(),this.match(71)?(a&&this.raise(p.UnexpectedKeyword,this.state.startLoc,{keyword:"const"}),this.tsParseTypeReference()):this.tsParseType()));let o=this.finishNode(s,a?"TSSatisfiesExpression":"TSAsExpression");return this.reScan_lt_gt(),this.parseExprOp(o,r,i)}return super.parseExprOp(t,r,i)}checkReservedWord(t,r,i,a){this.state.isAmbientContext||super.checkReservedWord(t,r,i,a)}checkDuplicateExports(){}isPotentialImportPhase(t){if(super.isPotentialImportPhase(t))return!0;if(this.isContextual(129)){let r=this.lookaheadCharCode();return t?r===123||r===42:r!==61}return!t&&this.isContextual(83)}applyImportPhase(t,r,i,a){super.applyImportPhase(t,r,i,a),r?t.exportKind=i==="type"?"type":"value":t.importKind=i==="type"||i==="typeof"?i:"value"}parseImport(t){if(this.match(133))return t.importKind="value",this.scope.inTSNamespace&&this.raise(h.ImportInTSNamespace,t),super.parseImport(t);let r;if(A(this.state.type)&&this.lookaheadCharCode()===61){t.importKind="value";let i=this.tsParseImportEqualsDeclaration(t);return this.scope.inTSNamespace&&i.moduleReference.type==="TSExternalModuleReference"&&this.raise(h.ImportInTSNamespace,t),i}else if(this.isContextual(129)){let i=this.parseMaybeImportPhase(t,!1);if(this.lookaheadCharCode()===61)return this.scope.inTSNamespace&&this.raise(h.ImportInTSNamespace,t),this.tsParseImportEqualsDeclaration(t,i);r=super.parseImportSpecifiersAndAfter(t,i)}else r=super.parseImport(t);return r.importKind==="type"&&r.specifiers.length>1&&r.specifiers[0].type==="ImportDefaultSpecifier"?this.raise(h.TypeImportCannotSpecifyDefaultAndNamed,r):this.scope.inTSNamespace&&this.raise(h.ImportInTSNamespace,r),r}parseExport(t,r){if(this.match(79)){let i=this.startNode();this.next();let a=null;this.isContextual(129)&&this.isPotentialImportPhase(!1)?a=this.parseMaybeImportPhase(i,!1):i.importKind="value";let s=this.tsParseImportEqualsDeclaration(i,a);return t.attributes=[],t.declaration=s,t.exportKind="value",t.source=null,t.specifiers=[],this.finishNode(t,"ExportNamedDeclaration")}else if(this.eat(25)){let i=t;return i.expression=super.parseExpression(),this.semicolon(),this.sawUnambiguousESM=!0,this.scope.inTSNamespace&&this.raise(h.ExportAssignmentInTSNamespace,i),this.finishNode(i,"TSExportAssignment")}else if(this.eatContextual(90)){let i=t;return this.expectContextual(127),i.id=this.parseIdentifier(),this.checkIdentifier(i.id,8201),this.semicolon(),this.scope.inTSNamespace&&this.raise(h.NamespaceExportInTSNamespace,i),this.finishNode(i,"TSNamespaceExportDeclaration")}else{let i=super.parseExport(t,r);return this.scope.inTSNamespace&&(i.type!=="ExportNamedDeclaration"||i.source||!i.declaration&&!this.state.isAmbientContext)&&this.raise(h.ExportInTSNamespace,i),i}}isAbstractClass(){return this.isContextual(123)&&this.isLookaheadContextual("class")}parseExportDefaultExpression(){if(this.isAbstractClass()){let t=this.startNode();return this.next(),t.abstract=!0,this.parseClass(t,!0,!0)}if(this.match(128)){let t=this.tsParseInterfaceDeclaration(this.startNode());if(t)return t}return super.parseExportDefaultExpression()}parseVarStatement(t,r,i=!1){let{isAmbientContext:a}=this.state,s=super.parseVarStatement(t,r,i||a);if(a&&!t.declare&&(r==="using"||r==="await using"))return this.raiseOverwrite(h.UsingDeclarationInAmbientContext,t,r),s;for(let o of s.declarations){let{id:_,init:m,definite:l}=o;l&&(m?this.raise(h.DeclaratorDefiniteAssertionWithInitializer,_):_.typeAnnotation||this.raise(h.DeclaratorDefiniteAssertionRequiresTypeAnnotation,_)),a&&m&&(r==="var"||r==="let"||_.typeAnnotation?this.raise(h.InitializerNotAllowedInAmbientContext,m):Oi(m,this.hasPlugin("estree"))||this.raise(h.ConstInitializerMustBeStringOrNumericLiteralOrLiteralEnumReference,m))}return s}parseStatementContent(t,r){let i=!!(t&2);if(!this.state.containsEsc)switch(this.state.type){case 71:{if(this.isLookaheadContextual("enum")){let a=this.startNode();return this.next(),this.tsParseEnumDeclaration(a,{const:!0})}break}case 123:case 124:{if(this.nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine()){let a=this.state.type,s=this.startNode();this.next();let o=a===124?this.tsTryParseDeclare(s):this.tsParseAbstractDeclaration(s,r);return o?(a===124&&(o.declare=!0),o):(s.expression=this.createIdentifier(this.startNodeAtNode(s),a===124?"declare":"abstract"),this.semicolon(!1),this.finishNode(s,"ExpressionStatement"))}break}case 125:return this.tsParseEnumDeclaration(this.startNode());case 111:{if(this.lookaheadCharCode()===123){let s=this.startNode();return this.tsParseAmbientExternalModuleDeclaration(s)}break}case 128:{let a=this.tsParseInterfaceDeclaration(this.startNode());if(a)return i||this.raise(h.UnexpectedTypeDeclaration,a,"interface"),a;break}case 126:{if(this.nextTokenIsStringLiteralOnSameLine()){let a=this.startNode();return this.next(),this.tsParseDeclaration(a,126,!1,r)}else if(this.nextTokenIsIdentifierOnSameLine()){this.raise(h.InlineModuleDeclarationMustUseString,this.state.startLoc);let a=this.startNode();return this.next(),this.tsParseDeclaration(a,127,!1,r)}break}case 127:{if(this.nextTokenIsIdentifierOnSameLine()){let a=this.startNode();return this.next(),this.tsParseDeclaration(a,127,!1,r)}break}case 129:{if(this.nextTokenIsIdentifierOnSameLine()){let a=this.startNode();return i||this.raise(h.UnexpectedTypeDeclaration,a,"type"),this.next(),this.tsParseTypeAliasDeclaration(a)}break}}return super.parseStatementContent(t,r)}parseAccessModifier(){return this.tsParseModifier(Si)}tsHasSomeModifiers(t,r){return r.some(i=>Ke(i)?t.accessibility===i:!!t[i])}tsIsStartOfStaticBlocks(){return this.isContextual(103)&&this.lookaheadCharCode()===123}parseClassMember(t,r,i){this.tsParseModifiers(fi,h.InvalidModifierOnTypeParameterPositions,r,!0);let a=()=>{this.tsIsStartOfStaticBlocks()?(this.next(),this.next(),this.tsHasSomeModifiers(r,["declare","private","public","protected","override","abstract","readonly","static"])&&this.raise(h.StaticBlockCannotHaveModifier,this.state.curPosition()),super.parseClassStaticBlock(t,r)):this.parseClassMemberWithIsStatic(t,r,i,!!r.static)};r.declare?this.tsInAmbientContext(a):a(),r.decorators&&r.decorators.length>0&&!this.hasPlugin("decorators-legacy")&&(r.type==="TSAbstractMethodDefinition"||r.type==="TSDeclareMethod"?this.raise(h.DecoratorAbstractMethod,r,{kind:"abstract method"}):(r.type==="ClassProperty"&&r.abstract||r.type==="ClassProperty"&&r.declare||r.type==="TSAbstractPropertyDefinition"||r.type==="PropertyDefinition"&&r.declare)&&this.raise(h.DecoratorAbstractMethod,r,{kind:r.declare?"declare field":"abstract field"}))}parseClassMemberWithIsStatic(t,r,i,a){let s=this.tsTryParseIndexSignature(r);if(s){t.body.push(s),r.abstract&&this.raise(h.IndexSignatureHasAbstract,r),r.accessibility&&this.raise(h.IndexSignatureHasAccessibility,r,{modifier:r.accessibility}),r.declare&&this.raise(h.IndexSignatureHasDeclare,r),r.override&&this.raise(h.IndexSignatureHasOverride,r);return}!this.state.inAbstractClass&&r.abstract&&this.raise(h.NonAbstractClassHasAbstractMethod,r),r.override&&(i.hadSuperClass||this.raise(h.OverrideNotInSubClass,r)),super.parseClassMemberWithIsStatic(t,r,i,a)}parsePostMemberNameModifiers(t){this.eat(13)&&(t.optional=!0),t.readonly&&this.match(6)&&this.raise(h.ClassMethodHasReadonly,t),t.declare&&this.match(6)&&this.raise(h.ClassMethodHasDeclare,t)}shouldParseExportDeclaration(){return this.tsIsDeclarationStart()?!0:super.shouldParseExportDeclaration()}parseConditional(t,r,i){if(!this.match(13))return t;if(i!=null){let o=this.lookaheadCharCode();if(o===44||o===61||o===58||o===41)return this.setOptionalParametersError(i),t}this.next();let a=this.startNodeAt(r);a.test=t;let s=this.state.inConditionalConsequent;return this.state.inConditionalConsequent=!0,a.consequent=this.parseMaybeAssignAllowIn(),this.state.inConditionalConsequent=s,this.expect(10),a.alternate=this.parseMaybeAssign(),this.finishNode(a,"ConditionalExpression")}parseParenItem(t,r){let i=super.parseParenItem(t,r);if(this.eat(13)&&(i.optional=!0,this.resetEndLocation(t)),this.match(10)){let a=this.startNodeAt(r);return a.expression=t,a.typeAnnotation=this.tsParseTypeAnnotation(),this.finishNode(a,"TSTypeCastExpression")}return t}parseExportDeclaration(t){if(!this.state.isAmbientContext&&this.isContextual(124))return this.tsInAmbientContext(()=>this.parseExportDeclaration(t));let r=this.state.startLoc,i=this.eatContextual(124);if(i&&(this.isContextual(124)||!this.shouldParseExportDeclaration()))throw this.raise(h.ExpectedAmbientAfterExportDeclare,this.state.startLoc);let s=A(this.state.type)&&this.tsTryParseExportDeclaration()||super.parseExportDeclaration(t);return s?((s.type==="TSInterfaceDeclaration"||s.type==="TSTypeAliasDeclaration"||i)&&(t.exportKind="type"),i&&s.type!=="TSImportEqualsDeclaration"&&(this.resetStartLocation(s,r),s.declare=!0),s):null}parseClassId(t,r,i,a){if((!r||i)&&this.isContextual(112)){t.id=null;return}super.parseClassId(t,r,i,t.declare?1024:8331);let s=this.tsTryParseTypeParameters(this.tsParseInOutConstModifiers);s&&(t.typeParameters=s)}parseClassPropertyAnnotation(t){t.optional||(this.eat(31)?t.definite=!0:this.eat(13)&&(t.optional=!0));let r=this.tsTryParseTypeAnnotation();r&&(t.typeAnnotation=r),t.definite&&(this.match(25)?this.raise(h.DeclaratorDefiniteAssertionWithInitializer,t):r||this.raise(h.DeclaratorDefiniteAssertionRequiresTypeAnnotation,t))}parseClassProperty(t){if(this.parseClassPropertyAnnotation(t),this.state.isAmbientContext&&!(t.readonly&&!t.typeAnnotation)&&this.match(25)&&this.raise(h.DeclareClassFieldHasInitializer,this.state.startLoc),t.abstract&&this.match(25)){let{key:r}=t;this.raise(h.AbstractPropertyHasInitializer,this.state.startLoc,{propertyName:r.type==="Identifier"&&!t.computed?r.name:`[${this.input.slice(this.offsetToSourcePos(r.start),this.offsetToSourcePos(r.end))}]`})}return super.parseClassProperty(t)}parseClassPrivateProperty(t){return t.abstract&&this.raise(h.PrivateElementHasAbstract,t),t.accessibility&&this.raise(h.PrivateElementHasAccessibility,t,{modifier:t.accessibility}),this.parseClassPropertyAnnotation(t),super.parseClassPrivateProperty(t)}parseClassAccessorProperty(t){return this.parseClassPropertyAnnotation(t),t.optional&&this.raise(h.AccessorCannotBeOptional,t),super.parseClassAccessorProperty(t)}pushClassMethod(t,r,i,a,s,o){let _=this.tsTryParseTypeParameters(this.tsParseConstModifier);_&&s&&this.raise(h.ConstructorHasTypeParameters,_);let{declare:m=!1,kind:l}=r;m&&(l==="get"||l==="set")&&this.raise(h.DeclareAccessor,r,{kind:l}),_&&(r.typeParameters=_),super.pushClassMethod(t,r,i,a,s,o)}pushClassPrivateMethod(t,r,i,a){let s=this.tsTryParseTypeParameters(this.tsParseConstModifier);s&&(r.typeParameters=s),super.pushClassPrivateMethod(t,r,i,a)}declareClassPrivateMethodInScope(t,r){t.type!=="TSDeclareMethod"&&(t.type==="MethodDefinition"&&t.value.body==null||super.declareClassPrivateMethodInScope(t,r))}parseClassSuper(t){if(super.parseClassSuper(t),t.superClass)if(t.superClass.type==="TSInstantiationExpression"){let r=t.superClass,i=r.expression;this.takeSurroundingComments(i,i.start,i.end);let a=r.typeArguments;this.takeSurroundingComments(a,a.start,a.end),t.superClass=i,t.superTypeArguments=a}else(this.match(43)||this.match(47))&&(t.superTypeArguments=this.tsParseTypeArgumentsInExpression());this.eatContextual(112)&&(t.implements=this.tsParseHeritageClause("implements"))}parseObjPropValue(t,r,i,a,s,o,_){let m=this.tsTryParseTypeParameters(this.tsParseConstModifier);return m&&(t.typeParameters=m),super.parseObjPropValue(t,r,i,a,s,o,_)}parseFunctionParams(t,r){let i=this.tsTryParseTypeParameters(this.tsParseConstModifier);i&&(t.typeParameters=i),super.parseFunctionParams(t,r)}parseVarId(t,r){super.parseVarId(t,r),t.id.type==="Identifier"&&!this.hasPrecedingLineBreak()&&this.eat(31)&&(t.definite=!0);let i=this.tsTryParseTypeAnnotation();i&&(t.id.typeAnnotation=i,this.resetEndLocation(t.id))}parseAsyncArrowFromCallExpression(t,r){return this.match(10)&&(t.returnType=this.tsParseTypeAnnotation()),super.parseAsyncArrowFromCallExpression(t,r)}parseMaybeAssign(t,r){let i,a,s;if(this.hasPlugin("jsx")&&(this.match(141)||this.match(43))){if(i=this.state.clone(),a=this.tryParse(()=>super.parseMaybeAssign(t,r),i),!a.error)return a.node;let{context:m}=this.state,l=m[m.length-1];(l===L.j_oTag||l===L.j_expr)&&m.pop()}if(!a?.error&&!this.match(43))return super.parseMaybeAssign(t,r);(!i||i===this.state)&&(i=this.state.clone());let o,_=this.tryParse(m=>{o=this.tsParseTypeParameters(this.tsParseConstModifier);let l=super.parseMaybeAssign(t,r);if((l.type!=="ArrowFunctionExpression"||l.extra?.parenthesized)&&m(),o?.params.length!==0&&this.resetStartLocationFromNode(l,o),l.typeParameters=o,this.hasPlugin("jsx")&&l.typeParameters.params.length===1&&!l.typeParameters.extra?.trailingComma){let c=l.typeParameters.params[0];c.constraint||this.raise(h.SingleTypeParameterWithoutTrailingComma,this.optionFlags&256?H(c.loc.end,1):c,{typeParameterName:c.name.name})}return l},i);if(!_.error&&!_.aborted)return o&&this.reportReservedArrowTypeParam(o),_.node;if(!a&&(He(!this.hasPlugin("jsx")),s=this.tryParse(()=>super.parseMaybeAssign(t,r),i),!s.error))return s.node;if(a?.node)return this.state=a.failState,a.node;if(_.node)return this.state=_.failState,o&&this.reportReservedArrowTypeParam(o),_.node;if(s?.node)return this.state=s.failState,s.node;throw a?.error||_.error||s?.error}reportReservedArrowTypeParam(t){t.params.length===1&&!t.params[0].constraint&&!t.extra?.trailingComma&&this.getPluginOption("typescript","disallowAmbiguousJSXLike")&&this.raise(h.ReservedArrowTypeParam,t)}parseMaybeUnary(t,r){return!this.hasPlugin("jsx")&&this.match(43)?this.tsParseTypeAssertion():super.parseMaybeUnary(t,r)}parseArrow(t){if(this.match(10)){let r=this.tryParse(i=>{let a=this.tsParseTypeOrTypePredicateAnnotation(10);return(this.canInsertSemicolon()||!this.match(15))&&i(),a});if(r.aborted)return;r.thrown||(r.error&&(this.state=r.failState),t.returnType=r.node)}return super.parseArrow(t)}parseFunctionParamType(t){this.eat(13)&&(t.optional=!0);let r=this.tsTryParseTypeAnnotation();return r&&(t.typeAnnotation=r),this.resetEndLocation(t),t}isAssignable(t,r){switch(t.type){case"TSTypeCastExpression":return this.isAssignable(t.expression,r);case"TSParameterProperty":return!0;default:return super.isAssignable(t,r)}}toAssignable(t,r=!1){if(Gt(t)){r?this.expressionScope.recordArrowParameterBindingError(h.UnexpectedTypeCastInParameter,t):this.raiseOnce(h.UnexpectedTypeCastInParameter,t),this.toAssignable(t.expression,r);return}switch(t.type){case"ParenthesizedExpression":this.toAssignableParenthesizedExpression(t,r);break;case"AssignmentExpression":!r&&t.left.type==="TSTypeCastExpression"&&(t.left=this.typeCastToParameter(t.left));default:super.toAssignable(t,r)}}toAssignableParenthesizedExpression(t,r){Gt(t.expression)||t.expression.type==="ParenthesizedExpression"?this.toAssignable(t.expression,r):super.toAssignable(t,r)}checkToRestConversion(t,r){Gt(t)?this.checkToRestConversion(t.expression,!1):super.checkToRestConversion(t,r)}isValidLVal(t,r,i,a){switch(t){case"TSTypeCastExpression":return!0;case"TSParameterProperty":return"parameter";case"TSNonNullExpression":return"expression";case"TSAsExpression":case"TSSatisfiesExpression":case"TSTypeAssertion":return(a!==64||!i)&&["expression",!0];default:return super.isValidLVal(t,r,i,a)}}parseBindingAtom(){return this.state.type===74?this.parseIdentifier(!0):super.parseBindingAtom()}parseMaybeDecoratorArguments(t,r){if(this.match(43)||this.match(47)){let i=this.tsParseTypeArgumentsInExpression();if(this.match(6)){let a=super.parseMaybeDecoratorArguments(t,r);return a.typeArguments=i,a}this.unexpected(null,6)}return super.parseMaybeDecoratorArguments(t,r)}checkCommaAfterRest(t){return this.state.isAmbientContext&&this.match(8)&&this.lookaheadCharCode()===t?(this.next(),!1):super.checkCommaAfterRest(t)}isClassMethod(){return this.match(43)||super.isClassMethod()}isClassProperty(){return this.match(31)||this.match(10)||super.isClassProperty()}parseMaybeDefault(t,r){let i=super.parseMaybeDefault(t,r);return i.type==="AssignmentPattern"&&i.typeAnnotation&&i.right.start<i.typeAnnotation.start&&this.raise(h.TypeAnnotationAfterAssign,i.typeAnnotation),i}getTokenFromCode(t){if(this.state.inType){if(t===62){this.finishOp(44,1);return}if(t===60){this.finishOp(43,1);return}}super.getTokenFromCode(t)}reScan_lt_gt(){let{type:t}=this.state;t===43?(this.state.pos-=1,this.readToken_lt()):t===44&&(this.state.pos-=1,this.readToken_gt())}reScan_lt(){let{type:t}=this.state;return t===47?(this.state.pos-=2,this.finishOp(43,1),43):t}toAssignableListItem(t,r,i){let a=t[r];a.type==="TSTypeCastExpression"&&(t[r]=this.typeCastToParameter(a)),super.toAssignableListItem(t,r,i)}typeCastToParameter(t){return t.expression.typeAnnotation=t.typeAnnotation,this.resetEndLocationFromNode(t.expression,t.typeAnnotation),t.expression}shouldParseArrow(t){return this.match(10)?t.every(r=>this.isAssignable(r,!0)):super.shouldParseArrow(t)}shouldParseAsyncArrow(){return this.match(10)?!this.state.inConditionalConsequent:super.shouldParseAsyncArrow()}parseParenAndDistinguishExpression(t){let r=this.state.inConditionalConsequent;this.state.inConditionalConsequent=!1;let i=super.parseParenAndDistinguishExpression(t);return this.state.inConditionalConsequent=r,i}canHaveLeadingDecorator(){return super.canHaveLeadingDecorator()||this.isAbstractClass()}jsxParseOpeningElementAfterName(t){if(this.match(43)||this.match(47)){let r=this.tsTryParseAndCatch(()=>this.tsParseTypeArgumentsInExpression());r&&(t.typeArguments=r)}return super.jsxParseOpeningElementAfterName(t)}getGetterSetterExpectedParamCount(t){let r=super.getGetterSetterExpectedParamCount(t),a=this.getObjectOrClassMethodParams(t)[0];return a&&this.isThisParam(a)?r+1:r}parseCatchClauseParam(){let t=super.parseCatchClauseParam(),r=this.tsTryParseTypeAnnotation();return r&&(t.typeAnnotation=r,this.resetEndLocation(t)),t}tsInAmbientContext(t){let{isAmbientContext:r,strict:i}=this.state;this.state.isAmbientContext=!0,this.state.strict=!1;try{return t()}finally{this.state.isAmbientContext=r,this.state.strict=i}}parseClass(t,r,i){let a=this.state.inAbstractClass;this.state.inAbstractClass=!!t.abstract;try{return super.parseClass(t,r,i)}finally{this.state.inAbstractClass=a}}tsParseAbstractDeclaration(t,r){if(this.match(76))return t.abstract=!0,this.maybeTakeDecorators(r,this.parseClass(t,!0,!1));if(this.isContextual(128))return this.hasFollowingLineBreak()?null:(t.abstract=!0,this.raise(h.NonClassMethodPropertyHasAbstractModifier,t),this.tsParseInterfaceDeclaration(t));throw this.unexpected(null,76)}parseMethod(t,r,i,a,s,o,_){let m=super.parseMethod(t,r,i,a,s,o,_);if((m.abstract||m.type==="TSAbstractMethodDefinition")&&(this.hasPlugin("estree")?m.value:m).body){let{key:g}=m;this.raise(h.AbstractMethodHasImplementation,m,{methodName:g.type==="Identifier"&&!m.computed?g.name:`[${this.input.slice(this.offsetToSourcePos(g.start),this.offsetToSourcePos(g.end))}]`})}return m}tsParseTypeParameterName(){return this.parseIdentifier()}shouldParseAsAmbientContext(){return!!this.getPluginOption("typescript","dts")}parse(){return this.shouldParseAsAmbientContext()&&(this.state.isAmbientContext=!0),super.parse()}getExpression(){return this.shouldParseAsAmbientContext()&&(this.state.isAmbientContext=!0),super.getExpression()}parseExportSpecifier(t,r,i,a){return!r&&a?(this.parseTypeOnlyExportSpecifier(t,i),this.finishNode(t,"ExportSpecifier")):(t.exportKind="value",super.parseExportSpecifier(t,r,i,a))}parseImportSpecifier(t,r,i,a){return!r&&a?(this.parseTypeOnlyImportSpecifier(t),this.finishNode(t,"ImportSpecifier")):(t.importKind="value",super.parseImportSpecifier(t,r,i,a))}checkImportSpecifier(t,r){let i=t.importKind==="type";i&&r&&this.raise(h.TypeModifierIsUsedInTypeImports,t),super.checkImportSpecifier(t,r,i||r?4098:4096)}parseTypeOnlyImportSpecifier(t){let r=t.imported,i=!1;if(this.isContextual(90)){let a=this.parseIdentifier();if(this.isContextual(90)){let s=this.parseIdentifier();q(this.state.type)?(i=!0,r=a,t.local=this.parseIdentifier()):t.local=s}else q(this.state.type)?t.local=this.parseIdentifier():(i=!0,r=a)}else q(this.state.type)&&(i=!0,r=this.parseIdentifier(!0));t.imported=r,t.importKind=i?"type":"value",t.local??=this.eatContextual(90)?this.parseIdentifier():this.cloneIdentifier(t.imported)}parseTypeOnlyExportSpecifier(t,r){let i=t.local,a=!1;if(this.isContextual(90)){let s=this.parseIdentifier();if(this.isContextual(90)){let o=this.parseIdentifier();q(this.state.type)?(a=!0,t.local=s,t.exported=this.parseModuleExportName()):t.exported=o}else q(this.state.type)?t.exported=this.parseModuleExportName():(a=!0,t.local=s)}else q(this.state.type)&&(a=!0,t.local=this.parseModuleExportName());a&&r&&this.raise(h.TypeModifierIsUsedInTypeExports,i),t.exportKind=a?"type":"value",t.exported??=this.eatContextual(90)?this.parseModuleExportName():this.cloneIdentifier(t.local)}fillOptionalPropertiesForTSESLint(t){switch(t.type){case"ImportDeclaration":t.phase??=null;return;case"ExpressionStatement":t.directive??=void 0;return;case"RestElement":t.value=void 0;case"Identifier":case"ArrayPattern":case"AssignmentPattern":case"ObjectPattern":t.decorators??=[],t.optional??=!1,t.typeAnnotation??=void 0;return;case"TSParameterProperty":t.accessibility??=void 0,t.decorators??=[],t.override??=!1,t.readonly??=!1,t.static??=!1;return;case"TSEmptyBodyFunctionExpression":t.body=null;case"TSDeclareFunction":case"FunctionDeclaration":case"FunctionExpression":case"ClassMethod":case"ClassPrivateMethod":t.declare??=!1,t.returnType??=void 0,t.typeParameters??=void 0;return;case"Property":t.optional??=!1;return;case"TSMethodSignature":case"TSPropertySignature":t.optional??=!1;case"TSIndexSignature":t.accessibility??=void 0,t.readonly??=!1,t.static??=!1;return;case"TSAbstractPropertyDefinition":case"PropertyDefinition":case"TSAbstractAccessorProperty":case"AccessorProperty":t.declare??=!1,t.definite??=!1,t.readonly??=!1,t.typeAnnotation??=void 0;case"TSAbstractMethodDefinition":case"MethodDefinition":t.accessibility??=void 0,t.decorators??=[],t.override??=!1,t.optional??=!1;return;case"ClassExpression":t.id??=null;case"ClassDeclaration":t.abstract??=!1,t.declare??=!1,t.decorators??=[],t.implements??=[],t.superTypeArguments??=void 0,t.typeParameters??=void 0;return;case"TSTypeAliasDeclaration":case"VariableDeclaration":t.declare??=!1;return;case"VariableDeclarator":t.definite??=!1;return;case"TSEnumDeclaration":t.const??=!1,t.declare??=!1;return;case"TSEnumMember":t.computed??=!1;return;case"TSImportType":t.qualifier??=null,t.options??=null,t.typeArguments??=null;return;case"TSInterfaceDeclaration":t.declare??=!1,t.extends??=[];return;case"TSMappedType":t.optional??=!1,t.readonly??=void 0;return;case"TSModuleDeclaration":t.declare??=!1,t.global??=t.kind==="global";return;case"TSTypeParameter":t.const??=!1,t.in??=!1,t.out??=!1;return}}chStartsBindingIdentifierAndNotRelationalOperator(t,r){if(J(t)){if(Jt.lastIndex=r,Jt.test(this.input)){let i=this.codePointAtPos(Jt.lastIndex);if(!at(i)&&i!==92)return!1}return!0}else return t===92}nextTokenIsIdentifierAndNotTSRelationalOperatorOnSameLine(){let t=this.nextTokenInLineStart(),r=this.codePointAtPos(t);return this.chStartsBindingIdentifierAndNotRelationalOperator(r,t)}nextTokenIsStringLiteralOnSameLine(){let t=this.nextTokenInLineStart(),r=this.codePointAtPos(t);return r===34||r===39}};function Ei(n){if(n.type!=="MemberExpression")return!1;let{computed:e,property:t}=n;return e&&t.type!=="StringLiteral"&&(t.type!=="TemplateLiteral"||t.expressions.length>0)?!1:mr(n.object)}function Oi(n,e){let{type:t}=n;if(n.extra?.parenthesized)return!1;if(e){if(t==="Literal"){let{value:r}=n;if(typeof r=="string"||typeof r=="boolean")return!0}}else if(t==="StringLiteral"||t==="BooleanLiteral")return!0;return!!(_r(n,e)||vi(n,e)||t==="TemplateLiteral"&&n.expressions.length===0||Ei(n))}function _r(n,e){return e?n.type==="Literal"&&(typeof n.value=="number"||"bigint"in n):n.type==="NumericLiteral"||n.type==="BigIntLiteral"}function vi(n,e){if(n.type==="UnaryExpression"){let{operator:t,argument:r}=n;if(t==="-"&&_r(r,e))return!0}return!1}function mr(n){return n.type==="Identifier"?!0:n.type!=="MemberExpression"||n.computed?!1:mr(n.object)}function _t(n,e=[]){let t=new Map;for(let r of n)t.set(r,!0);for(let r of e)t.set(r,!1);return t}var ki={ClassNameIsRequired:"A class name is required.",UnexpectedSpace:"Unexpected space in placeholder."},We=W`placeholders`(ki),Ti=n=>class extends n{parsePlaceholder(t){if(this.match(132)){let r=this.startNode();return this.next(),this.assertNoSpace(),r.name=super.parseIdentifier(!0),this.assertNoSpace(),this.expect(132),this.finishPlaceholder(r,t)}}finishPlaceholder(t,r){let i=t;return(!i.expectedNode||!i.type)&&(i=this.finishNode(i,"Placeholder")),i.expectedNode=r,i}getTokenFromCode(t){t===37&&this.input.charCodeAt(this.state.pos+1)===37?this.finishOp(132,2):super.getTokenFromCode(t)}parseExprAtom(t){return this.parsePlaceholder("Expression")||super.parseExprAtom(t)}parseIdentifier(t){return this.parsePlaceholder("Identifier")||super.parseIdentifier(t)}checkReservedWord(t,r,i,a){t!==void 0&&super.checkReservedWord(t,r,i,a)}cloneIdentifier(t){let r=super.cloneIdentifier(t);return r.type==="Placeholder"&&(r.expectedNode=t.expectedNode),r}cloneStringLiteral(t){return t.type==="Placeholder"?this.cloneIdentifier(t):super.cloneStringLiteral(t)}parseBindingAtom(){return this.parsePlaceholder("Pattern")||super.parseBindingAtom()}isValidLVal(t,r,i,a){return t==="Placeholder"||super.isValidLVal(t,r,i,a)}toAssignable(t,r){t&&t.type==="Placeholder"&&t.expectedNode==="Expression"?t.expectedNode="Pattern":super.toAssignable(t,r)}chStartsBindingIdentifier(t,r){if(super.chStartsBindingIdentifier(t,r))return!0;let i=this.nextTokenStart();return this.input.charCodeAt(i)===37&&this.input.charCodeAt(i+1)===37}verifyBreakContinue(t,r){t.label?.type!=="Placeholder"&&super.verifyBreakContinue(t,r)}parseExpressionStatement(t,r,i){if(r.type!=="Placeholder"||r.extra?.parenthesized)return super.parseExpressionStatement(t,r,i);if(this.match(10)){let s=t;return s.label=this.finishPlaceholder(r,"Identifier"),this.next(),s.body=i&8?super.parseStatementOrSloppyAnnexBFunctionDeclaration(!0):super.parseStatement(),this.finishNode(s,"LabeledStatement")}this.semicolon();let a=t;return a.name=r.name,this.finishPlaceholder(a,"Statement")}parseBlock(t,r,i){return this.parsePlaceholder("BlockStatement")||super.parseBlock(t,r,i)}parseFunctionId(t){return this.parsePlaceholder("Identifier")||super.parseFunctionId(t)}parseClass(t,r,i){let a=r?"ClassDeclaration":"ClassExpression";this.next();let s=this.state.strict,o=this.parsePlaceholder("Identifier");if(o)if(this.match(77)||this.match(132)||this.match(2))t.id=o;else{if(i||!r)return t.id=null,t.body=this.finishPlaceholder(o,"ClassBody"),this.finishNode(t,a);throw this.raise(We.ClassNameIsRequired,this.state.startLoc)}else this.parseClassId(t,r,i);return super.parseClassSuper(t),t.body=this.parsePlaceholder("ClassBody")||super.parseClassBody(!!t.superClass,s),this.finishNode(t,a)}parseExport(t,r){let i=this.parsePlaceholder("Identifier");if(!i)return super.parseExport(t,r);let a=t;if(!this.isContextual(95)&&!this.match(8))return a.specifiers=[],a.source=null,a.declaration=this.finishPlaceholder(i,"Declaration"),this.finishNode(a,"ExportNamedDeclaration");this.expectPlugin("exportDefaultFrom");let s=this.startNode();return s.exported=i,a.specifiers=[this.finishNode(s,"ExportDefaultSpecifier")],super.parseExport(a,r)}isExportDefaultSpecifier(){if(this.match(61)){let t=this.nextTokenStart();if(this.isUnparsedContextual(t,"from")&&this.input.startsWith(it(132),this.hasPlugin("exportDefaultFrom")?this.nextTokenStartSince(t+4):this.nextTokenInLineStartSince(t+4)))return!0}return super.isExportDefaultSpecifier()}maybeParseExportDefaultSpecifier(t,r){return t.specifiers?.length?!0:super.maybeParseExportDefaultSpecifier(t,r)}checkNamedExport(){}parseImport(t){let r=this.parsePlaceholder("Identifier");if(!r)return super.parseImport(t);if(t.specifiers=[],!this.isContextual(95)&&!this.match(8))return t.source=this.finishPlaceholder(r,"StringLiteral"),this.semicolon(),this.finishNode(t,"ImportDeclaration");let i=this.startNodeAtNode(r);return i.local=r,t.specifiers.push(this.finishNode(i,"ImportDefaultSpecifier")),this.eat(8)&&(this.maybeParseStarImportSpecifier(t)||this.parseNamedOrFilteredImportSpecifiers(t)),this.expectContextual(95),t.source=this.parseImportSource(),this.semicolon(),this.finishNode(t,"ImportDeclaration")}parseImportSource(){return this.parsePlaceholder("StringLiteral")||super.parseImportSource()}assertNoSpace(){this.state.start>this.offsetToSourcePos(this.state.lastTokEndLoc.index)&&this.raise(We.UnexpectedSpace,this.state.lastTokEndLoc)}},Ai=n=>class extends n{parseV8Intrinsic(){if(this.match(50)){let t=this.state.startLoc,r=this.startNode();if(this.next(),A(this.state.type)){this.setLoc(this.state.startLoc);let i=this.parseIdentifierName(),a=this.createIdentifier(r,i);if(this.castNodeTo(a,"V8IntrinsicIdentifier"),this.match(6))return a}this.unexpected(t)}}parseExprAtom(t){return this.parseV8Intrinsic()||super.parseExprAtom(t)}},Xe=["fsharp","hack"],Je=["^^","@@","^","%","#"];function Ii(n){if(n.has("decorators")&&n.has("decorators-legacy"))throw new Error("Cannot use the decorators and decorators-legacy plugin together");if(n.has("flow")&&n.has("typescript"))throw new Error("Cannot combine flow and typescript plugins.");if(n.has("placeholders")&&n.has("v8intrinsic"))throw new Error("Cannot combine placeholders and v8intrinsic plugins.");if(n.has("pipelineOperator")){let e=n.get("pipelineOperator").proposal;if(!Xe.includes(e)){let t=Xe.map(r=>`"${r}"`).join(", ");throw new Error(`"pipelineOperator" requires "proposal" option whose value must be one of: ${t}.`)}if(e==="hack"){if(n.has("placeholders"))throw new Error("Cannot combine placeholders plugin and Hack-style pipes.");if(n.has("v8intrinsic"))throw new Error("Cannot combine v8intrinsic plugin and Hack-style pipes.");let t=n.get("pipelineOperator").topicToken;if(!Je.includes(t)){let r=Je.map(i=>`"${i}"`).join(", ");throw new Error(`"pipelineOperator" in "proposal": "hack" mode also requires a "topicToken" option whose value must be one of: ${r}.`)}}}if(n.has("moduleAttributes"))throw new Error("`moduleAttributes` has been removed in Babel 8, please migrate to import attributes instead.");if(n.has("importAssertions"))throw new Error("`importAssertions` has been removed in Babel 8, please use import attributes instead.");if(n.has("deprecatedImportAssert")?console.warn("`deprecatedImportAssert` has been removed in Babel 8, please use import attributes instead."):n.has("importAttributes")&&n.get("importAttributes").deprecatedAssertSyntax&&console.warn("The 'importAttributes' plugin has been removed in Babel 8. Please migrate any usage of `assert`-style attributes to `with`."),n.has("recordAndTuple"))throw new Error("The 'recordAndTuple' plugin has been removed in Babel 8. Please remove it from your configuration.");if(n.has("asyncDoExpressions")&&!n.has("doExpressions")){let e=new Error("'asyncDoExpressions' requires 'doExpressions', please add 'doExpressions' to parser plugins.");throw e.missingPlugins="doExpressions",e}if(n.has("optionalChainingAssign")&&n.get("optionalChainingAssign").version!=="2023-07")throw new Error("The 'optionalChainingAssign' plugin requires a 'version' option, representing the last proposal update. Currently, the only supported value is '2023-07'.");if(n.has("discardBinding")&&n.get("discardBinding").syntaxType!=="void")throw new Error("The 'discardBinding' plugin requires a 'syntaxType' option. Currently the only supported value is 'void'.");if(n.has("decimal"))throw new Error("The 'decimal' plugin has been removed in Babel 8. Please remove it from your configuration.");if(n.has("importReflection"))throw new Error("The 'importReflection' plugin has been removed in Babel 8. Use 'sourcePhaseImports' instead, and replace 'import module' with 'import source' in your code.");if(n.has("deferredReexports")&&!n.has("deferredImportEvaluation"))throw new Error("The 'deferredReexports' plugin requires 'deferredImportEvaluation'.")}var pr={estree:Or,jsx:ai,flow:Qr,typescript:Ci,v8intrinsic:Ai,placeholders:Ti},Ni=Object.keys(pr),Ft=class extends we{constructor(e,t,r){let i=Er(e);super(i,t),this.options=i,this.initializeScopes(),this.plugins=r,this.filename=i.sourceFilename,this.startIndex=i.startIndex;let a=0;i.allowAwaitOutsideFunction&&(a|=1),i.allowReturnOutsideFunction&&(a|=2),i.allowImportExportEverywhere&&(a|=8),i.allowSuperOutsideMethod&&(a|=16),i.allowUndeclaredExports&&(a|=64),i.allowNewTargetOutsideFunction&&(a|=4),i.allowYieldOutsideFunction&&(a|=32),i.ranges&&(a|=128),i.locations===!0&&(a|=256),i.tokens&&(a|=512),i.createImportExpressions&&(a|=1024),i.createParenthesizedExpressions&&(a|=2048),i.errorRecovery&&(a|=4096),i.attachComment&&(a|=8192),i.annexB&&(a|=16384),this.optionFlags=a}getScopeHandler(){return Pt}parse(){this.enterInitialScopes();let e=this.startNode(),t=this.startNode();this.nextToken(),e.errors=[];let r=this.parseTopLevel(e,t);return r.errors=this.state.errors,r.comments.length=this.state.commentsLen,r}};function lr(n,e){if(e?.sourceType==="unambiguous"){e={...e};try{e.sourceType="module";let t=Tt(e,n),r=t.parse();if(t.sawUnambiguousESM)return r;if(t.ambiguousScriptDifferentAst)try{return e.sourceType="script",Tt(e,n).parse()}catch{}else r.program.sourceType="script";return r}catch(t){try{return e.sourceType="script",Tt(e,n).parse()}catch{}throw t}}else return Tt(e,n).parse()}function Li(n){let e={};for(let t of Object.keys(n))e[t]=Qe(n[t]);return e}var Ji=Li(kr);function Tt(n,e){let t=Ft,r=new Map;if(n?.plugins){for(let i of n.plugins){let a,s;typeof i=="string"?a=i:[a,s]=i,r.has(a)||r.set(a,s||{})}Ii(r),t=Di(r)}return new t(n,e,r)}var Ge=new Map;function Di(n){let e=[];for(let i of Ni)n.has(i)&&e.push(i);let t=e.join("|"),r=Ge.get(t);if(!r){r=Ft;for(let i of e)r=pr[i](r);Ge.set(t,r)}return r}var dr={container:[`__SCOPE__ .container {width: 100%;margin-right: auto;margin-left: auto;padding-right: 1rem;padding-left: 1rem
}`,`@media (min-width: 640px){__SCOPE__ .container {max-width: 640px
    }}`,`@media (min-width: 768px){__SCOPE__ .container {max-width: 768px
    }}`,`@media (min-width: 1024px){__SCOPE__ .container {max-width: 1024px
    }}`,`@media (min-width: 1280px){__SCOPE__ .container {max-width: 1280px
    }}`,`@media (min-width: 1536px){__SCOPE__ .container {max-width: 1536px
    }}`],fixed:[`__SCOPE__ .fixed {position: fixed
}`],absolute:[`__SCOPE__ .absolute {position: absolute
}`],relative:[`__SCOPE__ .relative {position: relative
}`],"inset-0":[`__SCOPE__ .inset-0 {inset: 0px
}`],"-bottom-8":[`__SCOPE__ .-bottom-8 {bottom: -2rem
}`],"-left-8":[`__SCOPE__ .-left-8 {left: -2rem
}`],"bottom-0":[`__SCOPE__ .bottom-0 {bottom: 0px
}`],"left-0":[`__SCOPE__ .left-0 {left: 0px
}`],"right-0":[`__SCOPE__ .right-0 {right: 0px
}`],"top-0":[`__SCOPE__ .top-0 {top: 0px
}`],"z-10":[`__SCOPE__ .z-10 {z-index: 10
}`],"z-20":[`__SCOPE__ .z-20 {z-index: 20
}`],"z-[-1]":[`__SCOPE__ .z-\\[-1\\] {z-index: -1
}`],"m-0":[`__SCOPE__ .m-0 {margin: 0px
}`],"m-1":[`__SCOPE__ .m-1 {margin: 0.25rem
}`],"m-10":[`__SCOPE__ .m-10 {margin: 2.5rem
}`],"m-11":[`__SCOPE__ .m-11 {margin: 2.75rem
}`],"m-12":[`__SCOPE__ .m-12 {margin: 3rem
}`],"m-14":[`__SCOPE__ .m-14 {margin: 3.5rem
}`],"m-16":[`__SCOPE__ .m-16 {margin: 4rem
}`],"m-2":[`__SCOPE__ .m-2 {margin: 0.5rem
}`],"m-20":[`__SCOPE__ .m-20 {margin: 5rem
}`],"m-24":[`__SCOPE__ .m-24 {margin: 6rem
}`],"m-28":[`__SCOPE__ .m-28 {margin: 7rem
}`],"m-3":[`__SCOPE__ .m-3 {margin: 0.75rem
}`],"m-32":[`__SCOPE__ .m-32 {margin: 8rem
}`],"m-4":[`__SCOPE__ .m-4 {margin: 1rem
}`],"m-40":[`__SCOPE__ .m-40 {margin: 10rem
}`],"m-48":[`__SCOPE__ .m-48 {margin: 12rem
}`],"m-5":[`__SCOPE__ .m-5 {margin: 1.25rem
}`],"m-56":[`__SCOPE__ .m-56 {margin: 14rem
}`],"m-6":[`__SCOPE__ .m-6 {margin: 1.5rem
}`],"m-64":[`__SCOPE__ .m-64 {margin: 16rem
}`],"m-7":[`__SCOPE__ .m-7 {margin: 1.75rem
}`],"m-8":[`__SCOPE__ .m-8 {margin: 2rem
}`],"m-80":[`__SCOPE__ .m-80 {margin: 20rem
}`],"m-9":[`__SCOPE__ .m-9 {margin: 2.25rem
}`],"m-96":[`__SCOPE__ .m-96 {margin: 24rem
}`],"-mx-4":[`__SCOPE__ .-mx-4 {margin-left: -1rem;margin-right: -1rem
}`],"mx-0":[`__SCOPE__ .mx-0 {margin-left: 0px;margin-right: 0px
}`],"mx-1":[`__SCOPE__ .mx-1 {margin-left: 0.25rem;margin-right: 0.25rem
}`],"mx-10":[`__SCOPE__ .mx-10 {margin-left: 2.5rem;margin-right: 2.5rem
}`],"mx-11":[`__SCOPE__ .mx-11 {margin-left: 2.75rem;margin-right: 2.75rem
}`],"mx-12":[`__SCOPE__ .mx-12 {margin-left: 3rem;margin-right: 3rem
}`],"mx-14":[`__SCOPE__ .mx-14 {margin-left: 3.5rem;margin-right: 3.5rem
}`],"mx-16":[`__SCOPE__ .mx-16 {margin-left: 4rem;margin-right: 4rem
}`],"mx-2":[`__SCOPE__ .mx-2 {margin-left: 0.5rem;margin-right: 0.5rem
}`],"mx-20":[`__SCOPE__ .mx-20 {margin-left: 5rem;margin-right: 5rem
}`],"mx-24":[`__SCOPE__ .mx-24 {margin-left: 6rem;margin-right: 6rem
}`],"mx-28":[`__SCOPE__ .mx-28 {margin-left: 7rem;margin-right: 7rem
}`],"mx-3":[`__SCOPE__ .mx-3 {margin-left: 0.75rem;margin-right: 0.75rem
}`],"mx-32":[`__SCOPE__ .mx-32 {margin-left: 8rem;margin-right: 8rem
}`],"mx-4":[`__SCOPE__ .mx-4 {margin-left: 1rem;margin-right: 1rem
}`],"mx-40":[`__SCOPE__ .mx-40 {margin-left: 10rem;margin-right: 10rem
}`],"mx-48":[`__SCOPE__ .mx-48 {margin-left: 12rem;margin-right: 12rem
}`],"mx-5":[`__SCOPE__ .mx-5 {margin-left: 1.25rem;margin-right: 1.25rem
}`],"mx-56":[`__SCOPE__ .mx-56 {margin-left: 14rem;margin-right: 14rem
}`],"mx-6":[`__SCOPE__ .mx-6 {margin-left: 1.5rem;margin-right: 1.5rem
}`],"mx-64":[`__SCOPE__ .mx-64 {margin-left: 16rem;margin-right: 16rem
}`],"mx-7":[`__SCOPE__ .mx-7 {margin-left: 1.75rem;margin-right: 1.75rem
}`],"mx-8":[`__SCOPE__ .mx-8 {margin-left: 2rem;margin-right: 2rem
}`],"mx-80":[`__SCOPE__ .mx-80 {margin-left: 20rem;margin-right: 20rem
}`],"mx-9":[`__SCOPE__ .mx-9 {margin-left: 2.25rem;margin-right: 2.25rem
}`],"mx-96":[`__SCOPE__ .mx-96 {margin-left: 24rem;margin-right: 24rem
}`],"mx-auto":[`__SCOPE__ .mx-auto {margin-left: auto;margin-right: auto
}`],"my-0":[`__SCOPE__ .my-0 {margin-top: 0px;margin-bottom: 0px
}`],"my-1":[`__SCOPE__ .my-1 {margin-top: 0.25rem;margin-bottom: 0.25rem
}`],"my-10":[`__SCOPE__ .my-10 {margin-top: 2.5rem;margin-bottom: 2.5rem
}`],"my-11":[`__SCOPE__ .my-11 {margin-top: 2.75rem;margin-bottom: 2.75rem
}`],"my-12":[`__SCOPE__ .my-12 {margin-top: 3rem;margin-bottom: 3rem
}`],"my-14":[`__SCOPE__ .my-14 {margin-top: 3.5rem;margin-bottom: 3.5rem
}`],"my-16":[`__SCOPE__ .my-16 {margin-top: 4rem;margin-bottom: 4rem
}`],"my-2":[`__SCOPE__ .my-2 {margin-top: 0.5rem;margin-bottom: 0.5rem
}`],"my-20":[`__SCOPE__ .my-20 {margin-top: 5rem;margin-bottom: 5rem
}`],"my-24":[`__SCOPE__ .my-24 {margin-top: 6rem;margin-bottom: 6rem
}`],"my-28":[`__SCOPE__ .my-28 {margin-top: 7rem;margin-bottom: 7rem
}`],"my-3":[`__SCOPE__ .my-3 {margin-top: 0.75rem;margin-bottom: 0.75rem
}`],"my-32":[`__SCOPE__ .my-32 {margin-top: 8rem;margin-bottom: 8rem
}`],"my-4":[`__SCOPE__ .my-4 {margin-top: 1rem;margin-bottom: 1rem
}`],"my-40":[`__SCOPE__ .my-40 {margin-top: 10rem;margin-bottom: 10rem
}`],"my-48":[`__SCOPE__ .my-48 {margin-top: 12rem;margin-bottom: 12rem
}`],"my-5":[`__SCOPE__ .my-5 {margin-top: 1.25rem;margin-bottom: 1.25rem
}`],"my-56":[`__SCOPE__ .my-56 {margin-top: 14rem;margin-bottom: 14rem
}`],"my-6":[`__SCOPE__ .my-6 {margin-top: 1.5rem;margin-bottom: 1.5rem
}`],"my-64":[`__SCOPE__ .my-64 {margin-top: 16rem;margin-bottom: 16rem
}`],"my-7":[`__SCOPE__ .my-7 {margin-top: 1.75rem;margin-bottom: 1.75rem
}`],"my-8":[`__SCOPE__ .my-8 {margin-top: 2rem;margin-bottom: 2rem
}`],"my-80":[`__SCOPE__ .my-80 {margin-top: 20rem;margin-bottom: 20rem
}`],"my-9":[`__SCOPE__ .my-9 {margin-top: 2.25rem;margin-bottom: 2.25rem
}`],"my-96":[`__SCOPE__ .my-96 {margin-top: 24rem;margin-bottom: 24rem
}`],"mb-0":[`__SCOPE__ .mb-0 {margin-bottom: 0px
}`],"mb-1":[`__SCOPE__ .mb-1 {margin-bottom: 0.25rem
}`],"mb-10":[`__SCOPE__ .mb-10 {margin-bottom: 2.5rem
}`],"mb-11":[`__SCOPE__ .mb-11 {margin-bottom: 2.75rem
}`],"mb-12":[`__SCOPE__ .mb-12 {margin-bottom: 3rem
}`],"mb-14":[`__SCOPE__ .mb-14 {margin-bottom: 3.5rem
}`],"mb-16":[`__SCOPE__ .mb-16 {margin-bottom: 4rem
}`],"mb-2":[`__SCOPE__ .mb-2 {margin-bottom: 0.5rem
}`],"mb-20":[`__SCOPE__ .mb-20 {margin-bottom: 5rem
}`],"mb-24":[`__SCOPE__ .mb-24 {margin-bottom: 6rem
}`],"mb-28":[`__SCOPE__ .mb-28 {margin-bottom: 7rem
}`],"mb-3":[`__SCOPE__ .mb-3 {margin-bottom: 0.75rem
}`],"mb-32":[`__SCOPE__ .mb-32 {margin-bottom: 8rem
}`],"mb-4":[`__SCOPE__ .mb-4 {margin-bottom: 1rem
}`],"mb-40":[`__SCOPE__ .mb-40 {margin-bottom: 10rem
}`],"mb-48":[`__SCOPE__ .mb-48 {margin-bottom: 12rem
}`],"mb-5":[`__SCOPE__ .mb-5 {margin-bottom: 1.25rem
}`],"mb-56":[`__SCOPE__ .mb-56 {margin-bottom: 14rem
}`],"mb-6":[`__SCOPE__ .mb-6 {margin-bottom: 1.5rem
}`],"mb-64":[`__SCOPE__ .mb-64 {margin-bottom: 16rem
}`],"mb-7":[`__SCOPE__ .mb-7 {margin-bottom: 1.75rem
}`],"mb-8":[`__SCOPE__ .mb-8 {margin-bottom: 2rem
}`],"mb-80":[`__SCOPE__ .mb-80 {margin-bottom: 20rem
}`],"mb-9":[`__SCOPE__ .mb-9 {margin-bottom: 2.25rem
}`],"mb-96":[`__SCOPE__ .mb-96 {margin-bottom: 24rem
}`],"mb-[14px]":[`__SCOPE__ .mb-\\[14px\\] {margin-bottom: 14px
}`],"mb-[60px]":[`__SCOPE__ .mb-\\[60px\\] {margin-bottom: 60px
}`],"ml-0":[`__SCOPE__ .ml-0 {margin-left: 0px
}`],"ml-1":[`__SCOPE__ .ml-1 {margin-left: 0.25rem
}`],"ml-10":[`__SCOPE__ .ml-10 {margin-left: 2.5rem
}`],"ml-11":[`__SCOPE__ .ml-11 {margin-left: 2.75rem
}`],"ml-12":[`__SCOPE__ .ml-12 {margin-left: 3rem
}`],"ml-14":[`__SCOPE__ .ml-14 {margin-left: 3.5rem
}`],"ml-16":[`__SCOPE__ .ml-16 {margin-left: 4rem
}`],"ml-2":[`__SCOPE__ .ml-2 {margin-left: 0.5rem
}`],"ml-20":[`__SCOPE__ .ml-20 {margin-left: 5rem
}`],"ml-24":[`__SCOPE__ .ml-24 {margin-left: 6rem
}`],"ml-28":[`__SCOPE__ .ml-28 {margin-left: 7rem
}`],"ml-3":[`__SCOPE__ .ml-3 {margin-left: 0.75rem
}`],"ml-32":[`__SCOPE__ .ml-32 {margin-left: 8rem
}`],"ml-4":[`__SCOPE__ .ml-4 {margin-left: 1rem
}`],"ml-40":[`__SCOPE__ .ml-40 {margin-left: 10rem
}`],"ml-48":[`__SCOPE__ .ml-48 {margin-left: 12rem
}`],"ml-5":[`__SCOPE__ .ml-5 {margin-left: 1.25rem
}`],"ml-56":[`__SCOPE__ .ml-56 {margin-left: 14rem
}`],"ml-6":[`__SCOPE__ .ml-6 {margin-left: 1.5rem
}`],"ml-64":[`__SCOPE__ .ml-64 {margin-left: 16rem
}`],"ml-7":[`__SCOPE__ .ml-7 {margin-left: 1.75rem
}`],"ml-8":[`__SCOPE__ .ml-8 {margin-left: 2rem
}`],"ml-80":[`__SCOPE__ .ml-80 {margin-left: 20rem
}`],"ml-9":[`__SCOPE__ .ml-9 {margin-left: 2.25rem
}`],"ml-96":[`__SCOPE__ .ml-96 {margin-left: 24rem
}`],"mr-0":[`__SCOPE__ .mr-0 {margin-right: 0px
}`],"mr-1":[`__SCOPE__ .mr-1 {margin-right: 0.25rem
}`],"mr-10":[`__SCOPE__ .mr-10 {margin-right: 2.5rem
}`],"mr-11":[`__SCOPE__ .mr-11 {margin-right: 2.75rem
}`],"mr-12":[`__SCOPE__ .mr-12 {margin-right: 3rem
}`],"mr-14":[`__SCOPE__ .mr-14 {margin-right: 3.5rem
}`],"mr-16":[`__SCOPE__ .mr-16 {margin-right: 4rem
}`],"mr-2":[`__SCOPE__ .mr-2 {margin-right: 0.5rem
}`],"mr-20":[`__SCOPE__ .mr-20 {margin-right: 5rem
}`],"mr-24":[`__SCOPE__ .mr-24 {margin-right: 6rem
}`],"mr-28":[`__SCOPE__ .mr-28 {margin-right: 7rem
}`],"mr-3":[`__SCOPE__ .mr-3 {margin-right: 0.75rem
}`],"mr-32":[`__SCOPE__ .mr-32 {margin-right: 8rem
}`],"mr-4":[`__SCOPE__ .mr-4 {margin-right: 1rem
}`],"mr-40":[`__SCOPE__ .mr-40 {margin-right: 10rem
}`],"mr-48":[`__SCOPE__ .mr-48 {margin-right: 12rem
}`],"mr-5":[`__SCOPE__ .mr-5 {margin-right: 1.25rem
}`],"mr-56":[`__SCOPE__ .mr-56 {margin-right: 14rem
}`],"mr-6":[`__SCOPE__ .mr-6 {margin-right: 1.5rem
}`],"mr-64":[`__SCOPE__ .mr-64 {margin-right: 16rem
}`],"mr-7":[`__SCOPE__ .mr-7 {margin-right: 1.75rem
}`],"mr-8":[`__SCOPE__ .mr-8 {margin-right: 2rem
}`],"mr-80":[`__SCOPE__ .mr-80 {margin-right: 20rem
}`],"mr-9":[`__SCOPE__ .mr-9 {margin-right: 2.25rem
}`],"mr-96":[`__SCOPE__ .mr-96 {margin-right: 24rem
}`],"mt-0":[`__SCOPE__ .mt-0 {margin-top: 0px
}`],"mt-1":[`__SCOPE__ .mt-1 {margin-top: 0.25rem
}`],"mt-10":[`__SCOPE__ .mt-10 {margin-top: 2.5rem
}`],"mt-11":[`__SCOPE__ .mt-11 {margin-top: 2.75rem
}`],"mt-12":[`__SCOPE__ .mt-12 {margin-top: 3rem
}`],"mt-14":[`__SCOPE__ .mt-14 {margin-top: 3.5rem
}`],"mt-16":[`__SCOPE__ .mt-16 {margin-top: 4rem
}`],"mt-2":[`__SCOPE__ .mt-2 {margin-top: 0.5rem
}`],"mt-20":[`__SCOPE__ .mt-20 {margin-top: 5rem
}`],"mt-24":[`__SCOPE__ .mt-24 {margin-top: 6rem
}`],"mt-28":[`__SCOPE__ .mt-28 {margin-top: 7rem
}`],"mt-3":[`__SCOPE__ .mt-3 {margin-top: 0.75rem
}`],"mt-32":[`__SCOPE__ .mt-32 {margin-top: 8rem
}`],"mt-4":[`__SCOPE__ .mt-4 {margin-top: 1rem
}`],"mt-40":[`__SCOPE__ .mt-40 {margin-top: 10rem
}`],"mt-48":[`__SCOPE__ .mt-48 {margin-top: 12rem
}`],"mt-5":[`__SCOPE__ .mt-5 {margin-top: 1.25rem
}`],"mt-56":[`__SCOPE__ .mt-56 {margin-top: 14rem
}`],"mt-6":[`__SCOPE__ .mt-6 {margin-top: 1.5rem
}`],"mt-64":[`__SCOPE__ .mt-64 {margin-top: 16rem
}`],"mt-7":[`__SCOPE__ .mt-7 {margin-top: 1.75rem
}`],"mt-8":[`__SCOPE__ .mt-8 {margin-top: 2rem
}`],"mt-80":[`__SCOPE__ .mt-80 {margin-top: 20rem
}`],"mt-9":[`__SCOPE__ .mt-9 {margin-top: 2.25rem
}`],"mt-96":[`__SCOPE__ .mt-96 {margin-top: 24rem
}`],block:[`__SCOPE__ .block {display: block
}`],"inline-block":[`__SCOPE__ .inline-block {display: inline-block
}`],inline:[`__SCOPE__ .inline {display: inline
}`],flex:[`__SCOPE__ .flex {display: flex
}`],"inline-flex":[`__SCOPE__ .inline-flex {display: inline-flex
}`],grid:[`__SCOPE__ .grid {display: grid
}`],hidden:[`__SCOPE__ .hidden {display: none
}`],"aspect-square":[`__SCOPE__ .aspect-square {aspect-ratio: 1 / 1
}`],"aspect-video":[`__SCOPE__ .aspect-video {aspect-ratio: 16 / 9
}`],"h-0":[`__SCOPE__ .h-0 {height: 0px
}`],"h-1":[`__SCOPE__ .h-1 {height: 0.25rem
}`],"h-1/2":[`__SCOPE__ .h-1\\/2 {height: 50%
}`],"h-1/3":[`__SCOPE__ .h-1\\/3 {height: 33.333333%
}`],"h-1/4":[`__SCOPE__ .h-1\\/4 {height: 25%
}`],"h-1/5":[`__SCOPE__ .h-1\\/5 {height: 20%
}`],"h-1/6":[`__SCOPE__ .h-1\\/6 {height: 16.666667%
}`],"h-10":[`__SCOPE__ .h-10 {height: 2.5rem
}`],"h-11":[`__SCOPE__ .h-11 {height: 2.75rem
}`],"h-12":[`__SCOPE__ .h-12 {height: 3rem
}`],"h-14":[`__SCOPE__ .h-14 {height: 3.5rem
}`],"h-16":[`__SCOPE__ .h-16 {height: 4rem
}`],"h-2":[`__SCOPE__ .h-2 {height: 0.5rem
}`],"h-2/3":[`__SCOPE__ .h-2\\/3 {height: 66.666667%
}`],"h-2/5":[`__SCOPE__ .h-2\\/5 {height: 40%
}`],"h-20":[`__SCOPE__ .h-20 {height: 5rem
}`],"h-24":[`__SCOPE__ .h-24 {height: 6rem
}`],"h-28":[`__SCOPE__ .h-28 {height: 7rem
}`],"h-3":[`__SCOPE__ .h-3 {height: 0.75rem
}`],"h-3/4":[`__SCOPE__ .h-3\\/4 {height: 75%
}`],"h-3/5":[`__SCOPE__ .h-3\\/5 {height: 60%
}`],"h-32":[`__SCOPE__ .h-32 {height: 8rem
}`],"h-4":[`__SCOPE__ .h-4 {height: 1rem
}`],"h-4/5":[`__SCOPE__ .h-4\\/5 {height: 80%
}`],"h-40":[`__SCOPE__ .h-40 {height: 10rem
}`],"h-48":[`__SCOPE__ .h-48 {height: 12rem
}`],"h-5":[`__SCOPE__ .h-5 {height: 1.25rem
}`],"h-5/6":[`__SCOPE__ .h-5\\/6 {height: 83.333333%
}`],"h-56":[`__SCOPE__ .h-56 {height: 14rem
}`],"h-6":[`__SCOPE__ .h-6 {height: 1.5rem
}`],"h-64":[`__SCOPE__ .h-64 {height: 16rem
}`],"h-7":[`__SCOPE__ .h-7 {height: 1.75rem
}`],"h-8":[`__SCOPE__ .h-8 {height: 2rem
}`],"h-80":[`__SCOPE__ .h-80 {height: 20rem
}`],"h-9":[`__SCOPE__ .h-9 {height: 2.25rem
}`],"h-96":[`__SCOPE__ .h-96 {height: 24rem
}`],"h-[70px]":[`__SCOPE__ .h-\\[70px\\] {height: 70px
}`],"h-auto":[`__SCOPE__ .h-auto {height: auto
}`],"h-full":[`__SCOPE__ .h-full {height: 100%
}`],"w-0":[`__SCOPE__ .w-0 {width: 0px
}`],"w-1":[`__SCOPE__ .w-1 {width: 0.25rem
}`],"w-1/2":[`__SCOPE__ .w-1\\/2 {width: 50%
}`],"w-1/3":[`__SCOPE__ .w-1\\/3 {width: 33.333333%
}`],"w-1/4":[`__SCOPE__ .w-1\\/4 {width: 25%
}`],"w-1/5":[`__SCOPE__ .w-1\\/5 {width: 20%
}`],"w-1/6":[`__SCOPE__ .w-1\\/6 {width: 16.666667%
}`],"w-10":[`__SCOPE__ .w-10 {width: 2.5rem
}`],"w-11":[`__SCOPE__ .w-11 {width: 2.75rem
}`],"w-12":[`__SCOPE__ .w-12 {width: 3rem
}`],"w-14":[`__SCOPE__ .w-14 {width: 3.5rem
}`],"w-16":[`__SCOPE__ .w-16 {width: 4rem
}`],"w-2":[`__SCOPE__ .w-2 {width: 0.5rem
}`],"w-2/3":[`__SCOPE__ .w-2\\/3 {width: 66.666667%
}`],"w-2/5":[`__SCOPE__ .w-2\\/5 {width: 40%
}`],"w-20":[`__SCOPE__ .w-20 {width: 5rem
}`],"w-24":[`__SCOPE__ .w-24 {width: 6rem
}`],"w-28":[`__SCOPE__ .w-28 {width: 7rem
}`],"w-3":[`__SCOPE__ .w-3 {width: 0.75rem
}`],"w-3/4":[`__SCOPE__ .w-3\\/4 {width: 75%
}`],"w-3/5":[`__SCOPE__ .w-3\\/5 {width: 60%
}`],"w-32":[`__SCOPE__ .w-32 {width: 8rem
}`],"w-4":[`__SCOPE__ .w-4 {width: 1rem
}`],"w-4/5":[`__SCOPE__ .w-4\\/5 {width: 80%
}`],"w-40":[`__SCOPE__ .w-40 {width: 10rem
}`],"w-48":[`__SCOPE__ .w-48 {width: 12rem
}`],"w-5":[`__SCOPE__ .w-5 {width: 1.25rem
}`],"w-5/12":[`__SCOPE__ .w-5\\/12 {width: 41.666667%
}`],"w-5/6":[`__SCOPE__ .w-5\\/6 {width: 83.333333%
}`],"w-56":[`__SCOPE__ .w-56 {width: 14rem
}`],"w-6":[`__SCOPE__ .w-6 {width: 1.5rem
}`],"w-6/12":[`__SCOPE__ .w-6\\/12 {width: 50%
}`],"w-64":[`__SCOPE__ .w-64 {width: 16rem
}`],"w-7":[`__SCOPE__ .w-7 {width: 1.75rem
}`],"w-8":[`__SCOPE__ .w-8 {width: 2rem
}`],"w-80":[`__SCOPE__ .w-80 {width: 20rem
}`],"w-9":[`__SCOPE__ .w-9 {width: 2.25rem
}`],"w-96":[`__SCOPE__ .w-96 {width: 24rem
}`],"w-[70px]":[`__SCOPE__ .w-\\[70px\\] {width: 70px
}`],"w-auto":[`__SCOPE__ .w-auto {width: auto
}`],"w-full":[`__SCOPE__ .w-full {width: 100%
}`],"max-w-2xl":[`__SCOPE__ .max-w-2xl {max-width: 42rem
}`],"max-w-3xl":[`__SCOPE__ .max-w-3xl {max-width: 48rem
}`],"max-w-4xl":[`__SCOPE__ .max-w-4xl {max-width: 56rem
}`],"max-w-5xl":[`__SCOPE__ .max-w-5xl {max-width: 64rem
}`],"max-w-6xl":[`__SCOPE__ .max-w-6xl {max-width: 72rem
}`],"max-w-7xl":[`__SCOPE__ .max-w-7xl {max-width: 80rem
}`],"max-w-[40px]":[`__SCOPE__ .max-w-\\[40px\\] {max-width: 40px
}`],"max-w-[480px]":[`__SCOPE__ .max-w-\\[480px\\] {max-width: 480px
}`],"max-w-[510px]":[`__SCOPE__ .max-w-\\[510px\\] {max-width: 510px
}`],"max-w-[520px]":[`__SCOPE__ .max-w-\\[520px\\] {max-width: 520px
}`],"max-w-full":[`__SCOPE__ .max-w-full {max-width: 100%
}`],"max-w-lg":[`__SCOPE__ .max-w-lg {max-width: 32rem
}`],"max-w-md":[`__SCOPE__ .max-w-md {max-width: 28rem
}`],"max-w-none":[`__SCOPE__ .max-w-none {max-width: none
}`],"max-w-screen-lg":[`__SCOPE__ .max-w-screen-lg {max-width: 1024px
}`],"max-w-screen-md":[`__SCOPE__ .max-w-screen-md {max-width: 768px
}`],"max-w-screen-sm":[`__SCOPE__ .max-w-screen-sm {max-width: 640px
}`],"max-w-sm":[`__SCOPE__ .max-w-sm {max-width: 24rem
}`],"max-w-xl":[`__SCOPE__ .max-w-xl {max-width: 36rem
}`],"max-w-xs":[`__SCOPE__ .max-w-xs {max-width: 20rem
}`],"flex-1":[`__SCOPE__ .flex-1 {flex: 1 1 0%
}`],"shrink-0":[`__SCOPE__ .shrink-0 {flex-shrink: 0
}`],"rotate-180":[`__SCOPE__ .rotate-180 {--tw-rotate: 180deg;transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))
}`],"cursor-pointer":[`__SCOPE__ .cursor-pointer {cursor: pointer
}`],"list-none":[`__SCOPE__ .list-none {list-style-type: none
}`],"grid-cols-1":[`__SCOPE__ .grid-cols-1 {grid-template-columns: repeat(1, minmax(0, 1fr))
}`],"grid-cols-12":[`__SCOPE__ .grid-cols-12 {grid-template-columns: repeat(12, minmax(0, 1fr))
}`],"grid-cols-2":[`__SCOPE__ .grid-cols-2 {grid-template-columns: repeat(2, minmax(0, 1fr))
}`],"grid-cols-3":[`__SCOPE__ .grid-cols-3 {grid-template-columns: repeat(3, minmax(0, 1fr))
}`],"grid-cols-4":[`__SCOPE__ .grid-cols-4 {grid-template-columns: repeat(4, minmax(0, 1fr))
}`],"grid-cols-5":[`__SCOPE__ .grid-cols-5 {grid-template-columns: repeat(5, minmax(0, 1fr))
}`],"grid-cols-6":[`__SCOPE__ .grid-cols-6 {grid-template-columns: repeat(6, minmax(0, 1fr))
}`],"flex-row":[`__SCOPE__ .flex-row {flex-direction: row
}`],"flex-col":[`__SCOPE__ .flex-col {flex-direction: column
}`],"flex-wrap":[`__SCOPE__ .flex-wrap {flex-wrap: wrap
}`],"items-start":[`__SCOPE__ .items-start {align-items: flex-start
}`],"items-end":[`__SCOPE__ .items-end {align-items: flex-end
}`],"items-center":[`__SCOPE__ .items-center {align-items: center
}`],"justify-end":[`__SCOPE__ .justify-end {justify-content: flex-end
}`],"justify-center":[`__SCOPE__ .justify-center {justify-content: center
}`],"justify-between":[`__SCOPE__ .justify-between {justify-content: space-between
}`],"gap-0":[`__SCOPE__ .gap-0 {gap: 0px
}`],"gap-1":[`__SCOPE__ .gap-1 {gap: 0.25rem
}`],"gap-10":[`__SCOPE__ .gap-10 {gap: 2.5rem
}`],"gap-11":[`__SCOPE__ .gap-11 {gap: 2.75rem
}`],"gap-12":[`__SCOPE__ .gap-12 {gap: 3rem
}`],"gap-14":[`__SCOPE__ .gap-14 {gap: 3.5rem
}`],"gap-16":[`__SCOPE__ .gap-16 {gap: 4rem
}`],"gap-2":[`__SCOPE__ .gap-2 {gap: 0.5rem
}`],"gap-20":[`__SCOPE__ .gap-20 {gap: 5rem
}`],"gap-24":[`__SCOPE__ .gap-24 {gap: 6rem
}`],"gap-28":[`__SCOPE__ .gap-28 {gap: 7rem
}`],"gap-3":[`__SCOPE__ .gap-3 {gap: 0.75rem
}`],"gap-32":[`__SCOPE__ .gap-32 {gap: 8rem
}`],"gap-4":[`__SCOPE__ .gap-4 {gap: 1rem
}`],"gap-40":[`__SCOPE__ .gap-40 {gap: 10rem
}`],"gap-48":[`__SCOPE__ .gap-48 {gap: 12rem
}`],"gap-5":[`__SCOPE__ .gap-5 {gap: 1.25rem
}`],"gap-56":[`__SCOPE__ .gap-56 {gap: 14rem
}`],"gap-6":[`__SCOPE__ .gap-6 {gap: 1.5rem
}`],"gap-64":[`__SCOPE__ .gap-64 {gap: 16rem
}`],"gap-7":[`__SCOPE__ .gap-7 {gap: 1.75rem
}`],"gap-8":[`__SCOPE__ .gap-8 {gap: 2rem
}`],"gap-80":[`__SCOPE__ .gap-80 {gap: 20rem
}`],"gap-9":[`__SCOPE__ .gap-9 {gap: 2.25rem
}`],"gap-96":[`__SCOPE__ .gap-96 {gap: 24rem
}`],"gap-x-0":[`__SCOPE__ .gap-x-0 {column-gap: 0px
}`],"gap-x-1":[`__SCOPE__ .gap-x-1 {column-gap: 0.25rem
}`],"gap-x-10":[`__SCOPE__ .gap-x-10 {column-gap: 2.5rem
}`],"gap-x-11":[`__SCOPE__ .gap-x-11 {column-gap: 2.75rem
}`],"gap-x-12":[`__SCOPE__ .gap-x-12 {column-gap: 3rem
}`],"gap-x-14":[`__SCOPE__ .gap-x-14 {column-gap: 3.5rem
}`],"gap-x-16":[`__SCOPE__ .gap-x-16 {column-gap: 4rem
}`],"gap-x-2":[`__SCOPE__ .gap-x-2 {column-gap: 0.5rem
}`],"gap-x-20":[`__SCOPE__ .gap-x-20 {column-gap: 5rem
}`],"gap-x-24":[`__SCOPE__ .gap-x-24 {column-gap: 6rem
}`],"gap-x-28":[`__SCOPE__ .gap-x-28 {column-gap: 7rem
}`],"gap-x-3":[`__SCOPE__ .gap-x-3 {column-gap: 0.75rem
}`],"gap-x-32":[`__SCOPE__ .gap-x-32 {column-gap: 8rem
}`],"gap-x-4":[`__SCOPE__ .gap-x-4 {column-gap: 1rem
}`],"gap-x-40":[`__SCOPE__ .gap-x-40 {column-gap: 10rem
}`],"gap-x-48":[`__SCOPE__ .gap-x-48 {column-gap: 12rem
}`],"gap-x-5":[`__SCOPE__ .gap-x-5 {column-gap: 1.25rem
}`],"gap-x-56":[`__SCOPE__ .gap-x-56 {column-gap: 14rem
}`],"gap-x-6":[`__SCOPE__ .gap-x-6 {column-gap: 1.5rem
}`],"gap-x-64":[`__SCOPE__ .gap-x-64 {column-gap: 16rem
}`],"gap-x-7":[`__SCOPE__ .gap-x-7 {column-gap: 1.75rem
}`],"gap-x-8":[`__SCOPE__ .gap-x-8 {column-gap: 2rem
}`],"gap-x-80":[`__SCOPE__ .gap-x-80 {column-gap: 20rem
}`],"gap-x-9":[`__SCOPE__ .gap-x-9 {column-gap: 2.25rem
}`],"gap-x-96":[`__SCOPE__ .gap-x-96 {column-gap: 24rem
}`],"gap-y-0":[`__SCOPE__ .gap-y-0 {row-gap: 0px
}`],"gap-y-1":[`__SCOPE__ .gap-y-1 {row-gap: 0.25rem
}`],"gap-y-10":[`__SCOPE__ .gap-y-10 {row-gap: 2.5rem
}`],"gap-y-11":[`__SCOPE__ .gap-y-11 {row-gap: 2.75rem
}`],"gap-y-12":[`__SCOPE__ .gap-y-12 {row-gap: 3rem
}`],"gap-y-14":[`__SCOPE__ .gap-y-14 {row-gap: 3.5rem
}`],"gap-y-16":[`__SCOPE__ .gap-y-16 {row-gap: 4rem
}`],"gap-y-2":[`__SCOPE__ .gap-y-2 {row-gap: 0.5rem
}`],"gap-y-20":[`__SCOPE__ .gap-y-20 {row-gap: 5rem
}`],"gap-y-24":[`__SCOPE__ .gap-y-24 {row-gap: 6rem
}`],"gap-y-28":[`__SCOPE__ .gap-y-28 {row-gap: 7rem
}`],"gap-y-3":[`__SCOPE__ .gap-y-3 {row-gap: 0.75rem
}`],"gap-y-32":[`__SCOPE__ .gap-y-32 {row-gap: 8rem
}`],"gap-y-4":[`__SCOPE__ .gap-y-4 {row-gap: 1rem
}`],"gap-y-40":[`__SCOPE__ .gap-y-40 {row-gap: 10rem
}`],"gap-y-48":[`__SCOPE__ .gap-y-48 {row-gap: 12rem
}`],"gap-y-5":[`__SCOPE__ .gap-y-5 {row-gap: 1.25rem
}`],"gap-y-56":[`__SCOPE__ .gap-y-56 {row-gap: 14rem
}`],"gap-y-6":[`__SCOPE__ .gap-y-6 {row-gap: 1.5rem
}`],"gap-y-64":[`__SCOPE__ .gap-y-64 {row-gap: 16rem
}`],"gap-y-7":[`__SCOPE__ .gap-y-7 {row-gap: 1.75rem
}`],"gap-y-8":[`__SCOPE__ .gap-y-8 {row-gap: 2rem
}`],"gap-y-80":[`__SCOPE__ .gap-y-80 {row-gap: 20rem
}`],"gap-y-9":[`__SCOPE__ .gap-y-9 {row-gap: 2.25rem
}`],"gap-y-96":[`__SCOPE__ .gap-y-96 {row-gap: 24rem
}`],"space-x-0":[`__SCOPE__ .space-x-0 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(0px * var(--tw-space-x-reverse));margin-left: calc(0px * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-1":[`__SCOPE__ .space-x-1 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(0.25rem * var(--tw-space-x-reverse));margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-10":[`__SCOPE__ .space-x-10 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(2.5rem * var(--tw-space-x-reverse));margin-left: calc(2.5rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-11":[`__SCOPE__ .space-x-11 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(2.75rem * var(--tw-space-x-reverse));margin-left: calc(2.75rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-12":[`__SCOPE__ .space-x-12 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(3rem * var(--tw-space-x-reverse));margin-left: calc(3rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-14":[`__SCOPE__ .space-x-14 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(3.5rem * var(--tw-space-x-reverse));margin-left: calc(3.5rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-16":[`__SCOPE__ .space-x-16 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(4rem * var(--tw-space-x-reverse));margin-left: calc(4rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-2":[`__SCOPE__ .space-x-2 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(0.5rem * var(--tw-space-x-reverse));margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-20":[`__SCOPE__ .space-x-20 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(5rem * var(--tw-space-x-reverse));margin-left: calc(5rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-24":[`__SCOPE__ .space-x-24 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(6rem * var(--tw-space-x-reverse));margin-left: calc(6rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-28":[`__SCOPE__ .space-x-28 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(7rem * var(--tw-space-x-reverse));margin-left: calc(7rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-3":[`__SCOPE__ .space-x-3 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(0.75rem * var(--tw-space-x-reverse));margin-left: calc(0.75rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-32":[`__SCOPE__ .space-x-32 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(8rem * var(--tw-space-x-reverse));margin-left: calc(8rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-4":[`__SCOPE__ .space-x-4 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(1rem * var(--tw-space-x-reverse));margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-40":[`__SCOPE__ .space-x-40 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(10rem * var(--tw-space-x-reverse));margin-left: calc(10rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-48":[`__SCOPE__ .space-x-48 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(12rem * var(--tw-space-x-reverse));margin-left: calc(12rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-5":[`__SCOPE__ .space-x-5 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(1.25rem * var(--tw-space-x-reverse));margin-left: calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-56":[`__SCOPE__ .space-x-56 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(14rem * var(--tw-space-x-reverse));margin-left: calc(14rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-6":[`__SCOPE__ .space-x-6 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(1.5rem * var(--tw-space-x-reverse));margin-left: calc(1.5rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-64":[`__SCOPE__ .space-x-64 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(16rem * var(--tw-space-x-reverse));margin-left: calc(16rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-7":[`__SCOPE__ .space-x-7 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(1.75rem * var(--tw-space-x-reverse));margin-left: calc(1.75rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-8":[`__SCOPE__ .space-x-8 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(2rem * var(--tw-space-x-reverse));margin-left: calc(2rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-80":[`__SCOPE__ .space-x-80 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(20rem * var(--tw-space-x-reverse));margin-left: calc(20rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-9":[`__SCOPE__ .space-x-9 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(2.25rem * var(--tw-space-x-reverse));margin-left: calc(2.25rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-x-96":[`__SCOPE__ .space-x-96 > :not([hidden]) ~ :not([hidden]) {--tw-space-x-reverse: 0;margin-right: calc(24rem * var(--tw-space-x-reverse));margin-left: calc(24rem * calc(1 - var(--tw-space-x-reverse)))
}`],"space-y-0":[`__SCOPE__ .space-y-0 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(0px * var(--tw-space-y-reverse))
}`],"space-y-1":[`__SCOPE__ .space-y-1 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(0.25rem * var(--tw-space-y-reverse))
}`],"space-y-10":[`__SCOPE__ .space-y-10 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(2.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(2.5rem * var(--tw-space-y-reverse))
}`],"space-y-11":[`__SCOPE__ .space-y-11 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(2.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(2.75rem * var(--tw-space-y-reverse))
}`],"space-y-12":[`__SCOPE__ .space-y-12 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(3rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(3rem * var(--tw-space-y-reverse))
}`],"space-y-14":[`__SCOPE__ .space-y-14 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(3.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(3.5rem * var(--tw-space-y-reverse))
}`],"space-y-16":[`__SCOPE__ .space-y-16 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(4rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(4rem * var(--tw-space-y-reverse))
}`],"space-y-2":[`__SCOPE__ .space-y-2 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(0.5rem * var(--tw-space-y-reverse))
}`],"space-y-20":[`__SCOPE__ .space-y-20 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(5rem * var(--tw-space-y-reverse))
}`],"space-y-24":[`__SCOPE__ .space-y-24 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(6rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(6rem * var(--tw-space-y-reverse))
}`],"space-y-28":[`__SCOPE__ .space-y-28 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(7rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(7rem * var(--tw-space-y-reverse))
}`],"space-y-3":[`__SCOPE__ .space-y-3 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(0.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(0.75rem * var(--tw-space-y-reverse))
}`],"space-y-32":[`__SCOPE__ .space-y-32 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(8rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(8rem * var(--tw-space-y-reverse))
}`],"space-y-4":[`__SCOPE__ .space-y-4 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(1rem * var(--tw-space-y-reverse))
}`],"space-y-40":[`__SCOPE__ .space-y-40 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(10rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(10rem * var(--tw-space-y-reverse))
}`],"space-y-48":[`__SCOPE__ .space-y-48 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(12rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(12rem * var(--tw-space-y-reverse))
}`],"space-y-5":[`__SCOPE__ .space-y-5 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(1.25rem * var(--tw-space-y-reverse))
}`],"space-y-56":[`__SCOPE__ .space-y-56 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(14rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(14rem * var(--tw-space-y-reverse))
}`],"space-y-6":[`__SCOPE__ .space-y-6 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(1.5rem * var(--tw-space-y-reverse))
}`],"space-y-64":[`__SCOPE__ .space-y-64 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(16rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(16rem * var(--tw-space-y-reverse))
}`],"space-y-7":[`__SCOPE__ .space-y-7 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(1.75rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(1.75rem * var(--tw-space-y-reverse))
}`],"space-y-8":[`__SCOPE__ .space-y-8 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(2rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(2rem * var(--tw-space-y-reverse))
}`],"space-y-80":[`__SCOPE__ .space-y-80 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(20rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(20rem * var(--tw-space-y-reverse))
}`],"space-y-9":[`__SCOPE__ .space-y-9 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(2.25rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(2.25rem * var(--tw-space-y-reverse))
}`],"space-y-96":[`__SCOPE__ .space-y-96 > :not([hidden]) ~ :not([hidden]) {--tw-space-y-reverse: 0;margin-top: calc(24rem * calc(1 - var(--tw-space-y-reverse)));margin-bottom: calc(24rem * var(--tw-space-y-reverse))
}`],"overflow-auto":[`__SCOPE__ .overflow-auto {overflow: auto
}`],"overflow-hidden":[`__SCOPE__ .overflow-hidden {overflow: hidden
}`],rounded:[`__SCOPE__ .rounded {border-radius: 0.25rem
}`],"rounded-2xl":[`__SCOPE__ .rounded-2xl {border-radius: 1rem
}`],"rounded-3xl":[`__SCOPE__ .rounded-3xl {border-radius: 1.5rem
}`],"rounded-[20px]":[`__SCOPE__ .rounded-\\[20px\\] {border-radius: 20px
}`],"rounded-full":[`__SCOPE__ .rounded-full {border-radius: 9999px
}`],"rounded-lg":[`__SCOPE__ .rounded-lg {border-radius: 0.5rem
}`],"rounded-md":[`__SCOPE__ .rounded-md {border-radius: 0.375rem
}`],"rounded-sm":[`__SCOPE__ .rounded-sm {border-radius: 0.125rem
}`],"rounded-xl":[`__SCOPE__ .rounded-xl {border-radius: 0.75rem
}`],border:[`__SCOPE__ .border {border-width: 1px
}`],"border-2":[`__SCOPE__ .border-2 {border-width: 2px
}`],"border-b":[`__SCOPE__ .border-b {border-bottom-width: 1px
}`],"border-t":[`__SCOPE__ .border-t {border-top-width: 1px
}`],"border-amber-100":[`__SCOPE__ .border-amber-100 {--tw-border-opacity: 1;border-color: rgb(254 243 199 / var(--tw-border-opacity, 1))
}`],"border-amber-200":[`__SCOPE__ .border-amber-200 {--tw-border-opacity: 1;border-color: rgb(253 230 138 / var(--tw-border-opacity, 1))
}`],"border-amber-300":[`__SCOPE__ .border-amber-300 {--tw-border-opacity: 1;border-color: rgb(252 211 77 / var(--tw-border-opacity, 1))
}`],"border-amber-400":[`__SCOPE__ .border-amber-400 {--tw-border-opacity: 1;border-color: rgb(251 191 36 / var(--tw-border-opacity, 1))
}`],"border-amber-50":[`__SCOPE__ .border-amber-50 {--tw-border-opacity: 1;border-color: rgb(255 251 235 / var(--tw-border-opacity, 1))
}`],"border-amber-500":[`__SCOPE__ .border-amber-500 {--tw-border-opacity: 1;border-color: rgb(245 158 11 / var(--tw-border-opacity, 1))
}`],"border-amber-600":[`__SCOPE__ .border-amber-600 {--tw-border-opacity: 1;border-color: rgb(217 119 6 / var(--tw-border-opacity, 1))
}`],"border-amber-700":[`__SCOPE__ .border-amber-700 {--tw-border-opacity: 1;border-color: rgb(180 83 9 / var(--tw-border-opacity, 1))
}`],"border-amber-800":[`__SCOPE__ .border-amber-800 {--tw-border-opacity: 1;border-color: rgb(146 64 14 / var(--tw-border-opacity, 1))
}`],"border-amber-900":[`__SCOPE__ .border-amber-900 {--tw-border-opacity: 1;border-color: rgb(120 53 15 / var(--tw-border-opacity, 1))
}`],"border-amber-950":[`__SCOPE__ .border-amber-950 {--tw-border-opacity: 1;border-color: rgb(69 26 3 / var(--tw-border-opacity, 1))
}`],"border-black":[`__SCOPE__ .border-black {--tw-border-opacity: 1;border-color: rgb(0 0 0 / var(--tw-border-opacity, 1))
}`],"border-blue-100":[`__SCOPE__ .border-blue-100 {--tw-border-opacity: 1;border-color: rgb(219 234 254 / var(--tw-border-opacity, 1))
}`],"border-blue-200":[`__SCOPE__ .border-blue-200 {--tw-border-opacity: 1;border-color: rgb(191 219 254 / var(--tw-border-opacity, 1))
}`],"border-blue-300":[`__SCOPE__ .border-blue-300 {--tw-border-opacity: 1;border-color: rgb(147 197 253 / var(--tw-border-opacity, 1))
}`],"border-blue-400":[`__SCOPE__ .border-blue-400 {--tw-border-opacity: 1;border-color: rgb(96 165 250 / var(--tw-border-opacity, 1))
}`],"border-blue-50":[`__SCOPE__ .border-blue-50 {--tw-border-opacity: 1;border-color: rgb(239 246 255 / var(--tw-border-opacity, 1))
}`],"border-blue-500":[`__SCOPE__ .border-blue-500 {--tw-border-opacity: 1;border-color: rgb(59 130 246 / var(--tw-border-opacity, 1))
}`],"border-blue-600":[`__SCOPE__ .border-blue-600 {--tw-border-opacity: 1;border-color: rgb(37 99 235 / var(--tw-border-opacity, 1))
}`],"border-blue-700":[`__SCOPE__ .border-blue-700 {--tw-border-opacity: 1;border-color: rgb(29 78 216 / var(--tw-border-opacity, 1))
}`],"border-blue-800":[`__SCOPE__ .border-blue-800 {--tw-border-opacity: 1;border-color: rgb(30 64 175 / var(--tw-border-opacity, 1))
}`],"border-blue-900":[`__SCOPE__ .border-blue-900 {--tw-border-opacity: 1;border-color: rgb(30 58 138 / var(--tw-border-opacity, 1))
}`],"border-blue-950":[`__SCOPE__ .border-blue-950 {--tw-border-opacity: 1;border-color: rgb(23 37 84 / var(--tw-border-opacity, 1))
}`],"border-current":[`__SCOPE__ .border-current {border-color: currentColor
}`],"border-cyan-100":[`__SCOPE__ .border-cyan-100 {--tw-border-opacity: 1;border-color: rgb(207 250 254 / var(--tw-border-opacity, 1))
}`],"border-cyan-200":[`__SCOPE__ .border-cyan-200 {--tw-border-opacity: 1;border-color: rgb(165 243 252 / var(--tw-border-opacity, 1))
}`],"border-cyan-300":[`__SCOPE__ .border-cyan-300 {--tw-border-opacity: 1;border-color: rgb(103 232 249 / var(--tw-border-opacity, 1))
}`],"border-cyan-400":[`__SCOPE__ .border-cyan-400 {--tw-border-opacity: 1;border-color: rgb(34 211 238 / var(--tw-border-opacity, 1))
}`],"border-cyan-50":[`__SCOPE__ .border-cyan-50 {--tw-border-opacity: 1;border-color: rgb(236 254 255 / var(--tw-border-opacity, 1))
}`],"border-cyan-500":[`__SCOPE__ .border-cyan-500 {--tw-border-opacity: 1;border-color: rgb(6 182 212 / var(--tw-border-opacity, 1))
}`],"border-cyan-600":[`__SCOPE__ .border-cyan-600 {--tw-border-opacity: 1;border-color: rgb(8 145 178 / var(--tw-border-opacity, 1))
}`],"border-cyan-700":[`__SCOPE__ .border-cyan-700 {--tw-border-opacity: 1;border-color: rgb(14 116 144 / var(--tw-border-opacity, 1))
}`],"border-cyan-800":[`__SCOPE__ .border-cyan-800 {--tw-border-opacity: 1;border-color: rgb(21 94 117 / var(--tw-border-opacity, 1))
}`],"border-cyan-900":[`__SCOPE__ .border-cyan-900 {--tw-border-opacity: 1;border-color: rgb(22 78 99 / var(--tw-border-opacity, 1))
}`],"border-cyan-950":[`__SCOPE__ .border-cyan-950 {--tw-border-opacity: 1;border-color: rgb(8 51 68 / var(--tw-border-opacity, 1))
}`],"border-emerald-100":[`__SCOPE__ .border-emerald-100 {--tw-border-opacity: 1;border-color: rgb(209 250 229 / var(--tw-border-opacity, 1))
}`],"border-emerald-200":[`__SCOPE__ .border-emerald-200 {--tw-border-opacity: 1;border-color: rgb(167 243 208 / var(--tw-border-opacity, 1))
}`],"border-emerald-300":[`__SCOPE__ .border-emerald-300 {--tw-border-opacity: 1;border-color: rgb(110 231 183 / var(--tw-border-opacity, 1))
}`],"border-emerald-400":[`__SCOPE__ .border-emerald-400 {--tw-border-opacity: 1;border-color: rgb(52 211 153 / var(--tw-border-opacity, 1))
}`],"border-emerald-50":[`__SCOPE__ .border-emerald-50 {--tw-border-opacity: 1;border-color: rgb(236 253 245 / var(--tw-border-opacity, 1))
}`],"border-emerald-500":[`__SCOPE__ .border-emerald-500 {--tw-border-opacity: 1;border-color: rgb(16 185 129 / var(--tw-border-opacity, 1))
}`],"border-emerald-600":[`__SCOPE__ .border-emerald-600 {--tw-border-opacity: 1;border-color: rgb(5 150 105 / var(--tw-border-opacity, 1))
}`],"border-emerald-700":[`__SCOPE__ .border-emerald-700 {--tw-border-opacity: 1;border-color: rgb(4 120 87 / var(--tw-border-opacity, 1))
}`],"border-emerald-800":[`__SCOPE__ .border-emerald-800 {--tw-border-opacity: 1;border-color: rgb(6 95 70 / var(--tw-border-opacity, 1))
}`],"border-emerald-900":[`__SCOPE__ .border-emerald-900 {--tw-border-opacity: 1;border-color: rgb(6 78 59 / var(--tw-border-opacity, 1))
}`],"border-emerald-950":[`__SCOPE__ .border-emerald-950 {--tw-border-opacity: 1;border-color: rgb(2 44 34 / var(--tw-border-opacity, 1))
}`],"border-gray-100":[`__SCOPE__ .border-gray-100 {--tw-border-opacity: 1;border-color: rgb(243 244 246 / var(--tw-border-opacity, 1))
}`],"border-gray-200":[`__SCOPE__ .border-gray-200 {--tw-border-opacity: 1;border-color: rgb(229 231 235 / var(--tw-border-opacity, 1))
}`],"border-gray-300":[`__SCOPE__ .border-gray-300 {--tw-border-opacity: 1;border-color: rgb(209 213 219 / var(--tw-border-opacity, 1))
}`],"border-gray-400":[`__SCOPE__ .border-gray-400 {--tw-border-opacity: 1;border-color: rgb(156 163 175 / var(--tw-border-opacity, 1))
}`],"border-gray-50":[`__SCOPE__ .border-gray-50 {--tw-border-opacity: 1;border-color: rgb(249 250 251 / var(--tw-border-opacity, 1))
}`],"border-gray-500":[`__SCOPE__ .border-gray-500 {--tw-border-opacity: 1;border-color: rgb(107 114 128 / var(--tw-border-opacity, 1))
}`],"border-gray-600":[`__SCOPE__ .border-gray-600 {--tw-border-opacity: 1;border-color: rgb(75 85 99 / var(--tw-border-opacity, 1))
}`],"border-gray-700":[`__SCOPE__ .border-gray-700 {--tw-border-opacity: 1;border-color: rgb(55 65 81 / var(--tw-border-opacity, 1))
}`],"border-gray-800":[`__SCOPE__ .border-gray-800 {--tw-border-opacity: 1;border-color: rgb(31 41 55 / var(--tw-border-opacity, 1))
}`],"border-gray-900":[`__SCOPE__ .border-gray-900 {--tw-border-opacity: 1;border-color: rgb(17 24 39 / var(--tw-border-opacity, 1))
}`],"border-gray-950":[`__SCOPE__ .border-gray-950 {--tw-border-opacity: 1;border-color: rgb(3 7 18 / var(--tw-border-opacity, 1))
}`],"border-green-100":[`__SCOPE__ .border-green-100 {--tw-border-opacity: 1;border-color: rgb(220 252 231 / var(--tw-border-opacity, 1))
}`],"border-green-200":[`__SCOPE__ .border-green-200 {--tw-border-opacity: 1;border-color: rgb(187 247 208 / var(--tw-border-opacity, 1))
}`],"border-green-300":[`__SCOPE__ .border-green-300 {--tw-border-opacity: 1;border-color: rgb(134 239 172 / var(--tw-border-opacity, 1))
}`],"border-green-400":[`__SCOPE__ .border-green-400 {--tw-border-opacity: 1;border-color: rgb(74 222 128 / var(--tw-border-opacity, 1))
}`],"border-green-50":[`__SCOPE__ .border-green-50 {--tw-border-opacity: 1;border-color: rgb(240 253 244 / var(--tw-border-opacity, 1))
}`],"border-green-500":[`__SCOPE__ .border-green-500 {--tw-border-opacity: 1;border-color: rgb(34 197 94 / var(--tw-border-opacity, 1))
}`],"border-green-600":[`__SCOPE__ .border-green-600 {--tw-border-opacity: 1;border-color: rgb(22 163 74 / var(--tw-border-opacity, 1))
}`],"border-green-700":[`__SCOPE__ .border-green-700 {--tw-border-opacity: 1;border-color: rgb(21 128 61 / var(--tw-border-opacity, 1))
}`],"border-green-800":[`__SCOPE__ .border-green-800 {--tw-border-opacity: 1;border-color: rgb(22 101 52 / var(--tw-border-opacity, 1))
}`],"border-green-900":[`__SCOPE__ .border-green-900 {--tw-border-opacity: 1;border-color: rgb(20 83 45 / var(--tw-border-opacity, 1))
}`],"border-green-950":[`__SCOPE__ .border-green-950 {--tw-border-opacity: 1;border-color: rgb(5 46 22 / var(--tw-border-opacity, 1))
}`],"border-indigo-100":[`__SCOPE__ .border-indigo-100 {--tw-border-opacity: 1;border-color: rgb(224 231 255 / var(--tw-border-opacity, 1))
}`],"border-indigo-200":[`__SCOPE__ .border-indigo-200 {--tw-border-opacity: 1;border-color: rgb(199 210 254 / var(--tw-border-opacity, 1))
}`],"border-indigo-300":[`__SCOPE__ .border-indigo-300 {--tw-border-opacity: 1;border-color: rgb(165 180 252 / var(--tw-border-opacity, 1))
}`],"border-indigo-400":[`__SCOPE__ .border-indigo-400 {--tw-border-opacity: 1;border-color: rgb(129 140 248 / var(--tw-border-opacity, 1))
}`],"border-indigo-50":[`__SCOPE__ .border-indigo-50 {--tw-border-opacity: 1;border-color: rgb(238 242 255 / var(--tw-border-opacity, 1))
}`],"border-indigo-500":[`__SCOPE__ .border-indigo-500 {--tw-border-opacity: 1;border-color: rgb(99 102 241 / var(--tw-border-opacity, 1))
}`],"border-indigo-600":[`__SCOPE__ .border-indigo-600 {--tw-border-opacity: 1;border-color: rgb(79 70 229 / var(--tw-border-opacity, 1))
}`],"border-indigo-700":[`__SCOPE__ .border-indigo-700 {--tw-border-opacity: 1;border-color: rgb(67 56 202 / var(--tw-border-opacity, 1))
}`],"border-indigo-800":[`__SCOPE__ .border-indigo-800 {--tw-border-opacity: 1;border-color: rgb(55 48 163 / var(--tw-border-opacity, 1))
}`],"border-indigo-900":[`__SCOPE__ .border-indigo-900 {--tw-border-opacity: 1;border-color: rgb(49 46 129 / var(--tw-border-opacity, 1))
}`],"border-indigo-950":[`__SCOPE__ .border-indigo-950 {--tw-border-opacity: 1;border-color: rgb(30 27 75 / var(--tw-border-opacity, 1))
}`],"border-lime-100":[`__SCOPE__ .border-lime-100 {--tw-border-opacity: 1;border-color: rgb(236 252 203 / var(--tw-border-opacity, 1))
}`],"border-lime-200":[`__SCOPE__ .border-lime-200 {--tw-border-opacity: 1;border-color: rgb(217 249 157 / var(--tw-border-opacity, 1))
}`],"border-lime-300":[`__SCOPE__ .border-lime-300 {--tw-border-opacity: 1;border-color: rgb(190 242 100 / var(--tw-border-opacity, 1))
}`],"border-lime-400":[`__SCOPE__ .border-lime-400 {--tw-border-opacity: 1;border-color: rgb(163 230 53 / var(--tw-border-opacity, 1))
}`],"border-lime-50":[`__SCOPE__ .border-lime-50 {--tw-border-opacity: 1;border-color: rgb(247 254 231 / var(--tw-border-opacity, 1))
}`],"border-lime-500":[`__SCOPE__ .border-lime-500 {--tw-border-opacity: 1;border-color: rgb(132 204 22 / var(--tw-border-opacity, 1))
}`],"border-lime-600":[`__SCOPE__ .border-lime-600 {--tw-border-opacity: 1;border-color: rgb(101 163 13 / var(--tw-border-opacity, 1))
}`],"border-lime-700":[`__SCOPE__ .border-lime-700 {--tw-border-opacity: 1;border-color: rgb(77 124 15 / var(--tw-border-opacity, 1))
}`],"border-lime-800":[`__SCOPE__ .border-lime-800 {--tw-border-opacity: 1;border-color: rgb(63 98 18 / var(--tw-border-opacity, 1))
}`],"border-lime-900":[`__SCOPE__ .border-lime-900 {--tw-border-opacity: 1;border-color: rgb(54 83 20 / var(--tw-border-opacity, 1))
}`],"border-lime-950":[`__SCOPE__ .border-lime-950 {--tw-border-opacity: 1;border-color: rgb(26 46 5 / var(--tw-border-opacity, 1))
}`],"border-orange-100":[`__SCOPE__ .border-orange-100 {--tw-border-opacity: 1;border-color: rgb(255 237 213 / var(--tw-border-opacity, 1))
}`],"border-orange-200":[`__SCOPE__ .border-orange-200 {--tw-border-opacity: 1;border-color: rgb(254 215 170 / var(--tw-border-opacity, 1))
}`],"border-orange-300":[`__SCOPE__ .border-orange-300 {--tw-border-opacity: 1;border-color: rgb(253 186 116 / var(--tw-border-opacity, 1))
}`],"border-orange-400":[`__SCOPE__ .border-orange-400 {--tw-border-opacity: 1;border-color: rgb(251 146 60 / var(--tw-border-opacity, 1))
}`],"border-orange-50":[`__SCOPE__ .border-orange-50 {--tw-border-opacity: 1;border-color: rgb(255 247 237 / var(--tw-border-opacity, 1))
}`],"border-orange-500":[`__SCOPE__ .border-orange-500 {--tw-border-opacity: 1;border-color: rgb(249 115 22 / var(--tw-border-opacity, 1))
}`],"border-orange-600":[`__SCOPE__ .border-orange-600 {--tw-border-opacity: 1;border-color: rgb(234 88 12 / var(--tw-border-opacity, 1))
}`],"border-orange-700":[`__SCOPE__ .border-orange-700 {--tw-border-opacity: 1;border-color: rgb(194 65 12 / var(--tw-border-opacity, 1))
}`],"border-orange-800":[`__SCOPE__ .border-orange-800 {--tw-border-opacity: 1;border-color: rgb(154 52 18 / var(--tw-border-opacity, 1))
}`],"border-orange-900":[`__SCOPE__ .border-orange-900 {--tw-border-opacity: 1;border-color: rgb(124 45 18 / var(--tw-border-opacity, 1))
}`],"border-orange-950":[`__SCOPE__ .border-orange-950 {--tw-border-opacity: 1;border-color: rgb(67 20 7 / var(--tw-border-opacity, 1))
}`],"border-pink-100":[`__SCOPE__ .border-pink-100 {--tw-border-opacity: 1;border-color: rgb(252 231 243 / var(--tw-border-opacity, 1))
}`],"border-pink-200":[`__SCOPE__ .border-pink-200 {--tw-border-opacity: 1;border-color: rgb(251 207 232 / var(--tw-border-opacity, 1))
}`],"border-pink-300":[`__SCOPE__ .border-pink-300 {--tw-border-opacity: 1;border-color: rgb(249 168 212 / var(--tw-border-opacity, 1))
}`],"border-pink-400":[`__SCOPE__ .border-pink-400 {--tw-border-opacity: 1;border-color: rgb(244 114 182 / var(--tw-border-opacity, 1))
}`],"border-pink-50":[`__SCOPE__ .border-pink-50 {--tw-border-opacity: 1;border-color: rgb(253 242 248 / var(--tw-border-opacity, 1))
}`],"border-pink-500":[`__SCOPE__ .border-pink-500 {--tw-border-opacity: 1;border-color: rgb(236 72 153 / var(--tw-border-opacity, 1))
}`],"border-pink-600":[`__SCOPE__ .border-pink-600 {--tw-border-opacity: 1;border-color: rgb(219 39 119 / var(--tw-border-opacity, 1))
}`],"border-pink-700":[`__SCOPE__ .border-pink-700 {--tw-border-opacity: 1;border-color: rgb(190 24 93 / var(--tw-border-opacity, 1))
}`],"border-pink-800":[`__SCOPE__ .border-pink-800 {--tw-border-opacity: 1;border-color: rgb(157 23 77 / var(--tw-border-opacity, 1))
}`],"border-pink-900":[`__SCOPE__ .border-pink-900 {--tw-border-opacity: 1;border-color: rgb(131 24 67 / var(--tw-border-opacity, 1))
}`],"border-pink-950":[`__SCOPE__ .border-pink-950 {--tw-border-opacity: 1;border-color: rgb(80 7 36 / var(--tw-border-opacity, 1))
}`],"border-purple-100":[`__SCOPE__ .border-purple-100 {--tw-border-opacity: 1;border-color: rgb(243 232 255 / var(--tw-border-opacity, 1))
}`],"border-purple-200":[`__SCOPE__ .border-purple-200 {--tw-border-opacity: 1;border-color: rgb(233 213 255 / var(--tw-border-opacity, 1))
}`],"border-purple-300":[`__SCOPE__ .border-purple-300 {--tw-border-opacity: 1;border-color: rgb(216 180 254 / var(--tw-border-opacity, 1))
}`],"border-purple-400":[`__SCOPE__ .border-purple-400 {--tw-border-opacity: 1;border-color: rgb(192 132 252 / var(--tw-border-opacity, 1))
}`],"border-purple-50":[`__SCOPE__ .border-purple-50 {--tw-border-opacity: 1;border-color: rgb(250 245 255 / var(--tw-border-opacity, 1))
}`],"border-purple-500":[`__SCOPE__ .border-purple-500 {--tw-border-opacity: 1;border-color: rgb(168 85 247 / var(--tw-border-opacity, 1))
}`],"border-purple-600":[`__SCOPE__ .border-purple-600 {--tw-border-opacity: 1;border-color: rgb(147 51 234 / var(--tw-border-opacity, 1))
}`],"border-purple-700":[`__SCOPE__ .border-purple-700 {--tw-border-opacity: 1;border-color: rgb(126 34 206 / var(--tw-border-opacity, 1))
}`],"border-purple-800":[`__SCOPE__ .border-purple-800 {--tw-border-opacity: 1;border-color: rgb(107 33 168 / var(--tw-border-opacity, 1))
}`],"border-purple-900":[`__SCOPE__ .border-purple-900 {--tw-border-opacity: 1;border-color: rgb(88 28 135 / var(--tw-border-opacity, 1))
}`],"border-purple-950":[`__SCOPE__ .border-purple-950 {--tw-border-opacity: 1;border-color: rgb(59 7 100 / var(--tw-border-opacity, 1))
}`],"border-red-100":[`__SCOPE__ .border-red-100 {--tw-border-opacity: 1;border-color: rgb(254 226 226 / var(--tw-border-opacity, 1))
}`],"border-red-200":[`__SCOPE__ .border-red-200 {--tw-border-opacity: 1;border-color: rgb(254 202 202 / var(--tw-border-opacity, 1))
}`],"border-red-300":[`__SCOPE__ .border-red-300 {--tw-border-opacity: 1;border-color: rgb(252 165 165 / var(--tw-border-opacity, 1))
}`],"border-red-400":[`__SCOPE__ .border-red-400 {--tw-border-opacity: 1;border-color: rgb(248 113 113 / var(--tw-border-opacity, 1))
}`],"border-red-50":[`__SCOPE__ .border-red-50 {--tw-border-opacity: 1;border-color: rgb(254 242 242 / var(--tw-border-opacity, 1))
}`],"border-red-500":[`__SCOPE__ .border-red-500 {--tw-border-opacity: 1;border-color: rgb(239 68 68 / var(--tw-border-opacity, 1))
}`],"border-red-600":[`__SCOPE__ .border-red-600 {--tw-border-opacity: 1;border-color: rgb(220 38 38 / var(--tw-border-opacity, 1))
}`],"border-red-700":[`__SCOPE__ .border-red-700 {--tw-border-opacity: 1;border-color: rgb(185 28 28 / var(--tw-border-opacity, 1))
}`],"border-red-800":[`__SCOPE__ .border-red-800 {--tw-border-opacity: 1;border-color: rgb(153 27 27 / var(--tw-border-opacity, 1))
}`],"border-red-900":[`__SCOPE__ .border-red-900 {--tw-border-opacity: 1;border-color: rgb(127 29 29 / var(--tw-border-opacity, 1))
}`],"border-red-950":[`__SCOPE__ .border-red-950 {--tw-border-opacity: 1;border-color: rgb(69 10 10 / var(--tw-border-opacity, 1))
}`],"border-rose-100":[`__SCOPE__ .border-rose-100 {--tw-border-opacity: 1;border-color: rgb(255 228 230 / var(--tw-border-opacity, 1))
}`],"border-rose-200":[`__SCOPE__ .border-rose-200 {--tw-border-opacity: 1;border-color: rgb(254 205 211 / var(--tw-border-opacity, 1))
}`],"border-rose-300":[`__SCOPE__ .border-rose-300 {--tw-border-opacity: 1;border-color: rgb(253 164 175 / var(--tw-border-opacity, 1))
}`],"border-rose-400":[`__SCOPE__ .border-rose-400 {--tw-border-opacity: 1;border-color: rgb(251 113 133 / var(--tw-border-opacity, 1))
}`],"border-rose-50":[`__SCOPE__ .border-rose-50 {--tw-border-opacity: 1;border-color: rgb(255 241 242 / var(--tw-border-opacity, 1))
}`],"border-rose-500":[`__SCOPE__ .border-rose-500 {--tw-border-opacity: 1;border-color: rgb(244 63 94 / var(--tw-border-opacity, 1))
}`],"border-rose-600":[`__SCOPE__ .border-rose-600 {--tw-border-opacity: 1;border-color: rgb(225 29 72 / var(--tw-border-opacity, 1))
}`],"border-rose-700":[`__SCOPE__ .border-rose-700 {--tw-border-opacity: 1;border-color: rgb(190 18 60 / var(--tw-border-opacity, 1))
}`],"border-rose-800":[`__SCOPE__ .border-rose-800 {--tw-border-opacity: 1;border-color: rgb(159 18 57 / var(--tw-border-opacity, 1))
}`],"border-rose-900":[`__SCOPE__ .border-rose-900 {--tw-border-opacity: 1;border-color: rgb(136 19 55 / var(--tw-border-opacity, 1))
}`],"border-rose-950":[`__SCOPE__ .border-rose-950 {--tw-border-opacity: 1;border-color: rgb(76 5 25 / var(--tw-border-opacity, 1))
}`],"border-sky-100":[`__SCOPE__ .border-sky-100 {--tw-border-opacity: 1;border-color: rgb(224 242 254 / var(--tw-border-opacity, 1))
}`],"border-sky-200":[`__SCOPE__ .border-sky-200 {--tw-border-opacity: 1;border-color: rgb(186 230 253 / var(--tw-border-opacity, 1))
}`],"border-sky-300":[`__SCOPE__ .border-sky-300 {--tw-border-opacity: 1;border-color: rgb(125 211 252 / var(--tw-border-opacity, 1))
}`],"border-sky-400":[`__SCOPE__ .border-sky-400 {--tw-border-opacity: 1;border-color: rgb(56 189 248 / var(--tw-border-opacity, 1))
}`],"border-sky-50":[`__SCOPE__ .border-sky-50 {--tw-border-opacity: 1;border-color: rgb(240 249 255 / var(--tw-border-opacity, 1))
}`],"border-sky-500":[`__SCOPE__ .border-sky-500 {--tw-border-opacity: 1;border-color: rgb(14 165 233 / var(--tw-border-opacity, 1))
}`],"border-sky-600":[`__SCOPE__ .border-sky-600 {--tw-border-opacity: 1;border-color: rgb(2 132 199 / var(--tw-border-opacity, 1))
}`],"border-sky-700":[`__SCOPE__ .border-sky-700 {--tw-border-opacity: 1;border-color: rgb(3 105 161 / var(--tw-border-opacity, 1))
}`],"border-sky-800":[`__SCOPE__ .border-sky-800 {--tw-border-opacity: 1;border-color: rgb(7 89 133 / var(--tw-border-opacity, 1))
}`],"border-sky-900":[`__SCOPE__ .border-sky-900 {--tw-border-opacity: 1;border-color: rgb(12 74 110 / var(--tw-border-opacity, 1))
}`],"border-sky-950":[`__SCOPE__ .border-sky-950 {--tw-border-opacity: 1;border-color: rgb(8 47 73 / var(--tw-border-opacity, 1))
}`],"border-slate-100":[`__SCOPE__ .border-slate-100 {--tw-border-opacity: 1;border-color: rgb(241 245 249 / var(--tw-border-opacity, 1))
}`],"border-slate-200":[`__SCOPE__ .border-slate-200 {--tw-border-opacity: 1;border-color: rgb(226 232 240 / var(--tw-border-opacity, 1))
}`],"border-slate-300":[`__SCOPE__ .border-slate-300 {--tw-border-opacity: 1;border-color: rgb(203 213 225 / var(--tw-border-opacity, 1))
}`],"border-slate-400":[`__SCOPE__ .border-slate-400 {--tw-border-opacity: 1;border-color: rgb(148 163 184 / var(--tw-border-opacity, 1))
}`],"border-slate-50":[`__SCOPE__ .border-slate-50 {--tw-border-opacity: 1;border-color: rgb(248 250 252 / var(--tw-border-opacity, 1))
}`],"border-slate-500":[`__SCOPE__ .border-slate-500 {--tw-border-opacity: 1;border-color: rgb(100 116 139 / var(--tw-border-opacity, 1))
}`],"border-slate-600":[`__SCOPE__ .border-slate-600 {--tw-border-opacity: 1;border-color: rgb(71 85 105 / var(--tw-border-opacity, 1))
}`],"border-slate-700":[`__SCOPE__ .border-slate-700 {--tw-border-opacity: 1;border-color: rgb(51 65 85 / var(--tw-border-opacity, 1))
}`],"border-slate-800":[`__SCOPE__ .border-slate-800 {--tw-border-opacity: 1;border-color: rgb(30 41 59 / var(--tw-border-opacity, 1))
}`],"border-slate-900":[`__SCOPE__ .border-slate-900 {--tw-border-opacity: 1;border-color: rgb(15 23 42 / var(--tw-border-opacity, 1))
}`],"border-slate-950":[`__SCOPE__ .border-slate-950 {--tw-border-opacity: 1;border-color: rgb(2 6 23 / var(--tw-border-opacity, 1))
}`],"border-stone-100":[`__SCOPE__ .border-stone-100 {--tw-border-opacity: 1;border-color: rgb(245 245 244 / var(--tw-border-opacity, 1))
}`],"border-stone-200":[`__SCOPE__ .border-stone-200 {--tw-border-opacity: 1;border-color: rgb(231 229 228 / var(--tw-border-opacity, 1))
}`],"border-stone-300":[`__SCOPE__ .border-stone-300 {--tw-border-opacity: 1;border-color: rgb(214 211 209 / var(--tw-border-opacity, 1))
}`],"border-stone-400":[`__SCOPE__ .border-stone-400 {--tw-border-opacity: 1;border-color: rgb(168 162 158 / var(--tw-border-opacity, 1))
}`],"border-stone-50":[`__SCOPE__ .border-stone-50 {--tw-border-opacity: 1;border-color: rgb(250 250 249 / var(--tw-border-opacity, 1))
}`],"border-stone-500":[`__SCOPE__ .border-stone-500 {--tw-border-opacity: 1;border-color: rgb(120 113 108 / var(--tw-border-opacity, 1))
}`],"border-stone-600":[`__SCOPE__ .border-stone-600 {--tw-border-opacity: 1;border-color: rgb(87 83 78 / var(--tw-border-opacity, 1))
}`],"border-stone-700":[`__SCOPE__ .border-stone-700 {--tw-border-opacity: 1;border-color: rgb(68 64 60 / var(--tw-border-opacity, 1))
}`],"border-stone-800":[`__SCOPE__ .border-stone-800 {--tw-border-opacity: 1;border-color: rgb(41 37 36 / var(--tw-border-opacity, 1))
}`],"border-stone-900":[`__SCOPE__ .border-stone-900 {--tw-border-opacity: 1;border-color: rgb(28 25 23 / var(--tw-border-opacity, 1))
}`],"border-stone-950":[`__SCOPE__ .border-stone-950 {--tw-border-opacity: 1;border-color: rgb(12 10 9 / var(--tw-border-opacity, 1))
}`],"border-teal-100":[`__SCOPE__ .border-teal-100 {--tw-border-opacity: 1;border-color: rgb(204 251 241 / var(--tw-border-opacity, 1))
}`],"border-teal-200":[`__SCOPE__ .border-teal-200 {--tw-border-opacity: 1;border-color: rgb(153 246 228 / var(--tw-border-opacity, 1))
}`],"border-teal-300":[`__SCOPE__ .border-teal-300 {--tw-border-opacity: 1;border-color: rgb(94 234 212 / var(--tw-border-opacity, 1))
}`],"border-teal-400":[`__SCOPE__ .border-teal-400 {--tw-border-opacity: 1;border-color: rgb(45 212 191 / var(--tw-border-opacity, 1))
}`],"border-teal-50":[`__SCOPE__ .border-teal-50 {--tw-border-opacity: 1;border-color: rgb(240 253 250 / var(--tw-border-opacity, 1))
}`],"border-teal-500":[`__SCOPE__ .border-teal-500 {--tw-border-opacity: 1;border-color: rgb(20 184 166 / var(--tw-border-opacity, 1))
}`],"border-teal-600":[`__SCOPE__ .border-teal-600 {--tw-border-opacity: 1;border-color: rgb(13 148 136 / var(--tw-border-opacity, 1))
}`],"border-teal-700":[`__SCOPE__ .border-teal-700 {--tw-border-opacity: 1;border-color: rgb(15 118 110 / var(--tw-border-opacity, 1))
}`],"border-teal-800":[`__SCOPE__ .border-teal-800 {--tw-border-opacity: 1;border-color: rgb(17 94 89 / var(--tw-border-opacity, 1))
}`],"border-teal-900":[`__SCOPE__ .border-teal-900 {--tw-border-opacity: 1;border-color: rgb(19 78 74 / var(--tw-border-opacity, 1))
}`],"border-teal-950":[`__SCOPE__ .border-teal-950 {--tw-border-opacity: 1;border-color: rgb(4 47 46 / var(--tw-border-opacity, 1))
}`],"border-transparent":[`__SCOPE__ .border-transparent {border-color: transparent
}`],"border-violet-100":[`__SCOPE__ .border-violet-100 {--tw-border-opacity: 1;border-color: rgb(237 233 254 / var(--tw-border-opacity, 1))
}`],"border-violet-200":[`__SCOPE__ .border-violet-200 {--tw-border-opacity: 1;border-color: rgb(221 214 254 / var(--tw-border-opacity, 1))
}`],"border-violet-300":[`__SCOPE__ .border-violet-300 {--tw-border-opacity: 1;border-color: rgb(196 181 253 / var(--tw-border-opacity, 1))
}`],"border-violet-400":[`__SCOPE__ .border-violet-400 {--tw-border-opacity: 1;border-color: rgb(167 139 250 / var(--tw-border-opacity, 1))
}`],"border-violet-50":[`__SCOPE__ .border-violet-50 {--tw-border-opacity: 1;border-color: rgb(245 243 255 / var(--tw-border-opacity, 1))
}`],"border-violet-500":[`__SCOPE__ .border-violet-500 {--tw-border-opacity: 1;border-color: rgb(139 92 246 / var(--tw-border-opacity, 1))
}`],"border-violet-600":[`__SCOPE__ .border-violet-600 {--tw-border-opacity: 1;border-color: rgb(124 58 237 / var(--tw-border-opacity, 1))
}`],"border-violet-700":[`__SCOPE__ .border-violet-700 {--tw-border-opacity: 1;border-color: rgb(109 40 217 / var(--tw-border-opacity, 1))
}`],"border-violet-800":[`__SCOPE__ .border-violet-800 {--tw-border-opacity: 1;border-color: rgb(91 33 182 / var(--tw-border-opacity, 1))
}`],"border-violet-900":[`__SCOPE__ .border-violet-900 {--tw-border-opacity: 1;border-color: rgb(76 29 149 / var(--tw-border-opacity, 1))
}`],"border-violet-950":[`__SCOPE__ .border-violet-950 {--tw-border-opacity: 1;border-color: rgb(46 16 101 / var(--tw-border-opacity, 1))
}`],"border-white":[`__SCOPE__ .border-white {--tw-border-opacity: 1;border-color: rgb(255 255 255 / var(--tw-border-opacity, 1))
}`],"border-yellow-100":[`__SCOPE__ .border-yellow-100 {--tw-border-opacity: 1;border-color: rgb(254 249 195 / var(--tw-border-opacity, 1))
}`],"border-yellow-200":[`__SCOPE__ .border-yellow-200 {--tw-border-opacity: 1;border-color: rgb(254 240 138 / var(--tw-border-opacity, 1))
}`],"border-yellow-300":[`__SCOPE__ .border-yellow-300 {--tw-border-opacity: 1;border-color: rgb(253 224 71 / var(--tw-border-opacity, 1))
}`],"border-yellow-400":[`__SCOPE__ .border-yellow-400 {--tw-border-opacity: 1;border-color: rgb(250 204 21 / var(--tw-border-opacity, 1))
}`],"border-yellow-50":[`__SCOPE__ .border-yellow-50 {--tw-border-opacity: 1;border-color: rgb(254 252 232 / var(--tw-border-opacity, 1))
}`],"border-yellow-500":[`__SCOPE__ .border-yellow-500 {--tw-border-opacity: 1;border-color: rgb(234 179 8 / var(--tw-border-opacity, 1))
}`],"border-yellow-600":[`__SCOPE__ .border-yellow-600 {--tw-border-opacity: 1;border-color: rgb(202 138 4 / var(--tw-border-opacity, 1))
}`],"border-yellow-700":[`__SCOPE__ .border-yellow-700 {--tw-border-opacity: 1;border-color: rgb(161 98 7 / var(--tw-border-opacity, 1))
}`],"border-yellow-800":[`__SCOPE__ .border-yellow-800 {--tw-border-opacity: 1;border-color: rgb(133 77 14 / var(--tw-border-opacity, 1))
}`],"border-yellow-900":[`__SCOPE__ .border-yellow-900 {--tw-border-opacity: 1;border-color: rgb(113 63 18 / var(--tw-border-opacity, 1))
}`],"border-yellow-950":[`__SCOPE__ .border-yellow-950 {--tw-border-opacity: 1;border-color: rgb(66 32 6 / var(--tw-border-opacity, 1))
}`],"border-zinc-100":[`__SCOPE__ .border-zinc-100 {--tw-border-opacity: 1;border-color: rgb(244 244 245 / var(--tw-border-opacity, 1))
}`],"border-zinc-200":[`__SCOPE__ .border-zinc-200 {--tw-border-opacity: 1;border-color: rgb(228 228 231 / var(--tw-border-opacity, 1))
}`],"border-zinc-300":[`__SCOPE__ .border-zinc-300 {--tw-border-opacity: 1;border-color: rgb(212 212 216 / var(--tw-border-opacity, 1))
}`],"border-zinc-400":[`__SCOPE__ .border-zinc-400 {--tw-border-opacity: 1;border-color: rgb(161 161 170 / var(--tw-border-opacity, 1))
}`],"border-zinc-50":[`__SCOPE__ .border-zinc-50 {--tw-border-opacity: 1;border-color: rgb(250 250 250 / var(--tw-border-opacity, 1))
}`],"border-zinc-500":[`__SCOPE__ .border-zinc-500 {--tw-border-opacity: 1;border-color: rgb(113 113 122 / var(--tw-border-opacity, 1))
}`],"border-zinc-600":[`__SCOPE__ .border-zinc-600 {--tw-border-opacity: 1;border-color: rgb(82 82 91 / var(--tw-border-opacity, 1))
}`],"border-zinc-700":[`__SCOPE__ .border-zinc-700 {--tw-border-opacity: 1;border-color: rgb(63 63 70 / var(--tw-border-opacity, 1))
}`],"border-zinc-800":[`__SCOPE__ .border-zinc-800 {--tw-border-opacity: 1;border-color: rgb(39 39 42 / var(--tw-border-opacity, 1))
}`],"border-zinc-900":[`__SCOPE__ .border-zinc-900 {--tw-border-opacity: 1;border-color: rgb(24 24 27 / var(--tw-border-opacity, 1))
}`],"border-zinc-950":[`__SCOPE__ .border-zinc-950 {--tw-border-opacity: 1;border-color: rgb(9 9 11 / var(--tw-border-opacity, 1))
}`],"bg-amber-100":[`__SCOPE__ .bg-amber-100 {--tw-bg-opacity: 1;background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1))
}`],"bg-amber-200":[`__SCOPE__ .bg-amber-200 {--tw-bg-opacity: 1;background-color: rgb(253 230 138 / var(--tw-bg-opacity, 1))
}`],"bg-amber-300":[`__SCOPE__ .bg-amber-300 {--tw-bg-opacity: 1;background-color: rgb(252 211 77 / var(--tw-bg-opacity, 1))
}`],"bg-amber-400":[`__SCOPE__ .bg-amber-400 {--tw-bg-opacity: 1;background-color: rgb(251 191 36 / var(--tw-bg-opacity, 1))
}`],"bg-amber-50":[`__SCOPE__ .bg-amber-50 {--tw-bg-opacity: 1;background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1))
}`],"bg-amber-500":[`__SCOPE__ .bg-amber-500 {--tw-bg-opacity: 1;background-color: rgb(245 158 11 / var(--tw-bg-opacity, 1))
}`],"bg-amber-600":[`__SCOPE__ .bg-amber-600 {--tw-bg-opacity: 1;background-color: rgb(217 119 6 / var(--tw-bg-opacity, 1))
}`],"bg-amber-700":[`__SCOPE__ .bg-amber-700 {--tw-bg-opacity: 1;background-color: rgb(180 83 9 / var(--tw-bg-opacity, 1))
}`],"bg-amber-800":[`__SCOPE__ .bg-amber-800 {--tw-bg-opacity: 1;background-color: rgb(146 64 14 / var(--tw-bg-opacity, 1))
}`],"bg-amber-900":[`__SCOPE__ .bg-amber-900 {--tw-bg-opacity: 1;background-color: rgb(120 53 15 / var(--tw-bg-opacity, 1))
}`],"bg-amber-950":[`__SCOPE__ .bg-amber-950 {--tw-bg-opacity: 1;background-color: rgb(69 26 3 / var(--tw-bg-opacity, 1))
}`],"bg-black":[`__SCOPE__ .bg-black {--tw-bg-opacity: 1;background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1))
}`],"bg-blue-100":[`__SCOPE__ .bg-blue-100 {--tw-bg-opacity: 1;background-color: rgb(219 234 254 / var(--tw-bg-opacity, 1))
}`],"bg-blue-200":[`__SCOPE__ .bg-blue-200 {--tw-bg-opacity: 1;background-color: rgb(191 219 254 / var(--tw-bg-opacity, 1))
}`],"bg-blue-300":[`__SCOPE__ .bg-blue-300 {--tw-bg-opacity: 1;background-color: rgb(147 197 253 / var(--tw-bg-opacity, 1))
}`],"bg-blue-400":[`__SCOPE__ .bg-blue-400 {--tw-bg-opacity: 1;background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1))
}`],"bg-blue-50":[`__SCOPE__ .bg-blue-50 {--tw-bg-opacity: 1;background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))
}`],"bg-blue-500":[`__SCOPE__ .bg-blue-500 {--tw-bg-opacity: 1;background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1))
}`],"bg-blue-600":[`__SCOPE__ .bg-blue-600 {--tw-bg-opacity: 1;background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))
}`],"bg-blue-700":[`__SCOPE__ .bg-blue-700 {--tw-bg-opacity: 1;background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))
}`],"bg-blue-800":[`__SCOPE__ .bg-blue-800 {--tw-bg-opacity: 1;background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1))
}`],"bg-blue-900":[`__SCOPE__ .bg-blue-900 {--tw-bg-opacity: 1;background-color: rgb(30 58 138 / var(--tw-bg-opacity, 1))
}`],"bg-blue-950":[`__SCOPE__ .bg-blue-950 {--tw-bg-opacity: 1;background-color: rgb(23 37 84 / var(--tw-bg-opacity, 1))
}`],"bg-current":[`__SCOPE__ .bg-current {background-color: currentColor
}`],"bg-cyan-100":[`__SCOPE__ .bg-cyan-100 {--tw-bg-opacity: 1;background-color: rgb(207 250 254 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-200":[`__SCOPE__ .bg-cyan-200 {--tw-bg-opacity: 1;background-color: rgb(165 243 252 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-300":[`__SCOPE__ .bg-cyan-300 {--tw-bg-opacity: 1;background-color: rgb(103 232 249 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-400":[`__SCOPE__ .bg-cyan-400 {--tw-bg-opacity: 1;background-color: rgb(34 211 238 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-50":[`__SCOPE__ .bg-cyan-50 {--tw-bg-opacity: 1;background-color: rgb(236 254 255 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-500":[`__SCOPE__ .bg-cyan-500 {--tw-bg-opacity: 1;background-color: rgb(6 182 212 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-600":[`__SCOPE__ .bg-cyan-600 {--tw-bg-opacity: 1;background-color: rgb(8 145 178 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-700":[`__SCOPE__ .bg-cyan-700 {--tw-bg-opacity: 1;background-color: rgb(14 116 144 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-800":[`__SCOPE__ .bg-cyan-800 {--tw-bg-opacity: 1;background-color: rgb(21 94 117 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-900":[`__SCOPE__ .bg-cyan-900 {--tw-bg-opacity: 1;background-color: rgb(22 78 99 / var(--tw-bg-opacity, 1))
}`],"bg-cyan-950":[`__SCOPE__ .bg-cyan-950 {--tw-bg-opacity: 1;background-color: rgb(8 51 68 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-100":[`__SCOPE__ .bg-emerald-100 {--tw-bg-opacity: 1;background-color: rgb(209 250 229 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-200":[`__SCOPE__ .bg-emerald-200 {--tw-bg-opacity: 1;background-color: rgb(167 243 208 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-300":[`__SCOPE__ .bg-emerald-300 {--tw-bg-opacity: 1;background-color: rgb(110 231 183 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-400":[`__SCOPE__ .bg-emerald-400 {--tw-bg-opacity: 1;background-color: rgb(52 211 153 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-50":[`__SCOPE__ .bg-emerald-50 {--tw-bg-opacity: 1;background-color: rgb(236 253 245 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-500":[`__SCOPE__ .bg-emerald-500 {--tw-bg-opacity: 1;background-color: rgb(16 185 129 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-600":[`__SCOPE__ .bg-emerald-600 {--tw-bg-opacity: 1;background-color: rgb(5 150 105 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-700":[`__SCOPE__ .bg-emerald-700 {--tw-bg-opacity: 1;background-color: rgb(4 120 87 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-800":[`__SCOPE__ .bg-emerald-800 {--tw-bg-opacity: 1;background-color: rgb(6 95 70 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-900":[`__SCOPE__ .bg-emerald-900 {--tw-bg-opacity: 1;background-color: rgb(6 78 59 / var(--tw-bg-opacity, 1))
}`],"bg-emerald-950":[`__SCOPE__ .bg-emerald-950 {--tw-bg-opacity: 1;background-color: rgb(2 44 34 / var(--tw-bg-opacity, 1))
}`],"bg-gray-100":[`__SCOPE__ .bg-gray-100 {--tw-bg-opacity: 1;background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))
}`],"bg-gray-200":[`__SCOPE__ .bg-gray-200 {--tw-bg-opacity: 1;background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))
}`],"bg-gray-300":[`__SCOPE__ .bg-gray-300 {--tw-bg-opacity: 1;background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1))
}`],"bg-gray-400":[`__SCOPE__ .bg-gray-400 {--tw-bg-opacity: 1;background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1))
}`],"bg-gray-50":[`__SCOPE__ .bg-gray-50 {--tw-bg-opacity: 1;background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1))
}`],"bg-gray-500":[`__SCOPE__ .bg-gray-500 {--tw-bg-opacity: 1;background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1))
}`],"bg-gray-600":[`__SCOPE__ .bg-gray-600 {--tw-bg-opacity: 1;background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1))
}`],"bg-gray-700":[`__SCOPE__ .bg-gray-700 {--tw-bg-opacity: 1;background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))
}`],"bg-gray-800":[`__SCOPE__ .bg-gray-800 {--tw-bg-opacity: 1;background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1))
}`],"bg-gray-900":[`__SCOPE__ .bg-gray-900 {--tw-bg-opacity: 1;background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1))
}`],"bg-gray-950":[`__SCOPE__ .bg-gray-950 {--tw-bg-opacity: 1;background-color: rgb(3 7 18 / var(--tw-bg-opacity, 1))
}`],"bg-green-100":[`__SCOPE__ .bg-green-100 {--tw-bg-opacity: 1;background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1))
}`],"bg-green-200":[`__SCOPE__ .bg-green-200 {--tw-bg-opacity: 1;background-color: rgb(187 247 208 / var(--tw-bg-opacity, 1))
}`],"bg-green-300":[`__SCOPE__ .bg-green-300 {--tw-bg-opacity: 1;background-color: rgb(134 239 172 / var(--tw-bg-opacity, 1))
}`],"bg-green-400":[`__SCOPE__ .bg-green-400 {--tw-bg-opacity: 1;background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1))
}`],"bg-green-50":[`__SCOPE__ .bg-green-50 {--tw-bg-opacity: 1;background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1))
}`],"bg-green-500":[`__SCOPE__ .bg-green-500 {--tw-bg-opacity: 1;background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1))
}`],"bg-green-600":[`__SCOPE__ .bg-green-600 {--tw-bg-opacity: 1;background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1))
}`],"bg-green-700":[`__SCOPE__ .bg-green-700 {--tw-bg-opacity: 1;background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1))
}`],"bg-green-800":[`__SCOPE__ .bg-green-800 {--tw-bg-opacity: 1;background-color: rgb(22 101 52 / var(--tw-bg-opacity, 1))
}`],"bg-green-900":[`__SCOPE__ .bg-green-900 {--tw-bg-opacity: 1;background-color: rgb(20 83 45 / var(--tw-bg-opacity, 1))
}`],"bg-green-950":[`__SCOPE__ .bg-green-950 {--tw-bg-opacity: 1;background-color: rgb(5 46 22 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-100":[`__SCOPE__ .bg-indigo-100 {--tw-bg-opacity: 1;background-color: rgb(224 231 255 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-200":[`__SCOPE__ .bg-indigo-200 {--tw-bg-opacity: 1;background-color: rgb(199 210 254 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-300":[`__SCOPE__ .bg-indigo-300 {--tw-bg-opacity: 1;background-color: rgb(165 180 252 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-400":[`__SCOPE__ .bg-indigo-400 {--tw-bg-opacity: 1;background-color: rgb(129 140 248 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-50":[`__SCOPE__ .bg-indigo-50 {--tw-bg-opacity: 1;background-color: rgb(238 242 255 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-500":[`__SCOPE__ .bg-indigo-500 {--tw-bg-opacity: 1;background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-600":[`__SCOPE__ .bg-indigo-600 {--tw-bg-opacity: 1;background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-700":[`__SCOPE__ .bg-indigo-700 {--tw-bg-opacity: 1;background-color: rgb(67 56 202 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-800":[`__SCOPE__ .bg-indigo-800 {--tw-bg-opacity: 1;background-color: rgb(55 48 163 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-900":[`__SCOPE__ .bg-indigo-900 {--tw-bg-opacity: 1;background-color: rgb(49 46 129 / var(--tw-bg-opacity, 1))
}`],"bg-indigo-950":[`__SCOPE__ .bg-indigo-950 {--tw-bg-opacity: 1;background-color: rgb(30 27 75 / var(--tw-bg-opacity, 1))
}`],"bg-lime-100":[`__SCOPE__ .bg-lime-100 {--tw-bg-opacity: 1;background-color: rgb(236 252 203 / var(--tw-bg-opacity, 1))
}`],"bg-lime-200":[`__SCOPE__ .bg-lime-200 {--tw-bg-opacity: 1;background-color: rgb(217 249 157 / var(--tw-bg-opacity, 1))
}`],"bg-lime-300":[`__SCOPE__ .bg-lime-300 {--tw-bg-opacity: 1;background-color: rgb(190 242 100 / var(--tw-bg-opacity, 1))
}`],"bg-lime-400":[`__SCOPE__ .bg-lime-400 {--tw-bg-opacity: 1;background-color: rgb(163 230 53 / var(--tw-bg-opacity, 1))
}`],"bg-lime-50":[`__SCOPE__ .bg-lime-50 {--tw-bg-opacity: 1;background-color: rgb(247 254 231 / var(--tw-bg-opacity, 1))
}`],"bg-lime-500":[`__SCOPE__ .bg-lime-500 {--tw-bg-opacity: 1;background-color: rgb(132 204 22 / var(--tw-bg-opacity, 1))
}`],"bg-lime-600":[`__SCOPE__ .bg-lime-600 {--tw-bg-opacity: 1;background-color: rgb(101 163 13 / var(--tw-bg-opacity, 1))
}`],"bg-lime-700":[`__SCOPE__ .bg-lime-700 {--tw-bg-opacity: 1;background-color: rgb(77 124 15 / var(--tw-bg-opacity, 1))
}`],"bg-lime-800":[`__SCOPE__ .bg-lime-800 {--tw-bg-opacity: 1;background-color: rgb(63 98 18 / var(--tw-bg-opacity, 1))
}`],"bg-lime-900":[`__SCOPE__ .bg-lime-900 {--tw-bg-opacity: 1;background-color: rgb(54 83 20 / var(--tw-bg-opacity, 1))
}`],"bg-lime-950":[`__SCOPE__ .bg-lime-950 {--tw-bg-opacity: 1;background-color: rgb(26 46 5 / var(--tw-bg-opacity, 1))
}`],"bg-orange-100":[`__SCOPE__ .bg-orange-100 {--tw-bg-opacity: 1;background-color: rgb(255 237 213 / var(--tw-bg-opacity, 1))
}`],"bg-orange-200":[`__SCOPE__ .bg-orange-200 {--tw-bg-opacity: 1;background-color: rgb(254 215 170 / var(--tw-bg-opacity, 1))
}`],"bg-orange-300":[`__SCOPE__ .bg-orange-300 {--tw-bg-opacity: 1;background-color: rgb(253 186 116 / var(--tw-bg-opacity, 1))
}`],"bg-orange-400":[`__SCOPE__ .bg-orange-400 {--tw-bg-opacity: 1;background-color: rgb(251 146 60 / var(--tw-bg-opacity, 1))
}`],"bg-orange-50":[`__SCOPE__ .bg-orange-50 {--tw-bg-opacity: 1;background-color: rgb(255 247 237 / var(--tw-bg-opacity, 1))
}`],"bg-orange-500":[`__SCOPE__ .bg-orange-500 {--tw-bg-opacity: 1;background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1))
}`],"bg-orange-600":[`__SCOPE__ .bg-orange-600 {--tw-bg-opacity: 1;background-color: rgb(234 88 12 / var(--tw-bg-opacity, 1))
}`],"bg-orange-700":[`__SCOPE__ .bg-orange-700 {--tw-bg-opacity: 1;background-color: rgb(194 65 12 / var(--tw-bg-opacity, 1))
}`],"bg-orange-800":[`__SCOPE__ .bg-orange-800 {--tw-bg-opacity: 1;background-color: rgb(154 52 18 / var(--tw-bg-opacity, 1))
}`],"bg-orange-900":[`__SCOPE__ .bg-orange-900 {--tw-bg-opacity: 1;background-color: rgb(124 45 18 / var(--tw-bg-opacity, 1))
}`],"bg-orange-950":[`__SCOPE__ .bg-orange-950 {--tw-bg-opacity: 1;background-color: rgb(67 20 7 / var(--tw-bg-opacity, 1))
}`],"bg-pink-100":[`__SCOPE__ .bg-pink-100 {--tw-bg-opacity: 1;background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1))
}`],"bg-pink-200":[`__SCOPE__ .bg-pink-200 {--tw-bg-opacity: 1;background-color: rgb(251 207 232 / var(--tw-bg-opacity, 1))
}`],"bg-pink-300":[`__SCOPE__ .bg-pink-300 {--tw-bg-opacity: 1;background-color: rgb(249 168 212 / var(--tw-bg-opacity, 1))
}`],"bg-pink-400":[`__SCOPE__ .bg-pink-400 {--tw-bg-opacity: 1;background-color: rgb(244 114 182 / var(--tw-bg-opacity, 1))
}`],"bg-pink-50":[`__SCOPE__ .bg-pink-50 {--tw-bg-opacity: 1;background-color: rgb(253 242 248 / var(--tw-bg-opacity, 1))
}`],"bg-pink-500":[`__SCOPE__ .bg-pink-500 {--tw-bg-opacity: 1;background-color: rgb(236 72 153 / var(--tw-bg-opacity, 1))
}`],"bg-pink-600":[`__SCOPE__ .bg-pink-600 {--tw-bg-opacity: 1;background-color: rgb(219 39 119 / var(--tw-bg-opacity, 1))
}`],"bg-pink-700":[`__SCOPE__ .bg-pink-700 {--tw-bg-opacity: 1;background-color: rgb(190 24 93 / var(--tw-bg-opacity, 1))
}`],"bg-pink-800":[`__SCOPE__ .bg-pink-800 {--tw-bg-opacity: 1;background-color: rgb(157 23 77 / var(--tw-bg-opacity, 1))
}`],"bg-pink-900":[`__SCOPE__ .bg-pink-900 {--tw-bg-opacity: 1;background-color: rgb(131 24 67 / var(--tw-bg-opacity, 1))
}`],"bg-pink-950":[`__SCOPE__ .bg-pink-950 {--tw-bg-opacity: 1;background-color: rgb(80 7 36 / var(--tw-bg-opacity, 1))
}`],"bg-primary":[`__SCOPE__ .bg-primary {--tw-bg-opacity: 1;background-color: rgb(55 88 249 / var(--tw-bg-opacity, 1))
}`],"bg-primary/5":[`__SCOPE__ .bg-primary\\/5 {background-color: rgb(55 88 249 / 0.05)
}`],"bg-purple-100":[`__SCOPE__ .bg-purple-100 {--tw-bg-opacity: 1;background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1))
}`],"bg-purple-200":[`__SCOPE__ .bg-purple-200 {--tw-bg-opacity: 1;background-color: rgb(233 213 255 / var(--tw-bg-opacity, 1))
}`],"bg-purple-300":[`__SCOPE__ .bg-purple-300 {--tw-bg-opacity: 1;background-color: rgb(216 180 254 / var(--tw-bg-opacity, 1))
}`],"bg-purple-400":[`__SCOPE__ .bg-purple-400 {--tw-bg-opacity: 1;background-color: rgb(192 132 252 / var(--tw-bg-opacity, 1))
}`],"bg-purple-50":[`__SCOPE__ .bg-purple-50 {--tw-bg-opacity: 1;background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1))
}`],"bg-purple-500":[`__SCOPE__ .bg-purple-500 {--tw-bg-opacity: 1;background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1))
}`],"bg-purple-600":[`__SCOPE__ .bg-purple-600 {--tw-bg-opacity: 1;background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1))
}`],"bg-purple-700":[`__SCOPE__ .bg-purple-700 {--tw-bg-opacity: 1;background-color: rgb(126 34 206 / var(--tw-bg-opacity, 1))
}`],"bg-purple-800":[`__SCOPE__ .bg-purple-800 {--tw-bg-opacity: 1;background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1))
}`],"bg-purple-900":[`__SCOPE__ .bg-purple-900 {--tw-bg-opacity: 1;background-color: rgb(88 28 135 / var(--tw-bg-opacity, 1))
}`],"bg-purple-950":[`__SCOPE__ .bg-purple-950 {--tw-bg-opacity: 1;background-color: rgb(59 7 100 / var(--tw-bg-opacity, 1))
}`],"bg-red-100":[`__SCOPE__ .bg-red-100 {--tw-bg-opacity: 1;background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1))
}`],"bg-red-200":[`__SCOPE__ .bg-red-200 {--tw-bg-opacity: 1;background-color: rgb(254 202 202 / var(--tw-bg-opacity, 1))
}`],"bg-red-300":[`__SCOPE__ .bg-red-300 {--tw-bg-opacity: 1;background-color: rgb(252 165 165 / var(--tw-bg-opacity, 1))
}`],"bg-red-400":[`__SCOPE__ .bg-red-400 {--tw-bg-opacity: 1;background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1))
}`],"bg-red-50":[`__SCOPE__ .bg-red-50 {--tw-bg-opacity: 1;background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1))
}`],"bg-red-500":[`__SCOPE__ .bg-red-500 {--tw-bg-opacity: 1;background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1))
}`],"bg-red-600":[`__SCOPE__ .bg-red-600 {--tw-bg-opacity: 1;background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1))
}`],"bg-red-700":[`__SCOPE__ .bg-red-700 {--tw-bg-opacity: 1;background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1))
}`],"bg-red-800":[`__SCOPE__ .bg-red-800 {--tw-bg-opacity: 1;background-color: rgb(153 27 27 / var(--tw-bg-opacity, 1))
}`],"bg-red-900":[`__SCOPE__ .bg-red-900 {--tw-bg-opacity: 1;background-color: rgb(127 29 29 / var(--tw-bg-opacity, 1))
}`],"bg-red-950":[`__SCOPE__ .bg-red-950 {--tw-bg-opacity: 1;background-color: rgb(69 10 10 / var(--tw-bg-opacity, 1))
}`],"bg-rose-100":[`__SCOPE__ .bg-rose-100 {--tw-bg-opacity: 1;background-color: rgb(255 228 230 / var(--tw-bg-opacity, 1))
}`],"bg-rose-200":[`__SCOPE__ .bg-rose-200 {--tw-bg-opacity: 1;background-color: rgb(254 205 211 / var(--tw-bg-opacity, 1))
}`],"bg-rose-300":[`__SCOPE__ .bg-rose-300 {--tw-bg-opacity: 1;background-color: rgb(253 164 175 / var(--tw-bg-opacity, 1))
}`],"bg-rose-400":[`__SCOPE__ .bg-rose-400 {--tw-bg-opacity: 1;background-color: rgb(251 113 133 / var(--tw-bg-opacity, 1))
}`],"bg-rose-50":[`__SCOPE__ .bg-rose-50 {--tw-bg-opacity: 1;background-color: rgb(255 241 242 / var(--tw-bg-opacity, 1))
}`],"bg-rose-500":[`__SCOPE__ .bg-rose-500 {--tw-bg-opacity: 1;background-color: rgb(244 63 94 / var(--tw-bg-opacity, 1))
}`],"bg-rose-600":[`__SCOPE__ .bg-rose-600 {--tw-bg-opacity: 1;background-color: rgb(225 29 72 / var(--tw-bg-opacity, 1))
}`],"bg-rose-700":[`__SCOPE__ .bg-rose-700 {--tw-bg-opacity: 1;background-color: rgb(190 18 60 / var(--tw-bg-opacity, 1))
}`],"bg-rose-800":[`__SCOPE__ .bg-rose-800 {--tw-bg-opacity: 1;background-color: rgb(159 18 57 / var(--tw-bg-opacity, 1))
}`],"bg-rose-900":[`__SCOPE__ .bg-rose-900 {--tw-bg-opacity: 1;background-color: rgb(136 19 55 / var(--tw-bg-opacity, 1))
}`],"bg-rose-950":[`__SCOPE__ .bg-rose-950 {--tw-bg-opacity: 1;background-color: rgb(76 5 25 / var(--tw-bg-opacity, 1))
}`],"bg-sky-100":[`__SCOPE__ .bg-sky-100 {--tw-bg-opacity: 1;background-color: rgb(224 242 254 / var(--tw-bg-opacity, 1))
}`],"bg-sky-200":[`__SCOPE__ .bg-sky-200 {--tw-bg-opacity: 1;background-color: rgb(186 230 253 / var(--tw-bg-opacity, 1))
}`],"bg-sky-300":[`__SCOPE__ .bg-sky-300 {--tw-bg-opacity: 1;background-color: rgb(125 211 252 / var(--tw-bg-opacity, 1))
}`],"bg-sky-400":[`__SCOPE__ .bg-sky-400 {--tw-bg-opacity: 1;background-color: rgb(56 189 248 / var(--tw-bg-opacity, 1))
}`],"bg-sky-50":[`__SCOPE__ .bg-sky-50 {--tw-bg-opacity: 1;background-color: rgb(240 249 255 / var(--tw-bg-opacity, 1))
}`],"bg-sky-500":[`__SCOPE__ .bg-sky-500 {--tw-bg-opacity: 1;background-color: rgb(14 165 233 / var(--tw-bg-opacity, 1))
}`],"bg-sky-600":[`__SCOPE__ .bg-sky-600 {--tw-bg-opacity: 1;background-color: rgb(2 132 199 / var(--tw-bg-opacity, 1))
}`],"bg-sky-700":[`__SCOPE__ .bg-sky-700 {--tw-bg-opacity: 1;background-color: rgb(3 105 161 / var(--tw-bg-opacity, 1))
}`],"bg-sky-800":[`__SCOPE__ .bg-sky-800 {--tw-bg-opacity: 1;background-color: rgb(7 89 133 / var(--tw-bg-opacity, 1))
}`],"bg-sky-900":[`__SCOPE__ .bg-sky-900 {--tw-bg-opacity: 1;background-color: rgb(12 74 110 / var(--tw-bg-opacity, 1))
}`],"bg-sky-950":[`__SCOPE__ .bg-sky-950 {--tw-bg-opacity: 1;background-color: rgb(8 47 73 / var(--tw-bg-opacity, 1))
}`],"bg-slate-100":[`__SCOPE__ .bg-slate-100 {--tw-bg-opacity: 1;background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1))
}`],"bg-slate-200":[`__SCOPE__ .bg-slate-200 {--tw-bg-opacity: 1;background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1))
}`],"bg-slate-300":[`__SCOPE__ .bg-slate-300 {--tw-bg-opacity: 1;background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1))
}`],"bg-slate-400":[`__SCOPE__ .bg-slate-400 {--tw-bg-opacity: 1;background-color: rgb(148 163 184 / var(--tw-bg-opacity, 1))
}`],"bg-slate-50":[`__SCOPE__ .bg-slate-50 {--tw-bg-opacity: 1;background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1))
}`],"bg-slate-500":[`__SCOPE__ .bg-slate-500 {--tw-bg-opacity: 1;background-color: rgb(100 116 139 / var(--tw-bg-opacity, 1))
}`],"bg-slate-600":[`__SCOPE__ .bg-slate-600 {--tw-bg-opacity: 1;background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1))
}`],"bg-slate-700":[`__SCOPE__ .bg-slate-700 {--tw-bg-opacity: 1;background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1))
}`],"bg-slate-800":[`__SCOPE__ .bg-slate-800 {--tw-bg-opacity: 1;background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1))
}`],"bg-slate-900":[`__SCOPE__ .bg-slate-900 {--tw-bg-opacity: 1;background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1))
}`],"bg-slate-950":[`__SCOPE__ .bg-slate-950 {--tw-bg-opacity: 1;background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1))
}`],"bg-stone-100":[`__SCOPE__ .bg-stone-100 {--tw-bg-opacity: 1;background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1))
}`],"bg-stone-200":[`__SCOPE__ .bg-stone-200 {--tw-bg-opacity: 1;background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1))
}`],"bg-stone-300":[`__SCOPE__ .bg-stone-300 {--tw-bg-opacity: 1;background-color: rgb(214 211 209 / var(--tw-bg-opacity, 1))
}`],"bg-stone-400":[`__SCOPE__ .bg-stone-400 {--tw-bg-opacity: 1;background-color: rgb(168 162 158 / var(--tw-bg-opacity, 1))
}`],"bg-stone-50":[`__SCOPE__ .bg-stone-50 {--tw-bg-opacity: 1;background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1))
}`],"bg-stone-500":[`__SCOPE__ .bg-stone-500 {--tw-bg-opacity: 1;background-color: rgb(120 113 108 / var(--tw-bg-opacity, 1))
}`],"bg-stone-600":[`__SCOPE__ .bg-stone-600 {--tw-bg-opacity: 1;background-color: rgb(87 83 78 / var(--tw-bg-opacity, 1))
}`],"bg-stone-700":[`__SCOPE__ .bg-stone-700 {--tw-bg-opacity: 1;background-color: rgb(68 64 60 / var(--tw-bg-opacity, 1))
}`],"bg-stone-800":[`__SCOPE__ .bg-stone-800 {--tw-bg-opacity: 1;background-color: rgb(41 37 36 / var(--tw-bg-opacity, 1))
}`],"bg-stone-900":[`__SCOPE__ .bg-stone-900 {--tw-bg-opacity: 1;background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1))
}`],"bg-stone-950":[`__SCOPE__ .bg-stone-950 {--tw-bg-opacity: 1;background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1))
}`],"bg-teal-100":[`__SCOPE__ .bg-teal-100 {--tw-bg-opacity: 1;background-color: rgb(204 251 241 / var(--tw-bg-opacity, 1))
}`],"bg-teal-200":[`__SCOPE__ .bg-teal-200 {--tw-bg-opacity: 1;background-color: rgb(153 246 228 / var(--tw-bg-opacity, 1))
}`],"bg-teal-300":[`__SCOPE__ .bg-teal-300 {--tw-bg-opacity: 1;background-color: rgb(94 234 212 / var(--tw-bg-opacity, 1))
}`],"bg-teal-400":[`__SCOPE__ .bg-teal-400 {--tw-bg-opacity: 1;background-color: rgb(45 212 191 / var(--tw-bg-opacity, 1))
}`],"bg-teal-50":[`__SCOPE__ .bg-teal-50 {--tw-bg-opacity: 1;background-color: rgb(240 253 250 / var(--tw-bg-opacity, 1))
}`],"bg-teal-500":[`__SCOPE__ .bg-teal-500 {--tw-bg-opacity: 1;background-color: rgb(20 184 166 / var(--tw-bg-opacity, 1))
}`],"bg-teal-600":[`__SCOPE__ .bg-teal-600 {--tw-bg-opacity: 1;background-color: rgb(13 148 136 / var(--tw-bg-opacity, 1))
}`],"bg-teal-700":[`__SCOPE__ .bg-teal-700 {--tw-bg-opacity: 1;background-color: rgb(15 118 110 / var(--tw-bg-opacity, 1))
}`],"bg-teal-800":[`__SCOPE__ .bg-teal-800 {--tw-bg-opacity: 1;background-color: rgb(17 94 89 / var(--tw-bg-opacity, 1))
}`],"bg-teal-900":[`__SCOPE__ .bg-teal-900 {--tw-bg-opacity: 1;background-color: rgb(19 78 74 / var(--tw-bg-opacity, 1))
}`],"bg-teal-950":[`__SCOPE__ .bg-teal-950 {--tw-bg-opacity: 1;background-color: rgb(4 47 46 / var(--tw-bg-opacity, 1))
}`],"bg-transparent":[`__SCOPE__ .bg-transparent {background-color: transparent
}`],"bg-violet-100":[`__SCOPE__ .bg-violet-100 {--tw-bg-opacity: 1;background-color: rgb(237 233 254 / var(--tw-bg-opacity, 1))
}`],"bg-violet-200":[`__SCOPE__ .bg-violet-200 {--tw-bg-opacity: 1;background-color: rgb(221 214 254 / var(--tw-bg-opacity, 1))
}`],"bg-violet-300":[`__SCOPE__ .bg-violet-300 {--tw-bg-opacity: 1;background-color: rgb(196 181 253 / var(--tw-bg-opacity, 1))
}`],"bg-violet-400":[`__SCOPE__ .bg-violet-400 {--tw-bg-opacity: 1;background-color: rgb(167 139 250 / var(--tw-bg-opacity, 1))
}`],"bg-violet-50":[`__SCOPE__ .bg-violet-50 {--tw-bg-opacity: 1;background-color: rgb(245 243 255 / var(--tw-bg-opacity, 1))
}`],"bg-violet-500":[`__SCOPE__ .bg-violet-500 {--tw-bg-opacity: 1;background-color: rgb(139 92 246 / var(--tw-bg-opacity, 1))
}`],"bg-violet-600":[`__SCOPE__ .bg-violet-600 {--tw-bg-opacity: 1;background-color: rgb(124 58 237 / var(--tw-bg-opacity, 1))
}`],"bg-violet-700":[`__SCOPE__ .bg-violet-700 {--tw-bg-opacity: 1;background-color: rgb(109 40 217 / var(--tw-bg-opacity, 1))
}`],"bg-violet-800":[`__SCOPE__ .bg-violet-800 {--tw-bg-opacity: 1;background-color: rgb(91 33 182 / var(--tw-bg-opacity, 1))
}`],"bg-violet-900":[`__SCOPE__ .bg-violet-900 {--tw-bg-opacity: 1;background-color: rgb(76 29 149 / var(--tw-bg-opacity, 1))
}`],"bg-violet-950":[`__SCOPE__ .bg-violet-950 {--tw-bg-opacity: 1;background-color: rgb(46 16 101 / var(--tw-bg-opacity, 1))
}`],"bg-white":[`__SCOPE__ .bg-white {--tw-bg-opacity: 1;background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-100":[`__SCOPE__ .bg-yellow-100 {--tw-bg-opacity: 1;background-color: rgb(254 249 195 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-200":[`__SCOPE__ .bg-yellow-200 {--tw-bg-opacity: 1;background-color: rgb(254 240 138 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-300":[`__SCOPE__ .bg-yellow-300 {--tw-bg-opacity: 1;background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-400":[`__SCOPE__ .bg-yellow-400 {--tw-bg-opacity: 1;background-color: rgb(250 204 21 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-50":[`__SCOPE__ .bg-yellow-50 {--tw-bg-opacity: 1;background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-500":[`__SCOPE__ .bg-yellow-500 {--tw-bg-opacity: 1;background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-600":[`__SCOPE__ .bg-yellow-600 {--tw-bg-opacity: 1;background-color: rgb(202 138 4 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-700":[`__SCOPE__ .bg-yellow-700 {--tw-bg-opacity: 1;background-color: rgb(161 98 7 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-800":[`__SCOPE__ .bg-yellow-800 {--tw-bg-opacity: 1;background-color: rgb(133 77 14 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-900":[`__SCOPE__ .bg-yellow-900 {--tw-bg-opacity: 1;background-color: rgb(113 63 18 / var(--tw-bg-opacity, 1))
}`],"bg-yellow-950":[`__SCOPE__ .bg-yellow-950 {--tw-bg-opacity: 1;background-color: rgb(66 32 6 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-100":[`__SCOPE__ .bg-zinc-100 {--tw-bg-opacity: 1;background-color: rgb(244 244 245 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-200":[`__SCOPE__ .bg-zinc-200 {--tw-bg-opacity: 1;background-color: rgb(228 228 231 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-300":[`__SCOPE__ .bg-zinc-300 {--tw-bg-opacity: 1;background-color: rgb(212 212 216 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-400":[`__SCOPE__ .bg-zinc-400 {--tw-bg-opacity: 1;background-color: rgb(161 161 170 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-50":[`__SCOPE__ .bg-zinc-50 {--tw-bg-opacity: 1;background-color: rgb(250 250 250 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-500":[`__SCOPE__ .bg-zinc-500 {--tw-bg-opacity: 1;background-color: rgb(113 113 122 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-600":[`__SCOPE__ .bg-zinc-600 {--tw-bg-opacity: 1;background-color: rgb(82 82 91 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-700":[`__SCOPE__ .bg-zinc-700 {--tw-bg-opacity: 1;background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-800":[`__SCOPE__ .bg-zinc-800 {--tw-bg-opacity: 1;background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-900":[`__SCOPE__ .bg-zinc-900 {--tw-bg-opacity: 1;background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1))
}`],"bg-zinc-950":[`__SCOPE__ .bg-zinc-950 {--tw-bg-opacity: 1;background-color: rgb(9 9 11 / var(--tw-bg-opacity, 1))
}`],"fill-amber-100":[`__SCOPE__ .fill-amber-100 {fill: #fef3c7
}`],"fill-amber-200":[`__SCOPE__ .fill-amber-200 {fill: #fde68a
}`],"fill-amber-300":[`__SCOPE__ .fill-amber-300 {fill: #fcd34d
}`],"fill-amber-400":[`__SCOPE__ .fill-amber-400 {fill: #fbbf24
}`],"fill-amber-50":[`__SCOPE__ .fill-amber-50 {fill: #fffbeb
}`],"fill-amber-500":[`__SCOPE__ .fill-amber-500 {fill: #f59e0b
}`],"fill-amber-600":[`__SCOPE__ .fill-amber-600 {fill: #d97706
}`],"fill-amber-700":[`__SCOPE__ .fill-amber-700 {fill: #b45309
}`],"fill-amber-800":[`__SCOPE__ .fill-amber-800 {fill: #92400e
}`],"fill-amber-900":[`__SCOPE__ .fill-amber-900 {fill: #78350f
}`],"fill-amber-950":[`__SCOPE__ .fill-amber-950 {fill: #451a03
}`],"fill-blue-100":[`__SCOPE__ .fill-blue-100 {fill: #dbeafe
}`],"fill-blue-200":[`__SCOPE__ .fill-blue-200 {fill: #bfdbfe
}`],"fill-blue-300":[`__SCOPE__ .fill-blue-300 {fill: #93c5fd
}`],"fill-blue-400":[`__SCOPE__ .fill-blue-400 {fill: #60a5fa
}`],"fill-blue-50":[`__SCOPE__ .fill-blue-50 {fill: #eff6ff
}`],"fill-blue-500":[`__SCOPE__ .fill-blue-500 {fill: #3b82f6
}`],"fill-blue-600":[`__SCOPE__ .fill-blue-600 {fill: #2563eb
}`],"fill-blue-700":[`__SCOPE__ .fill-blue-700 {fill: #1d4ed8
}`],"fill-blue-800":[`__SCOPE__ .fill-blue-800 {fill: #1e40af
}`],"fill-blue-900":[`__SCOPE__ .fill-blue-900 {fill: #1e3a8a
}`],"fill-blue-950":[`__SCOPE__ .fill-blue-950 {fill: #172554
}`],"fill-cyan-100":[`__SCOPE__ .fill-cyan-100 {fill: #cffafe
}`],"fill-cyan-200":[`__SCOPE__ .fill-cyan-200 {fill: #a5f3fc
}`],"fill-cyan-300":[`__SCOPE__ .fill-cyan-300 {fill: #67e8f9
}`],"fill-cyan-400":[`__SCOPE__ .fill-cyan-400 {fill: #22d3ee
}`],"fill-cyan-50":[`__SCOPE__ .fill-cyan-50 {fill: #ecfeff
}`],"fill-cyan-500":[`__SCOPE__ .fill-cyan-500 {fill: #06b6d4
}`],"fill-cyan-600":[`__SCOPE__ .fill-cyan-600 {fill: #0891b2
}`],"fill-cyan-700":[`__SCOPE__ .fill-cyan-700 {fill: #0e7490
}`],"fill-cyan-800":[`__SCOPE__ .fill-cyan-800 {fill: #155e75
}`],"fill-cyan-900":[`__SCOPE__ .fill-cyan-900 {fill: #164e63
}`],"fill-cyan-950":[`__SCOPE__ .fill-cyan-950 {fill: #083344
}`],"fill-emerald-100":[`__SCOPE__ .fill-emerald-100 {fill: #d1fae5
}`],"fill-emerald-200":[`__SCOPE__ .fill-emerald-200 {fill: #a7f3d0
}`],"fill-emerald-300":[`__SCOPE__ .fill-emerald-300 {fill: #6ee7b7
}`],"fill-emerald-400":[`__SCOPE__ .fill-emerald-400 {fill: #34d399
}`],"fill-emerald-50":[`__SCOPE__ .fill-emerald-50 {fill: #ecfdf5
}`],"fill-emerald-500":[`__SCOPE__ .fill-emerald-500 {fill: #10b981
}`],"fill-emerald-600":[`__SCOPE__ .fill-emerald-600 {fill: #059669
}`],"fill-emerald-700":[`__SCOPE__ .fill-emerald-700 {fill: #047857
}`],"fill-emerald-800":[`__SCOPE__ .fill-emerald-800 {fill: #065f46
}`],"fill-emerald-900":[`__SCOPE__ .fill-emerald-900 {fill: #064e3b
}`],"fill-emerald-950":[`__SCOPE__ .fill-emerald-950 {fill: #022c22
}`],"fill-gray-100":[`__SCOPE__ .fill-gray-100 {fill: #f3f4f6
}`],"fill-gray-200":[`__SCOPE__ .fill-gray-200 {fill: #e5e7eb
}`],"fill-gray-300":[`__SCOPE__ .fill-gray-300 {fill: #d1d5db
}`],"fill-gray-400":[`__SCOPE__ .fill-gray-400 {fill: #9ca3af
}`],"fill-gray-50":[`__SCOPE__ .fill-gray-50 {fill: #f9fafb
}`],"fill-gray-500":[`__SCOPE__ .fill-gray-500 {fill: #6b7280
}`],"fill-gray-600":[`__SCOPE__ .fill-gray-600 {fill: #4b5563
}`],"fill-gray-700":[`__SCOPE__ .fill-gray-700 {fill: #374151
}`],"fill-gray-800":[`__SCOPE__ .fill-gray-800 {fill: #1f2937
}`],"fill-gray-900":[`__SCOPE__ .fill-gray-900 {fill: #111827
}`],"fill-gray-950":[`__SCOPE__ .fill-gray-950 {fill: #030712
}`],"fill-green-100":[`__SCOPE__ .fill-green-100 {fill: #dcfce7
}`],"fill-green-200":[`__SCOPE__ .fill-green-200 {fill: #bbf7d0
}`],"fill-green-300":[`__SCOPE__ .fill-green-300 {fill: #86efac
}`],"fill-green-400":[`__SCOPE__ .fill-green-400 {fill: #4ade80
}`],"fill-green-50":[`__SCOPE__ .fill-green-50 {fill: #f0fdf4
}`],"fill-green-500":[`__SCOPE__ .fill-green-500 {fill: #22c55e
}`],"fill-green-600":[`__SCOPE__ .fill-green-600 {fill: #16a34a
}`],"fill-green-700":[`__SCOPE__ .fill-green-700 {fill: #15803d
}`],"fill-green-800":[`__SCOPE__ .fill-green-800 {fill: #166534
}`],"fill-green-900":[`__SCOPE__ .fill-green-900 {fill: #14532d
}`],"fill-green-950":[`__SCOPE__ .fill-green-950 {fill: #052e16
}`],"fill-indigo-100":[`__SCOPE__ .fill-indigo-100 {fill: #e0e7ff
}`],"fill-indigo-200":[`__SCOPE__ .fill-indigo-200 {fill: #c7d2fe
}`],"fill-indigo-300":[`__SCOPE__ .fill-indigo-300 {fill: #a5b4fc
}`],"fill-indigo-400":[`__SCOPE__ .fill-indigo-400 {fill: #818cf8
}`],"fill-indigo-50":[`__SCOPE__ .fill-indigo-50 {fill: #eef2ff
}`],"fill-indigo-500":[`__SCOPE__ .fill-indigo-500 {fill: #6366f1
}`],"fill-indigo-600":[`__SCOPE__ .fill-indigo-600 {fill: #4f46e5
}`],"fill-indigo-700":[`__SCOPE__ .fill-indigo-700 {fill: #4338ca
}`],"fill-indigo-800":[`__SCOPE__ .fill-indigo-800 {fill: #3730a3
}`],"fill-indigo-900":[`__SCOPE__ .fill-indigo-900 {fill: #312e81
}`],"fill-indigo-950":[`__SCOPE__ .fill-indigo-950 {fill: #1e1b4b
}`],"fill-lime-100":[`__SCOPE__ .fill-lime-100 {fill: #ecfccb
}`],"fill-lime-200":[`__SCOPE__ .fill-lime-200 {fill: #d9f99d
}`],"fill-lime-300":[`__SCOPE__ .fill-lime-300 {fill: #bef264
}`],"fill-lime-400":[`__SCOPE__ .fill-lime-400 {fill: #a3e635
}`],"fill-lime-50":[`__SCOPE__ .fill-lime-50 {fill: #f7fee7
}`],"fill-lime-500":[`__SCOPE__ .fill-lime-500 {fill: #84cc16
}`],"fill-lime-600":[`__SCOPE__ .fill-lime-600 {fill: #65a30d
}`],"fill-lime-700":[`__SCOPE__ .fill-lime-700 {fill: #4d7c0f
}`],"fill-lime-800":[`__SCOPE__ .fill-lime-800 {fill: #3f6212
}`],"fill-lime-900":[`__SCOPE__ .fill-lime-900 {fill: #365314
}`],"fill-lime-950":[`__SCOPE__ .fill-lime-950 {fill: #1a2e05
}`],"fill-orange-100":[`__SCOPE__ .fill-orange-100 {fill: #ffedd5
}`],"fill-orange-200":[`__SCOPE__ .fill-orange-200 {fill: #fed7aa
}`],"fill-orange-300":[`__SCOPE__ .fill-orange-300 {fill: #fdba74
}`],"fill-orange-400":[`__SCOPE__ .fill-orange-400 {fill: #fb923c
}`],"fill-orange-50":[`__SCOPE__ .fill-orange-50 {fill: #fff7ed
}`],"fill-orange-500":[`__SCOPE__ .fill-orange-500 {fill: #f97316
}`],"fill-orange-600":[`__SCOPE__ .fill-orange-600 {fill: #ea580c
}`],"fill-orange-700":[`__SCOPE__ .fill-orange-700 {fill: #c2410c
}`],"fill-orange-800":[`__SCOPE__ .fill-orange-800 {fill: #9a3412
}`],"fill-orange-900":[`__SCOPE__ .fill-orange-900 {fill: #7c2d12
}`],"fill-orange-950":[`__SCOPE__ .fill-orange-950 {fill: #431407
}`],"fill-pink-100":[`__SCOPE__ .fill-pink-100 {fill: #fce7f3
}`],"fill-pink-200":[`__SCOPE__ .fill-pink-200 {fill: #fbcfe8
}`],"fill-pink-300":[`__SCOPE__ .fill-pink-300 {fill: #f9a8d4
}`],"fill-pink-400":[`__SCOPE__ .fill-pink-400 {fill: #f472b6
}`],"fill-pink-50":[`__SCOPE__ .fill-pink-50 {fill: #fdf2f8
}`],"fill-pink-500":[`__SCOPE__ .fill-pink-500 {fill: #ec4899
}`],"fill-pink-600":[`__SCOPE__ .fill-pink-600 {fill: #db2777
}`],"fill-pink-700":[`__SCOPE__ .fill-pink-700 {fill: #be185d
}`],"fill-pink-800":[`__SCOPE__ .fill-pink-800 {fill: #9d174d
}`],"fill-pink-900":[`__SCOPE__ .fill-pink-900 {fill: #831843
}`],"fill-pink-950":[`__SCOPE__ .fill-pink-950 {fill: #500724
}`],"fill-primary":[`__SCOPE__ .fill-primary {fill: #3758f9
}`],"fill-purple-100":[`__SCOPE__ .fill-purple-100 {fill: #f3e8ff
}`],"fill-purple-200":[`__SCOPE__ .fill-purple-200 {fill: #e9d5ff
}`],"fill-purple-300":[`__SCOPE__ .fill-purple-300 {fill: #d8b4fe
}`],"fill-purple-400":[`__SCOPE__ .fill-purple-400 {fill: #c084fc
}`],"fill-purple-50":[`__SCOPE__ .fill-purple-50 {fill: #faf5ff
}`],"fill-purple-500":[`__SCOPE__ .fill-purple-500 {fill: #a855f7
}`],"fill-purple-600":[`__SCOPE__ .fill-purple-600 {fill: #9333ea
}`],"fill-purple-700":[`__SCOPE__ .fill-purple-700 {fill: #7e22ce
}`],"fill-purple-800":[`__SCOPE__ .fill-purple-800 {fill: #6b21a8
}`],"fill-purple-900":[`__SCOPE__ .fill-purple-900 {fill: #581c87
}`],"fill-purple-950":[`__SCOPE__ .fill-purple-950 {fill: #3b0764
}`],"fill-red-100":[`__SCOPE__ .fill-red-100 {fill: #fee2e2
}`],"fill-red-200":[`__SCOPE__ .fill-red-200 {fill: #fecaca
}`],"fill-red-300":[`__SCOPE__ .fill-red-300 {fill: #fca5a5
}`],"fill-red-400":[`__SCOPE__ .fill-red-400 {fill: #f87171
}`],"fill-red-50":[`__SCOPE__ .fill-red-50 {fill: #fef2f2
}`],"fill-red-500":[`__SCOPE__ .fill-red-500 {fill: #ef4444
}`],"fill-red-600":[`__SCOPE__ .fill-red-600 {fill: #dc2626
}`],"fill-red-700":[`__SCOPE__ .fill-red-700 {fill: #b91c1c
}`],"fill-red-800":[`__SCOPE__ .fill-red-800 {fill: #991b1b
}`],"fill-red-900":[`__SCOPE__ .fill-red-900 {fill: #7f1d1d
}`],"fill-red-950":[`__SCOPE__ .fill-red-950 {fill: #450a0a
}`],"fill-rose-100":[`__SCOPE__ .fill-rose-100 {fill: #ffe4e6
}`],"fill-rose-200":[`__SCOPE__ .fill-rose-200 {fill: #fecdd3
}`],"fill-rose-300":[`__SCOPE__ .fill-rose-300 {fill: #fda4af
}`],"fill-rose-400":[`__SCOPE__ .fill-rose-400 {fill: #fb7185
}`],"fill-rose-50":[`__SCOPE__ .fill-rose-50 {fill: #fff1f2
}`],"fill-rose-500":[`__SCOPE__ .fill-rose-500 {fill: #f43f5e
}`],"fill-rose-600":[`__SCOPE__ .fill-rose-600 {fill: #e11d48
}`],"fill-rose-700":[`__SCOPE__ .fill-rose-700 {fill: #be123c
}`],"fill-rose-800":[`__SCOPE__ .fill-rose-800 {fill: #9f1239
}`],"fill-rose-900":[`__SCOPE__ .fill-rose-900 {fill: #881337
}`],"fill-rose-950":[`__SCOPE__ .fill-rose-950 {fill: #4c0519
}`],"fill-sky-100":[`__SCOPE__ .fill-sky-100 {fill: #e0f2fe
}`],"fill-sky-200":[`__SCOPE__ .fill-sky-200 {fill: #bae6fd
}`],"fill-sky-300":[`__SCOPE__ .fill-sky-300 {fill: #7dd3fc
}`],"fill-sky-400":[`__SCOPE__ .fill-sky-400 {fill: #38bdf8
}`],"fill-sky-50":[`__SCOPE__ .fill-sky-50 {fill: #f0f9ff
}`],"fill-sky-500":[`__SCOPE__ .fill-sky-500 {fill: #0ea5e9
}`],"fill-sky-600":[`__SCOPE__ .fill-sky-600 {fill: #0284c7
}`],"fill-sky-700":[`__SCOPE__ .fill-sky-700 {fill: #0369a1
}`],"fill-sky-800":[`__SCOPE__ .fill-sky-800 {fill: #075985
}`],"fill-sky-900":[`__SCOPE__ .fill-sky-900 {fill: #0c4a6e
}`],"fill-sky-950":[`__SCOPE__ .fill-sky-950 {fill: #082f49
}`],"fill-slate-100":[`__SCOPE__ .fill-slate-100 {fill: #f1f5f9
}`],"fill-slate-200":[`__SCOPE__ .fill-slate-200 {fill: #e2e8f0
}`],"fill-slate-300":[`__SCOPE__ .fill-slate-300 {fill: #cbd5e1
}`],"fill-slate-400":[`__SCOPE__ .fill-slate-400 {fill: #94a3b8
}`],"fill-slate-50":[`__SCOPE__ .fill-slate-50 {fill: #f8fafc
}`],"fill-slate-500":[`__SCOPE__ .fill-slate-500 {fill: #64748b
}`],"fill-slate-600":[`__SCOPE__ .fill-slate-600 {fill: #475569
}`],"fill-slate-700":[`__SCOPE__ .fill-slate-700 {fill: #334155
}`],"fill-slate-800":[`__SCOPE__ .fill-slate-800 {fill: #1e293b
}`],"fill-slate-900":[`__SCOPE__ .fill-slate-900 {fill: #0f172a
}`],"fill-slate-950":[`__SCOPE__ .fill-slate-950 {fill: #020617
}`],"fill-stone-100":[`__SCOPE__ .fill-stone-100 {fill: #f5f5f4
}`],"fill-stone-200":[`__SCOPE__ .fill-stone-200 {fill: #e7e5e4
}`],"fill-stone-300":[`__SCOPE__ .fill-stone-300 {fill: #d6d3d1
}`],"fill-stone-400":[`__SCOPE__ .fill-stone-400 {fill: #a8a29e
}`],"fill-stone-50":[`__SCOPE__ .fill-stone-50 {fill: #fafaf9
}`],"fill-stone-500":[`__SCOPE__ .fill-stone-500 {fill: #78716c
}`],"fill-stone-600":[`__SCOPE__ .fill-stone-600 {fill: #57534e
}`],"fill-stone-700":[`__SCOPE__ .fill-stone-700 {fill: #44403c
}`],"fill-stone-800":[`__SCOPE__ .fill-stone-800 {fill: #292524
}`],"fill-stone-900":[`__SCOPE__ .fill-stone-900 {fill: #1c1917
}`],"fill-stone-950":[`__SCOPE__ .fill-stone-950 {fill: #0c0a09
}`],"fill-teal-100":[`__SCOPE__ .fill-teal-100 {fill: #ccfbf1
}`],"fill-teal-200":[`__SCOPE__ .fill-teal-200 {fill: #99f6e4
}`],"fill-teal-300":[`__SCOPE__ .fill-teal-300 {fill: #5eead4
}`],"fill-teal-400":[`__SCOPE__ .fill-teal-400 {fill: #2dd4bf
}`],"fill-teal-50":[`__SCOPE__ .fill-teal-50 {fill: #f0fdfa
}`],"fill-teal-500":[`__SCOPE__ .fill-teal-500 {fill: #14b8a6
}`],"fill-teal-600":[`__SCOPE__ .fill-teal-600 {fill: #0d9488
}`],"fill-teal-700":[`__SCOPE__ .fill-teal-700 {fill: #0f766e
}`],"fill-teal-800":[`__SCOPE__ .fill-teal-800 {fill: #115e59
}`],"fill-teal-900":[`__SCOPE__ .fill-teal-900 {fill: #134e4a
}`],"fill-teal-950":[`__SCOPE__ .fill-teal-950 {fill: #042f2e
}`],"fill-violet-100":[`__SCOPE__ .fill-violet-100 {fill: #ede9fe
}`],"fill-violet-200":[`__SCOPE__ .fill-violet-200 {fill: #ddd6fe
}`],"fill-violet-300":[`__SCOPE__ .fill-violet-300 {fill: #c4b5fd
}`],"fill-violet-400":[`__SCOPE__ .fill-violet-400 {fill: #a78bfa
}`],"fill-violet-50":[`__SCOPE__ .fill-violet-50 {fill: #f5f3ff
}`],"fill-violet-500":[`__SCOPE__ .fill-violet-500 {fill: #8b5cf6
}`],"fill-violet-600":[`__SCOPE__ .fill-violet-600 {fill: #7c3aed
}`],"fill-violet-700":[`__SCOPE__ .fill-violet-700 {fill: #6d28d9
}`],"fill-violet-800":[`__SCOPE__ .fill-violet-800 {fill: #5b21b6
}`],"fill-violet-900":[`__SCOPE__ .fill-violet-900 {fill: #4c1d95
}`],"fill-violet-950":[`__SCOPE__ .fill-violet-950 {fill: #2e1065
}`],"fill-yellow-100":[`__SCOPE__ .fill-yellow-100 {fill: #fef9c3
}`],"fill-yellow-200":[`__SCOPE__ .fill-yellow-200 {fill: #fef08a
}`],"fill-yellow-300":[`__SCOPE__ .fill-yellow-300 {fill: #fde047
}`],"fill-yellow-400":[`__SCOPE__ .fill-yellow-400 {fill: #facc15
}`],"fill-yellow-50":[`__SCOPE__ .fill-yellow-50 {fill: #fefce8
}`],"fill-yellow-500":[`__SCOPE__ .fill-yellow-500 {fill: #eab308
}`],"fill-yellow-600":[`__SCOPE__ .fill-yellow-600 {fill: #ca8a04
}`],"fill-yellow-700":[`__SCOPE__ .fill-yellow-700 {fill: #a16207
}`],"fill-yellow-800":[`__SCOPE__ .fill-yellow-800 {fill: #854d0e
}`],"fill-yellow-900":[`__SCOPE__ .fill-yellow-900 {fill: #713f12
}`],"fill-yellow-950":[`__SCOPE__ .fill-yellow-950 {fill: #422006
}`],"fill-zinc-100":[`__SCOPE__ .fill-zinc-100 {fill: #f4f4f5
}`],"fill-zinc-200":[`__SCOPE__ .fill-zinc-200 {fill: #e4e4e7
}`],"fill-zinc-300":[`__SCOPE__ .fill-zinc-300 {fill: #d4d4d8
}`],"fill-zinc-400":[`__SCOPE__ .fill-zinc-400 {fill: #a1a1aa
}`],"fill-zinc-50":[`__SCOPE__ .fill-zinc-50 {fill: #fafafa
}`],"fill-zinc-500":[`__SCOPE__ .fill-zinc-500 {fill: #71717a
}`],"fill-zinc-600":[`__SCOPE__ .fill-zinc-600 {fill: #52525b
}`],"fill-zinc-700":[`__SCOPE__ .fill-zinc-700 {fill: #3f3f46
}`],"fill-zinc-800":[`__SCOPE__ .fill-zinc-800 {fill: #27272a
}`],"fill-zinc-900":[`__SCOPE__ .fill-zinc-900 {fill: #18181b
}`],"fill-zinc-950":[`__SCOPE__ .fill-zinc-950 {fill: #09090b
}`],"stroke-amber-100":[`__SCOPE__ .stroke-amber-100 {stroke: #fef3c7
}`],"stroke-amber-200":[`__SCOPE__ .stroke-amber-200 {stroke: #fde68a
}`],"stroke-amber-300":[`__SCOPE__ .stroke-amber-300 {stroke: #fcd34d
}`],"stroke-amber-400":[`__SCOPE__ .stroke-amber-400 {stroke: #fbbf24
}`],"stroke-amber-50":[`__SCOPE__ .stroke-amber-50 {stroke: #fffbeb
}`],"stroke-amber-500":[`__SCOPE__ .stroke-amber-500 {stroke: #f59e0b
}`],"stroke-amber-600":[`__SCOPE__ .stroke-amber-600 {stroke: #d97706
}`],"stroke-amber-700":[`__SCOPE__ .stroke-amber-700 {stroke: #b45309
}`],"stroke-amber-800":[`__SCOPE__ .stroke-amber-800 {stroke: #92400e
}`],"stroke-amber-900":[`__SCOPE__ .stroke-amber-900 {stroke: #78350f
}`],"stroke-amber-950":[`__SCOPE__ .stroke-amber-950 {stroke: #451a03
}`],"stroke-blue-100":[`__SCOPE__ .stroke-blue-100 {stroke: #dbeafe
}`],"stroke-blue-200":[`__SCOPE__ .stroke-blue-200 {stroke: #bfdbfe
}`],"stroke-blue-300":[`__SCOPE__ .stroke-blue-300 {stroke: #93c5fd
}`],"stroke-blue-400":[`__SCOPE__ .stroke-blue-400 {stroke: #60a5fa
}`],"stroke-blue-50":[`__SCOPE__ .stroke-blue-50 {stroke: #eff6ff
}`],"stroke-blue-500":[`__SCOPE__ .stroke-blue-500 {stroke: #3b82f6
}`],"stroke-blue-600":[`__SCOPE__ .stroke-blue-600 {stroke: #2563eb
}`],"stroke-blue-700":[`__SCOPE__ .stroke-blue-700 {stroke: #1d4ed8
}`],"stroke-blue-800":[`__SCOPE__ .stroke-blue-800 {stroke: #1e40af
}`],"stroke-blue-900":[`__SCOPE__ .stroke-blue-900 {stroke: #1e3a8a
}`],"stroke-blue-950":[`__SCOPE__ .stroke-blue-950 {stroke: #172554
}`],"stroke-cyan-100":[`__SCOPE__ .stroke-cyan-100 {stroke: #cffafe
}`],"stroke-cyan-200":[`__SCOPE__ .stroke-cyan-200 {stroke: #a5f3fc
}`],"stroke-cyan-300":[`__SCOPE__ .stroke-cyan-300 {stroke: #67e8f9
}`],"stroke-cyan-400":[`__SCOPE__ .stroke-cyan-400 {stroke: #22d3ee
}`],"stroke-cyan-50":[`__SCOPE__ .stroke-cyan-50 {stroke: #ecfeff
}`],"stroke-cyan-500":[`__SCOPE__ .stroke-cyan-500 {stroke: #06b6d4
}`],"stroke-cyan-600":[`__SCOPE__ .stroke-cyan-600 {stroke: #0891b2
}`],"stroke-cyan-700":[`__SCOPE__ .stroke-cyan-700 {stroke: #0e7490
}`],"stroke-cyan-800":[`__SCOPE__ .stroke-cyan-800 {stroke: #155e75
}`],"stroke-cyan-900":[`__SCOPE__ .stroke-cyan-900 {stroke: #164e63
}`],"stroke-cyan-950":[`__SCOPE__ .stroke-cyan-950 {stroke: #083344
}`],"stroke-emerald-100":[`__SCOPE__ .stroke-emerald-100 {stroke: #d1fae5
}`],"stroke-emerald-200":[`__SCOPE__ .stroke-emerald-200 {stroke: #a7f3d0
}`],"stroke-emerald-300":[`__SCOPE__ .stroke-emerald-300 {stroke: #6ee7b7
}`],"stroke-emerald-400":[`__SCOPE__ .stroke-emerald-400 {stroke: #34d399
}`],"stroke-emerald-50":[`__SCOPE__ .stroke-emerald-50 {stroke: #ecfdf5
}`],"stroke-emerald-500":[`__SCOPE__ .stroke-emerald-500 {stroke: #10b981
}`],"stroke-emerald-600":[`__SCOPE__ .stroke-emerald-600 {stroke: #059669
}`],"stroke-emerald-700":[`__SCOPE__ .stroke-emerald-700 {stroke: #047857
}`],"stroke-emerald-800":[`__SCOPE__ .stroke-emerald-800 {stroke: #065f46
}`],"stroke-emerald-900":[`__SCOPE__ .stroke-emerald-900 {stroke: #064e3b
}`],"stroke-emerald-950":[`__SCOPE__ .stroke-emerald-950 {stroke: #022c22
}`],"stroke-gray-100":[`__SCOPE__ .stroke-gray-100 {stroke: #f3f4f6
}`],"stroke-gray-200":[`__SCOPE__ .stroke-gray-200 {stroke: #e5e7eb
}`],"stroke-gray-300":[`__SCOPE__ .stroke-gray-300 {stroke: #d1d5db
}`],"stroke-gray-400":[`__SCOPE__ .stroke-gray-400 {stroke: #9ca3af
}`],"stroke-gray-50":[`__SCOPE__ .stroke-gray-50 {stroke: #f9fafb
}`],"stroke-gray-500":[`__SCOPE__ .stroke-gray-500 {stroke: #6b7280
}`],"stroke-gray-600":[`__SCOPE__ .stroke-gray-600 {stroke: #4b5563
}`],"stroke-gray-700":[`__SCOPE__ .stroke-gray-700 {stroke: #374151
}`],"stroke-gray-800":[`__SCOPE__ .stroke-gray-800 {stroke: #1f2937
}`],"stroke-gray-900":[`__SCOPE__ .stroke-gray-900 {stroke: #111827
}`],"stroke-gray-950":[`__SCOPE__ .stroke-gray-950 {stroke: #030712
}`],"stroke-green-100":[`__SCOPE__ .stroke-green-100 {stroke: #dcfce7
}`],"stroke-green-200":[`__SCOPE__ .stroke-green-200 {stroke: #bbf7d0
}`],"stroke-green-300":[`__SCOPE__ .stroke-green-300 {stroke: #86efac
}`],"stroke-green-400":[`__SCOPE__ .stroke-green-400 {stroke: #4ade80
}`],"stroke-green-50":[`__SCOPE__ .stroke-green-50 {stroke: #f0fdf4
}`],"stroke-green-500":[`__SCOPE__ .stroke-green-500 {stroke: #22c55e
}`],"stroke-green-600":[`__SCOPE__ .stroke-green-600 {stroke: #16a34a
}`],"stroke-green-700":[`__SCOPE__ .stroke-green-700 {stroke: #15803d
}`],"stroke-green-800":[`__SCOPE__ .stroke-green-800 {stroke: #166534
}`],"stroke-green-900":[`__SCOPE__ .stroke-green-900 {stroke: #14532d
}`],"stroke-green-950":[`__SCOPE__ .stroke-green-950 {stroke: #052e16
}`],"stroke-indigo-100":[`__SCOPE__ .stroke-indigo-100 {stroke: #e0e7ff
}`],"stroke-indigo-200":[`__SCOPE__ .stroke-indigo-200 {stroke: #c7d2fe
}`],"stroke-indigo-300":[`__SCOPE__ .stroke-indigo-300 {stroke: #a5b4fc
}`],"stroke-indigo-400":[`__SCOPE__ .stroke-indigo-400 {stroke: #818cf8
}`],"stroke-indigo-50":[`__SCOPE__ .stroke-indigo-50 {stroke: #eef2ff
}`],"stroke-indigo-500":[`__SCOPE__ .stroke-indigo-500 {stroke: #6366f1
}`],"stroke-indigo-600":[`__SCOPE__ .stroke-indigo-600 {stroke: #4f46e5
}`],"stroke-indigo-700":[`__SCOPE__ .stroke-indigo-700 {stroke: #4338ca
}`],"stroke-indigo-800":[`__SCOPE__ .stroke-indigo-800 {stroke: #3730a3
}`],"stroke-indigo-900":[`__SCOPE__ .stroke-indigo-900 {stroke: #312e81
}`],"stroke-indigo-950":[`__SCOPE__ .stroke-indigo-950 {stroke: #1e1b4b
}`],"stroke-lime-100":[`__SCOPE__ .stroke-lime-100 {stroke: #ecfccb
}`],"stroke-lime-200":[`__SCOPE__ .stroke-lime-200 {stroke: #d9f99d
}`],"stroke-lime-300":[`__SCOPE__ .stroke-lime-300 {stroke: #bef264
}`],"stroke-lime-400":[`__SCOPE__ .stroke-lime-400 {stroke: #a3e635
}`],"stroke-lime-50":[`__SCOPE__ .stroke-lime-50 {stroke: #f7fee7
}`],"stroke-lime-500":[`__SCOPE__ .stroke-lime-500 {stroke: #84cc16
}`],"stroke-lime-600":[`__SCOPE__ .stroke-lime-600 {stroke: #65a30d
}`],"stroke-lime-700":[`__SCOPE__ .stroke-lime-700 {stroke: #4d7c0f
}`],"stroke-lime-800":[`__SCOPE__ .stroke-lime-800 {stroke: #3f6212
}`],"stroke-lime-900":[`__SCOPE__ .stroke-lime-900 {stroke: #365314
}`],"stroke-lime-950":[`__SCOPE__ .stroke-lime-950 {stroke: #1a2e05
}`],"stroke-orange-100":[`__SCOPE__ .stroke-orange-100 {stroke: #ffedd5
}`],"stroke-orange-200":[`__SCOPE__ .stroke-orange-200 {stroke: #fed7aa
}`],"stroke-orange-300":[`__SCOPE__ .stroke-orange-300 {stroke: #fdba74
}`],"stroke-orange-400":[`__SCOPE__ .stroke-orange-400 {stroke: #fb923c
}`],"stroke-orange-50":[`__SCOPE__ .stroke-orange-50 {stroke: #fff7ed
}`],"stroke-orange-500":[`__SCOPE__ .stroke-orange-500 {stroke: #f97316
}`],"stroke-orange-600":[`__SCOPE__ .stroke-orange-600 {stroke: #ea580c
}`],"stroke-orange-700":[`__SCOPE__ .stroke-orange-700 {stroke: #c2410c
}`],"stroke-orange-800":[`__SCOPE__ .stroke-orange-800 {stroke: #9a3412
}`],"stroke-orange-900":[`__SCOPE__ .stroke-orange-900 {stroke: #7c2d12
}`],"stroke-orange-950":[`__SCOPE__ .stroke-orange-950 {stroke: #431407
}`],"stroke-pink-100":[`__SCOPE__ .stroke-pink-100 {stroke: #fce7f3
}`],"stroke-pink-200":[`__SCOPE__ .stroke-pink-200 {stroke: #fbcfe8
}`],"stroke-pink-300":[`__SCOPE__ .stroke-pink-300 {stroke: #f9a8d4
}`],"stroke-pink-400":[`__SCOPE__ .stroke-pink-400 {stroke: #f472b6
}`],"stroke-pink-50":[`__SCOPE__ .stroke-pink-50 {stroke: #fdf2f8
}`],"stroke-pink-500":[`__SCOPE__ .stroke-pink-500 {stroke: #ec4899
}`],"stroke-pink-600":[`__SCOPE__ .stroke-pink-600 {stroke: #db2777
}`],"stroke-pink-700":[`__SCOPE__ .stroke-pink-700 {stroke: #be185d
}`],"stroke-pink-800":[`__SCOPE__ .stroke-pink-800 {stroke: #9d174d
}`],"stroke-pink-900":[`__SCOPE__ .stroke-pink-900 {stroke: #831843
}`],"stroke-pink-950":[`__SCOPE__ .stroke-pink-950 {stroke: #500724
}`],"stroke-primary":[`__SCOPE__ .stroke-primary {stroke: #3758f9
}`],"stroke-purple-100":[`__SCOPE__ .stroke-purple-100 {stroke: #f3e8ff
}`],"stroke-purple-200":[`__SCOPE__ .stroke-purple-200 {stroke: #e9d5ff
}`],"stroke-purple-300":[`__SCOPE__ .stroke-purple-300 {stroke: #d8b4fe
}`],"stroke-purple-400":[`__SCOPE__ .stroke-purple-400 {stroke: #c084fc
}`],"stroke-purple-50":[`__SCOPE__ .stroke-purple-50 {stroke: #faf5ff
}`],"stroke-purple-500":[`__SCOPE__ .stroke-purple-500 {stroke: #a855f7
}`],"stroke-purple-600":[`__SCOPE__ .stroke-purple-600 {stroke: #9333ea
}`],"stroke-purple-700":[`__SCOPE__ .stroke-purple-700 {stroke: #7e22ce
}`],"stroke-purple-800":[`__SCOPE__ .stroke-purple-800 {stroke: #6b21a8
}`],"stroke-purple-900":[`__SCOPE__ .stroke-purple-900 {stroke: #581c87
}`],"stroke-purple-950":[`__SCOPE__ .stroke-purple-950 {stroke: #3b0764
}`],"stroke-red-100":[`__SCOPE__ .stroke-red-100 {stroke: #fee2e2
}`],"stroke-red-200":[`__SCOPE__ .stroke-red-200 {stroke: #fecaca
}`],"stroke-red-300":[`__SCOPE__ .stroke-red-300 {stroke: #fca5a5
}`],"stroke-red-400":[`__SCOPE__ .stroke-red-400 {stroke: #f87171
}`],"stroke-red-50":[`__SCOPE__ .stroke-red-50 {stroke: #fef2f2
}`],"stroke-red-500":[`__SCOPE__ .stroke-red-500 {stroke: #ef4444
}`],"stroke-red-600":[`__SCOPE__ .stroke-red-600 {stroke: #dc2626
}`],"stroke-red-700":[`__SCOPE__ .stroke-red-700 {stroke: #b91c1c
}`],"stroke-red-800":[`__SCOPE__ .stroke-red-800 {stroke: #991b1b
}`],"stroke-red-900":[`__SCOPE__ .stroke-red-900 {stroke: #7f1d1d
}`],"stroke-red-950":[`__SCOPE__ .stroke-red-950 {stroke: #450a0a
}`],"stroke-rose-100":[`__SCOPE__ .stroke-rose-100 {stroke: #ffe4e6
}`],"stroke-rose-200":[`__SCOPE__ .stroke-rose-200 {stroke: #fecdd3
}`],"stroke-rose-300":[`__SCOPE__ .stroke-rose-300 {stroke: #fda4af
}`],"stroke-rose-400":[`__SCOPE__ .stroke-rose-400 {stroke: #fb7185
}`],"stroke-rose-50":[`__SCOPE__ .stroke-rose-50 {stroke: #fff1f2
}`],"stroke-rose-500":[`__SCOPE__ .stroke-rose-500 {stroke: #f43f5e
}`],"stroke-rose-600":[`__SCOPE__ .stroke-rose-600 {stroke: #e11d48
}`],"stroke-rose-700":[`__SCOPE__ .stroke-rose-700 {stroke: #be123c
}`],"stroke-rose-800":[`__SCOPE__ .stroke-rose-800 {stroke: #9f1239
}`],"stroke-rose-900":[`__SCOPE__ .stroke-rose-900 {stroke: #881337
}`],"stroke-rose-950":[`__SCOPE__ .stroke-rose-950 {stroke: #4c0519
}`],"stroke-sky-100":[`__SCOPE__ .stroke-sky-100 {stroke: #e0f2fe
}`],"stroke-sky-200":[`__SCOPE__ .stroke-sky-200 {stroke: #bae6fd
}`],"stroke-sky-300":[`__SCOPE__ .stroke-sky-300 {stroke: #7dd3fc
}`],"stroke-sky-400":[`__SCOPE__ .stroke-sky-400 {stroke: #38bdf8
}`],"stroke-sky-50":[`__SCOPE__ .stroke-sky-50 {stroke: #f0f9ff
}`],"stroke-sky-500":[`__SCOPE__ .stroke-sky-500 {stroke: #0ea5e9
}`],"stroke-sky-600":[`__SCOPE__ .stroke-sky-600 {stroke: #0284c7
}`],"stroke-sky-700":[`__SCOPE__ .stroke-sky-700 {stroke: #0369a1
}`],"stroke-sky-800":[`__SCOPE__ .stroke-sky-800 {stroke: #075985
}`],"stroke-sky-900":[`__SCOPE__ .stroke-sky-900 {stroke: #0c4a6e
}`],"stroke-sky-950":[`__SCOPE__ .stroke-sky-950 {stroke: #082f49
}`],"stroke-slate-100":[`__SCOPE__ .stroke-slate-100 {stroke: #f1f5f9
}`],"stroke-slate-200":[`__SCOPE__ .stroke-slate-200 {stroke: #e2e8f0
}`],"stroke-slate-300":[`__SCOPE__ .stroke-slate-300 {stroke: #cbd5e1
}`],"stroke-slate-400":[`__SCOPE__ .stroke-slate-400 {stroke: #94a3b8
}`],"stroke-slate-50":[`__SCOPE__ .stroke-slate-50 {stroke: #f8fafc
}`],"stroke-slate-500":[`__SCOPE__ .stroke-slate-500 {stroke: #64748b
}`],"stroke-slate-600":[`__SCOPE__ .stroke-slate-600 {stroke: #475569
}`],"stroke-slate-700":[`__SCOPE__ .stroke-slate-700 {stroke: #334155
}`],"stroke-slate-800":[`__SCOPE__ .stroke-slate-800 {stroke: #1e293b
}`],"stroke-slate-900":[`__SCOPE__ .stroke-slate-900 {stroke: #0f172a
}`],"stroke-slate-950":[`__SCOPE__ .stroke-slate-950 {stroke: #020617
}`],"stroke-stone-100":[`__SCOPE__ .stroke-stone-100 {stroke: #f5f5f4
}`],"stroke-stone-200":[`__SCOPE__ .stroke-stone-200 {stroke: #e7e5e4
}`],"stroke-stone-300":[`__SCOPE__ .stroke-stone-300 {stroke: #d6d3d1
}`],"stroke-stone-400":[`__SCOPE__ .stroke-stone-400 {stroke: #a8a29e
}`],"stroke-stone-50":[`__SCOPE__ .stroke-stone-50 {stroke: #fafaf9
}`],"stroke-stone-500":[`__SCOPE__ .stroke-stone-500 {stroke: #78716c
}`],"stroke-stone-600":[`__SCOPE__ .stroke-stone-600 {stroke: #57534e
}`],"stroke-stone-700":[`__SCOPE__ .stroke-stone-700 {stroke: #44403c
}`],"stroke-stone-800":[`__SCOPE__ .stroke-stone-800 {stroke: #292524
}`],"stroke-stone-900":[`__SCOPE__ .stroke-stone-900 {stroke: #1c1917
}`],"stroke-stone-950":[`__SCOPE__ .stroke-stone-950 {stroke: #0c0a09
}`],"stroke-teal-100":[`__SCOPE__ .stroke-teal-100 {stroke: #ccfbf1
}`],"stroke-teal-200":[`__SCOPE__ .stroke-teal-200 {stroke: #99f6e4
}`],"stroke-teal-300":[`__SCOPE__ .stroke-teal-300 {stroke: #5eead4
}`],"stroke-teal-400":[`__SCOPE__ .stroke-teal-400 {stroke: #2dd4bf
}`],"stroke-teal-50":[`__SCOPE__ .stroke-teal-50 {stroke: #f0fdfa
}`],"stroke-teal-500":[`__SCOPE__ .stroke-teal-500 {stroke: #14b8a6
}`],"stroke-teal-600":[`__SCOPE__ .stroke-teal-600 {stroke: #0d9488
}`],"stroke-teal-700":[`__SCOPE__ .stroke-teal-700 {stroke: #0f766e
}`],"stroke-teal-800":[`__SCOPE__ .stroke-teal-800 {stroke: #115e59
}`],"stroke-teal-900":[`__SCOPE__ .stroke-teal-900 {stroke: #134e4a
}`],"stroke-teal-950":[`__SCOPE__ .stroke-teal-950 {stroke: #042f2e
}`],"stroke-violet-100":[`__SCOPE__ .stroke-violet-100 {stroke: #ede9fe
}`],"stroke-violet-200":[`__SCOPE__ .stroke-violet-200 {stroke: #ddd6fe
}`],"stroke-violet-300":[`__SCOPE__ .stroke-violet-300 {stroke: #c4b5fd
}`],"stroke-violet-400":[`__SCOPE__ .stroke-violet-400 {stroke: #a78bfa
}`],"stroke-violet-50":[`__SCOPE__ .stroke-violet-50 {stroke: #f5f3ff
}`],"stroke-violet-500":[`__SCOPE__ .stroke-violet-500 {stroke: #8b5cf6
}`],"stroke-violet-600":[`__SCOPE__ .stroke-violet-600 {stroke: #7c3aed
}`],"stroke-violet-700":[`__SCOPE__ .stroke-violet-700 {stroke: #6d28d9
}`],"stroke-violet-800":[`__SCOPE__ .stroke-violet-800 {stroke: #5b21b6
}`],"stroke-violet-900":[`__SCOPE__ .stroke-violet-900 {stroke: #4c1d95
}`],"stroke-violet-950":[`__SCOPE__ .stroke-violet-950 {stroke: #2e1065
}`],"stroke-yellow-100":[`__SCOPE__ .stroke-yellow-100 {stroke: #fef9c3
}`],"stroke-yellow-200":[`__SCOPE__ .stroke-yellow-200 {stroke: #fef08a
}`],"stroke-yellow-300":[`__SCOPE__ .stroke-yellow-300 {stroke: #fde047
}`],"stroke-yellow-400":[`__SCOPE__ .stroke-yellow-400 {stroke: #facc15
}`],"stroke-yellow-50":[`__SCOPE__ .stroke-yellow-50 {stroke: #fefce8
}`],"stroke-yellow-500":[`__SCOPE__ .stroke-yellow-500 {stroke: #eab308
}`],"stroke-yellow-600":[`__SCOPE__ .stroke-yellow-600 {stroke: #ca8a04
}`],"stroke-yellow-700":[`__SCOPE__ .stroke-yellow-700 {stroke: #a16207
}`],"stroke-yellow-800":[`__SCOPE__ .stroke-yellow-800 {stroke: #854d0e
}`],"stroke-yellow-900":[`__SCOPE__ .stroke-yellow-900 {stroke: #713f12
}`],"stroke-yellow-950":[`__SCOPE__ .stroke-yellow-950 {stroke: #422006
}`],"stroke-zinc-100":[`__SCOPE__ .stroke-zinc-100 {stroke: #f4f4f5
}`],"stroke-zinc-200":[`__SCOPE__ .stroke-zinc-200 {stroke: #e4e4e7
}`],"stroke-zinc-300":[`__SCOPE__ .stroke-zinc-300 {stroke: #d4d4d8
}`],"stroke-zinc-400":[`__SCOPE__ .stroke-zinc-400 {stroke: #a1a1aa
}`],"stroke-zinc-50":[`__SCOPE__ .stroke-zinc-50 {stroke: #fafafa
}`],"stroke-zinc-500":[`__SCOPE__ .stroke-zinc-500 {stroke: #71717a
}`],"stroke-zinc-600":[`__SCOPE__ .stroke-zinc-600 {stroke: #52525b
}`],"stroke-zinc-700":[`__SCOPE__ .stroke-zinc-700 {stroke: #3f3f46
}`],"stroke-zinc-800":[`__SCOPE__ .stroke-zinc-800 {stroke: #27272a
}`],"stroke-zinc-900":[`__SCOPE__ .stroke-zinc-900 {stroke: #18181b
}`],"stroke-zinc-950":[`__SCOPE__ .stroke-zinc-950 {stroke: #09090b
}`],"object-contain":[`__SCOPE__ .object-contain {object-fit: contain
}`],"object-cover":[`__SCOPE__ .object-cover {object-fit: cover
}`],"p-0":[`__SCOPE__ .p-0 {padding: 0px
}`],"p-1":[`__SCOPE__ .p-1 {padding: 0.25rem
}`],"p-10":[`__SCOPE__ .p-10 {padding: 2.5rem
}`],"p-11":[`__SCOPE__ .p-11 {padding: 2.75rem
}`],"p-12":[`__SCOPE__ .p-12 {padding: 3rem
}`],"p-14":[`__SCOPE__ .p-14 {padding: 3.5rem
}`],"p-16":[`__SCOPE__ .p-16 {padding: 4rem
}`],"p-2":[`__SCOPE__ .p-2 {padding: 0.5rem
}`],"p-20":[`__SCOPE__ .p-20 {padding: 5rem
}`],"p-24":[`__SCOPE__ .p-24 {padding: 6rem
}`],"p-28":[`__SCOPE__ .p-28 {padding: 7rem
}`],"p-3":[`__SCOPE__ .p-3 {padding: 0.75rem
}`],"p-32":[`__SCOPE__ .p-32 {padding: 8rem
}`],"p-4":[`__SCOPE__ .p-4 {padding: 1rem
}`],"p-40":[`__SCOPE__ .p-40 {padding: 10rem
}`],"p-48":[`__SCOPE__ .p-48 {padding: 12rem
}`],"p-5":[`__SCOPE__ .p-5 {padding: 1.25rem
}`],"p-56":[`__SCOPE__ .p-56 {padding: 14rem
}`],"p-6":[`__SCOPE__ .p-6 {padding: 1.5rem
}`],"p-64":[`__SCOPE__ .p-64 {padding: 16rem
}`],"p-7":[`__SCOPE__ .p-7 {padding: 1.75rem
}`],"p-8":[`__SCOPE__ .p-8 {padding: 2rem
}`],"p-80":[`__SCOPE__ .p-80 {padding: 20rem
}`],"p-9":[`__SCOPE__ .p-9 {padding: 2.25rem
}`],"p-96":[`__SCOPE__ .p-96 {padding: 24rem
}`],"px-0":[`__SCOPE__ .px-0 {padding-left: 0px;padding-right: 0px
}`],"px-1":[`__SCOPE__ .px-1 {padding-left: 0.25rem;padding-right: 0.25rem
}`],"px-10":[`__SCOPE__ .px-10 {padding-left: 2.5rem;padding-right: 2.5rem
}`],"px-11":[`__SCOPE__ .px-11 {padding-left: 2.75rem;padding-right: 2.75rem
}`],"px-12":[`__SCOPE__ .px-12 {padding-left: 3rem;padding-right: 3rem
}`],"px-14":[`__SCOPE__ .px-14 {padding-left: 3.5rem;padding-right: 3.5rem
}`],"px-16":[`__SCOPE__ .px-16 {padding-left: 4rem;padding-right: 4rem
}`],"px-2":[`__SCOPE__ .px-2 {padding-left: 0.5rem;padding-right: 0.5rem
}`],"px-20":[`__SCOPE__ .px-20 {padding-left: 5rem;padding-right: 5rem
}`],"px-24":[`__SCOPE__ .px-24 {padding-left: 6rem;padding-right: 6rem
}`],"px-28":[`__SCOPE__ .px-28 {padding-left: 7rem;padding-right: 7rem
}`],"px-3":[`__SCOPE__ .px-3 {padding-left: 0.75rem;padding-right: 0.75rem
}`],"px-32":[`__SCOPE__ .px-32 {padding-left: 8rem;padding-right: 8rem
}`],"px-4":[`__SCOPE__ .px-4 {padding-left: 1rem;padding-right: 1rem
}`],"px-40":[`__SCOPE__ .px-40 {padding-left: 10rem;padding-right: 10rem
}`],"px-48":[`__SCOPE__ .px-48 {padding-left: 12rem;padding-right: 12rem
}`],"px-5":[`__SCOPE__ .px-5 {padding-left: 1.25rem;padding-right: 1.25rem
}`],"px-56":[`__SCOPE__ .px-56 {padding-left: 14rem;padding-right: 14rem
}`],"px-6":[`__SCOPE__ .px-6 {padding-left: 1.5rem;padding-right: 1.5rem
}`],"px-64":[`__SCOPE__ .px-64 {padding-left: 16rem;padding-right: 16rem
}`],"px-7":[`__SCOPE__ .px-7 {padding-left: 1.75rem;padding-right: 1.75rem
}`],"px-8":[`__SCOPE__ .px-8 {padding-left: 2rem;padding-right: 2rem
}`],"px-80":[`__SCOPE__ .px-80 {padding-left: 20rem;padding-right: 20rem
}`],"px-9":[`__SCOPE__ .px-9 {padding-left: 2.25rem;padding-right: 2.25rem
}`],"px-96":[`__SCOPE__ .px-96 {padding-left: 24rem;padding-right: 24rem
}`],"py-0":[`__SCOPE__ .py-0 {padding-top: 0px;padding-bottom: 0px
}`],"py-1":[`__SCOPE__ .py-1 {padding-top: 0.25rem;padding-bottom: 0.25rem
}`],"py-10":[`__SCOPE__ .py-10 {padding-top: 2.5rem;padding-bottom: 2.5rem
}`],"py-11":[`__SCOPE__ .py-11 {padding-top: 2.75rem;padding-bottom: 2.75rem
}`],"py-12":[`__SCOPE__ .py-12 {padding-top: 3rem;padding-bottom: 3rem
}`],"py-14":[`__SCOPE__ .py-14 {padding-top: 3.5rem;padding-bottom: 3.5rem
}`],"py-16":[`__SCOPE__ .py-16 {padding-top: 4rem;padding-bottom: 4rem
}`],"py-2":[`__SCOPE__ .py-2 {padding-top: 0.5rem;padding-bottom: 0.5rem
}`],"py-20":[`__SCOPE__ .py-20 {padding-top: 5rem;padding-bottom: 5rem
}`],"py-24":[`__SCOPE__ .py-24 {padding-top: 6rem;padding-bottom: 6rem
}`],"py-28":[`__SCOPE__ .py-28 {padding-top: 7rem;padding-bottom: 7rem
}`],"py-3":[`__SCOPE__ .py-3 {padding-top: 0.75rem;padding-bottom: 0.75rem
}`],"py-32":[`__SCOPE__ .py-32 {padding-top: 8rem;padding-bottom: 8rem
}`],"py-4":[`__SCOPE__ .py-4 {padding-top: 1rem;padding-bottom: 1rem
}`],"py-40":[`__SCOPE__ .py-40 {padding-top: 10rem;padding-bottom: 10rem
}`],"py-48":[`__SCOPE__ .py-48 {padding-top: 12rem;padding-bottom: 12rem
}`],"py-5":[`__SCOPE__ .py-5 {padding-top: 1.25rem;padding-bottom: 1.25rem
}`],"py-56":[`__SCOPE__ .py-56 {padding-top: 14rem;padding-bottom: 14rem
}`],"py-6":[`__SCOPE__ .py-6 {padding-top: 1.5rem;padding-bottom: 1.5rem
}`],"py-64":[`__SCOPE__ .py-64 {padding-top: 16rem;padding-bottom: 16rem
}`],"py-7":[`__SCOPE__ .py-7 {padding-top: 1.75rem;padding-bottom: 1.75rem
}`],"py-8":[`__SCOPE__ .py-8 {padding-top: 2rem;padding-bottom: 2rem
}`],"py-80":[`__SCOPE__ .py-80 {padding-top: 20rem;padding-bottom: 20rem
}`],"py-9":[`__SCOPE__ .py-9 {padding-top: 2.25rem;padding-bottom: 2.25rem
}`],"py-96":[`__SCOPE__ .py-96 {padding-top: 24rem;padding-bottom: 24rem
}`],"pb-0":[`__SCOPE__ .pb-0 {padding-bottom: 0px
}`],"pb-1":[`__SCOPE__ .pb-1 {padding-bottom: 0.25rem
}`],"pb-10":[`__SCOPE__ .pb-10 {padding-bottom: 2.5rem
}`],"pb-11":[`__SCOPE__ .pb-11 {padding-bottom: 2.75rem
}`],"pb-12":[`__SCOPE__ .pb-12 {padding-bottom: 3rem
}`],"pb-14":[`__SCOPE__ .pb-14 {padding-bottom: 3.5rem
}`],"pb-16":[`__SCOPE__ .pb-16 {padding-bottom: 4rem
}`],"pb-2":[`__SCOPE__ .pb-2 {padding-bottom: 0.5rem
}`],"pb-20":[`__SCOPE__ .pb-20 {padding-bottom: 5rem
}`],"pb-24":[`__SCOPE__ .pb-24 {padding-bottom: 6rem
}`],"pb-28":[`__SCOPE__ .pb-28 {padding-bottom: 7rem
}`],"pb-3":[`__SCOPE__ .pb-3 {padding-bottom: 0.75rem
}`],"pb-32":[`__SCOPE__ .pb-32 {padding-bottom: 8rem
}`],"pb-4":[`__SCOPE__ .pb-4 {padding-bottom: 1rem
}`],"pb-40":[`__SCOPE__ .pb-40 {padding-bottom: 10rem
}`],"pb-48":[`__SCOPE__ .pb-48 {padding-bottom: 12rem
}`],"pb-5":[`__SCOPE__ .pb-5 {padding-bottom: 1.25rem
}`],"pb-56":[`__SCOPE__ .pb-56 {padding-bottom: 14rem
}`],"pb-6":[`__SCOPE__ .pb-6 {padding-bottom: 1.5rem
}`],"pb-64":[`__SCOPE__ .pb-64 {padding-bottom: 16rem
}`],"pb-7":[`__SCOPE__ .pb-7 {padding-bottom: 1.75rem
}`],"pb-8":[`__SCOPE__ .pb-8 {padding-bottom: 2rem
}`],"pb-80":[`__SCOPE__ .pb-80 {padding-bottom: 20rem
}`],"pb-9":[`__SCOPE__ .pb-9 {padding-bottom: 2.25rem
}`],"pb-96":[`__SCOPE__ .pb-96 {padding-bottom: 24rem
}`],"pb-[110px]":[`__SCOPE__ .pb-\\[110px\\] {padding-bottom: 110px
}`],"pl-0":[`__SCOPE__ .pl-0 {padding-left: 0px
}`],"pl-1":[`__SCOPE__ .pl-1 {padding-left: 0.25rem
}`],"pl-10":[`__SCOPE__ .pl-10 {padding-left: 2.5rem
}`],"pl-11":[`__SCOPE__ .pl-11 {padding-left: 2.75rem
}`],"pl-12":[`__SCOPE__ .pl-12 {padding-left: 3rem
}`],"pl-14":[`__SCOPE__ .pl-14 {padding-left: 3.5rem
}`],"pl-16":[`__SCOPE__ .pl-16 {padding-left: 4rem
}`],"pl-2":[`__SCOPE__ .pl-2 {padding-left: 0.5rem
}`],"pl-20":[`__SCOPE__ .pl-20 {padding-left: 5rem
}`],"pl-24":[`__SCOPE__ .pl-24 {padding-left: 6rem
}`],"pl-28":[`__SCOPE__ .pl-28 {padding-left: 7rem
}`],"pl-3":[`__SCOPE__ .pl-3 {padding-left: 0.75rem
}`],"pl-32":[`__SCOPE__ .pl-32 {padding-left: 8rem
}`],"pl-4":[`__SCOPE__ .pl-4 {padding-left: 1rem
}`],"pl-40":[`__SCOPE__ .pl-40 {padding-left: 10rem
}`],"pl-48":[`__SCOPE__ .pl-48 {padding-left: 12rem
}`],"pl-5":[`__SCOPE__ .pl-5 {padding-left: 1.25rem
}`],"pl-56":[`__SCOPE__ .pl-56 {padding-left: 14rem
}`],"pl-6":[`__SCOPE__ .pl-6 {padding-left: 1.5rem
}`],"pl-64":[`__SCOPE__ .pl-64 {padding-left: 16rem
}`],"pl-7":[`__SCOPE__ .pl-7 {padding-left: 1.75rem
}`],"pl-8":[`__SCOPE__ .pl-8 {padding-left: 2rem
}`],"pl-80":[`__SCOPE__ .pl-80 {padding-left: 20rem
}`],"pl-9":[`__SCOPE__ .pl-9 {padding-left: 2.25rem
}`],"pl-96":[`__SCOPE__ .pl-96 {padding-left: 24rem
}`],"pl-[62px]":[`__SCOPE__ .pl-\\[62px\\] {padding-left: 62px
}`],"pr-0":[`__SCOPE__ .pr-0 {padding-right: 0px
}`],"pr-1":[`__SCOPE__ .pr-1 {padding-right: 0.25rem
}`],"pr-10":[`__SCOPE__ .pr-10 {padding-right: 2.5rem
}`],"pr-11":[`__SCOPE__ .pr-11 {padding-right: 2.75rem
}`],"pr-12":[`__SCOPE__ .pr-12 {padding-right: 3rem
}`],"pr-14":[`__SCOPE__ .pr-14 {padding-right: 3.5rem
}`],"pr-16":[`__SCOPE__ .pr-16 {padding-right: 4rem
}`],"pr-2":[`__SCOPE__ .pr-2 {padding-right: 0.5rem
}`],"pr-20":[`__SCOPE__ .pr-20 {padding-right: 5rem
}`],"pr-24":[`__SCOPE__ .pr-24 {padding-right: 6rem
}`],"pr-28":[`__SCOPE__ .pr-28 {padding-right: 7rem
}`],"pr-3":[`__SCOPE__ .pr-3 {padding-right: 0.75rem
}`],"pr-32":[`__SCOPE__ .pr-32 {padding-right: 8rem
}`],"pr-4":[`__SCOPE__ .pr-4 {padding-right: 1rem
}`],"pr-40":[`__SCOPE__ .pr-40 {padding-right: 10rem
}`],"pr-48":[`__SCOPE__ .pr-48 {padding-right: 12rem
}`],"pr-5":[`__SCOPE__ .pr-5 {padding-right: 1.25rem
}`],"pr-56":[`__SCOPE__ .pr-56 {padding-right: 14rem
}`],"pr-6":[`__SCOPE__ .pr-6 {padding-right: 1.5rem
}`],"pr-64":[`__SCOPE__ .pr-64 {padding-right: 16rem
}`],"pr-7":[`__SCOPE__ .pr-7 {padding-right: 1.75rem
}`],"pr-8":[`__SCOPE__ .pr-8 {padding-right: 2rem
}`],"pr-80":[`__SCOPE__ .pr-80 {padding-right: 20rem
}`],"pr-9":[`__SCOPE__ .pr-9 {padding-right: 2.25rem
}`],"pr-96":[`__SCOPE__ .pr-96 {padding-right: 24rem
}`],"pt-0":[`__SCOPE__ .pt-0 {padding-top: 0px
}`],"pt-1":[`__SCOPE__ .pt-1 {padding-top: 0.25rem
}`],"pt-10":[`__SCOPE__ .pt-10 {padding-top: 2.5rem
}`],"pt-11":[`__SCOPE__ .pt-11 {padding-top: 2.75rem
}`],"pt-12":[`__SCOPE__ .pt-12 {padding-top: 3rem
}`],"pt-14":[`__SCOPE__ .pt-14 {padding-top: 3.5rem
}`],"pt-16":[`__SCOPE__ .pt-16 {padding-top: 4rem
}`],"pt-2":[`__SCOPE__ .pt-2 {padding-top: 0.5rem
}`],"pt-20":[`__SCOPE__ .pt-20 {padding-top: 5rem
}`],"pt-24":[`__SCOPE__ .pt-24 {padding-top: 6rem
}`],"pt-28":[`__SCOPE__ .pt-28 {padding-top: 7rem
}`],"pt-3":[`__SCOPE__ .pt-3 {padding-top: 0.75rem
}`],"pt-32":[`__SCOPE__ .pt-32 {padding-top: 8rem
}`],"pt-4":[`__SCOPE__ .pt-4 {padding-top: 1rem
}`],"pt-40":[`__SCOPE__ .pt-40 {padding-top: 10rem
}`],"pt-48":[`__SCOPE__ .pt-48 {padding-top: 12rem
}`],"pt-5":[`__SCOPE__ .pt-5 {padding-top: 1.25rem
}`],"pt-56":[`__SCOPE__ .pt-56 {padding-top: 14rem
}`],"pt-6":[`__SCOPE__ .pt-6 {padding-top: 1.5rem
}`],"pt-64":[`__SCOPE__ .pt-64 {padding-top: 16rem
}`],"pt-7":[`__SCOPE__ .pt-7 {padding-top: 1.75rem
}`],"pt-8":[`__SCOPE__ .pt-8 {padding-top: 2rem
}`],"pt-80":[`__SCOPE__ .pt-80 {padding-top: 20rem
}`],"pt-9":[`__SCOPE__ .pt-9 {padding-top: 2.25rem
}`],"pt-96":[`__SCOPE__ .pt-96 {padding-top: 24rem
}`],"pt-[120px]":[`__SCOPE__ .pt-\\[120px\\] {padding-top: 120px
}`],"text-left":[`__SCOPE__ .text-left {text-align: left
}`],"text-center":[`__SCOPE__ .text-center {text-align: center
}`],"text-right":[`__SCOPE__ .text-right {text-align: right
}`],"text-2xl":[`__SCOPE__ .text-2xl {font-size: 1.5rem;line-height: 2rem
}`],"text-3xl":[`__SCOPE__ .text-3xl {font-size: 1.875rem;line-height: 2.25rem
}`],"text-4xl":[`__SCOPE__ .text-4xl {font-size: 2.25rem;line-height: 2.5rem
}`],"text-5xl":[`__SCOPE__ .text-5xl {font-size: 3rem;line-height: 1
}`],"text-6xl":[`__SCOPE__ .text-6xl {font-size: 3.75rem;line-height: 1
}`],"text-base":[`__SCOPE__ .text-base {font-size: 1rem;line-height: 1.5rem
}`],"text-lg":[`__SCOPE__ .text-lg {font-size: 1.125rem;line-height: 1.75rem
}`],"text-sm":[`__SCOPE__ .text-sm {font-size: 0.875rem;line-height: 1.25rem
}`],"text-xl":[`__SCOPE__ .text-xl {font-size: 1.25rem;line-height: 1.75rem
}`],"text-xs":[`__SCOPE__ .text-xs {font-size: 0.75rem;line-height: 1rem
}`],"font-bold":[`__SCOPE__ .font-bold {font-weight: 700
}`],"font-medium":[`__SCOPE__ .font-medium {font-weight: 500
}`],"font-normal":[`__SCOPE__ .font-normal {font-weight: 400
}`],"font-semibold":[`__SCOPE__ .font-semibold {font-weight: 600
}`],uppercase:[`__SCOPE__ .uppercase {text-transform: uppercase
}`],lowercase:[`__SCOPE__ .lowercase {text-transform: lowercase
}`],capitalize:[`__SCOPE__ .capitalize {text-transform: capitalize
}`],italic:[`__SCOPE__ .italic {font-style: italic
}`],"!leading-[1.208]":[`__SCOPE__ .\\!leading-\\[1\\.208\\] {line-height: 1.208 !important
}`],"leading-[1.2]":[`__SCOPE__ .leading-\\[1\\.2\\] {line-height: 1.2
}`],"leading-none":[`__SCOPE__ .leading-none {line-height: 1
}`],"leading-normal":[`__SCOPE__ .leading-normal {line-height: 1.5
}`],"leading-relaxed":[`__SCOPE__ .leading-relaxed {line-height: 1.625
}`],"leading-tight":[`__SCOPE__ .leading-tight {line-height: 1.25
}`],"tracking-tight":[`__SCOPE__ .tracking-tight {letter-spacing: -0.025em
}`],"tracking-wide":[`__SCOPE__ .tracking-wide {letter-spacing: 0.025em
}`],"text-[#464646]":[`__SCOPE__ .text-\\[\\#464646\\] {--tw-text-opacity: 1;color: rgb(70 70 70 / var(--tw-text-opacity, 1))
}`],"text-amber-100":[`__SCOPE__ .text-amber-100 {--tw-text-opacity: 1;color: rgb(254 243 199 / var(--tw-text-opacity, 1))
}`],"text-amber-200":[`__SCOPE__ .text-amber-200 {--tw-text-opacity: 1;color: rgb(253 230 138 / var(--tw-text-opacity, 1))
}`],"text-amber-300":[`__SCOPE__ .text-amber-300 {--tw-text-opacity: 1;color: rgb(252 211 77 / var(--tw-text-opacity, 1))
}`],"text-amber-400":[`__SCOPE__ .text-amber-400 {--tw-text-opacity: 1;color: rgb(251 191 36 / var(--tw-text-opacity, 1))
}`],"text-amber-50":[`__SCOPE__ .text-amber-50 {--tw-text-opacity: 1;color: rgb(255 251 235 / var(--tw-text-opacity, 1))
}`],"text-amber-500":[`__SCOPE__ .text-amber-500 {--tw-text-opacity: 1;color: rgb(245 158 11 / var(--tw-text-opacity, 1))
}`],"text-amber-600":[`__SCOPE__ .text-amber-600 {--tw-text-opacity: 1;color: rgb(217 119 6 / var(--tw-text-opacity, 1))
}`],"text-amber-700":[`__SCOPE__ .text-amber-700 {--tw-text-opacity: 1;color: rgb(180 83 9 / var(--tw-text-opacity, 1))
}`],"text-amber-800":[`__SCOPE__ .text-amber-800 {--tw-text-opacity: 1;color: rgb(146 64 14 / var(--tw-text-opacity, 1))
}`],"text-amber-900":[`__SCOPE__ .text-amber-900 {--tw-text-opacity: 1;color: rgb(120 53 15 / var(--tw-text-opacity, 1))
}`],"text-amber-950":[`__SCOPE__ .text-amber-950 {--tw-text-opacity: 1;color: rgb(69 26 3 / var(--tw-text-opacity, 1))
}`],"text-black":[`__SCOPE__ .text-black {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
}`],"text-blue-100":[`__SCOPE__ .text-blue-100 {--tw-text-opacity: 1;color: rgb(219 234 254 / var(--tw-text-opacity, 1))
}`],"text-blue-200":[`__SCOPE__ .text-blue-200 {--tw-text-opacity: 1;color: rgb(191 219 254 / var(--tw-text-opacity, 1))
}`],"text-blue-300":[`__SCOPE__ .text-blue-300 {--tw-text-opacity: 1;color: rgb(147 197 253 / var(--tw-text-opacity, 1))
}`],"text-blue-400":[`__SCOPE__ .text-blue-400 {--tw-text-opacity: 1;color: rgb(96 165 250 / var(--tw-text-opacity, 1))
}`],"text-blue-50":[`__SCOPE__ .text-blue-50 {--tw-text-opacity: 1;color: rgb(239 246 255 / var(--tw-text-opacity, 1))
}`],"text-blue-500":[`__SCOPE__ .text-blue-500 {--tw-text-opacity: 1;color: rgb(59 130 246 / var(--tw-text-opacity, 1))
}`],"text-blue-600":[`__SCOPE__ .text-blue-600 {--tw-text-opacity: 1;color: rgb(37 99 235 / var(--tw-text-opacity, 1))
}`],"text-blue-700":[`__SCOPE__ .text-blue-700 {--tw-text-opacity: 1;color: rgb(29 78 216 / var(--tw-text-opacity, 1))
}`],"text-blue-800":[`__SCOPE__ .text-blue-800 {--tw-text-opacity: 1;color: rgb(30 64 175 / var(--tw-text-opacity, 1))
}`],"text-blue-900":[`__SCOPE__ .text-blue-900 {--tw-text-opacity: 1;color: rgb(30 58 138 / var(--tw-text-opacity, 1))
}`],"text-blue-950":[`__SCOPE__ .text-blue-950 {--tw-text-opacity: 1;color: rgb(23 37 84 / var(--tw-text-opacity, 1))
}`],"text-body-color":[`__SCOPE__ .text-body-color {--tw-text-opacity: 1;color: rgb(99 115 129 / var(--tw-text-opacity, 1))
}`],"text-current":[`__SCOPE__ .text-current {color: currentColor
}`],"text-cyan-100":[`__SCOPE__ .text-cyan-100 {--tw-text-opacity: 1;color: rgb(207 250 254 / var(--tw-text-opacity, 1))
}`],"text-cyan-200":[`__SCOPE__ .text-cyan-200 {--tw-text-opacity: 1;color: rgb(165 243 252 / var(--tw-text-opacity, 1))
}`],"text-cyan-300":[`__SCOPE__ .text-cyan-300 {--tw-text-opacity: 1;color: rgb(103 232 249 / var(--tw-text-opacity, 1))
}`],"text-cyan-400":[`__SCOPE__ .text-cyan-400 {--tw-text-opacity: 1;color: rgb(34 211 238 / var(--tw-text-opacity, 1))
}`],"text-cyan-50":[`__SCOPE__ .text-cyan-50 {--tw-text-opacity: 1;color: rgb(236 254 255 / var(--tw-text-opacity, 1))
}`],"text-cyan-500":[`__SCOPE__ .text-cyan-500 {--tw-text-opacity: 1;color: rgb(6 182 212 / var(--tw-text-opacity, 1))
}`],"text-cyan-600":[`__SCOPE__ .text-cyan-600 {--tw-text-opacity: 1;color: rgb(8 145 178 / var(--tw-text-opacity, 1))
}`],"text-cyan-700":[`__SCOPE__ .text-cyan-700 {--tw-text-opacity: 1;color: rgb(14 116 144 / var(--tw-text-opacity, 1))
}`],"text-cyan-800":[`__SCOPE__ .text-cyan-800 {--tw-text-opacity: 1;color: rgb(21 94 117 / var(--tw-text-opacity, 1))
}`],"text-cyan-900":[`__SCOPE__ .text-cyan-900 {--tw-text-opacity: 1;color: rgb(22 78 99 / var(--tw-text-opacity, 1))
}`],"text-cyan-950":[`__SCOPE__ .text-cyan-950 {--tw-text-opacity: 1;color: rgb(8 51 68 / var(--tw-text-opacity, 1))
}`],"text-dark":[`__SCOPE__ .text-dark {--tw-text-opacity: 1;color: rgb(17 25 40 / var(--tw-text-opacity, 1))
}`],"text-emerald-100":[`__SCOPE__ .text-emerald-100 {--tw-text-opacity: 1;color: rgb(209 250 229 / var(--tw-text-opacity, 1))
}`],"text-emerald-200":[`__SCOPE__ .text-emerald-200 {--tw-text-opacity: 1;color: rgb(167 243 208 / var(--tw-text-opacity, 1))
}`],"text-emerald-300":[`__SCOPE__ .text-emerald-300 {--tw-text-opacity: 1;color: rgb(110 231 183 / var(--tw-text-opacity, 1))
}`],"text-emerald-400":[`__SCOPE__ .text-emerald-400 {--tw-text-opacity: 1;color: rgb(52 211 153 / var(--tw-text-opacity, 1))
}`],"text-emerald-50":[`__SCOPE__ .text-emerald-50 {--tw-text-opacity: 1;color: rgb(236 253 245 / var(--tw-text-opacity, 1))
}`],"text-emerald-500":[`__SCOPE__ .text-emerald-500 {--tw-text-opacity: 1;color: rgb(16 185 129 / var(--tw-text-opacity, 1))
}`],"text-emerald-600":[`__SCOPE__ .text-emerald-600 {--tw-text-opacity: 1;color: rgb(5 150 105 / var(--tw-text-opacity, 1))
}`],"text-emerald-700":[`__SCOPE__ .text-emerald-700 {--tw-text-opacity: 1;color: rgb(4 120 87 / var(--tw-text-opacity, 1))
}`],"text-emerald-800":[`__SCOPE__ .text-emerald-800 {--tw-text-opacity: 1;color: rgb(6 95 70 / var(--tw-text-opacity, 1))
}`],"text-emerald-900":[`__SCOPE__ .text-emerald-900 {--tw-text-opacity: 1;color: rgb(6 78 59 / var(--tw-text-opacity, 1))
}`],"text-emerald-950":[`__SCOPE__ .text-emerald-950 {--tw-text-opacity: 1;color: rgb(2 44 34 / var(--tw-text-opacity, 1))
}`],"text-gray-100":[`__SCOPE__ .text-gray-100 {--tw-text-opacity: 1;color: rgb(243 244 246 / var(--tw-text-opacity, 1))
}`],"text-gray-200":[`__SCOPE__ .text-gray-200 {--tw-text-opacity: 1;color: rgb(229 231 235 / var(--tw-text-opacity, 1))
}`],"text-gray-300":[`__SCOPE__ .text-gray-300 {--tw-text-opacity: 1;color: rgb(209 213 219 / var(--tw-text-opacity, 1))
}`],"text-gray-400":[`__SCOPE__ .text-gray-400 {--tw-text-opacity: 1;color: rgb(156 163 175 / var(--tw-text-opacity, 1))
}`],"text-gray-50":[`__SCOPE__ .text-gray-50 {--tw-text-opacity: 1;color: rgb(249 250 251 / var(--tw-text-opacity, 1))
}`],"text-gray-500":[`__SCOPE__ .text-gray-500 {--tw-text-opacity: 1;color: rgb(107 114 128 / var(--tw-text-opacity, 1))
}`],"text-gray-600":[`__SCOPE__ .text-gray-600 {--tw-text-opacity: 1;color: rgb(75 85 99 / var(--tw-text-opacity, 1))
}`],"text-gray-700":[`__SCOPE__ .text-gray-700 {--tw-text-opacity: 1;color: rgb(55 65 81 / var(--tw-text-opacity, 1))
}`],"text-gray-800":[`__SCOPE__ .text-gray-800 {--tw-text-opacity: 1;color: rgb(31 41 55 / var(--tw-text-opacity, 1))
}`],"text-gray-900":[`__SCOPE__ .text-gray-900 {--tw-text-opacity: 1;color: rgb(17 24 39 / var(--tw-text-opacity, 1))
}`],"text-gray-950":[`__SCOPE__ .text-gray-950 {--tw-text-opacity: 1;color: rgb(3 7 18 / var(--tw-text-opacity, 1))
}`],"text-green-100":[`__SCOPE__ .text-green-100 {--tw-text-opacity: 1;color: rgb(220 252 231 / var(--tw-text-opacity, 1))
}`],"text-green-200":[`__SCOPE__ .text-green-200 {--tw-text-opacity: 1;color: rgb(187 247 208 / var(--tw-text-opacity, 1))
}`],"text-green-300":[`__SCOPE__ .text-green-300 {--tw-text-opacity: 1;color: rgb(134 239 172 / var(--tw-text-opacity, 1))
}`],"text-green-400":[`__SCOPE__ .text-green-400 {--tw-text-opacity: 1;color: rgb(74 222 128 / var(--tw-text-opacity, 1))
}`],"text-green-50":[`__SCOPE__ .text-green-50 {--tw-text-opacity: 1;color: rgb(240 253 244 / var(--tw-text-opacity, 1))
}`],"text-green-500":[`__SCOPE__ .text-green-500 {--tw-text-opacity: 1;color: rgb(34 197 94 / var(--tw-text-opacity, 1))
}`],"text-green-600":[`__SCOPE__ .text-green-600 {--tw-text-opacity: 1;color: rgb(22 163 74 / var(--tw-text-opacity, 1))
}`],"text-green-700":[`__SCOPE__ .text-green-700 {--tw-text-opacity: 1;color: rgb(21 128 61 / var(--tw-text-opacity, 1))
}`],"text-green-800":[`__SCOPE__ .text-green-800 {--tw-text-opacity: 1;color: rgb(22 101 52 / var(--tw-text-opacity, 1))
}`],"text-green-900":[`__SCOPE__ .text-green-900 {--tw-text-opacity: 1;color: rgb(20 83 45 / var(--tw-text-opacity, 1))
}`],"text-green-950":[`__SCOPE__ .text-green-950 {--tw-text-opacity: 1;color: rgb(5 46 22 / var(--tw-text-opacity, 1))
}`],"text-indigo-100":[`__SCOPE__ .text-indigo-100 {--tw-text-opacity: 1;color: rgb(224 231 255 / var(--tw-text-opacity, 1))
}`],"text-indigo-200":[`__SCOPE__ .text-indigo-200 {--tw-text-opacity: 1;color: rgb(199 210 254 / var(--tw-text-opacity, 1))
}`],"text-indigo-300":[`__SCOPE__ .text-indigo-300 {--tw-text-opacity: 1;color: rgb(165 180 252 / var(--tw-text-opacity, 1))
}`],"text-indigo-400":[`__SCOPE__ .text-indigo-400 {--tw-text-opacity: 1;color: rgb(129 140 248 / var(--tw-text-opacity, 1))
}`],"text-indigo-50":[`__SCOPE__ .text-indigo-50 {--tw-text-opacity: 1;color: rgb(238 242 255 / var(--tw-text-opacity, 1))
}`],"text-indigo-500":[`__SCOPE__ .text-indigo-500 {--tw-text-opacity: 1;color: rgb(99 102 241 / var(--tw-text-opacity, 1))
}`],"text-indigo-600":[`__SCOPE__ .text-indigo-600 {--tw-text-opacity: 1;color: rgb(79 70 229 / var(--tw-text-opacity, 1))
}`],"text-indigo-700":[`__SCOPE__ .text-indigo-700 {--tw-text-opacity: 1;color: rgb(67 56 202 / var(--tw-text-opacity, 1))
}`],"text-indigo-800":[`__SCOPE__ .text-indigo-800 {--tw-text-opacity: 1;color: rgb(55 48 163 / var(--tw-text-opacity, 1))
}`],"text-indigo-900":[`__SCOPE__ .text-indigo-900 {--tw-text-opacity: 1;color: rgb(49 46 129 / var(--tw-text-opacity, 1))
}`],"text-indigo-950":[`__SCOPE__ .text-indigo-950 {--tw-text-opacity: 1;color: rgb(30 27 75 / var(--tw-text-opacity, 1))
}`],"text-lime-100":[`__SCOPE__ .text-lime-100 {--tw-text-opacity: 1;color: rgb(236 252 203 / var(--tw-text-opacity, 1))
}`],"text-lime-200":[`__SCOPE__ .text-lime-200 {--tw-text-opacity: 1;color: rgb(217 249 157 / var(--tw-text-opacity, 1))
}`],"text-lime-300":[`__SCOPE__ .text-lime-300 {--tw-text-opacity: 1;color: rgb(190 242 100 / var(--tw-text-opacity, 1))
}`],"text-lime-400":[`__SCOPE__ .text-lime-400 {--tw-text-opacity: 1;color: rgb(163 230 53 / var(--tw-text-opacity, 1))
}`],"text-lime-50":[`__SCOPE__ .text-lime-50 {--tw-text-opacity: 1;color: rgb(247 254 231 / var(--tw-text-opacity, 1))
}`],"text-lime-500":[`__SCOPE__ .text-lime-500 {--tw-text-opacity: 1;color: rgb(132 204 22 / var(--tw-text-opacity, 1))
}`],"text-lime-600":[`__SCOPE__ .text-lime-600 {--tw-text-opacity: 1;color: rgb(101 163 13 / var(--tw-text-opacity, 1))
}`],"text-lime-700":[`__SCOPE__ .text-lime-700 {--tw-text-opacity: 1;color: rgb(77 124 15 / var(--tw-text-opacity, 1))
}`],"text-lime-800":[`__SCOPE__ .text-lime-800 {--tw-text-opacity: 1;color: rgb(63 98 18 / var(--tw-text-opacity, 1))
}`],"text-lime-900":[`__SCOPE__ .text-lime-900 {--tw-text-opacity: 1;color: rgb(54 83 20 / var(--tw-text-opacity, 1))
}`],"text-lime-950":[`__SCOPE__ .text-lime-950 {--tw-text-opacity: 1;color: rgb(26 46 5 / var(--tw-text-opacity, 1))
}`],"text-orange-100":[`__SCOPE__ .text-orange-100 {--tw-text-opacity: 1;color: rgb(255 237 213 / var(--tw-text-opacity, 1))
}`],"text-orange-200":[`__SCOPE__ .text-orange-200 {--tw-text-opacity: 1;color: rgb(254 215 170 / var(--tw-text-opacity, 1))
}`],"text-orange-300":[`__SCOPE__ .text-orange-300 {--tw-text-opacity: 1;color: rgb(253 186 116 / var(--tw-text-opacity, 1))
}`],"text-orange-400":[`__SCOPE__ .text-orange-400 {--tw-text-opacity: 1;color: rgb(251 146 60 / var(--tw-text-opacity, 1))
}`],"text-orange-50":[`__SCOPE__ .text-orange-50 {--tw-text-opacity: 1;color: rgb(255 247 237 / var(--tw-text-opacity, 1))
}`],"text-orange-500":[`__SCOPE__ .text-orange-500 {--tw-text-opacity: 1;color: rgb(249 115 22 / var(--tw-text-opacity, 1))
}`],"text-orange-600":[`__SCOPE__ .text-orange-600 {--tw-text-opacity: 1;color: rgb(234 88 12 / var(--tw-text-opacity, 1))
}`],"text-orange-700":[`__SCOPE__ .text-orange-700 {--tw-text-opacity: 1;color: rgb(194 65 12 / var(--tw-text-opacity, 1))
}`],"text-orange-800":[`__SCOPE__ .text-orange-800 {--tw-text-opacity: 1;color: rgb(154 52 18 / var(--tw-text-opacity, 1))
}`],"text-orange-900":[`__SCOPE__ .text-orange-900 {--tw-text-opacity: 1;color: rgb(124 45 18 / var(--tw-text-opacity, 1))
}`],"text-orange-950":[`__SCOPE__ .text-orange-950 {--tw-text-opacity: 1;color: rgb(67 20 7 / var(--tw-text-opacity, 1))
}`],"text-pink-100":[`__SCOPE__ .text-pink-100 {--tw-text-opacity: 1;color: rgb(252 231 243 / var(--tw-text-opacity, 1))
}`],"text-pink-200":[`__SCOPE__ .text-pink-200 {--tw-text-opacity: 1;color: rgb(251 207 232 / var(--tw-text-opacity, 1))
}`],"text-pink-300":[`__SCOPE__ .text-pink-300 {--tw-text-opacity: 1;color: rgb(249 168 212 / var(--tw-text-opacity, 1))
}`],"text-pink-400":[`__SCOPE__ .text-pink-400 {--tw-text-opacity: 1;color: rgb(244 114 182 / var(--tw-text-opacity, 1))
}`],"text-pink-50":[`__SCOPE__ .text-pink-50 {--tw-text-opacity: 1;color: rgb(253 242 248 / var(--tw-text-opacity, 1))
}`],"text-pink-500":[`__SCOPE__ .text-pink-500 {--tw-text-opacity: 1;color: rgb(236 72 153 / var(--tw-text-opacity, 1))
}`],"text-pink-600":[`__SCOPE__ .text-pink-600 {--tw-text-opacity: 1;color: rgb(219 39 119 / var(--tw-text-opacity, 1))
}`],"text-pink-700":[`__SCOPE__ .text-pink-700 {--tw-text-opacity: 1;color: rgb(190 24 93 / var(--tw-text-opacity, 1))
}`],"text-pink-800":[`__SCOPE__ .text-pink-800 {--tw-text-opacity: 1;color: rgb(157 23 77 / var(--tw-text-opacity, 1))
}`],"text-pink-900":[`__SCOPE__ .text-pink-900 {--tw-text-opacity: 1;color: rgb(131 24 67 / var(--tw-text-opacity, 1))
}`],"text-pink-950":[`__SCOPE__ .text-pink-950 {--tw-text-opacity: 1;color: rgb(80 7 36 / var(--tw-text-opacity, 1))
}`],"text-primary":[`__SCOPE__ .text-primary {--tw-text-opacity: 1;color: rgb(55 88 249 / var(--tw-text-opacity, 1))
}`],"text-purple-100":[`__SCOPE__ .text-purple-100 {--tw-text-opacity: 1;color: rgb(243 232 255 / var(--tw-text-opacity, 1))
}`],"text-purple-200":[`__SCOPE__ .text-purple-200 {--tw-text-opacity: 1;color: rgb(233 213 255 / var(--tw-text-opacity, 1))
}`],"text-purple-300":[`__SCOPE__ .text-purple-300 {--tw-text-opacity: 1;color: rgb(216 180 254 / var(--tw-text-opacity, 1))
}`],"text-purple-400":[`__SCOPE__ .text-purple-400 {--tw-text-opacity: 1;color: rgb(192 132 252 / var(--tw-text-opacity, 1))
}`],"text-purple-50":[`__SCOPE__ .text-purple-50 {--tw-text-opacity: 1;color: rgb(250 245 255 / var(--tw-text-opacity, 1))
}`],"text-purple-500":[`__SCOPE__ .text-purple-500 {--tw-text-opacity: 1;color: rgb(168 85 247 / var(--tw-text-opacity, 1))
}`],"text-purple-600":[`__SCOPE__ .text-purple-600 {--tw-text-opacity: 1;color: rgb(147 51 234 / var(--tw-text-opacity, 1))
}`],"text-purple-700":[`__SCOPE__ .text-purple-700 {--tw-text-opacity: 1;color: rgb(126 34 206 / var(--tw-text-opacity, 1))
}`],"text-purple-800":[`__SCOPE__ .text-purple-800 {--tw-text-opacity: 1;color: rgb(107 33 168 / var(--tw-text-opacity, 1))
}`],"text-purple-900":[`__SCOPE__ .text-purple-900 {--tw-text-opacity: 1;color: rgb(88 28 135 / var(--tw-text-opacity, 1))
}`],"text-purple-950":[`__SCOPE__ .text-purple-950 {--tw-text-opacity: 1;color: rgb(59 7 100 / var(--tw-text-opacity, 1))
}`],"text-red-100":[`__SCOPE__ .text-red-100 {--tw-text-opacity: 1;color: rgb(254 226 226 / var(--tw-text-opacity, 1))
}`],"text-red-200":[`__SCOPE__ .text-red-200 {--tw-text-opacity: 1;color: rgb(254 202 202 / var(--tw-text-opacity, 1))
}`],"text-red-300":[`__SCOPE__ .text-red-300 {--tw-text-opacity: 1;color: rgb(252 165 165 / var(--tw-text-opacity, 1))
}`],"text-red-400":[`__SCOPE__ .text-red-400 {--tw-text-opacity: 1;color: rgb(248 113 113 / var(--tw-text-opacity, 1))
}`],"text-red-50":[`__SCOPE__ .text-red-50 {--tw-text-opacity: 1;color: rgb(254 242 242 / var(--tw-text-opacity, 1))
}`],"text-red-500":[`__SCOPE__ .text-red-500 {--tw-text-opacity: 1;color: rgb(239 68 68 / var(--tw-text-opacity, 1))
}`],"text-red-600":[`__SCOPE__ .text-red-600 {--tw-text-opacity: 1;color: rgb(220 38 38 / var(--tw-text-opacity, 1))
}`],"text-red-700":[`__SCOPE__ .text-red-700 {--tw-text-opacity: 1;color: rgb(185 28 28 / var(--tw-text-opacity, 1))
}`],"text-red-800":[`__SCOPE__ .text-red-800 {--tw-text-opacity: 1;color: rgb(153 27 27 / var(--tw-text-opacity, 1))
}`],"text-red-900":[`__SCOPE__ .text-red-900 {--tw-text-opacity: 1;color: rgb(127 29 29 / var(--tw-text-opacity, 1))
}`],"text-red-950":[`__SCOPE__ .text-red-950 {--tw-text-opacity: 1;color: rgb(69 10 10 / var(--tw-text-opacity, 1))
}`],"text-rose-100":[`__SCOPE__ .text-rose-100 {--tw-text-opacity: 1;color: rgb(255 228 230 / var(--tw-text-opacity, 1))
}`],"text-rose-200":[`__SCOPE__ .text-rose-200 {--tw-text-opacity: 1;color: rgb(254 205 211 / var(--tw-text-opacity, 1))
}`],"text-rose-300":[`__SCOPE__ .text-rose-300 {--tw-text-opacity: 1;color: rgb(253 164 175 / var(--tw-text-opacity, 1))
}`],"text-rose-400":[`__SCOPE__ .text-rose-400 {--tw-text-opacity: 1;color: rgb(251 113 133 / var(--tw-text-opacity, 1))
}`],"text-rose-50":[`__SCOPE__ .text-rose-50 {--tw-text-opacity: 1;color: rgb(255 241 242 / var(--tw-text-opacity, 1))
}`],"text-rose-500":[`__SCOPE__ .text-rose-500 {--tw-text-opacity: 1;color: rgb(244 63 94 / var(--tw-text-opacity, 1))
}`],"text-rose-600":[`__SCOPE__ .text-rose-600 {--tw-text-opacity: 1;color: rgb(225 29 72 / var(--tw-text-opacity, 1))
}`],"text-rose-700":[`__SCOPE__ .text-rose-700 {--tw-text-opacity: 1;color: rgb(190 18 60 / var(--tw-text-opacity, 1))
}`],"text-rose-800":[`__SCOPE__ .text-rose-800 {--tw-text-opacity: 1;color: rgb(159 18 57 / var(--tw-text-opacity, 1))
}`],"text-rose-900":[`__SCOPE__ .text-rose-900 {--tw-text-opacity: 1;color: rgb(136 19 55 / var(--tw-text-opacity, 1))
}`],"text-rose-950":[`__SCOPE__ .text-rose-950 {--tw-text-opacity: 1;color: rgb(76 5 25 / var(--tw-text-opacity, 1))
}`],"text-sky-100":[`__SCOPE__ .text-sky-100 {--tw-text-opacity: 1;color: rgb(224 242 254 / var(--tw-text-opacity, 1))
}`],"text-sky-200":[`__SCOPE__ .text-sky-200 {--tw-text-opacity: 1;color: rgb(186 230 253 / var(--tw-text-opacity, 1))
}`],"text-sky-300":[`__SCOPE__ .text-sky-300 {--tw-text-opacity: 1;color: rgb(125 211 252 / var(--tw-text-opacity, 1))
}`],"text-sky-400":[`__SCOPE__ .text-sky-400 {--tw-text-opacity: 1;color: rgb(56 189 248 / var(--tw-text-opacity, 1))
}`],"text-sky-50":[`__SCOPE__ .text-sky-50 {--tw-text-opacity: 1;color: rgb(240 249 255 / var(--tw-text-opacity, 1))
}`],"text-sky-500":[`__SCOPE__ .text-sky-500 {--tw-text-opacity: 1;color: rgb(14 165 233 / var(--tw-text-opacity, 1))
}`],"text-sky-600":[`__SCOPE__ .text-sky-600 {--tw-text-opacity: 1;color: rgb(2 132 199 / var(--tw-text-opacity, 1))
}`],"text-sky-700":[`__SCOPE__ .text-sky-700 {--tw-text-opacity: 1;color: rgb(3 105 161 / var(--tw-text-opacity, 1))
}`],"text-sky-800":[`__SCOPE__ .text-sky-800 {--tw-text-opacity: 1;color: rgb(7 89 133 / var(--tw-text-opacity, 1))
}`],"text-sky-900":[`__SCOPE__ .text-sky-900 {--tw-text-opacity: 1;color: rgb(12 74 110 / var(--tw-text-opacity, 1))
}`],"text-sky-950":[`__SCOPE__ .text-sky-950 {--tw-text-opacity: 1;color: rgb(8 47 73 / var(--tw-text-opacity, 1))
}`],"text-slate-100":[`__SCOPE__ .text-slate-100 {--tw-text-opacity: 1;color: rgb(241 245 249 / var(--tw-text-opacity, 1))
}`],"text-slate-200":[`__SCOPE__ .text-slate-200 {--tw-text-opacity: 1;color: rgb(226 232 240 / var(--tw-text-opacity, 1))
}`],"text-slate-300":[`__SCOPE__ .text-slate-300 {--tw-text-opacity: 1;color: rgb(203 213 225 / var(--tw-text-opacity, 1))
}`],"text-slate-400":[`__SCOPE__ .text-slate-400 {--tw-text-opacity: 1;color: rgb(148 163 184 / var(--tw-text-opacity, 1))
}`],"text-slate-50":[`__SCOPE__ .text-slate-50 {--tw-text-opacity: 1;color: rgb(248 250 252 / var(--tw-text-opacity, 1))
}`],"text-slate-500":[`__SCOPE__ .text-slate-500 {--tw-text-opacity: 1;color: rgb(100 116 139 / var(--tw-text-opacity, 1))
}`],"text-slate-600":[`__SCOPE__ .text-slate-600 {--tw-text-opacity: 1;color: rgb(71 85 105 / var(--tw-text-opacity, 1))
}`],"text-slate-700":[`__SCOPE__ .text-slate-700 {--tw-text-opacity: 1;color: rgb(51 65 85 / var(--tw-text-opacity, 1))
}`],"text-slate-800":[`__SCOPE__ .text-slate-800 {--tw-text-opacity: 1;color: rgb(30 41 59 / var(--tw-text-opacity, 1))
}`],"text-slate-900":[`__SCOPE__ .text-slate-900 {--tw-text-opacity: 1;color: rgb(15 23 42 / var(--tw-text-opacity, 1))
}`],"text-slate-950":[`__SCOPE__ .text-slate-950 {--tw-text-opacity: 1;color: rgb(2 6 23 / var(--tw-text-opacity, 1))
}`],"text-stone-100":[`__SCOPE__ .text-stone-100 {--tw-text-opacity: 1;color: rgb(245 245 244 / var(--tw-text-opacity, 1))
}`],"text-stone-200":[`__SCOPE__ .text-stone-200 {--tw-text-opacity: 1;color: rgb(231 229 228 / var(--tw-text-opacity, 1))
}`],"text-stone-300":[`__SCOPE__ .text-stone-300 {--tw-text-opacity: 1;color: rgb(214 211 209 / var(--tw-text-opacity, 1))
}`],"text-stone-400":[`__SCOPE__ .text-stone-400 {--tw-text-opacity: 1;color: rgb(168 162 158 / var(--tw-text-opacity, 1))
}`],"text-stone-50":[`__SCOPE__ .text-stone-50 {--tw-text-opacity: 1;color: rgb(250 250 249 / var(--tw-text-opacity, 1))
}`],"text-stone-500":[`__SCOPE__ .text-stone-500 {--tw-text-opacity: 1;color: rgb(120 113 108 / var(--tw-text-opacity, 1))
}`],"text-stone-600":[`__SCOPE__ .text-stone-600 {--tw-text-opacity: 1;color: rgb(87 83 78 / var(--tw-text-opacity, 1))
}`],"text-stone-700":[`__SCOPE__ .text-stone-700 {--tw-text-opacity: 1;color: rgb(68 64 60 / var(--tw-text-opacity, 1))
}`],"text-stone-800":[`__SCOPE__ .text-stone-800 {--tw-text-opacity: 1;color: rgb(41 37 36 / var(--tw-text-opacity, 1))
}`],"text-stone-900":[`__SCOPE__ .text-stone-900 {--tw-text-opacity: 1;color: rgb(28 25 23 / var(--tw-text-opacity, 1))
}`],"text-stone-950":[`__SCOPE__ .text-stone-950 {--tw-text-opacity: 1;color: rgb(12 10 9 / var(--tw-text-opacity, 1))
}`],"text-teal-100":[`__SCOPE__ .text-teal-100 {--tw-text-opacity: 1;color: rgb(204 251 241 / var(--tw-text-opacity, 1))
}`],"text-teal-200":[`__SCOPE__ .text-teal-200 {--tw-text-opacity: 1;color: rgb(153 246 228 / var(--tw-text-opacity, 1))
}`],"text-teal-300":[`__SCOPE__ .text-teal-300 {--tw-text-opacity: 1;color: rgb(94 234 212 / var(--tw-text-opacity, 1))
}`],"text-teal-400":[`__SCOPE__ .text-teal-400 {--tw-text-opacity: 1;color: rgb(45 212 191 / var(--tw-text-opacity, 1))
}`],"text-teal-50":[`__SCOPE__ .text-teal-50 {--tw-text-opacity: 1;color: rgb(240 253 250 / var(--tw-text-opacity, 1))
}`],"text-teal-500":[`__SCOPE__ .text-teal-500 {--tw-text-opacity: 1;color: rgb(20 184 166 / var(--tw-text-opacity, 1))
}`],"text-teal-600":[`__SCOPE__ .text-teal-600 {--tw-text-opacity: 1;color: rgb(13 148 136 / var(--tw-text-opacity, 1))
}`],"text-teal-700":[`__SCOPE__ .text-teal-700 {--tw-text-opacity: 1;color: rgb(15 118 110 / var(--tw-text-opacity, 1))
}`],"text-teal-800":[`__SCOPE__ .text-teal-800 {--tw-text-opacity: 1;color: rgb(17 94 89 / var(--tw-text-opacity, 1))
}`],"text-teal-900":[`__SCOPE__ .text-teal-900 {--tw-text-opacity: 1;color: rgb(19 78 74 / var(--tw-text-opacity, 1))
}`],"text-teal-950":[`__SCOPE__ .text-teal-950 {--tw-text-opacity: 1;color: rgb(4 47 46 / var(--tw-text-opacity, 1))
}`],"text-transparent":[`__SCOPE__ .text-transparent {color: transparent
}`],"text-violet-100":[`__SCOPE__ .text-violet-100 {--tw-text-opacity: 1;color: rgb(237 233 254 / var(--tw-text-opacity, 1))
}`],"text-violet-200":[`__SCOPE__ .text-violet-200 {--tw-text-opacity: 1;color: rgb(221 214 254 / var(--tw-text-opacity, 1))
}`],"text-violet-300":[`__SCOPE__ .text-violet-300 {--tw-text-opacity: 1;color: rgb(196 181 253 / var(--tw-text-opacity, 1))
}`],"text-violet-400":[`__SCOPE__ .text-violet-400 {--tw-text-opacity: 1;color: rgb(167 139 250 / var(--tw-text-opacity, 1))
}`],"text-violet-50":[`__SCOPE__ .text-violet-50 {--tw-text-opacity: 1;color: rgb(245 243 255 / var(--tw-text-opacity, 1))
}`],"text-violet-500":[`__SCOPE__ .text-violet-500 {--tw-text-opacity: 1;color: rgb(139 92 246 / var(--tw-text-opacity, 1))
}`],"text-violet-600":[`__SCOPE__ .text-violet-600 {--tw-text-opacity: 1;color: rgb(124 58 237 / var(--tw-text-opacity, 1))
}`],"text-violet-700":[`__SCOPE__ .text-violet-700 {--tw-text-opacity: 1;color: rgb(109 40 217 / var(--tw-text-opacity, 1))
}`],"text-violet-800":[`__SCOPE__ .text-violet-800 {--tw-text-opacity: 1;color: rgb(91 33 182 / var(--tw-text-opacity, 1))
}`],"text-violet-900":[`__SCOPE__ .text-violet-900 {--tw-text-opacity: 1;color: rgb(76 29 149 / var(--tw-text-opacity, 1))
}`],"text-violet-950":[`__SCOPE__ .text-violet-950 {--tw-text-opacity: 1;color: rgb(46 16 101 / var(--tw-text-opacity, 1))
}`],"text-white":[`__SCOPE__ .text-white {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}`],"text-yellow-100":[`__SCOPE__ .text-yellow-100 {--tw-text-opacity: 1;color: rgb(254 249 195 / var(--tw-text-opacity, 1))
}`],"text-yellow-200":[`__SCOPE__ .text-yellow-200 {--tw-text-opacity: 1;color: rgb(254 240 138 / var(--tw-text-opacity, 1))
}`],"text-yellow-300":[`__SCOPE__ .text-yellow-300 {--tw-text-opacity: 1;color: rgb(253 224 71 / var(--tw-text-opacity, 1))
}`],"text-yellow-400":[`__SCOPE__ .text-yellow-400 {--tw-text-opacity: 1;color: rgb(250 204 21 / var(--tw-text-opacity, 1))
}`],"text-yellow-50":[`__SCOPE__ .text-yellow-50 {--tw-text-opacity: 1;color: rgb(254 252 232 / var(--tw-text-opacity, 1))
}`],"text-yellow-500":[`__SCOPE__ .text-yellow-500 {--tw-text-opacity: 1;color: rgb(234 179 8 / var(--tw-text-opacity, 1))
}`],"text-yellow-600":[`__SCOPE__ .text-yellow-600 {--tw-text-opacity: 1;color: rgb(202 138 4 / var(--tw-text-opacity, 1))
}`],"text-yellow-700":[`__SCOPE__ .text-yellow-700 {--tw-text-opacity: 1;color: rgb(161 98 7 / var(--tw-text-opacity, 1))
}`],"text-yellow-800":[`__SCOPE__ .text-yellow-800 {--tw-text-opacity: 1;color: rgb(133 77 14 / var(--tw-text-opacity, 1))
}`],"text-yellow-900":[`__SCOPE__ .text-yellow-900 {--tw-text-opacity: 1;color: rgb(113 63 18 / var(--tw-text-opacity, 1))
}`],"text-yellow-950":[`__SCOPE__ .text-yellow-950 {--tw-text-opacity: 1;color: rgb(66 32 6 / var(--tw-text-opacity, 1))
}`],"text-zinc-100":[`__SCOPE__ .text-zinc-100 {--tw-text-opacity: 1;color: rgb(244 244 245 / var(--tw-text-opacity, 1))
}`],"text-zinc-200":[`__SCOPE__ .text-zinc-200 {--tw-text-opacity: 1;color: rgb(228 228 231 / var(--tw-text-opacity, 1))
}`],"text-zinc-300":[`__SCOPE__ .text-zinc-300 {--tw-text-opacity: 1;color: rgb(212 212 216 / var(--tw-text-opacity, 1))
}`],"text-zinc-400":[`__SCOPE__ .text-zinc-400 {--tw-text-opacity: 1;color: rgb(161 161 170 / var(--tw-text-opacity, 1))
}`],"text-zinc-50":[`__SCOPE__ .text-zinc-50 {--tw-text-opacity: 1;color: rgb(250 250 250 / var(--tw-text-opacity, 1))
}`],"text-zinc-500":[`__SCOPE__ .text-zinc-500 {--tw-text-opacity: 1;color: rgb(113 113 122 / var(--tw-text-opacity, 1))
}`],"text-zinc-600":[`__SCOPE__ .text-zinc-600 {--tw-text-opacity: 1;color: rgb(82 82 91 / var(--tw-text-opacity, 1))
}`],"text-zinc-700":[`__SCOPE__ .text-zinc-700 {--tw-text-opacity: 1;color: rgb(63 63 70 / var(--tw-text-opacity, 1))
}`],"text-zinc-800":[`__SCOPE__ .text-zinc-800 {--tw-text-opacity: 1;color: rgb(39 39 42 / var(--tw-text-opacity, 1))
}`],"text-zinc-900":[`__SCOPE__ .text-zinc-900 {--tw-text-opacity: 1;color: rgb(24 24 27 / var(--tw-text-opacity, 1))
}`],"text-zinc-950":[`__SCOPE__ .text-zinc-950 {--tw-text-opacity: 1;color: rgb(9 9 11 / var(--tw-text-opacity, 1))
}`],underline:[`__SCOPE__ .underline {text-decoration-line: underline
}`],"no-underline":[`__SCOPE__ .no-underline {text-decoration-line: none
}`],shadow:[`__SCOPE__ .shadow {--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-2":[`__SCOPE__ .shadow-2 {--tw-shadow: 0px 10px 60px 0px rgba(0,0,0,0.08);--tw-shadow-colored: 0px 10px 60px 0px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-2xl":[`__SCOPE__ .shadow-2xl {--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)]":[`__SCOPE__ .shadow-\\[0px_20px_95px_0px_rgba\\(201\\2c 203\\2c 204\\2c 0\\.30\\)\\] {--tw-shadow: 0px 20px 95px 0px rgba(201,203,204,0.30);--tw-shadow-colored: 0px 20px 95px 0px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-lg":[`__SCOPE__ .shadow-lg {--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-md":[`__SCOPE__ .shadow-md {--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-sm":[`__SCOPE__ .shadow-sm {--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"shadow-xl":[`__SCOPE__ .shadow-xl {--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],transition:[`__SCOPE__ .transition {transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms
}`],"transition-colors":[`__SCOPE__ .transition-colors {transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms
}`],"transition-transform":[`__SCOPE__ .transition-transform {transition-property: transform;transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);transition-duration: 150ms
}`],"duration-200":[`__SCOPE__ .duration-200 {transition-duration: 200ms
}`],"duration-300":[`__SCOPE__ .duration-300 {transition-duration: 300ms
}`],"ease-in-out":[`__SCOPE__ .ease-in-out {transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1)
}`],"hover:bg-amber-100":[`__SCOPE__ .hover\\:bg-amber-100:hover {--tw-bg-opacity: 1;background-color: rgb(254 243 199 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-200":[`__SCOPE__ .hover\\:bg-amber-200:hover {--tw-bg-opacity: 1;background-color: rgb(253 230 138 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-300":[`__SCOPE__ .hover\\:bg-amber-300:hover {--tw-bg-opacity: 1;background-color: rgb(252 211 77 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-400":[`__SCOPE__ .hover\\:bg-amber-400:hover {--tw-bg-opacity: 1;background-color: rgb(251 191 36 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-50":[`__SCOPE__ .hover\\:bg-amber-50:hover {--tw-bg-opacity: 1;background-color: rgb(255 251 235 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-500":[`__SCOPE__ .hover\\:bg-amber-500:hover {--tw-bg-opacity: 1;background-color: rgb(245 158 11 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-600":[`__SCOPE__ .hover\\:bg-amber-600:hover {--tw-bg-opacity: 1;background-color: rgb(217 119 6 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-700":[`__SCOPE__ .hover\\:bg-amber-700:hover {--tw-bg-opacity: 1;background-color: rgb(180 83 9 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-800":[`__SCOPE__ .hover\\:bg-amber-800:hover {--tw-bg-opacity: 1;background-color: rgb(146 64 14 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-900":[`__SCOPE__ .hover\\:bg-amber-900:hover {--tw-bg-opacity: 1;background-color: rgb(120 53 15 / var(--tw-bg-opacity, 1))
}`],"hover:bg-amber-950":[`__SCOPE__ .hover\\:bg-amber-950:hover {--tw-bg-opacity: 1;background-color: rgb(69 26 3 / var(--tw-bg-opacity, 1))
}`],"hover:bg-black":[`__SCOPE__ .hover\\:bg-black:hover {--tw-bg-opacity: 1;background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-100":[`__SCOPE__ .hover\\:bg-blue-100:hover {--tw-bg-opacity: 1;background-color: rgb(219 234 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-200":[`__SCOPE__ .hover\\:bg-blue-200:hover {--tw-bg-opacity: 1;background-color: rgb(191 219 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-300":[`__SCOPE__ .hover\\:bg-blue-300:hover {--tw-bg-opacity: 1;background-color: rgb(147 197 253 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-400":[`__SCOPE__ .hover\\:bg-blue-400:hover {--tw-bg-opacity: 1;background-color: rgb(96 165 250 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-50":[`__SCOPE__ .hover\\:bg-blue-50:hover {--tw-bg-opacity: 1;background-color: rgb(239 246 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-500":[`__SCOPE__ .hover\\:bg-blue-500:hover {--tw-bg-opacity: 1;background-color: rgb(59 130 246 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-600":[`__SCOPE__ .hover\\:bg-blue-600:hover {--tw-bg-opacity: 1;background-color: rgb(37 99 235 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-700":[`__SCOPE__ .hover\\:bg-blue-700:hover {--tw-bg-opacity: 1;background-color: rgb(29 78 216 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-800":[`__SCOPE__ .hover\\:bg-blue-800:hover {--tw-bg-opacity: 1;background-color: rgb(30 64 175 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-900":[`__SCOPE__ .hover\\:bg-blue-900:hover {--tw-bg-opacity: 1;background-color: rgb(30 58 138 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-950":[`__SCOPE__ .hover\\:bg-blue-950:hover {--tw-bg-opacity: 1;background-color: rgb(23 37 84 / var(--tw-bg-opacity, 1))
}`],"hover:bg-blue-dark":[`__SCOPE__ .hover\\:bg-blue-dark:hover {--tw-bg-opacity: 1;background-color: rgb(27 68 200 / var(--tw-bg-opacity, 1))
}`],"hover:bg-current":[`__SCOPE__ .hover\\:bg-current:hover {background-color: currentColor
}`],"hover:bg-cyan-100":[`__SCOPE__ .hover\\:bg-cyan-100:hover {--tw-bg-opacity: 1;background-color: rgb(207 250 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-200":[`__SCOPE__ .hover\\:bg-cyan-200:hover {--tw-bg-opacity: 1;background-color: rgb(165 243 252 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-300":[`__SCOPE__ .hover\\:bg-cyan-300:hover {--tw-bg-opacity: 1;background-color: rgb(103 232 249 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-400":[`__SCOPE__ .hover\\:bg-cyan-400:hover {--tw-bg-opacity: 1;background-color: rgb(34 211 238 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-50":[`__SCOPE__ .hover\\:bg-cyan-50:hover {--tw-bg-opacity: 1;background-color: rgb(236 254 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-500":[`__SCOPE__ .hover\\:bg-cyan-500:hover {--tw-bg-opacity: 1;background-color: rgb(6 182 212 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-600":[`__SCOPE__ .hover\\:bg-cyan-600:hover {--tw-bg-opacity: 1;background-color: rgb(8 145 178 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-700":[`__SCOPE__ .hover\\:bg-cyan-700:hover {--tw-bg-opacity: 1;background-color: rgb(14 116 144 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-800":[`__SCOPE__ .hover\\:bg-cyan-800:hover {--tw-bg-opacity: 1;background-color: rgb(21 94 117 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-900":[`__SCOPE__ .hover\\:bg-cyan-900:hover {--tw-bg-opacity: 1;background-color: rgb(22 78 99 / var(--tw-bg-opacity, 1))
}`],"hover:bg-cyan-950":[`__SCOPE__ .hover\\:bg-cyan-950:hover {--tw-bg-opacity: 1;background-color: rgb(8 51 68 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-100":[`__SCOPE__ .hover\\:bg-emerald-100:hover {--tw-bg-opacity: 1;background-color: rgb(209 250 229 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-200":[`__SCOPE__ .hover\\:bg-emerald-200:hover {--tw-bg-opacity: 1;background-color: rgb(167 243 208 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-300":[`__SCOPE__ .hover\\:bg-emerald-300:hover {--tw-bg-opacity: 1;background-color: rgb(110 231 183 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-400":[`__SCOPE__ .hover\\:bg-emerald-400:hover {--tw-bg-opacity: 1;background-color: rgb(52 211 153 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-50":[`__SCOPE__ .hover\\:bg-emerald-50:hover {--tw-bg-opacity: 1;background-color: rgb(236 253 245 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-500":[`__SCOPE__ .hover\\:bg-emerald-500:hover {--tw-bg-opacity: 1;background-color: rgb(16 185 129 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-600":[`__SCOPE__ .hover\\:bg-emerald-600:hover {--tw-bg-opacity: 1;background-color: rgb(5 150 105 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-700":[`__SCOPE__ .hover\\:bg-emerald-700:hover {--tw-bg-opacity: 1;background-color: rgb(4 120 87 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-800":[`__SCOPE__ .hover\\:bg-emerald-800:hover {--tw-bg-opacity: 1;background-color: rgb(6 95 70 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-900":[`__SCOPE__ .hover\\:bg-emerald-900:hover {--tw-bg-opacity: 1;background-color: rgb(6 78 59 / var(--tw-bg-opacity, 1))
}`],"hover:bg-emerald-950":[`__SCOPE__ .hover\\:bg-emerald-950:hover {--tw-bg-opacity: 1;background-color: rgb(2 44 34 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-100":[`__SCOPE__ .hover\\:bg-gray-100:hover {--tw-bg-opacity: 1;background-color: rgb(243 244 246 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-200":[`__SCOPE__ .hover\\:bg-gray-200:hover {--tw-bg-opacity: 1;background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-300":[`__SCOPE__ .hover\\:bg-gray-300:hover {--tw-bg-opacity: 1;background-color: rgb(209 213 219 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-400":[`__SCOPE__ .hover\\:bg-gray-400:hover {--tw-bg-opacity: 1;background-color: rgb(156 163 175 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-50":[`__SCOPE__ .hover\\:bg-gray-50:hover {--tw-bg-opacity: 1;background-color: rgb(249 250 251 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-500":[`__SCOPE__ .hover\\:bg-gray-500:hover {--tw-bg-opacity: 1;background-color: rgb(107 114 128 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-600":[`__SCOPE__ .hover\\:bg-gray-600:hover {--tw-bg-opacity: 1;background-color: rgb(75 85 99 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-700":[`__SCOPE__ .hover\\:bg-gray-700:hover {--tw-bg-opacity: 1;background-color: rgb(55 65 81 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-800":[`__SCOPE__ .hover\\:bg-gray-800:hover {--tw-bg-opacity: 1;background-color: rgb(31 41 55 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-900":[`__SCOPE__ .hover\\:bg-gray-900:hover {--tw-bg-opacity: 1;background-color: rgb(17 24 39 / var(--tw-bg-opacity, 1))
}`],"hover:bg-gray-950":[`__SCOPE__ .hover\\:bg-gray-950:hover {--tw-bg-opacity: 1;background-color: rgb(3 7 18 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-100":[`__SCOPE__ .hover\\:bg-green-100:hover {--tw-bg-opacity: 1;background-color: rgb(220 252 231 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-200":[`__SCOPE__ .hover\\:bg-green-200:hover {--tw-bg-opacity: 1;background-color: rgb(187 247 208 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-300":[`__SCOPE__ .hover\\:bg-green-300:hover {--tw-bg-opacity: 1;background-color: rgb(134 239 172 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-400":[`__SCOPE__ .hover\\:bg-green-400:hover {--tw-bg-opacity: 1;background-color: rgb(74 222 128 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-50":[`__SCOPE__ .hover\\:bg-green-50:hover {--tw-bg-opacity: 1;background-color: rgb(240 253 244 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-500":[`__SCOPE__ .hover\\:bg-green-500:hover {--tw-bg-opacity: 1;background-color: rgb(34 197 94 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-600":[`__SCOPE__ .hover\\:bg-green-600:hover {--tw-bg-opacity: 1;background-color: rgb(22 163 74 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-700":[`__SCOPE__ .hover\\:bg-green-700:hover {--tw-bg-opacity: 1;background-color: rgb(21 128 61 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-800":[`__SCOPE__ .hover\\:bg-green-800:hover {--tw-bg-opacity: 1;background-color: rgb(22 101 52 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-900":[`__SCOPE__ .hover\\:bg-green-900:hover {--tw-bg-opacity: 1;background-color: rgb(20 83 45 / var(--tw-bg-opacity, 1))
}`],"hover:bg-green-950":[`__SCOPE__ .hover\\:bg-green-950:hover {--tw-bg-opacity: 1;background-color: rgb(5 46 22 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-100":[`__SCOPE__ .hover\\:bg-indigo-100:hover {--tw-bg-opacity: 1;background-color: rgb(224 231 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-200":[`__SCOPE__ .hover\\:bg-indigo-200:hover {--tw-bg-opacity: 1;background-color: rgb(199 210 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-300":[`__SCOPE__ .hover\\:bg-indigo-300:hover {--tw-bg-opacity: 1;background-color: rgb(165 180 252 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-400":[`__SCOPE__ .hover\\:bg-indigo-400:hover {--tw-bg-opacity: 1;background-color: rgb(129 140 248 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-50":[`__SCOPE__ .hover\\:bg-indigo-50:hover {--tw-bg-opacity: 1;background-color: rgb(238 242 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-500":[`__SCOPE__ .hover\\:bg-indigo-500:hover {--tw-bg-opacity: 1;background-color: rgb(99 102 241 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-600":[`__SCOPE__ .hover\\:bg-indigo-600:hover {--tw-bg-opacity: 1;background-color: rgb(79 70 229 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-700":[`__SCOPE__ .hover\\:bg-indigo-700:hover {--tw-bg-opacity: 1;background-color: rgb(67 56 202 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-800":[`__SCOPE__ .hover\\:bg-indigo-800:hover {--tw-bg-opacity: 1;background-color: rgb(55 48 163 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-900":[`__SCOPE__ .hover\\:bg-indigo-900:hover {--tw-bg-opacity: 1;background-color: rgb(49 46 129 / var(--tw-bg-opacity, 1))
}`],"hover:bg-indigo-950":[`__SCOPE__ .hover\\:bg-indigo-950:hover {--tw-bg-opacity: 1;background-color: rgb(30 27 75 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-100":[`__SCOPE__ .hover\\:bg-lime-100:hover {--tw-bg-opacity: 1;background-color: rgb(236 252 203 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-200":[`__SCOPE__ .hover\\:bg-lime-200:hover {--tw-bg-opacity: 1;background-color: rgb(217 249 157 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-300":[`__SCOPE__ .hover\\:bg-lime-300:hover {--tw-bg-opacity: 1;background-color: rgb(190 242 100 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-400":[`__SCOPE__ .hover\\:bg-lime-400:hover {--tw-bg-opacity: 1;background-color: rgb(163 230 53 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-50":[`__SCOPE__ .hover\\:bg-lime-50:hover {--tw-bg-opacity: 1;background-color: rgb(247 254 231 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-500":[`__SCOPE__ .hover\\:bg-lime-500:hover {--tw-bg-opacity: 1;background-color: rgb(132 204 22 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-600":[`__SCOPE__ .hover\\:bg-lime-600:hover {--tw-bg-opacity: 1;background-color: rgb(101 163 13 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-700":[`__SCOPE__ .hover\\:bg-lime-700:hover {--tw-bg-opacity: 1;background-color: rgb(77 124 15 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-800":[`__SCOPE__ .hover\\:bg-lime-800:hover {--tw-bg-opacity: 1;background-color: rgb(63 98 18 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-900":[`__SCOPE__ .hover\\:bg-lime-900:hover {--tw-bg-opacity: 1;background-color: rgb(54 83 20 / var(--tw-bg-opacity, 1))
}`],"hover:bg-lime-950":[`__SCOPE__ .hover\\:bg-lime-950:hover {--tw-bg-opacity: 1;background-color: rgb(26 46 5 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-100":[`__SCOPE__ .hover\\:bg-orange-100:hover {--tw-bg-opacity: 1;background-color: rgb(255 237 213 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-200":[`__SCOPE__ .hover\\:bg-orange-200:hover {--tw-bg-opacity: 1;background-color: rgb(254 215 170 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-300":[`__SCOPE__ .hover\\:bg-orange-300:hover {--tw-bg-opacity: 1;background-color: rgb(253 186 116 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-400":[`__SCOPE__ .hover\\:bg-orange-400:hover {--tw-bg-opacity: 1;background-color: rgb(251 146 60 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-50":[`__SCOPE__ .hover\\:bg-orange-50:hover {--tw-bg-opacity: 1;background-color: rgb(255 247 237 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-500":[`__SCOPE__ .hover\\:bg-orange-500:hover {--tw-bg-opacity: 1;background-color: rgb(249 115 22 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-600":[`__SCOPE__ .hover\\:bg-orange-600:hover {--tw-bg-opacity: 1;background-color: rgb(234 88 12 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-700":[`__SCOPE__ .hover\\:bg-orange-700:hover {--tw-bg-opacity: 1;background-color: rgb(194 65 12 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-800":[`__SCOPE__ .hover\\:bg-orange-800:hover {--tw-bg-opacity: 1;background-color: rgb(154 52 18 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-900":[`__SCOPE__ .hover\\:bg-orange-900:hover {--tw-bg-opacity: 1;background-color: rgb(124 45 18 / var(--tw-bg-opacity, 1))
}`],"hover:bg-orange-950":[`__SCOPE__ .hover\\:bg-orange-950:hover {--tw-bg-opacity: 1;background-color: rgb(67 20 7 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-100":[`__SCOPE__ .hover\\:bg-pink-100:hover {--tw-bg-opacity: 1;background-color: rgb(252 231 243 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-200":[`__SCOPE__ .hover\\:bg-pink-200:hover {--tw-bg-opacity: 1;background-color: rgb(251 207 232 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-300":[`__SCOPE__ .hover\\:bg-pink-300:hover {--tw-bg-opacity: 1;background-color: rgb(249 168 212 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-400":[`__SCOPE__ .hover\\:bg-pink-400:hover {--tw-bg-opacity: 1;background-color: rgb(244 114 182 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-50":[`__SCOPE__ .hover\\:bg-pink-50:hover {--tw-bg-opacity: 1;background-color: rgb(253 242 248 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-500":[`__SCOPE__ .hover\\:bg-pink-500:hover {--tw-bg-opacity: 1;background-color: rgb(236 72 153 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-600":[`__SCOPE__ .hover\\:bg-pink-600:hover {--tw-bg-opacity: 1;background-color: rgb(219 39 119 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-700":[`__SCOPE__ .hover\\:bg-pink-700:hover {--tw-bg-opacity: 1;background-color: rgb(190 24 93 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-800":[`__SCOPE__ .hover\\:bg-pink-800:hover {--tw-bg-opacity: 1;background-color: rgb(157 23 77 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-900":[`__SCOPE__ .hover\\:bg-pink-900:hover {--tw-bg-opacity: 1;background-color: rgb(131 24 67 / var(--tw-bg-opacity, 1))
}`],"hover:bg-pink-950":[`__SCOPE__ .hover\\:bg-pink-950:hover {--tw-bg-opacity: 1;background-color: rgb(80 7 36 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-100":[`__SCOPE__ .hover\\:bg-purple-100:hover {--tw-bg-opacity: 1;background-color: rgb(243 232 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-200":[`__SCOPE__ .hover\\:bg-purple-200:hover {--tw-bg-opacity: 1;background-color: rgb(233 213 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-300":[`__SCOPE__ .hover\\:bg-purple-300:hover {--tw-bg-opacity: 1;background-color: rgb(216 180 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-400":[`__SCOPE__ .hover\\:bg-purple-400:hover {--tw-bg-opacity: 1;background-color: rgb(192 132 252 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-50":[`__SCOPE__ .hover\\:bg-purple-50:hover {--tw-bg-opacity: 1;background-color: rgb(250 245 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-500":[`__SCOPE__ .hover\\:bg-purple-500:hover {--tw-bg-opacity: 1;background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-600":[`__SCOPE__ .hover\\:bg-purple-600:hover {--tw-bg-opacity: 1;background-color: rgb(147 51 234 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-700":[`__SCOPE__ .hover\\:bg-purple-700:hover {--tw-bg-opacity: 1;background-color: rgb(126 34 206 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-800":[`__SCOPE__ .hover\\:bg-purple-800:hover {--tw-bg-opacity: 1;background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-900":[`__SCOPE__ .hover\\:bg-purple-900:hover {--tw-bg-opacity: 1;background-color: rgb(88 28 135 / var(--tw-bg-opacity, 1))
}`],"hover:bg-purple-950":[`__SCOPE__ .hover\\:bg-purple-950:hover {--tw-bg-opacity: 1;background-color: rgb(59 7 100 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-100":[`__SCOPE__ .hover\\:bg-red-100:hover {--tw-bg-opacity: 1;background-color: rgb(254 226 226 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-200":[`__SCOPE__ .hover\\:bg-red-200:hover {--tw-bg-opacity: 1;background-color: rgb(254 202 202 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-300":[`__SCOPE__ .hover\\:bg-red-300:hover {--tw-bg-opacity: 1;background-color: rgb(252 165 165 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-400":[`__SCOPE__ .hover\\:bg-red-400:hover {--tw-bg-opacity: 1;background-color: rgb(248 113 113 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-50":[`__SCOPE__ .hover\\:bg-red-50:hover {--tw-bg-opacity: 1;background-color: rgb(254 242 242 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-500":[`__SCOPE__ .hover\\:bg-red-500:hover {--tw-bg-opacity: 1;background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-600":[`__SCOPE__ .hover\\:bg-red-600:hover {--tw-bg-opacity: 1;background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-700":[`__SCOPE__ .hover\\:bg-red-700:hover {--tw-bg-opacity: 1;background-color: rgb(185 28 28 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-800":[`__SCOPE__ .hover\\:bg-red-800:hover {--tw-bg-opacity: 1;background-color: rgb(153 27 27 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-900":[`__SCOPE__ .hover\\:bg-red-900:hover {--tw-bg-opacity: 1;background-color: rgb(127 29 29 / var(--tw-bg-opacity, 1))
}`],"hover:bg-red-950":[`__SCOPE__ .hover\\:bg-red-950:hover {--tw-bg-opacity: 1;background-color: rgb(69 10 10 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-100":[`__SCOPE__ .hover\\:bg-rose-100:hover {--tw-bg-opacity: 1;background-color: rgb(255 228 230 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-200":[`__SCOPE__ .hover\\:bg-rose-200:hover {--tw-bg-opacity: 1;background-color: rgb(254 205 211 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-300":[`__SCOPE__ .hover\\:bg-rose-300:hover {--tw-bg-opacity: 1;background-color: rgb(253 164 175 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-400":[`__SCOPE__ .hover\\:bg-rose-400:hover {--tw-bg-opacity: 1;background-color: rgb(251 113 133 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-50":[`__SCOPE__ .hover\\:bg-rose-50:hover {--tw-bg-opacity: 1;background-color: rgb(255 241 242 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-500":[`__SCOPE__ .hover\\:bg-rose-500:hover {--tw-bg-opacity: 1;background-color: rgb(244 63 94 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-600":[`__SCOPE__ .hover\\:bg-rose-600:hover {--tw-bg-opacity: 1;background-color: rgb(225 29 72 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-700":[`__SCOPE__ .hover\\:bg-rose-700:hover {--tw-bg-opacity: 1;background-color: rgb(190 18 60 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-800":[`__SCOPE__ .hover\\:bg-rose-800:hover {--tw-bg-opacity: 1;background-color: rgb(159 18 57 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-900":[`__SCOPE__ .hover\\:bg-rose-900:hover {--tw-bg-opacity: 1;background-color: rgb(136 19 55 / var(--tw-bg-opacity, 1))
}`],"hover:bg-rose-950":[`__SCOPE__ .hover\\:bg-rose-950:hover {--tw-bg-opacity: 1;background-color: rgb(76 5 25 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-100":[`__SCOPE__ .hover\\:bg-sky-100:hover {--tw-bg-opacity: 1;background-color: rgb(224 242 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-200":[`__SCOPE__ .hover\\:bg-sky-200:hover {--tw-bg-opacity: 1;background-color: rgb(186 230 253 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-300":[`__SCOPE__ .hover\\:bg-sky-300:hover {--tw-bg-opacity: 1;background-color: rgb(125 211 252 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-400":[`__SCOPE__ .hover\\:bg-sky-400:hover {--tw-bg-opacity: 1;background-color: rgb(56 189 248 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-50":[`__SCOPE__ .hover\\:bg-sky-50:hover {--tw-bg-opacity: 1;background-color: rgb(240 249 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-500":[`__SCOPE__ .hover\\:bg-sky-500:hover {--tw-bg-opacity: 1;background-color: rgb(14 165 233 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-600":[`__SCOPE__ .hover\\:bg-sky-600:hover {--tw-bg-opacity: 1;background-color: rgb(2 132 199 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-700":[`__SCOPE__ .hover\\:bg-sky-700:hover {--tw-bg-opacity: 1;background-color: rgb(3 105 161 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-800":[`__SCOPE__ .hover\\:bg-sky-800:hover {--tw-bg-opacity: 1;background-color: rgb(7 89 133 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-900":[`__SCOPE__ .hover\\:bg-sky-900:hover {--tw-bg-opacity: 1;background-color: rgb(12 74 110 / var(--tw-bg-opacity, 1))
}`],"hover:bg-sky-950":[`__SCOPE__ .hover\\:bg-sky-950:hover {--tw-bg-opacity: 1;background-color: rgb(8 47 73 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-100":[`__SCOPE__ .hover\\:bg-slate-100:hover {--tw-bg-opacity: 1;background-color: rgb(241 245 249 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-200":[`__SCOPE__ .hover\\:bg-slate-200:hover {--tw-bg-opacity: 1;background-color: rgb(226 232 240 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-300":[`__SCOPE__ .hover\\:bg-slate-300:hover {--tw-bg-opacity: 1;background-color: rgb(203 213 225 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-400":[`__SCOPE__ .hover\\:bg-slate-400:hover {--tw-bg-opacity: 1;background-color: rgb(148 163 184 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-50":[`__SCOPE__ .hover\\:bg-slate-50:hover {--tw-bg-opacity: 1;background-color: rgb(248 250 252 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-500":[`__SCOPE__ .hover\\:bg-slate-500:hover {--tw-bg-opacity: 1;background-color: rgb(100 116 139 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-600":[`__SCOPE__ .hover\\:bg-slate-600:hover {--tw-bg-opacity: 1;background-color: rgb(71 85 105 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-700":[`__SCOPE__ .hover\\:bg-slate-700:hover {--tw-bg-opacity: 1;background-color: rgb(51 65 85 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-800":[`__SCOPE__ .hover\\:bg-slate-800:hover {--tw-bg-opacity: 1;background-color: rgb(30 41 59 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-900":[`__SCOPE__ .hover\\:bg-slate-900:hover {--tw-bg-opacity: 1;background-color: rgb(15 23 42 / var(--tw-bg-opacity, 1))
}`],"hover:bg-slate-950":[`__SCOPE__ .hover\\:bg-slate-950:hover {--tw-bg-opacity: 1;background-color: rgb(2 6 23 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-100":[`__SCOPE__ .hover\\:bg-stone-100:hover {--tw-bg-opacity: 1;background-color: rgb(245 245 244 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-200":[`__SCOPE__ .hover\\:bg-stone-200:hover {--tw-bg-opacity: 1;background-color: rgb(231 229 228 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-300":[`__SCOPE__ .hover\\:bg-stone-300:hover {--tw-bg-opacity: 1;background-color: rgb(214 211 209 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-400":[`__SCOPE__ .hover\\:bg-stone-400:hover {--tw-bg-opacity: 1;background-color: rgb(168 162 158 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-50":[`__SCOPE__ .hover\\:bg-stone-50:hover {--tw-bg-opacity: 1;background-color: rgb(250 250 249 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-500":[`__SCOPE__ .hover\\:bg-stone-500:hover {--tw-bg-opacity: 1;background-color: rgb(120 113 108 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-600":[`__SCOPE__ .hover\\:bg-stone-600:hover {--tw-bg-opacity: 1;background-color: rgb(87 83 78 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-700":[`__SCOPE__ .hover\\:bg-stone-700:hover {--tw-bg-opacity: 1;background-color: rgb(68 64 60 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-800":[`__SCOPE__ .hover\\:bg-stone-800:hover {--tw-bg-opacity: 1;background-color: rgb(41 37 36 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-900":[`__SCOPE__ .hover\\:bg-stone-900:hover {--tw-bg-opacity: 1;background-color: rgb(28 25 23 / var(--tw-bg-opacity, 1))
}`],"hover:bg-stone-950":[`__SCOPE__ .hover\\:bg-stone-950:hover {--tw-bg-opacity: 1;background-color: rgb(12 10 9 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-100":[`__SCOPE__ .hover\\:bg-teal-100:hover {--tw-bg-opacity: 1;background-color: rgb(204 251 241 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-200":[`__SCOPE__ .hover\\:bg-teal-200:hover {--tw-bg-opacity: 1;background-color: rgb(153 246 228 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-300":[`__SCOPE__ .hover\\:bg-teal-300:hover {--tw-bg-opacity: 1;background-color: rgb(94 234 212 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-400":[`__SCOPE__ .hover\\:bg-teal-400:hover {--tw-bg-opacity: 1;background-color: rgb(45 212 191 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-50":[`__SCOPE__ .hover\\:bg-teal-50:hover {--tw-bg-opacity: 1;background-color: rgb(240 253 250 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-500":[`__SCOPE__ .hover\\:bg-teal-500:hover {--tw-bg-opacity: 1;background-color: rgb(20 184 166 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-600":[`__SCOPE__ .hover\\:bg-teal-600:hover {--tw-bg-opacity: 1;background-color: rgb(13 148 136 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-700":[`__SCOPE__ .hover\\:bg-teal-700:hover {--tw-bg-opacity: 1;background-color: rgb(15 118 110 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-800":[`__SCOPE__ .hover\\:bg-teal-800:hover {--tw-bg-opacity: 1;background-color: rgb(17 94 89 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-900":[`__SCOPE__ .hover\\:bg-teal-900:hover {--tw-bg-opacity: 1;background-color: rgb(19 78 74 / var(--tw-bg-opacity, 1))
}`],"hover:bg-teal-950":[`__SCOPE__ .hover\\:bg-teal-950:hover {--tw-bg-opacity: 1;background-color: rgb(4 47 46 / var(--tw-bg-opacity, 1))
}`],"hover:bg-transparent":[`__SCOPE__ .hover\\:bg-transparent:hover {background-color: transparent
}`],"hover:bg-violet-100":[`__SCOPE__ .hover\\:bg-violet-100:hover {--tw-bg-opacity: 1;background-color: rgb(237 233 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-200":[`__SCOPE__ .hover\\:bg-violet-200:hover {--tw-bg-opacity: 1;background-color: rgb(221 214 254 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-300":[`__SCOPE__ .hover\\:bg-violet-300:hover {--tw-bg-opacity: 1;background-color: rgb(196 181 253 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-400":[`__SCOPE__ .hover\\:bg-violet-400:hover {--tw-bg-opacity: 1;background-color: rgb(167 139 250 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-50":[`__SCOPE__ .hover\\:bg-violet-50:hover {--tw-bg-opacity: 1;background-color: rgb(245 243 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-500":[`__SCOPE__ .hover\\:bg-violet-500:hover {--tw-bg-opacity: 1;background-color: rgb(139 92 246 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-600":[`__SCOPE__ .hover\\:bg-violet-600:hover {--tw-bg-opacity: 1;background-color: rgb(124 58 237 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-700":[`__SCOPE__ .hover\\:bg-violet-700:hover {--tw-bg-opacity: 1;background-color: rgb(109 40 217 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-800":[`__SCOPE__ .hover\\:bg-violet-800:hover {--tw-bg-opacity: 1;background-color: rgb(91 33 182 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-900":[`__SCOPE__ .hover\\:bg-violet-900:hover {--tw-bg-opacity: 1;background-color: rgb(76 29 149 / var(--tw-bg-opacity, 1))
}`],"hover:bg-violet-950":[`__SCOPE__ .hover\\:bg-violet-950:hover {--tw-bg-opacity: 1;background-color: rgb(46 16 101 / var(--tw-bg-opacity, 1))
}`],"hover:bg-white":[`__SCOPE__ .hover\\:bg-white:hover {--tw-bg-opacity: 1;background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-100":[`__SCOPE__ .hover\\:bg-yellow-100:hover {--tw-bg-opacity: 1;background-color: rgb(254 249 195 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-200":[`__SCOPE__ .hover\\:bg-yellow-200:hover {--tw-bg-opacity: 1;background-color: rgb(254 240 138 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-300":[`__SCOPE__ .hover\\:bg-yellow-300:hover {--tw-bg-opacity: 1;background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-400":[`__SCOPE__ .hover\\:bg-yellow-400:hover {--tw-bg-opacity: 1;background-color: rgb(250 204 21 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-50":[`__SCOPE__ .hover\\:bg-yellow-50:hover {--tw-bg-opacity: 1;background-color: rgb(254 252 232 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-500":[`__SCOPE__ .hover\\:bg-yellow-500:hover {--tw-bg-opacity: 1;background-color: rgb(234 179 8 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-600":[`__SCOPE__ .hover\\:bg-yellow-600:hover {--tw-bg-opacity: 1;background-color: rgb(202 138 4 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-700":[`__SCOPE__ .hover\\:bg-yellow-700:hover {--tw-bg-opacity: 1;background-color: rgb(161 98 7 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-800":[`__SCOPE__ .hover\\:bg-yellow-800:hover {--tw-bg-opacity: 1;background-color: rgb(133 77 14 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-900":[`__SCOPE__ .hover\\:bg-yellow-900:hover {--tw-bg-opacity: 1;background-color: rgb(113 63 18 / var(--tw-bg-opacity, 1))
}`],"hover:bg-yellow-950":[`__SCOPE__ .hover\\:bg-yellow-950:hover {--tw-bg-opacity: 1;background-color: rgb(66 32 6 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-100":[`__SCOPE__ .hover\\:bg-zinc-100:hover {--tw-bg-opacity: 1;background-color: rgb(244 244 245 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-200":[`__SCOPE__ .hover\\:bg-zinc-200:hover {--tw-bg-opacity: 1;background-color: rgb(228 228 231 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-300":[`__SCOPE__ .hover\\:bg-zinc-300:hover {--tw-bg-opacity: 1;background-color: rgb(212 212 216 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-400":[`__SCOPE__ .hover\\:bg-zinc-400:hover {--tw-bg-opacity: 1;background-color: rgb(161 161 170 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-50":[`__SCOPE__ .hover\\:bg-zinc-50:hover {--tw-bg-opacity: 1;background-color: rgb(250 250 250 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-500":[`__SCOPE__ .hover\\:bg-zinc-500:hover {--tw-bg-opacity: 1;background-color: rgb(113 113 122 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-600":[`__SCOPE__ .hover\\:bg-zinc-600:hover {--tw-bg-opacity: 1;background-color: rgb(82 82 91 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-700":[`__SCOPE__ .hover\\:bg-zinc-700:hover {--tw-bg-opacity: 1;background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-800":[`__SCOPE__ .hover\\:bg-zinc-800:hover {--tw-bg-opacity: 1;background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-900":[`__SCOPE__ .hover\\:bg-zinc-900:hover {--tw-bg-opacity: 1;background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1))
}`],"hover:bg-zinc-950":[`__SCOPE__ .hover\\:bg-zinc-950:hover {--tw-bg-opacity: 1;background-color: rgb(9 9 11 / var(--tw-bg-opacity, 1))
}`],"hover:text-left":[`__SCOPE__ .hover\\:text-left:hover {text-align: left
}`],"hover:text-center":[`__SCOPE__ .hover\\:text-center:hover {text-align: center
}`],"hover:text-right":[`__SCOPE__ .hover\\:text-right:hover {text-align: right
}`],"hover:text-2xl":[`__SCOPE__ .hover\\:text-2xl:hover {font-size: 1.5rem;line-height: 2rem
}`],"hover:text-3xl":[`__SCOPE__ .hover\\:text-3xl:hover {font-size: 1.875rem;line-height: 2.25rem
}`],"hover:text-4xl":[`__SCOPE__ .hover\\:text-4xl:hover {font-size: 2.25rem;line-height: 2.5rem
}`],"hover:text-5xl":[`__SCOPE__ .hover\\:text-5xl:hover {font-size: 3rem;line-height: 1
}`],"hover:text-6xl":[`__SCOPE__ .hover\\:text-6xl:hover {font-size: 3.75rem;line-height: 1
}`],"hover:text-base":[`__SCOPE__ .hover\\:text-base:hover {font-size: 1rem;line-height: 1.5rem
}`],"hover:text-lg":[`__SCOPE__ .hover\\:text-lg:hover {font-size: 1.125rem;line-height: 1.75rem
}`],"hover:text-sm":[`__SCOPE__ .hover\\:text-sm:hover {font-size: 0.875rem;line-height: 1.25rem
}`],"hover:text-xl":[`__SCOPE__ .hover\\:text-xl:hover {font-size: 1.25rem;line-height: 1.75rem
}`],"hover:text-xs":[`__SCOPE__ .hover\\:text-xs:hover {font-size: 0.75rem;line-height: 1rem
}`],"hover:text-amber-100":[`__SCOPE__ .hover\\:text-amber-100:hover {--tw-text-opacity: 1;color: rgb(254 243 199 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-200":[`__SCOPE__ .hover\\:text-amber-200:hover {--tw-text-opacity: 1;color: rgb(253 230 138 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-300":[`__SCOPE__ .hover\\:text-amber-300:hover {--tw-text-opacity: 1;color: rgb(252 211 77 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-400":[`__SCOPE__ .hover\\:text-amber-400:hover {--tw-text-opacity: 1;color: rgb(251 191 36 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-50":[`__SCOPE__ .hover\\:text-amber-50:hover {--tw-text-opacity: 1;color: rgb(255 251 235 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-500":[`__SCOPE__ .hover\\:text-amber-500:hover {--tw-text-opacity: 1;color: rgb(245 158 11 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-600":[`__SCOPE__ .hover\\:text-amber-600:hover {--tw-text-opacity: 1;color: rgb(217 119 6 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-700":[`__SCOPE__ .hover\\:text-amber-700:hover {--tw-text-opacity: 1;color: rgb(180 83 9 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-800":[`__SCOPE__ .hover\\:text-amber-800:hover {--tw-text-opacity: 1;color: rgb(146 64 14 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-900":[`__SCOPE__ .hover\\:text-amber-900:hover {--tw-text-opacity: 1;color: rgb(120 53 15 / var(--tw-text-opacity, 1))
}`],"hover:text-amber-950":[`__SCOPE__ .hover\\:text-amber-950:hover {--tw-text-opacity: 1;color: rgb(69 26 3 / var(--tw-text-opacity, 1))
}`],"hover:text-black":[`__SCOPE__ .hover\\:text-black:hover {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-100":[`__SCOPE__ .hover\\:text-blue-100:hover {--tw-text-opacity: 1;color: rgb(219 234 254 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-200":[`__SCOPE__ .hover\\:text-blue-200:hover {--tw-text-opacity: 1;color: rgb(191 219 254 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-300":[`__SCOPE__ .hover\\:text-blue-300:hover {--tw-text-opacity: 1;color: rgb(147 197 253 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-400":[`__SCOPE__ .hover\\:text-blue-400:hover {--tw-text-opacity: 1;color: rgb(96 165 250 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-50":[`__SCOPE__ .hover\\:text-blue-50:hover {--tw-text-opacity: 1;color: rgb(239 246 255 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-500":[`__SCOPE__ .hover\\:text-blue-500:hover {--tw-text-opacity: 1;color: rgb(59 130 246 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-600":[`__SCOPE__ .hover\\:text-blue-600:hover {--tw-text-opacity: 1;color: rgb(37 99 235 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-700":[`__SCOPE__ .hover\\:text-blue-700:hover {--tw-text-opacity: 1;color: rgb(29 78 216 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-800":[`__SCOPE__ .hover\\:text-blue-800:hover {--tw-text-opacity: 1;color: rgb(30 64 175 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-900":[`__SCOPE__ .hover\\:text-blue-900:hover {--tw-text-opacity: 1;color: rgb(30 58 138 / var(--tw-text-opacity, 1))
}`],"hover:text-blue-950":[`__SCOPE__ .hover\\:text-blue-950:hover {--tw-text-opacity: 1;color: rgb(23 37 84 / var(--tw-text-opacity, 1))
}`],"hover:text-current":[`__SCOPE__ .hover\\:text-current:hover {color: currentColor
}`],"hover:text-cyan-100":[`__SCOPE__ .hover\\:text-cyan-100:hover {--tw-text-opacity: 1;color: rgb(207 250 254 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-200":[`__SCOPE__ .hover\\:text-cyan-200:hover {--tw-text-opacity: 1;color: rgb(165 243 252 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-300":[`__SCOPE__ .hover\\:text-cyan-300:hover {--tw-text-opacity: 1;color: rgb(103 232 249 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-400":[`__SCOPE__ .hover\\:text-cyan-400:hover {--tw-text-opacity: 1;color: rgb(34 211 238 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-50":[`__SCOPE__ .hover\\:text-cyan-50:hover {--tw-text-opacity: 1;color: rgb(236 254 255 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-500":[`__SCOPE__ .hover\\:text-cyan-500:hover {--tw-text-opacity: 1;color: rgb(6 182 212 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-600":[`__SCOPE__ .hover\\:text-cyan-600:hover {--tw-text-opacity: 1;color: rgb(8 145 178 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-700":[`__SCOPE__ .hover\\:text-cyan-700:hover {--tw-text-opacity: 1;color: rgb(14 116 144 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-800":[`__SCOPE__ .hover\\:text-cyan-800:hover {--tw-text-opacity: 1;color: rgb(21 94 117 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-900":[`__SCOPE__ .hover\\:text-cyan-900:hover {--tw-text-opacity: 1;color: rgb(22 78 99 / var(--tw-text-opacity, 1))
}`],"hover:text-cyan-950":[`__SCOPE__ .hover\\:text-cyan-950:hover {--tw-text-opacity: 1;color: rgb(8 51 68 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-100":[`__SCOPE__ .hover\\:text-emerald-100:hover {--tw-text-opacity: 1;color: rgb(209 250 229 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-200":[`__SCOPE__ .hover\\:text-emerald-200:hover {--tw-text-opacity: 1;color: rgb(167 243 208 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-300":[`__SCOPE__ .hover\\:text-emerald-300:hover {--tw-text-opacity: 1;color: rgb(110 231 183 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-400":[`__SCOPE__ .hover\\:text-emerald-400:hover {--tw-text-opacity: 1;color: rgb(52 211 153 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-50":[`__SCOPE__ .hover\\:text-emerald-50:hover {--tw-text-opacity: 1;color: rgb(236 253 245 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-500":[`__SCOPE__ .hover\\:text-emerald-500:hover {--tw-text-opacity: 1;color: rgb(16 185 129 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-600":[`__SCOPE__ .hover\\:text-emerald-600:hover {--tw-text-opacity: 1;color: rgb(5 150 105 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-700":[`__SCOPE__ .hover\\:text-emerald-700:hover {--tw-text-opacity: 1;color: rgb(4 120 87 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-800":[`__SCOPE__ .hover\\:text-emerald-800:hover {--tw-text-opacity: 1;color: rgb(6 95 70 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-900":[`__SCOPE__ .hover\\:text-emerald-900:hover {--tw-text-opacity: 1;color: rgb(6 78 59 / var(--tw-text-opacity, 1))
}`],"hover:text-emerald-950":[`__SCOPE__ .hover\\:text-emerald-950:hover {--tw-text-opacity: 1;color: rgb(2 44 34 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-100":[`__SCOPE__ .hover\\:text-gray-100:hover {--tw-text-opacity: 1;color: rgb(243 244 246 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-200":[`__SCOPE__ .hover\\:text-gray-200:hover {--tw-text-opacity: 1;color: rgb(229 231 235 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-300":[`__SCOPE__ .hover\\:text-gray-300:hover {--tw-text-opacity: 1;color: rgb(209 213 219 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-400":[`__SCOPE__ .hover\\:text-gray-400:hover {--tw-text-opacity: 1;color: rgb(156 163 175 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-50":[`__SCOPE__ .hover\\:text-gray-50:hover {--tw-text-opacity: 1;color: rgb(249 250 251 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-500":[`__SCOPE__ .hover\\:text-gray-500:hover {--tw-text-opacity: 1;color: rgb(107 114 128 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-600":[`__SCOPE__ .hover\\:text-gray-600:hover {--tw-text-opacity: 1;color: rgb(75 85 99 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-700":[`__SCOPE__ .hover\\:text-gray-700:hover {--tw-text-opacity: 1;color: rgb(55 65 81 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-800":[`__SCOPE__ .hover\\:text-gray-800:hover {--tw-text-opacity: 1;color: rgb(31 41 55 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-900":[`__SCOPE__ .hover\\:text-gray-900:hover {--tw-text-opacity: 1;color: rgb(17 24 39 / var(--tw-text-opacity, 1))
}`],"hover:text-gray-950":[`__SCOPE__ .hover\\:text-gray-950:hover {--tw-text-opacity: 1;color: rgb(3 7 18 / var(--tw-text-opacity, 1))
}`],"hover:text-green-100":[`__SCOPE__ .hover\\:text-green-100:hover {--tw-text-opacity: 1;color: rgb(220 252 231 / var(--tw-text-opacity, 1))
}`],"hover:text-green-200":[`__SCOPE__ .hover\\:text-green-200:hover {--tw-text-opacity: 1;color: rgb(187 247 208 / var(--tw-text-opacity, 1))
}`],"hover:text-green-300":[`__SCOPE__ .hover\\:text-green-300:hover {--tw-text-opacity: 1;color: rgb(134 239 172 / var(--tw-text-opacity, 1))
}`],"hover:text-green-400":[`__SCOPE__ .hover\\:text-green-400:hover {--tw-text-opacity: 1;color: rgb(74 222 128 / var(--tw-text-opacity, 1))
}`],"hover:text-green-50":[`__SCOPE__ .hover\\:text-green-50:hover {--tw-text-opacity: 1;color: rgb(240 253 244 / var(--tw-text-opacity, 1))
}`],"hover:text-green-500":[`__SCOPE__ .hover\\:text-green-500:hover {--tw-text-opacity: 1;color: rgb(34 197 94 / var(--tw-text-opacity, 1))
}`],"hover:text-green-600":[`__SCOPE__ .hover\\:text-green-600:hover {--tw-text-opacity: 1;color: rgb(22 163 74 / var(--tw-text-opacity, 1))
}`],"hover:text-green-700":[`__SCOPE__ .hover\\:text-green-700:hover {--tw-text-opacity: 1;color: rgb(21 128 61 / var(--tw-text-opacity, 1))
}`],"hover:text-green-800":[`__SCOPE__ .hover\\:text-green-800:hover {--tw-text-opacity: 1;color: rgb(22 101 52 / var(--tw-text-opacity, 1))
}`],"hover:text-green-900":[`__SCOPE__ .hover\\:text-green-900:hover {--tw-text-opacity: 1;color: rgb(20 83 45 / var(--tw-text-opacity, 1))
}`],"hover:text-green-950":[`__SCOPE__ .hover\\:text-green-950:hover {--tw-text-opacity: 1;color: rgb(5 46 22 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-100":[`__SCOPE__ .hover\\:text-indigo-100:hover {--tw-text-opacity: 1;color: rgb(224 231 255 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-200":[`__SCOPE__ .hover\\:text-indigo-200:hover {--tw-text-opacity: 1;color: rgb(199 210 254 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-300":[`__SCOPE__ .hover\\:text-indigo-300:hover {--tw-text-opacity: 1;color: rgb(165 180 252 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-400":[`__SCOPE__ .hover\\:text-indigo-400:hover {--tw-text-opacity: 1;color: rgb(129 140 248 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-50":[`__SCOPE__ .hover\\:text-indigo-50:hover {--tw-text-opacity: 1;color: rgb(238 242 255 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-500":[`__SCOPE__ .hover\\:text-indigo-500:hover {--tw-text-opacity: 1;color: rgb(99 102 241 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-600":[`__SCOPE__ .hover\\:text-indigo-600:hover {--tw-text-opacity: 1;color: rgb(79 70 229 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-700":[`__SCOPE__ .hover\\:text-indigo-700:hover {--tw-text-opacity: 1;color: rgb(67 56 202 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-800":[`__SCOPE__ .hover\\:text-indigo-800:hover {--tw-text-opacity: 1;color: rgb(55 48 163 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-900":[`__SCOPE__ .hover\\:text-indigo-900:hover {--tw-text-opacity: 1;color: rgb(49 46 129 / var(--tw-text-opacity, 1))
}`],"hover:text-indigo-950":[`__SCOPE__ .hover\\:text-indigo-950:hover {--tw-text-opacity: 1;color: rgb(30 27 75 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-100":[`__SCOPE__ .hover\\:text-lime-100:hover {--tw-text-opacity: 1;color: rgb(236 252 203 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-200":[`__SCOPE__ .hover\\:text-lime-200:hover {--tw-text-opacity: 1;color: rgb(217 249 157 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-300":[`__SCOPE__ .hover\\:text-lime-300:hover {--tw-text-opacity: 1;color: rgb(190 242 100 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-400":[`__SCOPE__ .hover\\:text-lime-400:hover {--tw-text-opacity: 1;color: rgb(163 230 53 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-50":[`__SCOPE__ .hover\\:text-lime-50:hover {--tw-text-opacity: 1;color: rgb(247 254 231 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-500":[`__SCOPE__ .hover\\:text-lime-500:hover {--tw-text-opacity: 1;color: rgb(132 204 22 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-600":[`__SCOPE__ .hover\\:text-lime-600:hover {--tw-text-opacity: 1;color: rgb(101 163 13 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-700":[`__SCOPE__ .hover\\:text-lime-700:hover {--tw-text-opacity: 1;color: rgb(77 124 15 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-800":[`__SCOPE__ .hover\\:text-lime-800:hover {--tw-text-opacity: 1;color: rgb(63 98 18 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-900":[`__SCOPE__ .hover\\:text-lime-900:hover {--tw-text-opacity: 1;color: rgb(54 83 20 / var(--tw-text-opacity, 1))
}`],"hover:text-lime-950":[`__SCOPE__ .hover\\:text-lime-950:hover {--tw-text-opacity: 1;color: rgb(26 46 5 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-100":[`__SCOPE__ .hover\\:text-orange-100:hover {--tw-text-opacity: 1;color: rgb(255 237 213 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-200":[`__SCOPE__ .hover\\:text-orange-200:hover {--tw-text-opacity: 1;color: rgb(254 215 170 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-300":[`__SCOPE__ .hover\\:text-orange-300:hover {--tw-text-opacity: 1;color: rgb(253 186 116 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-400":[`__SCOPE__ .hover\\:text-orange-400:hover {--tw-text-opacity: 1;color: rgb(251 146 60 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-50":[`__SCOPE__ .hover\\:text-orange-50:hover {--tw-text-opacity: 1;color: rgb(255 247 237 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-500":[`__SCOPE__ .hover\\:text-orange-500:hover {--tw-text-opacity: 1;color: rgb(249 115 22 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-600":[`__SCOPE__ .hover\\:text-orange-600:hover {--tw-text-opacity: 1;color: rgb(234 88 12 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-700":[`__SCOPE__ .hover\\:text-orange-700:hover {--tw-text-opacity: 1;color: rgb(194 65 12 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-800":[`__SCOPE__ .hover\\:text-orange-800:hover {--tw-text-opacity: 1;color: rgb(154 52 18 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-900":[`__SCOPE__ .hover\\:text-orange-900:hover {--tw-text-opacity: 1;color: rgb(124 45 18 / var(--tw-text-opacity, 1))
}`],"hover:text-orange-950":[`__SCOPE__ .hover\\:text-orange-950:hover {--tw-text-opacity: 1;color: rgb(67 20 7 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-100":[`__SCOPE__ .hover\\:text-pink-100:hover {--tw-text-opacity: 1;color: rgb(252 231 243 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-200":[`__SCOPE__ .hover\\:text-pink-200:hover {--tw-text-opacity: 1;color: rgb(251 207 232 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-300":[`__SCOPE__ .hover\\:text-pink-300:hover {--tw-text-opacity: 1;color: rgb(249 168 212 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-400":[`__SCOPE__ .hover\\:text-pink-400:hover {--tw-text-opacity: 1;color: rgb(244 114 182 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-50":[`__SCOPE__ .hover\\:text-pink-50:hover {--tw-text-opacity: 1;color: rgb(253 242 248 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-500":[`__SCOPE__ .hover\\:text-pink-500:hover {--tw-text-opacity: 1;color: rgb(236 72 153 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-600":[`__SCOPE__ .hover\\:text-pink-600:hover {--tw-text-opacity: 1;color: rgb(219 39 119 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-700":[`__SCOPE__ .hover\\:text-pink-700:hover {--tw-text-opacity: 1;color: rgb(190 24 93 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-800":[`__SCOPE__ .hover\\:text-pink-800:hover {--tw-text-opacity: 1;color: rgb(157 23 77 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-900":[`__SCOPE__ .hover\\:text-pink-900:hover {--tw-text-opacity: 1;color: rgb(131 24 67 / var(--tw-text-opacity, 1))
}`],"hover:text-pink-950":[`__SCOPE__ .hover\\:text-pink-950:hover {--tw-text-opacity: 1;color: rgb(80 7 36 / var(--tw-text-opacity, 1))
}`],"hover:text-primary":[`__SCOPE__ .hover\\:text-primary:hover {--tw-text-opacity: 1;color: rgb(55 88 249 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-100":[`__SCOPE__ .hover\\:text-purple-100:hover {--tw-text-opacity: 1;color: rgb(243 232 255 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-200":[`__SCOPE__ .hover\\:text-purple-200:hover {--tw-text-opacity: 1;color: rgb(233 213 255 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-300":[`__SCOPE__ .hover\\:text-purple-300:hover {--tw-text-opacity: 1;color: rgb(216 180 254 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-400":[`__SCOPE__ .hover\\:text-purple-400:hover {--tw-text-opacity: 1;color: rgb(192 132 252 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-50":[`__SCOPE__ .hover\\:text-purple-50:hover {--tw-text-opacity: 1;color: rgb(250 245 255 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-500":[`__SCOPE__ .hover\\:text-purple-500:hover {--tw-text-opacity: 1;color: rgb(168 85 247 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-600":[`__SCOPE__ .hover\\:text-purple-600:hover {--tw-text-opacity: 1;color: rgb(147 51 234 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-700":[`__SCOPE__ .hover\\:text-purple-700:hover {--tw-text-opacity: 1;color: rgb(126 34 206 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-800":[`__SCOPE__ .hover\\:text-purple-800:hover {--tw-text-opacity: 1;color: rgb(107 33 168 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-900":[`__SCOPE__ .hover\\:text-purple-900:hover {--tw-text-opacity: 1;color: rgb(88 28 135 / var(--tw-text-opacity, 1))
}`],"hover:text-purple-950":[`__SCOPE__ .hover\\:text-purple-950:hover {--tw-text-opacity: 1;color: rgb(59 7 100 / var(--tw-text-opacity, 1))
}`],"hover:text-red-100":[`__SCOPE__ .hover\\:text-red-100:hover {--tw-text-opacity: 1;color: rgb(254 226 226 / var(--tw-text-opacity, 1))
}`],"hover:text-red-200":[`__SCOPE__ .hover\\:text-red-200:hover {--tw-text-opacity: 1;color: rgb(254 202 202 / var(--tw-text-opacity, 1))
}`],"hover:text-red-300":[`__SCOPE__ .hover\\:text-red-300:hover {--tw-text-opacity: 1;color: rgb(252 165 165 / var(--tw-text-opacity, 1))
}`],"hover:text-red-400":[`__SCOPE__ .hover\\:text-red-400:hover {--tw-text-opacity: 1;color: rgb(248 113 113 / var(--tw-text-opacity, 1))
}`],"hover:text-red-50":[`__SCOPE__ .hover\\:text-red-50:hover {--tw-text-opacity: 1;color: rgb(254 242 242 / var(--tw-text-opacity, 1))
}`],"hover:text-red-500":[`__SCOPE__ .hover\\:text-red-500:hover {--tw-text-opacity: 1;color: rgb(239 68 68 / var(--tw-text-opacity, 1))
}`],"hover:text-red-600":[`__SCOPE__ .hover\\:text-red-600:hover {--tw-text-opacity: 1;color: rgb(220 38 38 / var(--tw-text-opacity, 1))
}`],"hover:text-red-700":[`__SCOPE__ .hover\\:text-red-700:hover {--tw-text-opacity: 1;color: rgb(185 28 28 / var(--tw-text-opacity, 1))
}`],"hover:text-red-800":[`__SCOPE__ .hover\\:text-red-800:hover {--tw-text-opacity: 1;color: rgb(153 27 27 / var(--tw-text-opacity, 1))
}`],"hover:text-red-900":[`__SCOPE__ .hover\\:text-red-900:hover {--tw-text-opacity: 1;color: rgb(127 29 29 / var(--tw-text-opacity, 1))
}`],"hover:text-red-950":[`__SCOPE__ .hover\\:text-red-950:hover {--tw-text-opacity: 1;color: rgb(69 10 10 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-100":[`__SCOPE__ .hover\\:text-rose-100:hover {--tw-text-opacity: 1;color: rgb(255 228 230 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-200":[`__SCOPE__ .hover\\:text-rose-200:hover {--tw-text-opacity: 1;color: rgb(254 205 211 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-300":[`__SCOPE__ .hover\\:text-rose-300:hover {--tw-text-opacity: 1;color: rgb(253 164 175 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-400":[`__SCOPE__ .hover\\:text-rose-400:hover {--tw-text-opacity: 1;color: rgb(251 113 133 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-50":[`__SCOPE__ .hover\\:text-rose-50:hover {--tw-text-opacity: 1;color: rgb(255 241 242 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-500":[`__SCOPE__ .hover\\:text-rose-500:hover {--tw-text-opacity: 1;color: rgb(244 63 94 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-600":[`__SCOPE__ .hover\\:text-rose-600:hover {--tw-text-opacity: 1;color: rgb(225 29 72 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-700":[`__SCOPE__ .hover\\:text-rose-700:hover {--tw-text-opacity: 1;color: rgb(190 18 60 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-800":[`__SCOPE__ .hover\\:text-rose-800:hover {--tw-text-opacity: 1;color: rgb(159 18 57 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-900":[`__SCOPE__ .hover\\:text-rose-900:hover {--tw-text-opacity: 1;color: rgb(136 19 55 / var(--tw-text-opacity, 1))
}`],"hover:text-rose-950":[`__SCOPE__ .hover\\:text-rose-950:hover {--tw-text-opacity: 1;color: rgb(76 5 25 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-100":[`__SCOPE__ .hover\\:text-sky-100:hover {--tw-text-opacity: 1;color: rgb(224 242 254 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-200":[`__SCOPE__ .hover\\:text-sky-200:hover {--tw-text-opacity: 1;color: rgb(186 230 253 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-300":[`__SCOPE__ .hover\\:text-sky-300:hover {--tw-text-opacity: 1;color: rgb(125 211 252 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-400":[`__SCOPE__ .hover\\:text-sky-400:hover {--tw-text-opacity: 1;color: rgb(56 189 248 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-50":[`__SCOPE__ .hover\\:text-sky-50:hover {--tw-text-opacity: 1;color: rgb(240 249 255 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-500":[`__SCOPE__ .hover\\:text-sky-500:hover {--tw-text-opacity: 1;color: rgb(14 165 233 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-600":[`__SCOPE__ .hover\\:text-sky-600:hover {--tw-text-opacity: 1;color: rgb(2 132 199 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-700":[`__SCOPE__ .hover\\:text-sky-700:hover {--tw-text-opacity: 1;color: rgb(3 105 161 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-800":[`__SCOPE__ .hover\\:text-sky-800:hover {--tw-text-opacity: 1;color: rgb(7 89 133 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-900":[`__SCOPE__ .hover\\:text-sky-900:hover {--tw-text-opacity: 1;color: rgb(12 74 110 / var(--tw-text-opacity, 1))
}`],"hover:text-sky-950":[`__SCOPE__ .hover\\:text-sky-950:hover {--tw-text-opacity: 1;color: rgb(8 47 73 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-100":[`__SCOPE__ .hover\\:text-slate-100:hover {--tw-text-opacity: 1;color: rgb(241 245 249 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-200":[`__SCOPE__ .hover\\:text-slate-200:hover {--tw-text-opacity: 1;color: rgb(226 232 240 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-300":[`__SCOPE__ .hover\\:text-slate-300:hover {--tw-text-opacity: 1;color: rgb(203 213 225 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-400":[`__SCOPE__ .hover\\:text-slate-400:hover {--tw-text-opacity: 1;color: rgb(148 163 184 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-50":[`__SCOPE__ .hover\\:text-slate-50:hover {--tw-text-opacity: 1;color: rgb(248 250 252 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-500":[`__SCOPE__ .hover\\:text-slate-500:hover {--tw-text-opacity: 1;color: rgb(100 116 139 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-600":[`__SCOPE__ .hover\\:text-slate-600:hover {--tw-text-opacity: 1;color: rgb(71 85 105 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-700":[`__SCOPE__ .hover\\:text-slate-700:hover {--tw-text-opacity: 1;color: rgb(51 65 85 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-800":[`__SCOPE__ .hover\\:text-slate-800:hover {--tw-text-opacity: 1;color: rgb(30 41 59 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-900":[`__SCOPE__ .hover\\:text-slate-900:hover {--tw-text-opacity: 1;color: rgb(15 23 42 / var(--tw-text-opacity, 1))
}`],"hover:text-slate-950":[`__SCOPE__ .hover\\:text-slate-950:hover {--tw-text-opacity: 1;color: rgb(2 6 23 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-100":[`__SCOPE__ .hover\\:text-stone-100:hover {--tw-text-opacity: 1;color: rgb(245 245 244 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-200":[`__SCOPE__ .hover\\:text-stone-200:hover {--tw-text-opacity: 1;color: rgb(231 229 228 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-300":[`__SCOPE__ .hover\\:text-stone-300:hover {--tw-text-opacity: 1;color: rgb(214 211 209 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-400":[`__SCOPE__ .hover\\:text-stone-400:hover {--tw-text-opacity: 1;color: rgb(168 162 158 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-50":[`__SCOPE__ .hover\\:text-stone-50:hover {--tw-text-opacity: 1;color: rgb(250 250 249 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-500":[`__SCOPE__ .hover\\:text-stone-500:hover {--tw-text-opacity: 1;color: rgb(120 113 108 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-600":[`__SCOPE__ .hover\\:text-stone-600:hover {--tw-text-opacity: 1;color: rgb(87 83 78 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-700":[`__SCOPE__ .hover\\:text-stone-700:hover {--tw-text-opacity: 1;color: rgb(68 64 60 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-800":[`__SCOPE__ .hover\\:text-stone-800:hover {--tw-text-opacity: 1;color: rgb(41 37 36 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-900":[`__SCOPE__ .hover\\:text-stone-900:hover {--tw-text-opacity: 1;color: rgb(28 25 23 / var(--tw-text-opacity, 1))
}`],"hover:text-stone-950":[`__SCOPE__ .hover\\:text-stone-950:hover {--tw-text-opacity: 1;color: rgb(12 10 9 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-100":[`__SCOPE__ .hover\\:text-teal-100:hover {--tw-text-opacity: 1;color: rgb(204 251 241 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-200":[`__SCOPE__ .hover\\:text-teal-200:hover {--tw-text-opacity: 1;color: rgb(153 246 228 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-300":[`__SCOPE__ .hover\\:text-teal-300:hover {--tw-text-opacity: 1;color: rgb(94 234 212 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-400":[`__SCOPE__ .hover\\:text-teal-400:hover {--tw-text-opacity: 1;color: rgb(45 212 191 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-50":[`__SCOPE__ .hover\\:text-teal-50:hover {--tw-text-opacity: 1;color: rgb(240 253 250 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-500":[`__SCOPE__ .hover\\:text-teal-500:hover {--tw-text-opacity: 1;color: rgb(20 184 166 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-600":[`__SCOPE__ .hover\\:text-teal-600:hover {--tw-text-opacity: 1;color: rgb(13 148 136 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-700":[`__SCOPE__ .hover\\:text-teal-700:hover {--tw-text-opacity: 1;color: rgb(15 118 110 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-800":[`__SCOPE__ .hover\\:text-teal-800:hover {--tw-text-opacity: 1;color: rgb(17 94 89 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-900":[`__SCOPE__ .hover\\:text-teal-900:hover {--tw-text-opacity: 1;color: rgb(19 78 74 / var(--tw-text-opacity, 1))
}`],"hover:text-teal-950":[`__SCOPE__ .hover\\:text-teal-950:hover {--tw-text-opacity: 1;color: rgb(4 47 46 / var(--tw-text-opacity, 1))
}`],"hover:text-transparent":[`__SCOPE__ .hover\\:text-transparent:hover {color: transparent
}`],"hover:text-violet-100":[`__SCOPE__ .hover\\:text-violet-100:hover {--tw-text-opacity: 1;color: rgb(237 233 254 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-200":[`__SCOPE__ .hover\\:text-violet-200:hover {--tw-text-opacity: 1;color: rgb(221 214 254 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-300":[`__SCOPE__ .hover\\:text-violet-300:hover {--tw-text-opacity: 1;color: rgb(196 181 253 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-400":[`__SCOPE__ .hover\\:text-violet-400:hover {--tw-text-opacity: 1;color: rgb(167 139 250 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-50":[`__SCOPE__ .hover\\:text-violet-50:hover {--tw-text-opacity: 1;color: rgb(245 243 255 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-500":[`__SCOPE__ .hover\\:text-violet-500:hover {--tw-text-opacity: 1;color: rgb(139 92 246 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-600":[`__SCOPE__ .hover\\:text-violet-600:hover {--tw-text-opacity: 1;color: rgb(124 58 237 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-700":[`__SCOPE__ .hover\\:text-violet-700:hover {--tw-text-opacity: 1;color: rgb(109 40 217 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-800":[`__SCOPE__ .hover\\:text-violet-800:hover {--tw-text-opacity: 1;color: rgb(91 33 182 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-900":[`__SCOPE__ .hover\\:text-violet-900:hover {--tw-text-opacity: 1;color: rgb(76 29 149 / var(--tw-text-opacity, 1))
}`],"hover:text-violet-950":[`__SCOPE__ .hover\\:text-violet-950:hover {--tw-text-opacity: 1;color: rgb(46 16 101 / var(--tw-text-opacity, 1))
}`],"hover:text-white":[`__SCOPE__ .hover\\:text-white:hover {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-100":[`__SCOPE__ .hover\\:text-yellow-100:hover {--tw-text-opacity: 1;color: rgb(254 249 195 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-200":[`__SCOPE__ .hover\\:text-yellow-200:hover {--tw-text-opacity: 1;color: rgb(254 240 138 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-300":[`__SCOPE__ .hover\\:text-yellow-300:hover {--tw-text-opacity: 1;color: rgb(253 224 71 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-400":[`__SCOPE__ .hover\\:text-yellow-400:hover {--tw-text-opacity: 1;color: rgb(250 204 21 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-50":[`__SCOPE__ .hover\\:text-yellow-50:hover {--tw-text-opacity: 1;color: rgb(254 252 232 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-500":[`__SCOPE__ .hover\\:text-yellow-500:hover {--tw-text-opacity: 1;color: rgb(234 179 8 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-600":[`__SCOPE__ .hover\\:text-yellow-600:hover {--tw-text-opacity: 1;color: rgb(202 138 4 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-700":[`__SCOPE__ .hover\\:text-yellow-700:hover {--tw-text-opacity: 1;color: rgb(161 98 7 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-800":[`__SCOPE__ .hover\\:text-yellow-800:hover {--tw-text-opacity: 1;color: rgb(133 77 14 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-900":[`__SCOPE__ .hover\\:text-yellow-900:hover {--tw-text-opacity: 1;color: rgb(113 63 18 / var(--tw-text-opacity, 1))
}`],"hover:text-yellow-950":[`__SCOPE__ .hover\\:text-yellow-950:hover {--tw-text-opacity: 1;color: rgb(66 32 6 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-100":[`__SCOPE__ .hover\\:text-zinc-100:hover {--tw-text-opacity: 1;color: rgb(244 244 245 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-200":[`__SCOPE__ .hover\\:text-zinc-200:hover {--tw-text-opacity: 1;color: rgb(228 228 231 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-300":[`__SCOPE__ .hover\\:text-zinc-300:hover {--tw-text-opacity: 1;color: rgb(212 212 216 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-400":[`__SCOPE__ .hover\\:text-zinc-400:hover {--tw-text-opacity: 1;color: rgb(161 161 170 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-50":[`__SCOPE__ .hover\\:text-zinc-50:hover {--tw-text-opacity: 1;color: rgb(250 250 250 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-500":[`__SCOPE__ .hover\\:text-zinc-500:hover {--tw-text-opacity: 1;color: rgb(113 113 122 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-600":[`__SCOPE__ .hover\\:text-zinc-600:hover {--tw-text-opacity: 1;color: rgb(82 82 91 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-700":[`__SCOPE__ .hover\\:text-zinc-700:hover {--tw-text-opacity: 1;color: rgb(63 63 70 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-800":[`__SCOPE__ .hover\\:text-zinc-800:hover {--tw-text-opacity: 1;color: rgb(39 39 42 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-900":[`__SCOPE__ .hover\\:text-zinc-900:hover {--tw-text-opacity: 1;color: rgb(24 24 27 / var(--tw-text-opacity, 1))
}`],"hover:text-zinc-950":[`__SCOPE__ .hover\\:text-zinc-950:hover {--tw-text-opacity: 1;color: rgb(9 9 11 / var(--tw-text-opacity, 1))
}`],"hover:underline":[`__SCOPE__ .hover\\:underline:hover {text-decoration-line: underline
}`],"hover:shadow":[`__SCOPE__ .hover\\:shadow:hover {--tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"hover:shadow-2xl":[`__SCOPE__ .hover\\:shadow-2xl:hover {--tw-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);--tw-shadow-colored: 0 25px 50px -12px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"hover:shadow-lg":[`__SCOPE__ .hover\\:shadow-lg:hover {--tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"hover:shadow-md":[`__SCOPE__ .hover\\:shadow-md:hover {--tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"hover:shadow-sm":[`__SCOPE__ .hover\\:shadow-sm:hover {--tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);--tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"hover:shadow-xl":[`__SCOPE__ .hover\\:shadow-xl:hover {--tw-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);--tw-shadow-colored: 0 20px 25px -5px var(--tw-shadow-color), 0 8px 10px -6px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"dark:bg-dark":[`__SCOPE__ .dark\\:bg-dark:is(.dark *) {--tw-bg-opacity: 1;background-color: rgb(17 25 40 / var(--tw-bg-opacity, 1))
}`],dark:[`__SCOPE__ .dark\\:bg-dark:is(.dark *) {--tw-bg-opacity: 1;background-color: rgb(17 25 40 / var(--tw-bg-opacity, 1))
}`,`__SCOPE__ .dark\\:bg-white\\/5:is(.dark *) {background-color: rgb(255 255 255 / 0.05)
}`,`__SCOPE__ .dark\\:text-white:is(.dark *) {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}`,`__SCOPE__ .dark\\:shadow-\\[0px_20px_95px_0px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.30\\)\\]:is(.dark *) {--tw-shadow: 0px 20px 95px 0px rgba(0,0,0,0.30);--tw-shadow-colored: 0px 20px 95px 0px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"dark:bg-white/5":[`__SCOPE__ .dark\\:bg-white\\/5:is(.dark *) {background-color: rgb(255 255 255 / 0.05)
}`],"dark:text-white":[`__SCOPE__ .dark\\:text-white:is(.dark *) {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
}`],"dark:shadow-[0px_20px_95px_0px_rgba(0,0,0,0.30)]":[`__SCOPE__ .dark\\:shadow-\\[0px_20px_95px_0px_rgba\\(0\\2c 0\\2c 0\\2c 0\\.30\\)\\]:is(.dark *) {--tw-shadow: 0px 20px 95px 0px rgba(0,0,0,0.30);--tw-shadow-colored: 0px 20px 95px 0px var(--tw-shadow-color);box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)
}`],"sm:m-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-0 {margin: 0px
    }}`],"sm:m-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-1 {margin: 0.25rem
    }}`],"sm:m-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-10 {margin: 2.5rem
    }}`],"sm:m-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-11 {margin: 2.75rem
    }}`],"sm:m-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-12 {margin: 3rem
    }}`],"sm:m-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-14 {margin: 3.5rem
    }}`],"sm:m-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-16 {margin: 4rem
    }}`],"sm:m-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-2 {margin: 0.5rem
    }}`],"sm:m-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-20 {margin: 5rem
    }}`],"sm:m-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-24 {margin: 6rem
    }}`],"sm:m-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-28 {margin: 7rem
    }}`],"sm:m-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-3 {margin: 0.75rem
    }}`],"sm:m-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-32 {margin: 8rem
    }}`],"sm:m-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-4 {margin: 1rem
    }}`],"sm:m-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-40 {margin: 10rem
    }}`],"sm:m-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-48 {margin: 12rem
    }}`],"sm:m-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-5 {margin: 1.25rem
    }}`],"sm:m-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-56 {margin: 14rem
    }}`],"sm:m-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-6 {margin: 1.5rem
    }}`],"sm:m-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-64 {margin: 16rem
    }}`],"sm:m-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-7 {margin: 1.75rem
    }}`],"sm:m-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-8 {margin: 2rem
    }}`],"sm:m-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-80 {margin: 20rem
    }}`],"sm:m-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-9 {margin: 2.25rem
    }}`],"sm:m-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:m-96 {margin: 24rem
    }}`],"sm:mx-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-0 {margin-left: 0px;margin-right: 0px
    }}`],"sm:mx-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-1 {margin-left: 0.25rem;margin-right: 0.25rem
    }}`],"sm:mx-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-10 {margin-left: 2.5rem;margin-right: 2.5rem
    }}`],"sm:mx-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-11 {margin-left: 2.75rem;margin-right: 2.75rem
    }}`],"sm:mx-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-12 {margin-left: 3rem;margin-right: 3rem
    }}`],"sm:mx-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-14 {margin-left: 3.5rem;margin-right: 3.5rem
    }}`],"sm:mx-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-16 {margin-left: 4rem;margin-right: 4rem
    }}`],"sm:mx-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-2 {margin-left: 0.5rem;margin-right: 0.5rem
    }}`],"sm:mx-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-20 {margin-left: 5rem;margin-right: 5rem
    }}`],"sm:mx-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-24 {margin-left: 6rem;margin-right: 6rem
    }}`],"sm:mx-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-28 {margin-left: 7rem;margin-right: 7rem
    }}`],"sm:mx-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-3 {margin-left: 0.75rem;margin-right: 0.75rem
    }}`],"sm:mx-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-32 {margin-left: 8rem;margin-right: 8rem
    }}`],"sm:mx-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-4 {margin-left: 1rem;margin-right: 1rem
    }}`],"sm:mx-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-40 {margin-left: 10rem;margin-right: 10rem
    }}`],"sm:mx-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-48 {margin-left: 12rem;margin-right: 12rem
    }}`],"sm:mx-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-5 {margin-left: 1.25rem;margin-right: 1.25rem
    }}`],"sm:mx-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-56 {margin-left: 14rem;margin-right: 14rem
    }}`],"sm:mx-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-6 {margin-left: 1.5rem;margin-right: 1.5rem
    }}`],"sm:mx-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-64 {margin-left: 16rem;margin-right: 16rem
    }}`],"sm:mx-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-7 {margin-left: 1.75rem;margin-right: 1.75rem
    }}`],"sm:mx-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-8 {margin-left: 2rem;margin-right: 2rem
    }}`],"sm:mx-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-80 {margin-left: 20rem;margin-right: 20rem
    }}`],"sm:mx-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-9 {margin-left: 2.25rem;margin-right: 2.25rem
    }}`],"sm:mx-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-96 {margin-left: 24rem;margin-right: 24rem
    }}`],"sm:mx-auto":[`@media (min-width: 640px){__SCOPE__ .sm\\:mx-auto {margin-left: auto;margin-right: auto
    }}`],"sm:my-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-0 {margin-top: 0px;margin-bottom: 0px
    }}`],"sm:my-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-1 {margin-top: 0.25rem;margin-bottom: 0.25rem
    }}`],"sm:my-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-10 {margin-top: 2.5rem;margin-bottom: 2.5rem
    }}`],"sm:my-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-11 {margin-top: 2.75rem;margin-bottom: 2.75rem
    }}`],"sm:my-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-12 {margin-top: 3rem;margin-bottom: 3rem
    }}`],"sm:my-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-14 {margin-top: 3.5rem;margin-bottom: 3.5rem
    }}`],"sm:my-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-16 {margin-top: 4rem;margin-bottom: 4rem
    }}`],"sm:my-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-2 {margin-top: 0.5rem;margin-bottom: 0.5rem
    }}`],"sm:my-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-20 {margin-top: 5rem;margin-bottom: 5rem
    }}`],"sm:my-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-24 {margin-top: 6rem;margin-bottom: 6rem
    }}`],"sm:my-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-28 {margin-top: 7rem;margin-bottom: 7rem
    }}`],"sm:my-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-3 {margin-top: 0.75rem;margin-bottom: 0.75rem
    }}`],"sm:my-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-32 {margin-top: 8rem;margin-bottom: 8rem
    }}`],"sm:my-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-4 {margin-top: 1rem;margin-bottom: 1rem
    }}`],"sm:my-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-40 {margin-top: 10rem;margin-bottom: 10rem
    }}`],"sm:my-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-48 {margin-top: 12rem;margin-bottom: 12rem
    }}`],"sm:my-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-5 {margin-top: 1.25rem;margin-bottom: 1.25rem
    }}`],"sm:my-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-56 {margin-top: 14rem;margin-bottom: 14rem
    }}`],"sm:my-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-6 {margin-top: 1.5rem;margin-bottom: 1.5rem
    }}`],"sm:my-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-64 {margin-top: 16rem;margin-bottom: 16rem
    }}`],"sm:my-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-7 {margin-top: 1.75rem;margin-bottom: 1.75rem
    }}`],"sm:my-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-8 {margin-top: 2rem;margin-bottom: 2rem
    }}`],"sm:my-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-80 {margin-top: 20rem;margin-bottom: 20rem
    }}`],"sm:my-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-9 {margin-top: 2.25rem;margin-bottom: 2.25rem
    }}`],"sm:my-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:my-96 {margin-top: 24rem;margin-bottom: 24rem
    }}`],"sm:mb-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-0 {margin-bottom: 0px
    }}`],"sm:mb-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-1 {margin-bottom: 0.25rem
    }}`],"sm:mb-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-10 {margin-bottom: 2.5rem
    }}`],"sm:mb-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-11 {margin-bottom: 2.75rem
    }}`],"sm:mb-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-12 {margin-bottom: 3rem
    }}`],"sm:mb-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-14 {margin-bottom: 3.5rem
    }}`],"sm:mb-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-16 {margin-bottom: 4rem
    }}`],"sm:mb-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-2 {margin-bottom: 0.5rem
    }}`],"sm:mb-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-20 {margin-bottom: 5rem
    }}`],"sm:mb-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-24 {margin-bottom: 6rem
    }}`],"sm:mb-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-28 {margin-bottom: 7rem
    }}`],"sm:mb-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-3 {margin-bottom: 0.75rem
    }}`],"sm:mb-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-32 {margin-bottom: 8rem
    }}`],"sm:mb-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-4 {margin-bottom: 1rem
    }}`],"sm:mb-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-40 {margin-bottom: 10rem
    }}`],"sm:mb-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-48 {margin-bottom: 12rem
    }}`],"sm:mb-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-5 {margin-bottom: 1.25rem
    }}`],"sm:mb-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-56 {margin-bottom: 14rem
    }}`],"sm:mb-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-6 {margin-bottom: 1.5rem
    }}`],"sm:mb-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-64 {margin-bottom: 16rem
    }}`],"sm:mb-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-7 {margin-bottom: 1.75rem
    }}`],"sm:mb-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-8 {margin-bottom: 2rem
    }}`],"sm:mb-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-80 {margin-bottom: 20rem
    }}`],"sm:mb-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-9 {margin-bottom: 2.25rem
    }}`],"sm:mb-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:mb-96 {margin-bottom: 24rem
    }}`],"sm:ml-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-0 {margin-left: 0px
    }}`],"sm:ml-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-1 {margin-left: 0.25rem
    }}`],"sm:ml-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-10 {margin-left: 2.5rem
    }}`],"sm:ml-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-11 {margin-left: 2.75rem
    }}`],"sm:ml-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-12 {margin-left: 3rem
    }}`],"sm:ml-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-14 {margin-left: 3.5rem
    }}`],"sm:ml-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-16 {margin-left: 4rem
    }}`],"sm:ml-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-2 {margin-left: 0.5rem
    }}`],"sm:ml-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-20 {margin-left: 5rem
    }}`],"sm:ml-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-24 {margin-left: 6rem
    }}`],"sm:ml-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-28 {margin-left: 7rem
    }}`],"sm:ml-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-3 {margin-left: 0.75rem
    }}`],"sm:ml-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-32 {margin-left: 8rem
    }}`],"sm:ml-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-4 {margin-left: 1rem
    }}`],"sm:ml-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-40 {margin-left: 10rem
    }}`],"sm:ml-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-48 {margin-left: 12rem
    }}`],"sm:ml-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-5 {margin-left: 1.25rem
    }}`],"sm:ml-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-56 {margin-left: 14rem
    }}`],"sm:ml-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-6 {margin-left: 1.5rem
    }}`],"sm:ml-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-64 {margin-left: 16rem
    }}`],"sm:ml-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-7 {margin-left: 1.75rem
    }}`],"sm:ml-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-8 {margin-left: 2rem
    }}`],"sm:ml-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-80 {margin-left: 20rem
    }}`],"sm:ml-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-9 {margin-left: 2.25rem
    }}`],"sm:ml-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:ml-96 {margin-left: 24rem
    }}`],"sm:mr-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-0 {margin-right: 0px
    }}`],"sm:mr-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-1 {margin-right: 0.25rem
    }}`],"sm:mr-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-10 {margin-right: 2.5rem
    }}`],"sm:mr-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-11 {margin-right: 2.75rem
    }}`],"sm:mr-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-12 {margin-right: 3rem
    }}`],"sm:mr-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-14 {margin-right: 3.5rem
    }}`],"sm:mr-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-16 {margin-right: 4rem
    }}`],"sm:mr-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-2 {margin-right: 0.5rem
    }}`],"sm:mr-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-20 {margin-right: 5rem
    }}`],"sm:mr-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-24 {margin-right: 6rem
    }}`],"sm:mr-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-28 {margin-right: 7rem
    }}`],"sm:mr-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-3 {margin-right: 0.75rem
    }}`],"sm:mr-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-32 {margin-right: 8rem
    }}`],"sm:mr-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-4 {margin-right: 1rem
    }}`],"sm:mr-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-40 {margin-right: 10rem
    }}`],"sm:mr-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-48 {margin-right: 12rem
    }}`],"sm:mr-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-5 {margin-right: 1.25rem
    }}`],"sm:mr-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-56 {margin-right: 14rem
    }}`],"sm:mr-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-6 {margin-right: 1.5rem
    }}`],"sm:mr-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-64 {margin-right: 16rem
    }}`],"sm:mr-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-7 {margin-right: 1.75rem
    }}`],"sm:mr-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-8 {margin-right: 2rem
    }}`],"sm:mr-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-80 {margin-right: 20rem
    }}`],"sm:mr-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-9 {margin-right: 2.25rem
    }}`],"sm:mr-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:mr-96 {margin-right: 24rem
    }}`],"sm:mt-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-0 {margin-top: 0px
    }}`],"sm:mt-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-1 {margin-top: 0.25rem
    }}`],"sm:mt-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-10 {margin-top: 2.5rem
    }}`],"sm:mt-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-11 {margin-top: 2.75rem
    }}`],"sm:mt-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-12 {margin-top: 3rem
    }}`],"sm:mt-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-14 {margin-top: 3.5rem
    }}`],"sm:mt-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-16 {margin-top: 4rem
    }}`],"sm:mt-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-2 {margin-top: 0.5rem
    }}`],"sm:mt-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-20 {margin-top: 5rem
    }}`],"sm:mt-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-24 {margin-top: 6rem
    }}`],"sm:mt-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-28 {margin-top: 7rem
    }}`],"sm:mt-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-3 {margin-top: 0.75rem
    }}`],"sm:mt-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-32 {margin-top: 8rem
    }}`],"sm:mt-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-4 {margin-top: 1rem
    }}`],"sm:mt-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-40 {margin-top: 10rem
    }}`],"sm:mt-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-48 {margin-top: 12rem
    }}`],"sm:mt-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-5 {margin-top: 1.25rem
    }}`],"sm:mt-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-56 {margin-top: 14rem
    }}`],"sm:mt-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-6 {margin-top: 1.5rem
    }}`],"sm:mt-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-64 {margin-top: 16rem
    }}`],"sm:mt-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-7 {margin-top: 1.75rem
    }}`],"sm:mt-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-8 {margin-top: 2rem
    }}`],"sm:mt-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-80 {margin-top: 20rem
    }}`],"sm:mt-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-9 {margin-top: 2.25rem
    }}`],"sm:mt-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:mt-96 {margin-top: 24rem
    }}`],"sm:block":[`@media (min-width: 640px){__SCOPE__ .sm\\:block {display: block
    }}`],"sm:flex":[`@media (min-width: 640px){__SCOPE__ .sm\\:flex {display: flex
    }}`],"sm:grid":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid {display: grid
    }}`],"sm:hidden":[`@media (min-width: 640px){__SCOPE__ .sm\\:hidden {display: none
    }}`],"sm:w-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-0 {width: 0px
    }}`],"sm:w-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1 {width: 0.25rem
    }}`],"sm:w-1/2":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1\\/2 {width: 50%
    }}`],"sm:w-1/3":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1\\/3 {width: 33.333333%
    }}`],"sm:w-1/4":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1\\/4 {width: 25%
    }}`],"sm:w-1/5":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1\\/5 {width: 20%
    }}`],"sm:w-1/6":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-1\\/6 {width: 16.666667%
    }}`],"sm:w-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-10 {width: 2.5rem
    }}`],"sm:w-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-11 {width: 2.75rem
    }}`],"sm:w-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-12 {width: 3rem
    }}`],"sm:w-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-14 {width: 3.5rem
    }}`],"sm:w-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-16 {width: 4rem
    }}`],"sm:w-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-2 {width: 0.5rem
    }}`],"sm:w-2/3":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-2\\/3 {width: 66.666667%
    }}`],"sm:w-2/5":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-2\\/5 {width: 40%
    }}`],"sm:w-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-20 {width: 5rem
    }}`],"sm:w-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-24 {width: 6rem
    }}`],"sm:w-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-28 {width: 7rem
    }}`],"sm:w-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-3 {width: 0.75rem
    }}`],"sm:w-3/4":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-3\\/4 {width: 75%
    }}`],"sm:w-3/5":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-3\\/5 {width: 60%
    }}`],"sm:w-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-32 {width: 8rem
    }}`],"sm:w-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-4 {width: 1rem
    }}`],"sm:w-4/5":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-4\\/5 {width: 80%
    }}`],"sm:w-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-40 {width: 10rem
    }}`],"sm:w-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-48 {width: 12rem
    }}`],"sm:w-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-5 {width: 1.25rem
    }}`],"sm:w-5/12":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-5\\/12 {width: 41.666667%
    }}`],"sm:w-5/6":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-5\\/6 {width: 83.333333%
    }}`],"sm:w-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-56 {width: 14rem
    }}`],"sm:w-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-6 {width: 1.5rem
    }}`],"sm:w-6/12":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-6\\/12 {width: 50%
    }}`],"sm:w-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-64 {width: 16rem
    }}`],"sm:w-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-7 {width: 1.75rem
    }}`],"sm:w-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-8 {width: 2rem
    }}`],"sm:w-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-80 {width: 20rem
    }}`],"sm:w-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-9 {width: 2.25rem
    }}`],"sm:w-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-96 {width: 24rem
    }}`],"sm:w-auto":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-auto {width: auto
    }}`],"sm:w-full":[`@media (min-width: 640px){__SCOPE__ .sm\\:w-full {width: 100%
    }}`],"sm:flex-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:flex-1 {flex: 1 1 0%
    }}`],"sm:grid-cols-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-1 {grid-template-columns: repeat(1, minmax(0, 1fr))
    }}`],"sm:grid-cols-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-12 {grid-template-columns: repeat(12, minmax(0, 1fr))
    }}`],"sm:grid-cols-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-2 {grid-template-columns: repeat(2, minmax(0, 1fr))
    }}`],"sm:grid-cols-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-3 {grid-template-columns: repeat(3, minmax(0, 1fr))
    }}`],"sm:grid-cols-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-4 {grid-template-columns: repeat(4, minmax(0, 1fr))
    }}`],"sm:grid-cols-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-5 {grid-template-columns: repeat(5, minmax(0, 1fr))
    }}`],"sm:grid-cols-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:grid-cols-6 {grid-template-columns: repeat(6, minmax(0, 1fr))
    }}`],"sm:flex-row":[`@media (min-width: 640px){__SCOPE__ .sm\\:flex-row {flex-direction: row
    }}`],"sm:flex-col":[`@media (min-width: 640px){__SCOPE__ .sm\\:flex-col {flex-direction: column
    }}`],"sm:flex-wrap":[`@media (min-width: 640px){__SCOPE__ .sm\\:flex-wrap {flex-wrap: wrap
    }}`],"sm:items-start":[`@media (min-width: 640px){__SCOPE__ .sm\\:items-start {align-items: flex-start
    }}`],"sm:items-end":[`@media (min-width: 640px){__SCOPE__ .sm\\:items-end {align-items: flex-end
    }}`],"sm:items-center":[`@media (min-width: 640px){__SCOPE__ .sm\\:items-center {align-items: center
    }}`],"sm:justify-end":[`@media (min-width: 640px){__SCOPE__ .sm\\:justify-end {justify-content: flex-end
    }}`],"sm:justify-center":[`@media (min-width: 640px){__SCOPE__ .sm\\:justify-center {justify-content: center
    }}`],"sm:justify-between":[`@media (min-width: 640px){__SCOPE__ .sm\\:justify-between {justify-content: space-between
    }}`],"sm:gap-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-0 {gap: 0px
    }}`],"sm:gap-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-1 {gap: 0.25rem
    }}`],"sm:gap-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-10 {gap: 2.5rem
    }}`],"sm:gap-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-11 {gap: 2.75rem
    }}`],"sm:gap-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-12 {gap: 3rem
    }}`],"sm:gap-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-14 {gap: 3.5rem
    }}`],"sm:gap-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-16 {gap: 4rem
    }}`],"sm:gap-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-2 {gap: 0.5rem
    }}`],"sm:gap-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-20 {gap: 5rem
    }}`],"sm:gap-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-24 {gap: 6rem
    }}`],"sm:gap-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-28 {gap: 7rem
    }}`],"sm:gap-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-3 {gap: 0.75rem
    }}`],"sm:gap-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-32 {gap: 8rem
    }}`],"sm:gap-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-4 {gap: 1rem
    }}`],"sm:gap-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-40 {gap: 10rem
    }}`],"sm:gap-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-48 {gap: 12rem
    }}`],"sm:gap-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-5 {gap: 1.25rem
    }}`],"sm:gap-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-56 {gap: 14rem
    }}`],"sm:gap-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-6 {gap: 1.5rem
    }}`],"sm:gap-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-64 {gap: 16rem
    }}`],"sm:gap-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-7 {gap: 1.75rem
    }}`],"sm:gap-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-8 {gap: 2rem
    }}`],"sm:gap-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-80 {gap: 20rem
    }}`],"sm:gap-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-9 {gap: 2.25rem
    }}`],"sm:gap-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-96 {gap: 24rem
    }}`],"sm:gap-x-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-0 {column-gap: 0px
    }}`],"sm:gap-x-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-1 {column-gap: 0.25rem
    }}`],"sm:gap-x-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-10 {column-gap: 2.5rem
    }}`],"sm:gap-x-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-11 {column-gap: 2.75rem
    }}`],"sm:gap-x-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-12 {column-gap: 3rem
    }}`],"sm:gap-x-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-14 {column-gap: 3.5rem
    }}`],"sm:gap-x-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-16 {column-gap: 4rem
    }}`],"sm:gap-x-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-2 {column-gap: 0.5rem
    }}`],"sm:gap-x-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-20 {column-gap: 5rem
    }}`],"sm:gap-x-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-24 {column-gap: 6rem
    }}`],"sm:gap-x-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-28 {column-gap: 7rem
    }}`],"sm:gap-x-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-3 {column-gap: 0.75rem
    }}`],"sm:gap-x-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-32 {column-gap: 8rem
    }}`],"sm:gap-x-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-4 {column-gap: 1rem
    }}`],"sm:gap-x-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-40 {column-gap: 10rem
    }}`],"sm:gap-x-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-48 {column-gap: 12rem
    }}`],"sm:gap-x-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-5 {column-gap: 1.25rem
    }}`],"sm:gap-x-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-56 {column-gap: 14rem
    }}`],"sm:gap-x-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-6 {column-gap: 1.5rem
    }}`],"sm:gap-x-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-64 {column-gap: 16rem
    }}`],"sm:gap-x-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-7 {column-gap: 1.75rem
    }}`],"sm:gap-x-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-8 {column-gap: 2rem
    }}`],"sm:gap-x-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-80 {column-gap: 20rem
    }}`],"sm:gap-x-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-9 {column-gap: 2.25rem
    }}`],"sm:gap-x-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-x-96 {column-gap: 24rem
    }}`],"sm:gap-y-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-0 {row-gap: 0px
    }}`],"sm:gap-y-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-1 {row-gap: 0.25rem
    }}`],"sm:gap-y-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-10 {row-gap: 2.5rem
    }}`],"sm:gap-y-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-11 {row-gap: 2.75rem
    }}`],"sm:gap-y-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-12 {row-gap: 3rem
    }}`],"sm:gap-y-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-14 {row-gap: 3.5rem
    }}`],"sm:gap-y-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-16 {row-gap: 4rem
    }}`],"sm:gap-y-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-2 {row-gap: 0.5rem
    }}`],"sm:gap-y-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-20 {row-gap: 5rem
    }}`],"sm:gap-y-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-24 {row-gap: 6rem
    }}`],"sm:gap-y-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-28 {row-gap: 7rem
    }}`],"sm:gap-y-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-3 {row-gap: 0.75rem
    }}`],"sm:gap-y-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-32 {row-gap: 8rem
    }}`],"sm:gap-y-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-4 {row-gap: 1rem
    }}`],"sm:gap-y-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-40 {row-gap: 10rem
    }}`],"sm:gap-y-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-48 {row-gap: 12rem
    }}`],"sm:gap-y-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-5 {row-gap: 1.25rem
    }}`],"sm:gap-y-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-56 {row-gap: 14rem
    }}`],"sm:gap-y-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-6 {row-gap: 1.5rem
    }}`],"sm:gap-y-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-64 {row-gap: 16rem
    }}`],"sm:gap-y-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-7 {row-gap: 1.75rem
    }}`],"sm:gap-y-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-8 {row-gap: 2rem
    }}`],"sm:gap-y-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-80 {row-gap: 20rem
    }}`],"sm:gap-y-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-9 {row-gap: 2.25rem
    }}`],"sm:gap-y-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:gap-y-96 {row-gap: 24rem
    }}`],"sm:p-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-0 {padding: 0px
    }}`],"sm:p-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-1 {padding: 0.25rem
    }}`],"sm:p-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-10 {padding: 2.5rem
    }}`],"sm:p-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-11 {padding: 2.75rem
    }}`],"sm:p-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-12 {padding: 3rem
    }}`],"sm:p-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-14 {padding: 3.5rem
    }}`],"sm:p-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-16 {padding: 4rem
    }}`],"sm:p-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-2 {padding: 0.5rem
    }}`],"sm:p-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-20 {padding: 5rem
    }}`],"sm:p-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-24 {padding: 6rem
    }}`],"sm:p-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-28 {padding: 7rem
    }}`],"sm:p-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-3 {padding: 0.75rem
    }}`],"sm:p-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-32 {padding: 8rem
    }}`],"sm:p-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-4 {padding: 1rem
    }}`],"sm:p-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-40 {padding: 10rem
    }}`],"sm:p-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-48 {padding: 12rem
    }}`],"sm:p-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-5 {padding: 1.25rem
    }}`],"sm:p-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-56 {padding: 14rem
    }}`],"sm:p-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-6 {padding: 1.5rem
    }}`],"sm:p-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-64 {padding: 16rem
    }}`],"sm:p-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-7 {padding: 1.75rem
    }}`],"sm:p-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-8 {padding: 2rem
    }}`],"sm:p-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-80 {padding: 20rem
    }}`],"sm:p-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-9 {padding: 2.25rem
    }}`],"sm:p-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:p-96 {padding: 24rem
    }}`],"sm:px-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-0 {padding-left: 0px;padding-right: 0px
    }}`],"sm:px-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-1 {padding-left: 0.25rem;padding-right: 0.25rem
    }}`],"sm:px-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-10 {padding-left: 2.5rem;padding-right: 2.5rem
    }}`],"sm:px-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-11 {padding-left: 2.75rem;padding-right: 2.75rem
    }}`],"sm:px-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-12 {padding-left: 3rem;padding-right: 3rem
    }}`],"sm:px-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-14 {padding-left: 3.5rem;padding-right: 3.5rem
    }}`],"sm:px-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-16 {padding-left: 4rem;padding-right: 4rem
    }}`],"sm:px-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-2 {padding-left: 0.5rem;padding-right: 0.5rem
    }}`],"sm:px-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-20 {padding-left: 5rem;padding-right: 5rem
    }}`],"sm:px-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-24 {padding-left: 6rem;padding-right: 6rem
    }}`],"sm:px-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-28 {padding-left: 7rem;padding-right: 7rem
    }}`],"sm:px-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-3 {padding-left: 0.75rem;padding-right: 0.75rem
    }}`],"sm:px-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-32 {padding-left: 8rem;padding-right: 8rem
    }}`],"sm:px-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-4 {padding-left: 1rem;padding-right: 1rem
    }}`],"sm:px-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-40 {padding-left: 10rem;padding-right: 10rem
    }}`],"sm:px-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-48 {padding-left: 12rem;padding-right: 12rem
    }}`],"sm:px-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-5 {padding-left: 1.25rem;padding-right: 1.25rem
    }}`],"sm:px-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-56 {padding-left: 14rem;padding-right: 14rem
    }}`],"sm:px-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-6 {padding-left: 1.5rem;padding-right: 1.5rem
    }}`],"sm:px-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-64 {padding-left: 16rem;padding-right: 16rem
    }}`],"sm:px-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-7 {padding-left: 1.75rem;padding-right: 1.75rem
    }}`],"sm:px-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-8 {padding-left: 2rem;padding-right: 2rem
    }}`],"sm:px-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-80 {padding-left: 20rem;padding-right: 20rem
    }}`],"sm:px-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-9 {padding-left: 2.25rem;padding-right: 2.25rem
    }}`],"sm:px-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:px-96 {padding-left: 24rem;padding-right: 24rem
    }}`],"sm:py-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-0 {padding-top: 0px;padding-bottom: 0px
    }}`],"sm:py-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-1 {padding-top: 0.25rem;padding-bottom: 0.25rem
    }}`],"sm:py-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-10 {padding-top: 2.5rem;padding-bottom: 2.5rem
    }}`],"sm:py-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-11 {padding-top: 2.75rem;padding-bottom: 2.75rem
    }}`],"sm:py-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-12 {padding-top: 3rem;padding-bottom: 3rem
    }}`],"sm:py-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-14 {padding-top: 3.5rem;padding-bottom: 3.5rem
    }}`],"sm:py-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-16 {padding-top: 4rem;padding-bottom: 4rem
    }}`],"sm:py-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-2 {padding-top: 0.5rem;padding-bottom: 0.5rem
    }}`],"sm:py-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-20 {padding-top: 5rem;padding-bottom: 5rem
    }}`],"sm:py-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-24 {padding-top: 6rem;padding-bottom: 6rem
    }}`],"sm:py-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-28 {padding-top: 7rem;padding-bottom: 7rem
    }}`],"sm:py-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-3 {padding-top: 0.75rem;padding-bottom: 0.75rem
    }}`],"sm:py-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-32 {padding-top: 8rem;padding-bottom: 8rem
    }}`],"sm:py-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-4 {padding-top: 1rem;padding-bottom: 1rem
    }}`],"sm:py-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-40 {padding-top: 10rem;padding-bottom: 10rem
    }}`],"sm:py-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-48 {padding-top: 12rem;padding-bottom: 12rem
    }}`],"sm:py-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-5 {padding-top: 1.25rem;padding-bottom: 1.25rem
    }}`],"sm:py-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-56 {padding-top: 14rem;padding-bottom: 14rem
    }}`],"sm:py-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-6 {padding-top: 1.5rem;padding-bottom: 1.5rem
    }}`],"sm:py-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-64 {padding-top: 16rem;padding-bottom: 16rem
    }}`],"sm:py-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-7 {padding-top: 1.75rem;padding-bottom: 1.75rem
    }}`],"sm:py-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-8 {padding-top: 2rem;padding-bottom: 2rem
    }}`],"sm:py-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-80 {padding-top: 20rem;padding-bottom: 20rem
    }}`],"sm:py-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-9 {padding-top: 2.25rem;padding-bottom: 2.25rem
    }}`],"sm:py-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:py-96 {padding-top: 24rem;padding-bottom: 24rem
    }}`],"sm:pb-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-0 {padding-bottom: 0px
    }}`],"sm:pb-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-1 {padding-bottom: 0.25rem
    }}`],"sm:pb-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-10 {padding-bottom: 2.5rem
    }}`],"sm:pb-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-11 {padding-bottom: 2.75rem
    }}`],"sm:pb-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-12 {padding-bottom: 3rem
    }}`],"sm:pb-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-14 {padding-bottom: 3.5rem
    }}`],"sm:pb-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-16 {padding-bottom: 4rem
    }}`],"sm:pb-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-2 {padding-bottom: 0.5rem
    }}`],"sm:pb-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-20 {padding-bottom: 5rem
    }}`],"sm:pb-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-24 {padding-bottom: 6rem
    }}`],"sm:pb-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-28 {padding-bottom: 7rem
    }}`],"sm:pb-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-3 {padding-bottom: 0.75rem
    }}`],"sm:pb-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-32 {padding-bottom: 8rem
    }}`],"sm:pb-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-4 {padding-bottom: 1rem
    }}`],"sm:pb-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-40 {padding-bottom: 10rem
    }}`],"sm:pb-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-48 {padding-bottom: 12rem
    }}`],"sm:pb-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-5 {padding-bottom: 1.25rem
    }}`],"sm:pb-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-56 {padding-bottom: 14rem
    }}`],"sm:pb-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-6 {padding-bottom: 1.5rem
    }}`],"sm:pb-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-64 {padding-bottom: 16rem
    }}`],"sm:pb-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-7 {padding-bottom: 1.75rem
    }}`],"sm:pb-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-8 {padding-bottom: 2rem
    }}`],"sm:pb-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-80 {padding-bottom: 20rem
    }}`],"sm:pb-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-9 {padding-bottom: 2.25rem
    }}`],"sm:pb-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:pb-96 {padding-bottom: 24rem
    }}`],"sm:pl-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-0 {padding-left: 0px
    }}`],"sm:pl-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-1 {padding-left: 0.25rem
    }}`],"sm:pl-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-10 {padding-left: 2.5rem
    }}`],"sm:pl-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-11 {padding-left: 2.75rem
    }}`],"sm:pl-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-12 {padding-left: 3rem
    }}`],"sm:pl-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-14 {padding-left: 3.5rem
    }}`],"sm:pl-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-16 {padding-left: 4rem
    }}`],"sm:pl-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-2 {padding-left: 0.5rem
    }}`],"sm:pl-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-20 {padding-left: 5rem
    }}`],"sm:pl-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-24 {padding-left: 6rem
    }}`],"sm:pl-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-28 {padding-left: 7rem
    }}`],"sm:pl-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-3 {padding-left: 0.75rem
    }}`],"sm:pl-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-32 {padding-left: 8rem
    }}`],"sm:pl-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-4 {padding-left: 1rem
    }}`],"sm:pl-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-40 {padding-left: 10rem
    }}`],"sm:pl-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-48 {padding-left: 12rem
    }}`],"sm:pl-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-5 {padding-left: 1.25rem
    }}`],"sm:pl-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-56 {padding-left: 14rem
    }}`],"sm:pl-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-6 {padding-left: 1.5rem
    }}`],"sm:pl-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-64 {padding-left: 16rem
    }}`],"sm:pl-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-7 {padding-left: 1.75rem
    }}`],"sm:pl-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-8 {padding-left: 2rem
    }}`],"sm:pl-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-80 {padding-left: 20rem
    }}`],"sm:pl-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-9 {padding-left: 2.25rem
    }}`],"sm:pl-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:pl-96 {padding-left: 24rem
    }}`],"sm:pr-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-0 {padding-right: 0px
    }}`],"sm:pr-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-1 {padding-right: 0.25rem
    }}`],"sm:pr-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-10 {padding-right: 2.5rem
    }}`],"sm:pr-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-11 {padding-right: 2.75rem
    }}`],"sm:pr-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-12 {padding-right: 3rem
    }}`],"sm:pr-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-14 {padding-right: 3.5rem
    }}`],"sm:pr-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-16 {padding-right: 4rem
    }}`],"sm:pr-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-2 {padding-right: 0.5rem
    }}`],"sm:pr-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-20 {padding-right: 5rem
    }}`],"sm:pr-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-24 {padding-right: 6rem
    }}`],"sm:pr-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-28 {padding-right: 7rem
    }}`],"sm:pr-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-3 {padding-right: 0.75rem
    }}`],"sm:pr-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-32 {padding-right: 8rem
    }}`],"sm:pr-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-4 {padding-right: 1rem
    }}`],"sm:pr-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-40 {padding-right: 10rem
    }}`],"sm:pr-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-48 {padding-right: 12rem
    }}`],"sm:pr-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-5 {padding-right: 1.25rem
    }}`],"sm:pr-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-56 {padding-right: 14rem
    }}`],"sm:pr-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-6 {padding-right: 1.5rem
    }}`],"sm:pr-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-64 {padding-right: 16rem
    }}`],"sm:pr-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-7 {padding-right: 1.75rem
    }}`],"sm:pr-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-8 {padding-right: 2rem
    }}`],"sm:pr-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-80 {padding-right: 20rem
    }}`],"sm:pr-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-9 {padding-right: 2.25rem
    }}`],"sm:pr-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:pr-96 {padding-right: 24rem
    }}`],"sm:pt-0":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-0 {padding-top: 0px
    }}`],"sm:pt-1":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-1 {padding-top: 0.25rem
    }}`],"sm:pt-10":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-10 {padding-top: 2.5rem
    }}`],"sm:pt-11":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-11 {padding-top: 2.75rem
    }}`],"sm:pt-12":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-12 {padding-top: 3rem
    }}`],"sm:pt-14":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-14 {padding-top: 3.5rem
    }}`],"sm:pt-16":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-16 {padding-top: 4rem
    }}`],"sm:pt-2":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-2 {padding-top: 0.5rem
    }}`],"sm:pt-20":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-20 {padding-top: 5rem
    }}`],"sm:pt-24":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-24 {padding-top: 6rem
    }}`],"sm:pt-28":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-28 {padding-top: 7rem
    }}`],"sm:pt-3":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-3 {padding-top: 0.75rem
    }}`],"sm:pt-32":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-32 {padding-top: 8rem
    }}`],"sm:pt-4":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-4 {padding-top: 1rem
    }}`],"sm:pt-40":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-40 {padding-top: 10rem
    }}`],"sm:pt-48":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-48 {padding-top: 12rem
    }}`],"sm:pt-5":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-5 {padding-top: 1.25rem
    }}`],"sm:pt-56":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-56 {padding-top: 14rem
    }}`],"sm:pt-6":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-6 {padding-top: 1.5rem
    }}`],"sm:pt-64":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-64 {padding-top: 16rem
    }}`],"sm:pt-7":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-7 {padding-top: 1.75rem
    }}`],"sm:pt-8":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-8 {padding-top: 2rem
    }}`],"sm:pt-80":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-80 {padding-top: 20rem
    }}`],"sm:pt-9":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-9 {padding-top: 2.25rem
    }}`],"sm:pt-96":[`@media (min-width: 640px){__SCOPE__ .sm\\:pt-96 {padding-top: 24rem
    }}`],"sm:text-left":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-left {text-align: left
    }}`],"sm:text-center":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-center {text-align: center
    }}`],"sm:text-right":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-right {text-align: right
    }}`],"sm:text-2xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-2xl {font-size: 1.5rem;line-height: 2rem
    }}`],"sm:text-3xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-3xl {font-size: 1.875rem;line-height: 2.25rem
    }}`],"sm:text-4xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-4xl {font-size: 2.25rem;line-height: 2.5rem
    }}`],"sm:text-5xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-5xl {font-size: 3rem;line-height: 1
    }}`],"sm:text-6xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-6xl {font-size: 3.75rem;line-height: 1
    }}`],"sm:text-[40px]/[48px]":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-\\[40px\\]\\/\\[48px\\] {font-size: 40px;line-height: 48px
    }}`],"sm:text-[42px]":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-\\[42px\\] {font-size: 42px
    }}`],"sm:text-base":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-base {font-size: 1rem;line-height: 1.5rem
    }}`],"sm:text-lg":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-lg {font-size: 1.125rem;line-height: 1.75rem
    }}`],"sm:text-sm":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-sm {font-size: 0.875rem;line-height: 1.25rem
    }}`],"sm:text-xl":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-xl {font-size: 1.25rem;line-height: 1.75rem
    }}`],"sm:text-xs":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-xs {font-size: 0.75rem;line-height: 1rem
    }}`],"sm:text-black":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-black {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
    }}`],"sm:text-current":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-current {color: currentColor
    }}`],"sm:text-transparent":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-transparent {color: transparent
    }}`],"sm:text-white":[`@media (min-width: 640px){__SCOPE__ .sm\\:text-white {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
    }}`],"md:m-0":[`@media (min-width: 768px){__SCOPE__ .md\\:m-0 {margin: 0px
    }}`],"md:m-1":[`@media (min-width: 768px){__SCOPE__ .md\\:m-1 {margin: 0.25rem
    }}`],"md:m-10":[`@media (min-width: 768px){__SCOPE__ .md\\:m-10 {margin: 2.5rem
    }}`],"md:m-11":[`@media (min-width: 768px){__SCOPE__ .md\\:m-11 {margin: 2.75rem
    }}`],"md:m-12":[`@media (min-width: 768px){__SCOPE__ .md\\:m-12 {margin: 3rem
    }}`],"md:m-14":[`@media (min-width: 768px){__SCOPE__ .md\\:m-14 {margin: 3.5rem
    }}`],"md:m-16":[`@media (min-width: 768px){__SCOPE__ .md\\:m-16 {margin: 4rem
    }}`],"md:m-2":[`@media (min-width: 768px){__SCOPE__ .md\\:m-2 {margin: 0.5rem
    }}`],"md:m-20":[`@media (min-width: 768px){__SCOPE__ .md\\:m-20 {margin: 5rem
    }}`],"md:m-24":[`@media (min-width: 768px){__SCOPE__ .md\\:m-24 {margin: 6rem
    }}`],"md:m-28":[`@media (min-width: 768px){__SCOPE__ .md\\:m-28 {margin: 7rem
    }}`],"md:m-3":[`@media (min-width: 768px){__SCOPE__ .md\\:m-3 {margin: 0.75rem
    }}`],"md:m-32":[`@media (min-width: 768px){__SCOPE__ .md\\:m-32 {margin: 8rem
    }}`],"md:m-4":[`@media (min-width: 768px){__SCOPE__ .md\\:m-4 {margin: 1rem
    }}`],"md:m-40":[`@media (min-width: 768px){__SCOPE__ .md\\:m-40 {margin: 10rem
    }}`],"md:m-48":[`@media (min-width: 768px){__SCOPE__ .md\\:m-48 {margin: 12rem
    }}`],"md:m-5":[`@media (min-width: 768px){__SCOPE__ .md\\:m-5 {margin: 1.25rem
    }}`],"md:m-56":[`@media (min-width: 768px){__SCOPE__ .md\\:m-56 {margin: 14rem
    }}`],"md:m-6":[`@media (min-width: 768px){__SCOPE__ .md\\:m-6 {margin: 1.5rem
    }}`],"md:m-64":[`@media (min-width: 768px){__SCOPE__ .md\\:m-64 {margin: 16rem
    }}`],"md:m-7":[`@media (min-width: 768px){__SCOPE__ .md\\:m-7 {margin: 1.75rem
    }}`],"md:m-8":[`@media (min-width: 768px){__SCOPE__ .md\\:m-8 {margin: 2rem
    }}`],"md:m-80":[`@media (min-width: 768px){__SCOPE__ .md\\:m-80 {margin: 20rem
    }}`],"md:m-9":[`@media (min-width: 768px){__SCOPE__ .md\\:m-9 {margin: 2.25rem
    }}`],"md:m-96":[`@media (min-width: 768px){__SCOPE__ .md\\:m-96 {margin: 24rem
    }}`],"md:mx-0":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-0 {margin-left: 0px;margin-right: 0px
    }}`],"md:mx-1":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-1 {margin-left: 0.25rem;margin-right: 0.25rem
    }}`],"md:mx-10":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-10 {margin-left: 2.5rem;margin-right: 2.5rem
    }}`],"md:mx-11":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-11 {margin-left: 2.75rem;margin-right: 2.75rem
    }}`],"md:mx-12":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-12 {margin-left: 3rem;margin-right: 3rem
    }}`],"md:mx-14":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-14 {margin-left: 3.5rem;margin-right: 3.5rem
    }}`],"md:mx-16":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-16 {margin-left: 4rem;margin-right: 4rem
    }}`],"md:mx-2":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-2 {margin-left: 0.5rem;margin-right: 0.5rem
    }}`],"md:mx-20":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-20 {margin-left: 5rem;margin-right: 5rem
    }}`],"md:mx-24":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-24 {margin-left: 6rem;margin-right: 6rem
    }}`],"md:mx-28":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-28 {margin-left: 7rem;margin-right: 7rem
    }}`],"md:mx-3":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-3 {margin-left: 0.75rem;margin-right: 0.75rem
    }}`],"md:mx-32":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-32 {margin-left: 8rem;margin-right: 8rem
    }}`],"md:mx-4":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-4 {margin-left: 1rem;margin-right: 1rem
    }}`],"md:mx-40":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-40 {margin-left: 10rem;margin-right: 10rem
    }}`],"md:mx-48":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-48 {margin-left: 12rem;margin-right: 12rem
    }}`],"md:mx-5":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-5 {margin-left: 1.25rem;margin-right: 1.25rem
    }}`],"md:mx-56":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-56 {margin-left: 14rem;margin-right: 14rem
    }}`],"md:mx-6":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-6 {margin-left: 1.5rem;margin-right: 1.5rem
    }}`],"md:mx-64":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-64 {margin-left: 16rem;margin-right: 16rem
    }}`],"md:mx-7":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-7 {margin-left: 1.75rem;margin-right: 1.75rem
    }}`],"md:mx-8":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-8 {margin-left: 2rem;margin-right: 2rem
    }}`],"md:mx-80":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-80 {margin-left: 20rem;margin-right: 20rem
    }}`],"md:mx-9":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-9 {margin-left: 2.25rem;margin-right: 2.25rem
    }}`],"md:mx-96":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-96 {margin-left: 24rem;margin-right: 24rem
    }}`],"md:mx-auto":[`@media (min-width: 768px){__SCOPE__ .md\\:mx-auto {margin-left: auto;margin-right: auto
    }}`],"md:my-0":[`@media (min-width: 768px){__SCOPE__ .md\\:my-0 {margin-top: 0px;margin-bottom: 0px
    }}`],"md:my-1":[`@media (min-width: 768px){__SCOPE__ .md\\:my-1 {margin-top: 0.25rem;margin-bottom: 0.25rem
    }}`],"md:my-10":[`@media (min-width: 768px){__SCOPE__ .md\\:my-10 {margin-top: 2.5rem;margin-bottom: 2.5rem
    }}`],"md:my-11":[`@media (min-width: 768px){__SCOPE__ .md\\:my-11 {margin-top: 2.75rem;margin-bottom: 2.75rem
    }}`],"md:my-12":[`@media (min-width: 768px){__SCOPE__ .md\\:my-12 {margin-top: 3rem;margin-bottom: 3rem
    }}`],"md:my-14":[`@media (min-width: 768px){__SCOPE__ .md\\:my-14 {margin-top: 3.5rem;margin-bottom: 3.5rem
    }}`],"md:my-16":[`@media (min-width: 768px){__SCOPE__ .md\\:my-16 {margin-top: 4rem;margin-bottom: 4rem
    }}`],"md:my-2":[`@media (min-width: 768px){__SCOPE__ .md\\:my-2 {margin-top: 0.5rem;margin-bottom: 0.5rem
    }}`],"md:my-20":[`@media (min-width: 768px){__SCOPE__ .md\\:my-20 {margin-top: 5rem;margin-bottom: 5rem
    }}`],"md:my-24":[`@media (min-width: 768px){__SCOPE__ .md\\:my-24 {margin-top: 6rem;margin-bottom: 6rem
    }}`],"md:my-28":[`@media (min-width: 768px){__SCOPE__ .md\\:my-28 {margin-top: 7rem;margin-bottom: 7rem
    }}`],"md:my-3":[`@media (min-width: 768px){__SCOPE__ .md\\:my-3 {margin-top: 0.75rem;margin-bottom: 0.75rem
    }}`],"md:my-32":[`@media (min-width: 768px){__SCOPE__ .md\\:my-32 {margin-top: 8rem;margin-bottom: 8rem
    }}`],"md:my-4":[`@media (min-width: 768px){__SCOPE__ .md\\:my-4 {margin-top: 1rem;margin-bottom: 1rem
    }}`],"md:my-40":[`@media (min-width: 768px){__SCOPE__ .md\\:my-40 {margin-top: 10rem;margin-bottom: 10rem
    }}`],"md:my-48":[`@media (min-width: 768px){__SCOPE__ .md\\:my-48 {margin-top: 12rem;margin-bottom: 12rem
    }}`],"md:my-5":[`@media (min-width: 768px){__SCOPE__ .md\\:my-5 {margin-top: 1.25rem;margin-bottom: 1.25rem
    }}`],"md:my-56":[`@media (min-width: 768px){__SCOPE__ .md\\:my-56 {margin-top: 14rem;margin-bottom: 14rem
    }}`],"md:my-6":[`@media (min-width: 768px){__SCOPE__ .md\\:my-6 {margin-top: 1.5rem;margin-bottom: 1.5rem
    }}`],"md:my-64":[`@media (min-width: 768px){__SCOPE__ .md\\:my-64 {margin-top: 16rem;margin-bottom: 16rem
    }}`],"md:my-7":[`@media (min-width: 768px){__SCOPE__ .md\\:my-7 {margin-top: 1.75rem;margin-bottom: 1.75rem
    }}`],"md:my-8":[`@media (min-width: 768px){__SCOPE__ .md\\:my-8 {margin-top: 2rem;margin-bottom: 2rem
    }}`],"md:my-80":[`@media (min-width: 768px){__SCOPE__ .md\\:my-80 {margin-top: 20rem;margin-bottom: 20rem
    }}`],"md:my-9":[`@media (min-width: 768px){__SCOPE__ .md\\:my-9 {margin-top: 2.25rem;margin-bottom: 2.25rem
    }}`],"md:my-96":[`@media (min-width: 768px){__SCOPE__ .md\\:my-96 {margin-top: 24rem;margin-bottom: 24rem
    }}`],"md:mb-0":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-0 {margin-bottom: 0px
    }}`],"md:mb-1":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-1 {margin-bottom: 0.25rem
    }}`],"md:mb-10":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-10 {margin-bottom: 2.5rem
    }}`],"md:mb-11":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-11 {margin-bottom: 2.75rem
    }}`],"md:mb-12":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-12 {margin-bottom: 3rem
    }}`],"md:mb-14":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-14 {margin-bottom: 3.5rem
    }}`],"md:mb-16":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-16 {margin-bottom: 4rem
    }}`],"md:mb-2":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-2 {margin-bottom: 0.5rem
    }}`],"md:mb-20":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-20 {margin-bottom: 5rem
    }}`],"md:mb-24":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-24 {margin-bottom: 6rem
    }}`],"md:mb-28":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-28 {margin-bottom: 7rem
    }}`],"md:mb-3":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-3 {margin-bottom: 0.75rem
    }}`],"md:mb-32":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-32 {margin-bottom: 8rem
    }}`],"md:mb-4":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-4 {margin-bottom: 1rem
    }}`],"md:mb-40":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-40 {margin-bottom: 10rem
    }}`],"md:mb-48":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-48 {margin-bottom: 12rem
    }}`],"md:mb-5":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-5 {margin-bottom: 1.25rem
    }}`],"md:mb-56":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-56 {margin-bottom: 14rem
    }}`],"md:mb-6":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-6 {margin-bottom: 1.5rem
    }}`],"md:mb-64":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-64 {margin-bottom: 16rem
    }}`],"md:mb-7":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-7 {margin-bottom: 1.75rem
    }}`],"md:mb-8":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-8 {margin-bottom: 2rem
    }}`],"md:mb-80":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-80 {margin-bottom: 20rem
    }}`],"md:mb-9":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-9 {margin-bottom: 2.25rem
    }}`],"md:mb-96":[`@media (min-width: 768px){__SCOPE__ .md\\:mb-96 {margin-bottom: 24rem
    }}`],"md:ml-0":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-0 {margin-left: 0px
    }}`],"md:ml-1":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-1 {margin-left: 0.25rem
    }}`],"md:ml-10":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-10 {margin-left: 2.5rem
    }}`],"md:ml-11":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-11 {margin-left: 2.75rem
    }}`],"md:ml-12":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-12 {margin-left: 3rem
    }}`],"md:ml-14":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-14 {margin-left: 3.5rem
    }}`],"md:ml-16":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-16 {margin-left: 4rem
    }}`],"md:ml-2":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-2 {margin-left: 0.5rem
    }}`],"md:ml-20":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-20 {margin-left: 5rem
    }}`],"md:ml-24":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-24 {margin-left: 6rem
    }}`],"md:ml-28":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-28 {margin-left: 7rem
    }}`],"md:ml-3":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-3 {margin-left: 0.75rem
    }}`],"md:ml-32":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-32 {margin-left: 8rem
    }}`],"md:ml-4":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-4 {margin-left: 1rem
    }}`],"md:ml-40":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-40 {margin-left: 10rem
    }}`],"md:ml-48":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-48 {margin-left: 12rem
    }}`],"md:ml-5":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-5 {margin-left: 1.25rem
    }}`],"md:ml-56":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-56 {margin-left: 14rem
    }}`],"md:ml-6":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-6 {margin-left: 1.5rem
    }}`],"md:ml-64":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-64 {margin-left: 16rem
    }}`],"md:ml-7":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-7 {margin-left: 1.75rem
    }}`],"md:ml-8":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-8 {margin-left: 2rem
    }}`],"md:ml-80":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-80 {margin-left: 20rem
    }}`],"md:ml-9":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-9 {margin-left: 2.25rem
    }}`],"md:ml-96":[`@media (min-width: 768px){__SCOPE__ .md\\:ml-96 {margin-left: 24rem
    }}`],"md:mr-0":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-0 {margin-right: 0px
    }}`],"md:mr-1":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-1 {margin-right: 0.25rem
    }}`],"md:mr-10":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-10 {margin-right: 2.5rem
    }}`],"md:mr-11":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-11 {margin-right: 2.75rem
    }}`],"md:mr-12":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-12 {margin-right: 3rem
    }}`],"md:mr-14":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-14 {margin-right: 3.5rem
    }}`],"md:mr-16":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-16 {margin-right: 4rem
    }}`],"md:mr-2":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-2 {margin-right: 0.5rem
    }}`],"md:mr-20":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-20 {margin-right: 5rem
    }}`],"md:mr-24":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-24 {margin-right: 6rem
    }}`],"md:mr-28":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-28 {margin-right: 7rem
    }}`],"md:mr-3":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-3 {margin-right: 0.75rem
    }}`],"md:mr-32":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-32 {margin-right: 8rem
    }}`],"md:mr-4":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-4 {margin-right: 1rem
    }}`],"md:mr-40":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-40 {margin-right: 10rem
    }}`],"md:mr-48":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-48 {margin-right: 12rem
    }}`],"md:mr-5":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-5 {margin-right: 1.25rem
    }}`],"md:mr-56":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-56 {margin-right: 14rem
    }}`],"md:mr-6":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-6 {margin-right: 1.5rem
    }}`],"md:mr-64":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-64 {margin-right: 16rem
    }}`],"md:mr-7":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-7 {margin-right: 1.75rem
    }}`],"md:mr-8":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-8 {margin-right: 2rem
    }}`],"md:mr-80":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-80 {margin-right: 20rem
    }}`],"md:mr-9":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-9 {margin-right: 2.25rem
    }}`],"md:mr-96":[`@media (min-width: 768px){__SCOPE__ .md\\:mr-96 {margin-right: 24rem
    }}`],"md:mt-0":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-0 {margin-top: 0px
    }}`],"md:mt-1":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-1 {margin-top: 0.25rem
    }}`],"md:mt-10":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-10 {margin-top: 2.5rem
    }}`],"md:mt-11":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-11 {margin-top: 2.75rem
    }}`],"md:mt-12":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-12 {margin-top: 3rem
    }}`],"md:mt-14":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-14 {margin-top: 3.5rem
    }}`],"md:mt-16":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-16 {margin-top: 4rem
    }}`],"md:mt-2":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-2 {margin-top: 0.5rem
    }}`],"md:mt-20":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-20 {margin-top: 5rem
    }}`],"md:mt-24":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-24 {margin-top: 6rem
    }}`],"md:mt-28":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-28 {margin-top: 7rem
    }}`],"md:mt-3":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-3 {margin-top: 0.75rem
    }}`],"md:mt-32":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-32 {margin-top: 8rem
    }}`],"md:mt-4":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-4 {margin-top: 1rem
    }}`],"md:mt-40":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-40 {margin-top: 10rem
    }}`],"md:mt-48":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-48 {margin-top: 12rem
    }}`],"md:mt-5":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-5 {margin-top: 1.25rem
    }}`],"md:mt-56":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-56 {margin-top: 14rem
    }}`],"md:mt-6":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-6 {margin-top: 1.5rem
    }}`],"md:mt-64":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-64 {margin-top: 16rem
    }}`],"md:mt-7":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-7 {margin-top: 1.75rem
    }}`],"md:mt-8":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-8 {margin-top: 2rem
    }}`],"md:mt-80":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-80 {margin-top: 20rem
    }}`],"md:mt-9":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-9 {margin-top: 2.25rem
    }}`],"md:mt-96":[`@media (min-width: 768px){__SCOPE__ .md\\:mt-96 {margin-top: 24rem
    }}`],"md:block":[`@media (min-width: 768px){__SCOPE__ .md\\:block {display: block
    }}`],"md:flex":[`@media (min-width: 768px){__SCOPE__ .md\\:flex {display: flex
    }}`],"md:grid":[`@media (min-width: 768px){__SCOPE__ .md\\:grid {display: grid
    }}`],"md:hidden":[`@media (min-width: 768px){__SCOPE__ .md\\:hidden {display: none
    }}`],"md:w-0":[`@media (min-width: 768px){__SCOPE__ .md\\:w-0 {width: 0px
    }}`],"md:w-1":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1 {width: 0.25rem
    }}`],"md:w-1/2":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1\\/2 {width: 50%
    }}`],"md:w-1/3":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1\\/3 {width: 33.333333%
    }}`],"md:w-1/4":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1\\/4 {width: 25%
    }}`],"md:w-1/5":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1\\/5 {width: 20%
    }}`],"md:w-1/6":[`@media (min-width: 768px){__SCOPE__ .md\\:w-1\\/6 {width: 16.666667%
    }}`],"md:w-10":[`@media (min-width: 768px){__SCOPE__ .md\\:w-10 {width: 2.5rem
    }}`],"md:w-11":[`@media (min-width: 768px){__SCOPE__ .md\\:w-11 {width: 2.75rem
    }}`],"md:w-12":[`@media (min-width: 768px){__SCOPE__ .md\\:w-12 {width: 3rem
    }}`],"md:w-14":[`@media (min-width: 768px){__SCOPE__ .md\\:w-14 {width: 3.5rem
    }}`],"md:w-16":[`@media (min-width: 768px){__SCOPE__ .md\\:w-16 {width: 4rem
    }}`],"md:w-2":[`@media (min-width: 768px){__SCOPE__ .md\\:w-2 {width: 0.5rem
    }}`],"md:w-2/3":[`@media (min-width: 768px){__SCOPE__ .md\\:w-2\\/3 {width: 66.666667%
    }}`],"md:w-2/5":[`@media (min-width: 768px){__SCOPE__ .md\\:w-2\\/5 {width: 40%
    }}`],"md:w-20":[`@media (min-width: 768px){__SCOPE__ .md\\:w-20 {width: 5rem
    }}`],"md:w-24":[`@media (min-width: 768px){__SCOPE__ .md\\:w-24 {width: 6rem
    }}`],"md:w-28":[`@media (min-width: 768px){__SCOPE__ .md\\:w-28 {width: 7rem
    }}`],"md:w-3":[`@media (min-width: 768px){__SCOPE__ .md\\:w-3 {width: 0.75rem
    }}`],"md:w-3/4":[`@media (min-width: 768px){__SCOPE__ .md\\:w-3\\/4 {width: 75%
    }}`],"md:w-3/5":[`@media (min-width: 768px){__SCOPE__ .md\\:w-3\\/5 {width: 60%
    }}`],"md:w-32":[`@media (min-width: 768px){__SCOPE__ .md\\:w-32 {width: 8rem
    }}`],"md:w-4":[`@media (min-width: 768px){__SCOPE__ .md\\:w-4 {width: 1rem
    }}`],"md:w-4/5":[`@media (min-width: 768px){__SCOPE__ .md\\:w-4\\/5 {width: 80%
    }}`],"md:w-40":[`@media (min-width: 768px){__SCOPE__ .md\\:w-40 {width: 10rem
    }}`],"md:w-48":[`@media (min-width: 768px){__SCOPE__ .md\\:w-48 {width: 12rem
    }}`],"md:w-5":[`@media (min-width: 768px){__SCOPE__ .md\\:w-5 {width: 1.25rem
    }}`],"md:w-5/12":[`@media (min-width: 768px){__SCOPE__ .md\\:w-5\\/12 {width: 41.666667%
    }}`],"md:w-5/6":[`@media (min-width: 768px){__SCOPE__ .md\\:w-5\\/6 {width: 83.333333%
    }}`],"md:w-56":[`@media (min-width: 768px){__SCOPE__ .md\\:w-56 {width: 14rem
    }}`],"md:w-6":[`@media (min-width: 768px){__SCOPE__ .md\\:w-6 {width: 1.5rem
    }}`],"md:w-6/12":[`@media (min-width: 768px){__SCOPE__ .md\\:w-6\\/12 {width: 50%
    }}`],"md:w-64":[`@media (min-width: 768px){__SCOPE__ .md\\:w-64 {width: 16rem
    }}`],"md:w-7":[`@media (min-width: 768px){__SCOPE__ .md\\:w-7 {width: 1.75rem
    }}`],"md:w-8":[`@media (min-width: 768px){__SCOPE__ .md\\:w-8 {width: 2rem
    }}`],"md:w-80":[`@media (min-width: 768px){__SCOPE__ .md\\:w-80 {width: 20rem
    }}`],"md:w-9":[`@media (min-width: 768px){__SCOPE__ .md\\:w-9 {width: 2.25rem
    }}`],"md:w-96":[`@media (min-width: 768px){__SCOPE__ .md\\:w-96 {width: 24rem
    }}`],"md:w-auto":[`@media (min-width: 768px){__SCOPE__ .md\\:w-auto {width: auto
    }}`],"md:w-full":[`@media (min-width: 768px){__SCOPE__ .md\\:w-full {width: 100%
    }}`],"md:flex-1":[`@media (min-width: 768px){__SCOPE__ .md\\:flex-1 {flex: 1 1 0%
    }}`],"md:grid-cols-1":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-1 {grid-template-columns: repeat(1, minmax(0, 1fr))
    }}`],"md:grid-cols-12":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-12 {grid-template-columns: repeat(12, minmax(0, 1fr))
    }}`],"md:grid-cols-2":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-2 {grid-template-columns: repeat(2, minmax(0, 1fr))
    }}`],"md:grid-cols-3":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-3 {grid-template-columns: repeat(3, minmax(0, 1fr))
    }}`],"md:grid-cols-4":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-4 {grid-template-columns: repeat(4, minmax(0, 1fr))
    }}`],"md:grid-cols-5":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-5 {grid-template-columns: repeat(5, minmax(0, 1fr))
    }}`],"md:grid-cols-6":[`@media (min-width: 768px){__SCOPE__ .md\\:grid-cols-6 {grid-template-columns: repeat(6, minmax(0, 1fr))
    }}`],"md:flex-row":[`@media (min-width: 768px){__SCOPE__ .md\\:flex-row {flex-direction: row
    }}`],"md:flex-col":[`@media (min-width: 768px){__SCOPE__ .md\\:flex-col {flex-direction: column
    }}`],"md:flex-wrap":[`@media (min-width: 768px){__SCOPE__ .md\\:flex-wrap {flex-wrap: wrap
    }}`],"md:items-start":[`@media (min-width: 768px){__SCOPE__ .md\\:items-start {align-items: flex-start
    }}`],"md:items-end":[`@media (min-width: 768px){__SCOPE__ .md\\:items-end {align-items: flex-end
    }}`],"md:items-center":[`@media (min-width: 768px){__SCOPE__ .md\\:items-center {align-items: center
    }}`],"md:justify-end":[`@media (min-width: 768px){__SCOPE__ .md\\:justify-end {justify-content: flex-end
    }}`],"md:justify-center":[`@media (min-width: 768px){__SCOPE__ .md\\:justify-center {justify-content: center
    }}`],"md:justify-between":[`@media (min-width: 768px){__SCOPE__ .md\\:justify-between {justify-content: space-between
    }}`],"md:gap-0":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-0 {gap: 0px
    }}`],"md:gap-1":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-1 {gap: 0.25rem
    }}`],"md:gap-10":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-10 {gap: 2.5rem
    }}`],"md:gap-11":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-11 {gap: 2.75rem
    }}`],"md:gap-12":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-12 {gap: 3rem
    }}`],"md:gap-14":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-14 {gap: 3.5rem
    }}`],"md:gap-16":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-16 {gap: 4rem
    }}`],"md:gap-2":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-2 {gap: 0.5rem
    }}`],"md:gap-20":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-20 {gap: 5rem
    }}`],"md:gap-24":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-24 {gap: 6rem
    }}`],"md:gap-28":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-28 {gap: 7rem
    }}`],"md:gap-3":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-3 {gap: 0.75rem
    }}`],"md:gap-32":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-32 {gap: 8rem
    }}`],"md:gap-4":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-4 {gap: 1rem
    }}`],"md:gap-40":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-40 {gap: 10rem
    }}`],"md:gap-48":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-48 {gap: 12rem
    }}`],"md:gap-5":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-5 {gap: 1.25rem
    }}`],"md:gap-56":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-56 {gap: 14rem
    }}`],"md:gap-6":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-6 {gap: 1.5rem
    }}`],"md:gap-64":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-64 {gap: 16rem
    }}`],"md:gap-7":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-7 {gap: 1.75rem
    }}`],"md:gap-8":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-8 {gap: 2rem
    }}`],"md:gap-80":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-80 {gap: 20rem
    }}`],"md:gap-9":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-9 {gap: 2.25rem
    }}`],"md:gap-96":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-96 {gap: 24rem
    }}`],"md:gap-x-0":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-0 {column-gap: 0px
    }}`],"md:gap-x-1":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-1 {column-gap: 0.25rem
    }}`],"md:gap-x-10":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-10 {column-gap: 2.5rem
    }}`],"md:gap-x-11":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-11 {column-gap: 2.75rem
    }}`],"md:gap-x-12":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-12 {column-gap: 3rem
    }}`],"md:gap-x-14":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-14 {column-gap: 3.5rem
    }}`],"md:gap-x-16":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-16 {column-gap: 4rem
    }}`],"md:gap-x-2":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-2 {column-gap: 0.5rem
    }}`],"md:gap-x-20":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-20 {column-gap: 5rem
    }}`],"md:gap-x-24":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-24 {column-gap: 6rem
    }}`],"md:gap-x-28":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-28 {column-gap: 7rem
    }}`],"md:gap-x-3":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-3 {column-gap: 0.75rem
    }}`],"md:gap-x-32":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-32 {column-gap: 8rem
    }}`],"md:gap-x-4":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-4 {column-gap: 1rem
    }}`],"md:gap-x-40":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-40 {column-gap: 10rem
    }}`],"md:gap-x-48":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-48 {column-gap: 12rem
    }}`],"md:gap-x-5":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-5 {column-gap: 1.25rem
    }}`],"md:gap-x-56":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-56 {column-gap: 14rem
    }}`],"md:gap-x-6":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-6 {column-gap: 1.5rem
    }}`],"md:gap-x-64":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-64 {column-gap: 16rem
    }}`],"md:gap-x-7":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-7 {column-gap: 1.75rem
    }}`],"md:gap-x-8":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-8 {column-gap: 2rem
    }}`],"md:gap-x-80":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-80 {column-gap: 20rem
    }}`],"md:gap-x-9":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-9 {column-gap: 2.25rem
    }}`],"md:gap-x-96":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-x-96 {column-gap: 24rem
    }}`],"md:gap-y-0":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-0 {row-gap: 0px
    }}`],"md:gap-y-1":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-1 {row-gap: 0.25rem
    }}`],"md:gap-y-10":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-10 {row-gap: 2.5rem
    }}`],"md:gap-y-11":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-11 {row-gap: 2.75rem
    }}`],"md:gap-y-12":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-12 {row-gap: 3rem
    }}`],"md:gap-y-14":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-14 {row-gap: 3.5rem
    }}`],"md:gap-y-16":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-16 {row-gap: 4rem
    }}`],"md:gap-y-2":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-2 {row-gap: 0.5rem
    }}`],"md:gap-y-20":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-20 {row-gap: 5rem
    }}`],"md:gap-y-24":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-24 {row-gap: 6rem
    }}`],"md:gap-y-28":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-28 {row-gap: 7rem
    }}`],"md:gap-y-3":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-3 {row-gap: 0.75rem
    }}`],"md:gap-y-32":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-32 {row-gap: 8rem
    }}`],"md:gap-y-4":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-4 {row-gap: 1rem
    }}`],"md:gap-y-40":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-40 {row-gap: 10rem
    }}`],"md:gap-y-48":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-48 {row-gap: 12rem
    }}`],"md:gap-y-5":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-5 {row-gap: 1.25rem
    }}`],"md:gap-y-56":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-56 {row-gap: 14rem
    }}`],"md:gap-y-6":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-6 {row-gap: 1.5rem
    }}`],"md:gap-y-64":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-64 {row-gap: 16rem
    }}`],"md:gap-y-7":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-7 {row-gap: 1.75rem
    }}`],"md:gap-y-8":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-8 {row-gap: 2rem
    }}`],"md:gap-y-80":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-80 {row-gap: 20rem
    }}`],"md:gap-y-9":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-9 {row-gap: 2.25rem
    }}`],"md:gap-y-96":[`@media (min-width: 768px){__SCOPE__ .md\\:gap-y-96 {row-gap: 24rem
    }}`],"md:p-0":[`@media (min-width: 768px){__SCOPE__ .md\\:p-0 {padding: 0px
    }}`],"md:p-1":[`@media (min-width: 768px){__SCOPE__ .md\\:p-1 {padding: 0.25rem
    }}`],"md:p-10":[`@media (min-width: 768px){__SCOPE__ .md\\:p-10 {padding: 2.5rem
    }}`],"md:p-11":[`@media (min-width: 768px){__SCOPE__ .md\\:p-11 {padding: 2.75rem
    }}`],"md:p-12":[`@media (min-width: 768px){__SCOPE__ .md\\:p-12 {padding: 3rem
    }}`],"md:p-14":[`@media (min-width: 768px){__SCOPE__ .md\\:p-14 {padding: 3.5rem
    }}`],"md:p-16":[`@media (min-width: 768px){__SCOPE__ .md\\:p-16 {padding: 4rem
    }}`],"md:p-2":[`@media (min-width: 768px){__SCOPE__ .md\\:p-2 {padding: 0.5rem
    }}`],"md:p-20":[`@media (min-width: 768px){__SCOPE__ .md\\:p-20 {padding: 5rem
    }}`],"md:p-24":[`@media (min-width: 768px){__SCOPE__ .md\\:p-24 {padding: 6rem
    }}`],"md:p-28":[`@media (min-width: 768px){__SCOPE__ .md\\:p-28 {padding: 7rem
    }}`],"md:p-3":[`@media (min-width: 768px){__SCOPE__ .md\\:p-3 {padding: 0.75rem
    }}`],"md:p-32":[`@media (min-width: 768px){__SCOPE__ .md\\:p-32 {padding: 8rem
    }}`],"md:p-4":[`@media (min-width: 768px){__SCOPE__ .md\\:p-4 {padding: 1rem
    }}`],"md:p-40":[`@media (min-width: 768px){__SCOPE__ .md\\:p-40 {padding: 10rem
    }}`],"md:p-48":[`@media (min-width: 768px){__SCOPE__ .md\\:p-48 {padding: 12rem
    }}`],"md:p-5":[`@media (min-width: 768px){__SCOPE__ .md\\:p-5 {padding: 1.25rem
    }}`],"md:p-56":[`@media (min-width: 768px){__SCOPE__ .md\\:p-56 {padding: 14rem
    }}`],"md:p-6":[`@media (min-width: 768px){__SCOPE__ .md\\:p-6 {padding: 1.5rem
    }}`],"md:p-64":[`@media (min-width: 768px){__SCOPE__ .md\\:p-64 {padding: 16rem
    }}`],"md:p-7":[`@media (min-width: 768px){__SCOPE__ .md\\:p-7 {padding: 1.75rem
    }}`],"md:p-8":[`@media (min-width: 768px){__SCOPE__ .md\\:p-8 {padding: 2rem
    }}`],"md:p-80":[`@media (min-width: 768px){__SCOPE__ .md\\:p-80 {padding: 20rem
    }}`],"md:p-9":[`@media (min-width: 768px){__SCOPE__ .md\\:p-9 {padding: 2.25rem
    }}`],"md:p-96":[`@media (min-width: 768px){__SCOPE__ .md\\:p-96 {padding: 24rem
    }}`],"md:px-0":[`@media (min-width: 768px){__SCOPE__ .md\\:px-0 {padding-left: 0px;padding-right: 0px
    }}`],"md:px-1":[`@media (min-width: 768px){__SCOPE__ .md\\:px-1 {padding-left: 0.25rem;padding-right: 0.25rem
    }}`],"md:px-10":[`@media (min-width: 768px){__SCOPE__ .md\\:px-10 {padding-left: 2.5rem;padding-right: 2.5rem
    }}`],"md:px-11":[`@media (min-width: 768px){__SCOPE__ .md\\:px-11 {padding-left: 2.75rem;padding-right: 2.75rem
    }}`],"md:px-12":[`@media (min-width: 768px){__SCOPE__ .md\\:px-12 {padding-left: 3rem;padding-right: 3rem
    }}`],"md:px-14":[`@media (min-width: 768px){__SCOPE__ .md\\:px-14 {padding-left: 3.5rem;padding-right: 3.5rem
    }}`],"md:px-16":[`@media (min-width: 768px){__SCOPE__ .md\\:px-16 {padding-left: 4rem;padding-right: 4rem
    }}`],"md:px-2":[`@media (min-width: 768px){__SCOPE__ .md\\:px-2 {padding-left: 0.5rem;padding-right: 0.5rem
    }}`],"md:px-20":[`@media (min-width: 768px){__SCOPE__ .md\\:px-20 {padding-left: 5rem;padding-right: 5rem
    }}`],"md:px-24":[`@media (min-width: 768px){__SCOPE__ .md\\:px-24 {padding-left: 6rem;padding-right: 6rem
    }}`],"md:px-28":[`@media (min-width: 768px){__SCOPE__ .md\\:px-28 {padding-left: 7rem;padding-right: 7rem
    }}`],"md:px-3":[`@media (min-width: 768px){__SCOPE__ .md\\:px-3 {padding-left: 0.75rem;padding-right: 0.75rem
    }}`],"md:px-32":[`@media (min-width: 768px){__SCOPE__ .md\\:px-32 {padding-left: 8rem;padding-right: 8rem
    }}`],"md:px-4":[`@media (min-width: 768px){__SCOPE__ .md\\:px-4 {padding-left: 1rem;padding-right: 1rem
    }}`],"md:px-40":[`@media (min-width: 768px){__SCOPE__ .md\\:px-40 {padding-left: 10rem;padding-right: 10rem
    }}`],"md:px-48":[`@media (min-width: 768px){__SCOPE__ .md\\:px-48 {padding-left: 12rem;padding-right: 12rem
    }}`],"md:px-5":[`@media (min-width: 768px){__SCOPE__ .md\\:px-5 {padding-left: 1.25rem;padding-right: 1.25rem
    }}`],"md:px-56":[`@media (min-width: 768px){__SCOPE__ .md\\:px-56 {padding-left: 14rem;padding-right: 14rem
    }}`],"md:px-6":[`@media (min-width: 768px){__SCOPE__ .md\\:px-6 {padding-left: 1.5rem;padding-right: 1.5rem
    }}`],"md:px-64":[`@media (min-width: 768px){__SCOPE__ .md\\:px-64 {padding-left: 16rem;padding-right: 16rem
    }}`],"md:px-7":[`@media (min-width: 768px){__SCOPE__ .md\\:px-7 {padding-left: 1.75rem;padding-right: 1.75rem
    }}`],"md:px-8":[`@media (min-width: 768px){__SCOPE__ .md\\:px-8 {padding-left: 2rem;padding-right: 2rem
    }}`],"md:px-80":[`@media (min-width: 768px){__SCOPE__ .md\\:px-80 {padding-left: 20rem;padding-right: 20rem
    }}`],"md:px-9":[`@media (min-width: 768px){__SCOPE__ .md\\:px-9 {padding-left: 2.25rem;padding-right: 2.25rem
    }}`],"md:px-96":[`@media (min-width: 768px){__SCOPE__ .md\\:px-96 {padding-left: 24rem;padding-right: 24rem
    }}`],"md:py-0":[`@media (min-width: 768px){__SCOPE__ .md\\:py-0 {padding-top: 0px;padding-bottom: 0px
    }}`],"md:py-1":[`@media (min-width: 768px){__SCOPE__ .md\\:py-1 {padding-top: 0.25rem;padding-bottom: 0.25rem
    }}`],"md:py-10":[`@media (min-width: 768px){__SCOPE__ .md\\:py-10 {padding-top: 2.5rem;padding-bottom: 2.5rem
    }}`],"md:py-11":[`@media (min-width: 768px){__SCOPE__ .md\\:py-11 {padding-top: 2.75rem;padding-bottom: 2.75rem
    }}`],"md:py-12":[`@media (min-width: 768px){__SCOPE__ .md\\:py-12 {padding-top: 3rem;padding-bottom: 3rem
    }}`],"md:py-14":[`@media (min-width: 768px){__SCOPE__ .md\\:py-14 {padding-top: 3.5rem;padding-bottom: 3.5rem
    }}`],"md:py-16":[`@media (min-width: 768px){__SCOPE__ .md\\:py-16 {padding-top: 4rem;padding-bottom: 4rem
    }}`],"md:py-2":[`@media (min-width: 768px){__SCOPE__ .md\\:py-2 {padding-top: 0.5rem;padding-bottom: 0.5rem
    }}`],"md:py-20":[`@media (min-width: 768px){__SCOPE__ .md\\:py-20 {padding-top: 5rem;padding-bottom: 5rem
    }}`],"md:py-24":[`@media (min-width: 768px){__SCOPE__ .md\\:py-24 {padding-top: 6rem;padding-bottom: 6rem
    }}`],"md:py-28":[`@media (min-width: 768px){__SCOPE__ .md\\:py-28 {padding-top: 7rem;padding-bottom: 7rem
    }}`],"md:py-3":[`@media (min-width: 768px){__SCOPE__ .md\\:py-3 {padding-top: 0.75rem;padding-bottom: 0.75rem
    }}`],"md:py-32":[`@media (min-width: 768px){__SCOPE__ .md\\:py-32 {padding-top: 8rem;padding-bottom: 8rem
    }}`],"md:py-4":[`@media (min-width: 768px){__SCOPE__ .md\\:py-4 {padding-top: 1rem;padding-bottom: 1rem
    }}`],"md:py-40":[`@media (min-width: 768px){__SCOPE__ .md\\:py-40 {padding-top: 10rem;padding-bottom: 10rem
    }}`],"md:py-48":[`@media (min-width: 768px){__SCOPE__ .md\\:py-48 {padding-top: 12rem;padding-bottom: 12rem
    }}`],"md:py-5":[`@media (min-width: 768px){__SCOPE__ .md\\:py-5 {padding-top: 1.25rem;padding-bottom: 1.25rem
    }}`],"md:py-56":[`@media (min-width: 768px){__SCOPE__ .md\\:py-56 {padding-top: 14rem;padding-bottom: 14rem
    }}`],"md:py-6":[`@media (min-width: 768px){__SCOPE__ .md\\:py-6 {padding-top: 1.5rem;padding-bottom: 1.5rem
    }}`],"md:py-64":[`@media (min-width: 768px){__SCOPE__ .md\\:py-64 {padding-top: 16rem;padding-bottom: 16rem
    }}`],"md:py-7":[`@media (min-width: 768px){__SCOPE__ .md\\:py-7 {padding-top: 1.75rem;padding-bottom: 1.75rem
    }}`],"md:py-8":[`@media (min-width: 768px){__SCOPE__ .md\\:py-8 {padding-top: 2rem;padding-bottom: 2rem
    }}`],"md:py-80":[`@media (min-width: 768px){__SCOPE__ .md\\:py-80 {padding-top: 20rem;padding-bottom: 20rem
    }}`],"md:py-9":[`@media (min-width: 768px){__SCOPE__ .md\\:py-9 {padding-top: 2.25rem;padding-bottom: 2.25rem
    }}`],"md:py-96":[`@media (min-width: 768px){__SCOPE__ .md\\:py-96 {padding-top: 24rem;padding-bottom: 24rem
    }}`],"md:pb-0":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-0 {padding-bottom: 0px
    }}`],"md:pb-1":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-1 {padding-bottom: 0.25rem
    }}`],"md:pb-10":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-10 {padding-bottom: 2.5rem
    }}`],"md:pb-11":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-11 {padding-bottom: 2.75rem
    }}`],"md:pb-12":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-12 {padding-bottom: 3rem
    }}`],"md:pb-14":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-14 {padding-bottom: 3.5rem
    }}`],"md:pb-16":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-16 {padding-bottom: 4rem
    }}`],"md:pb-2":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-2 {padding-bottom: 0.5rem
    }}`],"md:pb-20":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-20 {padding-bottom: 5rem
    }}`],"md:pb-24":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-24 {padding-bottom: 6rem
    }}`],"md:pb-28":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-28 {padding-bottom: 7rem
    }}`],"md:pb-3":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-3 {padding-bottom: 0.75rem
    }}`],"md:pb-32":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-32 {padding-bottom: 8rem
    }}`],"md:pb-4":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-4 {padding-bottom: 1rem
    }}`],"md:pb-40":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-40 {padding-bottom: 10rem
    }}`],"md:pb-48":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-48 {padding-bottom: 12rem
    }}`],"md:pb-5":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-5 {padding-bottom: 1.25rem
    }}`],"md:pb-56":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-56 {padding-bottom: 14rem
    }}`],"md:pb-6":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-6 {padding-bottom: 1.5rem
    }}`],"md:pb-64":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-64 {padding-bottom: 16rem
    }}`],"md:pb-7":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-7 {padding-bottom: 1.75rem
    }}`],"md:pb-8":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-8 {padding-bottom: 2rem
    }}`],"md:pb-80":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-80 {padding-bottom: 20rem
    }}`],"md:pb-9":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-9 {padding-bottom: 2.25rem
    }}`],"md:pb-96":[`@media (min-width: 768px){__SCOPE__ .md\\:pb-96 {padding-bottom: 24rem
    }}`],"md:pl-0":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-0 {padding-left: 0px
    }}`],"md:pl-1":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-1 {padding-left: 0.25rem
    }}`],"md:pl-10":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-10 {padding-left: 2.5rem
    }}`],"md:pl-11":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-11 {padding-left: 2.75rem
    }}`],"md:pl-12":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-12 {padding-left: 3rem
    }}`],"md:pl-14":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-14 {padding-left: 3.5rem
    }}`],"md:pl-16":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-16 {padding-left: 4rem
    }}`],"md:pl-2":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-2 {padding-left: 0.5rem
    }}`],"md:pl-20":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-20 {padding-left: 5rem
    }}`],"md:pl-24":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-24 {padding-left: 6rem
    }}`],"md:pl-28":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-28 {padding-left: 7rem
    }}`],"md:pl-3":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-3 {padding-left: 0.75rem
    }}`],"md:pl-32":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-32 {padding-left: 8rem
    }}`],"md:pl-4":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-4 {padding-left: 1rem
    }}`],"md:pl-40":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-40 {padding-left: 10rem
    }}`],"md:pl-48":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-48 {padding-left: 12rem
    }}`],"md:pl-5":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-5 {padding-left: 1.25rem
    }}`],"md:pl-56":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-56 {padding-left: 14rem
    }}`],"md:pl-6":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-6 {padding-left: 1.5rem
    }}`],"md:pl-64":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-64 {padding-left: 16rem
    }}`],"md:pl-7":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-7 {padding-left: 1.75rem
    }}`],"md:pl-8":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-8 {padding-left: 2rem
    }}`],"md:pl-80":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-80 {padding-left: 20rem
    }}`],"md:pl-9":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-9 {padding-left: 2.25rem
    }}`],"md:pl-96":[`@media (min-width: 768px){__SCOPE__ .md\\:pl-96 {padding-left: 24rem
    }}`],"md:pr-0":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-0 {padding-right: 0px
    }}`],"md:pr-1":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-1 {padding-right: 0.25rem
    }}`],"md:pr-10":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-10 {padding-right: 2.5rem
    }}`],"md:pr-11":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-11 {padding-right: 2.75rem
    }}`],"md:pr-12":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-12 {padding-right: 3rem
    }}`],"md:pr-14":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-14 {padding-right: 3.5rem
    }}`],"md:pr-16":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-16 {padding-right: 4rem
    }}`],"md:pr-2":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-2 {padding-right: 0.5rem
    }}`],"md:pr-20":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-20 {padding-right: 5rem
    }}`],"md:pr-24":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-24 {padding-right: 6rem
    }}`],"md:pr-28":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-28 {padding-right: 7rem
    }}`],"md:pr-3":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-3 {padding-right: 0.75rem
    }}`],"md:pr-32":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-32 {padding-right: 8rem
    }}`],"md:pr-4":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-4 {padding-right: 1rem
    }}`],"md:pr-40":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-40 {padding-right: 10rem
    }}`],"md:pr-48":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-48 {padding-right: 12rem
    }}`],"md:pr-5":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-5 {padding-right: 1.25rem
    }}`],"md:pr-56":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-56 {padding-right: 14rem
    }}`],"md:pr-6":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-6 {padding-right: 1.5rem
    }}`],"md:pr-64":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-64 {padding-right: 16rem
    }}`],"md:pr-7":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-7 {padding-right: 1.75rem
    }}`],"md:pr-8":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-8 {padding-right: 2rem
    }}`],"md:pr-80":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-80 {padding-right: 20rem
    }}`],"md:pr-9":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-9 {padding-right: 2.25rem
    }}`],"md:pr-96":[`@media (min-width: 768px){__SCOPE__ .md\\:pr-96 {padding-right: 24rem
    }}`],"md:pt-0":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-0 {padding-top: 0px
    }}`],"md:pt-1":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-1 {padding-top: 0.25rem
    }}`],"md:pt-10":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-10 {padding-top: 2.5rem
    }}`],"md:pt-11":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-11 {padding-top: 2.75rem
    }}`],"md:pt-12":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-12 {padding-top: 3rem
    }}`],"md:pt-14":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-14 {padding-top: 3.5rem
    }}`],"md:pt-16":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-16 {padding-top: 4rem
    }}`],"md:pt-2":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-2 {padding-top: 0.5rem
    }}`],"md:pt-20":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-20 {padding-top: 5rem
    }}`],"md:pt-24":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-24 {padding-top: 6rem
    }}`],"md:pt-28":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-28 {padding-top: 7rem
    }}`],"md:pt-3":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-3 {padding-top: 0.75rem
    }}`],"md:pt-32":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-32 {padding-top: 8rem
    }}`],"md:pt-4":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-4 {padding-top: 1rem
    }}`],"md:pt-40":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-40 {padding-top: 10rem
    }}`],"md:pt-48":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-48 {padding-top: 12rem
    }}`],"md:pt-5":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-5 {padding-top: 1.25rem
    }}`],"md:pt-56":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-56 {padding-top: 14rem
    }}`],"md:pt-6":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-6 {padding-top: 1.5rem
    }}`],"md:pt-64":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-64 {padding-top: 16rem
    }}`],"md:pt-7":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-7 {padding-top: 1.75rem
    }}`],"md:pt-8":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-8 {padding-top: 2rem
    }}`],"md:pt-80":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-80 {padding-top: 20rem
    }}`],"md:pt-9":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-9 {padding-top: 2.25rem
    }}`],"md:pt-96":[`@media (min-width: 768px){__SCOPE__ .md\\:pt-96 {padding-top: 24rem
    }}`],"md:text-left":[`@media (min-width: 768px){__SCOPE__ .md\\:text-left {text-align: left
    }}`],"md:text-center":[`@media (min-width: 768px){__SCOPE__ .md\\:text-center {text-align: center
    }}`],"md:text-right":[`@media (min-width: 768px){__SCOPE__ .md\\:text-right {text-align: right
    }}`],"md:text-2xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-2xl {font-size: 1.5rem;line-height: 2rem
    }}`],"md:text-3xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-3xl {font-size: 1.875rem;line-height: 2.25rem
    }}`],"md:text-4xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-4xl {font-size: 2.25rem;line-height: 2.5rem
    }}`],"md:text-5xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-5xl {font-size: 3rem;line-height: 1
    }}`],"md:text-6xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-6xl {font-size: 3.75rem;line-height: 1
    }}`],"md:text-[40px]":[`@media (min-width: 768px){__SCOPE__ .md\\:text-\\[40px\\] {font-size: 40px
    }}`],"md:text-base":[`@media (min-width: 768px){__SCOPE__ .md\\:text-base {font-size: 1rem;line-height: 1.5rem
    }}`],"md:text-lg":[`@media (min-width: 768px){__SCOPE__ .md\\:text-lg {font-size: 1.125rem;line-height: 1.75rem
    }}`],"md:text-sm":[`@media (min-width: 768px){__SCOPE__ .md\\:text-sm {font-size: 0.875rem;line-height: 1.25rem
    }}`],"md:text-xl":[`@media (min-width: 768px){__SCOPE__ .md\\:text-xl {font-size: 1.25rem;line-height: 1.75rem
    }}`],"md:text-xs":[`@media (min-width: 768px){__SCOPE__ .md\\:text-xs {font-size: 0.75rem;line-height: 1rem
    }}`],"md:text-black":[`@media (min-width: 768px){__SCOPE__ .md\\:text-black {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
    }}`],"md:text-current":[`@media (min-width: 768px){__SCOPE__ .md\\:text-current {color: currentColor
    }}`],"md:text-transparent":[`@media (min-width: 768px){__SCOPE__ .md\\:text-transparent {color: transparent
    }}`],"md:text-white":[`@media (min-width: 768px){__SCOPE__ .md\\:text-white {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
    }}`],"lg:m-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-0 {margin: 0px
    }}`],"lg:m-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-1 {margin: 0.25rem
    }}`],"lg:m-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-10 {margin: 2.5rem
    }}`],"lg:m-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-11 {margin: 2.75rem
    }}`],"lg:m-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-12 {margin: 3rem
    }}`],"lg:m-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-14 {margin: 3.5rem
    }}`],"lg:m-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-16 {margin: 4rem
    }}`],"lg:m-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-2 {margin: 0.5rem
    }}`],"lg:m-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-20 {margin: 5rem
    }}`],"lg:m-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-24 {margin: 6rem
    }}`],"lg:m-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-28 {margin: 7rem
    }}`],"lg:m-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-3 {margin: 0.75rem
    }}`],"lg:m-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-32 {margin: 8rem
    }}`],"lg:m-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-4 {margin: 1rem
    }}`],"lg:m-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-40 {margin: 10rem
    }}`],"lg:m-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-48 {margin: 12rem
    }}`],"lg:m-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-5 {margin: 1.25rem
    }}`],"lg:m-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-56 {margin: 14rem
    }}`],"lg:m-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-6 {margin: 1.5rem
    }}`],"lg:m-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-64 {margin: 16rem
    }}`],"lg:m-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-7 {margin: 1.75rem
    }}`],"lg:m-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-8 {margin: 2rem
    }}`],"lg:m-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-80 {margin: 20rem
    }}`],"lg:m-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-9 {margin: 2.25rem
    }}`],"lg:m-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:m-96 {margin: 24rem
    }}`],"lg:mx-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-0 {margin-left: 0px;margin-right: 0px
    }}`],"lg:mx-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-1 {margin-left: 0.25rem;margin-right: 0.25rem
    }}`],"lg:mx-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-10 {margin-left: 2.5rem;margin-right: 2.5rem
    }}`],"lg:mx-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-11 {margin-left: 2.75rem;margin-right: 2.75rem
    }}`],"lg:mx-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-12 {margin-left: 3rem;margin-right: 3rem
    }}`],"lg:mx-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-14 {margin-left: 3.5rem;margin-right: 3.5rem
    }}`],"lg:mx-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-16 {margin-left: 4rem;margin-right: 4rem
    }}`],"lg:mx-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-2 {margin-left: 0.5rem;margin-right: 0.5rem
    }}`],"lg:mx-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-20 {margin-left: 5rem;margin-right: 5rem
    }}`],"lg:mx-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-24 {margin-left: 6rem;margin-right: 6rem
    }}`],"lg:mx-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-28 {margin-left: 7rem;margin-right: 7rem
    }}`],"lg:mx-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-3 {margin-left: 0.75rem;margin-right: 0.75rem
    }}`],"lg:mx-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-32 {margin-left: 8rem;margin-right: 8rem
    }}`],"lg:mx-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-4 {margin-left: 1rem;margin-right: 1rem
    }}`],"lg:mx-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-40 {margin-left: 10rem;margin-right: 10rem
    }}`],"lg:mx-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-48 {margin-left: 12rem;margin-right: 12rem
    }}`],"lg:mx-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-5 {margin-left: 1.25rem;margin-right: 1.25rem
    }}`],"lg:mx-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-56 {margin-left: 14rem;margin-right: 14rem
    }}`],"lg:mx-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-6 {margin-left: 1.5rem;margin-right: 1.5rem
    }}`],"lg:mx-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-64 {margin-left: 16rem;margin-right: 16rem
    }}`],"lg:mx-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-7 {margin-left: 1.75rem;margin-right: 1.75rem
    }}`],"lg:mx-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-8 {margin-left: 2rem;margin-right: 2rem
    }}`],"lg:mx-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-80 {margin-left: 20rem;margin-right: 20rem
    }}`],"lg:mx-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-9 {margin-left: 2.25rem;margin-right: 2.25rem
    }}`],"lg:mx-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-96 {margin-left: 24rem;margin-right: 24rem
    }}`],"lg:mx-auto":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mx-auto {margin-left: auto;margin-right: auto
    }}`],"lg:my-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-0 {margin-top: 0px;margin-bottom: 0px
    }}`],"lg:my-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-1 {margin-top: 0.25rem;margin-bottom: 0.25rem
    }}`],"lg:my-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-10 {margin-top: 2.5rem;margin-bottom: 2.5rem
    }}`],"lg:my-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-11 {margin-top: 2.75rem;margin-bottom: 2.75rem
    }}`],"lg:my-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-12 {margin-top: 3rem;margin-bottom: 3rem
    }}`],"lg:my-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-14 {margin-top: 3.5rem;margin-bottom: 3.5rem
    }}`],"lg:my-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-16 {margin-top: 4rem;margin-bottom: 4rem
    }}`],"lg:my-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-2 {margin-top: 0.5rem;margin-bottom: 0.5rem
    }}`],"lg:my-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-20 {margin-top: 5rem;margin-bottom: 5rem
    }}`],"lg:my-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-24 {margin-top: 6rem;margin-bottom: 6rem
    }}`],"lg:my-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-28 {margin-top: 7rem;margin-bottom: 7rem
    }}`],"lg:my-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-3 {margin-top: 0.75rem;margin-bottom: 0.75rem
    }}`],"lg:my-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-32 {margin-top: 8rem;margin-bottom: 8rem
    }}`],"lg:my-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-4 {margin-top: 1rem;margin-bottom: 1rem
    }}`],"lg:my-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-40 {margin-top: 10rem;margin-bottom: 10rem
    }}`],"lg:my-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-48 {margin-top: 12rem;margin-bottom: 12rem
    }}`],"lg:my-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-5 {margin-top: 1.25rem;margin-bottom: 1.25rem
    }}`],"lg:my-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-56 {margin-top: 14rem;margin-bottom: 14rem
    }}`],"lg:my-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-6 {margin-top: 1.5rem;margin-bottom: 1.5rem
    }}`],"lg:my-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-64 {margin-top: 16rem;margin-bottom: 16rem
    }}`],"lg:my-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-7 {margin-top: 1.75rem;margin-bottom: 1.75rem
    }}`],"lg:my-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-8 {margin-top: 2rem;margin-bottom: 2rem
    }}`],"lg:my-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-80 {margin-top: 20rem;margin-bottom: 20rem
    }}`],"lg:my-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-9 {margin-top: 2.25rem;margin-bottom: 2.25rem
    }}`],"lg:my-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:my-96 {margin-top: 24rem;margin-bottom: 24rem
    }}`],"lg:mb-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-0 {margin-bottom: 0px
    }}`],"lg:mb-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-1 {margin-bottom: 0.25rem
    }}`],"lg:mb-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-10 {margin-bottom: 2.5rem
    }}`],"lg:mb-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-11 {margin-bottom: 2.75rem
    }}`],"lg:mb-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-12 {margin-bottom: 3rem
    }}`],"lg:mb-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-14 {margin-bottom: 3.5rem
    }}`],"lg:mb-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-16 {margin-bottom: 4rem
    }}`],"lg:mb-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-2 {margin-bottom: 0.5rem
    }}`],"lg:mb-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-20 {margin-bottom: 5rem
    }}`],"lg:mb-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-24 {margin-bottom: 6rem
    }}`],"lg:mb-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-28 {margin-bottom: 7rem
    }}`],"lg:mb-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-3 {margin-bottom: 0.75rem
    }}`],"lg:mb-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-32 {margin-bottom: 8rem
    }}`],"lg:mb-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-4 {margin-bottom: 1rem
    }}`],"lg:mb-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-40 {margin-bottom: 10rem
    }}`],"lg:mb-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-48 {margin-bottom: 12rem
    }}`],"lg:mb-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-5 {margin-bottom: 1.25rem
    }}`],"lg:mb-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-56 {margin-bottom: 14rem
    }}`],"lg:mb-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-6 {margin-bottom: 1.5rem
    }}`],"lg:mb-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-64 {margin-bottom: 16rem
    }}`],"lg:mb-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-7 {margin-bottom: 1.75rem
    }}`],"lg:mb-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-8 {margin-bottom: 2rem
    }}`],"lg:mb-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-80 {margin-bottom: 20rem
    }}`],"lg:mb-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-9 {margin-bottom: 2.25rem
    }}`],"lg:mb-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mb-96 {margin-bottom: 24rem
    }}`],"lg:ml-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-0 {margin-left: 0px
    }}`],"lg:ml-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-1 {margin-left: 0.25rem
    }}`],"lg:ml-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-10 {margin-left: 2.5rem
    }}`],"lg:ml-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-11 {margin-left: 2.75rem
    }}`],"lg:ml-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-12 {margin-left: 3rem
    }}`],"lg:ml-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-14 {margin-left: 3.5rem
    }}`],"lg:ml-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-16 {margin-left: 4rem
    }}`],"lg:ml-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-2 {margin-left: 0.5rem
    }}`],"lg:ml-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-20 {margin-left: 5rem
    }}`],"lg:ml-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-24 {margin-left: 6rem
    }}`],"lg:ml-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-28 {margin-left: 7rem
    }}`],"lg:ml-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-3 {margin-left: 0.75rem
    }}`],"lg:ml-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-32 {margin-left: 8rem
    }}`],"lg:ml-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-4 {margin-left: 1rem
    }}`],"lg:ml-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-40 {margin-left: 10rem
    }}`],"lg:ml-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-48 {margin-left: 12rem
    }}`],"lg:ml-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-5 {margin-left: 1.25rem
    }}`],"lg:ml-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-56 {margin-left: 14rem
    }}`],"lg:ml-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-6 {margin-left: 1.5rem
    }}`],"lg:ml-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-64 {margin-left: 16rem
    }}`],"lg:ml-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-7 {margin-left: 1.75rem
    }}`],"lg:ml-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-8 {margin-left: 2rem
    }}`],"lg:ml-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-80 {margin-left: 20rem
    }}`],"lg:ml-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-9 {margin-left: 2.25rem
    }}`],"lg:ml-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-96 {margin-left: 24rem
    }}`],"lg:ml-auto":[`@media (min-width: 1024px){__SCOPE__ .lg\\:ml-auto {margin-left: auto
    }}`],"lg:mr-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-0 {margin-right: 0px
    }}`],"lg:mr-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-1 {margin-right: 0.25rem
    }}`],"lg:mr-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-10 {margin-right: 2.5rem
    }}`],"lg:mr-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-11 {margin-right: 2.75rem
    }}`],"lg:mr-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-12 {margin-right: 3rem
    }}`],"lg:mr-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-14 {margin-right: 3.5rem
    }}`],"lg:mr-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-16 {margin-right: 4rem
    }}`],"lg:mr-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-2 {margin-right: 0.5rem
    }}`],"lg:mr-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-20 {margin-right: 5rem
    }}`],"lg:mr-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-24 {margin-right: 6rem
    }}`],"lg:mr-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-28 {margin-right: 7rem
    }}`],"lg:mr-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-3 {margin-right: 0.75rem
    }}`],"lg:mr-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-32 {margin-right: 8rem
    }}`],"lg:mr-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-4 {margin-right: 1rem
    }}`],"lg:mr-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-40 {margin-right: 10rem
    }}`],"lg:mr-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-48 {margin-right: 12rem
    }}`],"lg:mr-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-5 {margin-right: 1.25rem
    }}`],"lg:mr-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-56 {margin-right: 14rem
    }}`],"lg:mr-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-6 {margin-right: 1.5rem
    }}`],"lg:mr-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-64 {margin-right: 16rem
    }}`],"lg:mr-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-7 {margin-right: 1.75rem
    }}`],"lg:mr-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-8 {margin-right: 2rem
    }}`],"lg:mr-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-80 {margin-right: 20rem
    }}`],"lg:mr-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-9 {margin-right: 2.25rem
    }}`],"lg:mr-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mr-96 {margin-right: 24rem
    }}`],"lg:mt-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-0 {margin-top: 0px
    }}`],"lg:mt-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-1 {margin-top: 0.25rem
    }}`],"lg:mt-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-10 {margin-top: 2.5rem
    }}`],"lg:mt-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-11 {margin-top: 2.75rem
    }}`],"lg:mt-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-12 {margin-top: 3rem
    }}`],"lg:mt-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-14 {margin-top: 3.5rem
    }}`],"lg:mt-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-16 {margin-top: 4rem
    }}`],"lg:mt-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-2 {margin-top: 0.5rem
    }}`],"lg:mt-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-20 {margin-top: 5rem
    }}`],"lg:mt-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-24 {margin-top: 6rem
    }}`],"lg:mt-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-28 {margin-top: 7rem
    }}`],"lg:mt-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-3 {margin-top: 0.75rem
    }}`],"lg:mt-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-32 {margin-top: 8rem
    }}`],"lg:mt-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-4 {margin-top: 1rem
    }}`],"lg:mt-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-40 {margin-top: 10rem
    }}`],"lg:mt-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-48 {margin-top: 12rem
    }}`],"lg:mt-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-5 {margin-top: 1.25rem
    }}`],"lg:mt-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-56 {margin-top: 14rem
    }}`],"lg:mt-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-6 {margin-top: 1.5rem
    }}`],"lg:mt-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-64 {margin-top: 16rem
    }}`],"lg:mt-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-7 {margin-top: 1.75rem
    }}`],"lg:mt-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-8 {margin-top: 2rem
    }}`],"lg:mt-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-80 {margin-top: 20rem
    }}`],"lg:mt-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-9 {margin-top: 2.25rem
    }}`],"lg:mt-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:mt-96 {margin-top: 24rem
    }}`],"lg:block":[`@media (min-width: 1024px){__SCOPE__ .lg\\:block {display: block
    }}`],"lg:flex":[`@media (min-width: 1024px){__SCOPE__ .lg\\:flex {display: flex
    }}`],"lg:grid":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid {display: grid
    }}`],"lg:hidden":[`@media (min-width: 1024px){__SCOPE__ .lg\\:hidden {display: none
    }}`],"lg:w-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-0 {width: 0px
    }}`],"lg:w-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1 {width: 0.25rem
    }}`],"lg:w-1/12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/12 {width: 8.333333%
    }}`],"lg:w-1/2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/2 {width: 50%
    }}`],"lg:w-1/3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/3 {width: 33.333333%
    }}`],"lg:w-1/4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/4 {width: 25%
    }}`],"lg:w-1/5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/5 {width: 20%
    }}`],"lg:w-1/6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-1\\/6 {width: 16.666667%
    }}`],"lg:w-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-10 {width: 2.5rem
    }}`],"lg:w-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-11 {width: 2.75rem
    }}`],"lg:w-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-12 {width: 3rem
    }}`],"lg:w-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-14 {width: 3.5rem
    }}`],"lg:w-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-16 {width: 4rem
    }}`],"lg:w-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-2 {width: 0.5rem
    }}`],"lg:w-2/3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-2\\/3 {width: 66.666667%
    }}`],"lg:w-2/5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-2\\/5 {width: 40%
    }}`],"lg:w-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-20 {width: 5rem
    }}`],"lg:w-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-24 {width: 6rem
    }}`],"lg:w-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-28 {width: 7rem
    }}`],"lg:w-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-3 {width: 0.75rem
    }}`],"lg:w-3/4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-3\\/4 {width: 75%
    }}`],"lg:w-3/5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-3\\/5 {width: 60%
    }}`],"lg:w-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-32 {width: 8rem
    }}`],"lg:w-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-4 {width: 1rem
    }}`],"lg:w-4/5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-4\\/5 {width: 80%
    }}`],"lg:w-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-40 {width: 10rem
    }}`],"lg:w-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-48 {width: 12rem
    }}`],"lg:w-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-5 {width: 1.25rem
    }}`],"lg:w-5/12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-5\\/12 {width: 41.666667%
    }}`],"lg:w-5/6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-5\\/6 {width: 83.333333%
    }}`],"lg:w-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-56 {width: 14rem
    }}`],"lg:w-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-6 {width: 1.5rem
    }}`],"lg:w-6/12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-6\\/12 {width: 50%
    }}`],"lg:w-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-64 {width: 16rem
    }}`],"lg:w-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-7 {width: 1.75rem
    }}`],"lg:w-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-8 {width: 2rem
    }}`],"lg:w-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-80 {width: 20rem
    }}`],"lg:w-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-9 {width: 2.25rem
    }}`],"lg:w-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-96 {width: 24rem
    }}`],"lg:w-auto":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-auto {width: auto
    }}`],"lg:w-full":[`@media (min-width: 1024px){__SCOPE__ .lg\\:w-full {width: 100%
    }}`],"lg:flex-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:flex-1 {flex: 1 1 0%
    }}`],"lg:grid-cols-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-1 {grid-template-columns: repeat(1, minmax(0, 1fr))
    }}`],"lg:grid-cols-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-12 {grid-template-columns: repeat(12, minmax(0, 1fr))
    }}`],"lg:grid-cols-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-2 {grid-template-columns: repeat(2, minmax(0, 1fr))
    }}`],"lg:grid-cols-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-3 {grid-template-columns: repeat(3, minmax(0, 1fr))
    }}`],"lg:grid-cols-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-4 {grid-template-columns: repeat(4, minmax(0, 1fr))
    }}`],"lg:grid-cols-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-5 {grid-template-columns: repeat(5, minmax(0, 1fr))
    }}`],"lg:grid-cols-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:grid-cols-6 {grid-template-columns: repeat(6, minmax(0, 1fr))
    }}`],"lg:flex-row":[`@media (min-width: 1024px){__SCOPE__ .lg\\:flex-row {flex-direction: row
    }}`],"lg:flex-col":[`@media (min-width: 1024px){__SCOPE__ .lg\\:flex-col {flex-direction: column
    }}`],"lg:flex-wrap":[`@media (min-width: 1024px){__SCOPE__ .lg\\:flex-wrap {flex-wrap: wrap
    }}`],"lg:items-start":[`@media (min-width: 1024px){__SCOPE__ .lg\\:items-start {align-items: flex-start
    }}`],"lg:items-end":[`@media (min-width: 1024px){__SCOPE__ .lg\\:items-end {align-items: flex-end
    }}`],"lg:items-center":[`@media (min-width: 1024px){__SCOPE__ .lg\\:items-center {align-items: center
    }}`],"lg:justify-end":[`@media (min-width: 1024px){__SCOPE__ .lg\\:justify-end {justify-content: flex-end
    }}`],"lg:justify-center":[`@media (min-width: 1024px){__SCOPE__ .lg\\:justify-center {justify-content: center
    }}`],"lg:justify-between":[`@media (min-width: 1024px){__SCOPE__ .lg\\:justify-between {justify-content: space-between
    }}`],"lg:gap-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-0 {gap: 0px
    }}`],"lg:gap-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-1 {gap: 0.25rem
    }}`],"lg:gap-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-10 {gap: 2.5rem
    }}`],"lg:gap-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-11 {gap: 2.75rem
    }}`],"lg:gap-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-12 {gap: 3rem
    }}`],"lg:gap-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-14 {gap: 3.5rem
    }}`],"lg:gap-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-16 {gap: 4rem
    }}`],"lg:gap-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-2 {gap: 0.5rem
    }}`],"lg:gap-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-20 {gap: 5rem
    }}`],"lg:gap-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-24 {gap: 6rem
    }}`],"lg:gap-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-28 {gap: 7rem
    }}`],"lg:gap-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-3 {gap: 0.75rem
    }}`],"lg:gap-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-32 {gap: 8rem
    }}`],"lg:gap-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-4 {gap: 1rem
    }}`],"lg:gap-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-40 {gap: 10rem
    }}`],"lg:gap-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-48 {gap: 12rem
    }}`],"lg:gap-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-5 {gap: 1.25rem
    }}`],"lg:gap-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-56 {gap: 14rem
    }}`],"lg:gap-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-6 {gap: 1.5rem
    }}`],"lg:gap-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-64 {gap: 16rem
    }}`],"lg:gap-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-7 {gap: 1.75rem
    }}`],"lg:gap-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-8 {gap: 2rem
    }}`],"lg:gap-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-80 {gap: 20rem
    }}`],"lg:gap-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-9 {gap: 2.25rem
    }}`],"lg:gap-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-96 {gap: 24rem
    }}`],"lg:gap-x-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-0 {column-gap: 0px
    }}`],"lg:gap-x-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-1 {column-gap: 0.25rem
    }}`],"lg:gap-x-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-10 {column-gap: 2.5rem
    }}`],"lg:gap-x-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-11 {column-gap: 2.75rem
    }}`],"lg:gap-x-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-12 {column-gap: 3rem
    }}`],"lg:gap-x-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-14 {column-gap: 3.5rem
    }}`],"lg:gap-x-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-16 {column-gap: 4rem
    }}`],"lg:gap-x-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-2 {column-gap: 0.5rem
    }}`],"lg:gap-x-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-20 {column-gap: 5rem
    }}`],"lg:gap-x-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-24 {column-gap: 6rem
    }}`],"lg:gap-x-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-28 {column-gap: 7rem
    }}`],"lg:gap-x-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-3 {column-gap: 0.75rem
    }}`],"lg:gap-x-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-32 {column-gap: 8rem
    }}`],"lg:gap-x-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-4 {column-gap: 1rem
    }}`],"lg:gap-x-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-40 {column-gap: 10rem
    }}`],"lg:gap-x-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-48 {column-gap: 12rem
    }}`],"lg:gap-x-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-5 {column-gap: 1.25rem
    }}`],"lg:gap-x-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-56 {column-gap: 14rem
    }}`],"lg:gap-x-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-6 {column-gap: 1.5rem
    }}`],"lg:gap-x-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-64 {column-gap: 16rem
    }}`],"lg:gap-x-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-7 {column-gap: 1.75rem
    }}`],"lg:gap-x-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-8 {column-gap: 2rem
    }}`],"lg:gap-x-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-80 {column-gap: 20rem
    }}`],"lg:gap-x-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-9 {column-gap: 2.25rem
    }}`],"lg:gap-x-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-x-96 {column-gap: 24rem
    }}`],"lg:gap-y-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-0 {row-gap: 0px
    }}`],"lg:gap-y-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-1 {row-gap: 0.25rem
    }}`],"lg:gap-y-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-10 {row-gap: 2.5rem
    }}`],"lg:gap-y-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-11 {row-gap: 2.75rem
    }}`],"lg:gap-y-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-12 {row-gap: 3rem
    }}`],"lg:gap-y-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-14 {row-gap: 3.5rem
    }}`],"lg:gap-y-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-16 {row-gap: 4rem
    }}`],"lg:gap-y-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-2 {row-gap: 0.5rem
    }}`],"lg:gap-y-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-20 {row-gap: 5rem
    }}`],"lg:gap-y-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-24 {row-gap: 6rem
    }}`],"lg:gap-y-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-28 {row-gap: 7rem
    }}`],"lg:gap-y-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-3 {row-gap: 0.75rem
    }}`],"lg:gap-y-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-32 {row-gap: 8rem
    }}`],"lg:gap-y-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-4 {row-gap: 1rem
    }}`],"lg:gap-y-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-40 {row-gap: 10rem
    }}`],"lg:gap-y-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-48 {row-gap: 12rem
    }}`],"lg:gap-y-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-5 {row-gap: 1.25rem
    }}`],"lg:gap-y-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-56 {row-gap: 14rem
    }}`],"lg:gap-y-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-6 {row-gap: 1.5rem
    }}`],"lg:gap-y-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-64 {row-gap: 16rem
    }}`],"lg:gap-y-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-7 {row-gap: 1.75rem
    }}`],"lg:gap-y-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-8 {row-gap: 2rem
    }}`],"lg:gap-y-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-80 {row-gap: 20rem
    }}`],"lg:gap-y-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-9 {row-gap: 2.25rem
    }}`],"lg:gap-y-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:gap-y-96 {row-gap: 24rem
    }}`],"lg:p-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-0 {padding: 0px
    }}`],"lg:p-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-1 {padding: 0.25rem
    }}`],"lg:p-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-10 {padding: 2.5rem
    }}`],"lg:p-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-11 {padding: 2.75rem
    }}`],"lg:p-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-12 {padding: 3rem
    }}`],"lg:p-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-14 {padding: 3.5rem
    }}`],"lg:p-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-16 {padding: 4rem
    }}`],"lg:p-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-2 {padding: 0.5rem
    }}`],"lg:p-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-20 {padding: 5rem
    }}`],"lg:p-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-24 {padding: 6rem
    }}`],"lg:p-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-28 {padding: 7rem
    }}`],"lg:p-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-3 {padding: 0.75rem
    }}`],"lg:p-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-32 {padding: 8rem
    }}`],"lg:p-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-4 {padding: 1rem
    }}`],"lg:p-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-40 {padding: 10rem
    }}`],"lg:p-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-48 {padding: 12rem
    }}`],"lg:p-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-5 {padding: 1.25rem
    }}`],"lg:p-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-56 {padding: 14rem
    }}`],"lg:p-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-6 {padding: 1.5rem
    }}`],"lg:p-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-64 {padding: 16rem
    }}`],"lg:p-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-7 {padding: 1.75rem
    }}`],"lg:p-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-8 {padding: 2rem
    }}`],"lg:p-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-80 {padding: 20rem
    }}`],"lg:p-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-9 {padding: 2.25rem
    }}`],"lg:p-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:p-96 {padding: 24rem
    }}`],"lg:px-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-0 {padding-left: 0px;padding-right: 0px
    }}`],"lg:px-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-1 {padding-left: 0.25rem;padding-right: 0.25rem
    }}`],"lg:px-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-10 {padding-left: 2.5rem;padding-right: 2.5rem
    }}`],"lg:px-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-11 {padding-left: 2.75rem;padding-right: 2.75rem
    }}`],"lg:px-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-12 {padding-left: 3rem;padding-right: 3rem
    }}`],"lg:px-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-14 {padding-left: 3.5rem;padding-right: 3.5rem
    }}`],"lg:px-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-16 {padding-left: 4rem;padding-right: 4rem
    }}`],"lg:px-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-2 {padding-left: 0.5rem;padding-right: 0.5rem
    }}`],"lg:px-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-20 {padding-left: 5rem;padding-right: 5rem
    }}`],"lg:px-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-24 {padding-left: 6rem;padding-right: 6rem
    }}`],"lg:px-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-28 {padding-left: 7rem;padding-right: 7rem
    }}`],"lg:px-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-3 {padding-left: 0.75rem;padding-right: 0.75rem
    }}`],"lg:px-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-32 {padding-left: 8rem;padding-right: 8rem
    }}`],"lg:px-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-4 {padding-left: 1rem;padding-right: 1rem
    }}`],"lg:px-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-40 {padding-left: 10rem;padding-right: 10rem
    }}`],"lg:px-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-48 {padding-left: 12rem;padding-right: 12rem
    }}`],"lg:px-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-5 {padding-left: 1.25rem;padding-right: 1.25rem
    }}`],"lg:px-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-56 {padding-left: 14rem;padding-right: 14rem
    }}`],"lg:px-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-6 {padding-left: 1.5rem;padding-right: 1.5rem
    }}`],"lg:px-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-64 {padding-left: 16rem;padding-right: 16rem
    }}`],"lg:px-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-7 {padding-left: 1.75rem;padding-right: 1.75rem
    }}`],"lg:px-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-8 {padding-left: 2rem;padding-right: 2rem
    }}`],"lg:px-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-80 {padding-left: 20rem;padding-right: 20rem
    }}`],"lg:px-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-9 {padding-left: 2.25rem;padding-right: 2.25rem
    }}`],"lg:px-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:px-96 {padding-left: 24rem;padding-right: 24rem
    }}`],"lg:py-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-0 {padding-top: 0px;padding-bottom: 0px
    }}`],"lg:py-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-1 {padding-top: 0.25rem;padding-bottom: 0.25rem
    }}`],"lg:py-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-10 {padding-top: 2.5rem;padding-bottom: 2.5rem
    }}`],"lg:py-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-11 {padding-top: 2.75rem;padding-bottom: 2.75rem
    }}`],"lg:py-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-12 {padding-top: 3rem;padding-bottom: 3rem
    }}`],"lg:py-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-14 {padding-top: 3.5rem;padding-bottom: 3.5rem
    }}`],"lg:py-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-16 {padding-top: 4rem;padding-bottom: 4rem
    }}`],"lg:py-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-2 {padding-top: 0.5rem;padding-bottom: 0.5rem
    }}`],"lg:py-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-20 {padding-top: 5rem;padding-bottom: 5rem
    }}`],"lg:py-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-24 {padding-top: 6rem;padding-bottom: 6rem
    }}`],"lg:py-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-28 {padding-top: 7rem;padding-bottom: 7rem
    }}`],"lg:py-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-3 {padding-top: 0.75rem;padding-bottom: 0.75rem
    }}`],"lg:py-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-32 {padding-top: 8rem;padding-bottom: 8rem
    }}`],"lg:py-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-4 {padding-top: 1rem;padding-bottom: 1rem
    }}`],"lg:py-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-40 {padding-top: 10rem;padding-bottom: 10rem
    }}`],"lg:py-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-48 {padding-top: 12rem;padding-bottom: 12rem
    }}`],"lg:py-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-5 {padding-top: 1.25rem;padding-bottom: 1.25rem
    }}`],"lg:py-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-56 {padding-top: 14rem;padding-bottom: 14rem
    }}`],"lg:py-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-6 {padding-top: 1.5rem;padding-bottom: 1.5rem
    }}`],"lg:py-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-64 {padding-top: 16rem;padding-bottom: 16rem
    }}`],"lg:py-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-7 {padding-top: 1.75rem;padding-bottom: 1.75rem
    }}`],"lg:py-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-8 {padding-top: 2rem;padding-bottom: 2rem
    }}`],"lg:py-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-80 {padding-top: 20rem;padding-bottom: 20rem
    }}`],"lg:py-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-9 {padding-top: 2.25rem;padding-bottom: 2.25rem
    }}`],"lg:py-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:py-96 {padding-top: 24rem;padding-bottom: 24rem
    }}`],"lg:pb-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-0 {padding-bottom: 0px
    }}`],"lg:pb-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-1 {padding-bottom: 0.25rem
    }}`],"lg:pb-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-10 {padding-bottom: 2.5rem
    }}`],"lg:pb-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-11 {padding-bottom: 2.75rem
    }}`],"lg:pb-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-12 {padding-bottom: 3rem
    }}`],"lg:pb-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-14 {padding-bottom: 3.5rem
    }}`],"lg:pb-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-16 {padding-bottom: 4rem
    }}`],"lg:pb-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-2 {padding-bottom: 0.5rem
    }}`],"lg:pb-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-20 {padding-bottom: 5rem
    }}`],"lg:pb-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-24 {padding-bottom: 6rem
    }}`],"lg:pb-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-28 {padding-bottom: 7rem
    }}`],"lg:pb-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-3 {padding-bottom: 0.75rem
    }}`],"lg:pb-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-32 {padding-bottom: 8rem
    }}`],"lg:pb-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-4 {padding-bottom: 1rem
    }}`],"lg:pb-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-40 {padding-bottom: 10rem
    }}`],"lg:pb-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-48 {padding-bottom: 12rem
    }}`],"lg:pb-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-5 {padding-bottom: 1.25rem
    }}`],"lg:pb-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-56 {padding-bottom: 14rem
    }}`],"lg:pb-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-6 {padding-bottom: 1.5rem
    }}`],"lg:pb-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-64 {padding-bottom: 16rem
    }}`],"lg:pb-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-7 {padding-bottom: 1.75rem
    }}`],"lg:pb-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-8 {padding-bottom: 2rem
    }}`],"lg:pb-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-80 {padding-bottom: 20rem
    }}`],"lg:pb-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-9 {padding-bottom: 2.25rem
    }}`],"lg:pb-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-96 {padding-bottom: 24rem
    }}`],"lg:pb-[90px]":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pb-\\[90px\\] {padding-bottom: 90px
    }}`],"lg:pl-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-0 {padding-left: 0px
    }}`],"lg:pl-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-1 {padding-left: 0.25rem
    }}`],"lg:pl-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-10 {padding-left: 2.5rem
    }}`],"lg:pl-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-11 {padding-left: 2.75rem
    }}`],"lg:pl-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-12 {padding-left: 3rem
    }}`],"lg:pl-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-14 {padding-left: 3.5rem
    }}`],"lg:pl-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-16 {padding-left: 4rem
    }}`],"lg:pl-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-2 {padding-left: 0.5rem
    }}`],"lg:pl-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-20 {padding-left: 5rem
    }}`],"lg:pl-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-24 {padding-left: 6rem
    }}`],"lg:pl-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-28 {padding-left: 7rem
    }}`],"lg:pl-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-3 {padding-left: 0.75rem
    }}`],"lg:pl-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-32 {padding-left: 8rem
    }}`],"lg:pl-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-4 {padding-left: 1rem
    }}`],"lg:pl-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-40 {padding-left: 10rem
    }}`],"lg:pl-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-48 {padding-left: 12rem
    }}`],"lg:pl-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-5 {padding-left: 1.25rem
    }}`],"lg:pl-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-56 {padding-left: 14rem
    }}`],"lg:pl-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-6 {padding-left: 1.5rem
    }}`],"lg:pl-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-64 {padding-left: 16rem
    }}`],"lg:pl-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-7 {padding-left: 1.75rem
    }}`],"lg:pl-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-8 {padding-left: 2rem
    }}`],"lg:pl-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-80 {padding-left: 20rem
    }}`],"lg:pl-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-9 {padding-left: 2.25rem
    }}`],"lg:pl-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pl-96 {padding-left: 24rem
    }}`],"lg:pr-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-0 {padding-right: 0px
    }}`],"lg:pr-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-1 {padding-right: 0.25rem
    }}`],"lg:pr-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-10 {padding-right: 2.5rem
    }}`],"lg:pr-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-11 {padding-right: 2.75rem
    }}`],"lg:pr-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-12 {padding-right: 3rem
    }}`],"lg:pr-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-14 {padding-right: 3.5rem
    }}`],"lg:pr-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-16 {padding-right: 4rem
    }}`],"lg:pr-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-2 {padding-right: 0.5rem
    }}`],"lg:pr-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-20 {padding-right: 5rem
    }}`],"lg:pr-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-24 {padding-right: 6rem
    }}`],"lg:pr-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-28 {padding-right: 7rem
    }}`],"lg:pr-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-3 {padding-right: 0.75rem
    }}`],"lg:pr-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-32 {padding-right: 8rem
    }}`],"lg:pr-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-4 {padding-right: 1rem
    }}`],"lg:pr-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-40 {padding-right: 10rem
    }}`],"lg:pr-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-48 {padding-right: 12rem
    }}`],"lg:pr-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-5 {padding-right: 1.25rem
    }}`],"lg:pr-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-56 {padding-right: 14rem
    }}`],"lg:pr-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-6 {padding-right: 1.5rem
    }}`],"lg:pr-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-64 {padding-right: 16rem
    }}`],"lg:pr-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-7 {padding-right: 1.75rem
    }}`],"lg:pr-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-8 {padding-right: 2rem
    }}`],"lg:pr-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-80 {padding-right: 20rem
    }}`],"lg:pr-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-9 {padding-right: 2.25rem
    }}`],"lg:pr-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pr-96 {padding-right: 24rem
    }}`],"lg:pt-0":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-0 {padding-top: 0px
    }}`],"lg:pt-1":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-1 {padding-top: 0.25rem
    }}`],"lg:pt-10":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-10 {padding-top: 2.5rem
    }}`],"lg:pt-11":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-11 {padding-top: 2.75rem
    }}`],"lg:pt-12":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-12 {padding-top: 3rem
    }}`],"lg:pt-14":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-14 {padding-top: 3.5rem
    }}`],"lg:pt-16":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-16 {padding-top: 4rem
    }}`],"lg:pt-2":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-2 {padding-top: 0.5rem
    }}`],"lg:pt-20":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-20 {padding-top: 5rem
    }}`],"lg:pt-24":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-24 {padding-top: 6rem
    }}`],"lg:pt-28":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-28 {padding-top: 7rem
    }}`],"lg:pt-3":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-3 {padding-top: 0.75rem
    }}`],"lg:pt-32":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-32 {padding-top: 8rem
    }}`],"lg:pt-4":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-4 {padding-top: 1rem
    }}`],"lg:pt-40":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-40 {padding-top: 10rem
    }}`],"lg:pt-48":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-48 {padding-top: 12rem
    }}`],"lg:pt-5":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-5 {padding-top: 1.25rem
    }}`],"lg:pt-56":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-56 {padding-top: 14rem
    }}`],"lg:pt-6":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-6 {padding-top: 1.5rem
    }}`],"lg:pt-64":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-64 {padding-top: 16rem
    }}`],"lg:pt-7":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-7 {padding-top: 1.75rem
    }}`],"lg:pt-8":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-8 {padding-top: 2rem
    }}`],"lg:pt-80":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-80 {padding-top: 20rem
    }}`],"lg:pt-9":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-9 {padding-top: 2.25rem
    }}`],"lg:pt-96":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-96 {padding-top: 24rem
    }}`],"lg:pt-[120px]":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-\\[120px\\] {padding-top: 120px
    }}`],"lg:pt-[150px]":[`@media (min-width: 1024px){__SCOPE__ .lg\\:pt-\\[150px\\] {padding-top: 150px
    }}`],"lg:text-left":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-left {text-align: left
    }}`],"lg:text-center":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-center {text-align: center
    }}`],"lg:text-right":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-right {text-align: right
    }}`],"lg:text-2xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-2xl {font-size: 1.5rem;line-height: 2rem
    }}`],"lg:text-3xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-3xl {font-size: 1.875rem;line-height: 2.25rem
    }}`],"lg:text-4xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-4xl {font-size: 2.25rem;line-height: 2.5rem
    }}`],"lg:text-5xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-5xl {font-size: 3rem;line-height: 1
    }}`],"lg:text-6xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-6xl {font-size: 3.75rem;line-height: 1
    }}`],"lg:text-[40px]":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-\\[40px\\] {font-size: 40px
    }}`],"lg:text-base":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-base {font-size: 1rem;line-height: 1.5rem
    }}`],"lg:text-lg":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-lg {font-size: 1.125rem;line-height: 1.75rem
    }}`],"lg:text-sm":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-sm {font-size: 0.875rem;line-height: 1.25rem
    }}`],"lg:text-xl":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-xl {font-size: 1.25rem;line-height: 1.75rem
    }}`],"lg:text-xs":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-xs {font-size: 0.75rem;line-height: 1rem
    }}`],"lg:text-black":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-black {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
    }}`],"lg:text-current":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-current {color: currentColor
    }}`],"lg:text-transparent":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-transparent {color: transparent
    }}`],"lg:text-white":[`@media (min-width: 1024px){__SCOPE__ .lg\\:text-white {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
    }}`],"xl:m-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-0 {margin: 0px
    }}`],"xl:m-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-1 {margin: 0.25rem
    }}`],"xl:m-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-10 {margin: 2.5rem
    }}`],"xl:m-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-11 {margin: 2.75rem
    }}`],"xl:m-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-12 {margin: 3rem
    }}`],"xl:m-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-14 {margin: 3.5rem
    }}`],"xl:m-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-16 {margin: 4rem
    }}`],"xl:m-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-2 {margin: 0.5rem
    }}`],"xl:m-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-20 {margin: 5rem
    }}`],"xl:m-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-24 {margin: 6rem
    }}`],"xl:m-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-28 {margin: 7rem
    }}`],"xl:m-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-3 {margin: 0.75rem
    }}`],"xl:m-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-32 {margin: 8rem
    }}`],"xl:m-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-4 {margin: 1rem
    }}`],"xl:m-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-40 {margin: 10rem
    }}`],"xl:m-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-48 {margin: 12rem
    }}`],"xl:m-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-5 {margin: 1.25rem
    }}`],"xl:m-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-56 {margin: 14rem
    }}`],"xl:m-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-6 {margin: 1.5rem
    }}`],"xl:m-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-64 {margin: 16rem
    }}`],"xl:m-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-7 {margin: 1.75rem
    }}`],"xl:m-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-8 {margin: 2rem
    }}`],"xl:m-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-80 {margin: 20rem
    }}`],"xl:m-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-9 {margin: 2.25rem
    }}`],"xl:m-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:m-96 {margin: 24rem
    }}`],"xl:mx-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-0 {margin-left: 0px;margin-right: 0px
    }}`],"xl:mx-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-1 {margin-left: 0.25rem;margin-right: 0.25rem
    }}`],"xl:mx-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-10 {margin-left: 2.5rem;margin-right: 2.5rem
    }}`],"xl:mx-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-11 {margin-left: 2.75rem;margin-right: 2.75rem
    }}`],"xl:mx-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-12 {margin-left: 3rem;margin-right: 3rem
    }}`],"xl:mx-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-14 {margin-left: 3.5rem;margin-right: 3.5rem
    }}`],"xl:mx-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-16 {margin-left: 4rem;margin-right: 4rem
    }}`],"xl:mx-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-2 {margin-left: 0.5rem;margin-right: 0.5rem
    }}`],"xl:mx-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-20 {margin-left: 5rem;margin-right: 5rem
    }}`],"xl:mx-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-24 {margin-left: 6rem;margin-right: 6rem
    }}`],"xl:mx-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-28 {margin-left: 7rem;margin-right: 7rem
    }}`],"xl:mx-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-3 {margin-left: 0.75rem;margin-right: 0.75rem
    }}`],"xl:mx-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-32 {margin-left: 8rem;margin-right: 8rem
    }}`],"xl:mx-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-4 {margin-left: 1rem;margin-right: 1rem
    }}`],"xl:mx-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-40 {margin-left: 10rem;margin-right: 10rem
    }}`],"xl:mx-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-48 {margin-left: 12rem;margin-right: 12rem
    }}`],"xl:mx-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-5 {margin-left: 1.25rem;margin-right: 1.25rem
    }}`],"xl:mx-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-56 {margin-left: 14rem;margin-right: 14rem
    }}`],"xl:mx-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-6 {margin-left: 1.5rem;margin-right: 1.5rem
    }}`],"xl:mx-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-64 {margin-left: 16rem;margin-right: 16rem
    }}`],"xl:mx-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-7 {margin-left: 1.75rem;margin-right: 1.75rem
    }}`],"xl:mx-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-8 {margin-left: 2rem;margin-right: 2rem
    }}`],"xl:mx-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-80 {margin-left: 20rem;margin-right: 20rem
    }}`],"xl:mx-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-9 {margin-left: 2.25rem;margin-right: 2.25rem
    }}`],"xl:mx-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-96 {margin-left: 24rem;margin-right: 24rem
    }}`],"xl:mx-auto":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mx-auto {margin-left: auto;margin-right: auto
    }}`],"xl:my-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-0 {margin-top: 0px;margin-bottom: 0px
    }}`],"xl:my-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-1 {margin-top: 0.25rem;margin-bottom: 0.25rem
    }}`],"xl:my-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-10 {margin-top: 2.5rem;margin-bottom: 2.5rem
    }}`],"xl:my-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-11 {margin-top: 2.75rem;margin-bottom: 2.75rem
    }}`],"xl:my-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-12 {margin-top: 3rem;margin-bottom: 3rem
    }}`],"xl:my-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-14 {margin-top: 3.5rem;margin-bottom: 3.5rem
    }}`],"xl:my-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-16 {margin-top: 4rem;margin-bottom: 4rem
    }}`],"xl:my-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-2 {margin-top: 0.5rem;margin-bottom: 0.5rem
    }}`],"xl:my-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-20 {margin-top: 5rem;margin-bottom: 5rem
    }}`],"xl:my-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-24 {margin-top: 6rem;margin-bottom: 6rem
    }}`],"xl:my-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-28 {margin-top: 7rem;margin-bottom: 7rem
    }}`],"xl:my-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-3 {margin-top: 0.75rem;margin-bottom: 0.75rem
    }}`],"xl:my-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-32 {margin-top: 8rem;margin-bottom: 8rem
    }}`],"xl:my-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-4 {margin-top: 1rem;margin-bottom: 1rem
    }}`],"xl:my-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-40 {margin-top: 10rem;margin-bottom: 10rem
    }}`],"xl:my-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-48 {margin-top: 12rem;margin-bottom: 12rem
    }}`],"xl:my-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-5 {margin-top: 1.25rem;margin-bottom: 1.25rem
    }}`],"xl:my-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-56 {margin-top: 14rem;margin-bottom: 14rem
    }}`],"xl:my-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-6 {margin-top: 1.5rem;margin-bottom: 1.5rem
    }}`],"xl:my-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-64 {margin-top: 16rem;margin-bottom: 16rem
    }}`],"xl:my-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-7 {margin-top: 1.75rem;margin-bottom: 1.75rem
    }}`],"xl:my-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-8 {margin-top: 2rem;margin-bottom: 2rem
    }}`],"xl:my-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-80 {margin-top: 20rem;margin-bottom: 20rem
    }}`],"xl:my-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-9 {margin-top: 2.25rem;margin-bottom: 2.25rem
    }}`],"xl:my-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:my-96 {margin-top: 24rem;margin-bottom: 24rem
    }}`],"xl:mb-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-0 {margin-bottom: 0px
    }}`],"xl:mb-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-1 {margin-bottom: 0.25rem
    }}`],"xl:mb-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-10 {margin-bottom: 2.5rem
    }}`],"xl:mb-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-11 {margin-bottom: 2.75rem
    }}`],"xl:mb-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-12 {margin-bottom: 3rem
    }}`],"xl:mb-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-14 {margin-bottom: 3.5rem
    }}`],"xl:mb-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-16 {margin-bottom: 4rem
    }}`],"xl:mb-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-2 {margin-bottom: 0.5rem
    }}`],"xl:mb-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-20 {margin-bottom: 5rem
    }}`],"xl:mb-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-24 {margin-bottom: 6rem
    }}`],"xl:mb-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-28 {margin-bottom: 7rem
    }}`],"xl:mb-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-3 {margin-bottom: 0.75rem
    }}`],"xl:mb-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-32 {margin-bottom: 8rem
    }}`],"xl:mb-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-4 {margin-bottom: 1rem
    }}`],"xl:mb-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-40 {margin-bottom: 10rem
    }}`],"xl:mb-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-48 {margin-bottom: 12rem
    }}`],"xl:mb-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-5 {margin-bottom: 1.25rem
    }}`],"xl:mb-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-56 {margin-bottom: 14rem
    }}`],"xl:mb-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-6 {margin-bottom: 1.5rem
    }}`],"xl:mb-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-64 {margin-bottom: 16rem
    }}`],"xl:mb-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-7 {margin-bottom: 1.75rem
    }}`],"xl:mb-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-8 {margin-bottom: 2rem
    }}`],"xl:mb-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-80 {margin-bottom: 20rem
    }}`],"xl:mb-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-9 {margin-bottom: 2.25rem
    }}`],"xl:mb-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mb-96 {margin-bottom: 24rem
    }}`],"xl:ml-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-0 {margin-left: 0px
    }}`],"xl:ml-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-1 {margin-left: 0.25rem
    }}`],"xl:ml-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-10 {margin-left: 2.5rem
    }}`],"xl:ml-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-11 {margin-left: 2.75rem
    }}`],"xl:ml-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-12 {margin-left: 3rem
    }}`],"xl:ml-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-14 {margin-left: 3.5rem
    }}`],"xl:ml-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-16 {margin-left: 4rem
    }}`],"xl:ml-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-2 {margin-left: 0.5rem
    }}`],"xl:ml-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-20 {margin-left: 5rem
    }}`],"xl:ml-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-24 {margin-left: 6rem
    }}`],"xl:ml-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-28 {margin-left: 7rem
    }}`],"xl:ml-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-3 {margin-left: 0.75rem
    }}`],"xl:ml-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-32 {margin-left: 8rem
    }}`],"xl:ml-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-4 {margin-left: 1rem
    }}`],"xl:ml-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-40 {margin-left: 10rem
    }}`],"xl:ml-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-48 {margin-left: 12rem
    }}`],"xl:ml-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-5 {margin-left: 1.25rem
    }}`],"xl:ml-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-56 {margin-left: 14rem
    }}`],"xl:ml-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-6 {margin-left: 1.5rem
    }}`],"xl:ml-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-64 {margin-left: 16rem
    }}`],"xl:ml-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-7 {margin-left: 1.75rem
    }}`],"xl:ml-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-8 {margin-left: 2rem
    }}`],"xl:ml-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-80 {margin-left: 20rem
    }}`],"xl:ml-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-9 {margin-left: 2.25rem
    }}`],"xl:ml-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:ml-96 {margin-left: 24rem
    }}`],"xl:mr-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-0 {margin-right: 0px
    }}`],"xl:mr-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-1 {margin-right: 0.25rem
    }}`],"xl:mr-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-10 {margin-right: 2.5rem
    }}`],"xl:mr-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-11 {margin-right: 2.75rem
    }}`],"xl:mr-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-12 {margin-right: 3rem
    }}`],"xl:mr-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-14 {margin-right: 3.5rem
    }}`],"xl:mr-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-16 {margin-right: 4rem
    }}`],"xl:mr-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-2 {margin-right: 0.5rem
    }}`],"xl:mr-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-20 {margin-right: 5rem
    }}`],"xl:mr-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-24 {margin-right: 6rem
    }}`],"xl:mr-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-28 {margin-right: 7rem
    }}`],"xl:mr-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-3 {margin-right: 0.75rem
    }}`],"xl:mr-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-32 {margin-right: 8rem
    }}`],"xl:mr-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-4 {margin-right: 1rem
    }}`],"xl:mr-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-40 {margin-right: 10rem
    }}`],"xl:mr-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-48 {margin-right: 12rem
    }}`],"xl:mr-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-5 {margin-right: 1.25rem
    }}`],"xl:mr-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-56 {margin-right: 14rem
    }}`],"xl:mr-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-6 {margin-right: 1.5rem
    }}`],"xl:mr-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-64 {margin-right: 16rem
    }}`],"xl:mr-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-7 {margin-right: 1.75rem
    }}`],"xl:mr-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-8 {margin-right: 2rem
    }}`],"xl:mr-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-80 {margin-right: 20rem
    }}`],"xl:mr-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-9 {margin-right: 2.25rem
    }}`],"xl:mr-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mr-96 {margin-right: 24rem
    }}`],"xl:mt-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-0 {margin-top: 0px
    }}`],"xl:mt-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-1 {margin-top: 0.25rem
    }}`],"xl:mt-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-10 {margin-top: 2.5rem
    }}`],"xl:mt-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-11 {margin-top: 2.75rem
    }}`],"xl:mt-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-12 {margin-top: 3rem
    }}`],"xl:mt-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-14 {margin-top: 3.5rem
    }}`],"xl:mt-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-16 {margin-top: 4rem
    }}`],"xl:mt-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-2 {margin-top: 0.5rem
    }}`],"xl:mt-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-20 {margin-top: 5rem
    }}`],"xl:mt-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-24 {margin-top: 6rem
    }}`],"xl:mt-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-28 {margin-top: 7rem
    }}`],"xl:mt-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-3 {margin-top: 0.75rem
    }}`],"xl:mt-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-32 {margin-top: 8rem
    }}`],"xl:mt-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-4 {margin-top: 1rem
    }}`],"xl:mt-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-40 {margin-top: 10rem
    }}`],"xl:mt-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-48 {margin-top: 12rem
    }}`],"xl:mt-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-5 {margin-top: 1.25rem
    }}`],"xl:mt-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-56 {margin-top: 14rem
    }}`],"xl:mt-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-6 {margin-top: 1.5rem
    }}`],"xl:mt-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-64 {margin-top: 16rem
    }}`],"xl:mt-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-7 {margin-top: 1.75rem
    }}`],"xl:mt-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-8 {margin-top: 2rem
    }}`],"xl:mt-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-80 {margin-top: 20rem
    }}`],"xl:mt-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-9 {margin-top: 2.25rem
    }}`],"xl:mt-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:mt-96 {margin-top: 24rem
    }}`],"xl:block":[`@media (min-width: 1280px){__SCOPE__ .xl\\:block {display: block
    }}`],"xl:flex":[`@media (min-width: 1280px){__SCOPE__ .xl\\:flex {display: flex
    }}`],"xl:grid":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid {display: grid
    }}`],"xl:hidden":[`@media (min-width: 1280px){__SCOPE__ .xl\\:hidden {display: none
    }}`],"xl:w-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-0 {width: 0px
    }}`],"xl:w-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1 {width: 0.25rem
    }}`],"xl:w-1/2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1\\/2 {width: 50%
    }}`],"xl:w-1/3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1\\/3 {width: 33.333333%
    }}`],"xl:w-1/4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1\\/4 {width: 25%
    }}`],"xl:w-1/5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1\\/5 {width: 20%
    }}`],"xl:w-1/6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-1\\/6 {width: 16.666667%
    }}`],"xl:w-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-10 {width: 2.5rem
    }}`],"xl:w-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-11 {width: 2.75rem
    }}`],"xl:w-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-12 {width: 3rem
    }}`],"xl:w-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-14 {width: 3.5rem
    }}`],"xl:w-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-16 {width: 4rem
    }}`],"xl:w-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-2 {width: 0.5rem
    }}`],"xl:w-2/3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-2\\/3 {width: 66.666667%
    }}`],"xl:w-2/5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-2\\/5 {width: 40%
    }}`],"xl:w-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-20 {width: 5rem
    }}`],"xl:w-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-24 {width: 6rem
    }}`],"xl:w-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-28 {width: 7rem
    }}`],"xl:w-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-3 {width: 0.75rem
    }}`],"xl:w-3/4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-3\\/4 {width: 75%
    }}`],"xl:w-3/5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-3\\/5 {width: 60%
    }}`],"xl:w-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-32 {width: 8rem
    }}`],"xl:w-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-4 {width: 1rem
    }}`],"xl:w-4/5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-4\\/5 {width: 80%
    }}`],"xl:w-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-40 {width: 10rem
    }}`],"xl:w-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-48 {width: 12rem
    }}`],"xl:w-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-5 {width: 1.25rem
    }}`],"xl:w-5/12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-5\\/12 {width: 41.666667%
    }}`],"xl:w-5/6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-5\\/6 {width: 83.333333%
    }}`],"xl:w-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-56 {width: 14rem
    }}`],"xl:w-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-6 {width: 1.5rem
    }}`],"xl:w-6/12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-6\\/12 {width: 50%
    }}`],"xl:w-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-64 {width: 16rem
    }}`],"xl:w-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-7 {width: 1.75rem
    }}`],"xl:w-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-8 {width: 2rem
    }}`],"xl:w-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-80 {width: 20rem
    }}`],"xl:w-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-9 {width: 2.25rem
    }}`],"xl:w-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-96 {width: 24rem
    }}`],"xl:w-auto":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-auto {width: auto
    }}`],"xl:w-full":[`@media (min-width: 1280px){__SCOPE__ .xl\\:w-full {width: 100%
    }}`],"xl:flex-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:flex-1 {flex: 1 1 0%
    }}`],"xl:grid-cols-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-1 {grid-template-columns: repeat(1, minmax(0, 1fr))
    }}`],"xl:grid-cols-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-12 {grid-template-columns: repeat(12, minmax(0, 1fr))
    }}`],"xl:grid-cols-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-2 {grid-template-columns: repeat(2, minmax(0, 1fr))
    }}`],"xl:grid-cols-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-3 {grid-template-columns: repeat(3, minmax(0, 1fr))
    }}`],"xl:grid-cols-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-4 {grid-template-columns: repeat(4, minmax(0, 1fr))
    }}`],"xl:grid-cols-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-5 {grid-template-columns: repeat(5, minmax(0, 1fr))
    }}`],"xl:grid-cols-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:grid-cols-6 {grid-template-columns: repeat(6, minmax(0, 1fr))
    }}`],"xl:flex-row":[`@media (min-width: 1280px){__SCOPE__ .xl\\:flex-row {flex-direction: row
    }}`],"xl:flex-col":[`@media (min-width: 1280px){__SCOPE__ .xl\\:flex-col {flex-direction: column
    }}`],"xl:flex-wrap":[`@media (min-width: 1280px){__SCOPE__ .xl\\:flex-wrap {flex-wrap: wrap
    }}`],"xl:items-start":[`@media (min-width: 1280px){__SCOPE__ .xl\\:items-start {align-items: flex-start
    }}`],"xl:items-end":[`@media (min-width: 1280px){__SCOPE__ .xl\\:items-end {align-items: flex-end
    }}`],"xl:items-center":[`@media (min-width: 1280px){__SCOPE__ .xl\\:items-center {align-items: center
    }}`],"xl:justify-end":[`@media (min-width: 1280px){__SCOPE__ .xl\\:justify-end {justify-content: flex-end
    }}`],"xl:justify-center":[`@media (min-width: 1280px){__SCOPE__ .xl\\:justify-center {justify-content: center
    }}`],"xl:justify-between":[`@media (min-width: 1280px){__SCOPE__ .xl\\:justify-between {justify-content: space-between
    }}`],"xl:gap-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-0 {gap: 0px
    }}`],"xl:gap-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-1 {gap: 0.25rem
    }}`],"xl:gap-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-10 {gap: 2.5rem
    }}`],"xl:gap-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-11 {gap: 2.75rem
    }}`],"xl:gap-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-12 {gap: 3rem
    }}`],"xl:gap-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-14 {gap: 3.5rem
    }}`],"xl:gap-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-16 {gap: 4rem
    }}`],"xl:gap-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-2 {gap: 0.5rem
    }}`],"xl:gap-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-20 {gap: 5rem
    }}`],"xl:gap-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-24 {gap: 6rem
    }}`],"xl:gap-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-28 {gap: 7rem
    }}`],"xl:gap-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-3 {gap: 0.75rem
    }}`],"xl:gap-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-32 {gap: 8rem
    }}`],"xl:gap-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-4 {gap: 1rem
    }}`],"xl:gap-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-40 {gap: 10rem
    }}`],"xl:gap-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-48 {gap: 12rem
    }}`],"xl:gap-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-5 {gap: 1.25rem
    }}`],"xl:gap-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-56 {gap: 14rem
    }}`],"xl:gap-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-6 {gap: 1.5rem
    }}`],"xl:gap-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-64 {gap: 16rem
    }}`],"xl:gap-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-7 {gap: 1.75rem
    }}`],"xl:gap-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-8 {gap: 2rem
    }}`],"xl:gap-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-80 {gap: 20rem
    }}`],"xl:gap-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-9 {gap: 2.25rem
    }}`],"xl:gap-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-96 {gap: 24rem
    }}`],"xl:gap-x-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-0 {column-gap: 0px
    }}`],"xl:gap-x-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-1 {column-gap: 0.25rem
    }}`],"xl:gap-x-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-10 {column-gap: 2.5rem
    }}`],"xl:gap-x-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-11 {column-gap: 2.75rem
    }}`],"xl:gap-x-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-12 {column-gap: 3rem
    }}`],"xl:gap-x-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-14 {column-gap: 3.5rem
    }}`],"xl:gap-x-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-16 {column-gap: 4rem
    }}`],"xl:gap-x-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-2 {column-gap: 0.5rem
    }}`],"xl:gap-x-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-20 {column-gap: 5rem
    }}`],"xl:gap-x-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-24 {column-gap: 6rem
    }}`],"xl:gap-x-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-28 {column-gap: 7rem
    }}`],"xl:gap-x-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-3 {column-gap: 0.75rem
    }}`],"xl:gap-x-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-32 {column-gap: 8rem
    }}`],"xl:gap-x-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-4 {column-gap: 1rem
    }}`],"xl:gap-x-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-40 {column-gap: 10rem
    }}`],"xl:gap-x-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-48 {column-gap: 12rem
    }}`],"xl:gap-x-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-5 {column-gap: 1.25rem
    }}`],"xl:gap-x-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-56 {column-gap: 14rem
    }}`],"xl:gap-x-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-6 {column-gap: 1.5rem
    }}`],"xl:gap-x-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-64 {column-gap: 16rem
    }}`],"xl:gap-x-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-7 {column-gap: 1.75rem
    }}`],"xl:gap-x-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-8 {column-gap: 2rem
    }}`],"xl:gap-x-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-80 {column-gap: 20rem
    }}`],"xl:gap-x-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-9 {column-gap: 2.25rem
    }}`],"xl:gap-x-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-x-96 {column-gap: 24rem
    }}`],"xl:gap-y-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-0 {row-gap: 0px
    }}`],"xl:gap-y-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-1 {row-gap: 0.25rem
    }}`],"xl:gap-y-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-10 {row-gap: 2.5rem
    }}`],"xl:gap-y-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-11 {row-gap: 2.75rem
    }}`],"xl:gap-y-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-12 {row-gap: 3rem
    }}`],"xl:gap-y-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-14 {row-gap: 3.5rem
    }}`],"xl:gap-y-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-16 {row-gap: 4rem
    }}`],"xl:gap-y-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-2 {row-gap: 0.5rem
    }}`],"xl:gap-y-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-20 {row-gap: 5rem
    }}`],"xl:gap-y-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-24 {row-gap: 6rem
    }}`],"xl:gap-y-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-28 {row-gap: 7rem
    }}`],"xl:gap-y-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-3 {row-gap: 0.75rem
    }}`],"xl:gap-y-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-32 {row-gap: 8rem
    }}`],"xl:gap-y-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-4 {row-gap: 1rem
    }}`],"xl:gap-y-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-40 {row-gap: 10rem
    }}`],"xl:gap-y-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-48 {row-gap: 12rem
    }}`],"xl:gap-y-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-5 {row-gap: 1.25rem
    }}`],"xl:gap-y-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-56 {row-gap: 14rem
    }}`],"xl:gap-y-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-6 {row-gap: 1.5rem
    }}`],"xl:gap-y-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-64 {row-gap: 16rem
    }}`],"xl:gap-y-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-7 {row-gap: 1.75rem
    }}`],"xl:gap-y-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-8 {row-gap: 2rem
    }}`],"xl:gap-y-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-80 {row-gap: 20rem
    }}`],"xl:gap-y-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-9 {row-gap: 2.25rem
    }}`],"xl:gap-y-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:gap-y-96 {row-gap: 24rem
    }}`],"xl:p-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-0 {padding: 0px
    }}`],"xl:p-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-1 {padding: 0.25rem
    }}`],"xl:p-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-10 {padding: 2.5rem
    }}`],"xl:p-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-11 {padding: 2.75rem
    }}`],"xl:p-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-12 {padding: 3rem
    }}`],"xl:p-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-14 {padding: 3.5rem
    }}`],"xl:p-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-16 {padding: 4rem
    }}`],"xl:p-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-2 {padding: 0.5rem
    }}`],"xl:p-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-20 {padding: 5rem
    }}`],"xl:p-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-24 {padding: 6rem
    }}`],"xl:p-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-28 {padding: 7rem
    }}`],"xl:p-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-3 {padding: 0.75rem
    }}`],"xl:p-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-32 {padding: 8rem
    }}`],"xl:p-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-4 {padding: 1rem
    }}`],"xl:p-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-40 {padding: 10rem
    }}`],"xl:p-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-48 {padding: 12rem
    }}`],"xl:p-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-5 {padding: 1.25rem
    }}`],"xl:p-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-56 {padding: 14rem
    }}`],"xl:p-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-6 {padding: 1.5rem
    }}`],"xl:p-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-64 {padding: 16rem
    }}`],"xl:p-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-7 {padding: 1.75rem
    }}`],"xl:p-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-8 {padding: 2rem
    }}`],"xl:p-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-80 {padding: 20rem
    }}`],"xl:p-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-9 {padding: 2.25rem
    }}`],"xl:p-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:p-96 {padding: 24rem
    }}`],"xl:px-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-0 {padding-left: 0px;padding-right: 0px
    }}`],"xl:px-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-1 {padding-left: 0.25rem;padding-right: 0.25rem
    }}`],"xl:px-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-10 {padding-left: 2.5rem;padding-right: 2.5rem
    }}`],"xl:px-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-11 {padding-left: 2.75rem;padding-right: 2.75rem
    }}`],"xl:px-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-12 {padding-left: 3rem;padding-right: 3rem
    }}`],"xl:px-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-14 {padding-left: 3.5rem;padding-right: 3.5rem
    }}`],"xl:px-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-16 {padding-left: 4rem;padding-right: 4rem
    }}`],"xl:px-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-2 {padding-left: 0.5rem;padding-right: 0.5rem
    }}`],"xl:px-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-20 {padding-left: 5rem;padding-right: 5rem
    }}`],"xl:px-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-24 {padding-left: 6rem;padding-right: 6rem
    }}`],"xl:px-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-28 {padding-left: 7rem;padding-right: 7rem
    }}`],"xl:px-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-3 {padding-left: 0.75rem;padding-right: 0.75rem
    }}`],"xl:px-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-32 {padding-left: 8rem;padding-right: 8rem
    }}`],"xl:px-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-4 {padding-left: 1rem;padding-right: 1rem
    }}`],"xl:px-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-40 {padding-left: 10rem;padding-right: 10rem
    }}`],"xl:px-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-48 {padding-left: 12rem;padding-right: 12rem
    }}`],"xl:px-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-5 {padding-left: 1.25rem;padding-right: 1.25rem
    }}`],"xl:px-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-56 {padding-left: 14rem;padding-right: 14rem
    }}`],"xl:px-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-6 {padding-left: 1.5rem;padding-right: 1.5rem
    }}`],"xl:px-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-64 {padding-left: 16rem;padding-right: 16rem
    }}`],"xl:px-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-7 {padding-left: 1.75rem;padding-right: 1.75rem
    }}`],"xl:px-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-8 {padding-left: 2rem;padding-right: 2rem
    }}`],"xl:px-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-80 {padding-left: 20rem;padding-right: 20rem
    }}`],"xl:px-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-9 {padding-left: 2.25rem;padding-right: 2.25rem
    }}`],"xl:px-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:px-96 {padding-left: 24rem;padding-right: 24rem
    }}`],"xl:py-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-0 {padding-top: 0px;padding-bottom: 0px
    }}`],"xl:py-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-1 {padding-top: 0.25rem;padding-bottom: 0.25rem
    }}`],"xl:py-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-10 {padding-top: 2.5rem;padding-bottom: 2.5rem
    }}`],"xl:py-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-11 {padding-top: 2.75rem;padding-bottom: 2.75rem
    }}`],"xl:py-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-12 {padding-top: 3rem;padding-bottom: 3rem
    }}`],"xl:py-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-14 {padding-top: 3.5rem;padding-bottom: 3.5rem
    }}`],"xl:py-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-16 {padding-top: 4rem;padding-bottom: 4rem
    }}`],"xl:py-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-2 {padding-top: 0.5rem;padding-bottom: 0.5rem
    }}`],"xl:py-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-20 {padding-top: 5rem;padding-bottom: 5rem
    }}`],"xl:py-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-24 {padding-top: 6rem;padding-bottom: 6rem
    }}`],"xl:py-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-28 {padding-top: 7rem;padding-bottom: 7rem
    }}`],"xl:py-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-3 {padding-top: 0.75rem;padding-bottom: 0.75rem
    }}`],"xl:py-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-32 {padding-top: 8rem;padding-bottom: 8rem
    }}`],"xl:py-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-4 {padding-top: 1rem;padding-bottom: 1rem
    }}`],"xl:py-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-40 {padding-top: 10rem;padding-bottom: 10rem
    }}`],"xl:py-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-48 {padding-top: 12rem;padding-bottom: 12rem
    }}`],"xl:py-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-5 {padding-top: 1.25rem;padding-bottom: 1.25rem
    }}`],"xl:py-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-56 {padding-top: 14rem;padding-bottom: 14rem
    }}`],"xl:py-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-6 {padding-top: 1.5rem;padding-bottom: 1.5rem
    }}`],"xl:py-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-64 {padding-top: 16rem;padding-bottom: 16rem
    }}`],"xl:py-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-7 {padding-top: 1.75rem;padding-bottom: 1.75rem
    }}`],"xl:py-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-8 {padding-top: 2rem;padding-bottom: 2rem
    }}`],"xl:py-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-80 {padding-top: 20rem;padding-bottom: 20rem
    }}`],"xl:py-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-9 {padding-top: 2.25rem;padding-bottom: 2.25rem
    }}`],"xl:py-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:py-96 {padding-top: 24rem;padding-bottom: 24rem
    }}`],"xl:pb-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-0 {padding-bottom: 0px
    }}`],"xl:pb-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-1 {padding-bottom: 0.25rem
    }}`],"xl:pb-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-10 {padding-bottom: 2.5rem
    }}`],"xl:pb-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-11 {padding-bottom: 2.75rem
    }}`],"xl:pb-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-12 {padding-bottom: 3rem
    }}`],"xl:pb-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-14 {padding-bottom: 3.5rem
    }}`],"xl:pb-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-16 {padding-bottom: 4rem
    }}`],"xl:pb-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-2 {padding-bottom: 0.5rem
    }}`],"xl:pb-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-20 {padding-bottom: 5rem
    }}`],"xl:pb-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-24 {padding-bottom: 6rem
    }}`],"xl:pb-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-28 {padding-bottom: 7rem
    }}`],"xl:pb-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-3 {padding-bottom: 0.75rem
    }}`],"xl:pb-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-32 {padding-bottom: 8rem
    }}`],"xl:pb-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-4 {padding-bottom: 1rem
    }}`],"xl:pb-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-40 {padding-bottom: 10rem
    }}`],"xl:pb-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-48 {padding-bottom: 12rem
    }}`],"xl:pb-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-5 {padding-bottom: 1.25rem
    }}`],"xl:pb-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-56 {padding-bottom: 14rem
    }}`],"xl:pb-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-6 {padding-bottom: 1.5rem
    }}`],"xl:pb-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-64 {padding-bottom: 16rem
    }}`],"xl:pb-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-7 {padding-bottom: 1.75rem
    }}`],"xl:pb-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-8 {padding-bottom: 2rem
    }}`],"xl:pb-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-80 {padding-bottom: 20rem
    }}`],"xl:pb-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-9 {padding-bottom: 2.25rem
    }}`],"xl:pb-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pb-96 {padding-bottom: 24rem
    }}`],"xl:pl-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-0 {padding-left: 0px
    }}`],"xl:pl-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-1 {padding-left: 0.25rem
    }}`],"xl:pl-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-10 {padding-left: 2.5rem
    }}`],"xl:pl-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-11 {padding-left: 2.75rem
    }}`],"xl:pl-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-12 {padding-left: 3rem
    }}`],"xl:pl-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-14 {padding-left: 3.5rem
    }}`],"xl:pl-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-16 {padding-left: 4rem
    }}`],"xl:pl-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-2 {padding-left: 0.5rem
    }}`],"xl:pl-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-20 {padding-left: 5rem
    }}`],"xl:pl-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-24 {padding-left: 6rem
    }}`],"xl:pl-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-28 {padding-left: 7rem
    }}`],"xl:pl-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-3 {padding-left: 0.75rem
    }}`],"xl:pl-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-32 {padding-left: 8rem
    }}`],"xl:pl-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-4 {padding-left: 1rem
    }}`],"xl:pl-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-40 {padding-left: 10rem
    }}`],"xl:pl-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-48 {padding-left: 12rem
    }}`],"xl:pl-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-5 {padding-left: 1.25rem
    }}`],"xl:pl-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-56 {padding-left: 14rem
    }}`],"xl:pl-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-6 {padding-left: 1.5rem
    }}`],"xl:pl-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-64 {padding-left: 16rem
    }}`],"xl:pl-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-7 {padding-left: 1.75rem
    }}`],"xl:pl-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-8 {padding-left: 2rem
    }}`],"xl:pl-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-80 {padding-left: 20rem
    }}`],"xl:pl-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-9 {padding-left: 2.25rem
    }}`],"xl:pl-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pl-96 {padding-left: 24rem
    }}`],"xl:pr-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-0 {padding-right: 0px
    }}`],"xl:pr-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-1 {padding-right: 0.25rem
    }}`],"xl:pr-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-10 {padding-right: 2.5rem
    }}`],"xl:pr-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-11 {padding-right: 2.75rem
    }}`],"xl:pr-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-12 {padding-right: 3rem
    }}`],"xl:pr-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-14 {padding-right: 3.5rem
    }}`],"xl:pr-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-16 {padding-right: 4rem
    }}`],"xl:pr-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-2 {padding-right: 0.5rem
    }}`],"xl:pr-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-20 {padding-right: 5rem
    }}`],"xl:pr-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-24 {padding-right: 6rem
    }}`],"xl:pr-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-28 {padding-right: 7rem
    }}`],"xl:pr-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-3 {padding-right: 0.75rem
    }}`],"xl:pr-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-32 {padding-right: 8rem
    }}`],"xl:pr-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-4 {padding-right: 1rem
    }}`],"xl:pr-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-40 {padding-right: 10rem
    }}`],"xl:pr-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-48 {padding-right: 12rem
    }}`],"xl:pr-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-5 {padding-right: 1.25rem
    }}`],"xl:pr-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-56 {padding-right: 14rem
    }}`],"xl:pr-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-6 {padding-right: 1.5rem
    }}`],"xl:pr-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-64 {padding-right: 16rem
    }}`],"xl:pr-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-7 {padding-right: 1.75rem
    }}`],"xl:pr-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-8 {padding-right: 2rem
    }}`],"xl:pr-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-80 {padding-right: 20rem
    }}`],"xl:pr-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-9 {padding-right: 2.25rem
    }}`],"xl:pr-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pr-96 {padding-right: 24rem
    }}`],"xl:pt-0":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-0 {padding-top: 0px
    }}`],"xl:pt-1":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-1 {padding-top: 0.25rem
    }}`],"xl:pt-10":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-10 {padding-top: 2.5rem
    }}`],"xl:pt-11":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-11 {padding-top: 2.75rem
    }}`],"xl:pt-12":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-12 {padding-top: 3rem
    }}`],"xl:pt-14":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-14 {padding-top: 3.5rem
    }}`],"xl:pt-16":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-16 {padding-top: 4rem
    }}`],"xl:pt-2":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-2 {padding-top: 0.5rem
    }}`],"xl:pt-20":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-20 {padding-top: 5rem
    }}`],"xl:pt-24":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-24 {padding-top: 6rem
    }}`],"xl:pt-28":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-28 {padding-top: 7rem
    }}`],"xl:pt-3":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-3 {padding-top: 0.75rem
    }}`],"xl:pt-32":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-32 {padding-top: 8rem
    }}`],"xl:pt-4":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-4 {padding-top: 1rem
    }}`],"xl:pt-40":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-40 {padding-top: 10rem
    }}`],"xl:pt-48":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-48 {padding-top: 12rem
    }}`],"xl:pt-5":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-5 {padding-top: 1.25rem
    }}`],"xl:pt-56":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-56 {padding-top: 14rem
    }}`],"xl:pt-6":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-6 {padding-top: 1.5rem
    }}`],"xl:pt-64":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-64 {padding-top: 16rem
    }}`],"xl:pt-7":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-7 {padding-top: 1.75rem
    }}`],"xl:pt-8":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-8 {padding-top: 2rem
    }}`],"xl:pt-80":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-80 {padding-top: 20rem
    }}`],"xl:pt-9":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-9 {padding-top: 2.25rem
    }}`],"xl:pt-96":[`@media (min-width: 1280px){__SCOPE__ .xl\\:pt-96 {padding-top: 24rem
    }}`],"xl:text-left":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-left {text-align: left
    }}`],"xl:text-center":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-center {text-align: center
    }}`],"xl:text-right":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-right {text-align: right
    }}`],"xl:text-2xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-2xl {font-size: 1.5rem;line-height: 2rem
    }}`],"xl:text-3xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-3xl {font-size: 1.875rem;line-height: 2.25rem
    }}`],"xl:text-4xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-4xl {font-size: 2.25rem;line-height: 2.5rem
    }}`],"xl:text-5xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-5xl {font-size: 3rem;line-height: 1
    }}`],"xl:text-6xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-6xl {font-size: 3.75rem;line-height: 1
    }}`],"xl:text-base":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-base {font-size: 1rem;line-height: 1.5rem
    }}`],"xl:text-lg":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-lg {font-size: 1.125rem;line-height: 1.75rem
    }}`],"xl:text-sm":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-sm {font-size: 0.875rem;line-height: 1.25rem
    }}`],"xl:text-xl":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-xl {font-size: 1.25rem;line-height: 1.75rem
    }}`],"xl:text-xs":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-xs {font-size: 0.75rem;line-height: 1rem
    }}`],"xl:text-black":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-black {--tw-text-opacity: 1;color: rgb(0 0 0 / var(--tw-text-opacity, 1))
    }}`],"xl:text-current":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-current {color: currentColor
    }}`],"xl:text-transparent":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-transparent {color: transparent
    }}`],"xl:text-white":[`@media (min-width: 1280px){__SCOPE__ .xl\\:text-white {--tw-text-opacity: 1;color: rgb(255 255 255 / var(--tw-text-opacity, 1))
    }}`]};var cr=`MIT License

Copyright (c) 2022 TailGrids

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
`;var Z=n=>String(n??"").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;"),Bi=new Set("section div span p h1 h2 h3 h4 h5 h6 a button ul ol li article aside header footer main nav img svg path rect circle ellipse line polyline polygon defs linearGradient stop g title details summary br hr strong em small b i figure figcaption picture source blockquote".toLowerCase().split(" "));function zi(n,e){let t=lr(n,{sourceType:"module",plugins:["jsx","typescript"]}),r={},i={},a;function s(d){if(d){if(d.type==="VariableDeclaration")for(let x of d.declarations)x.id.type==="Identifier"&&(["ArrowFunctionExpression","FunctionExpression"].includes(x.init?.type)?i[x.id.name]=x.init:r[x.id.name]=x.init);d.type==="FunctionDeclaration"&&(i[d.id.name]=d)}}for(let d of t.program.body)s(d),d.type==="ExportNamedDeclaration"&&s(d.declaration),d.type==="ExportDefaultDeclaration"&&(s(d.declaration),a=d.declaration);let o=d=>{e.includes(d)||e.push(d)};function _(d,x={}){if(!d)return"";if(["TSAsExpression","TSNonNullExpression","TSTypeAssertion","ParenthesizedExpression"].includes(d.type))return _(d.expression,x);if(["StringLiteral","NumericLiteral","BooleanLiteral"].includes(d.type))return d.value;if(d.type==="NullLiteral")return null;if(d.type==="Identifier")return Object.hasOwn(x,d.name)?x[d.name]:r[d.name]?_(r[d.name],x):void 0;if(d.type==="ArrayExpression")return d.elements.map(f=>_(f,x));if(d.type==="ObjectExpression"){let f={};for(let u of d.properties)if(u.type==="ObjectProperty"&&!u.computed){let P=u.key.name??u.key.value;["__proto__","constructor","prototype"].includes(P)||(f[P]=_(u.value,x))}return f}if(d.type==="MemberExpression"){let f=_(d.object,x),u=d.computed?_(d.property,x):d.property.name;return f&&Object.hasOwn(f,u)?f[u]:void 0}if(d.type==="TemplateLiteral"){let f=d.expressions.map(u=>_(u,x));return f.some(u=>u===void 0)?void 0:d.quasis.map((u,P)=>u.value.cooked+(f[P]??"")).join("")}if(d.type==="BinaryExpression"&&d.operator==="+"){let f=_(d.left,x),u=_(d.right,x);return f===void 0||u===void 0?void 0:f+u}if(d.type==="ConditionalExpression"){let f=_(d.test,x);return f===void 0?void 0:_(f?d.consequent:d.alternate,x)}if(d.type==="LogicalExpression"){let f=_(d.left,x);return f===void 0?void 0:d.operator==="&&"?f?_(d.right,x):"":f||_(d.right,x)}if(d.type==="JSXElement"||d.type==="JSXFragment")return{html:l(d,x)}}function m(d,x,f){let u={};if(d.params?.[0]?.type==="ObjectPattern")for(let C of d.params[0].properties)C.key&&C.value?.name&&(u[C.value.name]=x[C.key.name]);else d.params?.[0]?.type==="Identifier"&&(u[d.params[0].name]=x);if(d.body.type!=="BlockStatement")return l(d.body,u,f+1);let P;for(let C of d.body.body){if(C.type==="VariableDeclaration")for(let V of C.declarations)V.id.type==="Identifier"&&(u[V.id.name]=_(V.init,u));if(C.type==="ReturnStatement"){P=C.argument;break}}return l(P,u,f+1)}function l(d,x={},f=0){if(!d)return"";if(f>30)throw Error("Component nesting exceeds 30 levels. Paste one smaller section.");if(d.type==="JSXText")return Z(d.value.replace(/\s+/g," "));if(d.type==="JSXFragment")return d.children.map(E=>l(E,x,f+1)).join("");if(d.type==="JSXExpressionContainer")return l(d.expression,x,f+1);if(d.type==="CallExpression"&&d.callee.type==="MemberExpression"&&d.callee.property.name==="map"){let E=_(d.callee.object,x),M=d.arguments[0];if(!Array.isArray(E)||!["ArrowFunctionExpression","FunctionExpression"].includes(M?.type))return o("A dynamic .map() was removed. Only literal arrays with a simple JSX callback are supported."),"";if(E.length>30)throw Error("Maximum 30 array items.");return o("Literal array .map() expanded safely; repeated matching markup can become editor blocks."),E.map((G,Et)=>{let nt={...x};M.params[0]?.name&&(nt[M.params[0].name]=G),M.params[1]?.name&&(nt[M.params[1].name]=Et);let j=M.body.type==="BlockStatement"?M.body.body.find(Ut=>Ut.type==="ReturnStatement")?.argument:M.body;return l(j,nt,f+1)}).join("")}if(d.type!=="JSXElement"){let E=_(d,x);return E===void 0?(o("Unresolved JavaScript expressions/state were omitted. This is static markup conversion, not a React runtime."),""):E?.html??Z(E??"")}let u=d.openingElement.name.name;if(!u)return o("Namespaced/custom JSX tags were removed."),"";let P={};for(let E of d.openingElement.attributes){if(E.type==="JSXSpreadAttribute"){o("Spread props were omitted.");continue}let M=E.name.name;P[M]=E.value?.type==="JSXExpressionContainer"?_(E.value.expression,x):E.value?.value??!0}if(/^[A-Z]/.test(u))return/AccordionItem|FaqItem|FAQItem/.test(u)&&(P.header||P.question)&&(P.text||P.answer)?(o("Stateful accordion helper replaced with native details/summary; verify layout."),`<details class="mb-4 rounded-lg bg-white p-4 shadow-lg"><summary class="font-semibold text-lg">${Z(P.header||P.question)}</summary><p class="mt-4 text-base">${Z(P.text||P.answer)}</p></details>`):i[u]?m(i[u],P,f+1):(o(`Custom component ${u} has no local implementation and was omitted.`),"");let C=[];for(let[E,M]of Object.entries(P))if(!(E==="children"||E==="key"||E==="ref")){if(E==="className"&&(E="class"),E==="htmlFor"&&(E="for"),E=E.replace(/[A-Z]/g,G=>"-"+G.toLowerCase()),M===void 0||typeof M=="object"){o(`Dynamic/object attribute ${E} omitted.`);continue}if(E.startsWith("on")||E==="dangerously-set-inner-h-t-m-l"){o("Event handlers/unsafe HTML are not migrated.");continue}if(typeof M=="boolean"){M&&C.push(E);continue}C.push(`${E}="${Z(M)}"`)}let V=`<${u} ${C.join(" ")}>`;return["img","br","hr","source"].includes(u)?V:V+d.children.map(E=>l(E,x,f+1)).join("")+`</${u}>`}if(a?.type==="Identifier")return m(i[a.name],{},0);if(["FunctionDeclaration","ArrowFunctionExpression","FunctionExpression"].includes(a?.type))return m(a,{},0);if(a)return l(a);let c=Object.values(i)[0];if(c)return m(c,{},0);let g=t.program.body.find(d=>d.type==="ExpressionStatement");if(g)return l(g.expression);throw Error("No JSX component return found. Paste static HTML or one component with a JSX return.")}function hr(n){let e=n.match(/^(p[trblxy]?|m[trblxy]?|w|h|min-w|max-w|min-h|max-h|gap|rounded|text|leading|bg)-\[([#\w.,%() -]+)\]$/);if(!e)return null;let[,t,r]=e;if(!/^(?:#[0-9a-fA-F]{3,8}|-?\d+(?:\.\d+)?(?:px|rem|em|%|vh|vw)|auto|none)$/.test(r))return null;let i={w:"width",h:"height","max-w":"max-width","min-w":"min-width","max-h":"max-height","min-h":"min-height",gap:"gap",rounded:"border-radius",leading:"line-height",bg:"background-color",text:r.startsWith("#")?"color":"font-size"},a=i[t]?`${i[t]}:${r}`:"";if(/^[pm]/.test(t)){let s=t[0]==="p"?"padding":"margin";a={t:["top"],r:["right"],b:["bottom"],l:["left"],x:["left","right"],y:["top","bottom"],"":[""]}[t.slice(1)]?.map(_=>`${s}${_?"-"+_:""}:${r}`).join(";")??""}return a?`__SCOPE__ .${CSS.escape(n)}{${a}}`:null}function Ae(n,e="Converted section"){let t=[];if(n.length>12e4)throw Error("Input exceeds 120 KB. Convert one section at a time.");if(!n.trim())throw Error("Paste HTML or JSX first.");if(/\{[%{]/.test(n))throw Error("Existing Liquid is not supported. Paste source HTML/JSX without Liquid tags.");let r=n;/(?:\bimport\s|\bexport\s|\breturn\s*\(|\bclassName\s*=)/.test(n)&&(r=zi(n,t));let i=document.createElement("template");i.innerHTML=r;let a=i.content;if(a.querySelectorAll("*").length>1500)throw Error("Maximum 1,500 DOM elements.");for(let v of[...a.querySelectorAll("script,style,link,iframe,object,embed,form,input,textarea,select,video,audio")])t.push(`Removed unsupported ${v.tagName.toLowerCase()} element and its behavior.`),v.remove();let s=a;if(!s.textContent.trim()&&!s.querySelector("img"))throw Error("No supported static content remains. Resolve custom components or dynamic expressions first.");let o=[],_=[],m=[],l=new Set,c=new Set,g=new Set,d=0,x=0,f=new Map,u=(v,T,D,R,$="field")=>{if(v.length>=45)throw Error("More than 45 editable fields in one scope. Split the section.");let N=`${$}_${++d}`;return v.push({type:T,id:N,label:D.slice(0,50),...R!==""&&R!==void 0?{default:String(R).slice(0,4e3)}:{}}),N},P=(v,T)=>`{{ ${v}.settings.${T} | escape }}`,C=v=>v.tagName.toLowerCase()+[...v.children].filter(T=>T.tagName.toLowerCase()!=="svg").map(T=>C(T)).join("");function V(v){let T=[...v.children];return T.length<2||T.length>30||!new Set(["DIV","ARTICLE","LI","DETAILS","BLOCKQUOTE"]).has(T[0].tagName)||!T[0].querySelector("h2,h3,h4,p,summary")?null:T.every(R=>C(R)===C(T[0]))?T:null}let E=new Map;for(let v of[...s.querySelectorAll("*")].reverse()){if([...E.keys()].some(D=>D.contains(v)||v.contains(D)))continue;let T=V(v);T&&E.set(v,T)}function M(v,T,D){let R=[];for(let $ of[...v.attributes]){let N=$.name,F=$.value;if(N.startsWith("on")||["style","srcdoc","nonce","integrity","contenteditable"].includes(N)){t.push(`Removed ${N}; custom inline styles/events are not converted.`);continue}if(N==="class"){F.split(/\s+/).filter(Boolean).forEach(X=>l.add(X)),R.push(`class="${Z(F)}"`);continue}if(N==="id"){R.push(`id="sc-{{ section.id }}-${Z(F.replace(/[^\w-]/g,"-"))}"`);continue}if(N==="href"&&v.tagName==="A"){let X=/^(https?:\/\/|\/[^/]|\/$)/.test(F),gt=u(D,"url","Link URL",X?F:void 0);X||t.push("A blank, hash-only or unsafe link needs a URL selected in the theme editor."),R.push(`href="${P(T,gt)}"`);continue}if(!(N==="src"||N==="srcset")&&N!=="target"){if(N==="aria-expanded"){t.push("Removed aria-expanded: React state does not run in Liquid.");continue}if(/^javascript:|^data:/i.test(F)){t.push(`Unsafe ${N} value removed.`);continue}N==="fill"&&F.startsWith("url(#")&&(F=F.replace("url(#","url(#sc-{{ section.id }}-")),!(["width","height"].includes(N)&&v.tagName==="IMG")&&/^[a-zA-Z_:][\w:.-]*$/.test(N)&&R.push(`${N}="${Z(F)}"`)}}return R}function G(v,T="section",D=o,R=!1){if(v.nodeType===3){let B=v.textContent;if(!B.trim())return B;if(v.parentElement?.closest("svg"))return Z(B);let tt=u(D,B.trim().length>100?"textarea":"text","Text "+(D.length+1),B.trim());return P(T,tt)}if(v.nodeType!==1)return"";let $=v,N=$.tagName.toLowerCase();if(!Bi.has(N))return t.push(`Unsupported tag ${N} unwrapped.`),[...$.childNodes].map(B=>G(B,T,D)).join("");if(N==="img"){let B=u(D,"image_picker","Image",void 0,"image"),tt=u(D,"text","Image description",$.getAttribute("alt")||"Image","alt"),xt=$.getAttribute("class")||"";return xt.split(/\s+/).filter(Boolean).forEach(jt=>l.add(jt)),t.push("Upload/select images in Shopify: image_picker cannot keep an external image as its default."),`{% if ${T}.settings.${B} != blank %}{{ ${T}.settings.${B} | image_url: width: 1600 | image_tag: widths: '320, 640, 960, 1600', sizes: '100vw', loading: 'lazy', class: '${xt.replace(/'/g,"")}', alt: ${T}.settings.${tt} }}{% else %}{{ 'image' | placeholder_svg_tag: '${xt.replace(/'/g,"")}' }}{% endif %}`}let F=M($,T,D);R&&F.push("{{ block.shopify_attributes }}");let X,gt=T==="section"&&E.get($);if(gt){t.push("Repeated blocks use the first item\u2019s structure, classes and decorative SVG; different per-item icon/style variants need manual review.");let B=`item_${++x}`,tt=[],xt=G(gt[0],"block",tt,!0);_.push({type:B,name:"Repeated item "+x,settings:tt});for(let jt of gt){let $t=[],Le=d;d=Le-tt.length,G(jt,"block",$t),d=Le;let De={};tt.forEach((gr,Me)=>{$t[Me]?.default!==void 0&&(De[gr.id]=$t[Me].default)}),m.push({type:B,settings:De})}X=`{% for block in section.blocks %}{% if block.type == '${B}' %}${xt}{% endif %}{% endfor %}`}else X=[...$.childNodes].map(B=>G(B,T,D)).join("");let Ne=`<${N}${F.length?" "+F.join(" "):""}>`;return["img","br","hr","source"].includes(N)?Ne:Ne+X+`</${N}>`}let Et=[...s.childNodes].map(v=>G(v)).join("");for(let v of l){let T=dr[v]??(hr(v)?[hr(v)]:null);T?T.forEach(D=>c.add(D)):g.add(v)}g.size&&t.push("CSS not available for "+[...g].slice(0,40).join(", ")+(g.size>40?" \u2026":"")+". Their class names are retained, but you must add scoped CSS manually.");let nt=[...c].join(`
`);nt=nt.replace(/rgb\((\d+) (\d+) (\d+)(\s*\/[^)]*)?\)/g,(v,T,D,R,$="")=>{let N="#"+[T,D,R].map(X=>Number(X).toString(16).padStart(2,"0")).join("");if(!f.has(N)){if(f.size>=12)return v;f.set(N,u(o,"color","Color "+(f.size+1),N,"color"))}let F=f.get(N);return`rgb({{ section.settings.${F} | color_extract: 'red' }} {{ section.settings.${F} | color_extract: 'green' }} {{ section.settings.${F} | color_extract: 'blue' }}${$})`});let j="#shopify-section-{{ section.id }}",Ut=`${j}{font-family:ui-sans-serif,system-ui,sans-serif;line-height:1.5;overflow-wrap:anywhere}${j} *,${j} *::before,${j} *::after{box-sizing:border-box;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;border:0 solid #e5e7eb}${j} :where(h1,h2,h3,h4,h5,h6,p,ul,ol,figure){margin:0}${j} :where(h1,h2,h3,h4,h5,h6){font-size:inherit;font-weight:inherit;letter-spacing:normal}${j} :where(a){color:inherit;text-decoration:inherit}${j} :where(ul,ol){list-style:none;padding:0}${j} :where(img,svg){max-width:100%;height:auto}${j} summary{cursor:pointer}${j} :is(a,button,summary):focus-visible{outline:3px solid #2563eb;outline-offset:3px}`;if(m.length>50)throw Error("More than 50 inferred blocks. Split this input into smaller sections.");e=e.replace(/[^\w -]/g,"").trim().slice(0,25)||"Converted section";let Ie={name:e,tag:"section",settings:o,..._.length?{blocks:_,max_blocks:Math.min(50,Math.max(m.length,20))}:{},presets:[{name:e,...m.length?{blocks:m}:{}}]};return t.push("Static best-effort export. Theme Check and a duplicate-theme edit test are still required. No cart, checkout, apps, external CSS, React state or arbitrary components are migrated."),{liquid:`{% comment %}${n.includes("Copyright (c) 2022 TailGrids")?`
`+cr+`
`:""}Generated locally by SectionStitch. Static best-effort output; review and test before publishing. Use only source code and assets you have permission to reuse.{% endcomment %}
${Et}
<style>
${Ut}
${nt.replaceAll("__SCOPE__",j)}
</style>
{% schema %}
${JSON.stringify(Ie,null,2)}
{% endschema %}
`,schema:Ie,warnings:[...new Set(t)],stats:{settings:o.length,blockTypes:_.length,presetBlocks:m.length,unsupportedClasses:g.size,cssRules:c.size},markup:Et}}var K=null,I=n=>document.getElementById(n),Rt=I("source"),zt=I("output");async function Ri(){try{I("convert").disabled=!0;let n=performance.now();K=Ae(Rt.value,I("section-name").value),zt.value=K.liquid,I("download").disabled=!1,I("copy").disabled=!1,I("stats").textContent=`${K.stats.settings} settings \xB7 ${K.stats.blockTypes} block types \xB7 ${K.stats.presetBlocks} starter blocks \xB7 ${Math.round(performance.now()-n)} ms`,I("warnings").replaceChildren(...K.warnings.map(e=>{let t=document.createElement("li");return t.textContent=e,t})),I("status").textContent="Export generated. Review the warnings before installing.",window.lastConversion=K}catch(n){K=null,window.lastConversion=null,zt.value="",I("download").disabled=!0,I("copy").disabled=!0,I("status").textContent="Cannot convert: "+n.message,I("warnings").replaceChildren()}finally{I("convert").disabled=!1}}I("convert").addEventListener("click",Ri);I("download").addEventListener("click",()=>{if(!K)return;let n=URL.createObjectURL(new Blob([K.liquid],{type:"text/plain"})),e=document.createElement("a");e.href=n,e.download=(I("section-name").value.toLowerCase().replace(/[^a-z0-9-]/g,"-").slice(0,30)||"section")+".liquid",e.click(),setTimeout(()=>URL.revokeObjectURL(n),1e3)});I("copy").addEventListener("click",async()=>{try{await navigator.clipboard.writeText(zt.value),I("status").textContent="Liquid copied."}catch{I("status").textContent="Select the output and copy it manually."}});var Ui=await fetch(new URL("samples.json",import.meta.url)),Ct=await Ui.json();for(let n of Ct){let e=document.createElement("option");e.value=n.name,e.textContent=n.label,I("sample").append(e)}I("sample").addEventListener("change",()=>{let n=Ct.find(e=>e.name===I("sample").value);n&&(Rt.value=n.code,I("section-name").value=n.name+" section",zt.value="",I("download").disabled=!0,I("copy").disabled=!0,I("status").textContent="Example loaded. Click Convert section.",K=null)});Rt.addEventListener("input",()=>{K=null,I("download").disabled=!0,I("copy").disabled=!0,I("status").textContent="Input changed. Convert again before downloading."});Rt.value=Ct[0].code;I("sample").value=Ct[0].name;I("status").textContent="Ready. Conversion stays in this browser.";window.sectionConvert=Ae;window.sectionSamples=Ct;
