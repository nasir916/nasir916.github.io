---
title: "Using \"grepl\" for string detection (R)"
date: 2018-10-24T03:54:48.810Z
slug: using-grepl-for-string-detection-r
categories: ["R-Programming"]
---

grepl function is use to return TRUE if a string contain the pattern that we specify, else it will return FALSE if the parameter is not match in each element of the vector.

general function of grepl:

*grepl(pattern, x, ignore.case=F, perl=F, fixed = F, useBytes=F)*

-  pattern = regular expression, or string for fixed = TRUE.  
- x = string, the character vector  
- ignore.case = logical, should perl-compatible regexps be used? has priority over extended.  
- fixed = logical, if TRUE the pattern is a string to be matched as is. Overrides all conflicting arguments.  
- useBytes = logical, if TRUE the matching is done byte-by-byte rather than character-by-character. 

 *x \<- "line 4322: He is now 25 years old, and weights 130lbs" \> y \<- grepl("\\\\d+",x) \> y*

*\[1\] TRUE*

*x \<- "line 4322: He is now 25 years old, and weights 130lbs" \> y \<- grepl("\[\[:digit:\]\]",x) \> y*

*\[1\] TRUE*

  
*Vector match:*

*str \<- c("Regular", "expression", "examples of R language") \>x \<- grepl("x\*ress",str) \>x*

*\[1\] FALSE TRUE FALSE* 

---

*REGULAR EXPRESSION CODING:*

Syntax               Description

\\\\d  ---\> Digit, 0,1,2 ... 9

\\\\D ---\>  Not Digit

\\\\s ---\>  Space

\\\\S  ---\> Not Space

\\\\w ---\> Word

\\\\W ---\> Not Word

\\\\t  ---\> Tab

\\\\n  ---\> New line

^    ---\>  Beginning of the string

$    ---\> End of the string

\\   ---\> Escape special characters, e.g. \\\\ is "\\", \\+ is "+"

\|    ---\> Alternation match. e.g. /(e\|d)n/ matches "en" and "dn"

•   ---\> Any character, except \\n or line terminator

\[ab\]  ---\> a or b

\[^ab\] ---\> Any character except a and b

\[0-9\]  ---\> All Digit

\[A-Z\]  ---\> All uppercase A to Z letters

\[a-z\]  ---\> All lowercase a to z letters

\[A-z\]  ---\> All Uppercase and lowercase a to z letters

i+i     ---\> at least one time

i\*i    ---\> zero or more times

i?i   ---\> zero or 1 time

i{n}i   ---\> occurs n times in sequence

i{n1,n2}i  ---\> occurs n1 - n2 times in sequence

i{n1,n2}?  ---\> non greedy match, see above example

i{n,}    ---\> i occures \>= n times

\[:alnum:\]   ---\> Alphanumeric characters: \[:alpha:\] and \[:digit:\]

\[:alpha:\]  ---\> Alphabetic characters: \[:lower:\] and \[:upper:\]

\[:blank:\]   ---\> Blank characters: e.g. space, tab

\[:cntrl:\]   ---\> Control characters

\[:digit:\]   ---\> Digits: 0 1 2 3 4 5 6 7 8 9

\[:graph:\]   ---\>  Graphical characters: \[:alnum:\] and \[:punct:\]

\[:lower:\]   ---\> Lower-case letters in the current locale

\[:print:\]   ---\> Printable characters: \[:alnum:\], \[:punct:\] and space

\[:punct:\]   ---\>Punctuation character: ! " # $ % & ' ( ) \* + , - . / : ; \< = \> ? @ \[ \\ \] ^ \_ \` { \| } ~

\[:space:\]   ---\> Space characters: tab, newline, vertical tab, form feed, carriage return, space

\[:upper:\]  ---\> Upper-case letters in the current locale

\[:xdigit:\]   ---\>  Hexadecimal digits: 0 1 2 3 4 5 6 7 8 9 A B C D E F a b c d e f
