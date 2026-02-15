export interface PolishWord {
    readonly word: string;
    readonly correctLetter: 'u' | 'ó';
    readonly displayWord: string;
}

const RAW_WORDS = [
    'autobus', 'burak', 'but', 'buda', 'buk', 'bułka', 'burza', 'chmura', 'cukier', 'córka', 'cud', 'cuda', 'cudowny', 'czuły', 'czułość',
    'czubek', 'czub', 'czujnik', 'czujny', 'człowiek', 'długi', 'dłuto', 'domówka', 'dumy', 'duży', 'duch', 'dziupla', 'dziura', 'dziurka',
    'futro', 'furman', 'góra', 'góry', 'górka', 'górnik', 'jaskółka', 'jutro', 'jutrzenka', 'jupiter', 'kura', 'kurczak', 'kurka', 'kubek',
    'kubraczek', 'kula', 'kulka', 'kultura', 'kupić', 'kupiec', 'kupka', 'kupować', 'kupon', 'kurier', 'kurz', 'kuźnia', 'lód', 'lody',
    'lódka', 'ludzki', 'lud', 'lustro', 'lut', 'łuk', 'łódka', 'łóżko', 'łóżeczko', 'łódź', 'mrówka', 'mur', 'murek', 'murarz', 'mucha',
    'muszla', 'muszka', 'mundur', 'muzyka', 'nudny', 'nuda', 'nóg', 'nóż', 'nóżka', 'ogród', 'ogródek', 'ogórek', 'okulary', 'oko', 'opór',
    'orzeł', 'ośmiornica', 'pióro', 'piórnik', 'półka', 'pół', 'północ', 'północny', 'półwysep', 'półmisek', 'półbuty', 'półki', 'półeczka',
    'pokój', 'pomoc', 'pomógł', 'pomóż', 'powód', 'powrót', 'próba', 'próbka', 'próg', 'próżnia', 'próżny', 'pudło', 'pudel', 'pudełko',
    'pulpit', 'punkt', 'pusty', 'puszka', 'puch', 'puchar', 'puchaty', 'ruch', 'rurka', 'rura', 'róża', 'różowy', 'różnica', 'różny',
    'różdżka', 'różaniec', 'różek', 'równy', 'równanie', 'równowaga', 'równina', 'równoległy', 'rój', 'skóra', 'skórka', 'słup', 'słupek',
    'słuch', 'słuchać', 'słuchawka', 'słuchacz', 'służyć', 'stół', 'stołek', 'stółek', 'stróż', 'stróżka', 'stróżówka', 'studnia', 'stukać',
    'stuk', 'sztuka', 'szuflada', 'szukać', 'szum', 'szumi', 'szumieć', 'szufelka', 'sufit', 'sukienka', 'suknia', 'suma', 'supeł', 'super',
    'suszyć', 'suszarka', 'suchy', 'słońce', 'sól', 'sólka', 'sówka', 'sowa', 'wóz', 'wózek', 'wózki', 'wódka', 'wódz',
    'wróbel', 'wróżka', 'wróżbita', 'wrócić', 'wrócił', 'wróciła', 'wróciło', 'wzór', 'wzorek', 'zupa', 'zupka', 'zuch',
    'zuchwały', 'żółw', 'żółty', 'żółtko'
];

function processWords(words: string[]): PolishWord[] {
    const uniqueWords = [...new Set(words)]; // Remove duplicates

    return uniqueWords.map(word => {
        let correctLetter: 'u' | 'ó';
        let displayWord = '';

        if (word.includes('ó')) {
            correctLetter = 'ó';
            displayWord = word.replace('ó', '_');
        } else if (word.includes('u')) {
            correctLetter = 'u';
            displayWord = word.replace('u', '_');
        } else {
            console.warn(`Word without u/ó found: ${word}`);
            return null;
        }

        // Handle words with multiple occurrences (first one is replaced)
        // Ideally we might want to support multiple holes, but spec implies simple choice
        // For simplicity, we assume one major missing letter or process accordingly.
        // The simple replace above replaces only the first occurrence which is usually sufficient for primary school.

        return {
            word,
            correctLetter,
            displayWord
        };
    }).filter((w): w is PolishWord => w !== null);
}

export const POLISH_UO_WORDS: readonly PolishWord[] = processWords(RAW_WORDS);
