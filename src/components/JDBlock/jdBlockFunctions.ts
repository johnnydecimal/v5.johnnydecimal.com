// == Interfaces ==============================================================
interface JDLine {
  text: string;
  classes?: string;
  options?: Options;
}
export interface Options {
  classListForEveryLine?: string;
  ignoreLine?: IgnoreLines;
}
interface IgnoreLines {
  [key: number]: boolean;
}
interface TextAsArrayOfStrings extends Array<string> {}

/* == textToArrayOfStrings ================================================= */
const textToArrayOfStrings = (text: string): TextAsArrayOfStrings => {
  let textAsArrayOfStrings = text
    .split("\n")
    .filter((jdLine) => jdLine.trim() !== "");

  return textAsArrayOfStrings;
};

/* == constructArrayToRender ==================================================
 *
 * Make the array to render. From now on we'll do things, but always to an
 * array that is this shape.
 */
const constructArrayToRender = (
  textAsArrayOfStrings: TextAsArrayOfStrings,
  classArray: string[],
  options?: Options
): Array<JDLine> => {
  const arrayToRender: Array<JDLine> = [];

  // Create the basic array.
  textAsArrayOfStrings.forEach((line, i) => {
    arrayToRender.push({
      text: line,
      classes: classArray[i] || "", // prevents undefined later; harmless
      options: options, // each line gets a copy of options for later
    });
  });

  return arrayToRender;
};

/* == classListForEveryLine ============================================
 *
 * If options contains a `classListForEveryLine`, add it to the existing class
 * list. Otherwise, just return the same array.
 */
const classListForEveryLine = (arrayToRender: Array<JDLine>): Array<JDLine> => {
  return arrayToRender.map((line) => {
    if (line.options && line.options.classListForEveryLine) {
      return {
        text: line.text,
        classes: line.classes + " " + line.options.classListForEveryLine,
        options: line.options,
      };
    } else {
      return line;
    }
  });
};

/* == processTextForJD ========================================================
 *
 * We have `arrayToRender` which contains objects with a text property. Now we
 * parse those values and look for JD-like strings. If we find them, we change
 * the text value to be HTML that will render in a JD style.
 *
 * In <JDBlock /> the text value is rendered as raw HTML.
 */
const processTextForJD = (arrayToRender: JDLine[]): JDLine[] => {
  // We start with an array of JDLine...

  // Create a new array by mapping over each item in the input array
  return arrayToRender.map((line, i) => {
    // If item.options.ignoreLine[n] matches map.index, return item as is
    if (line.options?.ignoreLine && line.options.ignoreLine[i]) {
      return line;
    } else {
      // Detect whether this line is a AC.ID
      switch (true) {
        // Area -- hacky as, make me better
        case /^\d\d-\d\d /.test(line.text):
          return {
            text: `<span>${line.text.substring(
              0,
              5
            )}</span><span class="area-title">${line.text.substring(6)}</span>`,
            classes: line.classes + " area",
            options: line.options,
          };
        // Category
        case /^\d\d /.test(line.text.trim()):
          return {
            text: `<span class="category-indent"></span><span class="category-number-and-title"><span>${line.text
              .trim()
              .substring(
                0,
                2
              )}&nbsp;</span><span class="category-title">${line.text
              .trim()
              .substring(3)}</span></span>`,
            classes: line.classes + " category",
            options: line.options,
          };
        // ID
        case /^\d\d\.\d\d /.test(line.text.trim()):
          return {
            text: `<span class="id-indent"></span><span>${line.text
              .trim()
              .substring(0, 5)}</span><span class="id-title">${line.text
              .trim()
              .substring(6)}</span>`,
            classes: line.classes + " id",
            options: line.options,
          };
        default:
          return line;
      }
      // And add a class to it accordingly
    }
  });

  // Otherwise do some processing on item.text and return a new item

  // ...and we return a potentially updated array of JDLine.
  return returnArray;
};

/**
 * == processJDBlock ==========================================================
 *
 * Back in JDBlock.astro we only want to import & call one function. It's this
 * one, which then handles everything else.
 */
export const processJDBlock = (
  text: string,
  classArray: string[],
  options?: Options
): Array<JDLine> => {
  const textAsArrayOfStrings = textToArrayOfStrings(text);

  const array1 = constructArrayToRender(
    textAsArrayOfStrings,
    classArray,
    options
  );

  const array2 = classListForEveryLine(array1);

  const array3 = processTextForJD(array2);

  return array3;
};
