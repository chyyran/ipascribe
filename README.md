---
title: "IPAScribe"
date: November 12, 2020
author: Ronny Chan
geometry: margin=2cm
output: pdf_document
mainfont: "Noto Serif CJK JP"
monofont: "Fira Code"
---

# IPAScribe
IPA transcribing practice game. 

https://ipascribe.chyyran.dev/


https://github.com/chyyran/ipascribe

## About
IPAScribe is a web-based game to help practice IPA transcription from (currently) North American English. 

Because it is freely available and easy to use, IPAScribe uses Carnegie Mellon University's (2014) [CMUDict][1], a ARPAbet annotated corpus of English words, as its primary (and so far only) corpus. Each ARPAbet entry was then converted to IPA with the [ARPAbetAndIPAConvertor][3] Python library by zhangqi (2018).

## Hosting and Usage
A hosted instance of IPAScribe is available at https://ipascribe.chyyran.dev/.


IPAScribe consists of three parts: the corpus query server, the web application, and the pronunciation Lambda.

### Query Server (`ipascribe-queryserver`)
The query server is a small Rust application that manage the CMUDict data.

The endpoint **`GET /word`** retrieves a single, random entry from CMUDict in a JSON array. The first element of the array is always the orthographic representation of the word in English, and the following array elements are one or more pronunciations of the word, as recorded in CMUDict, transcribed as IPA.


```json
["somersaulting","ˈsʌmɜ:ˌsɔ:ltɪŋ"]
```

The endpoint **`GET /words/:word`** retrieves such an entry for a given arbitrary word, provided it is recorded in CMUDict. If it is not, then a 404 error is returned.

### Web Application (`ipascribe-app`)
The web application is the main frontend to IPAScribe and is a basic React application that can be built with `yarn build`.

### Pronunciation Lambda
In order to be effective as a practice tool, we need to be able to hear the word pronounced. The most ideal situation would be to use recordings, however there are a surprisingly small number of phonetically annotated word corpora. The most popular, TIMIT (Garofolo et al. 1993), is not freely available, and is not word-based, but sentenced based. Thus, we must resort to speech synthesis tools with CMUDict.

From my own experience, Google's [Cloud Text-to-Speech][5] has the most natural sounding synthesized speech, but does not support the `<phoneme>` SSML tag required to ask the speech engine to pronounce IPA.

