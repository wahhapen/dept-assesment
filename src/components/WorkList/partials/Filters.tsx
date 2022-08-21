import styled from "@emotion/styled";
import React from "react";
import { colors, mqSimple, sizes } from "../../../consts";
import { ComboboxSelect } from "./ComboboxSelect";

export interface IProps {
  setCategoryFilter: (category: string) => void;
  setIndustryFilter: (category: string) => void;
  industryList: string[];
  categoryList: string[];
}

const categoryLabel = "Show me";
const industriesLabel = "in";

export const Filters: React.FC<IProps> = ({
  setCategoryFilter,
  setIndustryFilter,
  industryList,
  categoryList,
}) => {
  return (
    <FiltersStyled>
      <FilterRow>
        <FilterLabel>{industriesLabel}</FilterLabel>
        <ComboboxSelect changeValue={setIndustryFilter} list={industryList} />
      </FilterRow>
      <FilterRow>
        <FilterLabel>{categoryLabel}</FilterLabel>
        <ComboboxSelect changeValue={setCategoryFilter} list={categoryList} />
      </FilterRow>
    </FiltersStyled>
  );
};

const FilterRow = styled.div`
  display: flex;
  align-content: center;
  gap: ${sizes.size5};
`;
const FilterLabel = styled.span`
  opacity: 0.5;
`;
const FiltersStyled = styled.div`
  display: flex;

  align-content: center;
  justify-content: space-between;
  gap: ${sizes.size32};
  ${mqSimple({
    color: [`${colors.white}`, `${colors.black}`],
    flexDirection: ["row", "row-reverse"],
    backgroundColor: [`${colors.black}`, `${colors.white}`],
    padding: [
      `${sizes.size16} ${sizes.size32}`,
      `${sizes.size32} ${sizes.size32}`,
    ],
  })}
`;
