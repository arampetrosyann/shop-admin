import { useMemo, useCallback } from "react";
import { useHistory } from "react-router-dom";

const useCategory = () => {
  const history = useHistory();

  const onNodeClick = useCallback(({ id }) => {
    history.push(`/category/${id}`);
  }, []);

  const data = useMemo(() => {
    return {
      id: "6asda6D61236ASDFAS",
      name: "Նվեր",
      children: [
        {
          id: "6asda6D61236",
          name: "Գիրք",
          children: [
            {
              id: "6asda6asdasdDDFAS",
              name: "Գեղարվեստական",
            },
            {
              id: "6asd22226asdasdDDFaAS",
              name: "Ինֆորմացիոն",
            },
            {
              id: "6asd22226a4444sdDDFaAS",
              name: "Մոտիվացնող",
            },
          ],
        },
        {
          id: "6asd222232323dDDFaAS",
          name: "Բաժակ",
          children: [
            {
              id: "6as1231dasdAS",
              name: "Մեծ",
              children: [
                {
                  id: "6as123111111dasdAS",
                  name: "Գինու",
                },
                {
                  id: "6as123111442221dasdAS",
                  name: "Թեյի",
                },
              ],
            },
            {
              id: "6as123111123fffffff44aaaasdAS",
              name: "Փոքր",
            },
          ],
        },
        {
          id: "6as12311112666tttarrraaaasdAS",
          name: "Նվեր քարտ",
          children: [
            {
              id: "6as123111222cccccraaaasdAS",
              name: "10.000Դ",
            },
            {
              id: "6as12311xxx22111raaaasdAS",
              name: "20.000Դ",
            },
          ],
        },
      ],
    };
  }, []);

  return { data, onNodeClick };
};

export default useCategory;
