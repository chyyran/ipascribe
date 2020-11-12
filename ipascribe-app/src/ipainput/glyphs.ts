export interface Glyph 
{
    glyph: string,
    name: string,
    resembles: string[],
    diacritic: boolean
}

const glyphs: Glyph[] = [
    {   glyph: 'ɑ',
        name: 'open back unrounded',
        resembles: [ 'a' ],
        diacritic: false 
    }, {
        glyph: 'ɐ',
        name: 'open-mid schwa',
        resembles: [ 'a' ],
        diacritic: false 
    }, {
        glyph: 'ɒ',
        name: 'open back rounded',
        resembles: [ 'a' ],
        diacritic: false 
    }, {
        glyph: 'æ',
        name: 'raised open front unrounded',
        resembles: [ 'a' ],
        diacritic: false 
    }, {
        glyph: 'ɓ',
        name: 'vd bilabial implosive',
        resembles: [ 'b' ],
        diacritic: false 
    }, {
        glyph: 'ʙ',
        name: 'vd bilabial trill',
        resembles: [ 'b' ],
        diacritic: false 
    }, {
        glyph: 'β',
        name: 'vd bilabial fricative',
        resembles: [ 'b' ],
        diacritic: false 
    }, {
        glyph: 'ᵝ',
        name: 'rounded coarticulation',
        resembles: [ 'b' ],
        diacritic: false 
    }, {
        glyph: 'ᵇ',
        name: 'labial coarticulation',
        resembles: [ 'b' ],
        diacritic: false 
    }, {
        glyph: 'ɔ',
        name: 'open-mid back rounded',
        resembles: [ 'c', 'o' ],
        diacritic: false 
    }, {
        glyph: 'ɕ',
        name: 'vl alveolopalatal fricative',
        resembles: [ 'c' ],
        diacritic: false 
    }, {
        glyph: 'ç',
        name: 'vl palatal fricative',
        resembles: [ 'c' ],
        diacritic: false 
    }, {
        glyph: 'ɗ',
        name: 'vd alveolar implosive',
        resembles: [ 'd' ],
        diacritic: false 
    }, {
        glyph: 'ɖ',
        name: 'vd retroflex plosive',
        resembles: [ 'd' ],
        diacritic: false 
    }, {
        glyph: 'ð',
        name: 'vd dental fricative',
        resembles: [ 'd', 'ذ', 'ظ' ],
        diacritic: false 
    }, {
        glyph: 'ʤ',
        name: 'vd postalveolar affricate',
        resembles: [ 'd', 'z', 'g', 'ج' ],
        diacritic: false 
    }, {
        glyph: 'ə',
        name: 'schwa',
        resembles: [ 'e' ],
        diacritic: false 
    }, {
        glyph: 'ɘ',
        name: 'close-mid schwa',
        resembles: [ 'e' ],
        diacritic: false 
    }, {
        glyph: 'ɚ',
        name: 'rhotacized schwa',
        resembles: [ 'e', 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɛ',
        name: 'open-mid front unrounded',
        resembles: [ 'e' ],
        diacritic: false 
    }, {
        glyph: 'ɜ',
        name: 'open-mid central',
        resembles: [ 'e' ],
        diacritic: false 
    }, {
        glyph: 'ɝ',
        name: 'rhotacized open-mid central',
        resembles: [ 'e', 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɞ',
        name: 'open-mid central rounded',
        resembles: [ 'e' ],
        diacritic: false 
    }, {
        glyph: 'ɟ',
        name: 'vd palatal plosive',
        resembles: [ 'f' ],
        diacritic: false 
    }, {
        glyph: 'ʄ',
        name: 'vd palatal implosive',
        resembles: [ 'f' ],
        diacritic: false 
    }, {
        glyph: 'ɡ',
        name: 'vd velar plosive',
        resembles: [ 'g' ],
        diacritic: false 
    }, {
        glyph: 'ɠ',
        name: 'vd velar implosive',
        resembles: [ 'g' ],
        diacritic: false 
    }, {
        glyph: 'ɢ',
        name: 'vd uvular plosive',
        resembles: [ 'g' ],
        diacritic: false 
    }, {
        glyph: 'ʛ',
        name: 'vd uvular implosive',
        resembles: [ 'g' ],
        diacritic: false 
    }, {
        glyph: 'ɦ',
        name: 'vd glottal fricative',
        resembles: [ 'h' ],
        diacritic: false 
    }, {
        glyph: 'ɧ',
        name: 'vl multiple-place fricative',
        resembles: [ 'h' ],
        diacritic: false 
    }, {
        glyph: 'ħ',
        name: 'vl pharyngeal fricative',
        resembles: [ 'h', 'ح' ],
        diacritic: false 
    }, {
        glyph: 'ɥ',
        name: 'labial-palatal approximant',
        resembles: [ 'h' ],
        diacritic: false 
    }, {
        glyph: 'ʜ',
        name: 'vl epiglottal fricative',
        resembles: [ 'h' ],
        diacritic: false 
    }, {
        glyph: 'ʰ',
        name: 'aspirated',
        resembles: [ 'h' ],
        diacritic: true 
    }, {
        glyph: 'ʱ',
        name: 'breathy-voice-aspirated',
        resembles: [ 'h' ],
        diacritic: true 
    }, {
        glyph: 'ɨ',
        name: 'close central unrounded',
        resembles: [ 'i' ],
        diacritic: false 
    }, {
        glyph: 'ɪ',
        name: 'lax close front unrounded',
        resembles: [ 'i' ],
        diacritic: false 
    }, {
        glyph: 'ʝ',
        name: 'vd palatal fricative',
        resembles: [ 'j' ],
        diacritic: false 
    }, {
        glyph: 'ʲ',
        name: 'palatalized',
        resembles: [ 'j' ],
        diacritic: true 
    }, {
        glyph: 'ɭ',
        name: 'vd retroflex lateral',
        resembles: [ 'l' ],
        diacritic: false 
    }, {
        glyph: 'ɬ',
        name: 'vl alveolar lateral fricative',
        resembles: [ 'l' ],
        diacritic: false 
    }, {
        glyph: 'ɫ',
        name: 'velarized vd alveolar lateral',
        resembles: [ 'l' ],
        diacritic: false 
    }, {
        glyph: 'ɮ',
        name: 'vd alveolar lateral fricative',
        resembles: [ 'l' ],
        diacritic: false 
    }, {
        glyph: 'ʟ',
        name: 'vd velar lateral',
        resembles: [ 'l' ],
        diacritic: false 
    }, {
        glyph: 'ʷ',
        name: 'labialized',
        resembles: [ 'l' ],
        diacritic: true 
    }, {
        glyph: 'ɱ',
        name: 'vd labiodental nasal',
        resembles: [ 'm' ],
        diacritic: false 
    }, {
        glyph: 'ɯ',
        name: 'close back unrounded',
        resembles: [ 'm', 'w', ],
        diacritic: false 
    }, {
        glyph: 'ɰ',
        name: 'velar approximant',
        resembles: [ 'm', 'w', ],
        diacritic: false 
    }, {
        glyph: 'ᵐ',
        name: 'nasal coarticulation',
        resembles: [ 'm' ],
        diacritic: true 
    }, {
        glyph: 'ŋ',
        name: 'vd velar nasal',
        resembles: [ 'n' ],
        diacritic: false 
    }, {
        glyph: 'ɳ',
        name: 'vd retroflex nasal',
        resembles: [ 'n' ],
        diacritic: false 
    }, {
        glyph: 'ɲ',
        name: 'vd palatal nasal',
        resembles: [ 'n' ],
        diacritic: false 
    }, {
        glyph: 'ɴ',
        name: 'vd uvular nasal',
        resembles: [ 'n' ],
        diacritic: false 
    }, {
        glyph: 'ⁿ',
        name: 'nasal coarticulation',
        resembles: [ 'n' ],
        diacritic: true 
    }, {
        glyph: 'ᵑ',
        name: 'nasal coarticulation',
        resembles: [ 'n' ],
        diacritic: true 
    }, {
        glyph: 'ø',
        name: 'front close-mid rounded',
        resembles: [ 'o' ],
        diacritic: false 
    }, {
        glyph: 'ɵ',
        name: 'rounded schwa',
        resembles: [ 'o' ],
        diacritic: false 
    }, {
        glyph: 'ɸ',
        name: 'vl bilabial fricative',
        resembles: [ 'o', 'f' ],
        diacritic: false 
    }, {
        glyph: 'θ',
        name: 'vl dental fricative',
        resembles: [ 'o', 't', 'ث' ],
        diacritic: false 
    }, {
        glyph: 'œ',
        name: 'front open-mid rounded',
        resembles: [ 'o' ],
        diacritic: false 
    }, {
        glyph: 'ɶ',
        name: 'front open rounded',
        resembles: [ 'o' ],
        diacritic: false 
    }, {
        glyph: 'ʘ',
        name: 'bilabial click',
        resembles: [ 'o' ],
        diacritic: false 
    }, {
        glyph: 'ɹ',
        name: 'vd (post)alveolar approximant',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɺ',
        name: 'vd alveolar lateral flap',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɾ',
        name: 'vd alveolar tap',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɻ',
        name: 'vd retroflex approximant',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ʀ',
        name: 'vd uvular trill',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ʁ',
        name: 'vd uvular fricative',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ɽ',
        name: 'vd retroflex flap',
        resembles: [ 'r' ],
        diacritic: false 
    }, {
        glyph: 'ʴ',
        name: 'rhotacized',
        resembles: [ 'r' ],
        diacritic: true 
    }, {
        glyph: 'ʂ',
        name: 'vl retroflex fricative',
        resembles: [ 's' ],
        diacritic: false 
    }, {
        glyph: 'ʃ',
        name: 'vl postalveolar fricative',
        resembles: [ 's', 'ش' ],
        diacritic: false 
    }, {
        glyph: 'ʈ',
        name: 'vl retroflex plosive',
        resembles: [ 't' ],
        diacritic: false 
    }, {
        glyph: 'ʧ',
        name: 'vl postalveolar affricate',
        resembles: [ 't' ],
        diacritic: false 
    }, {
        glyph: 'ʉ',
        name: 'close central rounded',
        resembles: [ 'u' ],
        diacritic: false 
    }, {
        glyph: 'ʊ',
        name: 'lax close back rounded',
        resembles: [ 'u' ],
        diacritic: false 
    }, {
        glyph: 'ʋ',
        name: 'vd labiodental approximant',
        resembles: [ 'u' ],
        diacritic: false 
    }, {
        glyph: 'ⱱ',
        name: 'voiced labiodental flap',
        resembles: [ 'v' ],
        diacritic: false 
    }, {
        glyph: 'ʌ',
        name: 'open-mid back unrounded',
        resembles: [ 'v' ],
        diacritic: false 
    }, {
        glyph: 'ɣ',
        name: 'vd velar fricative',
        resembles: [ 'v', 'غ' ],
        diacritic: false 
    }, {
        glyph: 'ɤ',
        name: 'close-mid back unrounded',
        resembles: [ 'v', ],
        diacritic: false 
    }, {
        glyph: 'ˠ',
        name: 'velarized',
        resembles: [ 'v' ],
        diacritic: true 
    }, {
        glyph: 'ʍ',
        name: 'vl labial-velar fricative',
        resembles: [ 'w' ],
        diacritic: false 
    }, {
        glyph: 'ʷ',
        name: 'labialized',
        resembles: [ 'w' ],
        diacritic: true 
    }, {
        glyph: 'χ',
        name: 'vl uvular fricative',
        resembles: [ 'x' ],
        diacritic: false 
    }, {
        glyph: 'ʎ',
        name: 'vd palatal lateral',
        resembles: [ 'y' ],
        diacritic: false 
    }, {
        glyph: 'ʏ',
        name: 'lax close front rounded',
        resembles: [ 'y' ],
        diacritic: false 
    }, {
        glyph: 'ʑ',
        name: 'vd alveolopalatal fricative',
        resembles: [ 'z' ],
        diacritic: false 
    }, {
        glyph: 'ʐ',
        name: 'vd retroflex fricative',
        resembles: [ 'z' ],
        diacritic: false 
    }, {
        glyph: 'ʒ',
        name: 'vd postalveolar fricative',
        resembles: [ 'z' ],
        diacritic: false 
    }, {
        glyph: 'ʔ',
        name: 'glottal plosive',
        resembles: [ '?', 'ء' ],
        diacritic: false 
    }, {
        glyph: 'ʡ',
        name: 'vd epiglottal plosive',
        resembles: [ '?' ],
        diacritic: false 
    }, {
        glyph: 'ʕ',
        name: 'vd pharyngeal fricative',
        resembles: [ '?', 'ع' ],
        diacritic: false 
    }, {
        glyph: 'ʢ',
        name: 'vd epiglottal fricative',
        resembles: [ '?' ],
        diacritic: false 
    }, {
        glyph: 'ˤ',
        name: 'pharyngealized',
        resembles: [ '?' ],
        diacritic: true 
    }, {
        glyph: 'ˀ',
        name: 'glottalized',
        resembles: [ '?' ],
        diacritic: true 
    }, {
        glyph: '˞',
        name: 'rhotacized',
        resembles: [ '~' ],
        diacritic: true 
    }, {
        glyph: '̃',
        name: 'nasalized',
        resembles: [ '~' ],
        diacritic: true 
    }, {
        glyph: '̴',
        name: 'velarized or pharyngealized',
        resembles: [ '~' ],
        diacritic: true 
    }, {
        glyph: '̰',
        name: 'creaky voiced',
        resembles: [ '~' ],
        diacritic: true 
    }, {
        glyph: 'ǀ',
        name: 'dental click',
        resembles: [ '|' ],
        diacritic: false 
    }, {
        glyph: 'ǁ',
        name: 'alveolar lateral click',
        resembles: [ '|' ],
        diacritic: false 
    }, {
        glyph: 'ǂ',
        name: 'alveolar click',
        resembles: [ '|' ],
        diacritic: false 
    }, {
        glyph: 'ǃ',
        name: 'retroflex click',
        resembles: [ '!' ],
        diacritic: false 
    }, {
        glyph: 'ˌ',
        name: 'secondary stress',
        resembles: [ ',' ],
        diacritic: true 
    }, {
        glyph: 'ː',
        name: 'length mark',
        resembles: [ ':' ],
        diacritic: true 
    }, {
        glyph: '˞',
        name: 'rhotacized',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '̴',
        name: 'velarized or pharyngealized',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '͜',
        name: 'tie bar below',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '͡',
        name: 'tie bar above',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '̠',
        name: 'retracted',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '̪',
        name: 'dental',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: '̺',
        name: 'apical',
        resembles: [ '-' ],
        diacritic: true 
    }, {
        glyph: 'ˌ',
        name: 'secondary stress',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̩',
        name: 'syllabic',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̥',
        name: 'voiceless',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̬',
        name: 'voiced',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̤',
        name: 'breathy voiced',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̟',
        name: 'advanced',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̠',
        name: 'retracted',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̰',
        name: 'creaky voiced',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̪',
        name: 'dental',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̺',
        name: 'apical',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̼',
        name: 'linguolabial',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̻',
        name: 'laminal',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̹',
        name: 'more rounded',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̜',
        name: 'less rounded',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̝',
        name: 'raised',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̞',
        name: 'lowered',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̯',
        name: 'non-syllabic',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̘',
        name: 'avanced tongue root',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '̙',
        name: 'retracted tongue root',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: '͜',
        name: 'tie bar below',
        resembles: [ '.' ],
        diacritic: true 
    }, {
        glyph: 'ˈ',
        name: 'primary stress',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: 'ˑ',
        name: 'half-length',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: 'ʼ',
        name: 'ejective',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̊',
        name: 'voiceless',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̚',
        name: 'not audibly released',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̈',
        name: 'centralized',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̽',
        name: 'mid-centralized',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̆',
        name: 'extra-short',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̋',
        name: 'extra high tone',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '́',
        name: 'high tone',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̄',
        name: 'mid tone',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̀',
        name: 'low tone',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '̏',
        name: 'extra low tone',
        resembles: [ '\'' ],
        diacritic: true 
    }, {
        glyph: '↓',
        name: 'downstep',
        resembles: [ '\'' ],
        diacritic: false 
    }, {
        glyph: '↑',
        name: 'upstep',
        resembles: [ '\'' ],
        diacritic: false 
    }, {
        glyph: '↗',
        name: 'global rise',
        resembles: [ '\'' ],
        diacritic: false 
    }, {
        glyph: '↘',
        name: 'global fall',
        resembles: [ '\'' ],
        diacritic: false 
    }, {
        glyph: '͡',
        name: 'tie bar above',
        resembles: [ '\'' ],
        diacritic: true
    }
];

export default glyphs