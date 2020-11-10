from arpabetandipaconvertor import arpabet2phoneticalphabet as arpa
from collections import defaultdict
from typing import *
import re 
import json
from tqdm import tqdm

convertor = arpa.ARPAbet2PhoneticAlphabetConvertor()
variant_regex = re.compile("\([0-9]+\)")


def convert_arpa(arpabet: str) -> str:
    return convertor.convert_to_international_phonetic_alphabet(arpabet)


def parse_line(cmuline: str) -> Tuple[str, str]:
    word, arpa = cmuline.split("  ", 1)
    return re.sub(variant_regex, "", word).lower(), convert_arpa(arpa)

def parse_file(cmudict: str) -> Dict[str, List[str]]:
    entries = defaultdict(lambda: [])
    with open(cmudict, 'r') as f:
        for line in tqdm(f.readlines()):
            if line.startswith(";;;"):
                continue
            word, ipa = parse_line(line)
            entries[word].append(ipa)
    return entries

if __name__ == "__main__":
    parsed = parse_file("cmudict-0.7b")
    with open("cmudict.json", "w", encoding='utf8') as f:
        json.dump(parsed, f, ensure_ascii=False)