Amazon's AWS [Polly][6] is a less natural sounding Text-to-Speech service, but does support the `<phoneme>` tag. Following Katie Russ's blogpost "Pronouncing Things with Amazon's Polly", I set up an [AWS Lambda](https://aws.amazon.com/lambda/) to get Polly to pronounce IPA strings at will.

The [source code](https://gist.githubusercontent.com/katie7r/c57a2adbc9d8fca1682eee359fb0dec3/raw/f9f7983addd1ff18e80632ef8020e097b147f976/IPA%20Reader%20Lambda.py) for this AWS Lambda was taken directly from Katie Russ' (2018) blog on using Amazon Polly to pronounce IPA. 

## Third-party

### CMUDict
CMUDict is licensed under a simplified BSD license that is compatible with the MIT License.

```
Copyright (C) 1993-2015 Carnegie Mellon University. All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions
are met:
1. Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
   The contents of this file are deemed to be source code.
2. Redistributions in binary form must reproduce the above copyright
   notice, this list of conditions and the following disclaimer in
   the documentation and/or other materials provided with the
   distribution.
This work was supported in part by funding from the Defense Advanced
Research Projects Agency, the Office of Naval Research and the National
Science Foundation of the United States of America, and by member
companies of the Carnegie Mellon Sphinx Speech Consortium. We acknowledge
the contributions of many volunteers to the expansion and improvement of
this dictionary.
THIS SOFTWARE IS PROVIDED BY CARNEGIE MELLON UNIVERSITY "AS IS" AND
ANY EXPRESSED OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL CARNEGIE MELLON UNIVERSITY
NOR ITS EMPLOYEES BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
```

### react-ipa-input
react-ipa-input by Dan Rouse is used to allow easy input of IPA symbols on the web application. It has been ported to TypeScript by Ronny Chan for use in this React application. react-ipa-input is licensed under the MIT License.

```
Copyright (c) 2015 Daniel Rouse
Copyright (c) 2020 Ronny Chan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

### ARPAbetAndIPAConvertor
ARPAbetAndIPAConvertor was used to convert the ARPAbet entries from CMUDict into IPA strings.
It is licensed under the MIT license.

```
The MIT License (MIT)

Copyright 2017 zhangqi <https://github.com/chdzq/ARPAbetAndIPAConvertor.git>

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
```
## Legal

This work, unless otherwise specified [above](#third-party), is licensed under the MIT License.

```
Copyright (c) 2020 Ronny Chan

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
```

In addition, **you may choose to additionally** license this work **as a whole** under the Creative Commons Attribution 4.0 International (CC-BY-4.0) license.

Note that choosing this option **imposes more restrictions** than licensing only under the MIT and above third-party licenses. Specifically, should you choose this option, you are subject to

  * The liability and warranty limitations imposed by the MIT and Simplified BSD Licenses
  * The requirement to provide the copyright notices and licenses (MIT and Simplified BSD License as applicable) in all copies or substantial portions of this work.
  * All other restrictions imposed by CC-BY-4.0. 
    * In regards to Section 2.5 of CC-BY-4.0, all downstream recipients of your derivative work shall also be bound by both the MIT License, the Simplified BSD License for CMUDict, and CC-BY-4.0.

## LIN101 Disclaimers

My resource is in some parts entirely original, and in some parts derived and built upon the works of many others. `ipascribe-queryserver` is entirely original work, and `ipascribe-app` likewise, with the exception of `react-ipa-input`, which was created by Dan Rouse (2015), and modified by me, to allow easy input of IPA character in the web application. The corpus used (CMUDict) is maintained by the Carnegie Mellon Speech Group, built upon contributions from many contributors over the years. 

As per request, I have made available the option to license the work under CC-BY-4.0. However, since I have used many resources in creating this work that are not under my sole authorship, in following with the rights granted to me by the constituent third-party licenses, I am only able to license the work under CC-BY-4.0 as long as the other license terms are also followed. Creative Commons [recommends against](https://creativecommons.org/faq/#can-i-apply-a-creative-commons-license-to-software) licensing software under a Creative Commons license, and the MIT License that the work is primarily licensed with is a *more permissive* license than CC-BY-4.0. Nevertheless, should the choice be made to license this work under CC-BY-4.0, the option is available. 

## References
1. Carnegie Mellon University. (2014). CMU Pronouncing Dictionary (CMUDict) Version 0.7b. Retrieved November 9, 2020, from [www.speech.cs.cmu.edu/cgi-bin/cmudict][1]
2. Katie Russ. (2018). Pronouncing Things with Amazon's Polly. Retrieved November 10, 2020, from [cuttlesoft.com/blog/pronouncing-things-with-amazons-polly][2]
3. zhangqi. (2018). ARPAbetAndIPAConvertor Version 1.0.2. Retrieved November 9, 2020, from [pypi.org/project/arpabetandipaconvertor][3] 
4. Dan Rouse. (2015). react-ipa-input. Retrieved November 12, 2020, from [github.com/danrouse/react-ipa-input][4]
5. Google. Cloud Text-to-Speech. Retrieved November 12, 2020, from [cloud.google.com/text-to-speech][5]
6. Amazon. Amazon Polly. Retrieved November 12, 2020, from [aws.amazon.com/polly][6]
7. John S. Garofolo, Lori F. Lamel, William M. Fisher, Jonathan G. Fiscus, David S. Pallett, Nancy L. Dahlgren, Victor Zue. (1993). TIMIT Acoustic-Phonetic Continuous Speech Corpus. Retrieved November 12, 2020, from [catalog.ldc.upenn.edu/LDC93S1][7]
8. Katie Russ. IPA Reader. Retrieved November 12, 2020, from [ipa-reader.xyz][8]


[1]: http://www.speech.cs.cmu.edu/cgi-bin/cmudict
[2]: https://cuttlesoft.com/blog/pronouncing-things-with-amazons-polly/
[3]: https://pypi.org/project/arpabetandipaconvertor/
[4]: https://github.com/danrouse/react-ipa-input
[5]: https://cloud.google.com/text-to-speech
[6]: https://aws.amazon.com/polly/
[7]: https://catalog.ldc.upenn.edu/LDC93S1
[8]: http://ipa-reader.xyz/