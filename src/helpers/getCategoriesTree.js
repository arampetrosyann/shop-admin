const getCategoriesTree = (categories = []) => {
  const tree = [];
  const categoriesObj = {};

  for (const { id, title, ...rest } of categories) {
    categoriesObj[id] = { id, name: title, ...rest };

    categoriesObj[id].children = [];
  }

  for (const key in categoriesObj) {
    const category = categoriesObj[key];

    if (category.parent) {
      categoriesObj[category.parent].children.push(category);
    } else {
      tree.push(category);
    }
  }

  return tree;
};

export default getCategoriesTree;
