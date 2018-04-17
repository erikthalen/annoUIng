import ELEMENTS from './domElements';
import CATEGORIES from './libCategories';

const populateObj = (arrOfElements, arrOfCategories) => {
  const obj = {}

  arrOfCategories
    .map(category => {
      obj[category] = arrOfElements
        .filter(e => e.classList.contains(category))
    })

  return obj
}

export default populateObj(ELEMENTS, CATEGORIES)
