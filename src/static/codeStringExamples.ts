import {ArticleData} from "../model/ArticleData";

export const cssExample = ".codeBox {\n" +
    "    margin: 0 auto 10px auto;\n" +
    "    font-size:13px;\n" +
    "}\n" +
    ".light{\n" +
    "    box-shadow: 0 0 2px 2px #e3e3e3;\n" +
    "}\n" +
    "@media screen and (max-width:500px){\n" +
    "    *{font-size:11px;}\n" +
    "}";


export const javaExample = "@Main\n" +
    "public class HelloWorld{\n" +
    "     public static void main (String[] args){ //Ausgabe Hello World!\n" +
    "          System.out.println(\"Hello World!\");\n" +
    "     }" +
    "\n}";

export const htmlExample = "<ul className='codeBox'>\n" +
    "                <li> hi</li>\n" +
    "            </ul>\n" +
    '            <Hallo key="hi" setActualStyle={setActualStyle}\n' +
    "                             setActualStyleName={setActualStyleName}\n" +
    "                             actualChosen={actualStyle}  >\n" +
    "           </Hallo>";

export const tsxExample = ' const [actualStyle, setActualStyle] = useState<{ [key: string]: CSSProperties; }>(styleArray[0]);\n' +
    '    const [actualStyleName, setActualStyleName] = useState<string>(styleNames[0]);\n' +
    '    const string2 = "hi"' +
    'return( \n' +
    '<div> hi </div>\n' +
    ')';
export const consoleExample = "npm install bla\n" +
    "cd ..\n" +
    "cd bla";

export const jsonExample = "{name: 'hallo', ort: 'woanders', direction:{x:[],y:5}}";

const list = ["hallo du bla",
    "denk auch an das hier",
    "<span style='color:green'> später </span> vielleicht auch dies... "];

const columns = [
    {
        name: "Cat",
        title: "Mew",
    },
    {
        name: "Director",
        title: "Dog",
    },
    {
        name: "Baby",
        title: "Bru",
    }
];
const titles = ["Name", "Titel"]

export const article: ArticleData = {
    h1: "Java", h2: "Mein erstes Programm", data: [
        {
            type: "text", h3: "Beispiel", paragraphs: ["Das erste Beispiel bla saddf sfsdafadö sdff" +
            "sadfjöasfjasf sfjöasdf fas jsadfö asjf sadfja ösdf asfö öjjöjjjöj jjkljkjö ökjöjköjköjk" +
            "öjöjkjk ööjkkjök jökjöjk öjökjökjköjk öjköjköjköjköj kö jöjköjk jjök ljök öj jöjö jö k jklö jkö jkl j kjö j " +
            " jkö j kjöjj ö j öjö j jj  jölj  jökl öjkj ökjö kj ö jöj ök jöjöj ö jöj ö jö öj öj öj jö" +
            "jl j öl öjlöj  jöj öj ökjök öj kj ökj ökj ökjök ", "Mit zweitem Absatzasfd asdf fs fas fasd" +
            "asföjsajöfasd fds fdsa fa fsad fsda fsa fsad fa fsda fsdasfda  fa afs fasd sfd fsda asfd" +
            "safd saf asf sfad afsd fa ds <span style='color:blue'> blauuuuuu </span> asffa fdsa asdf..."]
        }, //TextBox
        {type: "code", data: javaExample, language: "java"}, //Code
        {type: "list", data: list, sorted: true}, //Liste
        {type: "table", columns: columns, titles: titles}, //Tabelle
        {
            type: "diagram", data: [
                {
                    title: "Klasse1",
                    types: [
                        {attribute: "eins", type: "string"}
                    ],
                    color: "green"
                },
                {
                    title: "Klasse2",
                    types: [
                        {attribute: "eins", type: "string"},
                        {attribute: "zwei", type: "number"},
                        {attribute: "drei", type: "Klasse3"}
                    ],
                    color: "blue"
                },
                {
                    title: "Klasse3",
                    types: [
                        {attribute: "eins", type: "string"}
                    ],
                    color: "yellow"
                },
                {
                    title: "Klasse4",
                    types: [
                        {attribute: "eins", type: "string"},
                        {attribute: "zwei", type: "Klasse2"},
                        {attribute: "drei", type: "Klasse1"}
                    ],
                    color: "pink"
                }
            ]
        } //Klassendiagramm
    ]
}