import React, { useEffect } from "react";
import {
  Combobox,
  ComboboxItem,
  ComboboxList,
  Select,
  SelectItem,
  SelectPopover,
  useComboboxState,
  useSelectState,
} from "ariakit";
import styled from "@emotion/styled";
import { colors, mqSimple, sizes } from "../../../consts";

interface IProps {
  list: string[];
  filterLabel: string;
  changeValue: (value: string) => void;
}

export const ComboboxSelect: React.FC<IProps> = ({
  list,
  filterLabel,
  changeValue,
}) => {
  const combobox = useComboboxState({ list, sameWidth: false });
  // value and setValue shouldn't be passed to the select state because the
  // select value and the combobox value are different things.
  const { value, setValue, ...selectProps } = combobox;
  const select = useSelectState({ ...selectProps });

  useEffect(() => {
    changeValue(select.value as string);
  }, [select.value]);

  // Resets combobox value when popover is collapsed
  if (!select.mounted && combobox.value) {
    combobox.setValue("");
  }

  return (
    <ComboboxStyled>
      {/* <SelectLabel state={select}>Favorite fruit</SelectLabel> */}
      <Select aria-label={filterLabel} state={select} className="select" />
      <SelectPopover state={select} composite={false} className="popover">
        <div className="combobox-wrapper">
          <Combobox
            state={combobox}
            autoSelect
            placeholder="Search..."
            className="combobox"
          />
        </div>
        <ComboboxList state={combobox}>
          {combobox.matches.map((value, i) => (
            <ComboboxItem key={value + i} focusOnHover className="select-item">
              {(props) => <SelectItem {...props} value={value} />}
            </ComboboxItem>
          ))}
        </ComboboxList>
      </SelectPopover>
    </ComboboxStyled>
  );
};

const ComboboxStyled = styled.div`
  z-index: 100;
  .select {
    position: relative;
    padding: 0;
    border: none;
    background-color: transparent;
    color: currentColor;
    cursor: pointer;
    &:hover {
      color: ${colors.grey};
    }
    &:after {
      content: "";
      width: 100%;
      height: 1px;
      position: absolute;
      left: 0;
      bottom: 0;
      ${mqSimple({
        borderBottom: ["none", `1px solid ${colors.black}`],
      })}
    }
    svg {
      display: none;
    }
  }
  .popover {
    padding: ${sizes.size10};
    border: 1px solid ${colors.grey};
    background-color: ${colors.black2};
    border-radius: ${sizes.size5};
  }
  .select-item {
    margin: ${sizes.size5};
    padding: ${sizes.size5};
    text-transform: capitalize;
    color: ${colors.white};
    cursor: pointer;
    &:hover {
      color: ${colors.grey};
    }
  }
`;
