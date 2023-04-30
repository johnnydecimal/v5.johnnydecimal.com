/**
 * Is the first (child) item in scope of the second (parent)?
 *
 * e.g. '11' is in scope of '10-19' but not of '20-29'.
 *      '21.11' is in scope of '21' but not of '22'.
 *
 * An item is in scope of itself.
 *
 * Expects `child` and `parent` to be JD numbers (as strings):
 * - `10-19`, or
 * - `11`, or
 * - `11.11`
 *
 * Change the language so this makes sense.
 *
 * When we are creating the wyab for [this type of page], should [this type of
 * item] on the wyab have a wyab-line?
 *
 * child => 'creatingWyabForThisTypeOfPage`
 * parent => 'wyabItemIsThisType'
 */

import jdDetect from "./jdDetect";

const jdInScope = (creatingWyabForThisPage: string, wyabItem: string) => {
  const creatingWyabForThisPageACID = jdDetect(creatingWyabForThisPage);
  const wyabItemACID = jdDetect(wyabItem);

  /**
   * If wyabItemIs{Area}, only the first digit of the numbers needs to match.
   */

  if (wyabItem === "area") {
    return creatingWyabForThisPage.substring(0, 1) === wyabItem.substring(0, 1);
  }

  /**
   * if wyabItemIs{Category}...
   *
   */

  if (wyabItem === "category") {
    // We're never in scope if creatingWyabFor{Area}
    if (creatingWyabForThisPage === "area") return false;
  } else {
    /**
     * Otherwise, if the category number for creatingWyab >= the category number
     * for wyabItem, AND the first digit matches, we're in scope.
     */

    // Grab the category numbers.
    const creatingWyabCategory = creatingWyabForThisPage
      .split("/")[2]
      .substring(0, 2);
    const wyabItemCategory = wyabItem.split("/")[2].substring(0, 2);
    // Test the criteria.
    return (
      creatingWyabCategory === wyabItemCategory &&
      creatingWyabCategory.substring(0, 1) === wyabItemCategory.substring(0, 1)
    );
  }
};

export { jdInScope as default };
