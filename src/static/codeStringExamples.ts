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
    '    const string2 = "hi"'+
    'return( \n' +
    '<div> hi </div>\n' +
    ')';
export const consoleExample = "npm install bla\n" +
    "cd ..\n" +
    "cd bla";

export const jsonExample = "{name: 'hallo', ort: 'woanders', direction:{x:[],y:5}}";


